module.exports = {

    elements: {
        eventsPageTitle: by.css('h2.page-title'),
        eventBlock: by.css('div.events-block.row'),
        eventBlockName: by.css('div.events-title'),
        eventDate: by.css('span.events-date p'),
        createdEventBy: by.css('span.events-by'),
        missingIconEventSection: by.css('div.icon-missing'),
    },


    verifyCreatedEvent: function (eventName, dateToMatch) {
        return driver.wait(until.elementLocated(page.events_page.elements.eventsPageTitle), 15000, "Events page not shown")
            .then(element => {
                return driver.wait(until.elementIsVisible(element), 10000, "Events page title is not visible");
            }).then(() => {
                return helpers.gridGetParentElement(page.events_page.elements.eventBlock, page.events_page.elements.eventBlockName, eventName)
                    .then(function (createdEvent) {
                        return createdEvent.findElement(page.events_page.elements.eventDate).getText().then(dateText => {
                            expect(dateText).to.contain(dateToMatch);
                        }).then(function () {
                            return createdEvent.findElement(page.events_page.elements.createdEventBy).getText().then(function (createdEventByText) {
                                expect(createdEventByText).to.contain("By - You");
                            }).then(function () {
                                return createdEvent.findElement(page.events_page.elements.missingIconEventSection).then(function (missingIconElement) {
                                    return missingIconElement.isDisplayed().then(() => {
                                        return driver.actions().mouseMove(missingIconElement).perform();
                                    })
                                }).then(function () {
                                });
                            });
                        });
                    });
            });
    },
}