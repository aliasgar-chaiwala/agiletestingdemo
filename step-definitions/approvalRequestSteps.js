module.exports = function () {

    function getUserName(User, Team) {

        config = jsonfile.readFileSync('./support/' + featureConfig);

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

    this.Then(/^I navigate to Approval Request page$/, function () {
        // console.log('step Closure ');
        return page.approvalRequest_page.navigateApprovalRequestPage();
    });


    this.Then(/^I should see the all the fields available on the approval request page$/, function () {
        // console.log('step Closure ');
        return page.approvalRequest_page.verifyfieldsApprovalRequestPage();
    });

    //I should see and select "Single Assessment SFA" submitted by "SocialWorker1" of team "Team1" for case
    this.When(/^I should see and select "([^"]*)" submitted by "([^"]*)" of team "([^"]*)" for case$/, function (formName, submittedBy, team) {
        USERNAME = getUserName(submittedBy, team);
        CASE = config.PersonDetails.Name;
        return page.approvalRequest_page.clickApprovalForm(formName, USERNAME, CASE)
    });
    this.Then(/^I should see and select "([^"]*)" submitted by "([^"]*)" of team "([^"]*)" for case1 and case2$/, function (formName, submittedBy, team){
         USERNAME = getUserName(submittedBy, team);
         CASE1 = config.PersonDetails.Name;
         CASE2=config.PersonDetails.person1.Name;
         return page.approvalRequest_page.clickApprovalFormTwoCase(formName, USERNAME,CASE1,CASE2)
     });
    this.When(/^I should see and select "([^"]*)" submitted by "([^"]*)" of team "([^"]*)" for case with owner "([^"]*)"$/, function (formName, submittedBy, team, owner) {
        USERNAME = getUserName(submittedBy, team);
        CASE = config.PersonDetails.Name;
        Owner = getUserName(owner, team);
        return page.approvalRequest_page.ApprovFormWithCaseOwner(formName, USERNAME, CASE, Owner);
    });
     
}