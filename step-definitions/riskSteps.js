
module.exports = function () {  

    this.Then(/^I create new Remains Risk$/, function () {
        return page.risk_page.addRemainsRisk();
	});

	this.Then(/^I should see the created Risk Title$/, function () {
		return page.risk_page.verifyCreatedRisk();
	});

	this.Then(/^I update the created Risk$/, function () {
		return page.risk_page.updateCreatedRisk();
	});
	
	this.Then(/^I should see the updated Risk Title$/, function () {
		return page.risk_page.verifyUpdatedRisk();
	});

	this.Then(/^I verify the Risk Available Fields$/, function () {
		return page.risk_page.validateRiskFields();
	});
}