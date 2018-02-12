module.exports = function () {
    
        this.Then(/^I navigate to Statutory Return page$/, function () {
            return page.pageHead.navigateTostatReturnPage();
        });
        this.Then(/^I verify the collection period and upload period for "([^"]*)"$/, function (year) {
           // console.log(year);
            return page.statutoryReturn_page.selectPeriod(year);
           // return page.pageHead.selectPeriod(year);
        });
        this.Then(/^I verify the page on click of GenerateXML button$/, function () {
           // console.log(year);
            return page.statutoryReturn_page.verifyGenerateXMLButtonClick();
           // return page.pageHead.selectPeriod(year);
        });
    }