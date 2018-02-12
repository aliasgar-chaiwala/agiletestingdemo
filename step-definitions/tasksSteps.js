
module.exports = function () {

    config = jsonfile.readFileSync('./support/'+featureConfig);

    this.Then(/^I navigate to tasks page$/, function () {
        return page.tasks_page.navigateTasks();
    });

    this.Then(/^I create a new task for person to user$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        personName = config.PersonDetails.Name;
        return page.tasks_page.createPersonTask(personName);
    });


    this.Then(/^I create a team task for "([^"]*)" to user$/, function (Team) {

        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        TEAMNAME = config.Teams[Team].NAME;
        //console.log('\nTEAMNAME :', TEAMNAME);

        return page.tasks_page.createTeamTask(TEAMNAME);
    });

    //I create a team task for "Team1" to user
    //I create a team task to user

    this.Then(/^I should see created person task$/, function () {

        config = jsonfile.readFileSync('./support/'+featureConfig);
        personName = config.PersonDetails.Name;
        var expectedTitle = config.Tasks.personTaskDesc + personName;
        return page.tasks_page.verifyPersonTask(expectedTitle);
    });

    this.Then(/^I switch task view to "([^"]*)"$/, function (TYPE) {
        return page.tasks_page.switchTaskTypePage(TYPE);
    });

    this.Then(/^I should see created team task for "([^"]*)"$/, function (Team) {

        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        TEAMNAME = config.Teams[Team].NAME;
        //console.log('\nTEAMNAME :', TEAMNAME);

        var expectedTitle = config.Tasks.teamTaskDesc + TEAMNAME;

        return page.tasks_page.verifyTeamTask(expectedTitle);
    });

    this.Then(/^I own the team task for "([^"]*)"$/, function (Team) {
        
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        TEAMNAME = config.Teams[Team].NAME;
        //console.log('\nTEAMNAME :', TEAMNAME);

        var expectedTitle = config.Tasks.teamTaskDesc + TEAMNAME;

        return page.tasks_page.ownTeamTask(expectedTitle);
    });

    this.Then(/^I mark team task for "([^"]*)" done$/, function (Team) {
        
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var TEAMNAME = null;

        var assertTeam = Team.includes("Team");
        //console.log('\nassertTeam :', assertTeam);
        TEAMNAME = config.Teams[Team].NAME;
        //console.log('\nTEAMNAME :', TEAMNAME);

        var expectedTitle = config.Tasks.teamTaskDesc + TEAMNAME;

        return page.tasks_page.markTaskDone(expectedTitle);
    });

    this.Then(/^I mark my task done$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        personName = config.PersonDetails.Name;
        var expectedTitle = config.Tasks.personTaskDesc + personName;
        return page.tasks_page.markTaskDone(expectedTitle);
    });

    //I collapse expanded task
    this.Then(/^I collapse expanded task$/, function () {
        
        return page.tasks_page.collapseTask();
    });
};