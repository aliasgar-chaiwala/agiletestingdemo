module.exports = {

    elements: {
        createGroupPageTitle: by.css('div.header-block h1'),//Create new group
        newGroupSection: by.css('div.panel-generic'),//--------need name
        newGroupTitleInput: by.css('div.panel-title input'),

        newGroupDescLabel: by.css('div.panel label[for="plan-overview"]'),//-----------group desc label named label for plan-overview -changes needed
        newGroupDescrip: by.css('div.panel textarea'),

        newGroupSubjectInputLabel: by.css('div.subject-panel .panel-title'),
        newGroupSubjectInput: by.css('div.subject-panel .selectize-control input'),

        newGroupSubjectDDList: by.css('div.subject-panel .selectize-dropdown .selectize-dropdown-content'),
        newGroupSubjectDDListItem: by.css('div.option'),

        newGroupSubjectPill1: by.css('div.subject-panel .selectize-control .selectize-input.items.not-full span[class*="person-tag-"]:nth-child(1)'),
        newGroupSubjectPill2: by.css('div.subject-panel .selectize-control .selectize-input.items.not-full span[class*="person-tag-"]:nth-child(2)'),

        newGroupSubmit: by.css('button.btn.btn-warning'), //----------button name tag
        newGroupButtonCaret: by.css('button.btn.btn-warning.dropdown-toggle'),
        newGroupAbandon: by.css('div.action-bar ul li a'),
        //-----------------
        groupBanner: by.css('div.group-banner'),
        groupBannerGrpTitle: by.css('div.group-banner .name span.given-name'),
        groupBannerNoOfMembers: by.css('div.group-banner .group-description span.address-location-postcode'),
        groupBannerDescription: by.css('div.group-banner .group-description span.address-line'),
        groupFacetSection: by.css('div.container-fluid'),
        groupFacetGroupMembersSection: by.css('div[name="Group-Members-section"]'),
        groupFacetGroupMembersPill1: by.css('div[name="Group-Members-section"] div.tag-group span:nth-child(1)'),
        groupFacetGroupMembersPill2: by.css('div[name="Group-Members-section"] div.tag-group span:nth-child(2)'),
    },

    verifyCreateGroupPage: function () {
        return driver.wait(until.elementLocated(page.group_page.elements.createGroupPageTitle), 7000).then(function () {
            return driver.wait(until.elementLocated(page.group_page.elements.newGroupSection), 7000).then(function () {
                return driver.wait(until.elementLocated(page.group_page.elements.newGroupSubjectInput), 7000).then(function () {
                    driver.findElement(page.group_page.elements.createGroupPageTitle).getText().then(function (createGroupTitle) {
                        expect(createGroupTitle).to.contain('Create new group');
                    });
                    driver.findElement(page.group_page.elements.newGroupSection).isDisplayed();
                    driver.findElement(page.group_page.elements.newGroupDescLabel).getText().then(function (newGroupDescLabel) {
                        expect(newGroupDescLabel).to.contain('Description');
                    });
                    driver.findElement(page.group_page.elements.newGroupSubjectInputLabel).getText().then(function (newGroupSubjectInputLabel) {
                        expect(newGroupSubjectInputLabel).to.contain('Subjects');
                    });
                    driver.findElement(page.group_page.elements.newGroupSubmit).isDisplayed();
                    driver.findElement(page.group_page.elements.newGroupButtonCaret).click();
                    return driver.findElement(page.group_page.elements.newGroupAbandon).isDisplayed();
                });
            });
        });
    },

    createGroup: function (groupTitle) {
        return driver.wait(until.elementLocated(page.group_page.elements.createGroupPageTitle), 7000).then(function () {
            return driver.wait(until.elementLocated(page.group_page.elements.newGroupSection), 7000).then(function () {
                return driver.wait(until.elementLocated(page.group_page.elements.newGroupTitleInput), 5000).then(function () {
                    driver.findElement(page.group_page.elements.newGroupTitleInput).sendKeys(groupTitle);
                    driver.findElement(page.group_page.elements.newGroupDescrip).sendKeys(groupTitle + ' Description');

                    driver.findElement(page.group_page.elements.newGroupSubjectInput).sendKeys(config.PersonDetails.Name);
                    driver.sleep(1500);
                    return driver.wait(until.elementLocated(page.group_page.elements.newGroupSubjectDDList), 5000).then(function () {
                        //driver.findElement(page.group_page.elements.newGroupSubjectInput).sendKeys(selenium.Key.ENTER);
                        helpers.gridClick(page.group_page.elements.newGroupSubjectDDList, page.group_page.elements.newGroupSubjectDDListItem, config.PersonDetails.Name).then(function () {
                            // driver.findElement(page.group_page.elements.newGroupSubjectPill1).isDisplayed()
                            driver.sleep(1000);
                            driver.wait(until.elementLocated(page.group_page.elements.newGroupSubjectPill1), 5000).then(function () {
                                driver.findElement(page.group_page.elements.newGroupSubjectPill1).getText().then(function (pill1Text) {
                                    expect(pill1Text).to.contain(config.PersonDetails.Name);
                                });
                            });
                        });
                        driver.sleep(1000);
                        driver.findElement(page.group_page.elements.newGroupSubjectInput).sendKeys(config.PersonDetails.person1.Name);
                        driver.sleep(1500);
                        driver.wait(until.elementLocated(page.group_page.elements.newGroupSubjectDDList), 5000).then(function () {
                            helpers.gridClick(page.group_page.elements.newGroupSubjectDDList, page.group_page.elements.newGroupSubjectDDListItem, config.PersonDetails.person1.Name).then(function () {
                                driver.sleep(1000);
                                // driver.findElement(page.group_page.elements.newGroupSubjectPill2).isDisplayed()
                                driver.wait(until.elementLocated(page.group_page.elements.newGroupSubjectPill2), 5000).then(function () {
                                    driver.findElement(page.group_page.elements.newGroupSubjectPill2).getText().then(function (pill2Text) {
                                        expect(pill2Text).to.contain(config.PersonDetails.person1.Name);
                                    });
                                });
                            });
                        });
                        driver.findElement(page.group_page.elements.newGroupSubmit, 'Submit').click();
                        return driver.sleep(2000);
                    });
                    //driver.findElement(page.group_page.elements.newGroupSubmit).click();
                });
            });
        });
    },

    verifyGroupFacet: function (groupName) {
        return driver.wait(until.elementLocated(page.group_page.elements.groupBanner), 7000).then(function () {
            return driver.wait(until.elementLocated(page.group_page.elements.groupBannerGrpTitle), 7000).then(function () {
                return driver.wait(until.elementLocated(page.group_page.elements.groupFacetSection), 7000).then(function () {
                    driver.findElement(page.group_page.elements.groupBannerGrpTitle).getText().then(function (GroupTitle) {
                        expect(GroupTitle).to.contain(groupName);
                    });
                    driver.findElement(page.group_page.elements.groupBannerDescription).getText().then(function (BannerDescription) {
                        expect(BannerDescription).to.contain(groupName + ' Description');
                    });
                    driver.findElement(page.group_page.elements.groupBannerNoOfMembers).getText().then(function (NoOfMembers) {
                        expect(NoOfMembers).to.contain('No of members 2');
                    });
                    return driver.wait(until.elementLocated(page.group_page.elements.groupFacetGroupMembersSection), 7000).then(function () {
                        return driver.findElement(page.group_page.elements.groupFacetGroupMembersPill1).getText().then(function (MembersPill1) {
                            expect(MembersPill1).to.contain(config.PersonDetails.Name);
                            return driver.findElement(page.group_page.elements.groupFacetGroupMembersPill2).getText().then(function (MembersPill2) {
                                expect(MembersPill2).to.contain(config.PersonDetails.person1.Name);
                            });
                        });
                    });
                });
            });
        });
    },
}