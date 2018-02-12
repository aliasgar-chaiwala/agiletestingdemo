module.exports = function () {

    config = jsonfile.readFileSync('./support/' + featureConfig);

    // var filePath = './support/config.json';
    var addFilePath = './support/addConfig.json';
    // var assert = require('assert');
    var faker = require('faker');

    var personIdApi = null;

    var Promise = this.Promise || require('promise');
    var agent = require('superagent-promise')(require('superagent'), Promise);
    var NHS, NHS1, NHS2, NHS3, NHS4, NHS5, NHSPlace, NHS6;

    addConfig = jsonfile.readFileSync('./support/addConfig.json')
    var personData = addConfig.person;
    var addressData = addConfig.address;

    var _envtemp = global.ENVIRONMENT;
    var personCall = 'https://' + _envtemp + '-api.onesc.co.uk/api/v1/people';

    function addPersonAPI(addPersonAPI) {
        // console.log('1', addPersonAPI)
        return addPersonAPICall();
    }

    function addPersonAPICall() {
        addConfig = jsonfile.readFileSync('./support/addConfig.json')
        personData = addConfig.person;
        return agent.post(personCall, personData)
            .set({ Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Im1GWGFnbFF2IiwibmFtZSI6IkNhdGh5ICAgRmVyZ3Vzb24iLCJ1c2VyIjp7ImlkIjoibUZYYWdsUXYiLCJmaXJzdE5hbWUiOiJDYXRoeSIsIm1pZGRsZU5hbWUiOiIgIiwiY291bmNpbCI6IlRlZGZvcmRzaGlyZSBDb3VudHkgQ291bmNpbCIsImNyZWF0ZWRPbiI6bnVsbCwibGFzdE5hbWUiOiJGZXJndXNvbiIsInRlYW0iOiJDYXBpdGEgVGVzdGluZyBUZWFtIDIiLCJ0ZWFtcyI6W3siaWQiOiJ0ZWFtMTE5IiwibmFtZSI6IkNhcGl0YSBUZXN0aW5nIFRlYW0gMiIsImRlc2lnbmF0aW9uIjoiIiwicm9sZXMiOlsiU29jaWFsIFdvcmtlciJdLCJwcml2aWxlZ2VzIjpbXX1dLCJkZXNpZ25hdGlvbiI6bnVsbCwidXNlcm5hbWUiOm51bGwsInBhc3N3b3JkIjpudWxsLCJ1cGRhdGVkQnkiOiIiLCJ1cGRhdGVkT24iOiIiLCJ1cGRhdGVkUGFzc3dvcmQiOiIiLCJuYW1lIjoiQ2F0aHkgICBGZXJndXNvbiIsImVtYWlsIjoiQ2F0aHkuRmVyZ3Vzb25AZXhhbXBsZS5jb20iLCJ0b2tlbiI6IiIsInNwZWNpYWxpdHkiOiIiLCJzdXBlcnZpc2VzIjpbXSwiZG9iIjoiMTIvMTIvMTk5MiIsImdlbmRlciI6IkZlbWFsZSIsIm1vYmlsZU5vIjoiOTgwMTIzNDUiLCJwcmltYXJ5UGhvbmUiOiIyMDEyMzQ1NiIsImFkZHJlc3MiOlt7ImFkZHJlc3NUeXBlIjp7InN1YnR5cGUiOiIiLCJ0eXBlIjoiIn0sInRvd25DaXR5IjoiTG9uZG9uIiwicG9zdENvZGUiOiIxMjM0NSIsImFkZHJlc3NMaW5lMSI6IkItMTQiLCJhZGRyZXNzTGluZTIiOiJTZWN0b3IgOSIsImFkZHJlc3NMaW5lMyI6IjJuZCBTdHJlZXQiLCJhZGRyZXNzVXNlIjoiIiwiYWRkcmVzc05lb0lkIjoiIn1dLCJsb2NhdGlvbiI6W3siYWRkcmVzc1R5cGUiOnsic3VidHlwZSI6IiIsInR5cGUiOiIifSwidG93bkNpdHkiOiJMb25kb24iLCJwb3N0Q29kZSI6IjEyMzQ1IiwiYWRkcmVzc0xpbmUxIjoiQi0xNCIsImFkZHJlc3NMaW5lMiI6IlNlY3RvciA5IiwiYWRkcmVzc0xpbmUzIjoiMm5kIFN0cmVldCIsImFkZHJlc3NVc2UiOiIiLCJhZGRyZXNzTmVvSWQiOiIifV0sInRpdGxlIjoiIiwiZXh0ZW5zaW9uIjoiIiwid29ya0VtYWlsIjoiIiwicGVyc29uSWQiOiJCSnFORG9mTTZnIiwicHJlZmVyZW5jZXMiOnsibm90aWZpY2F0aW9uIjp0cnVlfSwiZW1wbG95ZWVJZCI6IkNhdGh5MTAyMTIzNCIsImFsbG9jYXRvck9mIjpbXSwiYXBwcm92ZXJPZiI6W10sIm1lbWJlck9mIjpbXX0sInNlc3Npb25JZCI6IkhKMjRTcno2ZyIsInByb3ZpZGVySWQiOiI2ODFkN2NkOSIsInRlYW1zIjpbeyJpZCI6InRlYW0xMTkiLCJuYW1lIjoiQ2FwaXRhIFRlc3RpbmcgVGVhbSAyIiwiZGVzaWduYXRpb24iOiIiLCJyb2xlcyI6WyJTb2NpYWwgV29ya2VyIl0sInByaXZpbGVnZXMiOltdfV0sInRlYW0iOnsiaWQiOiJ0ZWFtMTE5IiwibmFtZSI6IkNhcGl0YSBUZXN0aW5nIFRlYW0gMiIsImRlc2lnbmF0aW9uIjoiIiwicm9sZXMiOlsiU29jaWFsIFdvcmtlciJdLCJwcml2aWxlZ2VzIjpbXX0sInNlbGVjdGVkVGVhbSI6eyJpZCI6InRlYW0xMTkiLCJuYW1lIjoiQ2FwaXRhIFRlc3RpbmcgVGVhbSAyIiwiZGVzaWduYXRpb24iOiIiLCJyb2xlcyI6WyJTb2NpYWwgV29ya2VyIl0sInByaXZpbGVnZXMiOltdfSwiaXNzdWVPbiI6IjIwMTctMDQtMDVUMTA6MjE6NDAuMDYzWiIsImlhdCI6MTQ5MTM4NzcwMH0.9Djr_RGXOYBnaK4MJip9V-pUYrr5eatE19MaBAfvzCw" })
            .end(function (err, personData) {
                //console.log("DATA:\n ", personData); // { id: 5, body: { content: 'Hello world', fromPost: 'Foo', fromSend: 'Bar' } }
                // console.log('API ADD DONE ---------------');
            }).then(function onResult(res) {
                var apiResponse = JSON.parse(res.text);
                // console.log('apiResponse :', apiResponse);
                personIdApi = apiResponse.id;
                console.log("----personIdApi: ", personIdApi);
                //console.log('apiResponse:', apiResponse);

                var addressCall = 'https://' + _envtemp + '-api.onesc.co.uk/api/v1/people/' + personIdApi + '/addresses';
                // console.log('----addressCall :', addressCall);
                return agent.post(addressCall, addressData)
                    .set({ Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Im1GWGFnbFF2IiwibmFtZSI6IkNhdGh5ICAgRmVyZ3Vzb24iLCJ1c2VyIjp7ImlkIjoibUZYYWdsUXYiLCJmaXJzdE5hbWUiOiJDYXRoeSIsIm1pZGRsZU5hbWUiOiIgIiwiY291bmNpbCI6IlRlZGZvcmRzaGlyZSBDb3VudHkgQ291bmNpbCIsImNyZWF0ZWRPbiI6bnVsbCwibGFzdE5hbWUiOiJGZXJndXNvbiIsInRlYW0iOiJDYXBpdGEgVGVzdGluZyBUZWFtIDIiLCJ0ZWFtcyI6W3siaWQiOiJ0ZWFtMTE5IiwibmFtZSI6IkNhcGl0YSBUZXN0aW5nIFRlYW0gMiIsImRlc2lnbmF0aW9uIjoiIiwicm9sZXMiOlsiU29jaWFsIFdvcmtlciJdLCJwcml2aWxlZ2VzIjpbXX1dLCJkZXNpZ25hdGlvbiI6bnVsbCwidXNlcm5hbWUiOm51bGwsInBhc3N3b3JkIjpudWxsLCJ1cGRhdGVkQnkiOiIiLCJ1cGRhdGVkT24iOiIiLCJ1cGRhdGVkUGFzc3dvcmQiOiIiLCJuYW1lIjoiQ2F0aHkgICBGZXJndXNvbiIsImVtYWlsIjoiQ2F0aHkuRmVyZ3Vzb25AZXhhbXBsZS5jb20iLCJ0b2tlbiI6IiIsInNwZWNpYWxpdHkiOiIiLCJzdXBlcnZpc2VzIjpbXSwiZG9iIjoiMTIvMTIvMTk5MiIsImdlbmRlciI6IkZlbWFsZSIsIm1vYmlsZU5vIjoiOTgwMTIzNDUiLCJwcmltYXJ5UGhvbmUiOiIyMDEyMzQ1NiIsImFkZHJlc3MiOlt7ImFkZHJlc3NUeXBlIjp7InN1YnR5cGUiOiIiLCJ0eXBlIjoiIn0sInRvd25DaXR5IjoiTG9uZG9uIiwicG9zdENvZGUiOiIxMjM0NSIsImFkZHJlc3NMaW5lMSI6IkItMTQiLCJhZGRyZXNzTGluZTIiOiJTZWN0b3IgOSIsImFkZHJlc3NMaW5lMyI6IjJuZCBTdHJlZXQiLCJhZGRyZXNzVXNlIjoiIiwiYWRkcmVzc05lb0lkIjoiIn1dLCJsb2NhdGlvbiI6W3siYWRkcmVzc1R5cGUiOnsic3VidHlwZSI6IiIsInR5cGUiOiIifSwidG93bkNpdHkiOiJMb25kb24iLCJwb3N0Q29kZSI6IjEyMzQ1IiwiYWRkcmVzc0xpbmUxIjoiQi0xNCIsImFkZHJlc3NMaW5lMiI6IlNlY3RvciA5IiwiYWRkcmVzc0xpbmUzIjoiMm5kIFN0cmVldCIsImFkZHJlc3NVc2UiOiIiLCJhZGRyZXNzTmVvSWQiOiIifV0sInRpdGxlIjoiIiwiZXh0ZW5zaW9uIjoiIiwid29ya0VtYWlsIjoiIiwicGVyc29uSWQiOiJCSnFORG9mTTZnIiwicHJlZmVyZW5jZXMiOnsibm90aWZpY2F0aW9uIjp0cnVlfSwiZW1wbG95ZWVJZCI6IkNhdGh5MTAyMTIzNCIsImFsbG9jYXRvck9mIjpbXSwiYXBwcm92ZXJPZiI6W10sIm1lbWJlck9mIjpbXX0sInNlc3Npb25JZCI6IkhKMjRTcno2ZyIsInByb3ZpZGVySWQiOiI2ODFkN2NkOSIsInRlYW1zIjpbeyJpZCI6InRlYW0xMTkiLCJuYW1lIjoiQ2FwaXRhIFRlc3RpbmcgVGVhbSAyIiwiZGVzaWduYXRpb24iOiIiLCJyb2xlcyI6WyJTb2NpYWwgV29ya2VyIl0sInByaXZpbGVnZXMiOltdfV0sInRlYW0iOnsiaWQiOiJ0ZWFtMTE5IiwibmFtZSI6IkNhcGl0YSBUZXN0aW5nIFRlYW0gMiIsImRlc2lnbmF0aW9uIjoiIiwicm9sZXMiOlsiU29jaWFsIFdvcmtlciJdLCJwcml2aWxlZ2VzIjpbXX0sInNlbGVjdGVkVGVhbSI6eyJpZCI6InRlYW0xMTkiLCJuYW1lIjoiQ2FwaXRhIFRlc3RpbmcgVGVhbSAyIiwiZGVzaWduYXRpb24iOiIiLCJyb2xlcyI6WyJTb2NpYWwgV29ya2VyIl0sInByaXZpbGVnZXMiOltdfSwiaXNzdWVPbiI6IjIwMTctMDQtMDVUMTA6MjE6NDAuMDYzWiIsImlhdCI6MTQ5MTM4NzcwMH0.9Djr_RGXOYBnaK4MJip9V-pUYrr5eatE19MaBAfvzCw" })
                    .end(function (err, responseData) {
                        // console.log("address responseData:\n ", responseData); // { id: 5, body: { content: 'Hello world', fromPost: 'Foo', fromSend: 'Bar' } }
                    }).then(function onResult(res) {
                        var apiResponse = JSON.parse(res.text);
                        personIdApiAddress = apiResponse.personId;
                        console.log("----personIdApiAddress: ", personIdApiAddress);
                        console.log('API ADD DONE ---------------');
                    });
            })
    }

    function writeToAddConfig(addConfig, name, NHS) {
        console.log('Payload name: ', name);
        console.log('Payload NHS: ', NHS);

        var uniPerSplit = name.split(" ");
        // addConfig.person.name = name;
        addConfig.person.firstName = uniPerSplit[0];
        addConfig.person.middleName = uniPerSplit[1];
        addConfig.person.lastName = uniPerSplit[2];
        addConfig.person.case.nhsNumber = NHS;

        jsonfile.writeFileSync(addFilePath, addConfig);
        addConfig = jsonfile.readFileSync('./support/addConfig.json');
        //console.log('addConfig: ', addConfig);
        return true;
    }

    function generateNHS() {
        return agent('GET', 'http://danielbayley.uk/nhs-number/api/NhsNumbers/GetNhsNumbers').then(function onResult(res) {
            // do stuff 
            // });
            // .then(function (err, res) {
            var apiResponse = JSON.parse(res.text);
            // console.log('\n\napiResponse : ', apiResponse);
            NHS = apiResponse[0];
            NHS1 = apiResponse[1];
            NHS2 = apiResponse[2];
            NHS3 = apiResponse[3];
            NHS4 = apiResponse[4];
            NHS5 = apiResponse[5];
            NHSPlace = apiResponse[6];
            NHS6 = apiResponse[7];
            //console.log('\n\nResponse nhsNumber : ', NHS);
            return true;
        });
    }

    //var randomNumber = require('random-number');
    var options = {
        min: 8797451241,
        integer: true
    };

    config = jsonfile.readFileSync('./support/' + featureConfig);

    // var filePath = './support/config.json';

    var fRandomName = config.PersonDetails.Name;
    var fRandomName2 = config.PersonDetails.placePerName;
    var fRandomPer1 = config.PersonDetails.person1.Name;
    var fRandomPer2 = config.PersonDetails.person2.Name;
    var fRandomPer3 = config.PersonDetails.person3.Name;
    var fRandomPer5 = config.PersonDetails.person5.Name;
    var fRandomPerSpecial = config.PersonDetails.personSpecial.Name;
    var fRandomPerAsylum = config.PersonDetails.personAsylum.Name;

    var nhsNumber = config.PersonDetails.NHS;
    var nhsNumber1 = config.PersonDetails.person1.NHS;
    var nhsNumber2 = config.PersonDetails.person2.NHS;
    var nhsNumber3 = config.PersonDetails.person3.NHS;
    var nhsNumber4 = config.PersonDetails.personSpecial.NHS;
    var nhsNumber5 = config.PersonDetails.person5.NHS;
    var nhsNumber6 = config.PersonDetails.personAsylum.NHS;

    // var fRandomPer5 = config.PersonDetails.person5.Name;
    //eliminate Special Character "'", Mr." "Mrs." From Random Name
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
    //Generate Random Fake name for Adding a Person
    function generateRandomName() {
        //    var tempRandomName = faker.name.findName().concat("ui");
        var tempFirstName = faker.name.firstName();
        //console.log("tempFirstName: ",tempFirstName);
        var tempMidName = faker.name.firstName();

        //var tempLastName = 'O Reilly';
        var tempLastName = faker.name.lastName().split(" ");
        //tempLastName = tempLastName.split(" ");

        //console.log(tempLastName[0], tempLastName[1]);

        if (tempLastName[1] == undefined) {

            //console.log('in if lastname ');
            tempLastName = tempLastName[0];
            // tempLastName = tempLastName.concat("ui");
            // console.log('final tempLastName : ', tempLastName);

        } else {
            //console.log('in else lastname ');
            tempLastName = tempLastName[0] + tempLastName[1];
            // tempLastName = tempLastName.concat("ui");
            // console.log('final tempLastName : ', tempLastName);
        }

        var finalFirstName = eliminateSplCharFromName(tempFirstName);
        var finalMidName = eliminateSplCharFromName(tempMidName);
        var finalLastName = eliminateSplCharFromName(tempLastName);
        var finalRandomName = finalFirstName + " " + finalMidName + " " + finalLastName;
        console.log('Random Person:', finalRandomName, '\n');
        return finalRandomName;
    }
    //Method to Update Config File with Random name
    function writeToConfig(fileObj) {

        fileObj.PersonDetails.Name = fRandomName;
        fileObj.PersonDetails.placePerName = fRandomName2;
        fileObj.PersonDetails.person1.Name = fRandomPer1;
        fileObj.PersonDetails.person2.Name = fRandomPer2;
        fileObj.PersonDetails.person3.Name = fRandomPer3;
        fileObj.PersonDetails.personSpecial.Name = fRandomPerSpecial;
        fileObj.PersonDetails.person5.Name = fRandomPer5;
        fileObj.PersonDetails.personAsylum.Name = fRandomPerAsylum;

        var uniPerSplit = fRandomName.split(" ");
        fileObj.PersonDetails.FirstName = uniPerSplit[0];
        fileObj.PersonDetails.MiddleName = uniPerSplit[1];
        fileObj.PersonDetails.LastName = uniPerSplit[2];
        fileObj.PersonDetails.NHS = nhsNumber;

        var placPersplit = fRandomName2.split(" ");
        fileObj.PersonDetails.placePerFirstName = placPersplit[0];
        fileObj.PersonDetails.placePerMiddleName = placPersplit[1];
        fileObj.PersonDetails.placePerLastName = placPersplit[2];

        var uniPerSplit1 = fRandomPer1.split(" ");
        fileObj.PersonDetails.person1.FirstName = uniPerSplit1[0];
        fileObj.PersonDetails.person1.MiddleName = uniPerSplit1[1];
        fileObj.PersonDetails.person1.LastName = uniPerSplit1[2];
        fileObj.PersonDetails.person1.NHS = nhsNumber1;

        var uniPerSplit2 = fRandomPer2.split(" ");
        fileObj.PersonDetails.person2.FirstName = uniPerSplit2[0];
        fileObj.PersonDetails.person2.MiddleName = uniPerSplit2[1];
        fileObj.PersonDetails.person2.LastName = uniPerSplit2[2];
        fileObj.PersonDetails.person2.NHS = nhsNumber2;

        var uniPerSplit3 = fRandomPer3.split(" ");
        fileObj.PersonDetails.person3.FirstName = uniPerSplit3[0];
        fileObj.PersonDetails.person3.MiddleName = uniPerSplit3[1];
        fileObj.PersonDetails.person3.LastName = uniPerSplit3[2];
        fileObj.PersonDetails.person3.NHS = nhsNumber3;

        var uniPerSplitSpl = fRandomPerSpecial.split(" ");
        fileObj.PersonDetails.personSpecial.FirstName = uniPerSplitSpl[0];
        fileObj.PersonDetails.personSpecial.MiddleName = uniPerSplitSpl[1];
        fileObj.PersonDetails.personSpecial.LastName = uniPerSplitSpl[2];
        fileObj.PersonDetails.personSpecial.NHS = nhsNumber4;

        var uniPerSplit5 = fRandomPer5.split(" ");
        fileObj.PersonDetails.person5.FirstName = uniPerSplit5[0];
        fileObj.PersonDetails.person5.MiddleName = uniPerSplit5[1];
        fileObj.PersonDetails.person5.LastName = uniPerSplit5[2];
        fileObj.PersonDetails.person5.NHS = nhsNumber5;

        var uniPerAsySplit = fRandomPerAsylum.split(" ");
        fileObj.PersonDetails.personAsylum.FirstName = uniPerAsySplit[0];
        fileObj.PersonDetails.personAsylum.MiddleName = uniPerAsySplit[1];
        fileObj.PersonDetails.personAsylum.LastName = uniPerAsySplit[2];
        fileObj.PersonDetails.personAsylum.NHS = nhsNumber6;

        jsonfile.writeFileSync(filePath, fileObj);
        //console.log('Name Write Successful');
        config = jsonfile.readFileSync('./support/' + featureConfig);

    }

    //I capture the source for "AddPerson"
    this.When(/^I capture the source for "([^"]*)"$/, function (sourceFor) {

        HTML = jsonfile.readFileSync('./support/html.json');
        var filePath = './support/html.json';

        //console.log('HTML source Init: ', HTML.source);
        driver.sleep(5000);

        return driver.getPageSource().then(function (pageSource) {

            //console.log('\npageSource: ', pageSource);
            HTML[sourceFor] = pageSource;

            jsonfile.writeFileSync(filePath, HTML);
            //console.log('\n\nHTML source fin: ', HTML.sourceFor);
        });
    });

    //I should see add person form
    this.When(/^I should see add person form$/, function () {
        driver.sleep(5000);
        return driver.getPageSource().then(function (source2) {
            HTML = jsonfile.readFileSync('./support/html.json');
            if (HTML.AddPerson == source2) {
                console.log("TRUE MATCHED");
                expect(source2).to.equal(HTML.AddPerson);
            } else {
                console.log("FALSE NOT MATCHED");
                expect(source2).to.equal(HTML.AddPerson);
            }

        });
    });

    this.When(/^I create a new API person$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");

            nhsNumber = NHS;
            nhsNumber = nhsNumber.replace(/ /g, "-");
            // console.log('nhsNumber : ', nhsNumber);
            writeToAddConfig(addConfig, fRandomName, nhsNumber);
            // write to add config
            //then read in add method
            return addPersonAPI(fRandomName).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API person1$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomPer1 = personName;
            var fRandomNameSplit = fRandomPer1.split(" ");
            nhsNumber1 = NHS1;
            nhsNumber1 = nhsNumber1.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomPer1, nhsNumber1);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API person with special character$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomPerSpecial = personName + "'s";
            var fRandomNameSplit = fRandomPer1.split(" ");
            nhsNumber4 = NHS4;
            nhsNumber4 = nhsNumber4.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomPerSpecial, nhsNumber4);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API person2$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomPer2 = personName;
            var fRandomNameSplit = fRandomPer2.split(" ");
            nhsNumber2 = NHS2;
            nhsNumber2 = nhsNumber2.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomPer2, nhsNumber2);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API person3$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomPer3 = personName;
            var fRandomNameSplit = fRandomPer3.split(" ");
            nhsNumber3 = NHS3;
            nhsNumber3 = nhsNumber3.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomPer3, nhsNumber3);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API placement person$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomName2 = personName;
            var fRandomNameSplit = fRandomName2.split(" ");
            nhsNumberPlace = NHSPlace;
            nhsNumberPlace = nhsNumberPlace.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomName2, nhsNumberPlace);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new API asylum seeking person$/, function () {
        return generateNHS().then(function () {
            addConfig = jsonfile.readFileSync('./support/addConfig.json');
            var personName = generateRandomName();
            fRandomPerAsylum = personName;
            var fRandomNameSplit = fRandomPerAsylum.split(" ");
            nhsNumber6 = NHS6;
            nhsNumber6 = nhsNumber6.replace(/ /g, "-");
            writeToAddConfig(addConfig, fRandomPerAsylum, nhsNumber6);
            return addPersonAPI(personName).then(function (res) {
                console.log("then return ")
            }).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I create a new person$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");

            nhsNumber = NHS;

            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new person1$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomPer1 = personName;
            var fRandomNameSplit = fRandomPer1.split(" ");
            nhsNumber1 = NHS1;

            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber1).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber1).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new person with special character$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomPerSpecial = personName + "'s";

            console.log("fRandomPerSpecial: ", fRandomPerSpecial);
            //fRandomPerSpecial = fRandomPerSpecial + "'s";
            var fRandomNameSplit = fRandomPerSpecial.split(" ");
            nhsNumber4 = NHS4;

            //console.log("fRandomNameSplit: ", fRandomNameSplit);
            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber4).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber4).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new person2$/, function () {
        return generateNHS().then(function () {

            var personName = generateRandomName();
            fRandomPer2 = personName;
            var fRandomNameSplit = fRandomPer2.split(" ");
            nhsNumber2 = NHS2;
            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber2).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber2).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new person3$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomPer3 = personName;
            var fRandomNameSplit = fRandomPer3.split(" ");
            nhsNumber3 = NHS3;
            return page.pageHead.addPersonNavigation().then(function () {
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber3).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber3).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new placement person$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName2 = personName;
            var fRandomNameSplit = fRandomName2.split(" ");
            nhsNumberPlace = NHSPlace;
            return page.pageHead.addPersonNavigation().then(function () {
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumberPlace).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumberPlace).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    //I create a new asylum seeking person
    this.When(/^I create a new asylum seeking person$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomPerAsylum = personName;
            var fRandomNameSplit = fRandomPerAsylum.split(" ");
            nhsNumber6 = NHS6;

            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber6).then(function () {
                    return page.addPerson_page.setSeekingAsylum('Asylum seeking adult').then(function () {
                        return page.addPerson_page.setPersonPrimarySupport().then(function () {
                            return page.addPerson_page.setPersonNhs(nhsNumber6).then(function () {
                                return page.addPerson_page.submitPerson().then(function () {
                                    return writeToConfig(config);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    this.When(/^I create a new person with "([^"]*)" post code$/, function (postCode) {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomPer5 = personName;
            var fRandomNameSplit = fRandomPer5.split(" ");
            nhsNumber5 = NHS5;

            return page.pageHead.addPersonNavigation().then(function () {
                return page.addPerson_page.setPersonPcode(fRandomNameSplit, nhsNumber5, postCode).then(function () {
                    return writeToConfig(config);
                });
            });
        });
    });

    this.Then(/^I select DOB as today - (\d+) years$/, function (noOfyears) {
        var todaysDate = new Date();
        targetDate = new Date(todaysDate.getFullYear() - noOfyears, todaysDate.getMonth(), todaysDate.getDate());
        return page.editPerson_page.updateDOB(targetDate);
    });

    this.Then(/^I update contact number$/, function () {
        return page.editPerson_page.updateContactNumber();
    });

    this.Then(/^I submit the edit page$/, function () {
        return page.editPerson_page.clickSubmitOnEditPage();
    });

    this.Then(/^I check National insurance number text box presence based on age of person$/, function () {
        return page.personFacet_page.getPersonAge().then(function (age) {
            return page.editPerson_page.verifyPresenceOfNINumberTextBox(age);
        });
    });

    this.Then(/^I update the "([^"]*)" in Edit Person page$/, function (editpersonfield) {
        return page.editPerson_page.editperson(editpersonfield);
    });

    this.Then(/^I update firstName of unique "([^"]*)"$/, function (person) {
        let finalFirstName = eliminateSplCharFromName(faker.name.firstName());
        config.PersonDetails[person].FirstName = finalFirstName;
        let finalName = finalFirstName + " " + config.PersonDetails[person].MiddleName + " " + config.PersonDetails[person].LastName;
        config.PersonDetails[person].Name = finalName;
        return page.editPerson_page.updateFirstName(finalFirstName).then(function () {
            return jsonfile.writeFileSync(filePath, config);
        });
    });
    this.When(/^I create a new person without primary Need$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");

            nhsNumber = NHS;

            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPersonwithoutPrimaryNeed(fRandomNameSplit, nhsNumber).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber).then(function () {
                            return page.addPerson_page.submitPerson().then(function () {
                                return writeToConfig(config);
                            });
                        });
                    });
                });
            });
        });
    });

    this.Then(/^I update gender as "([^"]*)"$/, function (genderToSelect) {
        return page.editPerson_page.updateGender(genderToSelect);
    });

    this.When(/^I create a new person with another household member$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");

            nhsNumber = NHS;
            return page.pageHead.addPersonNavigation().then(function () {
                //   console.log("In then ", fRandomNameSplit);
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber).then(function () {
                    return page.addPerson_page.setPersonPrimarySupport().then(function () {
                        return page.addPerson_page.setPersonNhs(nhsNumber).then(function () {
                            driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonArrow), 30000);
                            driver.findElement(page.addPerson_page.elements.addPersonArrow).click();
                            return driver.wait(until.elementsLocated(page.addPerson_page.elements.addAnotherHouseholdMember), 30000).then(function () {
                                driver.findElement(page.addPerson_page.elements.addAnotherHouseholdMember).click();
                                return writeToConfig(config);
                            });
                        })
                    });
                });
            });
        });
    });

    this.Then(/^I verify the message for person added with household members$/, function () {
        return page.addPerson_page.verifyAddedHouseholdMember();
    });
    this.When(/^I add a second household member$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");
            nhsNumber = NHS;
            //return driver.findElement(page.addPerson_page.elements.setLastName).getText().then(function (lastNamehouseholdPerson) {
            // expect(lastNamehouseholdPerson).to.contain(personName[2]);
            return page.addPerson_page.setPersonHouseHoldMember(fRandomNameSplit, nhsNumber).then(function () {
                return page.addPerson_page.setPersonPrimarySupport().then(function () {
                    return page.addPerson_page.setPersonNhs(nhsNumber).then(function () {
                        driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonArrow), 30000);
                        driver.findElement(page.addPerson_page.elements.addPersonArrow).click();
                        return driver.wait(until.elementsLocated(page.addPerson_page.elements.addAnotherHouseholdMember), 30000).then(function () {
                            driver.findElement(page.addPerson_page.elements.addAnotherHouseholdMember).click();
                            return writeToConfig(config);
                        });
                    });
                });
            });
        });
    });

    this.When(/^I add a third household member$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName2 = personName;
            var fRandomNameSplit = fRandomName2.split(" ");
            nhsNumber2 = NHS2;
            return page.addPerson_page.setSecondPersonHouseHoldMember(fRandomNameSplit, nhsNumber2).then(function () {
                return page.addPerson_page.setPersonNhs(nhsNumber2).then(function () {
                    driver.executeScript('return window.scrollTo(' + 1100 + ',' + 1100 + ');');
                    driver.wait(until.elementsLocated(page.addPerson_page.elements.addPersonArrow), 30000);
                    driver.findElement(page.addPerson_page.elements.addPersonArrow).click();
                    return driver.wait(until.elementsLocated(page.addPerson_page.elements.addAnotherHouseholdMember), 30000).then(function () {
                        driver.findElement(page.addPerson_page.elements.addAnotherHouseholdMember).click();
                        return writeToConfig(config);
                    });
                });
            });
        });
        // });
    });

    this.Then(/^I verify the fields for household person added$/, function () {
        return page.addPerson_page.verifyFieldsHouseholdMember();
    });

    this.Then(/^I click on cancel for added household person$/, function () {
        return page.addPerson_page.cancelAddedHouseHoldMember();
    });
    this.When(/^I create a new temporary household person$/, function () {
        return generateNHS().then(function () {
            var personName = generateRandomName();
            fRandomName = personName;
            var fRandomNameSplit = fRandomName.split(" ");

            nhsNumber = NHS;

            return page.pageHead.addPersonNavigation().then(function () {
                return page.addPerson_page.setPerson(fRandomNameSplit, nhsNumber).then(function () {
                return writeToConfig(config);
                });
            });
        });
    });
}


