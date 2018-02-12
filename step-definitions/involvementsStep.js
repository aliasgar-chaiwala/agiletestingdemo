module.exports = function () {

    var USERNAME = null;
    var TEAMNAME = null;

    function getUserName(User, Team) {

        config = jsonfile.readFileSync('./support/' + featureConfig);

        var NAME = null, ID = null,
            PWD = config.PWD,
            USERTYPE = null;

        var assertUserTM = User.includes("TeamManager");
        var assertUserSW = User.includes("SocialWorker");
        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        if (assertUserTM) {
            var TmNo = User.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            //console.log('TmNo :', TmNo);

            if (assertTeam) {
                NAME = config.Teams[Team][TmNo].NAME;
                // console.log('\nTM NAME :', NAME);
            }
        }
        else if (assertUserSW) {

            var SwNo = User.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            //console.log('TmNo :', SwNo);

            if (assertTeam) {
                NAME = config.Teams[Team][SwNo].NAME;
                //console.log('\nSW NAME :', NAME);
            }
        } else {
            console.log('Error in Team name or User Name !!!');
        }
        return NAME;
    }


    this.Then(/^I create a new professional Involvement$/, function () {
        return page.involvements_page.createInvolvement().then(function () {
            return driver.sleep(3000);
        });
    });

    this.Then(/^I navigate to Involvement$/, function () {
        return page.involvements_page.navigateToInvolvements();
    });

    this.Then(/^I should see created Involvement for Professional under involvements$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var profName = config.Professional.BasicInfo.NewName;
        return page.involvements_page.verifyCreatedInvolvement(profName);
    });

    this.Then(/^I should see created Involvement for "([^"]*)" and "([^"]*)"$/, function (User, Team) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        USERNAME = getUserName(User, Team);
        TEAMNAME = config.Teams[Team].NAME;
        return page.involvements_page.verifyCreatedInvolvement(USERNAME).then(function () {
            return page.involvements_page.verifyCreatedInvolvement(TEAMNAME);
        });
    });

    this.Then(/^I should see created Involvement for "([^"]*)" private Fostering carer$/, function (personSeq) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = personSeq === "first" ? config.PersonDetails.person1.Name : (personSeq === "second" ? config.PersonDetails.person2.Name : null);
        if (person != null) {
            return page.involvements_page.verifyCreatedInvolvementBy(person, "Private fostering");
        } else {
            assert.fail("attribute value is not correct")
        }
    });

    this.Then(/^I update "([^"]*)" date for "([^"]*)" private Fostering carer to today - (\d+) days$/, function (fieldToUpdate, personSeq, noOfDays) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = personSeq === "first" ? config.PersonDetails.person1.Name : (personSeq === "second" ? config.PersonDetails.person2.Name : null);
        var todaysDate = new Date();
        targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() - noOfDays);
        if (person != null) {
            return page.involvements_page.updateDateForInvolvement(fieldToUpdate, person, targetDate);
        } else {
            assert.fail("attribute value is not correct")
        }
    });

    this.Then(/^I update "([^"]*)" date for "([^"]*)" private Fostering carer to today \+ (\d+) days$/, function (fieldToUpdate, personSeq, noOfDays) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = personSeq === "first" ? config.PersonDetails.person1.Name : (personSeq === "second" ? config.PersonDetails.person2.Name : null);
        var todaysDate = new Date();
        targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate() + noOfDays);
        if (person != null) {
            return page.involvements_page.updateDateForInvolvement(fieldToUpdate, person, targetDate);
        } else {
            assert.fail("attribute value is not correct")
        }
    });

    this.Then(/^I update "([^"]*)" date for "([^"]*)" private Fostering carer to today$/, function (fieldToUpdate, personSeq) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = personSeq === "first" ? config.PersonDetails.person1.Name : (personSeq === "second" ? config.PersonDetails.person2.Name : null);
        var todaysDate = new Date();
        targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
        if (person != null) {
            return page.involvements_page.updateDateForInvolvement(fieldToUpdate, person, targetDate);
        } else {
            assert.fail("attribute value is not correct")
        }
    });
};