var express = require('express');
var app = express();
var execSync = require('child_process').execSync;
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var fork = require('child_process').fork;
var path = require('path');
var process = require('process');
//var express = require('express');
var dateFormat = require('dateformat');
var jsonfile = require('jsonfile');
var RSVP = require('rsvp');
var argv = require('optimist').argv;
var appPort = null;
console.log('argv.port', argv.port);
if (argv.port != 'undefined') {
    var appPort = argv.port;
}

//var finalResultPath = 'C:/Automation_Suite_API/test/POSTMANAPISuite/finalResult.json';
var uiSlackJson = './reportDashboard/slack.json';//'./test/POSTMANAPISuite/finalResult.json';
var date = new Date();
var msUI = "", msVerUI = "";

function printExecutionDetails(envSel, suiteToRun, feature) {
    console.log("\n---------------Initiating Automation Suite Execution-----------------\n");
    if (envSel) {
        console.log("Execution on Environment : ", envSel);
        if (suiteToRun) {
            console.log("Suite to Run : ", suiteToRun);
            if (feature) {
                console.log("Run For : ", feature);
            }
        }
    }
}

function executeZAP() {

    process.chdir('C:/Program Files/OWASP/Zed Attack Proxy/');
    console.log('ZAP directory: ' + process.cwd());
    console.log('App Running at :', __dirname);
    //const bat = spawn('cmd.exe', []);
    // var a = exec('zap.bat -session search.session -last_scan_report C:/ZAPReports/Search/search.html');
    var a = exec('zap.bat -session search.session -last_scan_report C:/ZAPReports/Search/search.html');
    setTimeout(function () {
        console.log('2')
        a.kill();
        process.chdir(__dirname);
        exec('node ZAPReporter.js');
        console.log('3')

    }, 10000)
    console.log('1')
    //    exec('node ZAPReporter.js', { stdio: [0, 1, 2] }, function (err, out, code) {

    // , function (err, out, code) {
    //         if (err) {
    //             console.log('Zap completed with Error', JSON.stringify(err));
    //         } else {
    //             process.chdir(__dirname);
    //             console.log('Chdir directory1: ' + process.cwd());

    //             exec('node ZAPReporter.js', { stdio: [0, 1, 2] }, function (err, out, code) {
    //                 process.chdir(__dirname);
    //                 console.log('Chdir directory2: ' + process.cwd());
    //                 console.log('App Running at :', __dirname);
    //             });
    //             console.log('Zap completed Successfully');
    //         

    //const bat = spawn('cmd.exe', ['cd C:\Program Files\OWASP\Zed Attack Proxy\', 'zap.bat - session search.session - last_scan_report C:\ZAPReports\Search\search.html']);
}

function pullFromGit() {
    console.log('git clone - b Automation_Suite_API https://$GITHUB_TOKEN@github.com/circledev/kensa.git');

    //var child2 = spawn('java', ['-jar', 'selenium-server-standalone-2.53.1.jar', '-Dwebdriver.chrome.driver=chromedriver.exe']);
    //child2.stdout.on('data', function (data) {
    //    process.stdout.write(data.toString());
    //});
    //child2.stderr.on('data', function (data) { process.stdout.write(data.toString()); });
    //child2.on('close', function (code) {
    //    console.log("Selenium Driver Exited " + code);
    //});
}
function compileGulp() {
    console.log("\n---------------Gulp Compile-----------------\n");
    execSync('gulp compile', { stdio: [0, 1, 2] });
}

function setHook(envSel) {
    console.log("\n---------------Setting up Slack Hook for " + envSel + "-----------------\n");
    var slackHook = "https://hooks.slack.com/services/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";
    //automationQa var slackHook = "https://hooks.slack.com/services/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";
    if (envSel == "auto1") {
        slackHook = "https://hooks.slack.com/services/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";
    }
    else if (envSel == "dev1") {
        //slackHook = "https://hooks.slack.com/services/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";
        slackHook = "https://hooks.slack.com/services/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";
    }
    else if (envSel == "qc2") {
        slackHook = "https://hooks.slack.com/services/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";
    }
    else if (envSel == "demo1") {
        slackHook = "https://hooks.slack.com/services/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";
    }
    else {
        return;
    }
    return slackHook;
}

var port = 3232;

if (appPort != null) {
    port = appPort;
    console.log('port set to : ', port);
}

