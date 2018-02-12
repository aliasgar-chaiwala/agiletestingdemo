module.exports = function () {
    // var assert = require('assert');
    var jsonfile = require('jsonfile');
    var faker = require('faker');

    // Configuration
    config = jsonfile.readFileSync('./support/'+featureConfig);

    /* Random Name Generation Logic----------------------------------START*/
    //var configFile = require('../support/config.json');
    // var filePath = './support/config.json';
    var randomName;
    var fRandomName = config.Professional.BasicInfo.NewName;

    //eliminate Special Character "'", Mr." "Mrs." From Random Name
    function eliminateSplCharFromName(rndmName) {

        ////console.log('This is rndmName in eleminate method: ' + rndmName + '\n\n');
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

        var tempFirstName = faker.name.firstName();
        var tempMidName = faker.name.firstName();
        var tempLastName = faker.name.lastName().split(" ");

        //console.log(tempLastName[0], tempLastName[1], tempLastName[2]);
        if (tempLastName[1] != undefined) {
            tempLastName = tempLastName[0] + tempLastName[1];
            // tempLastName = tempLastName.concat("uiProf");
            //console.log('final tempLastName : ', tempLastName);
        } else {
            tempLastName = tempLastName[0];
            // tempLastName = tempLastName.concat("uiProf")
            //console.log('final tempLastName : ', tempLastName);
        }

        var finalFirstName = eliminateSplCharFromName(tempFirstName);
        var finalMidName = eliminateSplCharFromName(tempMidName);
        var finalLastName = eliminateSplCharFromName(tempLastName);

        var finalRandomName = finalFirstName + " " + finalMidName + " " + finalLastName;

        //console.log('This is finalRandomName:', finalRandomName, '\n');

        return finalRandomName;
    }

    ////Generate Random Fake name for Adding a Person
    //function generateRandomName() {
    //    randomName = faker.name.findName().concat("uiprof");

    //    ////console.log('This is Initial Name in Config:' + finalRandomName + '\n\n');

    //    finalRandomName = eliminateSplCharFromName(randomName);
    //    ////console.log('This is finalRandomName:' + finalRandomName + '\n\n');

    //    return finalRandomName;
    //}

    //Method to Update Config File with Random name
    function writeToConfig(fileObj) {

        fileObj.Professional.BasicInfo.NewName = fRandomName;

        var uniProfSplit = fRandomName.split(" ");

        fileObj.Professional.BasicInfo.FirstName = uniProfSplit[0];
        fileObj.Professional.BasicInfo.MiddleName = uniProfSplit[1];
        fileObj.Professional.BasicInfo.LastName = uniProfSplit[2];
        ////console.log('This is to WriteFile Stringified fileObj:' +'\n\n' + JSON.stringify(fileObj) + '\n\n');

        jsonfile.writeFileSync(filePath, fileObj);
        //  console.log('Name Write Successful');
        config = jsonfile.readFileSync('./support/'+featureConfig);
    }

    this.When(/^I create a new Professional$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that

        ////////////////////////////////
        var uniqueProfessionalName = generateRandomName();
        fRandomName = uniqueProfessionalName;
        var fRandomNameSplit = fRandomName.split(" ");
        console.log("Created Professional : ", fRandomName);
        /////////////////////////////// 

        return page.pageHead.addProfessionalNavigation().then(function () {
            //   console.log("In then ", fRandomNameSplit);
            return page.professional_page.addProfessional(fRandomNameSplit).then(function () {
                return page.professional_page.addWorkInformation().then(function () {
                    //    console.log('in step def1');
                    return page.professional_page.submitProfessional().then(function () {
                        writeToConfig(config);
                    });
                });
            });
        });
    });

    this.When(/^I search for the professional and select$/, function () {
        var professional = config.Professional.BasicInfo.NewName;
        // console.log("THEN person value:", person);
        return page.pageHead.personSearch(professional).then(function () {
            return driver.sleep(1000)            //    console.log("1 sec sleep");
                .then(function () {
                    //    console.log("In then: ", person);
                    return page.pageHead.selectCategoryElement(professional);
                });
        });
    });

    this.When(/^I should see professional page with all the widgets$/, function () {
        var professional = config.Professional.BasicInfo.NewName;
        // console.log("THEN person value:", person);
        return page.professional_page.professionalVerification(professional).then(function () {
            return driver.sleep(2000);
        });
    });

}