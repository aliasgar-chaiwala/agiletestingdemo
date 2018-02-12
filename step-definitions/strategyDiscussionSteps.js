
config = jsonfile.readFileSync('./support/'+featureConfig);
module.exports = function () {

    this.When(/^I navigate to Strategy Discussion form$/, function () {
        return page.pageHead.navigateStrategyDiscussionForm();
    });

    this.When(/^I navigate to "([^"]*)" form from Journeys "([^"]*)"$/, function (form, Journey) {
        return page.personFacet_page.navigateStrategyDiscussionJourney(form, Journey);
    });

    this.When(/^I provide Strategy discussion details on Strategy Discussion form$/, function () {
       return page.strategyDiscussion_page.setStrategyDiscussionDetails();
       /* return page.strategyDiscussion_page.toggleStrategyDiscussionDetails()
            .then(function () {
                return page.strategyDiscussion_page.setStrategyDiscussionDetails();
            })*/
    });

    this.Then(/^I approve the form$/, function () {
        return page.singleAssessment_page.SubmitForm();
    });

    this.Then(/^I Submit the form$/, function () {
        return page.singleAssessment_page.SubmitForm();
    });

	this.Then(/^I verify Alleged abuse category in Single Assessment$/, function () {
		return page.strategyDiscussion_page.verifyAllegedAbuseCategorySingleAssessment();
	});	   

    //I approach to add action in next step
	this.Then(/^I approach to add action in next step$/, function () {
		return page.strategyDiscussion_page.addActionNextStep();
	});    

    //I set Action details in next step
	this.Then(/^I set Action details in next step to "([^"]*)"$/, function (team) {
		return page.strategyDiscussion_page.setActionNextStep(team);
	});     

};