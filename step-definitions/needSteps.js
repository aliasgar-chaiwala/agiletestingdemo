
module.exports = function () {  

    this.Then(/^I create new Unmet Need$/, function () {
        return page.need_page.addNewUnMetNeed();
	});

	this.Then(/^I should see the created Need Title$/, function () {
		return page.need_page.verifyCreatedNeed();
	});

	this.Then(/^I update the created need$/, function () {
		return page.need_page.updateCreatedNeed();
	});
	
	this.Then(/^I should see the updated Need Title$/, function () {
		return page.need_page.verifyUpdatedNeed();
	});

	this.Then(/^I verify the Need Available Fields$/, function () {
		return page.need_page.validateNeedFields();
	});
}