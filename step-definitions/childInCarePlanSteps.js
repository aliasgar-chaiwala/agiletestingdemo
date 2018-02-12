
module.exports = function () {
   
    this.Then(/^I approach to Permanence details in Child In Care Plan$/, function () {
		return page.childInCarePlan_page.moveToPermanenceDetails();
	});
 this.Then(/^I verify that Date of decision for adoption should not accept a future date$/, function () {
		return page.childInCarePlan_page.verifyAdoptionDate();
	});


}