app.listen(port, function () {

    console.log('----------------New Automation Suite Server listening on port ' + port + ' ----------------------\n');
});

app.get('/', function (req, res) {
    res.sendfile('packImages/welcome.jpg');
    //res.setHeader('Content-Type', 'application/json');
    //res.send('\n--------------------Welcome to Automation Suite server----------------------\n\n\n' +
    //    '\t1) To Run Sanity or End-to-End UI automation Suites : \n\n' +
    //    '\t\tlocalhost:3131/envName/<environment>/suite/<suiteToRun> \n\n' +
    //    '\t(<environment> = Environment on which you want to run the UI automation , <suite> = Which Suite you want to run)\n\n\n'+
    //    '\t2) To Run Specific feature from some pack from UI automation Suite : \n\n' +
    //    '\t\tlocalhost:3131/envName/<environment>/suite/<suiteToRun>/feature/<featureName> \n\n' +
    //    '\t(<environment> = Environment to run the UI automation ,<suite> = pack to run the feature, <featureName> = Feature to Run)\n\n\n'
    //    );
    // executeZAP();

});

app.get('/home', function (req, res) {
    //res.setHeader('Content-Type', 'application/json');
    //res.send('\n--------------------Welcome to Automation Suite server----------------------\n\n\n' +
    //    '\t1) To Run Sanity or End-to-End UI automation Suites : \n\n' +
    //    '\t\tlocalhost:3131/envName/<environment>/suite/<suiteToRun> \n\n' +
    //    '\t(<environment> = Environment on which you want to run the UI automation , <suite> = Which Suite you want to run)\n\n\n'+
    //    '\t2) To Run Specific feature from some pack from UI automation Suite : \n\n' +
    //    '\t\tlocalhost:3131/envName/<environment>/suite/<suiteToRun>/feature/<featureName> \n\n' +
    //    '\t(<environment> = Environment to run the UI automation ,<suite> = pack to run the feature, <featureName> = Feature to Run)\n\n\n'
    //    );
    res.sendfile('packImages/regressionAll.jpg');
});
//-----------------------------------------------------------------------------------------------------------------
app.get('/envName/:env/suite/:suit/mS/:microservice/ver/:version', function (req, res) {
    var envSel = req.params.env;
    var suiteToRun = req.params.suit;
    var mS = req.params.microservice;
    var mSver = req.params.version;
    //////////
    process.chdir(__dirname);
    console.log('Cwd: ' + process.cwd());
    var slackHook = setHook(envSel);
    printExecutionDetails(envSel, suiteToRun, mSver);
    if (envSel) {
        if (suiteToRun) {
            if (suiteToRun == 'postmanApi') {
                process.chdir('/Automation_Suite_API/test/POSTMANAPISuite');
                console.log('API directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                date = new Date();
                res.send('\n---------------Executing API SUITE on ' + envSel + '.onesc.co.uk' + '------------\n');
                console.log('\n---------------Executing API SUITE on ' + envSel + '.onesc.co.uk' + '------------\n');
                console.log('mocha InputSheet.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver + ' --swag yes & node  ./node_modules/newman/bin/newman -c APITestSuite.json -H Report.html -o Results.json & node apiSlackReporter.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver + ' & mocha RabbitMQDLQ.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver);
                execSync('mocha InputSheet.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver + ' --swag yes & node  ./node_modules/newman/bin/newman -c APITestSuite.json -H Report.html -o Results.json & node apiSlackReporter.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver + ' & mocha RabbitMQDLQ.js --env ' + envSel + ' --mS ' + mS + ' --msVer ' + mSver, { stdio: [0, 1, 2] });
                var apiFinalResult = jsonfile.readFileSync(finalResultPath);
                console.log('\nApiFinalResult JSON : ', apiFinalResult, '\n');
                var responseStatus = JSON.parse(JSON.stringify(apiFinalResult.SummaryApi.status));
                console.log('\nResponseStatus : ', responseStatus);
                console.log('Cwd: ' + process.cwd());
                process.chdir(__dirname);
                console.log('Updated directory: ' + process.cwd());
            }
            else if (suiteToRun == 'finalResult') {
                process.chdir('/Automation_Suite_API/test/POSTMANAPISuite');
                console.log('API directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                console.log('\n---------------Sending Final Results for ' + mS + '(' + mSver + ')------------\n');
                var apiFinalResult = jsonfile.readFileSync(finalResultPath);
                console.log('\nApiFinalResult JSON : ', apiFinalResult, '\n');
                var responseStatus = JSON.parse(JSON.stringify(apiFinalResult.SummaryApi.status));
                console.log('\ResponseStatus : ', responseStatus);
                date = new Date();
                console.log('If Resolved : ', apiFinalResult.Microservice === mS && apiFinalResult.MsVersion === mSver && apiFinalResult.SummaryApi.lastRunDate === dateFormat(date, "dd/mm/yyyy"));
                console.log('Act Values:     ', apiFinalResult.Microservice, apiFinalResult.MsVersion, apiFinalResult.SummaryApi.lastRunDate);
                console.log('Request Values: ', mS, mSver, dateFormat(date, "dd/mm/yyyy"));
                msUI = mS;
                msVerUI = mSver;
                if (apiFinalResult.Microservice === mS && apiFinalResult.MsVersion === mSver && apiFinalResult.SummaryApi.lastRunDate === dateFormat(date, "dd/mm/yyyy")) {
                    if (responseStatus === "OK") {
                        console.log('In true');
                        res.send('TRUE');
                    }
                    else {
                        console.log('In first false');
                        res.send('FALSE');
                    }
                }
                else {
                    console.log('In 2nd false');
                    res.send('FALSE');
                }
                console.log('Cwd: ' + process.cwd());
                process.chdir(__dirname);
                console.log('Updated directory: ' + process.cwd());
            }
            else {
                console.log('\nPlease Provide Valid Suite to Run !!');
            }
        }
        else {
            res.send('\nPlease Provide a Suite Value !!');
        }
    }
    else {
        res.send('\nPlease Provide a Environment!!');
    }
});

app.get('/envName/:env/uisuite/:suit/mS/:microservice/ver/:version', function (req, res) {
    var envSel = req.params.env;
    var suiteToRun = req.params.suit;

    msUI = req.params.microservice;
    msVerUI = req.params.version;

    //var featureToRun = req.params.feat;
    //var execType = req.params.type;
    //compileGulp();
    //printExecutionDetails(' envSel :', envSel, ' suiteToRun :', suiteToRun, ' msUI:', msUI, ' msVerUI : ', msVerUI);
    console.log(' envSel :', envSel, ' suiteToRun :', suiteToRun, ' msUI:', msUI, ' msVerUI : ', msVerUI);


    if (envSel) {
        //Initial Url Setup For new Environment
        //execSync('node setupInit.js --env ' + envSel, { stdio: [0, 1, 2] });
        if (suiteToRun) {
            if (suiteToRun == 'New') {
                var mS = msUI;
                var mSver = msVerUI;
                
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                //console.log('\n-------------Executing ' + featureToRun + '.feature ' + ' from ' + suiteToRun + ' pack ' + '----------------------');
                console.log('\nFor microservice : ', msUI, ' ( ' + msVerUI + ' )');

                res.send('\n-------------Executing ' + ' New UI Suite ' + 'from ' + suiteToRun + ' pack ' + '' + '----------------------');
                var featureName = '';

                var promises = [];

                function executeFeature(featureName) {
                    console.log('\n\n\n executing default for' + featureName + ' ui feature');

                    console.log('node index.js -s ./step-definitions -r ./reports -b chrome --env ' + envSel + ' -t @' + featureName + ' -f ./features/');//'& node ./uiAutoReporter.js --pack ' + featureName + '_(' + msUI + '_' + msVerUI + ') --env auto1' + ' --feat ' + featureName);
                    promises.push(new RSVP.Promise(function (fulfill, reject) {
						// exec('node index.js -s ./step-definitions -r ./reports -b chrome --env auto1 -f ./features/' + featureName + '.feature ', function (err, out, code) {
                        //     if (err) {
                        //         console.log(featureName + 'completed with Error', JSON.stringify(err));
                        //         fulfill();
                        //     } else {
                        //         fulfill();
                        //     }
                        // });
                        execSync('node index.js -s ./step-definitions -r ./reports -b chrome --env ' + envSel + ' -t @' + featureName + ' -f ./features/', { stdio: [0, 1, 2] }).then(function () {
                            fulfill();
                        });
                    }));
                }

                if (mS.includes('webclient')) {
                    executeFeature(mS);
                }
                else if (mS.includes('personalinformation')) {
                    executeFeature(mS);
                }

                // Promise.all(promises).then(function (res, rej) {
                //     console.log('Exec Completed : P\n', 'node ./uiAutoReporter.js --pack ' + ' (' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                //     execSync('node ./uiAutoReporter.js --pack ' + '(' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                // }).catch(function (error) {
                //     console.log('Exec Completed : E\n', 'node ./uiAutoReporter.js --pack ' + ' (' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                //     execSync('node ./uiAutoReporter.js --pack ' + '(' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                // });

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P\n', 'node ./uiAutoReporter.js --pack ' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                    execSync('node ./uiAutoReporter.js --pack ' + '' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E\n', 'node ./uiAutoReporter.js --pack ' + '' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                    execSync('node ./uiAutoReporter.js --pack ' + '' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                });
                //--------------------------------

                console.log('Cwd: ' + process.cwd());
                process.chdir(__dirname);
                console.log('Updated directory: ' + process.cwd());
            }
            else if (suiteToRun == 'uistockton') {
                //process.chdir('/UIAuto_fw040117');
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                console.log('\n\n\n-------------Executing ' + ' StocktonFlow ' + 'For microservice : ', msUI, ' ( ' + msVerUI + ' )----------------------');
                //console.log('\nFor microservice : ', msUI, ' ( ' + msVerUI + ' )');
                //node index.js -s ./step-definitions -r ./reports --env qc2 -f ./features/Flows/StocktonDemo.feature & node uiAutoReporter.js --env qc2 --pack Stockton

                res.send('-------------Executing ' + ' StocktonFlow ' + 'For microservice : ', msUI, ' ( ' + msVerUI + ' )----------------------');
                console.log('node index.js -s ./step-definitions -r ./reports -b chrome --env ' + envSel + ' -f ./features/Flows/StocktonDemo.feature & node ./uiAutoReporter.js --pack Stockton ' + '_(' + msUI + '_' + msVerUI + ') --env ' + envSel);
                execSync('node index.js -s ./step-definitions -r ./reports -b chrome --env ' + envSel + ' -f ./features/Flows/StocktonDemo.feature & node ./uiAutoReporter.js --pack Stockton ' + '_(' + msUI + '_' + msVerUI + ') --env ' + envSel);

                console.log('Cwd: ' + process.cwd());
                process.chdir(__dirname);
                console.log('Updated directory: ' + process.cwd());
            }
            else if (suiteToRun == 'uiresult') {

                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);

                var uiFinalResult = jsonfile.readFileSync(uiSlackJson);

                //console.log('\nuiFinalResult JSON : ', uiFinalResult, '\n');

                var mS = msUI;
                var mSver = msVerUI;
                console.log('\n---------------Sending UI Results for ' + mS + '(' + mSver + ')------------\n');
                var responseStatus = JSON.parse(JSON.stringify(uiFinalResult[envSel][mS].status));
                var msAvl = JSON.stringify(uiFinalResult).includes(mS);
                console.log('\ResponseStatus : ', responseStatus, msAvl);

                date = new Date();
                console.log('If Resolved : ', msAvl == true && uiFinalResult[envSel][mS].release === mSver && uiFinalResult[envSel][mS].lastRunDate === dateFormat(date, "dd/mm/yyyy"));
                console.log('Act Values:     ', msAvl, uiFinalResult[envSel][mS], uiFinalResult[envSel][mS].release, uiFinalResult[envSel][mS].lastRunDate);
                console.log('Request Values: ', mS, mSver, dateFormat(date, "dd/mm/yyyy"));

                if (msAvl == true && uiFinalResult[envSel][mS].release === mSver && uiFinalResult[envSel][mS].lastRunDate === dateFormat(date, "dd/mm/yyyy")) {
                    if (responseStatus === "OK") {
                        console.log('In true');
                        res.send('TRUE');
                    }
                    else {
                        console.log('In first false');
                        res.send('FALSE');
                    }
                }
                else {
                    console.log('In 2nd false');
                    res.send('FALSE');
                }
                console.log('Cwd: ' + process.cwd());
                process.chdir(__dirname);
                console.log('Updated directory: ' + process.cwd());
            }
            process.chdir(__dirname);
            console.log('Updated directory: ' + process.cwd());
        }
        else {
            res.send('\nPlease Provide a Suite To Run Value !!');
        }
    }
    else {
        res.send('\nPlease Provide a Environment!!');
    }
});

app.get('/envName/:env/uisuite/:suit/browser/:browser/level/:level', function (req, res) {
    var envSel = req.params.env;
    var suiteToRun = req.params.suit;
    var level = req.params.level;
    var browser = req.params.browser;

    console.log(' envSel :', envSel, ' suiteToRun :', suiteToRun, ' level:', level);

    if (envSel) {
        //Initial Url Setup For new Environment
        //execSync('node setupInit.js --env ' + envSel, { stdio: [0, 1, 2] });
        if (suiteToRun) {
            if (suiteToRun == 'Sanity') {
                //process.chdir('/UIAuto_fw040117');
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                var promises = [];


                console.log('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                res.send('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                promises.push(new RSVP.Promise(function (fulfill, reject) {
                    console.log('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -f  ./features/ -t @' + level);
                    execSync('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -f  ./features/ -t @' + level, { stdio: [0, 1, 2] }).then(function () {
                        fulfill();
                    });
                }));

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                });

                //node index.js -s ./step-definitions -r ./reports --env auto1 -d no -f  ./features/ -t @sanity & node uiAutoReporter.js --env auto1 --pack Sanity
                //node index.js -s ./step-definitions -r ./reports --env '+envSel+' -d no -f  ./features/ -t @'+level+' && node uiAutoReporter.js --env '+envSel+' --pack Sanity_'+level

                console.log('---------------Cwd: ' + process.cwd());

            } if (suiteToRun == 'Sanity') {
                //process.chdir('/UIAuto_fw040117');
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                var promises = [];


                console.log('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                res.send('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                promises.push(new RSVP.Promise(function (fulfill, reject) {
                    console.log('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -f  ./features/ -t @' + level);
                    execSync('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -f  ./features/ -t @' + level, { stdio: [0, 1, 2] }).then(function () {
                        fulfill();
                    });
                }));

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                });

                //node index.js -s ./step-definitions -r ./reports --env auto1 -d no -f  ./features/ -t @sanity & node uiAutoReporter.js --env auto1 --pack Sanity
                //node index.js -s ./step-definitions -r ./reports --env '+envSel+' -d no -f  ./features/ -t @'+level+' && node uiAutoReporter.js --env '+envSel+' --pack Sanity_'+level

                console.log('---------------Cwd: ' + process.cwd());

            }

            process.chdir(__dirname);
            console.log('Updated directory: ' + process.cwd());
        }
        else {
            res.send('\nPlease Provide a Suite To Run Value !!');
        }
    }
    else {
        res.send('\nPlease Provide a Environment!!');
    }
});

