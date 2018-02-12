module.exports = function () {

    this.Then(/^I should see Transfer form$/, function () {
        return page.caseTransfer_page.verifyTransferForm();
    });

    this.Then(/^I fill details in Transfer form$/, function () {
        return page.caseTransfer_page.fillTransferDetails()
    });

    //I close the unique "person2" case
    this.Then(/^I transfer the unique "([^"]*)" case$/, function (person) {
        var personName = config.PersonDetails[person].Name;
        console.log('step Close Case : personName');
        return page.caseTransfer_page.transferCase(personName);
    });

    //I should see "Case closed on" on notification under essential information widget
    this.Then(/^I should see "([^"]*)" on notification under essential information widget$/, function (notif) {
        return page.personFacet_page.verifyNotifEI(notif);
    });

    //I should see case closed icon under EI widget
    this.Then(/^I should see case closed icon under EI widget$/, function () {
        return page.caseClosure_page.varifyCaseCloseIcon();
    });
}