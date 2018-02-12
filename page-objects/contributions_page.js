module.exports = {

    elements: {
        newContributionIcon: by.css('[id="lnk-new-budget"]'),
        personSearch: by.css('[placeholder="Search person/organisation ..."]'),
        personSelect: by.css('#create-new-personal-budget .selectize-dropdown.multi.form-control.plugin-remove_button > div > div'),
        actualContribution: by.css('[id="Actual_contribution-amount"]'),
        contributionType: by.css('[id="costUnit"]'),
        contributionStartDate: by.css('[data-bind*="startDateEditableStatus"] input'),
        contributionEndDate: by.css('[data-bind*="endDateEditableStatus"] input'),
        createContributionsButton: by.css('[name="new-contribution-save "]'),
        contributionList: by.css('[name="provision-list-item"]'),
        getRelatedPerson: by.css('[name="provision-list-item"] [class="given-name"]'),
        getAddress: by.css('section > div > div > div:nth-child(2) > div > div:nth-child(3) > span'),
        getContriAmt: by.css('[id="contributionAmount"]'),
        contributorTitle: by.css('#addProvision'),
        searchLabel: by.css('#create-new-personal-budget div.container-fluid div:nth-child(2) .form-group:nth-child(1) label'),
        actualLabel: by.css('[for="actual_contribution"]'),
        typeLabel: by.css('#create-new-personal-budget div.container-fluid div:nth-child(2) .form-group:nth-child(3) > div > div:nth-child(1) > label'),
        startDateLabel: by.css('#create-new-personal-budget div.container-fluid div:nth-child(2) .form-group:nth-child(4) > div > div:nth-child(1) > label'),
        endDateLabel: by.css('#create-new-personal-budget div.container-fluid div:nth-child(2) .form-group:nth-child(4) > div > div:nth-child(2) > label')
    },

    newContribution: function () {
        return driver.wait(until.elementsLocated(page.contributions_page.elements.newContributionIcon), 15000)
            .then(function () {
                return driver.findElement(page.contributions_page.elements.newContributionIcon).click()
                    .then(function (pillName) {
                        return driver.wait(until.elementsLocated(page.contributions_page.elements.personSearch), 10000)
                    })
            })
    },

    setContributions: function (person) {
        driver.findElement(page.contributions_page.elements.personSearch).sendKeys(person)
        driver.sleep(2000);
        return driver.wait(until.elementsLocated(page.contributions_page.elements.personSelect), 10000).then(function () {
            driver.sleep(1000)
            return driver.findElement(page.contributions_page.elements.personSelect).click()
                .then(function () {
                    driver.findElement(page.contributions_page.elements.actualContribution).sendKeys(10)
                    helpers.selectOption(page.contributions_page.elements.contributionType, 'One off');
                    driver.sleep(500);
                    driver.findElement(page.contributions_page.elements.contributionStartDate).click()
                    helpers.gridClickDate('prev', '16');
                    driver.findElement(page.contributions_page.elements.contributionEndDate).click()
                    helpers.gridClickDate('next', '16');
                    return driver.sleep(1000);
                })
        })
    },

    createContributions: function () {
        driver.findElement(page.contributions_page.elements.createContributionsButton).click();
        return driver.wait(until.elementsLocated(page.contributions_page.elements.contributionList), 10000)
    },

    verifyContribution: function () {
        return driver.wait(until.elementsLocated(page.contributions_page.elements.contributionList), 10000)
            .then(function () {
                return driver.findElement(page.contributions_page.elements.getRelatedPerson).getText();
            })
            .then(function (person1) {
                expect(person1).to.equal(config.PersonDetails.person1.Name);
            })
            //return driver.findElement(page.contributions_page.elements.getAddress).getText()
            .then(function () {
                //var address = config.PersonDetails.Address.House + ', ' + config.PersonDetails.Address.Town + ', ' + config.PersonDetails.Address.Country + ', ' + config.PersonDetails.Address.Post;
                // expect(person1Address).to.equal(address);
                return driver.wait(until.elementLocated(page.contributions_page.elements.getContriAmt), 10000).then(function () {
                    return driver.findElement(page.contributions_page.elements.getContriAmt).getText();
                })
            })
            .then(function (contriAmt) {
                expect(contriAmt).to.equal('£ 10.00');
                return driver.sleep(100);
            })
    },

    verifyContributorDetails: function () {
        driver.wait(until.elementLocated(page.contributions_page.elements.contributorTitle), 20000);
        return driver.findElement(page.contributions_page.elements.contributorTitle).getText()
            .then(function (contributorTitle) {
                return expect(contributorTitle).to.equal("Add contributor");
            })
            .then(function () {
                driver.wait(until.elementLocated(page.contributions_page.elements.searchLabel), 20000);
                return driver.findElement(page.contributions_page.elements.searchLabel).getText()
            })
            .then(function (searchLabel) {
                return expect(searchLabel).to.equal("Search person/organization");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contributions_page.elements.actualLabel), 10000);
                return driver.findElement(page.contributions_page.elements.actualLabel).getText();
            })
            .then(function (actualLabel) {
                return expect(actualLabel).to.equal("Actual contribution (£)");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contributions_page.elements.typeLabel), 10000);
                return driver.findElement(page.contributions_page.elements.typeLabel).getText();
            })
            .then(function (typeLabel) {
                return expect(typeLabel).to.equal("Contribution type");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contributions_page.elements.startDateLabel), 10000);
                return driver.findElement(page.contributions_page.elements.startDateLabel).getText();
            })
            .then(function (startDateLabel) {
                return expect(startDateLabel).to.equal("Start date");
            })
            .then(function () {
                driver.wait(until.elementsLocated(page.contributions_page.elements.endDateLabel), 10000);
                return driver.findElement(page.contributions_page.elements.endDateLabel).getText();
            })
            .then(function (endDateLabel) {
                return expect(endDateLabel).to.equal("End date");
            })

    }

}