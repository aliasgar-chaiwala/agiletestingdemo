module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		toggleEducation: by.css('[name="Education"] div:nth-child(2) div a'),
		addEducationButton: by.css('[data-view*="education/education"] .add-more-record'),
		eduInstitute: by.css('[placeholder="Search an organisation ..."]'),
		selectInstitute: by.css('div[data-bind*="propName : \'educationalInstitutions\'"] div.option'),
		eduLevel: by.css('[name="needStatus"]'),
		courseEnrolledFor: by.css('[id="course0"]'),
		eduStartDate: by.css('form > div:nth-child(1) > div:nth-child(4) .col-sm-6.row input'),
		eduEndDate: by.css('form > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) input'),
		personalAdviser: by.css('form > div:nth-child(7) .selectize-input.items.not-full > input[type="text"]'),
		personalAdviserSelect: by.css('div[data-bind*="advisor"] div.selectize-dropdown.multi.form-control.plugin-remove_button div.option'),
		toggleEmploymentDropDown: by.css('[name="Employment"] div:nth-child(2) div a'),
		addEmploymentButton: by.css('[data-view*="employment/employment"] .add-more-record'),
		companyName: by.css('[placeholder="Company Name"]'),
		companyName2: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(2) > div:nth-child(1) [placeholder="Company Name"]'),
		companyName3: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(3) > div:nth-child(1) [placeholder="Company Name"]'),
		selectRole: by.css('#maincontent div.panel-collapse.in.collapse div.form-group.width-100.pull-left button'),
		roleActuary: by.css('#maincontent div.form-group.width-100.pull-left > div.row div.form-group.currentRole > div.searchableDropdown > div.prevent div:nth-child(1) a'),
		roleAccounts: by.css('#maincontent div:nth-child(2) > div.form-group.width-100.pull-left div.row div.form-group.currentRole > div.searchableDropdown > div.prevent div:nth-child(2) a'),
		employeRecord: by.css('#maincontent div.event-form  div:nth-child(5) div.panel-collapse.in.collapse .form-wrapper.indentation > div strong'),
		currentRole: by.css('div.dropdown.searchableDropdown button'),
		setCurrentRole: by.css('div.dropdown.searchableDropdown.open div.dropdown-menu .dataList div:nth-child(2) a'),
		secondCurrentRole: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(2) > div.form-group.width-100.pull-left div.dropdown.searchableDropdown button'),
		setSecondCurrentRole: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(2) > div.form-group.width-100.pull-left div.dropdown.searchableDropdown div.dropdown-menu .dataList div:nth-child(4) a'),
		thirdCurrentRole: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(3) > div.form-group.width-100.pull-left div.dropdown.searchableDropdown button'),
		setThirdCurrentRole: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(3) > div.form-group.width-100.pull-left div.dropdown.searchableDropdown div.dropdown-menu .dataList div:nth-child(6) a'),
		delete: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(1) > div:nth-child(1) i.delete-record'),
		toggleTraining: by.css('[name="Training"] .accordion-toggle.pull-right'),
		everyoneText: by.css('#maincontent div.event-form  div.row > div:nth-child(4)  div.panel-collapse.in.collapse span > strong'),
		personName: by.css('#maincontent div.event-form div.row > div:nth-child(4) div.panel-collapse.in.collapse div:nth-child(1) > div > div > span > strong > span'),
		person1Name: by.css('#maincontent div.event-form div.row > div:nth-child(4) div.panel-collapse.in.collapse div:nth-child(3) > div > div > span > strong > span'),
		setTrainingLevel: by.css('#needStatus'),
		setTrainingCourse: by.css('#course0'),
		setTrainingEndDate: by.css('#maincontent div.panel-collapse.in.collapse form:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) div.input-group.datepicker-panel input')
	},

	toggleEducation: function () {
		return driver.findElement(page.leaveCareAssessment_page.elements.toggleEducation).click()
			.then(function () {
				driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.addEducationButton), 10000);
				return driver.sleep(1500);
			})
	},

	addEducation: function () {
		driver.sleep(500);
		driver.findElement(page.leaveCareAssessment_page.elements.addEducationButton).click()
		driver.sleep(1200);
		return driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.eduInstitute), 10000)
			.then(function () {
				return driver.findElement(page.leaveCareAssessment_page.elements.eduInstitute).sendKeys(config.Organisation.BasicInfo.NewName)
					.then(function () {
						driver.sleep(2000);
						return driver.findElement(page.leaveCareAssessment_page.elements.selectInstitute).click()
							.then(function () {
								driver.sleep(2000);
								return helpers.selectOption(page.leaveCareAssessment_page.elements.eduLevel, 'MBA')
									.then(function () {
										return helpers.selectOption(page.leaveCareAssessment_page.elements.courseEnrolledFor, 'Agriculture')
											.then(function () {
												driver.findElement(page.leaveCareAssessment_page.elements.eduStartDate).click();
												helpers.gridClickDate('curr', '16');
												driver.findElement(page.leaveCareAssessment_page.elements.eduEndDate).click();
												helpers.gridClickDate('next', '16');
												return driver.sleep(1000)
													.then(function () {
														driver.findElement(page.leaveCareAssessment_page.elements.personalAdviser).sendKeys(config.PersonDetails.person2.Name)
														return driver.sleep(2000)
															.then(function () {
																return driver.wait(until.elementIsVisible(driver.findElement(page.leaveCareAssessment_page.elements.personalAdviserSelect)), 10000)
																	.then(function (elemPersonalAdvisorSelect) {
																		elemPersonalAdvisorSelect.click();
																		return driver.sleep(2000);
																	})
															})
													})
											})
									})
							})
					})
			})
	},

	toggleEmployment: function () {
		driver.sleep(1000);
		return driver.findElement(page.leaveCareAssessment_page.elements.toggleEmploymentDropDown).click()
			.then(function () {
				driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.addEmploymentButton), 10000);
				return driver.sleep(500);
			})
	},

	/*addEmployment: function () {
		driver.sleep(500);
		driver.findElement(page.leaveCareAssessment_page.elements.addEmploymentButton).click();
		return driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.companyName), 10000)
            .then(function () {
			driver.findElement(page.leaveCareAssessment_page.elements.companyName).sendKeys("Capita1");
			return driver.sleep(1000)
                    .then(function () {
				return driver.findElement(page.leaveCareAssessment_page.elements.selectRole).click()
                     .then(function () {
					driver.sleep(2000);
                       driver.findElement(page.leaveCareAssessment_page.elements.roleActuary).click();
					 return driver.sleep(1000)
					//return helpers.selectOption(page.leaveCareAssessment_page.elements.roleList, 'Actuary')
                                    .then(function () {
						return driver.findElement(page.leaveCareAssessment_page.elements.addEmploymentButton).click()
                                            .then(function () {
							driver.findElement(page.leaveCareAssessment_page.elements.companyName2).sendKeys("Capita2")
							return driver.sleep(1000)
                                                    .then(function () {
								return driver.findElement(page.leaveCareAssessment_page.elements.selectRole).click()
								return driver.sleep(1000)
                                                            .then(function () {
									driver.sleep(2000);
									// driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
									return driver.findElement(page.leaveCareAssessment_page.elements.roleAccounts).click()
								})
							})
						})
					})
				})
			})
		})
	},*/

	addEmployment: function () {
		driver.findElement(page.leaveCareAssessment_page.elements.addEmploymentButton).click();
		return driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.companyName), 10000)
			.then(function () {
				driver.findElement(page.leaveCareAssessment_page.elements.companyName).sendKeys("Capita1");
				return driver.sleep(500)
					.then(function () {
						driver.findElement(page.leaveCareAssessment_page.elements.currentRole).click();
						return driver.findElement(page.leaveCareAssessment_page.elements.setCurrentRole).click();
					})
					.then(function () {
						return driver.findElement(page.leaveCareAssessment_page.elements.addEmploymentButton).click()
							.then(function () {
								driver.findElement(page.leaveCareAssessment_page.elements.companyName2).sendKeys("Capita2")
								return driver.sleep(500)
							})
							.then(function () {
								driver.findElement(page.leaveCareAssessment_page.elements.secondCurrentRole).click();
								return driver.findElement(page.leaveCareAssessment_page.elements.setSecondCurrentRole).click();

							})
							.then(function () {
								driver.findElement(page.leaveCareAssessment_page.elements.toggleEmploymentDropDown).click();
								return driver.sleep(1000)
							})

					})
			})
	},


	verifyEmploymentRecord: function () {
		driver.wait(until.elementLocated(page.leaveCareAssessment_page.elements.employeRecord), 15000);
		return driver.findElement(page.leaveCareAssessment_page.elements.employeRecord).getText()
			.then(function (employeRecord) {
				return expect(employeRecord).to.equal("No employment record present");
			})
	},

	addNewEmployment: function () {
		driver.sleep(1000);
		return driver.findElement(page.leaveCareAssessment_page.elements.addEmploymentButton).click()
			.then(function () {
				driver.findElement(page.leaveCareAssessment_page.elements.companyName3).clear();
				driver.findElement(page.leaveCareAssessment_page.elements.companyName3).sendKeys("Capita3");
				return driver.sleep(500)
					.then(function () {
						driver.findElement(page.leaveCareAssessment_page.elements.thirdCurrentRole).click();
						driver.sleep(800);
						driver.findElement(page.leaveCareAssessment_page.elements.setThirdCurrentRole).click();
						return driver.sleep();
					})
				/*.then(function () {
					driver.findElement(page.leaveCareAssessment_page.elements.toggleEmploymentDropDown).click();
					return driver.sleep(1000)
				})*/

			})
	},

	verifyCompany: function () {
		driver.sleep(500);
		return driver.executeScript(" return $('#maincontent div.panel-collapse.in.collapse form > div:nth-child(1) > div:nth-child(1) [placeholder=\"Company Name\"]').val();")
			.then(function (Name) {
				if (Name == "Capita1") {
					return expect(Name).to.equal("Capita1");

				} else if (Name == "Capita2") {
					return expect(Name).to.equal("Capita2");
				}
				else {
					return false;
				}
			})
			.then(function () {
				return driver.executeScript(" return $('#maincontent div.panel-collapse.in.collapse form > div:nth-child(2) > div:nth-child(1) [placeholder=\"Company Name\"]').val();")
					.then(function (Name1) {
						if (Name1 == "Capita1") {
							return expect(Name1).to.equal("Capita1");

						} else if (Name1 == "Capita2") {
							return expect(Name1).to.equal("Capita2");
						}
						else {
							return false;
						}
					})
			})
			.then(function () {
				return driver.executeScript(" return $('#maincontent div.panel-collapse.in.collapse form > div:nth-child(3) > div:nth-child(1) [placeholder=\"Company Name\"]').val();")
					.then(function (Name2) {
						return expect(Name2).to.equal("Capita3");
					})
			})

	},

	deleteAndVerify: function () {
		driver.sleep(500);
		driver.wait(until.elementLocated(page.leaveCareAssessment_page.elements.delete), 15000);
		return driver.findElement(page.leaveCareAssessment_page.elements.delete).click()
			.then(function () {
				return driver.executeScript(" return $('#maincontent div.panel-collapse.in.collapse form > div:nth-child(1) > div:nth-child(1) [placeholder=\"Company Name\"]').val();")
			})
			.then(function (Name) {
				if (Name == "Capita1") {
					return expect(Name).to.equal("Capita1");

				} else if (Name == "Capita2") {
					return expect(Name).to.equal("Capita2");
				}
				else {
					return false;
				}
			})
			.then(function () {
				return driver.executeScript(" return $('#maincontent div.panel-collapse.in.collapse form > div:nth-child(2) > div:nth-child(1) [placeholder=\"Company Name\"]').val();")
					.then(function (Name1) {
						if (Name1 == "Capita1") {
							return expect(Name1).to.equal("Capita1");

						} else if (Name1 == "Capita2") {
							return expect(Name1).to.equal("Capita2");
						}
						else {
							return false;
						}
					})
			})
	},

	verifyTrainingEveryoneSection: function () {
		return driver.findElement(page.leaveCareAssessment_page.elements.toggleTraining).click().then(function () {
			driver.sleep(1500);
			driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.everyoneText), 10000);
			return driver.findElement(page.leaveCareAssessment_page.elements.everyoneText).getText()
				.then(function (display) {
					return expect(display).to.equal("Everyone");
				})
		})
	},

	verifyTrainingPersonNames: function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		personName = config.PersonDetails.Name;
		person1Name = config.PersonDetails.person1.Name;
		return driver.findElement(page.leaveCareAssessment_page.elements.toggleTraining).click().then(function () {
			driver.sleep(1500);
			driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.personName), 10000);
			return driver.findElement(page.leaveCareAssessment_page.elements.personName).getText()
				.then(function (name) {
					return expect(name).to.equal(personName);
				})
				.then(function () {
					driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.person1Name), 10000);
					return driver.findElement(page.leaveCareAssessment_page.elements.person1Name).getText()
						.then(function (nameOne) {
							return expect(nameOne).to.equal(person1Name);
						})
				})
		})
	},

	updateTrainingStepLevelData: function () {
		driver.wait(until.elementsLocated(page.leaveCareAssessment_page.elements.setTrainingLevel), 10000)
		helpers.selectOption(page.leaveCareAssessment_page.elements.setTrainingLevel, 'Foundation degree');
		helpers.selectOption(page.leaveCareAssessment_page.elements.setTrainingCourse, 'Autism & Aspergers');
		return driver.sleep(1000).then(function () {
			driver.findElement(page.leaveCareAssessment_page.elements.setTrainingEndDate).click();
			driver.sleep(300);
			helpers.gridClickDate('curr', '16');
			return driver.sleep(300);
		})
	}
}