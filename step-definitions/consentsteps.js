
module.exports = function () {

    //Step: Then I choose Consent widget - features\Consent.feature:40
    this.Then(/^I click Consent icon$/, function () {

        return page.consents_page.navigateConsent();
    });

    //Step: And I should see Consent page - features\Consent.feature:41
    this.Then(/^I should see Consent page$/, function () {

        return page.consents_page.verifyConsentPage();
    });

    //Step: And I created the new Consent - features\Consent.feature:42
    this.Then(/^I create new Partial Consent$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        personName = config.PersonDetails.Name;
        return page.consents_page.createNewConsent(personName);
        // .then(function () {
        //     return page.consents_page.addConsentDate();
        // });
    });

    this.Then(/^I add more details for new Partial Consent$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        personName = config.PersonDetails.Name;
        return page.consents_page.addConsentDate(personName);
    });

    this.Then(/^I submit new Partial Consent$/, function () {
        return page.consents_page.submitConsent();
    });

    this.Then(/^I Hover on consent icon to check created consent$/, function () {
        return page.consents_page.hoverConsent();

    });

    //Step: And I should see Created Partial Consent - features\Consent.feature:42
    this.Then(/^I should see Created Partial Consent$/, function () {
        return page.consents_page.verifyCreatedConsent();
    });

};