
module.exports = function () {

    function setEventdetails(eventType) {

        eventDesc = null;
        config = jsonfile.readFileSync('./support/' + featureConfig);

        if (eventType.includes("Partial Consent")) {
            eventDesc = "Consent created - Partial - share with everyone except";
        }
        else if (eventType.includes("Full Consent")) {
            eventDesc = "Consent created - Full";
        }
        else if (eventType.includes("Consent withdrawn")) {
            eventDesc = "Consent withdrawn - Full";
        }
        //----------Warning------------------
        else if (eventType.includes("Warning created")) {
            eventDesc = "Warning added - " + config.Warning.Title;
        }
        //------------duplicate management auto linking event
        else if (eventType.includes("Default Link")) {
            eventDesc = "linked as secondary";
        }
        //---------------Current Case Note
        else if (eventType.includes("Current Casenote")) {
            var cnTitle = config.Casenote.WeekTitle + config.PersonDetails.Name;
            eventDesc = cnTitle;
        }
        else if (eventType.includes("Month Casenote")) {
            var cnTitle = config.Casenote.MonthTitle + config.PersonDetails.Name;
            eventDesc = cnTitle;
        } else {
            eventDesc = eventType;
        }
        //------------Exclusion record added

        return eventDesc;
    }

    this.Then(/^I should see event for "([^"]*)" on personfacet$/, function (eventType) {
        // Write code here that turns the phrase above into concrete actions
        var event = setEventdetails(eventType);
        // console.log('step Event : ', event);
        return page.personFacet_page.checkEvent(event);
    });

    this.Then(/^I should not see "([^"]*)" Event on facet$/, function (eventType) {
        var event = setEventdetails(eventType);
        // console.log('not see Event : ', event);
        return page.personFacet_page.checkEventNotVisible(event);
    });

    this.Then(/^I should see event for "([^"]*)" and date on personfacet$/, function (eventType) {
        return page.personFacet_page.checkEventWithDate(eventType, global.eventDateDDMMYYYY);
    });

    this.Then(/^I validate "([^"]*)" event on Events page with creation date$/, function (eventType) {
        return page.events_page.verifyCreatedEvent(eventType, global.eventDateDDMMYYYY);
    });
};