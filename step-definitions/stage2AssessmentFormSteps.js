
module.exports = function () {

	this.Then(/^I verify stage2 assessment Form$/, function () {
		return page.stage2Assessment_page.verifyStage2Assessment();
	});

	this.Then(/^I provide background check information$/, function () {
		return page.stage2Assessment_page.fillBackgroundDetails();
	});

	//I set the Start date for Form
	this.Then(/^I set the Start date for Form$/, function () {
		return page.stage2Assessment_page.setFormStartDate();
	});

	this.When(/^I verify the saved core data under reference checks$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.Name;
		return page.stage2Assessment_page.verifyReferenceCoreData(person);
	});

	this.Then(/^I update the reference check details$/, function () {
		return page.stage2Assessment_page.updateReferenceChecks();
	});

	this.When(/^I verify the saved step data under reference checks$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.Name;
		return page.stage2Assessment_page.verifyReferenceStepData(person);
	});

}