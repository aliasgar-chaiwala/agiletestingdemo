
module.exports = function () {

	this.Then(/^I provide Visit Information$/, function () {
		return page.visit_page.addVisitInformation();
	});

	this.Then(/^I provide the observations information$/, function () {
		return page.visit_page.toggleObservations()
			.then(function () {
				return page.visit_page.addObservations();
			});
	});
}


