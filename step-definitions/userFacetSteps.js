module.exports = function () {

    //console.log('global config value in : searchPersonSteps', config);

    config = jsonfile.readFileSync('./support/'+featureConfig);

    this.Then(/^I should see user facet with user details for ([^"]*)$/, function (USERNAME) {
        return page.userFacet_page.verifyUserFacet(USERNAME);
    });
}