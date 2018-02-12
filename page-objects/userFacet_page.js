module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        userBanner: by.css('div.social-worker-banner'),
        userBannername: by.css('div.social-worker-banner span.given-name'),
        userBannerTeamName: by.css(),
        userContactInfoSection: by.css('div#contactInformation'),
        userContactInfoSectionTitle: by.css('div#contactInformation a.tab-section')
    },

    verifyUserFacet: function (USERNAME) {
        return driver.sleep(1000).then(function () {
            return driver.wait(until.elementsLocated(page.userFacet_page.elements.userBanner), 10000).then(function () {
                return driver.wait(until.elementsLocated(page.userFacet_page.elements.userContactInfoSection), 10000).then(function () {
                    return driver.findElement(page.userFacet_page.elements.userBannername).getText().then(function (UserBannername) {                        
                        expect(UserBannername).to.contain(USERNAME);
                    }).then(function () {
                        driver.findElement(page.userFacet_page.elements.userContactInfoSectionTitle).isDisplayed();
                        return driver.findElement(page.userFacet_page.elements.userContactInfoSectionTitle).getText().then(function (userContactInfoSectionTitle) {
                            expect(userContactInfoSectionTitle).to.contain('Contact information');
                        });
                    });
                });
            });
        });
    }
}