module.exports = function () {

	this.Then(/^I should be taken to social worker dashboard$/, function () {
		return page.swDashboard_page.socialWorkerDashboard();
	});

	this.defineStep(/^I verify the allocated person1 case under Case Load Screen$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		return page.swDashboard_page.checkCaseLoadScreenForPerson1(config.PersonDetails.person1.FirstName);
	});

	this.defineStep(/^I verify the allocated person2 case under Case Load Screen$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.person2.FirstName;
		return page.swDashboard_page.checkCaseLoadScreenForPerson2(FirstName);

	});

	this.defineStep(/^I verify the allocated person case under Case Load Screen$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		return page.swDashboard_page.checkCaseLoadScreenForPerson(config.PersonDetails.FirstName);

	});
	this.defineStep(/^I verify the allocated person3 case under Case Load Screen$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		return page.swDashboard_page.checkCaseLoadScreenForPerson3(config.PersonDetails.person3.FirstName);
		//return page.swDashboard_page.verifyCaseUnderCaseLoad();
	});

	this.defineStep(/^I verify the allocated person3 not available on Case Load Screen$/, function () {
		return page.swDashboard_page.verifyCaseUnderCaseLoad();
	});

	this.defineStep(/^I should see message with subject under workload section$/, function () {
		return page.swDashboard_page.verifyMessageSubject();
	});

	this.Then(/^I should see Missing person available under case load section$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.FirstName;
		return page.swDashboard_page.checkMissingCase(FirstName);
	});

	this.Then(/^I should see Absent person1 available under case load section$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		Name = config.PersonDetails.person1.FirstName;
		return page.swDashboard_page.checkAbsentCase(Name);
	});

	this.defineStep(/^I verify the case bubble size$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.person2.FirstName;
		pageName = FirstName + "'s Page";
		return page.swDashboard_page.verifyCaseBubble(pageName);
	});

	this.defineStep(/^I verify the increased case bubble size$/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.person2.FirstName;
		pageName = FirstName + "'s Page";
		return page.swDashboard_page.verifyIncreasedCaseBubble(pageName);
	});



}