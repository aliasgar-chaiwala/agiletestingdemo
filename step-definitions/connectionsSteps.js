
module.exports = function () {

    this.When(/^I navigate to connections$/, function () {
        return page.connections_page.connectionNavigation();
    });

    this.Then(/^I should see connections page$/, function () {
        return page.connections_page.connectionPageVerify();
    });

    this.Then(/^I create first connection with "([^"]*)" where type as "([^"]*)" and relation as "([^"]*)"$/, function (personToSelect, type, relation) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = config.PersonDetails[personToSelect].Name;
        return page.connections_page.createConnectionWith(personName, type, relation);
    });
    //---------------------------------
    this.Then(/^I create "([^"]*)" connection with "([^"]*)"$/, function (relation, person) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var personName = config.PersonDetails[person].Name;
        console.log('Add gp connpersonName :', personName);
        return page.connections_page.createConnectionWith(personName, 'Professional', relation);
    });

    this.Then(/^I should see person pill for "([^"]*)" under relationship on person facet with "([^"]*)" relation$/, function (person, relation) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var personName = config.PersonDetails[person].Name;
        console.log('Add gp connpersonName :', personName);
        return page.personFacet_page.verifyConnectedPillPersonFacet(personName, relation);
    });

    this.Then(/^I should see "([^"]*)" connection with "([^"]*)" in Connections Explorer$/, function (relation, person) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var personName = config.PersonDetails[person].Name;
        return page.connections_page.verifyCreatedConnectionWith(personName, relation);
    });
    //--------------------------------------

    this.Then(/^I should see created connection with other person in Connections Explorer with relation as "([^"]*)"$/, function (relation) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        person2name = config.PersonDetails.person2.Name;
        return page.connections_page.verifyCreatedConnectionWith(person2name, relation);
    });

    this.Then(/^I should see connected "([^"]*)" pill under relationship on person facet with relation as "([^"]*)"$/, function (personToCheck, relation) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToCheck != "person" ? config.PersonDetails[personToCheck].Name : config.PersonDetails.Name;
        return page.personFacet_page.verifyConnectedPillPersonFacet(personName, relation);
    });


    this.Then(/^I should see "([^"]*)" relation and parental responsibility with "([^"]*)" under Essential Information$/, function (relation, personToCheck) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToCheck != "person" ? config.PersonDetails[personToCheck].Name : config.PersonDetails.Name;
        return page.connections_page.verifyParentalRespEI(relation, personName);
    });

    //I should see "Council" parental responsibility for "unique" person under Essential Information
    this.Then(/^I should see "([^"]*)" parental responsibility for "([^"]*)" person under Essential Information$/, function (COUNCIL, person) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var personName = null;
        if (person.includes("unique")) {
            personName = config.PersonDetails.Name;
        } else {
            personName = config.PersonDetails[person].Name;
        }
        return page.connections_page.verifyCouncilParentalRespEI(COUNCIL, personName);
    });

    //I change connection filter to filter by "Same address"
    this.Then(/^I change connection filter to filter by "([^"]*)"$/, function (OPTION) {
        return page.connections_page.toggleConnectionFilterTo(OPTION);
    });


    //Then I create connection between person1 and person2
    this.Then(/^I create connection between person1 and person2$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        person2name = config.PersonDetails.person2.Name;

        return page.connections_page.create2ndConnectionWith(person2name, 'Extended family', 'Uncle/Aunt');
    });

    this.Then(/^I should see created connection between person1 and person2$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        person2name = config.PersonDetails.person2.Name;
        return page.connections_page.verifyCreatedConnectionWith(person2name, 'Uncle/Aunt/Parental Responsibility');
    });

    this.Then(/^I click on first degree connection$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        person2name = config.PersonDetails.person2.Name;
        return page.connections_page.clickConnectionWith(person2name);
    });

    this.Then(/^I should see created 2nd degree connection with person$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        person2name = config.PersonDetails.person2.Name;
        return page.connections_page.verify2ndDegreeConnectionWith(person2name, 'Niece/Nephew');
    });

    this.Then(/^I edit the first degree connection with "([^"]*)" where type as "([^"]*)" and relation as "([^"]*)"$/, function (personToSelect, type, relation) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToSelect != "person" ? config.PersonDetails[personToSelect].Name : config.PersonDetails.Name;

        return page.connections_page.editConnection(personName, type, relation);
    });

    this.Then(/^I click on connection pill of "([^"]*)" on "([^"]*)" summary page and verify$/, function (withPerson, fromPerson) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personWith = withPerson != "person" ? config.PersonDetails[withPerson].Name : config.PersonDetails.Name;
        personFrom = fromPerson != "person" ? config.PersonDetails[fromPerson].Name : config.PersonDetails.Name;
        return page.personFacet_page.clickAndVerifyConnection(personFrom, personWith);
    });

    this.Then(/^I verify Connection RelatedAs filter behaviour with gender of "([^"]*)" as "([^"]*)"$/, function (personToSelect, gender) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = config.PersonDetails[personToSelect].Name;
        return page.connections_page.verifyFilterBehaviourForRelatedAs(personName, 'Family', gender);
    });

    this.Then(/^I verify auto selected "([^"]*)" in To field when creating new connections$/, function (personToCheck) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToCheck != "person" ? config.PersonDetails[personToCheck].Name : config.PersonDetails.Name;
        return page.connections_page.validatePersonInToField(personName);
    });

    this.Then(/^I verify save button disabled when removing all relations with "([^"]*)" in Edit mode$/, function (personToSelect) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToSelect != "person" ? config.PersonDetails[personToSelect].Name : config.PersonDetails.Name;

        return page.connections_page.unselectConnectionsAndVerifySaveButtonInEdit(personName);
    });

    this.Then(/^I edit the first degree connection with "([^"]*)" where responsibility is none$/, function (personToSelect) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        personName = personToSelect != "person" ? config.PersonDetails[personToSelect].Name : config.PersonDetails.Name;

        return page.connections_page.unselectparentalRespAndSaveInEdit(personName);
    }); 
};