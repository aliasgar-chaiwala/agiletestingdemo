module.exports = {

    elements: {
        transferLabel: by.css('[aria-label ="Case Transfer Request"]'),
        passComponent: by.css('[aria-label ="Pass To"]'),
        searchTeam: by.css('#maincontent div.event-form  div.row > div:nth-child(2) div.panel-collapse.collapse.in form div.selectize-input.items.not-full > input[type="text"]'),
        selectTeam: by.css('#maincontent div.event-form div.row > div:nth-child(2) div.panel-collapse.collapse.in form div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div:nth-child(1)'),
        workerTabCaseBlock: by.css('.caseContainer .app-info-block.cases.unassigned-workload'),
        caseTransferButton: by.css('a[name="btnClosecase"][data-bind*="TransferCase"]'),
        caseTransferDescription: by.css('.caseContainer span[aria-label*="the transfer procedure."]'),
        caseTransferRightTick: by.css('.caseContainer a.icon-mini.icon-thik-tick')
    },

    verifyTransferForm: function () {
        driver.wait(until.elementsLocated(page.caseTransfer_page.elements.transferLabel), 50000)
        return driver.findElement(page.caseTransfer_page.elements.transferLabel).getText()
            .then(function (label) {
                return expect(label).to.contain('Case Transfer Request');
            })
    },


    fillTransferDetails: function () {
        config = jsonfile.readFileSync('./support/config.json');
        TeamName = config.Teams.Team1.NAME;
        return driver.wait(until.elementsLocated(page.caseTransfer_page.elements.passComponent), 10000)
            .then(function () {
                driver.sleep(500);
                driver.wait(until.elementsLocated(page.caseTransfer_page.elements.searchTeam), 10000);
                driver.findElement(page.caseTransfer_page.elements.searchTeam).sendKeys(TeamName);
                driver.sleep(2000)
                return driver.findElement(page.caseTransfer_page.elements.selectTeam).click()
            });
    },

    transferCase: function (PERSON) {
        //driver.executeScript('return window.scrollTo(' + 1100 + ',' + 1100 + ');');
        driver.sleep(1000);
        return driver.wait(until.elementLocated(page.caseTransfer_page.elements.workerTabCaseBlock), 15000).then(function () {
            return helpers.gridGetElement(by.css('.my-teams-member-group.active-panel'), page.caseTransfer_page.elements.workerTabCaseBlock, PERSON).then(function (personBlock) {
                return driver.wait(until.elementLocated(page.caseTransfer_page.elements.caseTransferButton), 15000).then(function () {
                    driver.sleep(3000);
                    return personBlock.findElement(page.caseTransfer_page.elements.caseTransferButton).click().then(function () {
                        return driver.wait(until.elementLocated(page.caseTransfer_page.elements.caseTransferDescription), 15000).then(function () {
                            driver.sleep(1000);
                            personBlock.findElement(page.caseTransfer_page.elements.caseTransferDescription).getText().then(function (caseTransfer) {
                                result = caseTransfer.split(/\r?\n/);
                                //console.log(result);
                                expect(result).to.include("This case is marked for transfer . It seems that you want to proceed with the transfer procedure.");
                            });
                            return personBlock.findElement(page.caseTransfer_page.elements.caseTransferRightTick).click().then(function () {
                                return driver.sleep('5000');
                            });
                        });
                    });
                });
            });
        });
    },

}