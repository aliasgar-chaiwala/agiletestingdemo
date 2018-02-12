
module.exports = function () {
   
    this.Then(/^I navigate to Child In Need Plan$/, function () {
		return page.pageHead.childInNeedPlanNavigation();
	});

	this.Then(/^I verify child in need plan$/, function () {
		return page.childInNeedPlan_page.verifyChildInNeedPlan();
	});

	this.Then(/^I verify all Meeting Notes fields$/, function () {
		return page.childInNeedPlan_page.verifyMeetingNoteDetails();
	});

	this.Then(/^I fill the meeting details$/, function () {
		return page.childInNeedPlan_page.addMeetingNotes();
	});

}