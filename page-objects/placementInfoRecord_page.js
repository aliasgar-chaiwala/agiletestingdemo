module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		toggleMedicalConditions: by.css('[name="Medical conditions"] > div:nth-child(2) > div > a'),
		medicalPerson: by.css('.in.collapse .row.m-b-sm span > strong > span'),
		medicalEveryonePerson: by.css('[data-view*="medicalConditions"] span strong'),
		toggleMedication: by.css('[name="Medication"] > div:nth-child(2) > div > a'),
		medicationPerson: by.css('#reusable-medication .row span > strong > span'),
		medicationEveryonePerson: by.css('#reusable-medication .row span > strong'),
		disabilitiesEveryonePerson: by.css('#reusable-disabilities .row span > strong'),
		toggleDis: by.css('[name="Disabilities"] a.accordion-toggle'),
		disabilitiesPerson: by.css('#reusable-disabilities > div:nth-child(1) span > strong > span'),
		everyoneNoMedications: by.css('#reusable-medication > div.well.well-lg.m-t-lg'),
		noDisabilityRecord: by.css('#reusable-disabilities label.col-sm-4.control-label'),
		deleteFirstMediCondi: by.css('form [id="medicatCondition-display"]:nth-child(2) [data-bind*="deleteItem"]'),
		addMoreMedication: by.css('#reusable-medication [data-bind*=addItemSubComponent]'),
		addMoreDisabilities: by.css('#reusable-disabilities .indentation button'),
		firstMedicationName: by.css('[id="reusable-medication"] > div:nth-child(2) > div:nth-child(1) [data-bind*="medicationName"]'),
		firstMedicationType: by.css('[id="reusable-medication"] > div:nth-child(2) > div:nth-child(1) [data-bind*="medicationType"]'),
		firstMedicationDose: by.css('[placeholder="Please provide medication dose"]'),
		firstMedicationFreq: by.css('[placeholder="Please provide medication frequency"]'),
		firstMedicationDeli: by.css('[placeholder="Please provide delivery method"]'),
		firstMedicationStartDate: by.css('div[data-bind*="data: \'startDate\'"] span i'),
		firstMedicationEndDate: by.css('div[data-bind*="data: \'endDate\'"] span i'),
		firstMedicationNote: by.css('#reusable-medication > div.indentation.m-t-md > div:nth-child(6) > div > div > textarea'),
		medicationUniquePerson: by.css('#reusable-medication .row:nth-child(1) span > strong > span'),
		medicationUniquePerson1: by.css('#reusable-medication .row:nth-child(3) span > strong > span'),
		person1NoMedications: by.css('#reusable-medication > div.well.well-lg.m-t-lg'),
		ThisIsFor: by.css('#reusable-medication [class="caret m-r-sm"]'),
		ThisIsForPerson2: by.css('#reusable-medication ul li:nth-child(3) a span:nth-child(2)'),
		medicationFirst2Person: by.css('#reusable-medication .row:nth-child(1) span > strong'),
		medicationforPerson2: by.css('#reusable-medication .row:nth-child(3) span > strong > span'),
		notification: by.css('#maincontent div.row > div:nth-child(3) div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg > h4'),
		//comparison: by.css('[class="modal fade bd-example-modal-lg in"] .modal-content h4'),
		comparison: by.css('#compareModal h4'),
		medicationDose: by.css('#reusable-medication > div:nth-child(2) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication dose"]'),
		medicationFrequency: by.css('#reusable-medication > div:nth-child(2) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication frequency"]'),
		notificationClick: by.css('div[data-view*="medications"] button[data-bind*="showCompareModal"]'),
		keepChanges: by.css('div[data-view*="medications"] button[data-bind*="notificationAcknowledged"]'),
		latestNotification: by.css('div[data-view*="medications"] div[data-bind*="showSuccessMessage"] h4'),
		comparisonPopUpCancel: by.css('[class="modal fade bd-example-modal-lg in"] .modal-header .close'),
		deleteMedication: by.css('.m-r-lg a'),
		takeLatest: by.css('#maincontent div:nth-child(3) div.panel-collapse.in.collapse div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg button:nth-child(2)'),
		updatedNotification: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(3) > h4'),
		updatedCombinedNotification: by.css('#maincontent div.panel-collapse.in.collapse div:nth-child(4) > h4'),
		removedStatus: by.css('div.modal.fade.bd-example-modal-lg.in .table.table-bordered.compareTable .selected-section.remove-padding span.deleted-pill'),
		cancelLink: by.css('div.modal.fade.bd-example-modal-lg.in .modal-footer .btn-cancel'),
		addedStatus: by.css('div.modal.fade.bd-example-modal-lg.in .table.table-bordered.compareTable .sec-info-panel.updated-by span.added-pill'),
		dropdownToggle: by.css('div.modal.fade.bd-example-modal-lg.in .modal-footer div.btn-group .btn.btn-create-new.dropdown-toggle'),
		keepChangesLink: by.css('div.modal.fade.bd-example-modal-lg.in .modal-footer div.btn-group ul.dropdown-menu li:nth-child(1) a'),
		updateChanges: by.css('div.modal.fade.bd-example-modal-lg.in .modal-footer div.btn-group ul.dropdown-menu li:nth-child(2) a'),
		everyoneText: by.css('.panel-collapse.in.collapse form span.align-middle'),
		updateMediDose: by.css('#reusable-medication > div:nth-child(2) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication dose"]'),
		updateMediFrequency: by.css('#reusable-medication > div:nth-child(2) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication frequency"]'),
		comparePerson1MediRec1Data: by.css('#compareModal div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(4)'),
		comparePerson1MediRec2Data: by.css('#compareModal div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(14)'),
		comparePersonMediRec1Data: by.css('#compareModal div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(24)'),
		updateMediDoseTwo: by.css('#reusable-medication > div:nth-child(4) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication dose"]'),
		updateMediFrequencyTwo: by.css('#reusable-medication > div:nth-child(4) > div:nth-child(2) .form-group:nth-child(2) [placeholder = "Please provide medication frequency"]'),
		person1Name: by.css('#reusable-medication > div:nth-child(3) div.col-sm-12 div.dropdown span.align-middle strong span'),
		detailsText: by.css('#DisabilitiesDetails'),
		type: by.css('#reusable-disabilities .validation button.btn'),
		setType: by.css('div[data-validation-property-key*="disabilities"]'),
		commonList: by.css('li a'),
		firstDisabilitiesStartDate: by.css('#reusable-disabilities div[data-bind*="data: \'startDate\'"] button i'),
		firstDisabilitiesEndDate: by.css('#reusable-disabilities div[data-bind*="data: \'endDate\'"] button i'),
		personText: by.css('#reusable-disabilities > div:nth-child(1) > div.col-sm-12 div.dropdown.m-t-sm.m-l-sm span.align-middle strong span'),
		thisIsForDisabilities: by.css('#reusable-disabilities > div:nth-child(1) > div.col-sm-12 div.dropdown.m-t-sm.m-l-sm [class="caret m-r-sm"]'),
		thisIsForPerson2Disabilities: by.css('#reusable-disabilities > div:nth-child(1) > div.col-sm-12 div.dropdown.m-t-sm.m-l-sm ul.dropdown-menu li:nth-child(2) a span:nth-child(2)'),
		comparisonTitles: by.css('div.modal-dialog.modal-lg div.modal-body > table > thead > tr'),
		comparisonPerson1: by.css('div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(1) td:nth-child(2)'),
		comparisonPerson2: by.css('div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(11) td:nth-child(2)'),
		updateText: by.css('div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(5) > td:nth-child(2)'),
		updateText1: by.css('div.modal-dialog.modal-lg div.modal-body > table > tbody > tr:nth-child(6) > td:nth-child(2)'),
		combinRadioButton: by.css('#compareModal div.modal-body > table > tbody > tr.sectionHeading > td:nth-child(3) > div.radio.m-l-sm > label > input[type="radio"]'),
		resetSelection: by.css('#compareModal > div.modal-dialog.modal-lg div.modal-body > div.text-right > a'),
		updatedCombinationChanges: by.css('div.modal.fade.bd-example-modal-lg.in .modal-footer div.btn-group ul.dropdown-menu li:nth-child(3) a'),
		appointmentsToggleLink: by.css('[name="Appointments"] a.accordion-toggle'),
		noRecordVisible: by.css('#reusable-references-checks label'),
		addMoreAppointments: by.css('#reusable-references-checks .col-sm-2 button'),
		appointmentsType: by.css('div.appointment-type-validation div.dropdown.repeated button'),
		setAppointmentsType: by.css('div.appointment-type-validation div.dropdown.repeated ul.dropdown-menu'),
		appointmentsTypeOne: by.css('#reusable-references-checks > form:nth-child(3) > div:nth-child(1) div.appointment-type-validation div.dropdown.repeated button'),
		setAppointmentsTypeOne: by.css('#reusable-references-checks > form:nth-child(3) > div:nth-child(1) div.appointment-type-validation div.dropdown.repeated ul.dropdown-menu'),
		appointmentDetails: by.css('[placeholder="Please provide relavent details"]'),
		appointmentDetailsOne: by.css('#reusable-references-checks > form:nth-child(3) > div > div:nth-child(2) [placeholder="Please provide relavent details"]'),
		appointmentDate: by.css('#reusable-references-checks .col-sm-8 button i'),
		appointmentDateOne: by.css('#reusable-references-checks > form:nth-child(3) > div > div:nth-child(3) [aria-label="Start Date"] input'),
		appointmentResponsiblePersonSearch: by.css('[placeholder="Search person ..."]'),
		appointmentResponsiblePersonSearchOne: by.css('#reusable-references-checks > form:nth-child(3) > div > div:nth-child(5) [placeholder="Search person ..."]'),
		appointmentWith: by.css('[placeholder="Search professional, organisation..."]'),
		appointmentWithSelectFirstList: by.css('#reusable-references-checks > form > div > div:nth-child(4) div.selectize-dropdown.multi.form-control.plugin-remove_button div.selectize-dropdown-content div.option'),
		appointmentSearchPersonSelectFirstList: by.css('#reusable-references-checks > form > div > div:nth-child(5) > div > div:nth-child(1) div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		checkBoxCompletedAppointment: by.css('#checkReview .white-check.task-check input'),
		appointmentWithOne: by.css('#reusable-references-checks > form > div > div:nth-child(4) [placeholder="Search professional, organisation..."]'),
		checkBoxCompletedAppointmentOne: by.css('#reusable-references-checks > form > div > div:nth-child(6) #checkReview .white-check.task-check input'),
		appointmentsDeleteLink: by.css('#reusable-references-checks > form:nth-child(2) > div > div:nth-child(6) > div:nth-child(2) > div > div > a'),
		anotherPersonAppointmentsDeleteLink: by.css('.indentation .col-sm-6:nth-child(2) a'),
		noRecordVisibleForPerson1: by.css('#reusable-references-checks > div:nth-child(2) > label'),
		noRecordVisibleForPerson2: by.css('#reusable-references-checks > div:nth-child(5) > label'),
		misMatchData: by.css('.modal-title'),
		keepButton: by.css('[data-bind = "on.click: keepChanges()"]'),
		medicalConditionDetails: by.css('#maincontent div.panel-collapse.in.collapse form:nth-child(7) #medicatCondition-display > div:nth-child(1) > div textarea'),
		medicalConditionNotification: by.css('#maincontent div.row > div:nth-child(2) div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg > h4'),
		medicalConditionsNotificationClick: by.css('#maincontent div.panel-collapse.in.collapse div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg > button'),
		appointmentNotification: by.css('#maincontent div.row > div:nth-child(8) div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg > h4'),
		appointmentKeepChangesLink: by.css('#maincontent div.row > div:nth-child(8) div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg .text-right.m-t-sm button:nth-child(1)'),
		appointmentLatest: by.css('#maincontent div.row > div:nth-child(8) div.notification-alert-panel.alert-warning.m-n-sm.m-b-lg .text-right.m-t-sm button:nth-child(2)'),
		secondAppointmentSearchPersonSelectFirstList: by.css('#reusable-references-checks > form:nth-child(3) > div > div:nth-child(5) > div > div:nth-child(1) div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		secondAppointmentWithSelectFirstList: by.css('#reusable-references-checks > form:nth-child(3) > div > div:nth-child(4) div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		setDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.bottom .datepicker div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(5)'),
		appointmentTypebutton: by.css('.appointment-type-validation div button'),
		appointmentTypeList: by.css('.appointment-type-validation div ul'),
		appointmentTypeListItem: by.css('li a'),
		professionalList: by.css('.selectize-dropdown .selectize-dropdown-content'),
		professionalListItem: by.css('div[data-group="professional"]'),
		noRecordVisibleForPersons: by.css('#reusable-references-checks label')
		//addMoreMediButton: by.css('#reusable-medication button.btn.btn-forms.pull-right')
	},


	toggleMedicalConditions: function (personName) {
		return driver.sleep(500);
		//driver.findElement(page.placementInfoRecord_page.elements.toggleMedicalConditions).click();
		// .then(function () {
		//     driver.sleep(500);
		//     return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicalPerson), 10000)
		//         .then(function () {
		//             return driver.findElement(page.placementInfoRecord_page.elements.medicalPerson).getText()
		//                 .then(function (returnName) {
		//                     return expect(returnName).to.equal(personName);
		//                 });
		//         });
		// });
	},

	verifyEmptyMedicalConditionForEveryone: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicalEveryonePerson), 10000).then(function () {
			return driver.findElement(page.placementInfoRecord_page.elements.medicalEveryonePerson).getText().then(function (returnName) {
				return expect(returnName).to.equal('Everyone');
			});
		});
	},

	toggleMedication: function () {
		return driver.sleep(5000).then(function () {
			return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.toggleMedication), 20000)
				.then(function () {
					driver.sleep(2000);
					driver.findElement(page.placementInfoRecord_page.elements.toggleMedication).click();
					return driver.sleep(1000)
				})

			// .then(function () {
			//     driver.sleep(500);
			//     return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationPerson), 10000)
			//         .then(function () {
			//             return driver.findElement(page.placementInfoRecord_page.elements.medicationPerson).getText()
			//                 .then(function (returnName) {
			//                     return expect(returnName).to.equal(text);
			//                 });
			//});
		});
	},

	verifyEmptyMedicationForEveryone: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationEveryonePerson), 10000).then(function () {
			return driver.findElement(page.placementInfoRecord_page.elements.medicationEveryonePerson).getText().then(function (everyone) {
				expect(everyone).to.equal('Everyone')
				return driver.sleep(100).then(function () {
					return driver.findElement(page.placementInfoRecord_page.elements.everyoneNoMedications).getText().then(function (msg) {
						var expectedMsg = 'Currently there are no medications for ' + config.PersonDetails.Name + ' and ' + config.PersonDetails.person1.Name;
						expect(msg).to.equal(expectedMsg);
						return driver.sleep(100)
							//.then(function () {
							//	driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.addMoreMedication), 15000);
							//	return driver.findElement(page.placementInfoRecord_page.elements.addMoreMedication).click();
						//	});
					});
				});
			});
		});
	},

	toggleDisabilities: function (personName) {
		driver.findElement(page.placementInfoRecord_page.elements.toggleDis).click()
		return driver.sleep(1000)
		// .then(function () {
		//     driver.sleep(500);
		//     return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.disabilitiesPerson), 10000)
		//         .then(function () {
		//             return driver.findElement(page.placementInfoRecord_page.elements.disabilitiesPerson).getText()
		//                 .then(function (returnName) {
		//                     return expect(returnName).to.equal(personName);
		//                 });
		//         });
		// });
	},

	verifyEmptyDisabilitiesForEveryone: function (person) {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.disabilitiesEveryonePerson), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.disabilitiesEveryonePerson).getText()
					.then(function (everyone) {
						expect(everyone).to.equal(person)
						return driver.sleep(100)
							.then(function () {
								return driver.findElement(page.placementInfoRecord_page.elements.noDisabilityRecord).getText()
									.then(function (msg) {
										expect(msg).to.equal("No disability has been recorded");
										return driver.sleep(100);
									});
							});
					});
			});
	},

	setMedicalConditions: function () {
		helpers.selectOption(page.placementInfoRecord_page.elements.contactMethods, 'Phone');
		helpers.selectOption(page.placementInfoRecord_page.elements.contactAbout, 'Adult Safeguarding Concern');
		return driver.findElement(page.placementInfoRecord_page.elements.EventTimeDateField).click();
	},

	setMedication: function () {
		return driver.findElement(page.placementInfoRecord_page.elements.addMoreMedication).click().then(function () {

          driver.sleep(3000);
			return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.firstMedicationName), 10000).then(function () {
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationName).sendKeys('Test1');
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationType).sendKeys('Test1');
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationDose).sendKeys('Test1');
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationFreq).sendKeys('Test1');
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationDeli).sendKeys('Test1');
				return driver.executeScript('return window.scrollTo(' + 400 + ',' + 400 + ');')
					.then(function () {
						//driver.findElement(page.placementInfoRecord_page.elements.firstMedicationStartDate).click();
						//return driver.sleep(5000);
						//.then(function () {
						//return helpers.gridClickDate('prev', '16')
						//.then(function () {
						//return driver.findElement(page.placementInfoRecord_page.elements.firstMedicationEndDate).click()
						//	.then(function () {
						//helpers.gridClickDate('next', '16');
						//driver.sleep(500)
						return driver.findElement(page.placementInfoRecord_page.elements.firstMedicationNote).sendKeys('Test1').then(function(){
							return driver.sleep(5000);
						})
						//	});
					});
			});
		});
		//});
		//});
	},

	setDisabilities: function () {
		driver.findElement(page.placementInfoRecord_page.elements.addMoreDisabilities).click();
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.detailsText), 10000)
			.then(function () {
				driver.findElement(page.placementInfoRecord_page.elements.detailsText).clear();
				driver.findElement(page.placementInfoRecord_page.elements.detailsText).sendKeys('Test Details');
				//driver.findElement(page.placementInfoRecord_page.elements.type).click();
				return helpers.clickIncludesList(page.placementInfoRecord_page.elements.setType, 'button', page.placementInfoRecord_page.elements.commonList, 'Hearing')

			})
			.then(function () {
				return driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');')
					.then(function () {
						return driver.findElement(page.placementInfoRecord_page.elements.firstDisabilitiesStartDate).click()
							.then(function () {
								helpers.gridClickDate('curr', '20');
								return driver.sleep(1000).then(function () {
									driver.findElement(page.placementInfoRecord_page.elements.firstDisabilitiesEndDate).click().then(function () {
										helpers.gridClickDate('curr', '22');
										return driver.sleep(2000);
									})
								})

							})

					})

			})
	},

	removeFirstMedicalCondition: function () {
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.deleteFirstMediCondi), 10000).then(function () {
			driver.sleep(1000);
			driver.findElement(page.placementInfoRecord_page.elements.deleteFirstMediCondi).click();
			console.log("REMOVED")
			return driver.sleep(2000);
		});
	},

	verifyMedicationForUniquePerson: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationUniquePerson), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.medicationUniquePerson).getText()
					.then(function (everyone) {
						expect(everyone).to.equal(config.PersonDetails.Name);
						return driver.sleep(100);
					});
			});
	},

	verifyEmptyMedicationForPerson1: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationUniquePerson1), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.medicationUniquePerson1).getText()
					.then(function (everyone) {
						expect(everyone).to.equal(config.PersonDetails.person1.Name);
						return driver.sleep(100)
							.then(function () {
								return driver.findElement(page.placementInfoRecord_page.elements.person1NoMedications).getText()
									.then(function (msg) {
										var expectedMsg = 'Currently there are no medications for ' + config.PersonDetails.person1.Name;
										expect(msg).to.equal(expectedMsg);
										return driver.sleep(100);
									});
							});
					});
			});
	},

	verifyMedicationForEveryone: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationEveryonePerson), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.medicationEveryonePerson).getText().then(function (everyone) {
					expect(everyone).to.equal('Everyone');
					return driver.sleep(100);
				});
			});
	},

	removePerson2FromMedication: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationEveryonePerson), 10000)
			.then(function () {
				driver.findElement(page.placementInfoRecord_page.elements.ThisIsFor).click();
				return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.ThisIsForPerson2), 10000)
					.then(function () {
						driver.findElement(page.placementInfoRecord_page.elements.ThisIsForPerson2).click();
						return driver.sleep(100);
					});
			});
	},

	verifyMedicationForFirstTwoPerson: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationFirst2Person), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.medicationFirst2Person).getText()
					.then(function (names) {
						var expectedNames = config.PersonDetails.Name + ' and ' + config.PersonDetails.person1.Name;
						expect(names).to.equal(expectedNames)
					});
			});
	},

	verifyPIRNotification: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.notification), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.notification).getText()
					.then(function (alert) {					
						expect(alert).to.equal("Medications details have been updated.")
						return driver.sleep(1000);
					})
			})
	},
	/*
		comparisonWindow: function () { 
			var parent = driver.getWindowHandle();
			var windows = driver.getWindowHandles();	
			return driver.switchTo().window(windows[1])
		.then(function () { 
				return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			})
		.then(function (text) { 
				expect(text).to.equal("Comparison")
			})	
			driver.close();
			driver.switchTo().window(parent);
		},*/

	comparisonWindow: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.notificationClick), 10000);		
		driver.findElement(page.placementInfoRecord_page.elements.notificationClick).click();
		driver.sleep(2000);
		return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			.then(function (text) {
				return expect(text).to.equal("Compare changes");
			})
	},

	updateMedicationFields: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationDose), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.medicationDose).clear();
		return driver.findElement(page.placementInfoRecord_page.elements.medicationDose).sendKeys('Update Test')
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicationFrequency), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.medicationFrequency).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.medicationFrequency).sendKeys('Update Test');
			})

	},

	updateFirstMedicationFields: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.firstMedicationDose), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.firstMedicationDose).clear();
		return driver.findElement(page.placementInfoRecord_page.elements.firstMedicationDose).sendKeys('Update Test')
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.firstMedicationFreq), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.firstMedicationFreq).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.firstMedicationFreq).sendKeys('Update Test');
			})

	},

	latestChanges: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepChanges), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.keepChanges).getText()
			.then(function (text) {
				return expect(text).to.equal("Keep my changes");
			})
			.then(function () {
				driver.findElement(page.placementInfoRecord_page.elements.keepChanges).click();
				return driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.latestNotification), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.latestNotification).getText()
			})
			.then(function (latest) {
				return expect(latest).to.equal("You have kept your information as latest version.");
			})
	},

	deleteMedicationOnPIRForm: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.deleteMedication), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.deleteMedication).click();
		return driver.sleep(1000)
		/*.then(function () { 
				return driver.executeScript(" return $('#Medication').val();")
						.then(function (jsexecute) {
					return expect(jsexecute).to.equal("Test2");
				})
			})*/
	},

	notificationNotVisible: function () {
		driver.sleep(1000);
		return driver.findElement(page.placementInfoRecord_page.elements.notification).isDisplayed()
			.then(function (display) {
				return expect(display).not.to.equal(true);
			})

	},

	takeLatestChanges: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.takeLatest), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.takeLatest).getText()
			.then(function (text) {
				return expect(text).to.equal("Take latest");
			})
			.then(function () {
				driver.findElement(page.placementInfoRecord_page.elements.takeLatest).click();
				return driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedNotification), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.updatedNotification).getText()
			})
			.then(function (latest) {
				return expect(latest).to.equal("Successfully updated with the latest version.");
			})
		/*.then(function () {
			driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
			driver.sleep(1000);
			return driver.executeScript(" return $('#reusable-medication > div:nth-child(2) > div:nth-child(3) .form-group:nth-child(1) [placeholder = \"Please provide medication name\"]').val();")
					.then(function (jsexecute) {
				return expect(jsexecute).to.equal("Test3");
			})
		})*/
	},

	comparisonWindowStatusRemovedVisible: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.notificationClick), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.notificationClick).click();
		driver.sleep(1500);
		return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			.then(function (text) {
				return expect(text).to.equal("Compare changes");
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.removedStatus), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.removedStatus).getText()
			})
			.then(function (status) {
				return expect(status).to.equal("Removed");
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
				return driver.sleep(1000);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepChangesLink), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.keepChangesLink).click();
				return driver.sleep(1000);
			})
	},

	comparisonWindowStatusAddedVisible: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.notificationClick), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.notificationClick).click();
		driver.sleep(1500);
		return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			.then(function (text) {
				return expect(text).to.equal("Compare changes");
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.addedStatus), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.addedStatus).getText()
			})
			.then(function (status) {
				return expect(status).to.equal("Added");
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
				return driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepChangesLink), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.keepChangesLink).click();
				return driver.sleep(500);
			})
	},

	verifyNotClubbedData: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.notificationClick), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.notificationClick).click();
		driver.sleep(2000);
		return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			.then(function (text) {
				return expect(text).to.equal("Compare changes");
			})
			.then(function () {
				driver.sleep(800);
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparePerson1MediRec1Data), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.comparePerson1MediRec1Data).getText()
					.then(function (text) {
						return expect(text).to.equal("Medication type Test1 Test1");
					})
			})
			.then(function () {
				driver.sleep(800);
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparePerson1MediRec2Data), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.comparePerson1MediRec2Data).getText()
					.then(function (jsexecute) {
						return expect(jsexecute).to.equal("Medication type Test2 Test2");
					})
			})
			.then(function () {
				driver.sleep(800);
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparePersonMediRec1Data), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.comparePersonMediRec1Data).getText()
					.then(function (jsexecute) {
						return expect(jsexecute).to.equal("Medication Name Test2 Test2");
					})
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
				return driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepChangesLink), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.keepChangesLink).click();
				return driver.sleep(500);
			})
	},

	verifyPeron1Name: function (person) {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.person1Name), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.person1Name).getText()
			.then(function (text) {
				return expect(text).to.equal(person);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateMediDoseTwo), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.updateMediDoseTwo).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.updateMediDoseTwo).sendKeys('Test2')
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateMediFrequencyTwo), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.updateMediFrequencyTwo).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.updateMediFrequencyTwo).sendKeys('Test2');
			})

	},

	everyoneVisible: function () {
		driver.sleep(1000);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.everyoneText), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.everyoneText).getText()
			.then(function (display) {
				return expect(display).to.equal("Everyone");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateMediDose), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.updateMediDose).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.updateMediDose).sendKeys('Test2')
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateMediFrequency), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.updateMediFrequency).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.updateMediFrequency).sendKeys('Test2');
			})

	},

	deleteStepLevelMedication: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.deleteMedication), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.deleteMedication).click();
		return driver.sleep(1000)
	},

	verifyCreatedDisabilities: function () {
		driver.sleep(500);
		return driver.executeScript(" return $('#reusable-disabilities > div:nth-child(2) > div:nth-child(2) > div textarea').val();")
			.then(function (Name) {
				if (Name == "Test Details One") {
					return expect(Name).to.equal("Test Details One");

				} else if (Name == "Test Details Two") {
					return expect(Name).to.equal("Test Details Two");
				}

			})
			.then(function () {
				driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.sleep(1000);
				return driver.executeScript(" return $('#reusable-disabilities > div:nth-child(3) > div:nth-child(2) > div textarea').val();")
					.then(function (Name) {
						if (Name == "Test Details One") {
							return expect(Name).to.equal("Test Details One");

						} else if (Name == "Test Details Two") {
							return expect(Name).to.equal("Test Details Two");
						}

					})
			})
	},

	verifyCreatedDisabilitiesForBoth: function () {
		driver.sleep(1500);
		return driver.executeScript(" return $('#reusable-disabilities > div:nth-child(2) > div:nth-child(2) > div textarea').val();")
			.then(function (Name) {
				if (Name == "Test Details One") {
					return expect(Name).to.equal("Test Details One");

				} else if (Name == "Test Details Two") {
					return expect(Name).to.equal("Test Details Two");
				}
				else if (Name == "Test Details") {
					return expect(Name).to.equal("Test Details");
				}

			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.sleep(1000);
				return driver.executeScript(" return $('#reusable-disabilities > div:nth-child(3) > div:nth-child(2) > div textarea').val();")
					.then(function (Name) {
						if (Name == "Test Details One") {
							return expect(Name).to.equal("Test Details One");

						} else if (Name == "Test Details Two") {
							return expect(Name).to.equal("Test Details Two");
						}
						else if (Name == "Test Details") {
							return expect(Name).to.equal("Test Details");
						}


					})
			})
			.then(function () {
				//driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				driver.sleep(1000);
				return driver.executeScript(" return $('#reusable-disabilities > div:nth-child(6) > div:nth-child(2) > div textarea').val();")
					.then(function (Name) {
						if (Name == "Test Details One") {
							return expect(Name).to.equal("Test Details One");

						} else if (Name == "Test Details Two") {
							return expect(Name).to.equal("Test Details Two");
						}
						else if (Name == "Test Details") {
							return expect(Name).to.equal("Test Details");
						}



					})
			})
	},

	setTwoPersons: function (person) {
		driver.sleep(1000);
		//driver.executeScript('return window.scrollTo(' + 1800 + ',' + 700 + ');')
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.personText), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.personText).getText()
			.then(function (display) {
				return expect(display).to.equal(person);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.thisIsForDisabilities), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.thisIsForDisabilities).click();
				driver.sleep(500);
				return driver.findElement(page.placementInfoRecord_page.elements.thisIsForPerson2Disabilities).click();
			})

	},

	deleteStepLevelMedication: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.deleteMedication), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.deleteMedication).click();
		return driver.sleep(1000)

	},

	verifyCreatedDisabilitiesForUniquePerson: function () {
		driver.sleep(500);
		return driver.executeScript(" return $('[placeholder=\"Please provide relavent details\"]').val();")
			.then(function (Name) {
				return expect(Name).to.equal("Test Details");
			})
	},

	verifyComparsionTitle: function () {
		driver.sleep(3000);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparisonTitles), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.comparisonTitles).getText()
			.then(function (title) {
				return expect(title).to.equal("Fields Your version Latest version");
			})

	},

	verifyComparsionPersons: function () {
		driver.sleep(1000);
		config = jsonfile.readFileSync('./support/' + featureConfig);
		var person1 = config.PersonDetails.FirstName + ' ' + config.PersonDetails.LastName;
		var person2 = config.PersonDetails.person1.FirstName + ' ' + config.PersonDetails.person1.LastName;
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparisonPerson1), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.comparisonPerson1).getText()
			.then(function (person) {
				if (person == person1) {
					return expect(person).to.equal(person1);
				} else if (person == person2) {
					return expect(person).to.equal(person2);
				}
			})
			.then(function () {
				driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.comparisonPerson2), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.comparisonPerson2).getText()
					.then(function (person) {
						if (person == person1) {
							return expect(person).to.equal(person1);
						} else if (person == person2) {
							return expect(person).to.equal(person2);
						}
					})
			})
	},

	verifyLatestData: function () {
		//driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
		return driver.sleep(500)
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateChanges), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.updateChanges).click();
				return driver.sleep(500);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedNotification), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.updatedNotification).getText()
			})
			.then(function (latest) {
				return expect(latest).to.equal("Successfully updated with the latest version.");
			})

	},

	setToEveryone: function () {
		driver.sleep(1000);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.everyoneText), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.everyoneText).getText()
			.then(function (display) {
				return expect(display).to.equal("Everyone");
			})

	},

	combinData: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateText), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.updateText).getText()
			.then(function (text) {
				return expect(text).to.equal("Update Test");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateText1), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.updateText1).getText()
					.then(function (text1) {
						return expect(text1).to.equal("Update Test");
					}).then(function () {
						driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.combinRadioButton), 10000);
						return driver.findElement(page.placementInfoRecord_page.elements.combinRadioButton).click();
					}).then(function () {
						driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.resetSelection), 10000);
						return driver.findElement(page.placementInfoRecord_page.elements.resetSelection).getText()
							.then(function (reset) {
								return expect(reset).to.equal("Reset selection");
							}).then(function () {
								driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
								driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
								return driver.sleep(500)
							})
							.then(function () {
								driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedCombinationChanges), 10000);
								driver.findElement(page.placementInfoRecord_page.elements.updatedCombinationChanges).click();
								return driver.sleep(500)
							})

					})
			})
	},

	verfiyCombinedData: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedCombinedNotification), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.updatedCombinedNotification).getText()
			.then(function (latest) {
				return expect(latest).to.equal("Successfully updated with selected combination.");
			}).then(function () {
				return driver.executeScript(" return $('#reusable-medication > div:nth-child(2) > div:nth-child(2) .form-group:nth-child(2) [placeholder = \"Please provide medication dose\"]').val();")
					.then(function (Name) {
						if (Name == "Test1") {
							return expect(Name).to.equal("Test1");

						} else if (Name == "Test2") {
							return expect(Name).to.equal("Test2");
						}

					})
					.then(function () {
						driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
						driver.sleep(500);
						return driver.executeScript(" return $('#reusable-medication > div:nth-child(4) > div:nth-child(2) .form-group:nth-child(2) [placeholder = \"Please provide medication dose\"]').val();")
							.then(function (Name) {
								if (Name == "Test1") {
									return expect(Name).to.equal("Test1");

								} else if (Name == "Test2") {
									return expect(Name).to.equal("Test2");
								}

							})
					})
			})

	},

	verifySelectiveCombinationNotVisible: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
		return driver.sleep(500).then(function () {
			driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedCombinationChanges), 10000);
			return driver.findElement(page.placementInfoRecord_page.elements.updatedCombinationChanges).getText()
				.then(function (text) {
					return expect(text).not.to.equal("Update my changes with selected combination")
				})

		})

	},

	verifyLatestChangesNotVisible: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.combinRadioButton), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.combinRadioButton).click()
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
				driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
				return driver.sleep(500).then(function () {
					driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepChangesLink), 10000);
					return driver.findElement(page.placementInfoRecord_page.elements.keepChangesLink).getText()
						.then(function (linkText) {
							return expect(linkText).not.to.equal("Keep my changes as latest")
						}).then(function () {
							driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updateChanges), 10000);
							return driver.findElement(page.placementInfoRecord_page.elements.updateChanges).getText()
								.then(function (textLink) {
									return expect(textLink).not.to.equal("Take latest")
								})
						})
				})
			})
	},

	afterResetVerifySelectiveCombination: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.resetSelection), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.resetSelection).click().then(function () {
			driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.dropdownToggle), 10000);
			driver.findElement(page.placementInfoRecord_page.elements.dropdownToggle).click();
			return driver.sleep(500).then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedCombinationChanges), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.updatedCombinationChanges).getText()
					.then(function (text) {
						return expect(text).not.to.equal("Update my changes with selected combination")
					})
			})
		})

	},

	toggleAppointments: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentsToggleLink), 15000);
		driver.findElement(page.placementInfoRecord_page.elements.appointmentsToggleLink).click();
		return driver.sleep(1000)
	},

	noRecordsForAppointmentsVisible: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.noRecordVisible), 15000);
		return driver.findElement(page.placementInfoRecord_page.elements.noRecordVisible).getText()
			.then(function (textRecord) {
				return expect(textRecord).to.equal("No appointment has been recorded")
			})

	},

	noRecordsForBothPersosnAppointmentsVisible: function () {
		//driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.noRecordVisibleForPerson1), 15000);

		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.noRecordVisibleForPersons), 15000);
		return driver.findElements(page.placementInfoRecord_page.elements.noRecordVisibleForPersons)
			.then(function (elements) {
				return elements[0].getText()
					.then(function (textRecord) {
						return expect(textRecord).to.equal("No appointment has been recorded")
					}).then(function () {
						return elements[1].getText()
							.then(function (textRecord) {
								return expect(textRecord).to.equal("No appointment has been recorded")
							});
					});

			});


	},

	addNewAppointments: function () {
		driver.sleep(1000);
		return driver.executeScript('return window.scrollTo(' + 2500 + ',' + 2500 + ');').then(function () {
			driver.sleep(1000);
			return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.addMoreAppointments), 15000).then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.addMoreAppointments).click().then(function () {
					return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentTypebutton), 15000).then(function () {
						return driver.findElement(page.placementInfoRecord_page.elements.appointmentTypebutton).click().then(function () {
							return helpers.clickIncludesGrid(page.placementInfoRecord_page.elements.appointmentTypeList, page.placementInfoRecord_page.elements.appointmentTypeListItem, 'Dental').then(function () {
								return driver.sleep(500).then(function () {
									return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetails), 15000).then(function () {
										driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).clear();
										return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).sendKeys("Testing Text").then(function () {

											config = jsonfile.readFileSync('./support/' + featureConfig);
											orgName = config.Organisation.BasicInfo.NewName;
											personName = config.PersonDetails.Name;
											professionalName = config.Professional.BasicInfo.NewName;
											driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentWith), 15000);
											driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).clear();
											//driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).sendKeys(professionalName);
											//helpers.gridClick(page.placementInfoRecord_page.elements.professionalList,page.placementInfoRecord_page.elements.professionalListItem,professionalName);
											//driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).sendKeys(selenium.Key.ENTER);
											driver.sleep(2000);
											return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDate), 15000).then(function () {
												return driver.findElement(page.placementInfoRecord_page.elements.appointmentDate).click().then(function () {
													driver.sleep(2000);
													return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
														return helpers.gridClickDate('next', '8')
															.then(function () {
																return driver.sleep(6000);
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
				});
			});
		});


	},

	addNewPerson1Appointments: function () {

		driver.sleep(1000);
		return driver.executeScript('return window.scrollTo(' + 2500 + ',' + 2500 + ');').then(function () {
			driver.sleep(1000);
			return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.addMoreAppointments), 15000).then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.addMoreAppointments).click().then(function () {
					return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentTypebutton), 15000).then(function () {
						return driver.findElement(page.placementInfoRecord_page.elements.appointmentTypebutton).click().then(function () {
							return helpers.clickIncludesGrid(page.placementInfoRecord_page.elements.appointmentTypeList, page.placementInfoRecord_page.elements.appointmentTypeListItem, 'Dental').then(function () {
								return driver.sleep(500).then(function () {
									return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetails), 15000).then(function () {
										driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).clear();
										return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).sendKeys("Testing Text").then(function () {

											config = jsonfile.readFileSync('./support/' + featureConfig);
											orgName = config.Organisation.BasicInfo.NewName;
											personName = config.PersonDetails.Name;
											professionalName = config.Professional.BasicInfo.NewName;
											driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentWith), 15000);
											driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).clear();
											//driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).sendKeys(professionalName);
											//helpers.gridClick(page.placementInfoRecord_page.elements.professionalList,page.placementInfoRecord_page.elements.professionalListItem,professionalName);
											//driver.findElement(page.placementInfoRecord_page.elements.appointmentWith).sendKeys(selenium.Key.ENTER);
											driver.sleep(2000);
											return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDate), 15000).then(function () {
												return driver.findElement(page.placementInfoRecord_page.elements.appointmentDate).click().then(function () {
													driver.sleep(2000);
													return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
														return helpers.gridClickDate('next', '8')
															.then(function () {
																return driver.sleep(6000);
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
				});
			});
		});

	},

	addAnotherAppointments: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.addMoreAppointments), 15000);
		return driver.findElement(page.placementInfoRecord_page.elements.addMoreAppointments).click().then(function () {
			driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentsTypeOne), 15000);
			driver.findElement(page.placementInfoRecord_page.elements.appointmentsTypeOne).click();
			helpers.selectOption(page.placementInfoRecord_page.elements.setAppointmentsTypeOne, 'Doctors');
			return driver.sleep(500);
		})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetailsOne), 15000);
				driver.findElement(page.placementInfoRecord_page.elements.appointmentDetailsOne).clear();
				return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetailsOne).sendKeys("Testing Text One");
			})
			.then(function () {
				driver.sleep(800);
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDateOne), 15000);
				driver.findElement(page.placementInfoRecord_page.elements.appointmentDateOne).click();
				driver.sleep(500);
				helpers.gridClickDate('curr', '20');
				return driver.sleep(1500);
			})
			.then(function () {
				config = jsonfile.readFileSync('./support/' + featureConfig);
				orgName = config.Organisation.BasicInfo.NewName;
				personName = config.PersonDetails.Name;
				professionalName = config.Professional.BasicInfo.NewName;
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentWithOne), 15000);
				driver.findElement(page.placementInfoRecord_page.elements.appointmentWithOne).sendKeys(orgName);
				driver.sleep(4000);
				driver.findElement(page.placementInfoRecord_page.elements.secondAppointmentWithSelectFirstList).click();
				return driver.sleep(3000);
			})
			.then(function () {
				config = jsonfile.readFileSync('./support/' + featureConfig);
				personName = config.PersonDetails.Name;
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentResponsiblePersonSearchOne), 15000);
				driver.findElement(page.placementInfoRecord_page.elements.appointmentResponsiblePersonSearchOne).clear();
				driver.findElement(page.placementInfoRecord_page.elements.appointmentResponsiblePersonSearchOne).sendKeys(personName);
				driver.sleep(4000);
				driver.findElement(page.placementInfoRecord_page.elements.secondAppointmentSearchPersonSelectFirstList).click();
				/*driver.sleep(1000);
				driver.findElement(page.placementInfoRecord_page.elements.checkBoxCompletedAppointmentOne).click();*/
				return driver.sleep(3000);
			})

	},

	verifyCreatedAppointmentsVisible: function () {
		driver.sleep(500);
		return driver.executeScript(" return $('[placeholder=\"Please provide relavent details\"]').val();")
			.then(function (Name) {
				if (Name == "Testing Text") {
					return expect(Name).to.equal("Testing Text");
				} else if (Name == "Testing Text One") {
					return expect(Name).to.equal("Testing Text One");
				}
			})
			.then(function () {
				return driver.executeScript(" return $('#reusable-references-checks > form:nth-child(3) > div:nth-child(2) [placeholder=\"Please provide relavent details\"]').val();")
					.then(function (Name) {
						if (Name == "Testing Text") {
							return expect(Name).to.equal("Testing Text");
						} else if (Name == "Testing Text One") {
							return expect(Name).to.equal("Testing Text One");
						}
					})
			})
	},

	verifyBothPersonsCreatedAppointmentsVisible: function () {
		driver.sleep(500);
		return driver.executeScript(" return $('[placeholder=\"Please provide relavent details\"]').val();")
			.then(function (Name) {
				if (Name == "Testing Text") {
					return expect(Name).to.equal("Testing Text");
				} else if (Name == "Testing Text One") {
					return expect(Name).to.equal("Testing Text One");
				} else if (Name == "Testing Person1 Text") {
					return expect(Name).to.equal("Testing Person1 Text");
				}


			})
			.then(function () {
				return driver.executeScript(" return $('#reusable-references-checks > form:nth-child(3) > div:nth-child(2) [placeholder=\"Please provide relavent details\"]').val();")
					.then(function (Name) {
						if (Name == "Testing Text") {
							return expect(Name).to.equal("Testing Text");
						} else if (Name == "Testing Text One") {
							return expect(Name).to.equal("Testing Text One");
						} else if (Name == "Testing Person1 Text") {
							return expect(Name).to.equal("Testing Person1 Text");
						}
					})
			})
			.then(function () {
				return driver.executeScript(" return $('#reusable-references-checks > form:nth-child(6) > div:nth-child(2) [placeholder=\"Please provide relavent details\"]').val();")
					.then(function (Name) {
						if (Name == "Testing Text") {
							return expect(Name).to.equal("Testing Text");
						} else if (Name == "Testing Text One") {
							return expect(Name).to.equal("Testing Text One");
						} else if (Name == "Testing Person1 Text") {
							return expect(Name).to.equal("Testing Person1 Text");
						}
					})
			})
	},


	deleteAppointment: function () {
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentsDeleteLink), 15000);
		driver.findElement(page.placementInfoRecord_page.elements.appointmentsDeleteLink).click();
		return driver.sleep(1000)
	},

	deletePersonOneAppointment: function () {
		driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.anotherPersonAppointmentsDeleteLink), 15000);
		driver.findElement(page.placementInfoRecord_page.elements.anotherPersonAppointmentsDeleteLink).click();
		return driver.sleep(1000)
	},

	updateCoreAppointmentData: function () {
		driver.sleep(500);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetails), 15000);
		driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).clear();
		return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).sendKeys("Updated Testing Text").then(function () {
			driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetailsOne), 15000);
			driver.findElement(page.placementInfoRecord_page.elements.appointmentDetailsOne).clear();
			return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetailsOne).sendKeys("Updated Testing Text One");
		})
	},

	mismatchNotification: function () {
		driver.sleep(1000);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.misMatchData), 15000);
		return driver.findElement(page.placementInfoRecord_page.elements.misMatchData).getText()
			.then(function (data) {
				return expect(data).to.equal("Information Mismatch")
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.keepButton), 15000);
				return driver.findElement(page.placementInfoRecord_page.elements.keepButton).click();
			})
	},

	updateMedicalConditionFields: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicalConditionDetails), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.medicalConditionDetails).clear();
		return driver.findElement(page.placementInfoRecord_page.elements.medicalConditionDetails).sendKeys('Update Test')

	},

	verifyPIRMCNotification: function () {
		driver.sleep(500);
		return driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicalConditionNotification), 10000)
			.then(function () {
				return driver.findElement(page.placementInfoRecord_page.elements.medicalConditionNotification).getText()
					.then(function (alert) {
						expect(alert).to.equal("Medical condition details have been updated.")
						return driver.sleep(1000);
					})
			})
	},

	medicalConditionComparisonWindow: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.medicalConditionsNotificationClick), 10000);
		driver.findElement(page.placementInfoRecord_page.elements.medicalConditionsNotificationClick).click();
		driver.sleep(2000);
		return driver.findElement(page.placementInfoRecord_page.elements.comparison).getText()
			.then(function (text) {
				return expect(text).to.equal("Comparison");
			})
	},

	appointmentNotificationLatest: function () {
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentNotification), 10000);
		return driver.findElement(page.placementInfoRecord_page.elements.appointmentNotification).getText()
			.then(function (Text) {
				return expect(Text).to.equal("Appointment details have been updated.");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentKeepChangesLink), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.appointmentKeepChangesLink).getText()
			})
			.then(function (linkText) {
				return expect(linkText).to.equal("Keep my changes");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentLatest), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.appointmentLatest).getText();
			})
			.then(function (textLink) {
				return expect(textLink).to.equal("Take latest");
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentLatest), 10000);
				//console.log("test");
				driver.findElement(page.placementInfoRecord_page.elements.appointmentLatest).click();
				//console.log("test click");
				return driver.sleep(1000);
			})
			.then(function () {
				driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.updatedNotification), 10000);
				return driver.findElement(page.placementInfoRecord_page.elements.updatedNotification).getText();
			})
			.then(function (Link) {
				expect(Link).to.equal("Successfully updated with the latest version.");
				return driver.sleep(1000);
			})
	},

	updateNewPerson1Appointments: function () {
		driver.sleep(1000);
		driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDetails), 15000);
		driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).clear();
		return driver.findElement(page.placementInfoRecord_page.elements.appointmentDetails).sendKeys("Updating Testing Person1 Text")
			.then(function () {
				//driver.wait(until.elementsLocated(page.placementInfoRecord_page.elements.appointmentDate), 15000);
				//driver.findElement(page.placementInfoRecord_page.elements.appointmentDate).click();
				//driver.sleep(500);
				//helpers.gridClickDate('curr', '15');
				return driver.sleep(2000);
			})
	}
}