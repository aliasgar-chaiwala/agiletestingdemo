module.exports = {

	elements: {
		stage2AssessmentTitle: by.css('h1[aria-label ="Stage 2 Assessment"]'),
		header: by.css('h1[role="heading"]'),
		backgroundToggle: by.css('[name="Background checks"] .accordion-toggle'),
		checkType: by.css('#dropdownMenu1'),
		chooseCheckType: by.css('.dropdown.repeated.open ul li:nth-child(3) a span:nth-child(2)'),
		chooseCheckTypeFinancial: by.css('.dropdown.repeated.open ul li:nth-child(5) a span:nth-child(2)'),
		method: by.css('#dropdownMenu2'),
		chooseMethod: by.css('#reusable-references-checks > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div > ul > li:nth-child(4) > a > span:nth-child(2)'),
		chooseMethodLetter: by.css('#reusable-references-checks #dropdownMenu2 + ul li:nth-child(1) a span:nth-child(2)'),
		requestedDate: by.css('#reusable-references-checks div[aria-label="Request date"] button'),
		responseDate: by.css('#reusable-references-checks div[aria-label="Response received date"] button'),
		renewalDate: by.css('#reusable-references-checks div[aria-label="Renewal date"] button'),
		providedPerson: by.css('.indentation .repeated input'),
		setProvidedPerson: by.css('#reusable-references-checks .selectize-dropdown.multi.form-control.plugin-remove_button > div > div.option'),
		requestedPerson: by.css('#reusable-references-checks > div.indentation > div:nth-child(6) > div > div > div > div > div.selectize-input.items.not-full > input[type="text"]'),
		setRequestedPerson: by.css('#reusable-references-checks .selectize-dropdown.multi.form-control.plugin-remove_button > div > div.option'),
		outcome: by.css('#dropdownMenu3'),
		setOutcome: by.css('#reusable-references-checks > div.indentation > div:nth-child(8) > div > div > div > ul'),
		notes: by.css('#referenceChecksNotes'),
		formStartDate: by.css('[data-validation-property-key="startsOn"] i'),
		formDeadlineDate: by.css('[data-bind*=deadlineDate] i'),
		providedName: by.css('#reusable-references-checks > div.indentation > div:nth-child(4) > div > div > div > div > div.selectize-input.items.not-full.has-options.has-items > span'),
		providedNameOne: by.css('#reusable-references-checks > div.indentation > div:nth-child(7) > div > div > section > div > div > div.title.col-sm-10 > div:nth-child(1) > span.name > span'),
		referenceCheckLabel: by.css('[aria-label="References/Checks"]'),
		addMoreReference: by.css('#reusable-references-checks button.btn-secondary'),
		calenderclick: by.css('div[data-bind*="propertyKey: \'startsOn\'"] button i')
	},

	verifyStage2Assessment: function () {
		page.pageHead.stage2AssessmentFormNavigation();
		return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.stage2AssessmentTitle), 25000)
			.then(function () {
				return driver.findElement(page.stage2Assessment_page.elements.stage2AssessmentTitle).getText()
					.then(function (title) {
						return expect(title).to.equal("Stage 2 Assessment");
					})
			})
	},

	fillBackgroundDetails: function () {
		//driver.findElement(page.stage2Assessment_page.elements.backgroundToggle).click();
		driver.sleep(800);
		driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.addMoreReference), 15000);
		driver.findElement(page.stage2Assessment_page.elements.addMoreReference).click();
		driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.checkType), 25000);
		return driver.findElement(page.stage2Assessment_page.elements.checkType).click()
			.then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.chooseCheckType), 25000);
				return driver.findElement(page.stage2Assessment_page.elements.chooseCheckType).click()
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.method), 25000);
				driver.findElement(page.stage2Assessment_page.elements.method).click();
				return driver.findElement(page.stage2Assessment_page.elements.chooseMethodLetter).click();
			})
			.then(function () {
				driver.findElement(page.stage2Assessment_page.elements.requestedDate).click();
				return helpers.gridClickDate('curr', 20);
			})
			.then(function () {
				driver.findElement(page.stage2Assessment_page.elements.responseDate).click();
				return helpers.gridClickDate('curr', 21);
			})
			.then(function () {
				driver.findElement(page.stage2Assessment_page.elements.renewalDate).click();
				return helpers.gridClickDate('curr', 22);
			})
			.then(function () {
				config = jsonfile.readFileSync('./support/' + featureConfig);
				var personName = config.PersonDetails.Name;
				driver.findElement(page.stage2Assessment_page.elements.providedPerson).clear();
				driver.findElement(page.stage2Assessment_page.elements.providedPerson).sendKeys(personName);
				driver.sleep(1800);
				return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.setProvidedPerson), 10000).then(function () {
					driver.sleep(1000);
					return driver.findElement(page.stage2Assessment_page.elements.setProvidedPerson).click();
				})
			})
			.then(function () {
				driver.sleep(1500);
				config = jsonfile.readFileSync('./support/' + featureConfig);
				var personName = config.PersonDetails.Name;
				driver.findElement(page.stage2Assessment_page.elements.requestedPerson).clear();
				driver.findElement(page.stage2Assessment_page.elements.requestedPerson).sendKeys(personName);
				driver.sleep(2000);
				return driver.findElement(page.stage2Assessment_page.elements.setRequestedPerson).click();
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.outcome), 25000);
				driver.findElement(page.stage2Assessment_page.elements.outcome).click();
				return helpers.selectOption(page.stage2Assessment_page.elements.setOutcome, 'Suitable');
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.notes), 25000);
				driver.findElement(page.stage2Assessment_page.elements.notes).clear();
				return driver.findElement(page.stage2Assessment_page.elements.notes).sendKeys("Test Notes");
			})
	},

	setFormStartDate: function () {
		driver.sleep(3000);
		return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.formStartDate), 20000).then(function () {
			// var dateFormat = require('dateformat');
			// var date = new Date();
			// var currDate = date.getDate();
			// var currMnth = date.getMonth();
			// var currYear = date.getFullYear();
			// var formatDate = dateFormat(date, "dd/mm/yyyy");
			// console.log("formated date" + formatDate);
			// driver.sleep(2000);
			// return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.calenderclick), 20000).then(function () {
			return driver.findElement(page.stage2Assessment_page.elements.calenderclick).click().then(function () {
				var todaysDate = new Date();
				targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
				return helpers.gridSelectDate(targetDate);
			}).then(function () {
				return driver.findElement(page.stage2Assessment_page.elements.header).click();
			});
			// });
		});
	},

	setFormDeadLineDate: function () {
		return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.formDeadlineDate), 20000)
			.then(function () {
				return driver.findElement(page.stage2Assessment_page.elements.formDeadlineDate).click()
					.then(function () {
						driver.findElement(page.stage2Assessment_page.elements.header).click();
						return driver.sleep(1000);
					})

				//helpers.gridClickDate('prev', 16);
			})
	},

	verifyReferenceCoreData: function (person) {
		driver.sleep(1500);
		return driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.backgroundToggle), 20000).then(function () {
			driver.sleep(1000);
			driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.referenceCheckLabel), 20000)
			return driver.findElement(page.stage2Assessment_page.elements.referenceCheckLabel).getText()
		})
			.then(function (label) {
				return expect(label).to.equal("References/Checks");
			}).then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.checkType), 25000);
				driver.sleep(1000)
				return driver.findElement(page.stage2Assessment_page.elements.checkType).getText()
					.then(function (checkTypeText) {
						return expect(checkTypeText).to.equal("Health");
					})
					.then(function () {
						driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.method), 25000);
						return driver.findElement(page.stage2Assessment_page.elements.method).getText()
							.then(function (methodText) {
								return expect(methodText).to.equal("Letter");
							})
							.then(function () {
								return driver.findElement(page.stage2Assessment_page.elements.providedName).getText().then(function (text) {
									modifiedText = text.split('\n');
									return expect(modifiedText[0]).to.equal(person);
								})
									.then(function () {
										return driver.findElement(page.stage2Assessment_page.elements.providedNameOne).getText().then(function (textOne) {
											modifiedText = textOne.split('\n');
											return expect(modifiedText[0]).to.equal(person);
										})
											.then(function () {
												return driver.findElement(page.stage2Assessment_page.elements.outcome).getText().then(function (outcome) {
													return expect(outcome).to.equal("Unsuitable");
												})
											})
									})
							})
					})
			})

	},

	updateReferenceChecks: function () {
		driver.sleep(500);
		driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.checkType), 25000);
		return driver.findElement(page.stage2Assessment_page.elements.checkType).click()
			.then(function () {
				driver.sleep(500);
				console.log("One Two");
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.chooseCheckTypeFinancial), 25000);
				return driver.findElement(page.stage2Assessment_page.elements.chooseCheckTypeFinancial).click();
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.method), 25000);
				driver.findElement(page.stage2Assessment_page.elements.method).click();
				driver.sleep(1000);
				return driver.findElement(page.stage2Assessment_page.elements.chooseMethodLetter).click();
			})
	},

	verifyReferenceStepData: function (person) {
		driver.sleep(500);
		driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.backgroundToggle), 20000).then(function () {
			driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.referenceCheckLabel), 20000)
			return driver.findElement(page.stage2Assessment_page.elements.referenceCheckLabel).getText();
		})
			.then(function (label) {
				return expect(label).to.equal("References/Checks");
			}).then(function () {
				driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.checkType), 25000);
				driver.sleep(1000);
				return driver.findElement(page.stage2Assessment_page.elements.checkType).getText()
					.then(function (checkTypeText) {
						return expect(checkTypeText).to.equal("Health");
					})
					.then(function () {
						driver.wait(until.elementsLocated(page.stage2Assessment_page.elements.method), 25000);
						return driver.findElement(page.stage2Assessment_page.elements.method).getText()
							.then(function (methodText) {
								return expect(methodText).to.equal("Letter");
							})
							.then(function () {
								return driver.findElement(page.stage2Assessment_page.elements.providedName).getText().then(function (text) {
									modifiedText = text.split('\n');
									return expect(modifiedText[0]).to.equal(person);
								})
									.then(function () {
										return driver.findElement(page.stage2Assessment_page.elements.providedNameOne).getText().then(function (textOne) {
											modifiedText = textOne.split('\n');
											return expect(modifiedText[0]).to.equal(person);
										})
											.then(function () {
												return driver.findElement(page.stage2Assessment_page.elements.outcome).getText().then(function (outcome) {
													return expect(outcome).to.equal("Unsuitable");
												})
											})
									})
							})
					})
			})

	}

}
