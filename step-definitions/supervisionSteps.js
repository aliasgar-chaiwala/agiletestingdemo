module.exports = function () {

    //console.log('global config value in : searchPersonSteps', config);

    function getUserName(User, Team) {

        config = jsonfile.readFileSync('./support/'+featureConfig);

        var NAME = null, ID = null,
            PWD = config.PWD,
            TEAMNAME = null, USERTYPE = null;

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
    var USERNAME = null;

    //I should see profile for "TeamManager1" of "Team1"
    this.Then(/^I should see profile for "([^"]*)" of "([^"]*)"$/, function (User, Team) {
         USERNAME = getUserName(User, Team);
        return page.userFacet_page.verifyUserFacet(USERNAME);
    });

    this.Then(/^I navigate to Supervision$/, function () {
        return page.supervision_page.navigateSupervision();
    });

    this.Then(/^I create a new supervision for "([^"]*)" of "([^"]*)"$/, function (User, Team) {
        USERNAME = getUserName(User, Team);
        return page.supervision_page.createNewSupervision(USERNAME).then(function () {
            return page.supervision_page.submitSupervision(USERNAME);
        });
    });

    this.Then(/^I should see the creted supervision for "([^"]*)" of "([^"]*)"$/, function (User, Team) {
        USERNAME = getUserName(User, Team);
        return page.supervision_page.verifyCreatedSupervision(USERNAME);
    });

    this.Then(/^I should see last supervised details$/, function () {
        return page.supervision_page.verifyLastSupervised();
    });
}