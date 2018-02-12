
module.exports = function () {

    config = jsonfile.readFileSync('./support/'+featureConfig);

    //Step: And I should see legal status page
    this.Then(/^I should see legal status page$/, function () {

        return page.legalStatus_page.verifyLegalStatusPage();
    });

    //Step: Then I choose LegalStatus widget - features\LegalStatus.feature:40
    this.Then(/^I click new legal status icon$/, function () {

        return page.legalStatus_page.newLegalStatusIcon();
    });

    //I should see new legal status section
    this.Then(/^I should see new legal status section$/, function () {
        return page.legalStatus_page.verifyNewStatusSection();
    });

    //Step: And I created the new LegalStatus - features\LegalStatus.feature:42
    this.Then(/^I create new Status with "([^"]*)" status$/, function (Status) {
        return page.legalStatus_page.createNewLegalStatus(Status);
    });

    //Step: And I should see Created LegalStatus - features\LegalStatus.feature:42
    this.Then(/^I should see Created Status with "([^"]*)" status$/, function (Status) {        
        return page.legalStatus_page.verifyCreatedLegalStatus(Status);

    });

};