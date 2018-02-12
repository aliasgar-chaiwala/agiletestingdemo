var dateFormat = require('dateformat');
module.exports = {
    elements: {
        supervisionLink: by.css('a#supervision'),
        supervisionPageTitle: by.css('div[data-view="supervision/Supervision"] .warning-setion-wrapper h2.page-title a'),
        supervisionPageCount: by.css('div[data-view="supervision/Supervision"] .warning-setion-wrapper h2.page-title a small'),
        newSupervisionBtn: by.css('div.hatrickIcons.icon-supervisions-add-new'),
        newSupervisionSection: by.css('div#supervision-content'),
        newSupervisionSecAccord: by.css('div#supervision-content div[id="accordion"]'),
        newSupervisionSectionPpanel: by.css('div.panel-collapse.collapse.in'),
        reflectiveDiscussion: by.css('div.panel-collapse.collapse.in div[aria-label="Reflective Discussion"]'),

        adminDiscussionLbl: by.css('div.panel-collapse.collapse.in div#AdministrativeDiscussion label'),
        adminDiscussion: by.css('div.panel-collapse.collapse.in  div#AdministrativeDiscussion textarea'),
        profPracDiscussionLbl: by.css('div.panel-collapse.collapse.in div#ProfessionalPracticeDiscussion label'),
        profPracDiscussion: by.css('div.panel-collapse.collapse.in div#ProfessionalPracticeDiscussion textarea'),
        newSupervisionDateLbl: by.css('div.panel-collapse.collapse.in div#supervisionDate label'),
        newSupervisionDate: by.css('div.panel-collapse.collapse.in div#supervisionDate input.dateonlypicker'),

        addSupervisionSubmit: by.css('#supervision-content button.btn.btn-warning'),

        createdSupervision: by.css('div#supervision-content .panel.panel-default'),
        crSupTitle: by.css('.panel-heading .panel-title'),
        userBanerLastSupDate: by.css('.social-worker-banner span.text-right strong'),
    },

    navigateSupervision: function () {
        config = jsonfile.readFileSync('./support/'+featureConfig);
        return driver.wait(until.elementsLocated(page.supervision_page.elements.supervisionLink), 10000).then(function () {
            return driver.findElement(page.supervision_page.elements.supervisionLink).click().then(function () {
                return driver.wait(until.elementsLocated(page.supervision_page.elements.supervisionPageTitle), 10000).then(function () {
                    return driver.findElement(page.supervision_page.elements.supervisionPageTitle).getText().then(function (pgTitle) {
                        expect(pgTitle).to.contain('Supervisions');
                        return driver.findElement(page.supervision_page.elements.supervisionPageCount).getText().then(function (supInitCount) {
                            supInitCount = supInitCount.replace("(", "").replace(")", "").replace(" ", "").trim();
                            config.Supervision.InitialCount = supInitCount;
                            console.log('supInitCount : ', supInitCount);
                            return jsonfile.writeFileSync('./support/config.json', config);
                        });
                    });
                });
            });
        });
    },

    createNewSupervision: function () {

        return driver.wait(until.elementsLocated(page.supervision_page.elements.newSupervisionBtn), 10000).then(function () {
            return driver.findElement(page.supervision_page.elements.newSupervisionBtn).click().then(function () {
                return driver.wait(until.elementsLocated(page.supervision_page.elements.newSupervisionSection), 10000).then(function () {

                    driver.findElement(page.supervision_page.elements.newSupervisionSecAccord).isDisplayed();
                    driver.findElement(page.supervision_page.elements.newSupervisionSectionPpanel).isDisplayed();
                    driver.findElement(page.supervision_page.elements.reflectiveDiscussion).isDisplayed();

                    driver.findElement(page.supervision_page.elements.reflectiveDiscussion).getText().then(function (reflectiveDiscussion) {
                        expect(reflectiveDiscussion).to.contain('Reflective Discussion');
                    });
                    driver.findElement(page.supervision_page.elements.adminDiscussionLbl).getText().then(function (adminDiscussionLbl) {
                        expect(adminDiscussionLbl).to.contain('Administrative discussion');
                    });
                    driver.findElement(page.supervision_page.elements.profPracDiscussionLbl).getText().then(function (profPracDiscussionLbl) {
                        expect(profPracDiscussionLbl).to.contain('Professional practice discussion');
                    });
                    driver.findElement(page.supervision_page.elements.newSupervisionDateLbl).getText().then(function (newSupervisionDateLbl) {
                        expect(newSupervisionDateLbl).to.contain('Supervision Date');
                    });
                    driver.sleep(500);
                    driver.findElement(page.supervision_page.elements.adminDiscussion).sendKeys('Admin Discussion Test');
                    driver.findElement(page.supervision_page.elements.profPracDiscussion).sendKeys('Admin Discussion Test');
                    return driver.findElement(page.supervision_page.elements.newSupervisionDate).click().then(function () {
                        driver.sleep(500);
                        var date = new Date();
                        day = date.getDate();
                        console.log('date: ', date);

                        var curdate = dateFormat(date, "dd/mm/yyyy");
                        config.Supervision.createDate = curdate;
                        console.log('curdate :', curdate);

                        var curTime = dateFormat(date, "HH:MM")
                        console.log('curTime :', curTime);
                        config.Supervision.createTime = curTime;

                        jsonfile.writeFileSync('./support/config.json', config);

                        helpers.gridClickDate('cur', day);
                        return driver.findElement(page.supervision_page.elements.newSupervisionDateLbl).click();
                    });
                });
            });
        });
    },

    submitSupervision: function () {
        driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');');
        driver.sleep(1000);
        return driver.wait(until.elementsLocated(page.supervision_page.elements.addSupervisionSubmit), 10000).then(function () {
            return driver.findElement(page.supervision_page.elements.addSupervisionSubmit).click().then(function () {
                return driver.sleep(1200);
            });
        });
    },

    verifyCreatedSupervision: function (User) {
        return driver.wait(until.elementsLocated(page.supervision_page.elements.supervisionPageCount), 10000).then(function () {
            return driver.findElement(page.supervision_page.elements.supervisionPageCount).getText().then(function (supFinalCount) {
                config = jsonfile.readFileSync('./support/'+featureConfig);
                initCount = config.Supervision.InitialCount;
                initCount = parseInt(initCount) + 1;
                console.log('supFinalCount : ', supFinalCount);
                console.log('initCount : ', initCount);
                return expect(supFinalCount).to.contain(initCount);
            });
        });
    },

    verifyLastSupervised: function () {
        driver.sleep(500);
        return driver.wait(until.elementsLocated(page.supervision_page.elements.userBanerLastSupDate), 10000).then(function () {
            return driver.findElement(page.supervision_page.elements.userBanerLastSupDate).getText().then(function (userBanerLastSupDate) {
                config = jsonfile.readFileSync('./support/'+featureConfig);
                createDate = config.Supervision.createDate;
                console.log('createDate : ', createDate);
                createTime = config.Supervision.createTime;
                console.log('createTime : ', createTime);
                console.log('userBanerLastSupDate : ', userBanerLastSupDate);
                return expect(userBanerLastSupDate).to.contain(createDate + ' at ' + createTime);
            });
        });
    }

}