
module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		labelVisitDateAndTime: by.css('label[for="DateAndTime"]'),
		addVisitDateAndTime: by.css('[aria-label="Date and time"] i'),
		visitTypeSelect: by.css('div[data-bind*="propertyKey: \'visitType\'"]'),
		delayReason: by.css('div[data-view*="visitDetails"] > form > div.row:nth-child(2) div.dropdown'),
		setdelayReason: by.css('#reasonsection div.panel-body > div form.form-horizontal .form-group:nth-child(2) ul.dropdown-menu'),
		location: by.css('#personAddressLine1'),
		addressSearchButton: by.css('#personAddressLine1 + div button.icon-search'),
		addressSearchList: by.css('#personAddressLine1 + div ul.address-lookup-dropdown'),
		addressSearchList1stItem: by.css('#personAddressLine1 + div ul.address-lookup-dropdown li:nth-child(2) a'),
		underTakingVisit: by.css('#personUnderTakingVisit div.selectize-input.items.not-full.has-options.has-items > span'),
		metPeople: by.css('#peopleMetDuringVisit input'),
		setMetPeople: by.css('#peopleMetDuringVisit div.selectize-dropdown-content > div.option'),
		expectToMetPeople: by.css('#peopleExpectedDuringVisit [placeholder="Search person..."]'),
		setexpectToMetPeople: by.css('#peopleExpectedDuringVisit div.selectize-dropdown-content > div.option'),
		notes: by.css('[placeholder="Please share notes taken during the visit"]'),
		toggleObser: by.css('[name="Observations"] a.accordion-toggle.pull-right'),
		contactorName: by.css('#ContactorName input'),
		setcontactorName: by.css('#ContactorName div.option'),
		childPersonYes: by.css('#personSeenBlock .btn-warning:nth-child(1) input:nth-child(1)'),
		personView: by.css('[placeholder="Please enter relevant details"]'),
		comments: by.css('#observations form > div:nth-child(5) > div.col-left > div.col-sm-10 textarea')
	},

	addVisitInformation: function () {
		addVisitDateAndTimeIcon = driver.wait(until.elementLocated(page.visit_page.elements.addVisitDateAndTime), 10000);
		return addVisitDateAndTimeIcon.click().then(function () {
			driver.sleep(1000);
			return driver.findElement(page.visit_page.elements.labelVisitDateAndTime).click().then(function () {
				driver.wait(until.elementsLocated(page.visit_page.elements.visitTypeSelect), 1000, "Visit type element did not appear on Visit form");
				return helpers.clickIncludesList(page.visit_page.elements.visitTypeSelect, 'button', by.css('li a'), 'Agency visit').then(function () {
					driver.wait(until.elementsLocated(page.visit_page.elements.delayReason), 10000, "Reason for Delay no shown");
					return helpers.clickIncludesList(page.visit_page.elements.delayReason, 'button', by.css('li a'), 'Family were not available').then(function () {
						driver.sleep(1500);
						driver.findElement(page.visit_page.elements.location).clear();
						driver.sleep(500);
						driver.findElement(page.visit_page.elements.location).sendKeys(config.PersonDetails.Address.Full);
						return driver.sleep(1500).then(function () {
							driver.findElement(page.visit_page.elements.addressSearchButton).click()
							return driver.wait(until.elementsLocated(page.visit_page.elements.addressSearchList), 10000).then(function () {
								driver.wait(until.elementsLocated(page.visit_page.elements.addressSearchList1stItem), 10000);
								return helpers.gridClick(page.visit_page.elements.addressSearchList, by.css('li a'), config.PersonDetails.Address.Full)
							}).then(function () {
								driver.findElement(page.visit_page.elements.metPeople).clear();
								driver.sleep(1000);
								driver.findElement(page.visit_page.elements.metPeople).sendKeys(config.PersonDetails.Name);
								return driver.sleep(2000).then(function () {
									driver.wait(until.elementsLocated(page.visit_page.elements.setMetPeople), 10000)
									return driver.findElement(page.visit_page.elements.setMetPeople).click().then(function () {
										driver.sleep(1000);
										driver.findElement(page.visit_page.elements.expectToMetPeople).clear();
										driver.sleep(1000);
										driver.findElement(page.visit_page.elements.expectToMetPeople).sendKeys(config.PersonDetails.Name);
										return driver.sleep(2000).then(function () {
											driver.wait(until.elementsLocated(page.visit_page.elements.setexpectToMetPeople), 10000)
											return driver.findElement(page.visit_page.elements.setexpectToMetPeople).click().then(function () {
												driver.findElement(page.visit_page.elements.notes).clear();
												return driver.findElement(page.visit_page.elements.notes).sendKeys("Testing Notes");
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

	toggleObservations: function () {
		driver.sleep(1000);
		return driver.findElement(page.visit_page.elements.toggleObser).click()
			.then(function () {
				driver.sleep(500);
				return driver.wait(until.elementsLocated(page.visit_page.elements.contactorName), 10000);
			})
	},

	addObservations: function () {
		return driver.wait(until.elementIsEnabled(driver.findElement(page.visit_page.elements.contactorName)), 5000, "Parent/Carer's view is not enabled in Observation component").then(function (elem) {
			elem.click();
			// elem.clear();
			elem.sendKeys(config.PersonDetails.Name);
			driver.sleep(800);
			return driver.findElement(page.visit_page.elements.setcontactorName).click()
				.then(function () {
					driver.findElement(page.visit_page.elements.toggleObser).click();
					return driver.sleep(500);
				});
		});
	}
}