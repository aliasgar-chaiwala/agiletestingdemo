
module.exports = function () {
   
    this.Then(/^I verify the child protection plan$/, function () {
        return page.childProtectionPlan_page.verifyChildProtectionPlan();
    });

}