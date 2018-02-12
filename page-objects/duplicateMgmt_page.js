module.exports = {

    elements: {
        searchBox: by.css('input.personpicker-search'),
        searchList: by.css('#searchPerson .search-results'),
        searchListItems: by.css('ul a > div[style^="text"]'),
        recordList: by.css('div.summary'),
        idForRecord: by.css('span[data-bind="text: person.id"]'),
    },

    searchDuplicateRecord: function (personName) {
        driver.wait(until.elementsLocated(page.duplicateMgmt_page.elements.searchBox), 5000, "Search box not located");
        return driver.findElement(page.duplicateMgmt_page.elements.searchBox).sendKeys(personName)
            .then(function () {
                driver.sleep(800);
                helpers.gridClick(page.duplicateMgmt_page.elements.searchList, page.duplicateMgmt_page.elements.searchListItems, personName);
                return driver.sleep(1000);
            });
    },

    verifyPersonId: function (personName, maxLength) {
        // console.log("beforeSearch");
        return page.duplicateMgmt_page.searchDuplicateRecord(personName).then(function () {
            driver.sleep(1000);
            var desiredOption;
            return driver.findElements(page.duplicateMgmt_page.elements.recordList).then(function (options) {
                options.some(function (option) {
                    option.findElement(by.css('h3[data-bind*="person.name"]')).getText().then(function (personNameText) {
                        if (personNameText.includes(personName)) {
                            desiredOption = option;
                            // console.log("\n\nMatchedPerson:" + personName + "\nValue : " + personNameText);
                        }
                    });
                });
            }).then(function verify() {
                assert.isDefined(desiredOption, "No element found with matching text: " + personName);
                return desiredOption.findElement(page.duplicateMgmt_page.elements.idForRecord).getText().then(function (idText) {
                    return expect(idText.length).to.equal(parseInt(maxLength));
                });
            });
        });
    }
}