
module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        personBanner: by.css('[class="person-banner new-person-banner"]'),
        toggleStrategyDiscussion: by.css('[name="Strategy discussion details"] > div:nth-child(2) > div > a'),
        summary: by.css('#textbox_11'),
        allegedAbuseCategory: by.css('[data-view*="/allegedabuse"] [id="abuseCategory"]'),
        reasonDetails: by.css('[data-view*="reason/reason"] [id="dropdownMenu1"]'),
        reasonDetailsSelect: by.css('[data-view*="reason/reason"] ul li:nth-child(1) a span:nth-child(2)'),
        addActionButton: by.css('.further-action'),
        actionDetails: by.css('[placeholder="Please enter action details"]'),
        actionDueDate: by.css('[aria-label="Due Date"] i'),
        actionOwner: by.css('[id="actionSection"] [placeholder="Search user and team..."]'),
        actionOwnerSelect: by.css('#actionSection > div > div.m-l-md > div:nth-child(2) > div:nth-child(2) > div > div > div > div > div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div')
    },

    toggleStrategyDiscussionDetails: function () {
        return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.toggleStrategyDiscussion), 10000)
            .then(function () {
                return driver.findElement(page.strategyDiscussion_page.elements.toggleStrategyDiscussion).click()
                    .then(function () {
                        //console.log("going to wait for summary to visible");
                        return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.summary), 10000);
                    })
            })
    },

    setStrategyDiscussionDetails: function () {
        //console.log('set summary');
        driver.sleep(1000);
        //return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.summary), 10000)
            //.then(function () {
                //console.log('setting summary');
                //driver.findElement(page.strategyDiscussion_page.elements.summary).sendKeys('Summary');
                return driver.sleep(1000)
                //   .then(function () {
                //       driver.findElement(page.strategyDiscussion_page.elements.reasonDetails).click();
                //console.log("1");
                //      driver.sleep(500);
                //      return driver.sleep(500)
                //          .then(function () {
                ////console.log("2");
                //             driver.sleep(500);
                //              return driver.findElement(page.strategyDiscussion_page.elements.reasonDetailsSelect).click()
                //          })
            //})
        //  })
    },

    verifyAllegedAbuseCategorySingleAssessment: function () {
        return driver.findElement(page.strategyDiscussion_page.elements.allegedAbuseCategory).getText()
            .then(function (category) {
                return expect(category).to.equal('Physical abuse , Sexual abuse , Emotional abuse');
            })
            .then(function () {
                driver.findElement(page.strategyDiscussion_page.elements.toggleStrategyDiscussion).click();
                return driver.sleep(1000);
            })
    },

    addActionNextStep: function () {
        return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.addActionButton), 10000)
            .then(function () {
                return driver.findElement(page.strategyDiscussion_page.elements.addActionButton).click()
                    .then(function () {
                        //console.log("going to wait for summary to visible");
                        return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.actionDetails), 10000);
                    })
            })
    },

  setActionNextStep: function (team) {
        return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.actionDetails), 10000)
            .then(function () {
                return driver.findElement(page.strategyDiscussion_page.elements.actionDetails).sendKeys('New Team task For Capita Testing Team 1')
                    .then(function () {
                        return driver.findElement(page.strategyDiscussion_page.elements.actionDueDate).click()
                            .then(function () {
                                if (team === 'Team1') {
                                    driver.findElement(page.strategyDiscussion_page.elements.actionOwner).sendKeys(config.Teams.Team1.NAME);
                                } else {
                                    driver.findElement(page.strategyDiscussion_page.elements.actionOwner).sendKeys(config.Teams.Team2.NAME);
                                }

                                driver.sleep(1000);
                                driver.findElement(page.strategyDiscussion_page.elements.actionOwner).sendKeys(selenium.Key.ENTER);

                                //return driver.wait(until.elementsLocated(page.strategyDiscussion_page.elements.actionOwnerSelect), 20000)
                                // .then(function () {
                                //      console.log("BBBBBBB going to wait for summary to visible");
                                //     driver.sleep(1500);
                                //    return driver.findElement(page.strategyDiscussion_page.elements.actionOwnerSelect).click()
                                // })
                            })
                    })
            })
    }
}