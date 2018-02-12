
module.exports = function () {

  this.When(/^I provide Contactor Details in Referral Form$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.setContactor()
      })
    /*return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.contactRecord_page.setContactor()
      })*/
  });

  //I set the deadline date for Form
  this.When(/^I set the deadline date for Form$/, function () {
    return page.stage2Assessment_page.setFormDeadLineDate()
  });

  //I verify Source of referral details
  this.When(/^I verify Source of referral details$/, function () {
    return page.contactRecord_page.toggleContactorDetails()
      .then(function () {
        return page.referral_page.verifySourceOfReferral()
      });
  });

  this.When(/^I set the Authorization or Rejection date for Form$/, function () {
    return page.referral_page.setFormAuthorizationOrRejectionDate()
  });
  this.When(/^I add contactor details in Referral Form$/, function () {
    return page.referral_page.setContractor();
  });
  this.Then(/^I approach to Contactor Details in Referral form$/, function () {
    return page.referral_page.expandContactorDetails();
  });
  this.When(/I should see Primary need Details have been updated notification$/, function () {
    return page.referral_page.primaryNeedUpdatedNotification();
  });
  this.When(/I click on Compare changes link$/, function () {
    return page.referral_page.clickCompareChanges();
  });
  this.When(/I should be able to see the comparision window$/, function () {
    return page.referral_page.verifyCompareChangesWindow();
  });
  this.When(/I verify the Take Latest Functionality under Primary Need Notification$/, function () {
    return page.referral_page.takeLatest();
  });
  this.When(/I verify the Keep my changes Functionality under Primary Need Notification$/, function () {
    return page.referral_page.keepMyChanges();
  });
  this.Then(/I refresh the browser$/, function () {
    return helpers.refreshBrowser();
  });
  this.Then(/I should not see Primary need Details have been updated notification$/, function () {
    return page.referral_page.noPrimaryNeedNotification();
  });
  this.Then(/I should see Information Mismatch notification$/, function () {
    return page.referral_page.informationMismatchNotification();
  });
  this.Then(/I verify primary Need in Referral form$/, function () {
    return page.referral_page.verifyPrimaryNeed();
  });
  this.Then(/I click on Keepmychanges button$/, function () {
    return page.referral_page.clickKeepMyChanges();
  });
  this.Then(/I add contactor details in Referral Form without primary need$/, function () {
    return page.referral_page.setContractorWithoutPrimaryNeed();
  });
  this.When(/^I provide Referral Details in Referral Form$/, function () {
    return page.referral_page.toggleReferralDetails()
      .then(function () {
        return page.referral_page.setReferral()
      });
  });



}