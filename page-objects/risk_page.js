
module.exports = {

	elements: {
		needRiskStrengthTitle: by.css('div.app-tabs h2'),
		addIcon: by.css('#addNew .icon-create-new'),
		addNewRisk: by.css('#addNew ul.add-needs-dropdown li:nth-child(2)'),
		addRiskTitle: by.css('[placeholder="Add risk title here"]'),
		addRiskDetails: by.css('[placeholder="Please provide relevant details"]'),
		riskType: by.css('#riskType'),
		riskSubType: by.css('[data-bind="value: riskRequest.riskSubtype"]'),
 //by.css('.panel-collapse form div:nth-child(2) > div.form-group.col-sm-6.riskSubType select'),
		riskLikehood: by.css('.panel-collapse form div:nth-child(3) > div:nth-child(1) > div.row > div.col-md-8 > select.form-control'),
		riskImpact: by.css('.panel-collapse form div:nth-child(3) > div:nth-child(2) > div.row > div.col-md-8 > select.form-control'),
		riskScore: by.css('[data-bind="value:riskRequest.riskScore"]'),
		riskRating: by.css('[data-bind="value:riskRequest.riskRating"]'),
		riskStatus: by.css('.panel-collapse form div:nth-child(4) > div:nth-child(1) > div.row > div.col-md-8 > select.form-control'),
		riskComments: by.css('[data-bind="value:riskRequest.riskcommentAnalysis"]'),
		editLink: by.css('#plan-situation-cover .panel-collapse i.icon-edit'),
		updatedNeedLink: by.css('#plan-situation-cover .panel-collapse i.icon-thik-tick'),
		createNeedButton: by.css('[data-bind="click : createRisk"]'),
		riskCreatedTitle: by.css('.panel-heading div.context-bar-group.col-sm-10 h5.admin-right'),
		createdRiskToggle: by.css('#accordion0'),
		addUpdateTitle: by.css('.panel-collapse.collapse.in div.panel-body form div.row:nth-child(1) div.form-group:nth-child(1) [placeholder="Add risk title here"]'),
		updateRiskSubType: by.css('#riskSubtype'),
		riskTitleLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(1) .form-group:nth-child(1) label'),
		riskDetailsLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(1) .form-group:nth-child(2) label'),
		riskTypeLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(2) .form-group:nth-child(1) label'),
		likelihoodLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(3) .form-group:nth-child(1) label'),
		impactLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(3) .form-group:nth-child(2) label'),
		scoreLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(3) .form-group:nth-child(3) label'),
		ratingLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(3) .form-group:nth-child(4) label'),
		riskStatusLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(4) .form-group:nth-child(1) label'),
		commentsLabel: by.css('#collapseOne .create-new-casenote-content .row:nth-child(5) .form-group:nth-child(1) label')

	},

	addRemainsRisk: function () {
		driver.wait(until.elementLocated(page.risk_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.risk_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
				return expect(Title).to.equal("All needs, risks and strengths");
			})
			.then(function () {
				driver.wait(until.elementLocated(page.risk_page.elements.addIcon), 20000);
			driver.findElement(page.risk_page.elements.addIcon).click();
			return driver.findElement(page.risk_page.elements.addNewRisk).click();
			})
			.then(function () {
				driver.wait(until.elementLocated(page.risk_page.elements.addRiskTitle), 20000);
			return driver.findElement(page.risk_page.elements.addRiskTitle).sendKeys("Test Risk Title");
			})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.addRiskDetails), 20000);
			return driver.findElement(page.risk_page.elements.addRiskDetails).sendKeys("Details");
		    })
			.then(function () {
			    driver.wait(until.elementLocated(page.risk_page.elements.riskType), 20000);
				driver.findElement(page.risk_page.elements.riskType).click();
				return helpers.selectOption(page.risk_page.elements.riskType, 'Physical')
		   })
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskSubType), 20000);
			driver.findElement(page.risk_page.elements.riskSubType).click();
			return helpers.selectOption(page.risk_page.elements.riskSubType, 'Risk of falling')
		   })
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskLikehood), 20000);
			driver.findElement(page.risk_page.elements.riskLikehood).click();
			return helpers.selectOption(page.risk_page.elements.riskLikehood, 'Rare')
		   })
					.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskImpact), 20000);
			driver.findElement(page.risk_page.elements.riskImpact).click();
			return helpers.selectOption(page.risk_page.elements.riskImpact, 'Major')
		})
					.then(function (){
			driver.wait(until.elementLocated(page.risk_page.elements.riskScore), 20000);
			return driver.executeScript(" return $('[data-bind=\"value:riskRequest.riskScore\"]').val();")
                    .then(function (score) {
				return expect(score).to.equal("4");
			})
		})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskRating), 20000);
			return driver.executeScript(" return $('[data-bind=\"value:riskRequest.riskRating\"]').val();")
                    .then(function (jsexecute) {
				return expect(jsexecute).to.equal("Moderate risk");
			})
		})
		  	.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskStatus), 20000);
			driver.findElement(page.risk_page.elements.riskStatus).click();
			return helpers.selectOption(page.risk_page.elements.riskStatus, 'Risk removed')
		})
				  .then(function () { 
			driver.wait(until.elementLocated(page.risk_page.elements.riskComments), 20000);
			return driver.findElement(page.risk_page.elements.riskComments).sendKeys("Comments");		
		})
		  .then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.createNeedButton), 20000);
			return driver.findElement(page.risk_page.elements.createNeedButton).click();
			return driver.sleep(1000);
		})

	},

	verifyCreatedRisk: function () { 
		driver.wait(until.elementLocated(page.risk_page.elements.riskCreatedTitle), 20000);
		return driver.findElement(page.risk_page.elements.riskCreatedTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Risk : Test Risk Title");
		})
	},

	updateCreatedRisk: function () {
		//driver.sleep(1000);
		driver.wait(until.elementLocated(page.risk_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.risk_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.createdRiskToggle), 20000);
			driver.findElement(page.risk_page.elements.createdRiskToggle).click();
			return driver.wait(until.elementLocated(page.risk_page.elements.editLink), 15000).then(function () {
			return driver.findElement(page.risk_page.elements.editLink).click();
		})
			.then(function () {
			driver.sleep(1000);
			driver.wait(until.elementLocated(page.risk_page.elements.addUpdateTitle), 20000);
			driver.findElement(page.risk_page.elements.addUpdateTitle).clear();
			return driver.findElement(page.risk_page.elements.addUpdateTitle).sendKeys("Test Risk Removed");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.updateRiskSubType), 20000);
			driver.findElement(page.risk_page.elements.updateRiskSubType).click();
			return helpers.selectOption(page.risk_page.elements.updateRiskSubType, 'Risk of pressure sores')
		})
            .then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.updatedNeedLink), 20000);
			driver.findElement(page.risk_page.elements.updatedNeedLink).click();
			//driver.findElement(page.risk_page.elements.createdRiskToggle).click();
			return driver.sleep(1000);
			});
		});

	},

	verifyUpdatedRisk: function () {
		driver.wait(until.elementLocated(page.risk_page.elements.riskCreatedTitle), 20000);
		return driver.findElement(page.risk_page.elements.riskCreatedTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("Risk : Test Risk Removed");
		})
	},

	validateRiskFields: function () {
		driver.wait(until.elementLocated(page.risk_page.elements.needRiskStrengthTitle), 20000);
		return driver.findElement(page.risk_page.elements.needRiskStrengthTitle).getText()
			.then(function (Title) {
			return expect(Title).to.equal("All needs, risks and strengths");
		})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.addIcon), 20000);
			driver.findElement(page.risk_page.elements.addIcon).click();
			return driver.findElement(page.risk_page.elements.addNewRisk).click();
		})
			.then(function () {
			driver.wait(until.elementLocated(page.risk_page.elements.riskTitleLabel), 20000);
			return driver.findElement(page.risk_page.elements.riskTitleLabel).getText()
		})
			.then(function (riskTitleLabel) {
			return expect(riskTitleLabel).to.equal("Risk title");
		})
            .then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.riskDetailsLabel), 10000);
			return driver.findElement(page.risk_page.elements.riskDetailsLabel).getText();
		})
			.then(function (riskDetailsLabel) {
			return expect(riskDetailsLabel).to.equal("Risk details");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.riskTypeLabel), 10000);
			return driver.findElement(page.risk_page.elements.riskTypeLabel).getText();
		})
			.then(function (riskTypeLabel) {
			return expect(riskTypeLabel).to.equal("Risk type");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.likelihoodLabel), 10000);
			return driver.findElement(page.risk_page.elements.likelihoodLabel).getText();
		})
			.then(function (likelihoodLabel) {
			return expect(likelihoodLabel).to.equal("Likelihood");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.impactLabel), 10000);
			return driver.findElement(page.risk_page.elements.impactLabel).getText();
		})
			.then(function (impactLabel) {
			return expect(impactLabel).to.equal("Impact");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.scoreLabel), 10000);
			return driver.findElement(page.risk_page.elements.scoreLabel).getText();
		})
			.then(function (scoreLabel) {
			return expect(scoreLabel).to.equal("Score");
		})
						.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.ratingLabel), 10000);
			return driver.findElement(page.risk_page.elements.ratingLabel).getText();
		})
			.then(function (ratingLabel) {
			return expect(ratingLabel).to.equal("Rating");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.riskStatusLabel), 10000);
			return driver.findElement(page.risk_page.elements.riskStatusLabel).getText();
		})
			.then(function (riskStatusLabel) {
			return expect(riskStatusLabel).to.equal("Risk status");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.risk_page.elements.commentsLabel), 10000);
			return driver.findElement(page.risk_page.elements.commentsLabel).getText();
		})
			.then(function (commentsLabel) {
			return expect(commentsLabel).to.equal("Comments and analysis");
		})
			
	}
}
