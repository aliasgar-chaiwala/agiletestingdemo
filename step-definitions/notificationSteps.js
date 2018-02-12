
module.exports = function () {  

    this.Then(/^I navigate to notifications$/, function () {
        return page.pageHead.notificationNavigation();
    });

	this.Then(/^I should see plan notification for Approval Request$/, function () {
		return page.notifications_page.verifyChildProtectionPlanNotification();
	});

	this.Then(/^I should see "([^"]*)" plan notification for Approval Request$/, function (planName) {
		return page.notifications_page.verifyPlanRequestNotification(planName);
	});

	this.Then(/^I should see "([^"]*)" plan notification for Approved Request$/, function (planName) {
		return page.notifications_page.verifyPlanApprovedNotification(planName);
	});

}