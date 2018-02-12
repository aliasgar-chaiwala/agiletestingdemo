module.exports = function () {

	this.Then(/^I navigate to Conference form$/, function () {
		return page.pageHead.conferenceFormNavigation();
	});

	this.Then(/^I provide the Conference details$/, function () {
		return page.conference_page.addConferenceDetails();
		/*return page.conference_page.conferenceDetailsToggle()
		.then(function(){
			return page.conference_page.addConferenceDetails();
		})*/
	});
}