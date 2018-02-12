module.exports = function () {

    this.Then(/^I verify personId of person1 in duplicate widget with (\d+) characters$/, function (maxLength) {
        return page.duplicateMgmt_page.verifyPersonId(config.PersonDetails.person1.Name, maxLength);
    });
}