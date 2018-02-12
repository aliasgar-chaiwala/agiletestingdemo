
module.exports = function () {

  this.When(/^I navigate to Contact Record form$/, function () {
    return page.pageHead.contactRecordFormNavigation();
  });

  //I should see unique person in Subject of form
  this.When(/^I should see unique person in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person = config.PersonDetails.Name;
    return page.contactRecord_page.subjectPillVisible(person);
  });

  //I should see unique person in Subject of form
  this.When(/^I should see unique person2 in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person = config.PersonDetails.person2.Name;
    return page.contactRecord_page.subjectPillVisible(person);
  });

  this.When(/^I should see unique person1 in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person = config.PersonDetails.person1.Name;
    return page.contactRecord_page.subjectPillVisible(person);
  });

  this.When(/^I should see placement person in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person = config.PersonDetails.placePerName;
    return page.contactRecord_page.subjectPillVisible(person);
  });

  this.When(/^I search for the unique Person1 and select in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person1 = config.PersonDetails.person1.Name;
    return page.contactRecord_page.searchSelectPerson1Subject(person1);
  });

  this.When(/^I search for the unique Person2 and select in Subject of form$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var person2 = config.PersonDetails.person2.Name;
    return page.contactRecord_page.searchSelectPerson2Subject(person2);
  });

  this.When(/^I provide Contactor Details in Contact Record$/, function () {
    return page.contactRecord_page.setContactor()
  });

  this.When(/^I provide Contactor Details in Contact Record with Extra sourceOfReferral$/, function () {
    return page.contactRecord_page.setContactor().then(function () {
      return page.contactRecord_page.setExtraSrcReferral()
    })
  });

  this.When(/^I provide Contactor Details with "([^"]*)"$/, function (contactAbout) {
    return page.contactRecord_page.setContactorCustom(contactAbout);
  });

  //I verify Primary Support Reason in Contact Record
  this.When(/^I verify Primary Support Reason in Contact Record$/, function () {
    return page.contactRecord_page.verifyPrimarySupportReason();
  });

  this.When(/^I provide multiple Alleged abuse category details$/, function () {
    return page.contactRecord_page.setMuliAllegeAbuseDetails();
    //  .then(function () {
    //    return page.contactRecord_page.toggleContactorDetails();
    // })
  });

  //I approach to provide next steps options
  this.When(/^I approach to provide next steps options$/, function () {
    return page.contactRecord_page.toggleNextSteps();
  });

  this.When(/^I select "([^"]*)" from next steps list$/, function (formName) {
    return page.contactRecord_page.clickFormName(formName);
  });

  // this.When(/^I should see "([^"]*)" in next steps list$/, function (formName) {
  //   return page.contactRecord_page.verifyFormName(formName);
  // });
  //And I should see "Visit" form under "Child In Care Process" in next steps list

  this.When(/^I should see "([^"]*)" form under "([^"]*)" in next steps list$/, function (FormName, Process) {
    return page.contactRecord_page.verifyFormName(FormName, Process);
  });

  //I search and select team in next step
  this.When(/^I search and select team as "([^"]*)" in next step$/, function (teamName) {
    var team = null;
    if (teamName == "Me") {
      team = teamName;
    }
    else {
      team = config.Teams[teamName].NAME;
    }
    // console.log("teamName: ", team);
    return page.contactRecord_page.searchSelectNextTeamRecord(team);
  });

  this.When(/^I select priority in next step$/, function () {
    return page.contactRecord_page.setPriority();
  });

  this.When(/^I select "([^"]*)" as second from next steps list$/, function (formName) {
    return page.contactRecord_page.clickSecondFormName(formName);
  });

  this.When(/^I set second next step for unique person$/, function () {
    return page.contactRecord_page.person1NextStep();
  });
  //team2
  this.When(/^I search and select team as "([^"]*)" in second next step$/, function (teamName) {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var TEAMNAME = null;

    TEAMNAME = config.Teams[teamName].NAME;
    return page.contactRecord_page.searchSelectNextTeamSecondRecord(TEAMNAME);
  });

  this.When(/^I select second priority in next step$/, function () {
    return page.contactRecord_page.selectSecondNextPriority();
  });

  this.When(/^I select "([^"]*)" as third from next steps list$/, function (formName) {
    return page.contactRecord_page.clickThirdFormName(formName);
  });

  this.When(/^I set third next step for unique person1$/, function () {
    return page.contactRecord_page.person2NextStep();
  });

  this.When(/^I search and select team as "([^"]*)" in third next step$/, function (teamName) {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var TEAMNAME = null;

    TEAMNAME = config.Teams[teamName].NAME;
    return page.contactRecord_page.searchSelectNextTeamThirdRecord(TEAMNAME);
  });

  this.When(/^I select third priority in next step$/, function () {
    return page.contactRecord_page.selectThirdNextPriority();
  });

  this.When(/^I should see two versions of Contact record Form$/, function () {
    return page.contactRecord_page.isContactRecordTwoVisible();
  });

  this.When(/^I verify person details in Contact Record Form$/, function () {
    return page.contactRecord_page.toggleSubject()
      .then(function () {
        return page.contactRecord_page.validatePersonDetails();
      })
  });

  this.Then(/^I provide Missing Contactor Details in Contact Record$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.setMissingContactor()
      })
  });

  this.Then(/^I provide Absent Contactor Details in Contact Record$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.setAbsentContactor()
      })
  });

  this.When(/^I should see Missing flag for missing person$/, function () {
    return page.contactRecord_page.verifyMissingPerson();
  });

  this.When(/^I should see Absent flag for missing person$/, function () {
    return page.contactRecord_page.verifyAbsentPerson();
  });

  this.When(/^I verify the Contactor Details in Contact Record$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.verifyContactorDetails()
      })
  });

  this.When(/^I verify the Recommendations Details in Contact Record$/, function () {
    return page.contactRecord_page.toggleRecommendationDetails()
      .then(function () {
        return page.contactRecord_page.verifyRecommendationsDetails()
      })
  });

  this.When(/^I provide Contactor Details for two persons in Contact Record$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.set2Contactor()
      })
  });
  this.When(/^I create a create a new person from Contactor details$/, function () {
    return page.contactRecord_page.addNewPersonfromContactorDetails()
  });
  this.Then(/I verify the soft and Hard mandatory fields$/, function () {
    return page.contactRecord_page.verifyValidation()
  });
  this.Then(/I provide Contactor Details in Contact Record-Stockton$/, function () {
    return page.contactRecord_page.setContactorStockton()
  });
  this.When(/^I navigate to person summary from the form$/, function () {
    return page.contactRecord_page.togglePersonDetails().then(function () {
        return page.contactRecord_page.PersonDetails()
      });
  });

  this.When(/^I select "([^"]*)" in contact is about$/, function (contactAbout) {
    return page.contactRecord_page.setContactIsAbout(contactAbout)
  });
};