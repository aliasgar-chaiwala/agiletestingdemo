module.exports = function () {

	this.Then(/^I navigate to Leaving Care Assessment form$/, function () {
		return page.pageHead.leaveCareAssessmentNavigation();
	});

	this.Then(/^I provide Education details in Leave Care Assessment$/, function () {
		return page.leaveCareAssessment_page.toggleEducation()
			.then(function () {
				return page.leaveCareAssessment_page.addEducation()
			});
	});

	this.Then(/^I provide Employment details in Leave Care Assessment$/, function () {
		return page.leaveCareAssessment_page.toggleEmployment()
			.then(function () {
				return page.leaveCareAssessment_page.addEmployment()
				/*.then(function () {
			return page.leaveCareAssessment_page.toggleEmployment()
		});*/
			});
	});

	this.Then(/^I should see No employment Record under Employment$/, function () {
		return page.leaveCareAssessment_page.toggleEmployment()
			.then(function () {
				return page.leaveCareAssessment_page.verifyEmploymentRecord()
			});
	});

	this.Then(/^I provide another New Employment details in Leave Care Assessment$/, function () {
		return page.leaveCareAssessment_page.toggleEmployment()
			.then(function () {
				return page.leaveCareAssessment_page.addNewEmployment()
			});
	});

	this.Then(/^I verify the created company's under employment section$/, function () {
		return page.leaveCareAssessment_page.toggleEmployment()
			.then(function () {
				return page.leaveCareAssessment_page.verifyCompany()
			});
	});

	this.Then(/^I delete and verify the available employment details$/, function () {
		return page.leaveCareAssessment_page.deleteAndVerify()
	});

	this.Then(/^I verify Training details with Everyone section under Leave Care Assessment Form$/, function () {
		return page.leaveCareAssessment_page.verifyTrainingEveryoneSection()
	});

	this.Then(/^I verify Training details with Person Names under Leave Care Assessment Form$/, function () {
		return page.leaveCareAssessment_page.verifyTrainingPersonNames()
	});

	this.Then(/^I update the step level training data$/, function () {
		return page.leaveCareAssessment_page.updateTrainingStepLevelData()
	});
}