
module.exports = {

	elements: {
		needRiskStrengthTitle: by.css('div.app-tabs h2'),
		addIcon: by.css('#addNew .icon-create-new'),
		addNewStrength: by.css('#addNew ul.add-needs-dropdown li:nth-child(3)'),
		addStrengthTitle: by.css('[placeholder="Add strength title here"]'),
		addStrengthDetails: by.css('#collapseOne > div.panel-body > div.plans-detail-row form > div > div:nth-child(2) > [placeholder="Please provide relevant details"]'),
		strengthDate: by.css('div[data-bind*="dateIdentifiedForStrength"] input'),
		createStrengthButton: by.css('input[data-bind*="createStrength"]'),
		strengthCreatedTitle: by.css('.panel-heading div.context-bar-group.col-sm-10 h5.admin-right'),
		createdRiskToggle: by.css('#accordion0'),
		editLink: by.css('#plan-situation-cover .panel-collapse i.icon-edit'),
		addUpdateTitle: by.css('#collapse0 > div.panel-body div.plans-detail-row > div:nth-child(2) > form > div:nth-child(1) > div:nth-child(1) [placeholder="Add strength title here"]'),
		updateStrengthDetails: by.css('#collapse0 > div.panel-body div.plans-detail-row > div:nth-child(2) > form > div > div:nth-child(2) > [placeholder="Please provide relevant details"]'),
		updatedNeedLink: by.css('#plan-situation-cover .panel-collapse i.icon-thik-tick'),
		riskCreatedTitle: by.css('.panel-heading div.context-bar-group.col-sm-10 h5.admin-right'),
		dateLabel: by.css('#collapseOne > div.panel-body > div.plans-detail-row form > div > div:nth-child(3) > label'),
		strengthTitleLabel: by.css('#collapseOne > div.panel-body > div.plans-detail-row form > div > div:nth-child(1) > label'),
		strengthDetailsLabel: by.css('#collapseOne > div.panel-body > div.plans-detail-row form > div > div:nth-child(2) > label')

	},

	addStrength: function () {
		driver.wait(until.elementLocated(page.strength_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.strength_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
				return expect(Title).to.equal("All needs, risks and strengths");
			})
			.then(function () {
				driver.wait(until.elementLocated(page.strength_page.elements.addIcon), 20000);
			driver.findElement(page.strength_page.elements.addIcon).click();
			return driver.findElement(page.strength_page.elements.addNewStrength).click();
			})
			.then(function () {
			driver.sleep(1000);
				driver.wait(until.elementLocated(page.strength_page.elements.addStrengthTitle), 20000);
			return driver.findElement(page.strength_page.elements.addStrengthTitle).sendKeys("Test Strength Title");
			})
			.then(function () {
			driver.sleep(1000);
			driver.wait(until.elementLocated(page.strength_page.elements.addStrengthDetails), 20000);
			return driver.findElement(page.strength_page.elements.addStrengthDetails).sendKeys("Details");
		    })
			.then(function () {
			driver.sleep(1000);
			    driver.wait(until.elementLocated(page.strength_page.elements.strengthDate), 20000);
				return driver.findElement(page.strength_page.elements.strengthDate).click();
				driver.sleep(1000);
				driver.findElement(page.strength_page.elements.addStrengthTitle).click();
		   })
		  .then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.createStrengthButton), 20000);
			return driver.findElement(page.strength_page.elements.createStrengthButton).click();
			return driver.sleep(1000);
		})

	},

	verifyCreatedStrength: function () { 
		driver.wait(until.elementLocated(page.strength_page.elements.strengthCreatedTitle), 20000);
		return driver.findElement(page.strength_page.elements.strengthCreatedTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Strength : Test Strength Title");
		})
	},

	updateCreatedStrength: function () {
		//driver.sleep(1000);
		driver.wait(until.elementLocated(page.strength_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.strength_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.createdRiskToggle), 20000);
			driver.findElement(page.strength_page.elements.createdRiskToggle).click();
			driver.sleep(1000);
			return driver.findElement(page.strength_page.elements.editLink).click();
		})
			.then(function () {
			driver.sleep(1000);
			driver.wait(until.elementLocated(page.strength_page.elements.addUpdateTitle), 20000);
			driver.findElement(page.strength_page.elements.addUpdateTitle).clear();
			return driver.findElement(page.strength_page.elements.addUpdateTitle).sendKeys("Test Strength");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.updateStrengthDetails), 20000);
			driver.findElement(page.strength_page.elements.updateStrengthDetails).clear();
			return driver.findElement(page.strength_page.elements.updateStrengthDetails).sendKeys("Details Test");
		})
            .then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.updatedNeedLink), 20000);
			driver.findElement(page.strength_page.elements.updatedNeedLink).click();
			driver.findElement(page.strength_page.elements.createdRiskToggle).click();
			return driver.sleep(1000);
		})

	},

	verifyUpdatedStrength: function () {
		driver.wait(until.elementLocated(page.strength_page.elements.riskCreatedTitle), 20000);
		return driver.findElement(page.strength_page.elements.riskCreatedTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Strength : Test Strength");
		})
	},

	validateStrengthFields: function () {
		driver.wait(until.elementLocated(page.strength_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.strength_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.addIcon), 20000);
			driver.findElement(page.strength_page.elements.addIcon).click();
			return driver.findElement(page.strength_page.elements.addNewStrength).click();
		})
			.then(function () {
			driver.wait(until.elementLocated(page.strength_page.elements.strengthTitleLabel), 20000);
			return driver.findElement(page.strength_page.elements.strengthTitleLabel).getText()
		})
			.then(function (riskTitleLabel) {
			return expect(riskTitleLabel).to.equal("Strength title");
		})
            .then(function () {
			driver.wait(until.elementsLocated(page.strength_page.elements.strengthDetailsLabel), 10000);
			return driver.findElement(page.strength_page.elements.strengthDetailsLabel).getText();
		})
			.then(function (riskDetailsLabel) {
			return expect(riskDetailsLabel).to.equal("Strength details");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.strength_page.elements.dateLabel), 10000);
			return driver.findElement(page.strength_page.elements.dateLabel).getText();
		})
			.then(function (riskTypeLabel) {
			return expect(riskTypeLabel).to.equal("Date identified");
		})
	}
}
