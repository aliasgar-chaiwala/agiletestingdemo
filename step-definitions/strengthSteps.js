
module.exports = function () {  

    this.Then(/^I create new Strength$/, function () {
        return page.strength_page.addStrength();
	});

	this.Then(/^I should see the created Strength Title$/, function () {
		return page.strength_page.verifyCreatedStrength();
	});

	this.Then(/^I update the created Strength$/, function () {
		return page.strength_page.updateCreatedStrength();
	});
	
	this.Then(/^I should see the updated Strength Title$/, function () {
		return page.strength_page.verifyUpdatedStrength();
	});

	this.Then(/^I verify the Strength Available Fields$/, function () {
		return page.strength_page.validateStrengthFields();
	});
}