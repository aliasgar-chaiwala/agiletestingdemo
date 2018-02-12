module.exports = function () {
    var dateFormat = require('dateformat');
    var coStatus = { type: '', date: '' };

    this.Then(/^I enable "([^"]*)" Feature$/, function (FEATURE) {
        return driver.executeScript("return isFeatureFlagEnabled('" + FEATURE + "')").then(function (isFeatureFlagEnabled) {
            console.log("isFeatureFlagEnabled : ", isFeatureFlagEnabled);
            if (isFeatureFlagEnabled == false) {
                return driver.executeScript("return updateFeatureFlag('" + FEATURE + "',true)").then(function (updateFeatureFlag) {
                    console.log("updateFeatureFlag : ", updateFeatureFlag);
                    return driver.executeScript("return isFeatureFlagEnabled('" + FEATURE + "')").then(function (isFeatureEnabled) {
                        console.log("isFeatureEnabled : ", isFeatureEnabled);
                        driver.navigate().refresh();
                        return driver.sleep(2000);
                    });
                });
            } else {
                return true;
            }
        });
    });

    this.Then(/^I navigate to court orders Page$/, function () {
        return page.courtOrder_page.navigateCourtOrder();

    });

    this.Then(/^I should see Court Order Page$/, function () {
        return page.courtOrder_page.verifyCourtOrderPage();
    });


    this.Then(/^I click new court order$/, function () {
        return page.courtOrder_page.newCourtOrder();
    });

    this.Then(/^I should see new Court Order creation section$/, function () {
        return page.courtOrder_page.verifyNewCourtOrderSection();
    });

    this.Then(/^I create new court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.createNewCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.courtOrderSubmit();
        });
    });

    //I edit the court order of type
    this.Then(/^I edit the court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.editCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.courtOrderSubmit();
        });
    });

    //I should see updated requested date in court order of type
    this.Then(/^I should see updated requested date in court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;

        var date1 = new Date();
        date1.setDate(date1.getDate() - 1);
        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");

        updatedDate = formatDate1;

        coStatus.type = 'requested';
        coStatus.date = updatedDate;
        console.log('costatusObj:', coStatus);

        return page.courtOrder_page.verifyStatusDateinCO(COTYPE, COURT, PROFESSIONAL, coStatus).then(function () {
            // return page.courtOrder_page.expandToEditCO(COTYPE, COURT, PROFESSIONAL);
            return driver.sleep(800);
        });
    });

    this.Then(/^I should see updated grant date in court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;

        var date1 = new Date();
        date1.setDate(date1.getDate() - 1);
        var formatDate1 = dateFormat(date1, "dd/mm/yyyy");

        var date2 = new Date();
        date2.setDate(date2.getDate() - 1);
        var formatDate2 = dateFormat(date2, "dd/mm/yyyy");

        grantStart = formatDate1;
        grantEnd = formatDate2;

        coStatus.type = 'granted';
        coStatus.date = grantStart + ' to ' + grantEnd;
        console.log('costatusObj:', coStatus);

        return page.courtOrder_page.verifyStatusDateinCO(COTYPE, COURT, PROFESSIONAL, coStatus).then(function () {
            // return page.courtOrder_page.expandToEditCO(COTYPE, COURT, PROFESSIONAL);
            return driver.sleep(800);
        });
    });

    //I create new court order with grant of type "Absoulute Order"
    this.Then(/^I create new court order with grant of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.createNewCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.setOrderWithGrant().then(function () {
                return page.courtOrder_page.courtOrderSubmit();
            });
        });
    });

    //I create new court order not discharged of type
    this.Then(/^I create new court order not discharged of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.createNewCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.setOrderNoDischg().then(function () {
                return page.courtOrder_page.courtOrderSubmit();
            });
        });
    });

    //I should see created court order of type
    this.Then(/^I should see created court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.VerifyCreatedCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.verifyCOreqOnDt(COTYPE, COURT, PROFESSIONAL);
        });
    });

    //I expand the court order of type
    this.Then(/^I expand the court order of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.VerifyCreatedCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.expandToEditCO(COTYPE, COURT, PROFESSIONAL);
        });
    });

    //I should see created court order with grant of type "Absolute Order"
    this.Then(/^I should see created court order with grant of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.VerifyCreatedCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.verifyCODischOnDt(COTYPE, COURT, PROFESSIONAL);
        });
    });

    this.Then(/^I should see created court order not discharged of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        COURT = config.Organisation.Court.BasicInfo.NewName;
        PROFESSIONAL = config.Professional.BasicInfo.NewName;
        return page.courtOrder_page.VerifyCreatedCourtOrder(COTYPE, COURT, PROFESSIONAL).then(function () {
            return page.courtOrder_page.verifyCOExtUntilDt(COTYPE, COURT, PROFESSIONAL);
        });
    });

    //I should see created court order under case Summary Section of type "Absolute Order"
    this.Then(/^I should see created court order under case Summary Section of type "([^"]*)"$/, function (COTYPE) {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        return page.courtOrder_page.verifyCOPersonFacet(COTYPE);
    });
}