
config = jsonfile.readFileSync('./support/'+featureConfig);
module.exports = function () {

    this.When(/^I navigate to Provision$/, function () {
        return page.pageHead.provisionNavigation();
    });

    this.When(/^I verify the Provision created from Adult Safeguarding Plan$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var org = config.Organisation.BasicInfo.NewName;
        var serviceName = config.Service.ServiceName;
        return page.provision_page.planProvisionVerify(org, serviceName);
    });

    this.When(/^I verify the Provision created from Placement$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var org = config.Organisation.BasicInfo.NewName;
        var serviceName = config.Service.ServiceName;
        return page.provision_page.placementProvisionVerify(org, serviceName);
    });

    this.When(/^I verify the Provision updated from Child Protection Plan$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var org = config.Organisation.BasicInfo.NewName;
        var serviceName = config.Service.ServiceName;
        return page.provision_page.cppUpdatedProvisionVerify(org, serviceName);
	});

	this.When(/^I create new Provision/, function () {
			config = jsonfile.readFileSync('./support/'+featureConfig);
			var person = config.PersonDetails.person1.Name;
			return page.provision_page.createProvision(person);
	});

	this.When(/^I should see the Created Provisions under provisions/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.person1.Name;
		return page.provision_page.verifyCreatedProvision(person);
	});

	this.When(/^I choose to update and verify the created Provision/, function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var person = config.PersonDetails.person1.Name;
		return page.provision_page.updateProvision(person);
	});

	this.When(/^I verify all fields under provision/, function () {
		return page.provision_page.verifyProvisionDetails();
	});

};