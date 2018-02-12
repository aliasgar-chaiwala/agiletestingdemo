
module.exports = function () {  

    this.Then(/^I navigate to mental capacity$/, function () {
        return page.pageHead.mentalCapacityNavigation();
    });

	this.Then(/^I verify all fields in mental capacity$/, function () {
		return page.mentalCapacity_page.verifyMentalCapacityFields();
	});

	this.Then(/^I create Safeguarding Capacity with Advocate$/, function () {
		return page.mentalCapacity_page.createSafeguardingCapacity();
	});

	this.Then(/^I should see created Safeguarding Capacity visible on capacity screen$/, function () {
		return page.mentalCapacity_page.createdSafeguardingCapacityVisible();
	});

	this.Then(/^I create Finance Capacity with Advocate$/, function () {
		return page.mentalCapacity_page.createFinanceCapacity();
	});

	this.Then(/^I should see created Finance Capacity visible on capacity screen$/, function () {
		return page.mentalCapacity_page.createdFinanceMentalCapacityVisible();
	});

	this.Then(/^I create Health Capacity with Advocate$/, function () {
		return page.mentalCapacity_page.createHealthCapacity();
	});
	
	this.Then(/^I should see created Health Capacity visible on capacity screen$/, function () {
		return page.mentalCapacity_page.createdHealthMentalCapacityVisible();
	});

	/*this.Then(/^I create ([^"]*) Capacity with Advocate$/, function (capacity) {
		return page.mentalCapacity_page.createSafeguardingCapacity();
	});*/
}