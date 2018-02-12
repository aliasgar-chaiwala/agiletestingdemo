
module.exports = function () {

    config = jsonfile.readFileSync('./support/'+featureConfig);

    // //Step: Then I choose warning widget - features\warning.feature:40
    // this.Then(/^I click warning icon$/, function () {        
    //     return page.group_page.navigateWarning();
    // });


    // //Step: And I should see warning page - features\warning.feature:41
    // this.Then(/^I should see warning page$/, function () {        
    //     return page.group_page.verifyWarningPage();
    // });

    // //Step: And I created the new warning - features\warning.feature:42
    // this.Then(/^I create new warning$/, function () {

    //     config = jsonfile.readFileSync('./support/'+featureConfig);
    //     return page.group_page.createNewWarning(config.Warning.Title);
    // });

    // //Step: And I should see Created Warning - features\warning.feature:42
    // this.Then(/^I should see Created Warning$/, function () {
    //     config = jsonfile.readFileSync('./support/'+featureConfig);
    //     return page.group_page.verifyCreatedWarning(config.Warning.Title);
    // });

    this.Then(/^I navigate to create group page$/, function () {
        return page.pageHead.createGroupNavigation();
    });

    this.Then(/^I should see create group page$/, function () {
        return page.group_page.verifyCreateGroupPage();
    });

    this.Then(/^I create a group between unique person and person1$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var groupTitle = config.PersonDetails.LastName + ' ' + config.Group.GroupName;
        return page.group_page.createGroup(groupTitle);
    });

    this.Then(/^I should see group details on person facet$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var groupTitle = config.PersonDetails.LastName + ' ' + config.Group.GroupName;
        return page.personFacet_page.verifyGroupOnPersonFacet(groupTitle);
    });

    this.When(/^I search and select created group$/, function () {

        config = jsonfile.readFileSync('./support/'+featureConfig);
        var groupTitle = config.PersonDetails.LastName + ' ' + config.Group.GroupName;

        return page.pageHead.personSearch(groupTitle).then(function () {
            return driver.sleep(3000).then(function () {
                return page.pageHead.selectCategoryElement(groupTitle);
            });
        });
    });

    this.Then(/^I should group details on group facet$/, function () {

        config = jsonfile.readFileSync('./support/'+featureConfig);
        var groupTitle = config.PersonDetails.LastName + ' ' + config.Group.GroupName;
        return page.group_page.verifyGroupFacet(groupTitle);
    });

};