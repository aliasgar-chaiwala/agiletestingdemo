module.exports = function () {

    var faker = require('faker');

    // Configuration
    config = jsonfile.readFileSync('./support/' + featureConfig);
    /* Random Name Generation Logic----------------------------------START*/
    //var configFile = require('../support/config.json');
    // var filePath = './support/config.json';
    var randomName;
    var finalRandomOrgName = config.Organisation.BasicInfo.NewName;
    var finalRandomCourt = config.Organisation.Court.BasicInfo.NewName;
    //eliminate Special Character "'", Mr." "Mrs." From Random Name
    function eliminateSplCharFromName(rndmName) {

        ////console.log('This is rndmName in eleminate method: ' + rndmName + '\n\n');
        var modifiedName = rndmName;

        if (rndmName.includes("'")) {
            modifiedName = rndmName.replace(/'/g, "").trim();
        }
        if (rndmName.includes(",")) {
            modifiedName = rndmName.replace(/,/g, "").trim();
        }
        if (rndmName.includes("Mr.")) {
            modifiedName = rndmName.replace("Mr.", "").trim();
        }
        if (rndmName.includes("Mrs.")) {
            modifiedName = rndmName.replace("Mrs.", "").trim();
        }
        if (rndmName.includes("Ms.")) {
            modifiedName = rndmName.replace("Mrs.", "").trim();
        }
        return modifiedName;
    }

    //Generate Random Fake name for Adding a Person
    function generateRandomName() {

        randomName = faker.company.companyName();//.concat("uiorg");

        ////console.log('This is Initial Name in Config:' + finalRandomName + '\n\n');

        var randomOrgName = eliminateSplCharFromName(randomName);
        console.log('RandomOrgName:' + randomOrgName);

        return randomOrgName;
    }

    //Method to Update Config File with Random name
    function writeToConfig(fileObj) {

        fileObj.Organisation.BasicInfo.NewName = finalRandomOrgName;
        fileObj.Organisation.Court.BasicInfo.NewName = finalRandomCourt;
        ////console.log('This is to WriteFile Stringified fileObj:' +'\n\n' + JSON.stringify(fileObj) + '\n\n');

        jsonfile.writeFileSync(filePath, fileObj);
        //console.log('Name Write Successful');
        config = jsonfile.readFileSync('./support/' + featureConfig);
    }

    this.When(/^I create a new Organisation$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var profName = config.Professional.BasicInfo.NewName;
        ////////////////////////////////
        var orgName = generateRandomName();
        finalRandomOrgName = orgName;

        return page.pageHead.addOrganisationNavigation().then(function () {
            //   console.log("In then ", fRandomNameSplit);
            return page.organisation_page.addOrganisation(orgName, profName).then(function () {
                return page.organisation_page.submitOrganisation().then(function () {
                    return writeToConfig(config);
                });
            });
        });
    });

    this.When(/^I create a new Organisation without member$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var orgName = generateRandomName();
        finalRandomOrgName = orgName;
        return page.pageHead.addOrganisationNavigation().then(function () {
            //   console.log("In then finalRandomOrgName: ", finalRandomOrgName);
            return page.organisation_page.addOrgWithoutMem(orgName).then(function () {
                return page.organisation_page.submitOrganisation().then(function () {
                    return writeToConfig(config);
                });
            });
        });
    });

    //I create a new Organisation as court
    this.When(/^I create a new Organisation as court$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var orgName = generateRandomName();
        finalRandomCourt = orgName;
        return page.pageHead.addOrganisationNavigation().then(function () {
            //   console.log("In then orgName: ", orgName);
            return page.organisation_page.addOrgAsCourt(orgName).then(function () {
                return page.organisation_page.submitOrganisation().then(function () {
                    return writeToConfig(config);
                });
            });
        });
    });

    this.When(/^I search for the organisation and select$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var organisation = config.Organisation.BasicInfo.NewName;
        // console.log("THEN organisation value:", organisation);
        return page.pageHead.personSearch(organisation).then(function () {
            return driver.sleep(1000).then(function () {
                //    console.log("In then: ", person);
                return page.pageHead.selectCategoryElement(organisation);
            });
        });
    });

    this.When(/^I should see organisation page with all the widgets$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var organisation = config.Organisation.BasicInfo.NewName;
        var professional = config.Professional.BasicInfo.NewName;
        // console.log("THEN person value:", person);
        return page.organisation_page.organisationVerification(organisation, professional);

    });

    this.When(/^I should see professional as member on organisation page$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var professional = config.Professional.BasicInfo.NewName;
        return page.organisation_page.profOnOrgPage(professional);
    });
    // I search for the Organisation and select
}