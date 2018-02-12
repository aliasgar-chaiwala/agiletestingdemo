module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        //-------------------------------------FOR Event CASENOTES-------------------------
        casenoteIcon: by.css('span.icon-details-casenotes'),
        casenotePageTitle: 'Person Life Events | One Social Care',
        casenotePageHeading: by.css('div.events-app-container h2.page-title'),
        casenoteSection: by.css('div.events-app-container'),

        casenoteFilter: by.css('.person-toolbar .icon-filter'),
        casenoteFilterPanel: by.css('.filter-content.open'),
        casenoteFilterPanelClose: by.css('.filter-content .filter-close'),
        casenoteFilterPanelReset: by.css('button[name="reset-filter "]'),
        casenoteFilterPanelCnAccordion: by.css('.filter-content.open .panel-dashboard .accordion-toggle'),
        //------------Timeline----------------
        timelineIcon: by.css('.person-toolbar .hatrickIcons.icon-flux-capacitor'),
        timelinePanel: by.css('div.timeline-container'),

        timelineViewDD: by.css('div.timeline-container .periodMenu .dropdown-toggle'),
        timelineViewDDList: by.css('.timeline-container .periodMenu.open .dropdown-menu'),
        timelineViewDDItem: by.css('li'),

        //------------------------------------
        createCasenoteIcon: by.css('a#new-casenote.icon-new-note'),
        newCasenoteSection: by.css('div.event-form.create-new-casenote'), //need name tag`

        addCaseNoteTitle: by.css('h3.create-new-title'), ////--- header Add new casenote

        caseNoteTitleLabel: by.css('div[name="casenote-title-row"] .control-label'),
        caseNoteTitleInput: by.css('div[name="casenote-title-row"] input'),

        casenoteTypeDropDownLabel: by.css('div[name="casenote-type-row"] label.control-label'),
        casenoteTypeDropDown: by.css('div[name="casenoteType"]'),

        caseNoteForLabel: by.css('div[name="casenote-for-row"] .control-label'),
        caseNoteForInput: by.css('div[name="casenote-for-row"] input'),
        caseNoteForDropList: by.css('div[name="casenote-for-row"] .selectize-dropdown .selectize-dropdown-content'),
        caseNoteForDropListItem: by.css('div.option'),
        caseNoteForPersonPill: by.css('div[name="casenote-for-row"] div[class*="person-tag"]'),

        caseNoteDateTimeLabel: by.css('div[name="casenote-date-row"] .control-label'),
        caseNoteDateTimePicker: by.css('div[name="casenote-date-row"] .datepicker-panel i'),

        caseNotemarkSignificantText: by.css('div[name="mark-significant-check"] span'),
        caseNotemarkSignificantCheck: by.css('div[name="mark-significant-check"] div.white-check'),

        casenoteNotesLabel: by.css('div[name="casenote-notes-row"] .control-label'),
        casenoteNotesInput: by.css('div[name="casenote-notes-row"] .markdown-textArea .markdown-area'),

        casenoteNotesSearchList: by.css('div[name="casenote-notes-row"] .dropdown-search.open .search-results'),
        casenoteNotesSearchItem: by.css('ul li a'),
        casenoteNotesPersonPill: by.css('div[name="casenote-notes-row"] .markdown-textArea p a[class*="person-tag"]'),

        casenoteAttachmentsLabel: by.css('div[name="casenote-attachments-row"] .control-label'),
        casenoteAttachmentsButton: by.css('div[name="casenote-attachments-row"] button'),

        createCasenoteSubmit: by.css('button[id="createCasenote "]'),

        //-------------------------------------------------------------------------

        createdCasenotePanel: by.css('.events-app-container div.events-section'),
        createdCasenoteBlock: by.css('div[data-bind*="personEvents/eventItemTemplates"]'),
        createdCasenoteBlockTitle: by.css('div.events-title'),
        createdCasenoteBlockBy: by.css('span.events-by'),
        createdCasenoteBlockType: by.css('div.events-subtitle'),
        createdCasenoteBlockSigIcon: by.css('span.significant'),
        createdCasenoteBlockCNicon: by.css('.event-started.icon-casenote'),
        createdCasenoteBlockMore: by.css('a.lnk-view-more'),
        casenoteContent: by.css('.casenotes-content p'),
        createdCNPersonPill: by.css('.for-subjects span[class*="person-tag"]')

        //-------------------------------------FOR Event CASENOTES-------------------------     
    },

    navigateCasenote: function () {
        return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteIcon), 10000)
            .then(function () {
                return driver.findElement(page.casenote_page.elements.casenoteIcon).click();
            });
    },

    verifyCasenotePage2: function () {
        //console.log("on ccasenote verify method");
        return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteSection), 10000).then(function () {
            return driver.getTitle().then().then(function (pageTitle) {
                //console.log(pageTitle);
                expect(pageTitle).to.contain(page.casenote_page.elements.casenotePageTitle);
            }).then(function () {
                return driver.wait(until.elementsLocated(page.casenote_page.elements.casenotePageHeading), 10000).then(function () {
                    return driver.findElement(page.casenote_page.elements.casenotePageHeading).getText().then(function (eventsHeading) {
                        // console.log(eventsHeading);
                        expect(eventsHeading).to.contain("Events");
                        driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteFilter), 10000);
                        driver.wait(until.elementsLocated(page.casenote_page.elements.timelineIcon), 10000);
                        driver.wait(until.elementsLocated(page.casenote_page.elements.createCasenoteIcon), 10000);
                        driver.wait(until.elementsLocated(page.casenote_page.elements.timelinePanel), 10000);
                        driver.wait(until.elementsLocated(page.casenote_page.elements.timelineViewDD), 10000);
                        return driver.findElement(page.casenote_page.elements.casenoteFilter).click().then(function () {
                            driver.sleep(500);
                            // console.log(222);
                            driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteFilterPanel), 10000);
                            return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteFilterPanelReset), 10000).then(function () {
                                driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteFilterPanelCnAccordion), 10000);
                                return driver.findElement(page.casenote_page.elements.casenoteFilterPanelCnAccordion).click().then(function () {
                                    //driver.sleep(800);
                                    driver.findElement(page.casenote_page.elements.casenoteFilterPanelCnAccordion).click();
                                    driver.findElement(page.casenote_page.elements.casenoteFilterPanelClose).click();
                                    return driver.sleep(800);
                                });
                            });
                        });
                    });
                });
            });
        });
    },

    createNewCasenoteClick: function () {
        return driver.wait(until.elementsLocated(page.casenote_page.elements.createCasenoteIcon), 10000).then(function () {
            return driver.findElement(page.casenote_page.elements.createCasenoteIcon).click().then(function () {
                return driver.wait(until.elementsLocated(page.casenote_page.elements.newCasenoteSection), 10000)
            });
        });
    },

    verifyNewCasenoteSection: function () {
        return driver.wait(until.elementsLocated(page.casenote_page.elements.newCasenoteSection), 10000)
            .then(function () {
                driver.findElement(page.casenote_page.elements.addCaseNoteTitle).getText().then(function (addCaseNoteTitle) {
                    expect(addCaseNoteTitle).to.contain("Add new casenote");
                });
            }).then(function () {
                return driver.findElement(page.casenote_page.elements.caseNoteTitleLabel).getText().then(function (labelText) {
                    expect(labelText).to.contain("Title");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteNotesInput), 10000);
                })
            })
            .then(function () {
                return driver.findElement(page.casenote_page.elements.casenoteTypeDropDownLabel).getText().then(function (labelText) {
                    expect(labelText).to.contain("Casenote type");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteTypeDropDown), 10000);
                })
            })
            .then(function () {
                return driver.findElement(page.casenote_page.elements.caseNoteForLabel).getText().then(function (labelText) {
                    expect(labelText).to.contain("For");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.caseNoteForInput), 10000);
                })
            })
            .then(function () {
                return driver.findElement(page.casenote_page.elements.caseNoteDateTimeLabel).getText().then(function (labelText) {
                    expect(labelText).to.contain("Date and time");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.caseNoteDateTimePicker), 10000);
                })
            })
            .then(function () {
                return driver.findElement(page.casenote_page.elements.caseNotemarkSignificantText).getText().then(function (labelText) {
                    expect(labelText).to.contain("Mark as significant");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.caseNotemarkSignificantCheck), 10000);
                })
            })
            .then(function () {
                return driver.findElement(page.casenote_page.elements.casenoteNotesLabel).getText().then(function (addCasenoteNotes) {
                    expect(addCasenoteNotes).to.contain("Notes");
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteNotesInput), 10000);
                });
            })

    },

    createNewCasenote: function (casenoteTitle, cnType) {
        // console.log("cnType: ", cnType);
        var todaysDate = new Date();
        var targetDate = null;
        if (cnType != config.Casenote.WeekCasenoteType) {
            targetDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth() - 1, todaysDate.setDate(15));
        } else {
            targetDate = todaysDate;
        }
        return driver.wait(until.elementsLocated(page.casenote_page.elements.caseNoteTitleInput), 10000).then(function () {
            return driver.findElement(page.casenote_page.elements.caseNoteTitleInput).sendKeys(casenoteTitle).then(function () {
                //driver.sleep(1500);
                return helpers.clickIncludesList(page.casenote_page.elements.casenoteTypeDropDown, "button", by.css('li a'), cnType).then(function () {
                    //console.log(333);
                    return driver.findElement(page.casenote_page.elements.caseNoteDateTimePicker).click().then(function () {
                        return helpers.gridSelectDate(targetDate);
                    }).then(function () {
                        return driver.findElement(page.casenote_page.elements.caseNotemarkSignificantCheck).click().then(function () {
                            driver.findElement(page.casenote_page.elements.casenoteNotesLabel).click();
                            return driver.findElement(page.casenote_page.elements.casenoteNotesInput).click();
                        }).then(function () {
                            // console.log(777);
                            return driver.findElement(page.casenote_page.elements.casenoteNotesInput).sendKeys('Casenote Notes for @' + config.PersonDetails.Name)
                                .then(function () {
                                    driver.sleep(1500);
                                    // console.log(888);
                                    return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteNotesSearchList), 10000).then(function () {
                                        return helpers.clickIncludesGrid(page.casenote_page.elements.casenoteNotesSearchList, page.casenote_page.elements.casenoteNotesSearchItem, config.PersonDetails.Name).then(function () {
                                            return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteNotesPersonPill), 10000).then(function () {
                                                return driver.wait(until.elementsLocated(page.casenote_page.elements.createCasenoteSubmit), 10000).then(function () {
                                                    driver.findElement(page.casenote_page.elements.createCasenoteSubmit).click();
                                                    //driver.findElement(By.tagName('button'), 'Create Casenote').click();
                                                    return driver.sleep('1500');
                                                });
                                            });
                                        });
                                    });
                                });
                        });
                    });
                });
            });
        });
    },

    changeTimelineView: function (TLVIEW) {
        return driver.wait(until.elementsLocated(page.casenote_page.elements.timelinePanel), 10000).then(function () {
            // console.log(1);
            return driver.wait(until.elementsLocated(page.casenote_page.elements.timelineViewDD), 10000).then(function () {
                // console.log(2);
                driver.findElement(page.casenote_page.elements.timelineViewDD).click();
                // console.log(3);
                return driver.wait(until.elementsLocated(page.casenote_page.elements.timelineViewDDList), 10000).then(function () {
                    // console.log(4, TLVIEW);
                    helpers.clickIncludesGrid(page.casenote_page.elements.timelineViewDDList, page.casenote_page.elements.timelineViewDDItem, TLVIEW);
                    return driver.sleep(1000);
                });
            });
        });
    },

    verifyCreatedCasenote: function (casenoteTitle, cnType) {
        var caseNote = null;
        return driver.wait(until.elementsLocated(page.casenote_page.elements.createdCasenoteBlock), 25000).then(function () {
            return driver.wait(until.elementsLocated(page.casenote_page.elements.createdCasenoteBlockMore), 10000).then(function () {
                return driver.wait(until.elementsLocated(page.casenote_page.elements.createdCasenotePanel), 10000).then(function () {
                    return helpers.gridGetElement(page.casenote_page.elements.createdCasenotePanel, page.casenote_page.elements.createdCasenoteBlock, casenoteTitle)
                        .then(function (CASENOTE) {
                            caseNote = CASENOTE;
                            return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockTitle).getText().then(function (retTitle) {
                                console.log('retTitle : ', retTitle);
                                expect(retTitle).to.contain(casenoteTitle);
                            }).then(function () {
                                return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockType).getText().then(function (retType) {
                                    console.log('retType : ', retType);
                                    expect(retType).to.contain(cnType);
                                }).then(function () {
                                    return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockBy).getText().then(function (cnBy) {
                                        console.log('cnBy : ', cnBy);
                                        expect(cnBy).to.contain('By - You');
                                    }).then(function () {
                                        return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockCNicon).isDisplayed().then(function () {
                                            return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockSigIcon).isDisplayed().then(function () {
                                                return caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockCNicon).then(function (CNicon) {
                                                    driver.actions().mouseMove(CNicon).perform();
                                                }).then(function () {
                                                    driver.sleep(800);
                                                    caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockMore).click();
                                                    //console.log(caseNote);
                                                    // console.log(1)
                                                    return driver.wait(until.elementsLocated(page.casenote_page.elements.casenoteContent), 10000).then(function () {
                                                        // console.log(2)
                                                        return driver.wait(until.elementsLocated(page.casenote_page.elements.createdCNPersonPill), 10000).then(function () {
                                                            // console.log(3)
                                                            caseNote.findElement(page.casenote_page.elements.createdCasenoteBlockMore).click();
                                                            // console.log(4)
                                                            return driver.sleep(1000);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                });
            });
        });
    },
}