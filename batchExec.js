var fs = require('fs');
const _ = require('lodash');
var fse = require('fs-extra');
var fsReaddir = require('fs-readdir');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var process = require('process');
var express = require('express');
var app = express();
var argv = require('optimist').argv;
var jsonfile = require('jsonfile');
var RSVP = require('rsvp');

var featureFilesArray = [];
let outerPromise = [];

var chunk = argv.batch;

var _env = argv.env;

var files = fs.readdirSync('./features');
console.log('files:', files);
//start new
featureFilesArray = _.reduce(files, function (acc, x) {
    console.log('acc:', acc);
    console.log('x:', x);
    if (x.includes(".feature") && x != undefined) {
        acc.push(x);
    }
    return acc
}, []);

var noOfChunk = null;
if (featureFilesArray.length) {
    featureFilesArray = _.chunk(featureFilesArray, chunk);

    noOfChunk = featureFilesArray.length;
    //[[a,b,d,c],[a,d,s,f]]
}

console.log('noOfChunk :', noOfChunk);

// while(featureFilesArray.length!=0) {
recurssiveFunc(featureFilesArray);
// }


function recurssiveFunc(featureFilesArray) {

    // outerPromise.push(new RSVP.Promise(function (res, rej) {

    // outerPLen = outerPromise.length;

    let fistFourPromises = [];
    let fistFourFeatureFilesArray = featureFilesArray.splice(0, 1)[0];

    if (fistFourFeatureFilesArray.length) {
        var postmanProcess = [];
        // for (var i = 0; i < fistFourFeatureFilesArray.length; i++) {
        fistFourFeatureFilesArray.forEach((featureFileName) => {
            console.log('\n\nfistFourFeatureFilesArray :', featureFileName);
            console.log('\nnode index.js -j 4444 -k localhost -b vmConfig -g true -e '+_env+' -d no -t @sanity -f ./features/' + featureFileName);

            fistFourPromises.push(new RSVP.Promise(function (fulfill, reject) {
                innerLen = fistFourPromises.length;
                exec('node index.js -j 4444 -k localhost -b vmConfig -g true -e '+_env+' -d no -t @sanity -f ./features/' + featureFileName, function (err, out, code) {
                    if (err) {
                        console.log('completed with Error', JSON.stringify(err));
                        fulfill();
                    } else {
                        fulfill();
                    }
                    // process.stderr.write(err);
                    // process.stdout.write(out);
                    // process.exit(code);
                    console.log('out :', out);
                });
            }));
        });
        // }
    }

    Promise.all(fistFourPromises).then(function (result) {
        console.info("in inner promiseAll", featureFilesArray.length);
        if (featureFilesArray.length) {
            console.log("in inner promiseAll111111111111");
            recurssiveFunc(featureFilesArray);
        }
    }).catch(function (error) {
        console.error("in inner promiseAll error: ", error);
        if (featureFilesArray.length) {
            recurssiveFunc(featureFilesArray);
        }
    });
    // }));
}

// function abc() {
//     console.log('33333outerPLen :', outerPLen);
//     // setTimeout(() => {
//     if (outerPLen == noOfChunk) {
//         Promise.all(outerPromise).then(function (outerResult) {
//             console.info("in outer promiseAll");
//             if (outerResult.length) {
//                 execSync('node uiAutoReporter.js --env '+_env+' --pack Sanity_ParRun', { stdio: [0, 1, 2] });
//             }
//         }).catch(function (error) {
//             console.error("in outer promiseAll", error);
//             execSync('node uiAutoReporter.js --env '+_env+' --pack Sanity_ParRun', { stdio: [0, 1, 2] });
//         });
//     }
// }
// })


