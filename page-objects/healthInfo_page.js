module.exports = {

	elements: {
		healthInfoLabel: by.css('h2.page-title'),
		addMoreMedicalConditions: by.css('button[data-bind*=addMedicalConditions]'),
		medicalConditionsLabel: by.css('h2.page-title + div > h3'),
		medicalDetailsLabel: by.css('.medical-condition-details > label'),
		medicalDetailsTextArea: by.css('.medical-condition-details > textarea'),
		medicalConditionListLabel: by.css('.condition-identified > label'),
		medicalStatusLabel: by.css('.condition-status > label'),
		medicalStatus: by.css('[name="medical-condition-status"]'),
		medicalStatusList: by.css('.condition-status > div.dropdown.open > ul'),
		exactDateLabel: by.css('.date-unavailable > span'),
		diagnosedDateLabel: by.css('.diagnosed-date > label'),
		diagnosedByLabel: by.css('.diagnosed-by > label'),
		endDateLabel: by.css('.end-date > label'),
		medicalDeleteLabel: by.css('.delete-medical-condition a'),

		disabilitiesLabel: by.css('#maincontent div.health-facet.event-form > div > h3'),
		addMoreDisabilities: by.css('#maincontent div.health-facet.event-form div.form-group > div:nth-child(2) > button'),
		disabilitiesDetailsLabel: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div > div.form-group > div > div > label'),
		disabilitiesType: by.css('#maincontent div.health-facet.event-form > div > div.form-group > div.col-sm-12 > form > div > div:nth-child(2) > div > label'),
		disabilitiesStartDateLabel: by.css('#maincontent div.health-facet.event-form > div > div.form-group > div.col-sm-12 > form > div > div:nth-child(4) > div > div:nth-child(1) > label'),
		disabilitiesEndDateLabel: by.css('#maincontent div.health-facet.event-form  div.form-group > div.col-sm-12 > form > div > div:nth-child(4) > div > div:nth-child(2) > label'),
		disabilitiesDeleteLabel: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div > div.text-right.m-t-sm > a'),

		medicalDetailsField: by.css('div[name="medicalConditionBlock"] textarea[name="medical-details"]'),
		medicalConditionDropdown: by.css('.condition-identified > div.dropdown'),
		medicalConditionStatusDropdown: by.css('.condition-status div.dropdown'),
		medicalDiagnosedDateSet: by.css('div[data-bind*="data: \'diagnosedDate\'"] input'),
		medicalDiagnosedBySearch: by.css('[name="medical-diagnosed-by"] input'),
		medicalDiagnosedBySearchList: by.css('div[name="medical-diagnosed-by"] div.selectize-control div.selectize-dropdown'),
		medicalDiagnosedBySearchListItems: by.css('div[data-group="professional"] div.option'),

		medicalDiagnosedBySelect: by.css('form > div.form-group > div > div > div:nth-child(5) div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		medicalEndDate: by.css('div[data-bind*="data.diagnosedDate"] input'),

		secMedicalDiagnosedDateSet: by.css('form [class="col-sm-12"]:nth-child(2) > div > div:nth-child(3) #reusableDatepicker'),
		secMedicalEndDate: by.css('form [class="col-sm-12"]:nth-child(2) > div > div:nth-child(7) input'),

		healthWidget: by.css('[name="Health_Section"]'),
		MedicationLabel: by.css('[name="medication"] > div > h3'),
		medicationName: by.css('[placeholder="Please provide medication name"]'),
		medicationType: by.css('[placeholder="Please provide medication type"]'),
		medicationDose: by.css('[placeholder="Please provide medication dose"]'),
		medicationFreq: by.css('[placeholder="Please provide medication frequency"]'),
		medicationDeli: by.css('[placeholder="Please provide delivery method"]'),
		medicationNotes: by.css('[placeholder="Please provide relevant details"]'),
		medicationDelete: by.css('[data-bind*="removeMedications"]'),
		addMoreMedication: by.css('[data-bind*="addMedications"]'),
		medicationStartDate: by.css('div[name="medication"] div[data-bind*="data: \'startDate\'"] input'),
		medicationEndDate: by.css('div[name="medication"] div[data-bind*="data: \'endDate\'"] input'),
		addMoreMedicationHealthWidget: by.css('[name="medication"] button'),
		addAnotherMoreMedicationHealthWidget: by.css('button[data-bind*="addMedications"]'),
		medicationNameTwo: by.css('input[data-bind*="medicationName"]'),
		medicationTypeTwo: by.css('input[data-bind*="medicationType"]'),
		medicationDoseTwo: by.css('input[data-bind*="medicationDose"]'),
		medicationFrequencyTwo: by.css('input[data-bind*="medicationFrequency"]'),

		thirdmedicationName: by.css('#maincontent div.pvm-body.tab-section div:nth-child(4) form div.form-group.m-t div:nth-child(2) input'),
		thirdmedicationType: by.css('#maincontent div.pvm-body.tab-section div:nth-child(4) form div.form-group.m-t div:nth-child(4) input'),
		thirdmedicationDose: by.css('#maincontent div.health-facet.event-form div.pvm-body.tab-section div:nth-child(4) > form > div > div:nth-child(2) > div:nth-child(2) input'),
		thirdmedicationFreq: by.css('#maincontent div.health-facet.event-form div.pvm-body.tab-section div:nth-child(4) > form > div > div:nth-child(2) > div:nth-child(4) input'),
		thirdmedicationDeli: by.css('#maincontent div.health-facet.event-form div.pvm-body.tab-section > div > div:nth-child(4) > form > div > div:nth-child(4) > div input'),
		thirdmedicationStartDate: by.css('#maincontent div.health-facet.event-form div.pvm-body.tab-section > div > div:nth-child(4) > form > div > div:nth-child(3) > div:nth-child(2) input'),
		thirdmedicationEndDate: by.css('#maincontent div.health-facet.event-form div.pvm-body.tab-section > div > div:nth-child(4) > form > div > div:nth-child(3) > div:nth-child(4) input'),
		deleteMedicationOnHealth: by.css('#maincontent > div > div > div > div.health-facet.event-form > div > div:nth-child(10) > div > div:nth-child(2) > form > div > div:nth-child(8) > div > div > div > a > span'),
		noRecordText: by.css('#maincontent div.health-facet.event-form > div > .form-group label'),
		addMoreDisabilitiesHealthWidget: by.css('#maincontent div.health-facet.event-form > div.container-fluid.animated.fadeInRight > div.form-group > div.form-group button'),
		detailsText: by.css('[placeholder="Please provide relevent details"]'),
		type: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div.reusable-area > div:nth-child(2) div.dropdown button'),
		setType: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div.reusable-area > div:nth-child(2) div.dropdown ul.dropdown-menu'),
		firstDisabilitiesStartDate: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div.reusable-area > div:nth-child(4) .form-group > div:nth-child(1) .input-group.datepicker-panel input'),
		firstDisabilitiesEndDate: by.css('#maincontent div.health-facet.event-form div.form-group > div.col-sm-12 > form > div.reusable-area > div:nth-child(4) .form-group > div:nth-child(2) .input-group.datepicker-panel input'),
		secondDetailsText: by.css('#maincontent > div > div > div.health-facet.event-form > div > div.form-group > div:nth-child(2) > form [placeholder="Please provide relevent details"]'),
		firstDetailsText: by.css('#maincontent > div > div > div.health-facet.event-form > div > div.form-group > div:nth-child(1) > form [placeholder="Please provide relevent details"]'),
		secondType: by.css('#maincontent div.health-facet.event-form div.form-group > div:nth-child(2) > form div.reusable-area > div:nth-child(2) button.btn'),
		setSecondType: by.css('#maincontent div.health-facet.event-form div.form-group > div:nth-child(2) > form div.reusable-area > div:nth-child(2) div.col-sm-4 ul'),
		secondDisabilitiesStartDate: by.css('#maincontent div.health-facet.event-form div.animated > div.form-group .col-sm-12:nth-child(2) form .reusable-area div:nth-child(4) .form-group .col-sm-6:nth-child(1) input'),
		secondDisabilitiesEndDate: by.css('#maincontent div.health-facet.event-form div.animated > div.form-group .col-sm-12:nth-child(2) form .reusable-area div:nth-child(4) .form-group .col-sm-6:nth-child(2) input'),

		dentalAddMore: by.css('button[data-bind*="addDentalChecks"]'),
		dentalDate: by.css('div#dateOfDentalCheckup .icon-date-picker-small'),
		dentalDentist: by.css('div#dentistName input'),
		dentalDentistList: by.css('div#dentistName .selectize-dropdown-content'),
		dentalDentistCard: by.css('.professionalCard div[name="professional-business-card"]'),

		saveHealthInfoButton: by.css('[type="submit"]'),
	},

	verifyMedicalConditionsFields: function () {
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
		driver.sleep(1000);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.healthInfoLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.healthInfoLabel).getText()
			.then(function (healthInfoLabel) {
				return expect(healthInfoLabel).to.equal("Health information");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalConditionsLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalConditionsLabel).getText();
			})
			.then(function (medicalConditionsLabel) {
				return expect(medicalConditionsLabel).to.equal("Medical conditions");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreMedicalConditions), 10000);
				return driver.findElement(page.healthInfo_page.elements.addMoreMedicalConditions).click();
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalDetailsLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalDetailsLabel).getText().then(function (medicalDetailsLabelText) {
					return expect(medicalDetailsLabelText).to.equal("Details");
				});
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalConditionListLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalConditionListLabel).getText().then(function (medicalConditionListLabelText) {
					return expect(medicalConditionListLabelText).to.contain("Condition identified");
				});
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalStatusLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalStatusLabel).getText().then(function (medicalStatusLabelText) {
					return expect(medicalStatusLabelText).to.equal("Condition status");
				});
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.exactDateLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.exactDateLabel).getText().then(function (exactDateLabelText) {
					return expect(exactDateLabelText).to.equal("Exact date unavailable");
				});
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.medicalStatus).click();
				driver.sleep(500);
				return driver.findElement(page.healthInfo_page.elements.medicalStatusList).getText().then(function (medicalStatusListText) {
					var listValues = "SuspectedConfirmed"
					medicalStatusListText = medicalStatusListText.replace(" ", "").replace(/[\r\n]+/g, "");
					return expect(medicalStatusListText).to.equal(listValues);
				})
			}).then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.diagnosedDateLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.diagnosedDateLabel).getText().then(function (diagnosedDateLabelText) {
					return expect(diagnosedDateLabelText).to.equal("Diagnosed date");
				});
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.diagnosedByLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.diagnosedByLabel).getText().then(function (diagnosedByLabelText) {
					return expect(diagnosedByLabelText).to.equal("Diagnosed by");
				})
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.endDateLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.endDateLabel).getText().then(function (endDateLabelText) {
					return expect(endDateLabelText).to.equal("End date");
				});
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalDeleteLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalDeleteLabel).getText().then(function (deleteLabelText) {
					return expect(deleteLabelText).to.equal("Delete").then(function () {
						return driver.findElement(page.healthInfo_page.elements.medicalDeleteLabel).click();
					});
				});
			})
	},

	verifyDisabilitiesFields: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.disabilitiesLabel).getText()
			.then(function (disabilitiesLabel) {
				return expect(disabilitiesLabel).to.equal("Disabilities");
			}).then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreDisabilities), 10000);
				return driver.findElement(page.healthInfo_page.elements.addMoreDisabilities).click();
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesDetailsLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.disabilitiesDetailsLabel).getText();
			})
			.then(function (disabilitiesDetailsLabel) {
				return expect(disabilitiesDetailsLabel).to.equal("Details");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesType), 10000);
				return driver.findElement(page.healthInfo_page.elements.disabilitiesType).getText();
			})
			.then(function (disabilitiesType) {
				return expect(disabilitiesType).to.equal("Type");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesStartDateLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.disabilitiesStartDateLabel).getText();
			})
			.then(function (disabilitiesStartDateLabel) {
				return expect(disabilitiesStartDateLabel).to.equal("Start Date");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesEndDateLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.disabilitiesEndDateLabel).getText();
			})
			.then(function (disabilitiesEndDateLabel) {
				return expect(disabilitiesEndDateLabel).to.equal("End Date");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesDeleteLabel), 10000);
				return driver.findElement(page.healthInfo_page.elements.disabilitiesDeleteLabel).getText();
			})
			.then(function (disabilitiesDeleteLabel) {
				//expect(disabilitiesDeleteLabel).to.equal("Delete");
				return driver.findElement(page.healthInfo_page.elements.disabilitiesDeleteLabel).click();
			})

	},

	addTwoMedicalConditions: function () {
		driver.sleep(500);
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		driver.sleep(500);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreMedicalConditions), 10000);
		return driver.findElement(page.healthInfo_page.elements.addMoreMedicalConditions).click()
			.then(function () {
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.medicalDetailsField).sendKeys('Details1');
			})
			.then(function () {
				driver.sleep(500);
				return helpers.clickIncludesList(page.healthInfo_page.elements.medicalConditionDropdown, 'button', by.css('li a'), 'Congenital Heart Disease');
			})
			.then(function () {
				driver.sleep(500);
				return helpers.clickIncludesList(page.healthInfo_page.elements.medicalConditionStatusDropdown, 'button', by.css('li a'), 'Suspected');
			})
			.then(function () {
				//driver.findElement(page.healthInfo_page.elements.medicalConditionStatusSelect).click();
				driver.sleep(500)
				driver.findElement(page.healthInfo_page.elements.medicalDiagnosedDateSet).click();
				helpers.gridClickDate('prev', '16');
				driver.sleep(1000);
				driver.executeScript('return window.scrollTo(' + 2000 + ',' + 2000 + ');')
				driver.sleep(1000);
				return driver.findElement(page.healthInfo_page.elements.medicalDiagnosedBySearch).sendKeys(config.Professional.BasicInfo.NewName)
					.then(function () {
						driver.sleep(800);
						helpers.gridClick(page.healthInfo_page.elements.medicalDiagnosedBySearchList, page.healthInfo_page.elements.medicalDiagnosedBySearchListItems, config.Professional.BasicInfo.NewName);
						driver.findElement(page.healthInfo_page.elements.medicalEndDate).click();
						helpers.gridClickDate('prev', '17');
						return driver.sleep(1000);
					})

			})
			.then(function () {
				return driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreMedicalConditions), 10000)
					.then(function () {
						return driver.findElement(page.healthInfo_page.elements.addMoreMedicalConditions).click()
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalDetailsTextArea).then(function (options) {
							options[1].sendKeys("Details2");
						});
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalConditionDropdown).then(function (options) {
							return helpers.clickIncludesListWithElement(options[1], 'button', by.css('li a'), 'Congenital Heart Disease');
						});
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalConditionStatusDropdown).then(function (options) {
							return helpers.clickIncludesListWithElement(options[1], 'button', by.css('li a'), 'Suspected');
						});
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalDiagnosedDateSet).then(function (options) {
							options[1].click();
							driver.sleep(500);
							helpers.gridClickDate('prev', '16');
							return driver.sleep(1000)
						});
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalDiagnosedBySearch).then(function (options) {
							options[1].sendKeys(config.Professional.BasicInfo.NewName)
							driver.sleep(1500);
							return driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalDiagnosedBySearchList), 5000).then(function (options) {
								return driver.wait(until.elementIsVisible(options[1]), 10000, "Second Medical diagnosed By not visible").then(function () {
									helpers.gridClickWithElementParam(options[1], page.healthInfo_page.elements.medicalDiagnosedBySearchListItems, config.Professional.BasicInfo.NewName);
								});
							});
						});
					})
					.then(function () {
						return driver.findElements(page.healthInfo_page.elements.medicalEndDate).then(function (options) {
							options[1].click();
							driver.sleep(500);
							helpers.gridClickDate('prev', '17');
							return driver.sleep(1000);
						})
					})
			})

	},

	saveHealthInfo: function () {
		driver.findElement(page.healthInfo_page.elements.saveHealthInfoButton).click();
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.healthWidget), 10000)
	},

	verifyMultiMediCondi: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.healthInfoLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.healthInfoLabel).getText()
			.then(function (healthInfoLabel) {
				return expect(healthInfoLabel).to.equal("Health information");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalDetailsField), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalDetailsField).getText();
			})
			.then(function (medicalDetailsField) {
				console.log("medicalDetailsField: ", medicalDetailsField)
				//return expect(medicalDetailsField).to.equal("Details1");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicalDetailsField), 10000);
				return driver.findElement(page.healthInfo_page.elements.medicalDetailsField).getText();
			})
			.then(function (medicalDetailsFieldText) {
				console.log("secMedicalDetailsField: ", medicalDetailsFieldText)
				assert.fail("Do Implementation");
				//	return expect(medicalDetailsFieldText).to.equal("Details2");
			})
	},

	verifyMedicationFromPIRform: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.MedicationLabel), 10000);
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicationName), 10000)
			.then(function () {
				console.log("CHECK");
				return driver.executeScript(" return $('[placeholder=\"Please provide medication name\"]').val();")
					.then(function (medicationName) {
						expect(medicationName).to.equal("Test1");
						return driver.executeScript(" return $('[placeholder=\"Please provide medication type\"]').val();")
							.then(function (medicationName) {
								expect(medicationName).to.equal("Test1");
								return driver.executeScript(" return $('[placeholder=\"Please provide medication dose\"]').val();")
									.then(function (medicationDose) {
										expect(medicationDose).to.equal("Test1");
										return driver.executeScript(" return $('[placeholder=\"Please provide medication frequency\"]').val();")
											.then(function (medicationFreq) {
												expect(medicationFreq).to.equal("Test1");
												return driver.executeScript(" return $('[placeholder=\"Please provide delivery method\"]').val();")
													.then(function (medicationDeli) {
														expect(medicationDeli).to.equal("Test1");
														return driver.executeScript(" return $('[placeholder=\"Please provide relevant details\"]').val();")
															.then(function (medicationNotes) {
																expect(medicationNotes).to.equal("Test1");
																return driver.sleep(100);
															})
													})
											})
									})
							})
					})
			})
	},

	deleteFirstMedication: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.MedicationLabel), 10000);
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicationDelete), 10000)
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.medicationDelete).click();
				return driver.sleep(100);
			})
	},

	addMedication: function () {
		driver.findElement(page.healthInfo_page.elements.addMoreMedication).click()
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicationName), 10000)
	},

	setMedication: function () {

		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.medicationName), 10000)
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.medicationName).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationType).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationDose).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationFreq).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationDeli).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationStartDate).click()
				helpers.gridClickDate('prev', '16');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.medicationEndDate).click()
				helpers.gridClickDate('next', '16');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.medicationNotes).sendKeys('Test1');
				return driver.sleep(1500);
			})
			.then(function () {
				driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
				driver.findElement(page.healthInfo_page.elements.saveHealthInfoButton).click();
				return driver.sleep(1500);
			})
	},

	setMedicationOnHealthWidget: function () {
		driver.sleep(1500);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.MedicationLabel), 10000);
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		return driver.findElement(page.healthInfo_page.elements.addMoreMedicationHealthWidget).click()
			.then(function () {
				driver.sleep(1000);
				driver.findElement(page.healthInfo_page.elements.medicationName).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationType).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationDose).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationFreq).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationDeli).sendKeys('Test1')
				driver.findElement(page.healthInfo_page.elements.medicationStartDate).click()
				helpers.gridClickDate('prev', '16');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.medicationEndDate).click()
				helpers.gridClickDate('next', '16');
				driver.sleep(500);
				return driver.findElement(page.healthInfo_page.elements.medicationNotes).sendKeys('Test1')
					.then(function () {
						driver.sleep(500);
						driver.findElement(page.healthInfo_page.elements.addAnotherMoreMedicationHealthWidget).click();
						return driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
					})
					.then(function () {
						driver.findElements(page.healthInfo_page.elements.medicationNameTwo).then(function (element) {
							element[1].sendKeys('Test2');
						})
						driver.findElements(page.healthInfo_page.elements.medicationTypeTwo).then(function (element1) {
							element1[1].sendKeys('Test2')
						})
						driver.findElements(page.healthInfo_page.elements.medicationDoseTwo).then(function (element2) {
							element2[1].sendKeys('Test2')
						})
						driver.findElements(page.healthInfo_page.elements.medicationFrequencyTwo).then(function (element3) {
							element3[1].sendKeys('Test2');
						})
						//driver.findElement(page.healthInfo_page.elements.medicationNameTwo).sendKeys('Test2')
						//driver.findElement(page.healthInfo_page.elements.medicationTypeTwo).sendKeys('Test2')
						//driver.findElement(page.healthInfo_page.elements.medicationDoseTwo).sendKeys('Test2')
						//driver.findElement(page.healthInfo_page.elements.medicationFrequencyTwo).sendKeys('Test2')
					})
					.then(function () {
						driver.sleep(2000);
						return driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');').then(function () {
							driver.sleep(1000);
							return driver.findElement(page.healthInfo_page.elements.saveHealthInfoButton).click()
								.then(function () {
									return driver.sleep(1500);
								})
						});


					});
			});

	},

	setThirdMedicationOnHealthWidget: function () {
		driver.sleep(2000);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.MedicationLabel), 10000);
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		driver.findElement(page.healthInfo_page.elements.addAnotherMoreMedicationHealthWidget).click();
		return driver.sleep(1000)
			.then(function () {
				driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.sleep(2000);
				driver.findElements(page.healthInfo_page.elements.medicationNameTwo).then(function (element) {
					element[2].sendKeys('Test3');
				})
				driver.findElements(page.healthInfo_page.elements.medicationTypeTwo).then(function (element1) {
					element1[2].sendKeys('Test3')
				})
				driver.findElements(page.healthInfo_page.elements.medicationDoseTwo).then(function (element2) {
					element2[2].sendKeys('Test3')
				})
				driver.findElements(page.healthInfo_page.elements.medicationFrequencyTwo).then(function (element3) {
					element3[2].sendKeys('Test3');
				})
				//driver.wait(until.elementsLocated(page.healthInfo_page.elements.thirdmedicationName), 10000);
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationName).clear();
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationName).sendKeys('Test3')
				//driver.wait(until.elementsLocated(page.healthInfo_page.elements.thirdmedicationType), 10000);
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationType).clear();
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationType).sendKeys('Test3')
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationDose).clear();
				//	driver.findElement(page.healthInfo_page.elements.thirdmedicationDose).sendKeys('Test3')
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationFreq).clear();
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationFreq).sendKeys('Test3')
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationDeli).clear();
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationDeli).sendKeys('Test3')
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationStartDate).click()
				//helpers.gridClickDate('prev', '18');
				driver.sleep(500);
				//driver.findElement(page.healthInfo_page.elements.thirdmedicationEndDate).click()
				//helpers.gridClickDate('next', '18');
				return driver.sleep(500)
					.then(function () {
						driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
						return driver.findElement(page.healthInfo_page.elements.saveHealthInfoButton).click()
					})
			})

	},

	deleteMedicationOnHealthInfo: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.MedicationLabel), 10000);
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.deleteMedicationOnHealth), 10000);
				driver.findElement(page.healthInfo_page.elements.deleteMedicationOnHealth).click();
				return driver.sleep(1000)
			})
		/*.then(function () {
				return driver.executeScript(" return $('#maincontent div.pvm-body.tab-section div:nth-child(2) form div.form-group.m-t div:nth-child(2) input').val();")
						.then(function (jsexecute) {
					expect(jsexecute).to.equal("Test2");
					return driver.sleep(2000);
				})
			})*/
	},

	noDisabilityRecords: function () {
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.disabilitiesLabel).getText()
			.then(function (disabilitiesLabel) {
				return expect(disabilitiesLabel).to.equal("Disabilities");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.noRecordText), 10000);
				return driver.findElement(page.healthInfo_page.elements.noRecordText).getText()
			})
			.then(function (noRecordText) {
				return expect(noRecordText).to.equal("No disability has been recorded");
			})
	},

	verifyDisabilitiesFromPIRform: function () {
		driver.sleep(2000);
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000)
			.then(function () {
				return driver.executeScript(" return $('[placeholder=\"Please provide relevent details\"]').val();")
					.then(function (Name) {
						return expect(Name).to.equal("Test Details");
					})
			})
	},

	setTwoDisabilitiesOnHealthWidget: function () {
		driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');');
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.addMoreDisabilitiesHealthWidget).click()
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.detailsText).clear();
				driver.findElement(page.healthInfo_page.elements.detailsText).sendKeys('Test Details One');
				driver.findElement(page.healthInfo_page.elements.type).click();
				return helpers.selectOption(page.healthInfo_page.elements.setType, 'Learning');
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.firstDisabilitiesStartDate).click();
				helpers.gridClickDate('curr', '20');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.firstDisabilitiesEndDate).click();
				helpers.gridClickDate('curr', '22');
				driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreDisabilitiesHealthWidget), 10000);
				return driver.findElement(page.healthInfo_page.elements.addMoreDisabilitiesHealthWidget).click()
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.secondDetailsText).clear();
				driver.findElement(page.healthInfo_page.elements.secondDetailsText).sendKeys('Test Details Two');
				driver.findElement(page.healthInfo_page.elements.secondType).click();
				return helpers.selectOption(page.healthInfo_page.elements.setSecondType, 'Hand Function');
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.secondDisabilitiesStartDate).click();
				helpers.gridClickDate('curr', '20');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.secondDisabilitiesEndDate).click();
				helpers.gridClickDate('curr', '22');
				driver.sleep(500);
			})

	},

	updateCreatedDisabilities: function () {
		driver.sleep(2000);
		return driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000)
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.firstDetailsText).clear();
				return driver.findElement(page.healthInfo_page.elements.firstDetailsText).sendKeys('Test Details Three');
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.secondDetailsText).clear();
				driver.findElement(page.healthInfo_page.elements.secondDetailsText).sendKeys('Test Details Four');
			})
	},

	setDisabilitiesOnHealthWidget: function () {
		driver.sleep(2000);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.disabilitiesLabel), 10000);
		return driver.findElement(page.healthInfo_page.elements.addMoreDisabilitiesHealthWidget).click()
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.detailsText).clear();
				driver.findElement(page.healthInfo_page.elements.detailsText).sendKeys('Test Details');
				driver.findElement(page.healthInfo_page.elements.type).click();
				return helpers.selectOption(page.healthInfo_page.elements.setType, 'Hearing');
			})
			.then(function () {
				driver.findElement(page.healthInfo_page.elements.firstDisabilitiesStartDate).click();
				helpers.gridClickDate('curr', '20');
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.firstDisabilitiesEndDate).click();
				helpers.gridClickDate('curr', '22');
				driver.sleep(500);
			})
	},

	addMedicalConditions: function () {
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		driver.sleep(500);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.addMoreMedicalConditions), 10000);
		return driver.findElement(page.healthInfo_page.elements.addMoreMedicalConditions).click()
			.then(function () {
				driver.sleep(500);
				driver.findElement(page.healthInfo_page.elements.medicalDetailsField).sendKeys('Details1');
			})
			.then(function () {
				driver.sleep(500);
				return helpers.clickIncludesList(page.healthInfo_page.elements.medicalConditionDropdown, 'button', by.css('li a'), 'Congenital Heart Disease');
			})
			.then(function () {
				driver.sleep(500);
				return helpers.clickIncludesList(page.healthInfo_page.elements.medicalConditionStatusDropdown, 'button', by.css('li a'), 'Suspected');
			})
			.then(function () {
				driver.sleep(500)
				driver.findElement(page.healthInfo_page.elements.medicalDiagnosedDateSet).click();
				helpers.gridClickDate('prev', '16');
				driver.sleep(1000);
				driver.executeScript('return window.scrollTo(' + 2000 + ',' + 2000 + ');')
				driver.sleep(1000);
				return driver.findElement(page.healthInfo_page.elements.medicalDiagnosedBySearch).sendKeys(config.Professional.BasicInfo.NewName)
					.then(function () {
						driver.sleep(800);
						helpers.gridClick(page.healthInfo_page.elements.medicalDiagnosedBySearchList, page.healthInfo_page.elements.medicalDiagnosedBySearchListItems, config.Professional.BasicInfo.NewName);
						driver.findElement(page.healthInfo_page.elements.medicalEndDate).click();
						helpers.gridClickDate('prev', '17');
						return driver.sleep(1000);
					})

			})
	},
	setDentalCheck: function () {
		driver.sleep(2000);
		driver.wait(until.elementsLocated(page.healthInfo_page.elements.dentalAddMore), 10000, 'Dental Check Add More button Missing');
		return driver.findElement(page.healthInfo_page.elements.dentalAddMore).click()
			.then(function () {
				return driver.wait(until.elementsLocated(page.healthInfo_page.elements.dentalDentist), 10000, 'Dentist Field didnot populate')
					.then(function () {
						return driver.wait(until.elementsLocated(page.healthInfo_page.elements.dentalDate), 10000, 'dentalDate Field didnot populate')
							.then(function () {
								driver.findElement(page.healthInfo_page.elements.dentalDate).click();
								var date = new Date();
								console.log('Dental Check Date: ', date);
								var currDate = date.getDate();
								return helpers.gridClickDate('curr', currDate).then(function () {

									professionalName = config.Professional.BasicInfo.NewName;
									driver.findElement(page.healthInfo_page.elements.dentalDentist).sendKeys(professionalName);
									return driver.wait(until.elementsLocated(page.healthInfo_page.elements.dentalDentistList), 10000, 'dentalDentistList didnot populate')
										.then(function () {
											return helpers.gridClick(page.healthInfo_page.elements.dentalDentistList, by.css('.option'), professionalName).then(function () {
												driver.wait(until.elementsLocated(page.healthInfo_page.elements.dentalDentistCard), 10000, 'Dentist B Card didnot populate');
												return driver.findElement(page.healthInfo_page.elements.saveHealthInfoButton).click();
											});
										});
								});
							});
					});
			});
	}
}