module.exports = {

	elements: {
		mentalCapacityLabel: by.css('h2.page-title'),
		mentalCapacityAddIcon: by.css('#lnk-new-budget'),
		addMentalCapacityLabel: by.css('#create-new-mentalCapacity .create-new-title'),
		mentalCapacityAreaLabel: by.css('#create-new-mentalCapacity > div > div:nth-child(2) > div > div:nth-child(1) label'),
		chooseMentalCapacity: by.css('button.btn.btn-dropdown.dropdown-toggle'),
		mentalCapacityList: by.css('div.dropdown ul'),
		assessmentDate: by.css('#create-new-mentalCapacity > div > div:nth-child(2) > div > div:nth-child(2) label'),
		assessmentOutcome: by.css('#create-new-mentalCapacity > div > div:nth-child(2) > div > div:nth-child(3) label'),
		safeguarding: by.css('#create-new-mentalCapacity > div > div:nth-child(2) > div > div:nth-child(4) > div > div > div > label'),
		advocate: by.css('#create-new-mentalCapacity > div > div:nth-child(2) > div > div:nth-child(5) > div.form-group > label'),
		safeguardingCapacity: by.css('div.dropdown ul li:nth-child(1) a span:nth-child(2)'),
		assessmentDateSet: by.css('#assessmentDate div.durandal-wrapper div.datepicker-parent div.input-group.datepicker-panel input'),
		assessmentOutcomeText: by.css('[placeholder="Please provide relevant details"]'),
		setAdvocate: by.css('[placeholder="Search person/professional ..."]'),
		setAdvocateFirstList: by.css('#create-new-mentalCapacity .selectize-dropdown.multi.form-control.plugin-remove_button > div > div'),
		advocateAppointmentDate: by.css('#createdOn div.durandal-wrapper div.datepicker-parent div.input-group.datepicker-panel input'),
		createButton: by.css('[name="mental-capacity-send"]'),
		createdSafeCapacityVisible: by.css('#maincontent div.provision-app > div.container-fluid div.col-sm-12.m-b-sm div.row div:nth-child(1) > h6:nth-child(1)'),
		financeCapacity: by.css('div.dropdown ul li:nth-child(2) a span:nth-child(2)'),
		safeguardingYes: by.css('div.btn-group.btn-group-xs.btn-3state.form-control-static label:nth-child(1)'),
		createdFinanceCapacityVisible: by.css('[class="provision-block-wrapper"] .col-sm-6 h6:nth-child(1)'),
		healthCapacity: by.css('div.dropdown ul li:nth-child(3) a span:nth-child(2)'),
		safeguardingNo: by.css('div.btn-group.btn-group-xs.btn-3state.form-control-static label:nth-child(2)'),
		createdHealthCapacityVisible: by.css('[class="provision-block-wrapper"] .col-sm-6 h6:nth-child(1)'),
		setMentalCapacity: by.css('.dropdown .dropdown-menu li a span:nth-child(2)'),
		allCapacitys: by.css('[data-view*="viewMentalCapacity"]'),
		setHealthAdvocate: by.css('#create-new-mentalCapacity .form-group .selectize-input.items.not-full.has-options > input[type="text"]')

	},

	verifyMentalCapacityFields: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityLabel), 10000);
		return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityLabel).getText().then(function (mentalCapacityLabel) {
			expect(mentalCapacityLabel).to.equal("Mental capacity");
			driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityAddIcon), 10000);
			return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityAddIcon).click().then(function () {
				driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.addMentalCapacityLabel), 10000);
				return driver.findElement(page.mentalCapacity_page.elements.addMentalCapacityLabel).getText().then(function (addMentalCapacityLabel) {
					expect(addMentalCapacityLabel).to.equal("Add mental capacity");
					driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityAreaLabel), 10000);
					return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityAreaLabel).getText().then(function (mentalCapacityAreaLabel) {
						expect(mentalCapacityAreaLabel).to.equal("Mental capacity area *");
						driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentDate), 10000);
						return driver.findElement(page.mentalCapacity_page.elements.assessmentDate).getText().then(function (assessmentDate) {
							expect(assessmentDate).to.equal("Date of the assessment *");
							driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentOutcome), 10000);
							return driver.findElement(page.mentalCapacity_page.elements.assessmentOutcome).getText().then(function (assessmentOutcome) {
								expect(assessmentOutcome).to.equal("Outcome of the assessment");
								driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.safeguarding), 10000);
								return driver.findElement(page.mentalCapacity_page.elements.safeguarding).getText().then(function (safeguarding) {
									driver.sleep(1000);
									config = jsonfile.readFileSync('./support/'+featureConfig);
									var name = config.PersonDetails.FirstName;
									expect(safeguarding).to.equal("Does " + name + " have mental capacity ?");
									driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.advocate), 10000);
									return driver.findElement(page.mentalCapacity_page.elements.advocate).getText().then(function (advocate) {
										driver.sleep(1000);
										config = jsonfile.readFileSync('./support/'+featureConfig);
										var name = config.PersonDetails.FirstName;
										expect(advocate).to.equal("Who is " + name + "'s advocate?");
										driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click();
										driver.sleep(500);
										return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityList).getText().then(function (mentalCapacityList) {
											var listValues = "SafeguardingFinanceHealth"
											mentalCapacityList = mentalCapacityList.replace(" ", "").replace(/[\r\n]+/g, "");
											return expect(mentalCapacityList).to.equal(listValues);
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

	createSafeguardingCapacity: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityLabel), 10000);
		return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityLabel).getText().then(function (mentalCapacityLabel) {
			expect(mentalCapacityLabel).to.equal("Mental capacity")
			driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityAddIcon), 10000);
			return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityAddIcon).click().then(function () {
				driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.chooseMentalCapacity), 10000);
				driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click();
				driver.sleep(500);
				//return helpers.selectSpan(page.mentalCapacity_page.elements.setMentalCapacity, 'Health');
				return driver.findElement(page.mentalCapacity_page.elements.safeguardingCapacity).click().then(function () {
					driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentDateSet), 10000);
					driver.findElement(page.mentalCapacity_page.elements.assessmentDateSet).click();
					return helpers.gridClickDate('prev', '16').then(function () {
						driver.sleep(500);
						driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentOutcomeText), 10000);
						// The below click is needed close the date picker
						driver.findElement(page.mentalCapacity_page.elements.assessmentOutcomeText).click();
						return driver.findElement(page.mentalCapacity_page.elements.assessmentOutcomeText).sendKeys("Test Capacity").then(function () {
							driver.sleep(1000);
							driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.setAdvocate), 10000);
							config = jsonfile.readFileSync('./support/'+featureConfig);
							var name = config.PersonDetails.person2.Name;
							driver.findElement(page.mentalCapacity_page.elements.setAdvocate).sendKeys(name);
							driver.sleep(1000);
							return driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.setAdvocateFirstList)).then(function () {
								driver.sleep(1500);
								return driver.findElement(page.mentalCapacity_page.elements.setAdvocateFirstList).click().then(function () {
									driver.sleep(1500);
									driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.advocateAppointmentDate), 10000);
									driver.findElement(page.mentalCapacity_page.elements.advocateAppointmentDate).click();
									return helpers.gridClickDate('prev', '16').then(function () {
										driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createButton), 10000);
										driver.findElement(page.mentalCapacity_page.elements.createButton).click();
										return driver.sleep(1500);
									});
								});
							});
						});
					});
				});
			});
		});
	},

	createFinanceCapacity: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityLabel), 10000);
		return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityLabel).getText()
			.then(function (mentalCapacityLabel) {
				expect(mentalCapacityLabel).to.equal("Mental capacity");
				driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityAddIcon), 10000);
				return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityAddIcon).click().then(function () {
					driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.chooseMentalCapacity), 10000);
					driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click();
					driver.sleep(500);
					return driver.findElement(page.mentalCapacity_page.elements.financeCapacity).click().then(function () {
						driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentDateSet), 10000);
						driver.findElement(page.mentalCapacity_page.elements.assessmentDateSet).click();
						helpers.gridClickDate('prev', '16');
						return driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click().then(function () {
							driver.sleep(500);
							driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentOutcomeText), 10000);
							return driver.findElement(page.mentalCapacity_page.elements.assessmentOutcomeText).sendKeys("Test Capacity").then(function () {
								driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.safeguardingYes), 10000);
								return driver.findElement(page.mentalCapacity_page.elements.safeguardingYes).click().then(function () {
									driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createButton), 10000);
									driver.findElement(page.mentalCapacity_page.elements.createButton).click();
									return driver.sleep(1500);
								});
							});
						});
					});
				});
			});
	},

	createdSafeguardingCapacityVisible: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createdSafeCapacityVisible), 10000);
		return driver.findElement(page.mentalCapacity_page.elements.createdSafeCapacityVisible).getText()
			.then(function (createdSafeCapacityVisible) {
				expect(createdSafeCapacityVisible).to.equal("Mental capacity for safeguarding is not specified.");
			});
	},

	createdFinanceMentalCapacityVisible: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createdFinanceCapacityVisible), 10000);
		return helpers.gridGetText(page.mentalCapacity_page.elements.allCapacitys, page.mentalCapacity_page.elements.createdFinanceCapacityVisible, 'Has mental capacity for finance.')
			.then(function (createdFinanceCapacityVisible) {
				//console.log("Here ", createdFinanceCapacityVisible);
				expect(createdFinanceCapacityVisible).to.equal("Has mental capacity for finance.");
			});
	},

	createHealthCapacity: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityLabel), 10000);
		return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityLabel).getText().then(function (mentalCapacityLabel) {
			expect(mentalCapacityLabel).to.equal("Mental capacity");
		}).then(function () {
			driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.mentalCapacityAddIcon), 10000);
			return driver.findElement(page.mentalCapacity_page.elements.mentalCapacityAddIcon).click().then(function () {
				driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.chooseMentalCapacity), 10000);
				driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click();
				driver.sleep(500);
				return driver.findElement(page.mentalCapacity_page.elements.healthCapacity).click().then(function () {
					driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentDateSet), 10000);
					driver.findElement(page.mentalCapacity_page.elements.assessmentDateSet).click();
					helpers.gridClickDate('prev', '16');
					return driver.findElement(page.mentalCapacity_page.elements.chooseMentalCapacity).click().then(function () {
						driver.sleep(500);
						driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.assessmentOutcomeText), 10000);
						return driver.findElement(page.mentalCapacity_page.elements.assessmentOutcomeText).sendKeys("Test Capacity").then(function () {
							driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.safeguardingYes), 10000);
							driver.findElement(page.mentalCapacity_page.elements.safeguardingNo).click();
							return driver.sleep(1000).then(function () {
								driver.sleep(500);
								console.log("1");
								driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.setAdvocate), 10000);
								config = jsonfile.readFileSync('./support/'+featureConfig);
								var name = config.PersonDetails.person2.Name;
								console.log(name);
								driver.findElement(page.mentalCapacity_page.elements.setAdvocate).sendKeys(name);
								driver.sleep(1000);
								return driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.setAdvocateFirstList), 10000)
									.then(function () {
										console.log("2");
										driver.sleep(1500);
										return driver.findElement(page.mentalCapacity_page.elements.setAdvocateFirstList).click().then(function () {
											driver.sleep(1500);
											driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.advocateAppointmentDate), 10000);
											driver.findElement(page.mentalCapacity_page.elements.advocateAppointmentDate).click();
											return helpers.gridClickDate('prev', '16').then(function () {
												driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createButton), 10000);
												driver.findElement(page.mentalCapacity_page.elements.createButton).click();
												return driver.sleep(1500);
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

	createdHealthMentalCapacityVisible: function () {
		driver.wait(until.elementsLocated(page.mentalCapacity_page.elements.createdHealthCapacityVisible), 10000);
		return helpers.gridGetText(page.mentalCapacity_page.elements.allCapacitys, page.mentalCapacity_page.elements.createdHealthCapacityVisible, 'Lacks mental capacity for health.')
			.then(function (createdHealthCapacityVisible) {
				expect(createdHealthCapacityVisible).to.equal("Lacks mental capacity for health.");
			});
	}

}
