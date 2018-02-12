var dateFormat = require('dateformat');
module.exports = {

	elements: {
		equipmentTitle: by.css('h2.page-title'),
		addIcon: by.css('#lnk-new-budget'),
		addEquipment: by.css('#addProvision'),
		category: by.css('#connectionType'),
		categoryEquipment: by.css('#related-as'),
		returnedDate: by.css('#create-new-equipment div:nth-child(4) input'),
		setReturnedDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.bottom div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(7)'),
		startDate: by.css('#create-new-equipment div:nth-child(3) > div:nth-child(1) input'),
		endDate: by.css('#create-new-equipment div:nth-child(3) > div:nth-child(2) input'),
		//	setStartDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.bottom.picker-open div.datepicker-days > table > tbody > tr:nth-child(1) > td.day.active.today'),
		//	setEndDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.bottom div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(7)'),
		createEquipment: by.css('[name="new-provision-create"]'),
		equipmentName: by.css('[name="equipment-address"]'),
		equipmentReturnedDate: by.css('#create-new-equipment div:nth-child(4) input'),
		updateEquipment: by.css('#update-equipment'),
		installEquipmentCheckbox: by.css('#create-new-equipment div.white-check.task-check'),
		removalDate: by.css('#create-new-equipment > div > div > div:nth-child(5) > div:nth-child(1) div.form-group div div.durandal-wrapper div.input-group.datepicker-panel input'),
		serviceDate: by.css('#create-new-equipment > div > div > div:nth-child(5) > div:nth-child(2) div.form-group div div.durandal-wrapper div.input-group.datepicker-panel input'),
		setRemovalDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.bottom div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(7)'),
		setServiceDate: by.css('div.bootstrap-datetimepicker-widget.dropdown-menu.picker-open.bottom div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(6)'),
		equipmentRemoveDate: by.css('.equipment-date div:nth-child(3)'),
		equipmentServicingDate: by.css('.equipment-date div:nth-child(4)'),
		//-------
		cretedEquipReturndate: by.css('div.equipment-date-returned')
	},

	addNewEquipment: function () {
		driver.wait(until.elementLocated(page.equipment_page.elements.equipmentTitle), 20000);
		return driver.findElement(page.equipment_page.elements.equipmentTitle).getText()
			.then(function (equipmentTitle) {
				return expect(equipmentTitle).to.equal("Equipment");
			})
			.then(function () {
				driver.wait(until.elementLocated(page.equipment_page.elements.addIcon), 20000);
				return driver.findElement(page.equipment_page.elements.addIcon).click();
			})
			.then(function () {
				driver.wait(until.elementLocated(page.equipment_page.elements.addEquipment), 20000);
				return driver.findElement(page.equipment_page.elements.addEquipment).getText()
			})
			.then(function (addEquipment) {
				return expect(addEquipment).to.equal("Add equipment");
			})
			.then(function () {
				driver.findElement(page.equipment_page.elements.category).click();
				return helpers.selectOption(page.equipment_page.elements.category, 'Beds')
			})
			.then(function () {
				driver.findElement(page.equipment_page.elements.categoryEquipment).click();
				return helpers.selectOption(page.equipment_page.elements.categoryEquipment, 'Bed Safety Rails')
			})

	},

	createEquipmentWithReturnedDates: function () {
		driver.sleep(2000);
		driver.wait(until.elementLocated(page.equipment_page.elements.startDate), 20000);
		driver.findElement(page.equipment_page.elements.startDate).click();

		var date = new Date();
		console.log('date: ', date);
		var currDate = date.getDate();
		var currMnth = date.getMonth();
		var currYear = date.getFullYear();

		console.log('\ncurrDate :', currDate, 'currMnth :', currMnth, 'currYear:', currYear);
		return helpers.gridClickDate('curr', currDate).then(function () {
			return driver.sleep(500).then(function () {
				driver.wait(until.elementLocated(page.equipment_page.elements.endDate), 20000);
				driver.findElement(page.equipment_page.elements.endDate).click();
				helpers.gridClickDate('curr', currDate);
				return driver.sleep(500).then(function () {
					driver.wait(until.elementLocated(page.equipment_page.elements.returnedDate), 20000);
					driver.findElement(page.equipment_page.elements.returnedDate).click();

					var date2 = new Date();
					date2.setDate(date2.getDate() + 32);
					console.log('date2 : ', date2);
					newDate = date2.getDate();
					newMonth = date2.getMonth();
					console.log('curDate :', currDate, 'curMnth :', currMnth);
					console.log('newDate : ', newDate, 'newMonth : ', newMonth);
					/*var monthDiff = newMonth - currMnth;
					console.log('monthDiff : ', monthDiff);
					if (monthDiff == 2) {
						var nextMonth = by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days th.next');
						var changeMonth = driver.findElement(nextMonth);
						changeMonth.click();
					}*/
					helpers.gridClickDate('next', newDate);
					return driver.sleep(500).then(function () {
						driver.wait(until.elementLocated(page.equipment_page.elements.createEquipment), 20000);
						driver.findElement(page.equipment_page.elements.createEquipment).click();
						return driver.sleep(2000);
					});
				});
			});
		});
	},

	createdEquipmentVisible: function () {
		driver.sleep(1500);
		return driver.wait(until.elementLocated(page.equipment_page.elements.equipmentName), 20000).then(function () {
			return driver.findElement(page.equipment_page.elements.equipmentName).getText()
				.then(function (equipmentName) {
					console.log('equipmentName : ', equipmentName);
					expect(equipmentName).to.equal("Bed Safety Rails loaned");
					return driver.wait(until.elementLocated(page.equipment_page.elements.cretedEquipReturndate), 20000).then(function () {
						return driver.findElement(page.equipment_page.elements.cretedEquipReturndate).getText().then(function (returnDate) {
							/*var date2 = new Date();
							date2.setDate(date2.getDate() + 44);
							console.log('date2 : ', date2);*/
							var date = new Date();
							var currDate = date.getDate();
							var currMnth = date.getMonth() + 1;
							var currYear = date.getFullYear();
							var date2 = new Date();
							date2.setDate(date2.getDate() + 32);
							console.log('date2 : ', date2);
							newDate = date2.getDate();
							newMonth = date2.getMonth();
							/*var monthDiff = newMonth - currMnth;
							console.log('monthDiff : ', monthDiff);
							if (monthDiff == 2) {
								var nextMonth = by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days th.next');
								var changeMonth = driver.findElement(nextMonth);
								changeMonth.click();
							}*/

							var formatDate = dateFormat(date2, "dd/mm/yyyy");
							console.log(formatDate);
							console.log('equipment ReturnDate : ', returnDate);
							return expect(returnDate).to.equal("Returned on " + formatDate);
						});
					});
				});
		});
	},

	updateEquipmentWithServiceDate: function () {
		driver.wait(until.elementLocated(page.equipment_page.elements.updateEquipment), 20000);
		return driver.findElement(page.equipment_page.elements.updateEquipment).click()
			.then(function () {
				//driver.sleep(1500);
				driver.wait(until.elementLocated(page.equipment_page.elements.installEquipmentCheckbox), 20000);
				return driver.findElement(page.equipment_page.elements.installEquipmentCheckbox).click().then(function () {
					//driver.sleep(2000);
					driver.wait(until.elementLocated(page.equipment_page.elements.removalDate), 20000);
					driver.findElement(page.equipment_page.elements.removalDate).click();

					var date = new Date();
					date.setDate(date.getDate() + 32);
					var todayDate = date.getDate();
					var thisMnth = date.getMonth();
					var thisYear = date.getFullYear();

					return helpers.gridClickDate('next', todayDate).then(function () {
						driver.wait(until.elementLocated(page.equipment_page.elements.serviceDate), 20000);
						driver.findElement(page.equipment_page.elements.serviceDate).click();

						/*var date2 = new Date();
						date2.setDate(date2.getDate());
						var todayDate = date.getDate();
						var thisMnth = date.getMonth();
						var thisYear = date.getFullYear();
						var currDate = date2.getDate();*/

					var date2 = new Date();
					date2.setDate(date2.getDate() + 32);
					var todayDate = date2.getDate();
					var thisMnth = date2.getMonth();
					var thisYear = date2.getFullYear();

						return helpers.gridClickDate('next', todayDate).then(function () {
							driver.wait(until.elementLocated(page.equipment_page.elements.createEquipment), 20000);
							driver.findElement(page.equipment_page.elements.createEquipment).click();
							return driver.sleep(500);
						});
					});
				});
			});
	},

	updatedEquipmentVisible: function () {
		driver.sleep(1500);
		return driver.wait(until.elementLocated(page.equipment_page.elements.equipmentName), 20000).then(function () {
			return driver.findElement(page.equipment_page.elements.equipmentName).getText().then(function (equipmentNameText) {
				expect(equipmentNameText).to.equal("Bed Safety Rails installed");
				return driver.wait(until.elementLocated(page.equipment_page.elements.equipmentRemoveDate), 20000)
					.then(function () {
						return driver.findElement(page.equipment_page.elements.equipmentRemoveDate).getText().then(function (removeDate) {

							var date = new Date();
							date.setDate(date.getDate() + 32);
							date.setMonth(date.getMonth());

							console.log("Expected Removal Date : ", date);

							var formatDate1 = dateFormat(date, "dd/mm/yyyy");

							expect(removeDate).to.equal("Remove on " + formatDate1);
							return driver.wait(until.elementLocated(page.equipment_page.elements.equipmentServicingDate), 20000).then(function () {
								return driver.findElement(page.equipment_page.elements.equipmentServicingDate).getText().then(function (serviceDate) {

							var date = new Date();
							date.setDate(date.getDate() + 32);
							date.setMonth(date.getMonth());

							console.log("Expected Removal Date : ", date);

							var formatDate2 = dateFormat(date, "dd/mm/yyyy");

									expect(serviceDate).to.equal("Servicing on " + formatDate2);
									return driver.sleep(500)
								});
							});
						});
					});
			});
		});
	}
}
