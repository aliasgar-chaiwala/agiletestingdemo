module.exports = {

	elements: {
		palnCPP: by.css('[aria-label="Child Protection Plan"]')
	},



	verifyChildProtectionPlan: function () {
		page.pageHead.childProtectionPlanNavigation();
		return driver.wait(until.elementsLocated(page.childProtectionPlan_page.elements.palnCPP), 25000).then(function () {
			return driver.findElement(page.childProtectionPlan_page.elements.palnCPP).getText().then(function (CPP) {
				return expect(CPP).to.equal("Child Protection Plan");
			});
		});

	}

}
