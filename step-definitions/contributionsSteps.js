
module.exports = function () {


  this.When(/^I create new Contribution$/, function () {
    return page.contributions_page.newContribution()
      .then(function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var person = config.PersonDetails.person1.Name;
        return page.contributions_page.setContributions(person);
      })
      .then(function () {
        return page.contributions_page.createContributions();
      })
  });

  this.Then(/^I should see the Created Contribution$/, function () {
        return page.contributions_page.verifyContribution();
	})

	this.Then(/^I validate all contribution fields$/, function () {
		return page.contributions_page.newContribution()
	.then(function () { 
			return page.contributions_page.verifyContributorDetails();	
		})
	})
};