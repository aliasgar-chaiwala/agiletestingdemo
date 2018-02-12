
module.exports = function () {

	this.Then(/^I verify single assessment Form$/, function () {
		return page.singleAssessment_page.verifySingleAssessment();
	});
	//I fill Assessment Details on single assessment form
	this.Then(/^I fill Assessment Details on single assessment form$/, function () {
		return page.singleAssessment_page.fillAssDetailsSingleAssessMent().then(function () {
			return driver.sleep(1500);
		});
	});

	//I set Reason for delay in Assessment Details
	this.Then(/^I set Reason for delay in Assessment Details$/, function () {
		return page.singleAssessment_page.fillReasonAssDetailsSingleAssessMent().then(function () {
			return driver.sleep(1500);
		});
	});
	

	//I fill "([^"]*)" as category and "([^"]*)" as factor for Factors Identified for assessment
	this.Then(/^I fill "([^"]*)" as category and "([^"]*)" as factor for Factors Identified for assessment$/, function (Category, Factor) {
		return page.singleAssessment_page.fillFactorsIdentifiedAssessMent(Category, Factor).then(function () {
			return driver.sleep(1500);
		});
	});

	this.Then(/^I choose Next Step with Team and Priority$/, function () {
		return page.singleAssessment_page.setNextStepWithTeam();
	});

	this.Then(/^I submit the Form for Manager Approval$/, function () {
        return page.singleAssessment_page.SubmitForm();
	});

	this.Then(/^I navigate to Approvals Requests page and approve form$/, function () {
		return page.tmDashboard_page.tmApprovesForm();
	});

	// this.Then(/^I should see ([^"]*) under form$/, function (formName) {
	// 	return page.singleAssessment_page.checkForm(formName);
	// });

	this.Then(/^I approve the Form sent by Social Worker$/, function () {
		return page.singleAssessment_page.managerApproval();
	});

	// this.Then(/^I add Assessemnt start date details$/, function () {
	// 	return page.singleAssessment_page.assessmentDetails();
	// });

	this.Then(/^I submit the Form as a Manager$/, function () {
		return page.singleAssessment_page.managerSubmitForm();
	});

	//I Reject the Form sent by Social Worker
	this.Then(/^I Reject the Form sent by Social Worker$/, function () {
		return page.singleAssessment_page.managerReject();
	});

	//I verify the Rejection Date
	this.Then(/^I verify the Rejection Date$/, function () {
		return page.singleAssessment_page.verifyRejectDate();
	});

	this.Then(/^I discard the Form as a Manager$/, function () {
		return page.singleAssessment_page.tmDiscardForm();
	});	

	this.Then(/^I discard the Form as a Social Worker$/, function () {
		return page.singleAssessment_page.swDiscardForm();
	});

	this.Then(/^I set authorization date and submit the form as a Manager$/, function () {
		return page.singleAssessment_page.setAuthorizationandSubmit();
	});

	this.Then(/^I approve the form as a Manager$/, function () {
		return page.singleAssessment_page.managerApproveForm();
	});
	this.Then(/I click to segregate the subject$/, function () {
		return page.singleAssessment_page.segregateSubject();
	});
	this.Then(/I select "([^"]*)" from next steps list for subject1$/, function (formName) {
		return page.singleAssessment_page.selectNextStagesubject1(formName);
	});
	this.Then(/I select "([^"]*)" from next steps list for subject2$/, function (formName) {
		return page.singleAssessment_page.selectNextStagesubject2(formName);
	});


}