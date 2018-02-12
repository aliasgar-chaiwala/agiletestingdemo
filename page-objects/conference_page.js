module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		toggleConferenceDetails: by.css('[name="Conference details"] a.accordion-toggle'),
		conferenceType: by.css('#maincontent div.panel-collapse.in.collapse form > div.row:nth-child(1) .col-sm-6:nth-child(1) .dropdown button'),
		conferenceTypeSelect: by.css('#maincontent div.panel-collapse.in.collapse form > div.row:nth-child(1) .col-sm-6:nth-child(1) ul.dropdown-menu'),
		conferenceReason: by.css('#maincontent div.panel-collapse.in.collapse form > div.row:nth-child(1) .col-sm-6:nth-child(2) .dropdown button'),
		conferenceReasonSelectTransfer: by.css('#maincontent div.panel-collapse.in.collapse form > div.row:nth-child(1) .col-sm-6:nth-child(2) ul.dropdown-menu li:nth-child(2) span:nth-child(2)'),
		authoritySearch: by.css('[placeholder = "Search organisation ..."]'),
		conferenceActualDate: by.css('#maincontent div.event-form div.row > div:nth-child(2) div.panel-collapse.in.collapse form > div:nth-child(4) > div.row .col-sm-6:nth-child(1) [aria-label= "Due date for the report distribution"] input'),
		authoritySearchFirstList: by.css('#maincontent form > div.row:nth-child(2) div.selectize-dropdown.multi.form-fields.plugin-remove_button div.selectize-dropdown-content div.option')
	},

	conferenceDetailsToggle: function () {
		driver.wait(until.elementsLocated(page.conference_page.elements.toggleConferenceDetails), 20000);
		return driver.findElement(page.conference_page.elements.toggleConferenceDetails).click()
			.then(function () {
				driver.wait(until.elementsLocated(page.conference_page.elements.conferenceType), 10000);
				return driver.sleep(1000);
			})
	},

	addConferenceDetails: function () {
		driver.sleep(500);
		driver.findElement(page.conference_page.elements.conferenceType).click();
		driver.sleep(1000);
		return helpers.selectOption(page.conference_page.elements.conferenceTypeSelect, 'Child Protection')
			.then(function () {
				driver.findElement(page.conference_page.elements.conferenceReason).click();
				driver.sleep(1000);
				return driver.findElement(page.conference_page.elements.conferenceReasonSelectTransfer).click()
					.then(function () {
						driver.sleep(1000);
						driver.findElement(page.conference_page.elements.authoritySearch).clear();
						driver.findElement(page.conference_page.elements.authoritySearch).sendKeys(config.Organisation.BasicInfo.NewName);
						driver.sleep(1500);
						driver.findElement(page.conference_page.elements.authoritySearchFirstList).click();
						return driver.sleep(1500)
							.then(function () {
								driver.findElement(page.conference_page.elements.conferenceActualDate).click();
								helpers.gridClickDate('curr', '16');
								driver.sleep(800);
								return driver.findElement(page.conference_page.elements.toggleConferenceDetails).click();
							})
					})
			})
	}
}