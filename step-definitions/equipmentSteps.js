
module.exports = function () {  

    this.Then(/^I navigate to Equipments$/, function () {
        return page.pageHead.equipmentNavigation();
	});

	this.Then(/^I add new Equipment with category$/, function () {
		return page.equipment_page.addNewEquipment();
	});

	this.Then(/^I create equipment with returned date$/, function () {
		return page.equipment_page.createEquipmentWithReturnedDates();
	});

	this.Then(/^I should see created equipment available on equipment page$/, function () {
		return page.equipment_page.createdEquipmentVisible();
	});

	this.Then(/^I update created equipment with service date$/, function () {
		return page.equipment_page.updateEquipmentWithServiceDate();
	});

	this.Then(/^I should see updated service equipment available on equipment page$/, function () {
		return page.equipment_page.updatedEquipmentVisible();
	});


}