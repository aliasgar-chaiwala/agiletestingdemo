var dateFormat = require('dateformat');

function getUserName(user, team) {
  var userName = null;

  var assertUserTM = user.includes("TeamManager");
  var assertUserSW = user.includes("SocialWorker");

  var assertTeam = team.includes("Team");

  if (assertUserTM) {
    var TmNo = user.split("TeamManager");
    TmNo = 'TM' + TmNo[1];

    if (assertTeam) {
      userName = config.Teams[team][TmNo].NAME;
    }
  }
  else if (assertUserSW) {

    var SwNo = user.split("SocialWorker");
    SwNo = 'SW' + SwNo[1];

    if (assertTeam) {
      userName = config.Teams[team][SwNo].NAME;
    }
  } else {
    assert.fail("Error in team Or user name");
  }
  return userName;
}

module.exports = function () {

  this.Then(/^I should see person name on person facet$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var person = config.PersonDetails.Name;
    //  console.log('\nconfig person : ', person);
    return page.personFacet_page.personNameVerification(person);
  });

  this.Then(/^I should see person1 name on person facet$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var person = config.PersonDetails.person1.Name;
    // console.log('\nconfig person : ', person);
    return page.personFacet_page.personNameVerification(person);
  });

  this.Then(/^I should see person2 name on person facet$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var person = config.PersonDetails.person2.Name;
    // console.log('\nconfig person : ', person);
    return page.personFacet_page.personNameVerification(person);
  });

  this.Then(/^I should see person3 name on person facet$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var person = config.PersonDetails.person3.Name;
    // console.log('\nconfig person : ', person);
    return page.personFacet_page.personNameVerification(person);
  });

  this.Then(/^I should see placement person name on person facet$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var person = config.PersonDetails.placePerName;
    // console.log('\nconfig person : ', person);
    return page.personFacet_page.personNameVerification(person);
  });
  //--------------------------step to verify widgets on dashboard should be common to all persons-------------------

  this.Then(/^I should see person facet with all the widgets$/, function () {
    return driver.sleep(4000).then(function () {
      return page.personFacet_page.personFacetVerification();
    });
  });

  this.Then(/^I should see case facet with all the widgets$/, function () {
    return driver.sleep(4000).then(function () {
      return page.personFacet_page.personCaseFacetVerification();
    });
  });

  this.Then(/^I should see Private fostering details under case summary widget$/, function () {
    return driver.sleep(1000).then(function () {
      config = jsonfile.readFileSync('./support/' + featureConfig);
      var person1 = config.PersonDetails.person1.Name;
      var person2 = config.PersonDetails.person2.Name;
      return page.personFacet_page.verifyPrivateFostering(person1, person2);
    });
  });

  this.Then(/^I should not see Private fostering details under case summary widget$/, function () {
    return driver.sleep(1000).then(function () {
      config = jsonfile.readFileSync('./support/' + featureConfig);
      todaysDate = new Date();
      var splittedString = PRIV_FOST_ENDDATE.split("/");
      PrivFostEndDate = new Date(splittedString[2], parseInt(splittedString[1]) - 1, splittedString[0]);
      var dateDiff = (new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate()) - PrivFostEndDate);
      if (dateDiff > 0) {
        return page.personFacet_page.verifyPrivFostNotPresent();
      } else {
        assert.fail("Todays date is not before PrivFostEndDate");
      }
    });
  });

  this.Then(/^I click on "([^"]*)" private Fostering carer pill and verify$/, function (pillSelection) {
    return driver.sleep(1000).then(function () {
      config = jsonfile.readFileSync('./support/' + featureConfig);
      var person = pillSelection === "first" ? config.PersonDetails.person1.Name : (pillSelection === "second" ? config.PersonDetails.person2.Name : null);
      var pillNumber = pillSelection === "first" ? 1 : (pillSelection === "second" ? 2 : null);
      if (person != null && pillNumber != null) {
        return page.personFacet_page.clickAndVerifyPrivFostCarer(pillNumber, person);
      } else {
        assert.fail("Issue with person and pillNumber value");
      }
    });
  });

  this.When(/^I navigate to Education details$/, function () {
    return page.personFacet_page.educationNavigation();
  });

  this.Then(/^I validate Education details$/, function () {
    return page.personFacet_page.validateEducationDetails();
  });

  this.Then(/^I validate Essential Information$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);

    var essentialInfoString = config.PersonDetails.Name + ' studies in ' + config.Organisation.BasicInfo.NewName + '. ' + config.Professional.BasicInfo.NewName + ' is the head teacher';

    return page.personFacet_page.validateEssentialInfo(essentialInfoString);
  });

  this.Then(/^I navigate to Forms from Person page$/, function () {
    driver.sleep(1500);
    return driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');').then(function () {
      return page.personFacet_page.personFacetFormsVerification();
    });
  });
  this.Then(/^I Add "([^"]*)" plan or form from Select form or plan dropdown$/, function (formPlanName) {
    return page.personFacet_page.clickOnDropdown(formPlanName);
  });
  // this.Then(/^I set case access denied to manager$/, function () {

  //   return page.personFacet_page.caseConfidentialityDenyAccess();
  // });
  //I set case access denied to "TeamManager1" of "Team2"
  this.Then(/^I set case access denied to "([^"]*)" of "([^"]*)"$/, function (User, Team) {

    var USERNAME = null,
      USERTYPE = null;

    var assertUserTM = User.includes("TeamManager");
    var assertUserSW = User.includes("SocialWorker");

    //console.log('\nassertUser :', assertUser);

    var assertTeam = Team.includes("Team");
    //console.log('\nassertTeam :', assertTeam);

    if (assertUserTM) {
      var TmNo = User.split("TeamManager");
      TmNo = 'TM' + TmNo[1];
      //console.log('TmNo :', TmNo);

      if (assertTeam) {
        USERNAME = config.Teams[Team][TmNo].NAME;
        // console.log('\nTM USERNAME :', USERNAME);                                

        USERTYPE = 'TM';
      }
    }
    else if (assertUserSW) {

      var SwNo = User.split("SocialWorker");
      SwNo = 'SW' + SwNo[1];
      //console.log('TmNo :', SwNo);

      if (assertTeam) {
        USERNAME = config.Teams[Team][SwNo].NAME;
        //console.log('\nSW USERNAME :', USERNAME);

        USERTYPE = 'SW';
      }
    } else {
      //console.log('Error in Team name or User Name !!!');
    }

    return page.personFacet_page.caseConfidentialityDenyAccess(USERNAME);
  });

  this.Then(/^I should see information with confidentiality message$/, function () {
    return page.personFacet_page.deniedAccessCheck();
  });

  // this.Then(/^I set case access allow to manager$/, function () {
  this.Then(/^I set case access allow to "([^"]*)" of "([^"]*)"$/, function (User, Team) {

    var USERNAME = getUserName(User, Team);
    return page.personFacet_page.caseConfidentialityAllowAccess(USERNAME);
  });

  this.Then(/^I check to see if duty working is ON else I trun it OFF$/, function () {
    return page.pageHead.dutyWorking();
  });

  this.Then(/^I should see Finance with budget, contributions and provisions$/, function () {
    return page.personFacet_page.verifyFinanceDetails();
  });

  this.Then(/^I navigate to Plans from Person page$/, function () {
    return driver.executeScript('return window.scrollTo(' + 1100 + ',' + 700 + ');')
      .then(function () {
        return page.personFacet_page.personFacetPlansVerification();
      });
  });

  this.Then(/^I should see form status as "([^"]*)" in Journey$/, function (status) {
    return page.personFacet_page.formJourneyStatus(status);
  });

  this.Then(/^I should see Mental Capacity visible on person facet$/, function () {
    return page.personFacet_page.mentalCapacityVerification();
  });

  this.Then(/^I should see Mental Capacity Safeguarding visible on person facet$/, function () {
    return page.personFacet_page.mentalCapacitySafeguardingVerification();
  });

  this.Then(/^I should see Mental Capacity Health visible on person facet$/, function () {
    return page.personFacet_page.healthCapacitySafeguardingVerification();
  });

  this.Then(/^I should see Mental Capacity Finance visible on person facet$/, function () {
    return page.personFacet_page.financeSafeguardingVerification();
  });
  this.Then(/^I should see risk name on person context$/, function () {
    return page.personFacet_page.riskVerificationOnPersonFacet();
  });

  this.Then(/^I verify Course details in Education widgets$/, function () {
    return page.personFacet_page.verifyEduCourseDetails();
  });

  this.Then(/^I navigate to "([^"]*)"$/, function (Item) {
    return page.pageHead.navigateTo(Item);
  });

  this.Then(/^I navigate to Placement$/, function () {
    return page.pageHead.navigateToPlacements();
  });

  this.Then(/^I navigate to Needs Risks and Strengths widget$/, function () {
    return page.personFacet_page.navigateToNeedsRisksStrengths();
  });

  //I navigate to Finance contributions
  this.Then(/^I navigate to Finance contributions$/, function () {
    return page.personFacet_page.navigateToContributions();
  });

  this.Then(/^I validate the person activity widget$/, function () {
    return page.personFacet_page.verifyActivityDetails();
  });

  this.Then(/^I should see journeys for "([^"]*)" on personfacet$/, function (journey) {
    return page.personFacet_page.checkJourneys(journey);
  });

  this.Then(/^I verify the start and due date for Leaving Care Process$/, function () {
    return page.personFacet_page.leavingCareProcessStartAndDueDateVerification();
  });

  //I verify the number of forms in Journey to be 
  this.Then(/^I verify the number of forms in Journey to be "([^"]*)"$/, function (count) {
    return page.personFacet_page.verifyFormCount(count);
  });

  //I verify that the number of 
  this.Then(/^I verify that the number of "([^"]*)" to be "([^"]*)"$/, function (FormName, count) {
    return page.personFacet_page.navigateStrategyDiscussionJourney(FormName)
      .then(function (countReturned) {
        console.log("count in step: ", count)
        count = parseInt(count);
        console.log("count in step: ", count)
        expect(countReturned).to.equal(count);
      })
  });

  this.Then(/^I should see case owner information under case summary$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    var caseOwner = config.Teams.Team3.SW1.NAME + ' from '
      + config.Teams.Team3.NAME + ' is the case owner.';
    /*caseInfo = caseOwner.replace(/(?:\r\n|\r|\n)/g, '');
    console.log(caseInfo);*/
    return page.personFacet_page.caseOwnerInfo(caseOwner);
  });

  this.Then(/^I navigate to Training under Education widget$/, function () {
    return page.personFacet_page.verifyTrainingDetails();
  });

  this.Then(/^I should see the transfer case owner information under case summary$/, function () {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    TeamName = config.Teams.Team1.NAME;
    var caseOwner = TeamName + ' is the case owner.';
    return page.personFacet_page.caseOwnerInfoOne(caseOwner);
  });

  this.Then(/^I should see person facet with all the widgets and address on person banner$/, function () {
    return driver.sleep(4000).then(function () {
      return page.personFacet_page.personFacetVerificationWithAddress();
    });
  });

  //I navigate to "Journeys" from Person page
  this.Then(/^I navigate to "([^"]*)" from Person page$/, function (widgetName) {
    return page.personFacet_page.navigateToWidget(widgetName);
  });
  //And I collapse "Child Protection Process"
  this.Then(/^I collapse "([^"]*)"$/, function (process) {
    return page.personFacet_page.openProcess(process);
  });

  //And I click on "Add form or plan" button
  this.Then(/^I click on "([^"]*)" button$/, function (process) {
    return page.personFacet_page.clickOnAddFormORPlanButton(process);
  });

  this.Then(/^I should see personId with (\d+) characters$/, function (maxLength) {
    return page.personFacet_page.validatePersonIdOnBanner(maxLength);
  });

  this.Then(/^I click on edit Icon$/, function () {
    return page.personFacet_page.clickEditIcon();
  });

  //And I click on "Add Form" dropdown button
  this.Then(/^I click on "([^"]*)" dropdown button$/, function (process) {
    return page.personFacet_page.clickOnDropdown(process);
  });

  // And I click on cross icon
  this.Then(/^I click on cross icon$/, function () {
    return page.personFacet_page.clickOnCrossIcon();
  });
  //I click on right mark to save selected form

  this.Then(/^I click on right mark to save selected form$/, function () {
    return page.personFacet_page.clickToSaveForm();
  });

  //I click on scroll bar
  this.Then(/^I click on scroll bar$/, function () {
    return page.personFacet_page.clickOnScrollBar();
  });

  this.Then(/^I click on duplicate Icon on toolbar$/, function () {
    return page.personFacet_page.clickOnDuplicateIcon();
  });

  this.Then(/^I verify "([^"]*)" widget present on private Fostering carer person page$/, function (widgetName) {
    return page.personFacet_page.verifyWidgetPresence(widgetName);
  });

  this.When(/^I refresh the page$/, function () {
    return helpers.refreshBrowser();
  });
  this.Then(/^I verify the caseowner "([^"]*)" in case facet page$/, function (team) {
    config = jsonfile.readFileSync('./support/' + featureConfig);
    if (team === "Team1") {
      TeamName = config.Teams.Team1.NAME;
    }
    else if (team === "Team2") {
      TeamName = config.Teams.Team2.NAME;
    }
    else if (team === "Team3") {
      TeamName = config.Teams.Team3.NAME;
    }
    var caseOwner = TeamName + ' is the case owner.';
    return page.personFacet_page.verifyCaseOwner(caseOwner);
  });

  this.Then(/^I verify that missing Icon is shown on person banner$/, function () {
    return page.personFacet_page.verifyMissingTextAndIcon();
  });

  this.When(/^I navigate to Events$/, function () {
    return page.personFacet_page.eventsNavigation();
  });

  this.Then(/^I hover on warning Icon and verify warning as "([^"]*)" by "([^"]*)" of "([^"]*)" on todays date$/, function (warningTitle, user, team) {
    var userName = getUserName(user, team);
    var todaysDate = new Date();
    todaysDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDate());
    var todaysDateDDMMYYYY = dateFormat(todaysDate, "dd/mm/yyyy");
    return page.warning_page.verifyWarningHoveredData(warningTitle, userName, todaysDateDDMMYYYY);
  });
};
