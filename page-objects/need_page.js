
module.exports = {

	elements: {
		needRiskStrengthTitle: by.css('div.app-tabs h2'),
		addIcon: by.css('#addNew .icon-create-new'),
		addNewNeed: by.css('#addNew ul.add-needs-dropdown li:nth-child(1)'),
		addSummary: by.css('[placeholder="Add Need Summary  here"]'),
		addDetails: by.css('[placeholder="Add brief details here"]'),
		addDateOfEntry: by.css('div[data-bind*="startDate"] input'),
		addEndDate: by.css('div[data-bind*="removedDate"] input'),
		needType: by.css('#needType'),
		needCategory: by.css('.needsCategotry'),
		needImpact: by.css('#impacts'),
		needSeverity: by.css('#severity'),
		needStatus: by.css('#needStatus'),
		needIndicator: by.css('input.ace'),
		needTitle: by.css('.panel-heading h5.admin-right'),
		createdNeedToggle: by.css('#accordion0'),
		editLink: by.css('#plan-situation-cover .panel-collapse i.icon-edit'),
		updatedNeedLink: by.css('#plan-situation-cover .panel-collapse i.icon-thik-tick'),
		createNeedButton: by.css('input[data-bind*="createNeed"]'),
		addUpdateSummary: by.css('input[class="form-control"][placeholder="Add Need Summary  here"]'),
		updateNeedSeverity: by.css('#sev'),
		needSummaryLabel: by.css('.panel-collapse form > div:nth-child(2) > label strong'),
		detailsLabel: by.css('.panel-collapse form > div:nth-child(3) > label strong'),
		entryLabel: by.css('.panel-collapse form > div:nth-child(4) > div:nth-child(1) > div.row > div.col-sm-3 > label'),
		endDateLabel: by.css('.panel-collapse form > div:nth-child(4) > div:nth-child(2) > div.row > div.col-sm-3 > label'),
		typeLabel: by.css('.panel-collapse form > div:nth-child(5) > div:nth-child(1) > div.row > div.col-sm-3 > label'),
		impactLabel: by.css('.panel-collapse form > div:nth-child(6) > div:nth-child(1) > div.row > div.col-sm-3 > label'),
		severityLabel: by.css('.panel-collapse form > div:nth-child(6) > div:nth-child(2) > div.row > div.col-sm-3 > label'),
		statusLabel: by.css('.panel-collapse form > div:nth-child(7) > div:nth-child(2) > div.row > div.col-sm-3 > label'),
		needIndicatorLabel: by.css('#agreedInd')

	},

	addNewUnMetNeed: function () {
		driver.wait(until.elementLocated(page.need_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.need_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
				return expect(Title).to.equal("All needs, risks and strengths");
			})
			.then(function () {
				driver.wait(until.elementLocated(page.need_page.elements.addIcon), 20000);
			driver.findElement(page.need_page.elements.addIcon).click();
			return driver.findElement(page.need_page.elements.addNewNeed).click();
			})
			.then(function () {
				driver.wait(until.elementLocated(page.need_page.elements.addSummary), 20000);
			return driver.findElement(page.need_page.elements.addSummary).sendKeys("Summary Test");
			})
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.addDetails), 20000);
			return driver.findElement(page.need_page.elements.addDetails).sendKeys("Details");
		    })
				.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.addDateOfEntry), 20000);
			return driver.findElement(page.need_page.elements.addDateOfEntry).click();
		    })
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.addEndDate), 20000);
			return driver.findElement(page.need_page.elements.addEndDate).click();
		   })
			.then(function () {
			    driver.wait(until.elementLocated(page.need_page.elements.needType), 20000);
				driver.findElement(page.need_page.elements.needType).click();
				return helpers.selectOption(page.need_page.elements.needType, 'Developmental needs')
		   })
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.needCategory), 20000);
			driver.findElement(page.need_page.elements.needCategory).click();
			return helpers.selectOption(page.need_page.elements.needCategory, 'Health')
		   }).then(function () {
			   console.log("Inside Impact1");
			driver.wait(until.elementLocated(page.need_page.elements.needImpact), 20000);
			 console.log("Inside Impact1");
			driver.findElement(page.need_page.elements.needImpact).click();
			 console.log("Inside Impact3");
			return helpers.selectOption(page.need_page.elements.needImpact, '1 - Medium')
		   })
					.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.needSeverity), 20000);
			driver.findElement(page.need_page.elements.needSeverity).click();
			return helpers.selectOption(page.need_page.elements.needSeverity, '1 - Medium')
		   })
		  		.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.needStatus), 50000);
			driver.findElement(page.need_page.elements.needStatus).click();
			return helpers.selectOption(page.need_page.elements.needStatus, 'Need is not being currently met - awaiting services or funding decisions')
		})
				  .then(function () { 
			driver.wait(until.elementLocated(page.need_page.elements.needIndicator), 20000);
			return driver.findElement(page.need_page.elements.needIndicator).click();		
		})
		  .then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.createNeedButton), 20000);
			return driver.findElement(page.need_page.elements.createNeedButton).click();
			return driver.sleep(1000);
		})

	},

	verifyCreatedNeed: function () { 
		driver.wait(until.elementLocated(page.need_page.elements.needTitle), 20000);
		return driver.findElement(page.need_page.elements.needTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Need : Summary Test");
		})
	},

	updateCreatedNeed: function () {
		//driver.sleep(1000);
		driver.wait(until.elementLocated(page.need_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.need_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.createdNeedToggle), 20000);
			driver.findElement(page.need_page.elements.createdNeedToggle).click();
			driver.sleep(1000);
			return driver.findElement(page.need_page.elements.editLink).click();
		})
			.then(function () {
			driver.sleep(1000);
			driver.wait(until.elementLocated(page.need_page.elements.addUpdateSummary), 20000);
			driver.findElement(page.need_page.elements.addUpdateSummary).clear();
			return driver.findElement(page.need_page.elements.addUpdateSummary).sendKeys("UnMet Need Test");
		})
	        .then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.updateNeedSeverity), 20000);
			driver.findElement(page.need_page.elements.updateNeedSeverity).click();
			return driver.findElement(page.need_page.elements.updateNeedSeverity).sendKeys("2-High");
		})
            .then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.updatedNeedLink), 20000);
			driver.findElement(page.need_page.elements.updatedNeedLink).click();
			driver.findElement(page.need_page.elements.createdNeedToggle).click();
			return driver.sleep(1000);
		})

	},

	verifyUpdatedNeed: function () {
		driver.wait(until.elementLocated(page.need_page.elements.needTitle), 20000);
		return driver.findElement(page.need_page.elements.needTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Need : UnMet Need Test");
		})
	},

	validateNeedFields: function () {
		driver.wait(until.elementLocated(page.need_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.need_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.addIcon), 20000);
			driver.findElement(page.need_page.elements.addIcon).click();
			return driver.findElement(page.need_page.elements.addNewNeed).click();
		})
			.then(function () {
			driver.wait(until.elementLocated(page.need_page.elements.needSummaryLabel), 20000);
			return driver.findElement(page.need_page.elements.needSummaryLabel).getText()
		})
			.then(function (needSummaryLabel) {
			return expect(needSummaryLabel).to.equal("Summary");
		})
            .then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.detailsLabel), 10000);
			return driver.findElement(page.need_page.elements.detailsLabel).getText();
		})
			.then(function (detailsLabel) {
			return expect(detailsLabel).to.equal("Details");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.entryLabel), 10000);
			return driver.findElement(page.need_page.elements.entryLabel).getText();
		})
			.then(function (entryLabel) {
			return expect(entryLabel).to.equal("Date of entry");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.endDateLabel), 10000);
			return driver.findElement(page.need_page.elements.endDateLabel).getText();
		})
			.then(function (endDateLabel) {
			return expect(endDateLabel).to.equal("End date");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.typeLabel), 10000);
			return driver.findElement(page.need_page.elements.typeLabel).getText();
		})
			.then(function (typeLabel) {
			return expect(typeLabel).to.equal("Type");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.impactLabel), 10000);
			return driver.findElement(page.need_page.elements.impactLabel).getText();
		})
			.then(function (impactLabel) {
			return expect(impactLabel).to.equal("Impact");
		})
						.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.severityLabel), 10000);
			return driver.findElement(page.need_page.elements.severityLabel).getText();
		})
			.then(function (severityLabel) {
			return expect(severityLabel).to.equal("Severity");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.statusLabel), 10000);
			return driver.findElement(page.need_page.elements.statusLabel).getText();
		})
			.then(function (statusLabel) {
			return expect(statusLabel).to.equal("Need status");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.need_page.elements.needIndicatorLabel), 10000);
			return driver.findElement(page.need_page.elements.needIndicatorLabel).getText();
		})
			.then(function (needIndicatorLabel) {
			return expect(needIndicatorLabel).to.equal("Need relevant indicator");
		})
			
	}
}
