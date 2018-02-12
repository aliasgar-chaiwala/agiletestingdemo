
config = jsonfile.readFileSync('./support/'+featureConfig);
module.exports = function () {

    this.Then(/^I navigate to SDQ form$/, function () {
        return page.pageHead.navigateSDQForm();
    });

    this.When(/^I provide the SDQ Information$/, function () {
        return page.sdq_page.fillYesInfo()
        /*return page.sdq_page.toggleSDQInformation()
            .then(function () {
                return page.sdq_page.fillYesInfo()
            })*/
    });

        this.When(/^I provide the SDQ NO Information$/, function () {
        return page.sdq_page.toggleSDQInformation()
            .then(function () {
                return page.sdq_page.fillNoInfo()
            })
    });

};