app.get('/envName/:env/uisuite/:suit/browser/:browser/level/:level/serv/:server/port/:port', function (req, res) {
    var envSel = req.params.env;
    var suiteToRun = req.params.suit;
    var level = req.params.level;
    var browser = req.params.browser;
    var server = req.params.server;
    var port = req.params.port;

    console.log(' envSel :', envSel, ' suiteToRun :', suiteToRun, ' level:', level);

    if (envSel) {
        //Initial Url Setup For new Environment
        //execSync('node setupInit.js --env ' + envSel, { stdio: [0, 1, 2] });
        if (suiteToRun) {
            if (suiteToRun == 'Sanity') {
                //process.chdir('/UIAuto_fw040117');
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                var promises = [];

                console.log('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                res.send('\n-------------Executing ' + suiteToRun + ' for level ' + level + '---------------------- \nnode index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/ -t @' + level);

                promises.push(new RSVP.Promise(function (fulfill, reject) {
                    console.log('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/ -t @' + level);
                    execSync('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/ -t @' + level, { stdio: [0, 1, 2] }).then(function () {
                        fulfill();
                    });
                }));

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E : \nnode uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + level, { stdio: [0, 1, 2] });
                });

                //node index.js -s ./step-definitions -r ./reports --env auto1 -d no -f  ./features/ -t @sanity & node uiAutoReporter.js --env auto1 --pack Sanity
                //node index.js -s ./step-definitions -r ./reports --env '+envSel+' -d no -f  ./features/ -t @'+level+' && node uiAutoReporter.js --env '+envSel+' --pack Sanity_'+level

                console.log('---------------Cwd: ' + process.cwd());

            }
            else if (suiteToRun.includes('webclient') || suiteToRun.includes('personalinformation')) {
                var msUI = suiteToRun, msVerUI = level;

                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);

                console.log('\nFor microservice : ', msUI, ' ( ' + msVerUI + ' )');

                res.send('\n-------------Executing For ' + suiteToRun + '( ' + level + ' )----------------------');

                var promises = [];

                function executeFeature(tag) {
                    console.log('\n\n---------------executing for @l1' + tag + '-----------------');

                    if (browser == 'chrome') {
                        promises.push(new RSVP.Promise(function (fulfill, reject) {
                            console.log('node index.js -s ./step-definitions -r ./reports -d no -b chrome --env ' + envSel + ' -t @l1' + tag + ' -f ./features/');
                            execSync('node index.js -s ./step-definitions -r ./reports -d no -b chrome --env ' + envSel + ' -t @l1' + tag + ' -f ./features/', { stdio: [0, 1, 2] }).then(function () {
                                fulfill();
                            });
                        }));
                    }
                    else if (browser == 'vmConfig') {
                        promises.push(new RSVP.Promise(function (fulfill, reject) {
                            console.log('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -t @l1' + tag + ' -f ./features/');
                            execSync('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -t @l1' + tag + ' -f ./features/', { stdio: [0, 1, 2] }).then(function () {
                                fulfill();
                            });
                        }));
                    }
                }

                executeFeature(msUI);

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P\n', 'node ./uiAutoReporter.js --pack ' + ' (' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                    execSync('node ./uiAutoReporter.js --pack ' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E\n', 'node ./uiAutoReporter.js --pack ' + ' (' + msUI + '_' + msVerUI + ') --env auto1 --ms ' + msUI + ' --msver ' + msVerUI);

                    execSync('node ./uiAutoReporter.js --pack ' + msUI + '_' + msVerUI + ' --env auto1 --ms ' + msUI + ' --msver ' + msVerUI, { stdio: [0, 1, 2] });
                });
                //--------------------------------

                console.log('---------------Cwd: ' + process.cwd());

            }
            else if (level == 'L1' || level == 'L2' || level == 'L3' || level == 'L4') {
                //process.chdir('/UIAuto_fw040117');
                //process.chdir('/UI_Automation_New');
                console.log('Current directory: ' + process.cwd());
                console.log('Server Dirname :', __dirname);
                //Kick Off Specific Feature from Suite
                var promises = [];

                console.log('\n-------------Executing ' + suiteToRun + ' for level ' + level + '----------------------');

                res.send('\n-------------Executing ' + suiteToRun + ' for level ' + level + '---------------------- \nnode index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/' + suiteToRun + '.feature -t @sanity');

                promises.push(new RSVP.Promise(function (fulfill, reject) {
                    console.log('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/' + suiteToRun + '.feature -t @sanity');
                    execSync('node index.js -s ./step-definitions -r ./reports --env ' + envSel + ' -d no -b ' + browser + ' -k ' + server + ' -j ' + port + ' -f  ./features/' + suiteToRun + '.feature -t @sanity', { stdio: [0, 1, 2] }).then(function () {
                        fulfill();
                    });
                }));

                Promise.all(promises).then(function (res, rej) {
                    console.log('Exec Completed : P : \n', 'node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + suiteToRun);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + suiteToRun, { stdio: [0, 1, 2] });
                }).catch(function (error) {
                    console.log('Exec Completed : E : \n', 'node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + suiteToRun);

                    execSync('node uiAutoReporter.js --env ' + envSel + ' --pack Sanity_' + suiteToRun, { stdio: [0, 1, 2] });
                });

                //node index.js -s ./step-definitions -r ./reports --env auto1 -d no -f  ./features/ -t @sanity & node uiAutoReporter.js --env auto1 --pack Sanity
                //node index.js -s ./step-definitions -r ./reports --env '+envSel+' -d no -f  ./features/ -t @'+level+' && node uiAutoReporter.js --env '+envSel+' --pack Sanity_'+level

                console.log('---------------Cwd: ' + process.cwd());
            } else {
                res.send('\nAutomation Not Enabled');
            }
            process.chdir(__dirname);
            console.log('Updated directory: ' + process.cwd());
        }
        else {
            res.send('\nPlease Provide a Suite To Run Value !!');
        }
    }
    else {
        res.send('\nPlease Provide a Environment!!');
    }
});
//exit
