var json2csv = require('json2csv');
var fs = require('fs');
var faker = require('faker');
var argv = require('optimist').argv;

var _persons = argv.persons;

function eliminateSplCharFromName(rndmName) {

    var modifiedName = rndmName;

    if (rndmName.includes("'")) {
        modifiedName = rndmName.replace(/'/g, "").trim();
    }
    if (rndmName.includes("Mr.")) {
        modifiedName = rndmName.replace("Mr.", "").trim();
    }
    if (rndmName.includes("Mrs.")) {
        modifiedName = rndmName.replace("Mrs.", "").trim();
    }
    return modifiedName;
}

function generateRandomName() {
    //    var tempRandomName = faker.name.findName().concat("ui");
    var tempFirstName = faker.name.firstName();
    //console.log("tempFirstName: ",tempFirstName);
    var tempMidName = faker.name.firstName();
    //console.log("tempMidName: ",tempMidName);

    var tempLastName = faker.name.lastName().split(" ");
    //tempLastName = tempLastName.split(" ");
    //console.log(tempLastName[0], tempLastName[1]);

    if (tempLastName[1] == undefined) {
        //console.log('in if lastname ');
        tempLastName = tempLastName[0];
        // console.log('final tempLastName : ', tempLastName);

    } else {
        //console.log('in else lastname ');
        tempLastName = tempLastName[0] + tempLastName[1];
        // console.log('final tempLastName : ', tempLastName);
    }

    var finalFirstName = eliminateSplCharFromName(tempFirstName);
    var finalMidName = eliminateSplCharFromName(tempMidName);
    var finalLastName = eliminateSplCharFromName(tempLastName);

    var finalRandomName = finalFirstName + " " + finalMidName + " " + finalLastName;
    //console.log('This is finalRandomName:', finalRandomName, '\n');
    return finalRandomName;
}

var fields = ['Name', 'FirstName', 'MiddleName', 'LastName'];
var myPersons = [];
var fPersonObj = { 'Name': null, 'FirstName': null, 'MiddleName': null, 'LastName': null };
console.log("Init fPersonObj :", fPersonObj);

for (i = 0; i < _persons; i++) {
    var personName = generateRandomName();

    console.log(i, " " + personName);
    var uniPerSplit = personName.split(" ");

    fPersonObj.Name = personName;
    fPersonObj.FirstName = uniPerSplit[0];
    fPersonObj.MiddleName = uniPerSplit[1];
    fPersonObj.LastName = uniPerSplit[2];

    //console.log(i, " fPersonObj :", fPersonObj);

    myPersons.push(fPersonObj);
    //console.log(i, " myPersons.all :", myPersons);
    // console.log(i, " myPersons.push :", myPersons[i]);

    fPersonObj = { 'Name': null, 'FirstName': null, 'MiddleName': null, 'LastName': null };
}


var csv = json2csv({ data: myPersons, fields: fields });

fs.writeFile('test.csv', csv, function (err) {
    if (err) throw err;
    console.log('file saved');
});

// fs.appendFile('test.csv', csv, function (err) {
//     if (err) throw err;
//     console.log('file Apppended');
// });