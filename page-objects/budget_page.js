module.exports = {

	elements: {
		personalBudget: by.css('h2.page-title'),
		addBudgetIcon: by.css('#lnk-new-budget'),
		addpersonalBudget: by.css('#addProvision'),
		indicativeAmount: by.css('#indicative-amount'),
		agreedAmount: by.css('#agreed-amount'),
		notes: by.css('#purpose'),
		fromDate: by.css('#agreed-amount-panel > div:nth-child(1) div.durandal-wrapper div.input-group.datepicker-panel input'),
		toDate: by.css('#agreed-amount-panel > div:nth-child(2) div.durandal-wrapper div.input-group.datepicker-panel input'),
		setFromDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.bottom.picker-open div.datepicker-days > table > tbody > tr:nth-child(1) > td.day.active.today'),
		setToDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.bottom.picker-open div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(5)'),
		paymentMethod: by.css('#dropdown_payment_mode'),
		paymentType: by.css('#Payment_type'),
		paymentFrequency: by.css('#dropdown_payment_frequency'),
		startDate: by.css('#reasonForProvison div.recurring-payment > div:nth-child(2) div.durandal-wrapper div.input-group.datepicker-panel input'),
		endDate: by.css('#reasonForProvison div.recurring-payment > div:nth-child(3) div.durandal-wrapper div.input-group.datepicker-panel input'),
		setStartDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.top div.datepicker-days > table > tbody > tr:nth-child(1) > td.day.active.today'),
		seEndDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.top div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(5)'),
		provisionReason: by.css('#reasonProvision'),
		createProvisionButton: by.css('[name="new-provision-create"]'),
		createdAmount: by.css('#maincontent div.provision-app > div.container-fluid > div > div > div > div:nth-child(2) > div > div.col-sm-11 > div.row.provision-type.m-b-sm > div.col-sm-9 > div > div > strong'),
		moreLink: by.css('#maincontent div.provision-app > div.container-fluid > div > div > div > div:nth-child(2) > div > [name="provision-list-expander"]'),
		//indicativeBudget: by.css('[name="provision amount"]'),
		indicativeBudget: by.css('.detail-content.form-horizontal.show div:nth-child(1) > label > strong'),
		paymentCheque: by.css('[name="provision method"]'),
		frequency: by.css('[name="frequency"]'),
		editLink: by.css('#update-personal-budget'),
		indicativeLabel: by.css('[for="indicative-amount"]'),
		agreedLabel: by.css('[for="agreed-amount"]'),
		notesLabel: by.css('[for="purpose"]')

	},


	addNewPersonalBudget: function () {
		//console.log("ohhhh");
		driver.sleep(5000);
		driver.wait(until.elementLocated(page.budget_page.elements.personalBudget), 10000);
		return driver.findElement(page.budget_page.elements.personalBudget).getText().then(function (personalBudget) {
			expect(personalBudget).to.equal("Personal budget");
			driver.wait(until.elementLocated(page.budget_page.elements.addBudgetIcon), 10000);
			return driver.findElement(page.budget_page.elements.addBudgetIcon).click().then(function () {
				driver.wait(until.elementLocated(page.budget_page.elements.addpersonalBudget), 10000);
				return driver.findElement(page.budget_page.elements.addpersonalBudget).getText().then(function (addpersonalBudget) {
					expect(addpersonalBudget).to.equal("Add personal budget");
					driver.wait(until.elementLocated(page.budget_page.elements.indicativeAmount), 10000);
					return driver.findElement(page.budget_page.elements.indicativeAmount).sendKeys("500.00").then(function () {
						driver.wait(until.elementLocated(page.budget_page.elements.agreedAmount), 10000);
						return driver.findElement(page.budget_page.elements.agreedAmount).sendKeys("500.00").then(function () {
							driver.wait(until.elementLocated(page.budget_page.elements.notes), 10000);
							return driver.findElement(page.budget_page.elements.notes).sendKeys("Testing").then(function () {
								// driver.sleep(2000);
								driver.wait(until.elementLocated(page.budget_page.elements.fromDate), 10000);
								driver.findElement(page.budget_page.elements.fromDate).click();
								/*
										 driver.wait(until.elementLocated(page.budget_page.elements.setFromDate), 10000);
										 return driver.findElement(page.budget_page.elements.setFromDate).click();
										 */
								return helpers.gridClickDate('curr', '16').then(function () {
									driver.wait(until.elementLocated(page.budget_page.elements.toDate), 10000);
									driver.findElement(page.budget_page.elements.toDate).click();
									/*		driver.wait(until.elementLocated(page.budget_page.elements.setToDate), 10000);
											return driver.findElement(page.budget_page.elements.setToDate).click();
									*/
									return helpers.gridClickDate('next', '16');
								});
							});
						});
					});
				});
			});
		});
	},

	addPaymentMethod: function (message) {
		driver.wait(until.elementLocated(page.budget_page.elements.paymentMethod), 10000);
		driver.findElement(page.budget_page.elements.paymentMethod).click();
		return helpers.selectOption(page.budget_page.elements.paymentMethod, 'Cheque').then(function () {
			driver.findElement(page.budget_page.elements.paymentType).click();
			return helpers.selectOption(page.budget_page.elements.paymentType, 'Recurring').then(function () {
				driver.findElement(page.budget_page.elements.paymentFrequency).click();
				return helpers.selectOption(page.budget_page.elements.paymentFrequency, 'Weekly').then(function () {
					driver.sleep(2000);
					driver.wait(until.elementLocated(page.budget_page.elements.startDate), 10000);
					driver.findElement(page.budget_page.elements.startDate).click();
					/*		driver.wait(until.elementLocated(page.budget_page.elements.setStartDate), 10000);
							return driver.findElement(page.budget_page.elements.setStartDate).click();
					*/
					return helpers.gridClickDate('curr', '16').then(function () {
						driver.wait(until.elementLocated(page.budget_page.elements.endDate), 10000);
						driver.findElement(page.budget_page.elements.endDate).click();
						/*		driver.wait(until.elementLocated(page.budget_page.elements.seEndDate), 10000);
								return driver.findElement(page.budget_page.elements.seEndDate).click();
						*/
						return helpers.gridClickDate('next', '16');
					});
				});
			});
		});
	},

	createProvision: function () {
		driver.wait(until.elementLocated(page.budget_page.elements.provisionReason), 10000);
		return driver.findElement(page.budget_page.elements.provisionReason).sendKeys("Sample Provision Test").then(function () {
			driver.wait(until.elementLocated(page.budget_page.elements.createProvisionButton), 10000);
			driver.findElement(page.budget_page.elements.createProvisionButton).click();
			return driver.sleep(2000)
		});
	},

	verifyBudget: function () {
		// driver.sleep(1500);
		driver.wait(until.elementLocated(page.budget_page.elements.personalBudget), 10000);
		return driver.findElement(page.budget_page.elements.personalBudget).getText().then(function (personalBudget) {
			expect(personalBudget).to.equal("Personal budget")
			driver.wait(until.elementLocated(page.budget_page.elements.createdAmount), 10000);
			driver.sleep(2000);
			return driver.findElement(page.budget_page.elements.createdAmount).getText().then(function (amount) {
				expect(amount).to.equal("£ 500.00");
				driver.wait(until.elementLocated(page.budget_page.elements.moreLink), 10000);
				return driver.findElement(page.budget_page.elements.moreLink).click().then(function () {
					driver.wait(until.elementLocated(page.budget_page.elements.indicativeBudget), 10000);
					return driver.findElement(page.budget_page.elements.indicativeBudget).getText().then(function (indicativeBudget) {
						expect(indicativeBudget).to.equal("Indicative budget was £ 500.00");
						driver.wait(until.elementLocated(page.budget_page.elements.paymentCheque), 10000);
						return driver.findElement(page.budget_page.elements.paymentCheque).getText().then(function (payment) {
							expect(payment).to.equal("Payment method: Cheque");
							driver.wait(until.elementLocated(page.budget_page.elements.frequency), 10000);
							return driver.findElement(page.budget_page.elements.frequency).getText().then(function (frequencyType) {
								return expect(frequencyType).to.equal("Frequency: Weekly");
							});
						});
					});
				});
			});
		});
	},

	updateAgreedAmount: function () {
		// driver.sleep(1500);
		driver.wait(until.elementLocated(page.budget_page.elements.editLink), 10000);
		return driver.findElement(page.budget_page.elements.editLink).click().then(function () {
			driver.wait(until.elementLocated(page.budget_page.elements.addpersonalBudget), 10000);
			return driver.findElement(page.budget_page.elements.addpersonalBudget).getText().then(function (updated) {
				expect(updated).to.equal("Update personal budget");
				driver.wait(until.elementLocated(page.budget_page.elements.agreedAmount), 10000);
				driver.findElement(page.budget_page.elements.agreedAmount).clear();
				return driver.findElement(page.budget_page.elements.agreedAmount).sendKeys("555.00").then(function () {
					driver.wait(until.elementLocated(page.budget_page.elements.createProvisionButton), 10000);
					driver.findElement(page.budget_page.elements.createProvisionButton).click();
					return driver.sleep(1500);
				});
			});
		});
	},

	verifyUpdatedBudget: function () {
		// driver.sleep(5000);
		driver.sleep(2000);
		driver.wait(until.elementLocated(page.budget_page.elements.personalBudget), 10000);
		return driver.findElement(page.budget_page.elements.personalBudget).getText().then(function (personalBudget) {
			console.log("0", personalBudget);
			expect(personalBudget).to.equal("Personal budget");
			return driver.sleep(100).then(function () {
				driver.wait(until.elementLocated(page.budget_page.elements.createdAmount), 10000);
				return driver.findElement(page.budget_page.elements.createdAmount).getText().then(function (amount) {
					console.log("1", amount);
					expect(amount).to.equal("£ 555.00");
					return driver.sleep(100).then(function () {
						driver.wait(until.elementLocated(page.budget_page.elements.moreLink), 10000);
						return driver.findElement(page.budget_page.elements.moreLink).click().then(function () {
							driver.wait(until.elementLocated(page.budget_page.elements.indicativeBudget), 10000);
							return driver.findElement(page.budget_page.elements.indicativeBudget).getText().then(function (indicativeBudget) {
								console.log("2", indicativeBudget);
								expect(indicativeBudget).to.equal("Indicative budget was £ 500.00");
								return driver.sleep(100).then(function () {
									driver.wait(until.elementLocated(page.budget_page.elements.paymentCheque), 10000);
									return driver.findElement(page.budget_page.elements.paymentCheque).getText().then(function (payment) {
										console.log("3", payment);
										expect(payment).to.equal("Payment method: Cheque");
										return driver.sleep(100).then(function () {
											driver.wait(until.elementLocated(page.budget_page.elements.frequency), 10000);
											return driver.findElement(page.budget_page.elements.frequency).getText().then(function (frequencyType) {
												console.log("4", frequencyType);
												expect(frequencyType).to.equal("Frequency: Weekly");
												return driver.sleep(100)
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	},

	verifyBudgetDetails: function () {
		driver.wait(until.elementLocated(page.budget_page.elements.personalBudget), 10000);
		return driver.findElement(page.budget_page.elements.personalBudget).getText().then(function (personalBudget) {
			expect(personalBudget).to.equal("Personal budget");
			driver.wait(until.elementLocated(page.budget_page.elements.addBudgetIcon), 10000);
			return driver.findElement(page.budget_page.elements.addBudgetIcon).click().then(function () {
				driver.wait(until.elementLocated(page.budget_page.elements.addpersonalBudget), 10000);
				return driver.findElement(page.budget_page.elements.addpersonalBudget).getText().then(function (addpersonalBudget) {
					expect(addpersonalBudget).to.equal("Add personal budget");
					driver.wait(until.elementsLocated(page.budget_page.elements.indicativeLabel), 10000);
					return driver.findElement(page.budget_page.elements.indicativeLabel).getText().then(function (nameLabel) {
						expect(nameLabel).to.equal("Indicative");
						driver.wait(until.elementsLocated(page.budget_page.elements.agreedLabel), 10000);
						return driver.findElement(page.budget_page.elements.agreedLabel).getText().then(function (contactMethodLabel) {
							expect(contactMethodLabel).to.equal("Agreed");
							driver.wait(until.elementsLocated(page.budget_page.elements.notesLabel), 10000);
							return driver.findElement(page.budget_page.elements.notesLabel).getText().then(function (contactAboutLabel) {
								return expect(contactAboutLabel).to.equal("Notes");
							});
						});
					});
				});
			});
		});
	}

}
