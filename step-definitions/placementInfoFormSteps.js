
module.exports = function () {

    this.When(/^I navigate to Placement Information form$/, function () {
        return page.pageHead.pirFormNavigation();
    });

    this.When(/^I provide Medical conditions on PIR form$/, function () {
        return page.placementInfoRecord_page.setMedicalConditions()
    });

    this.When(/^I approach to provide Medical conditions on PIR form$/, function () {
        return page.placementInfoRecord_page.toggleMedicalConditions()
    });

    this.When(/^I verify Empty Medical conditions for Everyone on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyEmptyMedicalConditionForEveryone()
    });

    this.When(/^I approach to provide Medication on PIR form$/, function () {
        return page.placementInfoRecord_page.toggleMedication()
    });

    this.When(/^I verify Empty Medication for Everyone on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyEmptyMedicationForEveryone()
    });

    this.When(/^I provide Medication on PIR form$/, function () {
        return page.placementInfoRecord_page.setMedication()
    });

    this.When(/^I approach to provide Disabilities on PIR form$/, function () {
        return page.placementInfoRecord_page.toggleDisabilities()
    });

    this.When(/^I verify Empty Disabilities for Everyone on PIR form$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var person = config.PersonDetails.Name;
        return page.placementInfoRecord_page.verifyEmptyDisabilitiesForEveryone(person)
    });

    this.When(/^I provide Disabilities on PIR form$/, function () {
        return page.placementInfoRecord_page.setDisabilities()
    });

    this.When(/^I remove a medical condition$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var person = config.PersonDetails.Name;

        return page.placementInfoRecord_page.toggleMedicalConditions(person)
            .then(function () {
                return page.placementInfoRecord_page.removeFirstMedicalCondition();
            });
    });

    this.When(/^I verify Medication for unique Person on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyMedicationForUniquePerson()
    });

    //I verify Empty Medication for unique Person1 on PIR form
    this.When(/^I verify Empty Medication for unique Person1 on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyEmptyMedicationForPerson1()
    });

    //I verify Medication for Everyone on PIR form
    this.When(/^I verify Medication for Everyone on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyMedicationForEveryone()
    });

    //I remove Person2 from This is for in Medication of PIR Form
    this.When(/^I remove Person2 from This is for in Medication of PIR Form$/, function () {
        return page.placementInfoRecord_page.removePerson2FromMedication()
    });

    //I verify Medication for first two Person on PIR form
    this.When(/^I verify Medication for first two Person on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyMedicationForFirstTwoPerson()
    });

    //I verify Empty Medication for unique Person2 on PIR form
    this.When(/^I verify Empty Medication for unique Person2 on PIR form$/, function () {
        return page.placementInfoRecord_page.verifyEmptyMedicationForPerson2()
    });

    this.When(/^I should see compare changes notification$/, function () {
        return page.placementInfoRecord_page.verifyPIRNotification()
    });

    this.Then(/^I should see comparison window$/, function () {
        return page.placementInfoRecord_page.comparisonWindow()
    });

    this.When(/^I update the medication on PIR Form$/, function () {
        return page.placementInfoRecord_page.updateMedicationFields()
    });

    this.When(/^I update the first medication on PIR Form$/, function () {
        return page.placementInfoRecord_page.updateFirstMedicationFields()
    });

    this.When(/^I choose and verify the keep my latest changes$/, function () {
        return page.placementInfoRecord_page.latestChanges()
    });

    this.When(/^I delete and verify the created medication on PIR Form$/, function () {
        return page.placementInfoRecord_page.deleteMedicationOnPIRForm()
    });

    this.When(/^I should not see notification$/, function () {
        return page.placementInfoRecord_page.notificationNotVisible()
    });

    this.When(/^I choose and verify the latest changes$/, function () {
        return page.placementInfoRecord_page.takeLatestChanges()
    });

    this.When(/^I should see comparison window with status removed$/, function () {
        return page.placementInfoRecord_page.comparisonWindowStatusRemovedVisible()
    });

    this.When(/^I should see comparison window with status added$/, function () {
        return page.placementInfoRecord_page.comparisonWindowStatusAddedVisible()
    });

    this.When(/^I verify the keep my latest changes$/, function () {
        return page.placementInfoRecord_page.keepChangesStatus()
    });

    this.When(/^I should see comparison window with not clubbed core data$/, function () {
        return page.placementInfoRecord_page.verifyNotClubbedData()
    });

    this.When(/^I verify person1 and update medication on everyone section$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var person = config.PersonDetails.person1.Name;
        return page.placementInfoRecord_page.verifyPeron1Name(person)
    });

    this.When(/^I should see everyone on everyone section$/, function () {
        return page.placementInfoRecord_page.everyoneVisible()
    });

    this.When(/^I delete the medication on step level$/, function () {
        return page.placementInfoRecord_page.deleteStepLevelMedication()
    });

    this.When(/^I should see Created Disabilities on PIR Form$/, function () {
        return page.placementInfoRecord_page.verifyCreatedDisabilities()
    });

    this.When(/^I should see created Disabilities for both persons$/, function () {
        return page.placementInfoRecord_page.verifyCreatedDisabilitiesForBoth()
    });

    this.When(/^I choose another person to see everyone section$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var person = config.PersonDetails.Name;
        return page.placementInfoRecord_page.setTwoPersons(person)
    });

    this.When(/^I should see unique person disabilities under everyone section$/, function () {
        return page.placementInfoRecord_page.verifyCreatedDisabilitiesForUniquePerson()
    });

    this.When(/^I verify the field and version details$/, function () {
        return page.placementInfoRecord_page.verifyComparsionTitle()
    });

    this.When(/^I should see two subjected persons under comparison window$/, function () {
        return page.placementInfoRecord_page.verifyComparsionPersons()
    });

    this.When(/^I verify comparison window and choose latest$/, function () {
        return page.placementInfoRecord_page.verifyLatestData()
    });

    this.When(/^I should see everyone after clubbing data$/, function () {
        return page.placementInfoRecord_page.setToEveryone()
    });

    this.When(/^I set combinations by choosing update my changes with selecting combinations$/, function () {
        return page.placementInfoRecord_page.combinData()
    });
    this.When(/^I choose and verify the updated combined changes$/, function () {
        return page.placementInfoRecord_page.verfiyCombinedData()
    });

    this.When(/^I should not see Update My Changes With Selecting Combinations$/, function () {
        return page.placementInfoRecord_page.verifySelectiveCombinationNotVisible()
    });

    this.When(/^I not able to see latest changes when I choose latest version$/, function () {
        return page.placementInfoRecord_page.verifyLatestChangesNotVisible()
    });

    this.When(/^I set Reset then I should not see Update My Changes With Selecting Combinations$/, function () {
        return page.placementInfoRecord_page.afterResetVerifySelectiveCombination()
    });

    this.When(/^I verify the Appointments Section$/, function () {
        return page.placementInfoRecord_page.toggleAppointments()
    });

    this.Then(/^I should see No Appointment has been recorded$/, function () {
        return page.placementInfoRecord_page.noRecordsForAppointmentsVisible()
    });

    this.When(/^I add a new Appointments through PIR Form$/, function () {
        return page.placementInfoRecord_page.addNewAppointments()
    });

    this.When(/^I add another Appointment through PIR Form$/, function () {
        return page.placementInfoRecord_page.addAnotherAppointments()
    });

    this.Then(/^I should see the Created Appointments$/, function () {
        return page.placementInfoRecord_page.verifyCreatedAppointmentsVisible()
    });

    this.When(/^I delete the created appointment$/, function () {
        return page.placementInfoRecord_page.deleteAppointment()
    });

    this.Then(/^I update the created Appointments$/, function () {
        return page.placementInfoRecord_page.updateCoreAppointmentData()
    });

    this.When(/^I add a new Appointments for new person1 through PIR Form$/, function () {
        return page.placementInfoRecord_page.addNewPerson1Appointments()
    });

    this.Then(/^I should see the created both persons appointment data$/, function () {
        return page.placementInfoRecord_page.verifyBothPersonsCreatedAppointmentsVisible()
    });

    this.When(/^I delete the another person created appointment$/, function () {
        return page.placementInfoRecord_page.deletePersonOneAppointment()
    });

    this.Then(/^I should see No Appointment has been recorded for both persons$/, function () {
        return page.placementInfoRecord_page.noRecordsForBothPersosnAppointmentsVisible()
    });

    this.When(/^I should see Information Mismatch Notification$/, function () {
        return page.placementInfoRecord_page.mismatchNotification()
    });

    this.When(/^I update the Medical Conditions on PIR Form$/, function () {
        return page.placementInfoRecord_page.updateMedicalConditionFields()
    });

    this.Then(/^I should see the Medical Condition compare changes notification$/, function () {
        return page.placementInfoRecord_page.verifyPIRMCNotification()
    });

    this.Then(/^I should see the Medical Condition comparison window$/, function () {
        return page.placementInfoRecord_page.medicalConditionComparisonWindow()
    });

    this.Then(/^I set the Take Latest under Appointments Notification$/, function () {
        return page.placementInfoRecord_page.appointmentNotificationLatest()
    });

        this.When(/^I update the ceated Appointments$/, function () {
        return page.placementInfoRecord_page.updateNewPerson1Appointments()
    });


}