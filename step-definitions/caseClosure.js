module.exports = function () {

    this.Then(/^I should see Closure form$/, function () {
        // console.log('step Closure ');
        return page.caseClosure_page.verifyClosureForm();
    });

    this.Then(/^I check to see autosave functionality$/, function () {
        return page.caseClosure_page.verifyAutosave();
    });

    this.Then(/^I fill details in Closure form$/, function () {

        console.log('step Closure ');
        return page.caseClosure_page.fillReason().then(function () {
            return page.caseClosure_page.fillComment();
        });
    });

    //I close the unique "person2" case
    this.Then(/^I close the unique "([^"]*)" case$/, function (person) {
        var personName = config.PersonDetails[person].Name;
        console.log('step Close Case : personName');
        return page.caseClosure_page.closeCase(personName);
    });

    //I should see "Case closed on" on notification under essential information widget
    this.Then(/^I should see "([^"]*)" on notification under essential information widget on person page$/, function (notif) {
        return page.personFacet_page.verifyNotifEI(notif);
    });

    //I should see case closed icon under EI widget
    this.Then(/^I should see case closed icon under EI widget on person page$/, function () {
        return page.caseClosure_page.varifyCaseCloseIcon();
    });
}