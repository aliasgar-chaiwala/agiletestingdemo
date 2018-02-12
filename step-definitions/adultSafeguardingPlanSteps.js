module.exports = function () {

  this.When(/^I navigate to Adult Safeguarding Plan$/, function () {
    return page.pageHead.adultSafeguardingPlanNavigation();
  });

  this.When(/^I should see Adult Safeguarding Plan$/, function () {
    return page.adultSafeguardingPlan_page.verifyAdultSafeguardingPlan();
  });

  this.When(/^I should see unique person in Subject of plan$/, function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var person = config.PersonDetails.Name;
    return page.adultSafeguardingPlan_page.subjectPillVisible(person);
  });

  this.When(/^I verify the Needs, Risks and Strengths options$/, function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);
    var person = config.PersonDetails.Name;
    return page.adultSafeguardingPlan_page.verifyNeedsRisksStrengths(person);
  });

  this.When(/^I choose to add Risk details$/, function () {
    return page.adultSafeguardingPlan_page.addRiskAdultSafePlan();
  });

  this.When(/^I choose to add Outcome details by linking Risks$/, function () {
    return page.adultSafeguardingPlan_page.addOutcomeToRiskInAdultSafePlan();
  });

  this.When(/^I choose to add Action details by linking Outcomes$/, function () {
    return page.adultSafeguardingPlan_page.addActionToOutcomeInAdultSafePlan();
  });

  this.When(/^I choose to add Service details by linking Actions$/, function () {
    return page.adultSafeguardingPlan_page.addServiceToActionInAdultSafePlan();
  });

  this.When(/^I choose to add Service1 details by linking Actions$/, function () {
    return page.adultSafeguardingPlan_page.addService1ToActionInAdultSafePlan();
  });

  this.When(/^I choose to add Service2 details by linking Actions$/, function () {
    return page.adultSafeguardingPlan_page.addService2ToActionInAdultSafePlan();
  });

  this.When(/^I choose to select Placement Service details by linking Actions$/, function () {
    return page.adultSafeguardingPlan_page.addSelectServiceToActionInAdultSafePlan();
  });

  this.When(/^I verify the daily service frequency$/, function () {
    return page.adultSafeguardingPlan_page.serviceDailyFrequency();
  });

  this.When(/^I verify the weekly service frequency$/, function () {
    return page.adultSafeguardingPlan_page.serviceWeeklyFrequency();
  });

  this.When(/^I verify the monthly service frequency$/, function () {
    return page.adultSafeguardingPlan_page.serviceMonthlyFrequency();
  });

  this.When(/^I verify the yearly service frequency$/, function () {
    return page.adultSafeguardingPlan_page.serviceYearlyFrequency();
  });

  this.When(/^I choose to add daily scheduled service$/, function () {
    return page.adultSafeguardingPlan_page.addDailyServiceToActionInAdultSafePlan();
  });

  this.When(/^I choose to add Weekly scheduled service$/, function () {
    return page.adultSafeguardingPlan_page.addWeeklyServiceToActionInAdultSafePlan();
  });

  this.Then(/^I should see the created daily and weekly scheduled service$/, function () {
    return page.adultSafeguardingPlan_page.verifyCreatedScheduled();
  });

  this.Then(/^I should see Disabled Action Button$/, function () {
    return page.adultSafeguardingPlan_page.isDiabledActionButtonVisible();
  });

  //I verify the Services Details in plan
  this.Then(/^I verify the Services Details in plan$/, function () {
    return page.adultSafeguardingPlan_page.verifyPlanServices();
  });

    //defined twice
  /*this.When(/^I should see Adult Safeguarding Plan$/, function () {
    return page.adultSafeguardingPlan_page.verifyAdultSafeguardingPlan();
  });*/

  this.Then(/^I set to Review$/, function () {
    return page.singleAssessment_page.review();
  });

  this.Then(/^I should see updated placement with provision amount$/, function () {
    return page.adultSafeguardingPlan_page.verifyUpdatedAmount();
  });

};
