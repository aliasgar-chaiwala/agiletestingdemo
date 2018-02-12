module.exports = {

    elements: {
        permanenceDetailAccordian: by.css('div[name="Permanence details"] div[aria-label="Accordion expander"] a'),
        adoptionDate: by.css('div[name="dateOfContactRow"] #assessmentDate button'),
        selector: by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days tbody'),
        selector1: by.css('tr td.day')

    },
    moveToPermanenceDetails: function () {
        return driver.wait(until.elementLocated(page.childInCarePlan_page.elements.permanenceDetailAccordian), 20000)
            .then(function () {
                driver.sleep(2000);
                return driver.findElement(page.childInCarePlan_page.elements.permanenceDetailAccordian).click();
            });
    },
    verifyAdoptionDate: function () {
        
         return driver.executeScript('return window.scrollTo(' + 1500 + ',' + 1500 + ');').then(function () {
            driver.sleep(2000);
            return driver.wait(until.elementLocated(page.childInCarePlan_page.elements.adoptionDate), 15000, 'Adoption date not Located').then(function () {
                driver.sleep(2000);
                return driver.findElement(page.childInCarePlan_page.elements.adoptionDate).click().then(function () {
                    return driver.findElement(by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days th.next')).getAttribute("class")
                        .then(function (classAttribute) {
                            expect(classAttribute).to.include('disabled')
                            var today = new Date();
                            var dd = today.getDate() + 1;
                            selectList = driver.findElement(page.childInCarePlan_page.elements.selector);
                            return selectList.findElements(page.childInCarePlan_page.elements.selector1)
                                .then(function findMatchingOption(options) {
                                    options.some(function (option) {
                                        option.getText()
                                            .then(function doesOptionMatch(text) {
                                                if (dd == text) {
                                                    desiredOption = option;
                                                }
                                            });
                                    });
                                })
                                .then(function () {
                                    return desiredOption.getAttribute('class').then(function (result) {
                                        expect(classAttribute).to.include('disabled')
                                        return driver.sleep(1000);
                                    });

                                });
                        });
                });
            });
        });
    }

}