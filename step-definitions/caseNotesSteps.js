module.exports = function () {
    config = jsonfile.readFileSync('./support/'+featureConfig);

    //Step: Then I choose Casenote widget - features\Casenote.feature:40
    this.Then(/^I click Casenote icon$/, function () {
        return page.casenote_page.navigateCasenote();
    });


    //Step: And I should see Casenote page - features\Casenote.feature:41
    this.Then(/^I should see Casenote page$/, function () {
        return page.casenote_page.verifyCasenotePage2();
    });

    // //Step: And I created the new Casenote - features\Casenote.feature:42
    // this.Then(/^I create new Casenote$/, function () {

    //     config = jsonfile.readFileSync('./support/'+featureConfig);
    //     return page.casenote_page.createNewCasenote(config.Casenote.Title);
    // });

    // //Step: And I should see Created Casenote - features\Casenote.feature:42
    // this.Then(/^I should see Created Casenote$/, function () {
    //     config = jsonfile.readFileSync('./support/'+featureConfig);
    //     return page.casenote_page.verifyCreatedCasenote(config.Casenote.Title);
    // });

    this.Then(/^I click new Casenote button$/, function () {
        return page.casenote_page.createNewCasenoteClick();
    });

    this.Then(/^I should see new case note section$/, function () {
        return page.casenote_page.verifyNewCasenoteSection();
    });

    this.Then(/^I create new Casenote for Current week$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var cnTitle = config.Casenote.WeekTitle + config.PersonDetails.Name;
        return page.casenote_page.createNewCasenote(cnTitle, config.Casenote.WeekCasenoteType);
    });

    this.Then(/^I change event timeline view to "([^"]*)"$/, function (timelineView) {
        var tlView = null;

        if (timelineView.includes("day")) {
            tlView = "Day";
        }
        else if (timelineView.includes("week")) {
            tlView = "Week";
        }
        else if (timelineView.includes("month")) {
            tlView = "Month";
        }
        else if (timelineView.includes("year")) {
            tlView = "Year";
        }
        else if (timelineView.includes("ifetime")) {
            tlView = "Lifetime";
        }
        return page.casenote_page.changeTimelineView(tlView).then(function () {
            return driver.sleep(3000);
        });
    });

    this.Then(/^I should see Created Current week Casenote$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var cnTitle = config.Casenote.WeekTitle + config.PersonDetails.Name;
        return page.casenote_page.verifyCreatedCasenote(cnTitle, config.Casenote.WeekCasenoteType);
    });

    this.Then(/^I create new Casenote for previous month$/, function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        var cnTitle = config.Casenote.MonthTitle + config.PersonDetails.Name;
        return page.casenote_page.createNewCasenote(cnTitle, config.Casenote.MonthCasenoteType);
    });

    this.Then(/^I should see Created previous month Casenote$/, function () {
    });

}