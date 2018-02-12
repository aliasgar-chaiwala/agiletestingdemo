
module.exports = function () {  

    this.Then(/^I navigate to Finance Personal Budget$/, function () {
        return page.pageHead.personalBudgetNavigation();
    });

	this.Then(/^I add new personal budget$/, function () {
		//console.log("123");
		return page.budget_page.addNewPersonalBudget();
	});

	this.Then(/^I choose recurring payment method as cheque$/, function () {
		return page.budget_page.addPaymentMethod();
	});

	this.Then(/^I choose provision and create personal budget$/, function () {
		return page.budget_page.createProvision();
	});

	this.Then(/^I should see created budget amount on personal budget page$/, function () {
		return page.budget_page.verifyBudget();
	});

	this.Then(/^I update the agreed amount$/, function () {
		return page.budget_page.updateAgreedAmount();
	});

	this.Then(/^I should see updated agreed amount on personal budget page$/, function () {
		return page.budget_page.verifyUpdatedBudget();
	});

	this.Then(/^I verify all personal budget fields$/, function () {
		return page.budget_page.verifyBudgetDetails();
	});
}