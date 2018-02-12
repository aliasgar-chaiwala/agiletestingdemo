module.exports = {

	elements: {
		createIcon: by.css('[aria-label="Create new message"]'),
		messageTo: by.css('#message-to div.selectize-input.items.not-full input[type="text"]'),
		messageToFirstList: by.css('#message-to .selectize-dropdown.multi.form-control.plugin-remove_button > div > div:nth-child(1)'),
		messageSubject: by.css('#subject'),
		messageDiscription: by.css('.form-control.msgDescription [data-placeholder="Message"]'),
		messageType: by.css('.block .dropdown'),
		messageTypeSet: by.css('.dropdown.open .dropdown-menu'),
		messageUrgent: by.css('div.white-check.task-check'),
		sendMessage: by.css('#submitMessage'),
		messageInbox: by.css('#accordion'),
		messageSentBy: by.css('.message-by'),
		messageSubjectVerification: by.css('span.text-ellipsis'),
		myInbox: by.css('.app-content h2.page-title > span:nth-child(1)'),
		replayIcon: by.css('[title="Reply message"]'),
		sendReplay: by.css('#replyCollapseone0 div.durandal-wrapper > div.pen'),
		replayButton: by.css('#accordion > div:nth-child(1) button.btn.btn-create-new.pull-right'),
		sentMessageVerification: by.css('#collapse0 div.panel-body.thread'),
		toggel: by.css('#dropdownmenu1'),
		setTeam: by.css('ul.dropdown-menu.menu-msg-inbox'),
		teamMessageText: by.css('.app-wrapper h2.page-title span:nth-child(1)'),
		createdTeamMessage: by.css('div.panel-messsage'),
		commonList: by.css('li a')
	},


	createNewMessage: function (msgManager, msgText) {
		driver.wait(until.elementLocated(page.messages_page.elements.createIcon), 20000);
		return driver.findElement(page.messages_page.elements.createIcon).click()
			.then(function () {
				return driver.sleep(2000).then(function () {
					return driver.wait(until.elementIsVisible(driver.findElement(page.messages_page.elements.messageTo)), 10000).then(function () {
						return driver.findElement(page.messages_page.elements.messageTo).sendKeys(msgManager);
					})
				})
			})
			.then(function () {
				driver.sleep(1500);
				//driver.wait(until.elementLocated(page.messages_page.elements.messageToFirstList), 20000);
				return driver.findElement(page.messages_page.elements.messageToFirstList).click();
			})
			/*.then(function () {
				driver.sleep(1000);
				return driver.findElement(page.messages_page.elements.messageUrgent).click();
			})*/
			.then(function () {
				driver.sleep(1000);
				return driver.findElement(page.messages_page.elements.messageSubject).sendKeys("Sample Test " + msgText);
			})
			.then(function () {
				return driver.findElement(page.messages_page.elements.messageDiscription).sendKeys("Sample Test Message sending to manager");
			})
			.then(function () {
				return helpers.clickIncludesList(page.messages_page.elements.messageType, 'button', page.messages_page.elements.commonList, 'Normal');//helpers.selectSpan(page.messages_page.elements.messageTypeSet, 'Normal');
			})
			.then(function () {
				driver.sleep(1500);
				driver.findElement(page.messages_page.elements.sendMessage).click();
				return driver.sleep(2000);
			})
	},

	verifyCreatedMessage: function (message) {
		driver.sleep(5000);
		driver.findElement(page.messages_page.elements.myInbox).click();
		return driver.sleep(2000)
			.then(function () {
				return helpers.gridFormClick(page.messages_page.elements.messageInbox, page.messages_page.elements.messageSubjectVerification, message);
			});
	},

	replayMessage: function () {
		//	driver.sleep(1000);
		//	return driver.findElement(page.messages_page.elements.messageSubjectVerification).click()
		//	.then(function () {
		driver.sleep(1000);
		return driver.wait(until.elementLocated(page.messages_page.elements.replayIcon), 20000)
			.then(function () {
				console.log("1");
				//return helpers.gridFormClick(page.messages_page.elements.messageInbox, page.messages_page.elements.replayIcon, message);
				return driver.findElement(page.messages_page.elements.replayIcon).click()
			})
			//	})
			.then(function () {
				driver.wait(until.elementLocated(page.messages_page.elements.sendReplay), 20000);
				return driver.findElement(page.messages_page.elements.sendReplay).sendKeys("Text Replay Testing");
			})
			.then(function () {
				driver.sleep(1000);
				driver.wait(until.elementLocated(page.messages_page.elements.replayButton), 20000);
				driver.findElement(page.messages_page.elements.replayButton).click();
				return driver.sleep(2000);
			})
	},

	sentMessageVisible: function () {
		//	driver.sleep(2000);
		//	return driver.findElement(page.messages_page.elements.messageSubjectVerification).click()
		//		.then(function () {
		driver.sleep(2000);
		driver.wait(until.elementLocated(page.messages_page.elements.sentMessageVerification), 20000);
		return driver.findElement(page.messages_page.elements.sentMessageVerification).isDisplayed();
		//	})
	},

	createTeamNewMessage: function (msgManager, msgText) {
		driver.wait(until.elementLocated(page.messages_page.elements.createIcon), 20000);
		driver.findElement(page.messages_page.elements.toggel).click();
		return helpers.selectSpan(page.messages_page.elements.setTeam, 'Capita Testing Team 2')
			.then(function () {
				driver.findElement(page.messages_page.elements.createIcon).click();
				driver.wait(until.elementLocated(page.messages_page.elements.messageTo), 20000);
				return driver.findElement(page.messages_page.elements.messageTo).sendKeys(msgManager);
			})
			.then(function () {
				driver.sleep(1500);
				//driver.wait(until.elementLocated(page.messages_page.elements.messageToFirstList), 20000);
				return driver.findElement(page.messages_page.elements.messageToFirstList).click();
			})
			.then(function () {
				driver.sleep(1000);
				return driver.findElement(page.messages_page.elements.messageSubject).sendKeys("Sample Test " + msgText);
			})
			.then(function () {
				return driver.findElement(page.messages_page.elements.messageDiscription).sendKeys("Sample Test Message sending to manager");
			})
			.then(function () {
				return helpers.clickIncludesList(page.messages_page.elements.messageType, 'button', page.messages_page.elements.commonList, 'Normal')
			})
			.then(function () {
				driver.sleep(1500);
				driver.findElement(page.messages_page.elements.sendMessage).click();
				return driver.sleep(2000);
			})
	},

	teamMessage: function () {
		driver.wait(until.elementLocated(page.messages_page.elements.createdTeamMessage), 20000);
		return driver.findElement(page.messages_page.elements.teamMessageText).getText()
			.then(function (team) {
				return expect(team).to.equal("Capita Testing Team 2");
			})

	}
}
