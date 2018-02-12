function getUserName(user, team) {
    var userName = null;

    var assertUserTM = user.includes("TeamManager");
    var assertUserSW = user.includes("SocialWorker");

    var assertTeam = team.includes("Team");

    if (assertUserTM) {
        var TmNo = user.split("TeamManager");
        TmNo = 'TM' + TmNo[1];

        if (assertTeam) {
            userName = config.Teams[team][TmNo].NAME;
        }
    }
    else if (assertUserSW) {

        var SwNo = user.split("SocialWorker");
        SwNo = 'SW' + SwNo[1];

        if (assertTeam) {
            userName = config.Teams[team][SwNo].NAME;
        }
    } else {
        assert.fail("Error in team Or user name");
    }
    return userName;
}

module.exports = function () {

    config = jsonfile.readFileSync('./support/' + featureConfig);

    //Step: Then I choose warning widget - features\warning.feature:40
    this.Then(/^I click warning icon$/, function () {

        return page.warning_page.navigateWarning();
    });


    //Step: And I should see warning page - features\warning.feature:41
    this.Then(/^I should see warning page$/, function () {

        return page.warning_page.verifyWarningPage();
    });

    //Step: And I created the new warning - features\warning.feature:42
    this.Then(/^I create new warning$/, function () {

        config = jsonfile.readFileSync('./support/' + featureConfig);
        return page.warning_page.createNewWarning(config.Warning.Title);
    });

    //Step: And I should see Created Warning - features\warning.feature:42
    this.Then(/^I should see Created Warning$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        return page.warning_page.verifyCreatedWarning(config.Warning.Title);

    });

    this.Then(/^I verify "([^"]*)" warning by "([^"]*)" of "([^"]*)" on todays date$/, function (warningTitle, user, team) {
        var userName = getUserName(user, team);
        var todaysDate = new Date();
        todaysDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
        var todaysDateDDMMYYYY = helpers.getDateFormat(todaysDate, "dd/mm/yyyy");
        return page.warning_page.verifyMissingPersonWarning(warningTitle, userName, todaysDateDDMMYYYY);
    });
};