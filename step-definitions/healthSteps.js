
module.exports = function () {  

    this.Then(/^I navigate to Health Widget$/, function () {
        return page.pageHead.healthNavigation();
    });

	this.Then(/^I verify Medical Conditions on Health Information$/, function () {
		return page.healthInfo_page.verifyMedicalConditionsFields();
	});

	this.Then(/^I verify Disabilities on Health Information$/, function () {
		return page.healthInfo_page.verifyDisabilitiesFields();
	});

	//I create a Medical Conditions
	this.Then(/^I create multiple Medical Conditions$/, function () {
		return page.healthInfo_page.addTwoMedicalConditions();
	});	

	//I save the Health Information
	this.Then(/^I save the Health Information$/, function () {
		return page.healthInfo_page.saveHealthInfo();
	});
	
	//I verify multiple Medical Conditions
	this.Then(/^I verify multiple Medical Conditions$/, function () {
		return page.healthInfo_page.verifyMultiMediCondi();
	});

	//I verify Medication created from PIR form
	this.Then(/^I verify Medication created in Health Information from PIR form$/, function () {
		return page.healthInfo_page.verifyMedicationFromPIRform();
	});	

	//Then I delete Medication from Health Information
	this.Then(/^I delete Medication from Health Information$/, function () {
		return page.healthInfo_page.deleteFirstMedication();
	});	

	//I create Medication in Health Information
	this.Then(/^I create Medication in Health Information$/, function () {
		return page.healthInfo_page.addMedication()
		.then(function () {
			return page.healthInfo_page.setMedication();
		})
	});
	
	this.Then(/^I provide Two Medication on Health Widget$/, function () {
		return page.healthInfo_page.setMedicationOnHealthWidget();
	});

	this.Then(/^I provide Third Medication on Health Widget$/, function () {
		return page.healthInfo_page.setThirdMedicationOnHealthWidget();
	});

	this.When(/^I delete and verify the created medication on Health Information$/, function () {
		return page.healthInfo_page.deleteMedicationOnHealthInfo()
	});

		this.When(/^I should see no records found on disabilities$/, function () {
		return page.healthInfo_page.noDisabilityRecords()
	});

		this.Then(/^I verify Disabilities created in Health Information from PIR form$/, function () {
		return page.healthInfo_page.verifyDisabilitiesFromPIRform();
	});	

		this.Then(/^I provide Two Disabilities on Health Widget$/, function () {
		return page.healthInfo_page.setTwoDisabilitiesOnHealthWidget();
	});

		this.When(/^I update created disabilities Details$/, function () {
		return page.healthInfo_page.updateCreatedDisabilities();
	});

		this.Then(/^I provide Disabilities on Health Widget$/, function () {
		return page.healthInfo_page.setDisabilitiesOnHealthWidget();
	});

		//I create a Medical Conditions
	this.Then(/^I create a Medical Conditions$/, function () {
		return page.healthInfo_page.addMedicalConditions();
	});	

	//I add dental check details
	this.Then(/^I add dental check details$/, function () {
		return page.healthInfo_page.setDentalCheck();
	});
}