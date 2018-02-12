module.exports = {

    elements: {
        palnCIN: by.css('[aria-label="Child in Need Plan"]'),
        OverviewDescription: by.css('[placeholder= "Enter plan description.."]'),
        meetingToggle: by.css('div[name= "Meeting details"] a.accordion-toggle'),
        meetingType: by.css('#maincontent div.panel-collapse.in.collapse form > div > div:nth-child(1) label'),
        reviewDate: by.css('#maincontent div.panel-collapse.in.collapse form > div > div:nth-child(2) div div.form-group label'),
        dateOfMeeting: by.css('[for= "dateOfMeeting"]'),
        meetingNotes: by.css('#maincontent div.panel-collapse.in.collapse form > div > div:nth-child(4) div div.form-group label'),
        nextReviewDate: by.css('#maincontent div.panel-collapse.in.collapse form > div > div:nth-child(5) div div.form-group label'),
        planParticipation: by.css('#maincontent div.panel-collapse.in.collapse form > div > div:nth-child(6) div div.form-group label'),
        startDate: by.css('[aria-label= "Started on date"]'),
        endDate: by.css('[aria-label= "End date"]'),
        setMeeting: by.css('#planMeetingType'),
        scheduledDate: by.css('[aria-label = "Scheduled date of review"] input'),
        meetingDate: by.css('[aria-label = "dateOfMeeting"] input'),
        reasontext: by.css('[placeholder="Reason for delay.."]'),
        meetingNoteText: by.css('[placeholder="Enter meeting notes.."]')
    },



    verifyChildInNeedPlan: function() {
        return driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.palnCIN), 15000).then(function() {
            return driver.findElement(page.childInNeedPlan_page.elements.palnCIN).getText().then(function(CPP) {
                expect(CPP).to.equal("Child in Need Plan");
                driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.startDate), 15000);
                return driver.findElement(page.childInNeedPlan_page.elements.startDate).getText().then(function(startDate) {
                    expect(startDate).to.equal("Start date o");
                    driver.sleep(1500);
                    //driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.endDate), 15000);
                    //return driver.findElement(page.childInNeedPlan_page.elements.endDate).getText().then(function (endDate) {
                    //expect(endDate).to.equal("End date");
                    return driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.OverviewDescription), 20000);
                });
            });
        });
    },

    verifyMeetingNoteDetails: function() {
        driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.meetingToggle), 10000);
        driver.findElement(page.childInNeedPlan_page.elements.meetingToggle).click();
        driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.meetingType), 10000);
        return driver.findElement(page.childInNeedPlan_page.elements.meetingType).getText().then(function(meetingType) {
            expect(meetingType).to.equal("Meeting type");
            driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.reviewDate), 10000);
            return driver.findElement(page.childInNeedPlan_page.elements.reviewDate).getText().then(function(reviewDate) {
                expect(reviewDate).to.equal("Scheduled date of review");
                driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.dateOfMeeting), 10000);
                return driver.findElement(page.childInNeedPlan_page.elements.dateOfMeeting).getText().then(function(meetingDate) {
                    expect(meetingDate).to.equal("Date of meeting");
                    driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.meetingNotes), 10000);
                    return driver.findElement(page.childInNeedPlan_page.elements.meetingNotes).getText().then(function(meetingNotes) {
                        expect(meetingNotes).to.equal("Meeting notes");
                        driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.nextReviewDate), 10000);
                        return driver.findElement(page.childInNeedPlan_page.elements.nextReviewDate).getText().then(function(nextReviewDate) {
                            expect(nextReviewDate).to.equal("Next review date");
                            driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.planParticipation), 10000);
                            return driver.findElement(page.childInNeedPlan_page.elements.planParticipation).getText().then(function(planParticipation) {
                                return expect(planParticipation).to.equal("Participation in this plan");
                            });
                        });
                    });
                });
            });
        });
    },

    addMeetingNotes: function() {
        driver.executeScript('return window.scrollTo(' + 1200 + ',' + 1200 + ');');
        driver.sleep(3000);
        driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.meetingToggle), 10000);
        return driver.findElement(page.childInNeedPlan_page.elements.meetingToggle).click()
            .then(function() {
                driver.wait(until.elementsLocated(page.childInNeedPlan_page.elements.meetingType), 30000);
                return helpers.selectOption(page.childInNeedPlan_page.elements.setMeeting, 'Review Meeting')
            })
            .then(function() {
                driver.findElement(page.childInNeedPlan_page.elements.scheduledDate).click();
                return helpers.gridClickDate('curr', 20);
            })
            .then(function() {
                driver.findElement(page.childInNeedPlan_page.elements.meetingDate).click();
                //return helpers.gridClickDate('curr', currDate);
            })
            //.then(function() {
               // driver.findElement(page.childInNeedPlan_page.elements.reasontext).clear();
               // return driver.findElement(page.childInNeedPlan_page.elements.reasontext).sendKeys("Text Reason")
           // })
            .then(function() {
                driver.findElement(page.childInNeedPlan_page.elements.meetingNoteText).clear();
                return driver.findElement(page.childInNeedPlan_page.elements.meetingNoteText).sendKeys("Text Notes")
            })

    }

}