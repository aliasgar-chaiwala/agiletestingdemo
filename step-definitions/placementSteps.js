module.exports = function () {

  this.Then(/^I provide Placement Details$/, function () {
    return page.placement_page.setPlacementDetails();
  });

  this.Then(/^I provide Placement provider Details$/, function () {
    return page.placement_page.setPlacementProviderDetails();
  });

  this.Then(/^I verify the created Placement details$/, function () {
    driver.sleep(800);
    return page.placement_page.verifyPlacementDetails();
  });

  this.Then(/^I provide Provision for Placement$/, function () {
    return page.placement_page.setProvisionForPlacement();
  });

  this.Then(/^I create the placement$/, function () {
    return page.placement_page.createPlacement();
  });

  this.Then(/^I verify the Placement updated from Child Protection Plan$/, function () {
    return page.placement_page.verifyCPPupdatedPlacement();
  });

  //I verify Service details while providing new Placement Details
  this.Then(/^I verify Service details while providing new Placement Details$/, function () {
    return page.placement_page.verifyServicesInPlacement();
  });

    this.When(/^I edit the placement with provision amount$/, function () {
    return page.placement_page.updatePlacementAmount();
  });





}