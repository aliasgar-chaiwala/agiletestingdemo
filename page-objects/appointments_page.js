module.exports = {

	elements: {
		createAppointmentIcon: by.css('[aria-label="Create Appointment button"]'),
		description: by.css('#description'),
		startDate: by.css('.container-fluid .col-sm-6 div[data-bind*="startTime"] #reusableDatepicker'),
		setStartDate: by.css('div.bootstrap-datetimepicker-widget.timepicker-sbs.usetwentyfour.dropdown-menu.bottom.picker-open div div.col-sm-6.datepicker div.datepicker-days table.table-condensed tbody tr:nth-child(6) > td:nth-child(4)'),
		endDate: by.css('.container-fluid .col-sm-6 div[data-bind*="endTime"] #reusableDatepicker'),
		setEndDate: by.css('div.bootstrap-datetimepicker-widget.timepicker-sbs.usetwentyfour.dropdown-menu.bottom.picker-open div div.col-sm-6.datepicker div.datepicker-days table.table-condensed tbody tr:nth-child(6) > td:nth-child(5)'),
		type: by.css('#type'),
		notes: by.css('[aria-label="Notes"]'),
		addAppointment: by.css('#createAppointment'),
		appointmentList: by.css('div.panel.appointment-accordion-panel'),
		appointmentDescription: by.css('.appointment-description')
	},


	createNewAppointment: function (description) {
		driver.sleep(2000);
		driver.wait(until.elementLocated(page.appointments_page.elements.createAppointmentIcon), 20000);
		return driver.findElement(page.appointments_page.elements.createAppointmentIcon).click().then(function () {
			driver.sleep(1000);
			driver.wait(until.elementLocated(page.appointments_page.elements.description), 20000);
			return driver.findElement(page.appointments_page.elements.description).sendKeys("Sample Test Description " + description).then(function () {
				driver.wait(until.elementLocated(page.appointments_page.elements.startDate), 20000);
				driver.findElement(page.appointments_page.elements.startDate).click();
				helpers.gridClickDate('next', '16');
				//Below click is needed-so that date is selected
				driver.findElement(page.appointments_page.elements.description).click();
				return driver.sleep(1000).then(function () {
					driver.wait(until.elementLocated(page.appointments_page.elements.endDate), 20000);
					driver.findElement(page.appointments_page.elements.endDate).click();
					helpers.gridClickDate('next', '17');
					//Below click is needed-so that date is selected
					driver.findElement(page.appointments_page.elements.description).click();
					return driver.sleep(1000)
						//removed from appointment
						// .then(function () {
						// 		driver.findElement(page.appointments_page.elements.type).click();
						// 		return helpers.selectOption(page.appointments_page.elements.type, 'Dolore amet Appointment');
						// 	});
						.then(function () {
							driver.wait(until.elementLocated(page.appointments_page.elements.notes), 20000);
							return driver.findElement(page.appointments_page.elements.notes).sendKeys("Sample Notes").then(function () {
								driver.sleep(1500);
								driver.findElement(page.appointments_page.elements.addAppointment).click();
								return driver.sleep(2000);
							});
						});
				});
			});
		});
	},

	verifyCreatedAppointment: function (appointments) {
		driver.sleep(2000);
		return helpers.gridGetText(page.appointments_page.elements.appointmentList, page.appointments_page.elements.appointmentDescription, appointments).then(function () {
			return driver.sleep(2000);
		});
	}

}
