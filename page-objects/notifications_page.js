module.exports = {

	elements: {
		approvalNotifcation: by.css('#accordion > div:nth-child(1) span'),
		allNotifications: by.css('[id="accordion"]'),
		requiredNotification: by.css('.message-subject')
	},


	verifyChildProtectionPlanNotification: function () {
		driver.wait(until.elementLocated(page.notifications_page.elements.approvalNotifcation), 20000);
		return driver.findElement(page.notifications_page.elements.approvalNotifcation).getText().then(function (approvalNotifcationText) {
			config = jsonfile.readFileSync('./support/'+featureConfig);
			var person = config.PersonDetails.Name;
			expect(approvalNotifcationText).to.equal("Approval request for Child Protection Plan for " + person + "")
			return driver.findElement(page.notifications_page.elements.approvalNotifcation).click();
		});
	},

	verifyPlanRequestNotification: function (planName) {
		driver.wait(until.elementLocated(page.notifications_page.elements.approvalNotifcation), 10000)
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.Name;
		var notification = 'Approval request for ' + planName + ' for ' + person;
		return helpers.gridGetText(page.notifications_page.elements.allNotifications, page.notifications_page.elements.requiredNotification, notification)
	},

	verifyPlanApprovedNotification: function (planName) {
		driver.wait(until.elementLocated(page.notifications_page.elements.approvalNotifcation), 10000)
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.Name;
		var notification = 'Approval request is approved for ' + planName + ' for ' + person;
		return helpers.gridGetText(page.notifications_page.elements.allNotifications, page.notifications_page.elements.requiredNotification, notification)
	},

}
