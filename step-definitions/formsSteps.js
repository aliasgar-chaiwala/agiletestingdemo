module.exports = function () {

    this.When(/^I should see "([^"]*)" Owned by "([^"]*)" with status "([^"]*)"$/, function (formName, formTeam, formStatus) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;

        TEAMNAME = config.Teams[formTeam].NAME;
        var dateFormat = require('dateformat');
        var currentDate = new Date();
        var formatDate = dateFormat(currentDate, "dd/mm/yyyy");
        var compStr = formName + ' ' + TEAMNAME + ' ' + formStatus + ' ' + formatDate;

        return page.forms_page.checkForm(compStr, formName);
    });

    this.When(/^I should see "([^"]*)" Owned by "([^"]*)" from "([^"]*)" with status "([^"]*)"$/, function (formName, user, formTeam, formStatus) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var OwnedBy = null;
        var assertUserTM = user.includes("TeamManager");
        var assertUserSW = user.includes("SocialWorker");
        if (assertUserTM) {
            var TmNo = user.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            OwnedBy = config.Teams[formTeam][TmNo].NAME;
        }
        else if (assertUserSW) {
            var SwNo = user.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            OwnedBy = config.Teams[formTeam][SwNo].NAME;
        } else {

        }

        var dateFormat = require('dateformat');
        var currentDate = new Date();
        var formatDate = dateFormat(currentDate, "dd/mm/yyyy");
        var compStr = formName + ' ' + OwnedBy + ' ' + formStatus + ' ' + formatDate;
        console.log("compStr: ", compStr);
        return page.forms_page.checkForm(compStr, formName);
    });

    this.When(/^I should see and select "([^"]*)" Owned by "([^"]*)" from "([^"]*)" with status "([^"]*)"$/, function (formName, user, formTeam, formStatus) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var OwnedBy = null;
        var assertUserTM = user.includes("TeamManager");
        var assertUserSW = user.includes("SocialWorker");
        if (assertUserTM) {
            var TmNo = user.split("TeamManager");
            TmNo = 'TM' + TmNo[1];
            OwnedBy = config.Teams[formTeam][TmNo].NAME;
        }
        else if (assertUserSW) {
            var SwNo = user.split("SocialWorker");
            SwNo = 'SW' + SwNo[1];
            OwnedBy = config.Teams[formTeam][SwNo].NAME;
        } else {

        }

        var dateFormat = require('dateformat');
        var currentDate = new Date();
        var formatDate = dateFormat(currentDate, "dd/mm/yyyy");
        var compStr = formName + ' ' + OwnedBy + ' ' + formStatus + ' ' + formatDate;

        return page.forms_page.clickForm(compStr, formName);
    });

    this.When(/^I should see and select "([^"]*)" Owned by "([^"]*)" with status "([^"]*)"$/, function (formName, formTeam, formStatus) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;
        TEAMNAME = config.Teams[formTeam].NAME;
        var dateFormat = require('dateformat');
        var currentDate = new Date();
        var formatDate = dateFormat(currentDate, "dd/mm/yyyy");
        var compStr = formName + ' ' + TEAMNAME + ' ' + formStatus + ' ' + formatDate;

        return page.forms_page.clickForm(compStr, formName);
    });

};