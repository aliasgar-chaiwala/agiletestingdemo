
module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        sdqTitle: by.css('[aria-label="Strengths and Difficulties Questionnaire"]'),
        toggleSDQ: by.css('[name="Strengths and Difficulties questionnaire information"] a.accordion-toggle'),
        sdqInfoTitle: by.css('[aria-label = "Strengths and Difficulties questionnaire information"]'),
        setYes: by.css('.btn.btn-three-state.yes'),
        completedDate: by.css('#assessmentDate input'),
        ageSet: by.css('#pro-amount'),
        score: by.css('#maincontent div.event-form div.row > div:nth-child(2) div.panel-collapse.in.collapse form > div:nth-child(4) div.selectize-input.items.has-options'),
        scoreSet: by.css('#maincontent div.event-form div.row > div:nth-child(2) div.panel-collapse.in.collapse form > div:nth-child(4) div.selectize-dropdown.single.form-control > div > div:nth-child(5)'),
        setNo: by.css('.btn.btn-three-state.no'),
        chooseReason: by.css('#dropdownMenu1'),
        chooseReasonOther: by.css('#maincontent div.panel-collapse.in.collapse form > div:nth-child(5) div.col-sm-12 .dropdown.open ul li:nth-child(5) a span:nth-child(2)'),
        otherText: by.css('[placeholder = "Please enter other reason here..."]')
    },

    toggleSDQInformation: function () {
        driver.sleep(2000);
        driver.wait(until.elementsLocated(page.sdq_page.elements.sdqTitle), 10000);
        return helpers.expandOnCondition(page.sdq_page.elements.toggleSDQ, "aria-expanded", "Strengths and Difficulties Questionnaire Component");
        /*.then(function () {
            driver.sleep(1000);
            driver.wait(until.elementsLocated(page.sdq_page.elements.sdqInfoTitle), 10000);
            return driver.findElement(page.sdq_page.elements.sdqInfoTitle).getText();
        })
        .then(function (title) {
            return expect(title).to.equal("Accommodation details and activity status");
        })*/

    },

    fillYesInfo: function () {
        driver.sleep(1500);
        driver.wait(until.elementsLocated(page.sdq_page.elements.setYes), 10000);
        return driver.findElement(page.sdq_page.elements.setYes).click()
            .then(function () {
                driver.sleep(1000);
                driver.findElement(page.sdq_page.elements.completedDate).click();
                var date2 = new Date();
                date2.setDate(date2.getDate());
                var currentDate = date2.getDate();
                console.log(currentDate);
                helpers.gridClickDate('curr', currentDate);
                driver.sleep(1000);
                return driver.findElement(page.sdq_page.elements.sdqTitle).click();

            })
            .then(function () {
                driver.wait(until.elementsLocated(page.sdq_page.elements.ageSet), 10000);
                return driver.findElement(page.sdq_page.elements.ageSet).sendKeys("25");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.sdq_page.elements.score), 10000);
                driver.findElement(page.sdq_page.elements.score).click();
                driver.sleep(800);
                return driver.findElement(page.sdq_page.elements.scoreSet).click();
            })
    },

    fillNoInfo: function () {
        driver.sleep(500);
        driver.wait(until.elementsLocated(page.sdq_page.elements.setNo), 10000);
        return driver.findElement(page.sdq_page.elements.setNo).click()
            .then(function () {
                driver.sleep(1000);
                driver.findElement(page.sdq_page.elements.chooseReason).click();
                return driver.findElement(page.sdq_page.elements.chooseReasonOther).click();
            })
            .then(function () {
                driver.sleep(1000);
                driver.wait(until.elementsLocated(page.sdq_page.elements.otherText), 10000);
                return driver.findElement(page.sdq_page.elements.otherText).sendKeys("Testing");
            })
    }

}