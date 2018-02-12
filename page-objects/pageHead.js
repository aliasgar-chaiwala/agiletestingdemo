module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        searchInput: by.css('gsfi'),
        searchResultLink: by.css('#lst-ib'),//'div.g > h3 > a')
        newIcon: by.css('.nav-icon-new'),
        newIconList: by.css('.dropdown-new.open .menu-new.open ul'),
        newIconListItem: by.css('li a'),
        navigateEvForm: by.css('.event-form'),
        addPerson: by.css('li[aria-label="Add a Person"]'),
        addProfessional: by.css('li[aria-label="Add a Professional"] a'),
        search: by.css('[id="nav-global-search-box"]'),
        addOrganisation: by.css('[aria-label="Add a Organisation"] a'),
        globalSearch: by.css('input[id="nav-global-search-box"]'),
        personSelect: by.css('div[name="searchPersonSection"] ul li:nth-child(1) a'),
        professionalSelect: by.css('div[name="searchProfSection"] ul li:nth-child(1) a'),
        organisationSelect: by.css('div[name="searchOrgSection"] ul li:nth-child(1) a'),
        singleAssessment: by.css('li[aria-label="create new Single Assessment"]'),
        stage2Assessment: by.css('li[aria-label="create new Stage 2 Assessment"]'),
        childProtection: by.css('li[aria-label="create new Child Protection Plan"]'),
        createContactRecord: by.css('li[aria-label="create new Contact Record"] a'),
        contactForm: by.css('[aria-label="Contact Record"]'),
        s47Enquiry: by.css('li[aria-label="create new S47 Enquiry"] a'),
        strategyDiscussion: by.css('li[aria-label="create new Strategy Discussion"] a'),
        SDQ: by.css('li[aria-label="create new Strengths and Difficulties Questionnaire"] a'),
        workRequest: by.css('.task-alert-panel .alert-white'),
        onDuty: by.css('div.onoffswitch'),
        notificationIcon: by.css('.nav-icon-notification'),

        notifications: by.css('.app-content h2.page-title > span'),
        messageIcon: by.css('.nav-icon-messages'),
        messageInbox: by.css('.app-content h2.page-title > span:nth-child(1)'),
        appointmentIcon: by.css('.nav-icon-appointments'),
        appointmentText: by.css('h2[arial-label="All appointments section, you can get all appointment list below"]'),
        createAdultSafeguardingPlan: by.css('[aria-label="create new Adult Safeguarding Plan"]'),
        adultSafeguardingPlan: by.css('[aria-label="Adult Safeguarding Plan"]'),
        financePB: by.css('#maincontent div.m-t-md.m-l-sm > h4'),
        //  pageHeadMoreLink: by.css('#maincontent div.m-t-md.m-l-sm #more-link'),

        financePBMoreLink: by.css('#maincontent div.m-t-md.m-l-sm #more-link'),
        equipment: by.css('[aria-label="Provision"]'),
        mentalCapacity: by.css('[data-bind*="hideMentalCapacity"] section h4'),
        capacityMoreLink: by.css('[data-bind*="createMentalCapacities"]'),
        //--------------global search - list user section----------------
        searchListUserSection: by.css('div[name="searchUserSection"] ul'),
        searchListUserListItem: by.css('li a span.name'),

        searchListGroupSection: by.css('div[name="searchGroupSection"] ul'),
        searchListGroupListItem: by.css('li a span.name'),

        allApp: by.css('[id="htAppToggle"]'),
        services: by.css('#htAppContainer > div > div > a.ht-app.ht-app-services-directory > span'),
        provisionMore: by.css('[name="Finance"] > div:nth-child(6) [id="more-link"]'),
        provisionLabel: by.css('.provision-app > section > div > h2'),
        createGroup: by.css('li[aria-label="Create a Group"] a'),
        createPIR: by.css('[aria-label="create new Placement Information Record"] a'),
        pirForm: by.css('[aria-label="Placement Information Record"]'),
        health: by.css('[name="Health_Section"] h3:nth-child(1)'),
        healthMoreLink: by.css('[name="Health_Section"] [class="align-right small"]:nth-child(3) a'),
        dutyWorkToast: by.css('div.task-alert-panel'),
        createLeaveCareAssessment: by.css('li[aria-label="create new Leaving Care Assessment"] a'),
        leaveCareAssessForm: by.css('[aria-label="Leaving Care Assessment"]'),
        //-------------
        dashboardMe: by.css('.me-container a.nav-icon.nav-icon-me'),
        dashboardMeDropdown: by.css('.me-container div.dropdown-me.open'),
        dashboardMeDropdownListItem: by.css('li'),
        logoutBlock: by.css('.loginColumns .panel-primary #identityProviders'),
        // logoutBlockTitle: by.css('.loginColumns .panel-title'),
        logoutBlockTitle: by.css('.loginColumns .panel-body h3.signin'),
        activityOption: by.css('[data-bind="on.click:activityClicked()"]'),
        exploreCase: by.css('[class="icon-micro icon-flux-chevron-right"]'),
        arrangePlacements: by.css('[data-bind*="/placements"]'),
        placementList: by.css('h2[class="page-title"]'),
        childInNeed: by.css('li[aria-label="create new Child in Need Plan"]'),
        formStartDate: by.css('[class="header-block"] [id="reusableDatepicker"]'),
        createConference: by.css('li[aria-label="create new Conference"] a'),
        conferenceFormLabel: by.css('[aria-label="Conference"]'),
        statReturnicon: by.css('.ht-app-stat'),
        aliasText: by.css('span[class*="alias"] span[data-bind*="alias"]'),
        missingIcon: by.css('div[name="searchPersonSection"] div.empId > i.icon-missing'),
        personNameLocator: by.css('div[name="searchPersonSection"] ul li a span strong')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    addPersonNavigation: function () {
        //  console.log("navigating method in pagehead and waiting");
        //  driver.manage().timeout().implicitlyWait(35000);
        return driver.wait(until.elementLocated(page.pageHead.elements.newIcon), 10000).then(function () {
            return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
                return driver.wait(until.elementLocated(page.pageHead.elements.addPerson), 10000).then(function () {
                    return driver.findElement(page.pageHead.elements.addPerson).click().then(function () {
                        //console.log('.5');
                        driver.sleep(500);
                        driver.findElement(page.pageHead.elements.search).click()
                        return driver.sleep(500);
                    });
                });
            });// return a promise so the calling function knows the task has completed
        });
    },

    createGroupNavigation: function () {
        return driver.wait(until.elementLocated(page.pageHead.elements.newIcon), 10000).then(function () {
            return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
                return driver.wait(until.elementLocated(page.pageHead.elements.createGroup), 10000).then(function () {
                    return driver.findElement(page.pageHead.elements.createGroup).click().then(function () {
                        //console.log('.5');
                        driver.sleep(500);
                        driver.findElement(page.pageHead.elements.search).click()
                        return driver.sleep(500);
                    });
                });
            });
        });
    },

    addProfessionalNavigation: function () {
        //  console.log("navigating method in pagehead and waiting");
        //  driver.manage().timeout().implicitlyWait(35000);
        return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
            driver.wait(until.elementLocated(page.pageHead.elements.addProfessional), 10000);
            return driver.findElement(page.pageHead.elements.addProfessional).click().then(function () {
                return driver.findElement(page.pageHead.elements.search).click();
            });
        });
    },

    addOrganisationNavigation: function () {
        //  console.log("navigating method in pagehead and waiting");
        //  driver.manage().timeout().implicitlyWait(35000);
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.addOrganisation), 10000);
                return driver.findElement(page.pageHead.elements.addOrganisation).click().then(function () {
                    return driver.findElement(page.pageHead.elements.search).click();
                });
            });
    },

    personSearch: function (person) {
        //  console.log("Person: ", person);
        return driver.wait(until.elementsLocated(page.pageHead.elements.globalSearch), 15000).then(function () {
            return driver.findElement(page.pageHead.elements.globalSearch).sendKeys(person);
        });
    },

    selectCategoryElement: function (input) {

        if (input === config.Professional.BasicInfo.NewName) {
            //  console.log("Professional Search");
            driver.sleep(1000);
            return driver.wait(until.elementsLocated(page.pageHead.elements.professionalSelect), 7000).then(function () {
                return driver.findElement(page.pageHead.elements.professionalSelect).click();
            });
        }
        else if (input === config.Organisation.BasicInfo.NewName) {
            //console.log("Organisation Search");
            driver.sleep(1000);
            return driver.wait(until.elementsLocated(page.pageHead.elements.organisationSelect), 7000).then(function () {
                return driver.findElement(page.pageHead.elements.organisationSelect).click();
            });
        }
        else if (input.includes(config.Group.GroupName)) {
            // console.log("Group search");
            return driver.wait(until.elementLocated(page.pageHead.elements.searchListGroupSection), 8000).then(function () {
                // console.log('selectCategoryGroup');
                helpers.gridClick(page.pageHead.elements.searchListGroupSection, page.pageHead.elements.searchListGroupListItem, input);
                return driver.sleep(2000);
            });
        }
        else {
            driver.sleep(1000);
            //  console.log("In last else with input: ", input);
            return driver.wait(until.elementsLocated(page.pageHead.elements.personSelect), 7000).then(function () {
                return driver.findElement(page.pageHead.elements.personSelect).click();
            });
        }
    },

    singleAssessmentFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
            driver.wait(until.elementLocated(page.pageHead.elements.singleAssessment), 20000);
            return driver.findElement(page.pageHead.elements.singleAssessment).click().then(function () {
                return driver.findElement(page.pageHead.elements.search).click().then(function () {
                    return driver.findElement(page.pageHead.elements.search).clear().then(function () {
                        //console.log("new wait");
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 20000);
                    });
                });
            });
        });
    },

    contactRecordFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.createContactRecord), 10000);
                // return a promise so the calling function knows the task has completed
                return driver.findElement(page.pageHead.elements.createContactRecord).click().then(function () {
                    driver.wait(until.elementLocated(page.pageHead.elements.contactForm), 10000);
                    return driver.findElement(page.pageHead.elements.search).click().then(function () {
                        return driver.findElement(page.pageHead.elements.search).clear().then(function () {
                            return driver.wait(until.elementLocated(page.pageHead.elements.contactForm), 10000);
                        });
                    });
                });
            });
    },

    s47EnquiryFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.s47Enquiry), 20000);
                return driver.findElement(page.pageHead.elements.s47Enquiry).click()
                    .then(function () {
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 40000);
                                    });
                            });
                    });
            });
    },

    dutyWorking: function (workRequest) {
        var dutyToast = driver.findElement(page.pageHead.elements.dutyWorkToast);
        return dutyToast.getAttribute('class').then(function (toastAttributes) {
            console.log('Attributes in toast :', toastAttributes);
            if (toastAttributes.includes('hide-element')) {
                return driver.sleep(500);
            } else {
                driver.findElement(page.pageHead.elements.dashboardMe).click();
                driver.wait(until.elementLocated(page.pageHead.elements.onDuty), 20000);
                return driver.findElement(page.pageHead.elements.onDuty).click().then(function () {
                    return driver.findElement(page.pageHead.elements.globalSearch).click();
                });
            }
        });
    },

    navigateStrategyDiscussionForm: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
            return driver.wait(until.elementLocated(page.pageHead.elements.strategyDiscussion), 10000)
                .then(function () {
                    return driver.findElement(page.pageHead.elements.strategyDiscussion).click()
                        .then(function () {
                            return driver.findElement(page.pageHead.elements.search).click()
                                .then(function () {
                                    driver.findElement(page.pageHead.elements.search).clear()
                                    return driver.sleep(500);
                                });
                        });
                });
        });
    },

    childProtectionPlanNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.childProtection), 20000);
                return driver.findElement(page.pageHead.elements.childProtection).click()
                    .then(function () {
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 20000);
                                    });

                            });
                    });
            });
    },

    notificationNavigation: function () {
        return driver.findElement(page.pageHead.elements.notificationIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.notifications), 20000);
                return driver.findElement(page.pageHead.elements.notifications).getText()
                    .then(function (notificationsName) {
                        return expect(notificationsName).to.equal("Notifications");
                    });
            });
    },

    messagesNavigation: function () {
        driver.sleep(4000);
        return driver.findElement(page.pageHead.elements.messageIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.messageInbox), 20000);
                return driver.findElement(page.pageHead.elements.messageInbox).getText()
                    .then(function (messageInboxName) {
                        return expect(messageInboxName).to.equal("My Inbox");
                    });
            });
    },

    appointmentsNavigation: function () {
        driver.sleep(4000);
        return driver.findElement(page.pageHead.elements.appointmentIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.appointmentText), 20000);
                return driver.findElement(page.pageHead.elements.appointmentText).getText()
                    .then(function (appointment) {
                        return expect(appointment).to.equal("All appointments");
                    });
            });
    },

    adultSafeguardingPlanNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.createAdultSafeguardingPlan), 10000);
                return driver.findElement(page.pageHead.elements.createAdultSafeguardingPlan).click()
                    .then(function () {
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementLocated(page.pageHead.elements.adultSafeguardingPlan), 10000)
                                            .then(function () {
                                                //       return driver.wait(until.elementsLocated(page.pageHead.elements.formStartDate), 10000)
                                                //       .then(function (){
                                                return driver.sleep(3000);
                                                //       })
                                            })
                                    });
                            });
                    });
            });
    },

    selectCategoryUser: function (USERNAME) {
        return driver.wait(until.elementLocated(page.pageHead.elements.searchListUserSection), 5000).then(function () {
            //console.log('selectCategoryUser');
            return helpers.gridClick(page.pageHead.elements.searchListUserSection, page.pageHead.elements.searchListUserListItem, USERNAME);
        });
    },

    personalBudgetNavigation: function () {
        driver.wait(until.elementLocated(page.pageHead.elements.financePBMoreLink), 15000);
        return driver.findElement(page.pageHead.elements.financePB).getText()
            .then(function (personalBudget) {
                console.log("personalBudget:", personalBudget);
                expect(personalBudget).to.equal("Personal budget");
                driver.wait(until.elementLocated(page.pageHead.elements.financePBMoreLink), 15000);
                return driver.findElement(page.pageHead.elements.financePBMoreLink).click()
            });
    },

    servicesNavigation: function () {
        return driver.findElement(page.pageHead.elements.allApp).click()
            .then(function () {
                driver.sleep(800);
                return driver.findElement(page.pageHead.elements.services).click();
            });
    },

    equipmentNavigation: function () {

        driver.wait(until.elementLocated(page.pageHead.elements.equipment), 15000);
        return driver.findElement(page.pageHead.elements.equipment).getText()
            .then(function (equipment) {
                expect(equipment).to.equal("Equipment")
                driver.findElement(page.pageHead.elements.equipment).click();
                return driver.sleep(5000);
            });
    },

    provisionNavigation: function () {
        return driver.wait(until.elementsLocated(page.pageHead.elements.provisionMore), 10000)
            .then(function () {
                driver.findElement(page.pageHead.elements.provisionMore).click();
                return driver.wait(until.elementLocated(page.pageHead.elements.provisionLabel), 10000)
            });
    },

    pirFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.createPIR), 10000);
                // return a promise so the calling function knows the task has completed
                return driver.findElement(page.pageHead.elements.createPIR).click()
                    .then(function () {
                        driver.wait(until.elementLocated(page.pageHead.elements.pirForm), 10000);
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementLocated(page.pageHead.elements.pirForm), 10000);
                                    });
                            });
                    });
            });
    },

    mentalCapacityNavigation: function () {
        driver.wait(until.elementLocated(page.pageHead.elements.mentalCapacity), 15000);
        return driver.findElement(page.pageHead.elements.mentalCapacity).getText()
            .then(function (mentalCapacity) {
                expect(mentalCapacity).to.equal("Mental capacity")
                driver.wait(until.elementLocated(page.pageHead.elements.capacityMoreLink), 15000);
                return driver.findElement(page.pageHead.elements.capacityMoreLink).click()
            });
    },

    healthNavigation: function () {
        driver.wait(until.elementLocated(page.pageHead.elements.health), 15000);
        return driver.findElement(page.pageHead.elements.health).getText()
            .then(function (health) {
                expect(health).to.equal("Health");
                driver.wait(until.elementLocated(page.pageHead.elements.healthMoreLink), 15000);
                driver.findElement(page.pageHead.elements.healthMoreLink).click();
                return driver.sleep(1000);
            });
    },

    leaveCareAssessmentNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.createLeaveCareAssessment), 10000);
                // return a promise so the calling function knows the task has completed
                return driver.findElement(page.pageHead.elements.createLeaveCareAssessment).click()
                    .then(function () {
                        driver.wait(until.elementLocated(page.pageHead.elements.leaveCareAssessForm), 10000);
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementLocated(page.pageHead.elements.leaveCareAssessForm), 10000);
                                    });
                            });
                    });
            });
    },

    logout: function () {
        return driver.wait(until.elementLocated(page.pageHead.elements.dashboardMe), 25000).then(function () {
            return driver.findElement(page.pageHead.elements.dashboardMe).then(function (MeIcon) {
                driver.actions().mouseMove(MeIcon).perform();
                return driver.wait(until.elementLocated(page.pageHead.elements.dashboardMeDropdown), 10000).then(function () {
                    helpers.clickIncludesGrid(page.pageHead.elements.dashboardMeDropdown, page.pageHead.elements.dashboardMeDropdownListItem, "Logout");
                    driver.wait(until.elementLocated(page.pageHead.elements.logoutBlock), 25000);
                    return driver.wait(until.elementLocated(page.pageHead.elements.logoutBlockTitle), 25000).then(function () {
                        return driver.findElement(page.pageHead.elements.logoutBlockTitle).getText().then(function (BlockTitle) {
                            console.log('logout BlockTitle: ', BlockTitle);
                            // expect(BlockTitle).to.equal("One Social Care : Logout");

                            expect(BlockTitle).to.equal("You have now logged out.");
                            return driver.getCurrentUrl().then(function (pageUrl) {
                                expect(pageUrl).to.contain("oauth2/logout");
                            });
                        });
                    });
                });
            });
        });
    },

    navigateTo: function (ItemToClick) {
        /**newIcon: by.css('.nav-icon-new'),
        newIconList:by.css('.dropdown-new.open .menu-new.open ul.submenu-new'),
        newIconListItem:by.css('li a') */
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.sleep(1000)
                return driver.wait(until.elementLocated(page.pageHead.elements.newIconList), 10000)
                    .then(function () {
                        driver.sleep(1500)
                        return helpers.gridClick(page.pageHead.elements.newIconList, page.pageHead.elements.newIconListItem, ItemToClick)
                            .then(function () {
                                return driver.wait(until.elementLocated(page.pageHead.elements.navigateEvForm), 10000)
                                    .then(function () {
                                        driver.findElement(page.pageHead.elements.search).click();
                                        return driver.sleep(3000);
                                    });
                            });
                    });
            });
    },

    navigateToPlacements: function () {
        return driver.wait(until.elementLocated(page.pageHead.elements.activityOption), 15000)
            .then(function () {
                driver.findElement(page.pageHead.elements.activityOption).click()
                return driver.wait(until.elementLocated(page.pageHead.elements.exploreCase), 5000)
                    .then(function () {
                        driver.findElement(page.pageHead.elements.exploreCase).click()
                        return driver.wait(until.elementLocated(page.pageHead.elements.arrangePlacements), 10000)
                            .then(function () {
                                driver.findElement(page.pageHead.elements.arrangePlacements).click()
                                return driver.wait(until.elementLocated(page.pageHead.elements.placementList), 10000)
                            });
                    });
            });
    },

    childInNeedPlanNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.childInNeed), 20000);
                return driver.findElement(page.pageHead.elements.childInNeed).click()
                    .then(function () {
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 20000);
                                    });
                            });
                    });
            });
    },

    stage2AssessmentFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
            driver.wait(until.elementLocated(page.pageHead.elements.stage2Assessment), 20000);
            return driver.findElement(page.pageHead.elements.stage2Assessment).click().then(function () {
                return driver.findElement(page.pageHead.elements.search).click().then(function () {
                    return driver.findElement(page.pageHead.elements.search).clear().then(function () {
                        //console.log("new wait");
                        return driver.wait(until.elementsLocated(page.contactRecord_page.elements.subjectInPill), 20000);
                    });
                });
            });
        });
    },

    conferenceFormNavigation: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click()
            .then(function () {
                driver.wait(until.elementLocated(page.pageHead.elements.createConference), 10000);
                // return a promise so the calling function knows the task has completed
                return driver.findElement(page.pageHead.elements.createConference).click()
                    .then(function () {
                        driver.wait(until.elementLocated(page.pageHead.elements.conferenceFormLabel), 10000);
                        return driver.findElement(page.pageHead.elements.search).click()
                            .then(function () {
                                return driver.findElement(page.pageHead.elements.search).clear()
                                    .then(function () {
                                        return driver.wait(until.elementLocated(page.pageHead.elements.conferenceFormLabel), 10000);
                                    });
                            });
                    });
            });
    },

    navigateSDQForm: function () {
        return driver.findElement(page.pageHead.elements.newIcon).click().then(function () {
            return driver.wait(until.elementLocated(page.pageHead.elements.SDQ), 10000)
                .then(function () {
                    return driver.findElement(page.pageHead.elements.SDQ).click()
                        .then(function () {
                            return driver.findElement(page.pageHead.elements.search).click()
                                .then(function () {
                                    driver.findElement(page.pageHead.elements.search).clear()
                                    return driver.sleep(500);
                                });
                        });
                });
        });
    },
    navigateTostatReturnPage: function () {
        return driver.findElement(page.pageHead.elements.allApp).click()
            .then(function () {
                return driver.wait(until.elementIsVisible(driver.findElement(page.pageHead.elements.statReturnicon)), 2000, 'Stat Return Icon is not present')
                    .then(function () {
                        return driver.findElement(page.pageHead.elements.statReturnicon).click();
                    });
            });
    },
    verifySearchResult: function (keytoVerify) {
        return driver.wait(until.elementLocated(page.pageHead.elements.aliasText), 10000).then(function () {
            return driver.findElement(page.pageHead.elements.aliasText).getText().then(function (actualAliasText) {
                return expect(actualAliasText).to.be.equal(aliasName);
            });
        });
    },

    verifyMissingIcon: function (person, flag) {
        return driver.wait(until.elementsLocated(page.pageHead.elements.personNameLocator), 7000).then(function () {
            return driver.wait(until.elementTextIs(driver.findElement(page.pageHead.elements.personNameLocator), person), 6000, 'personSelect Element text is not matching')
                .then(function () {
                    return driver.wait(until.elementLocated(page.pageHead.elements.missingIcon), 10000).then(function (missingIconElem) {
                        return driver.wait(until.elementIsVisible(missingIconElem), 6000, 'Missing Icon Element is not visible')
                    })
                }).then(function () {
                    return driver.findElement(page.pageHead.elements.globalSearch).clear();
                });
        });
    }
}