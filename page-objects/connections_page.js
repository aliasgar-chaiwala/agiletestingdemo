module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        //----------Navigation
        personBannerConnectionIcon: by.css('div.hatrickIcons.icon-connections'),
        relationFacetConnectionLink: by.css('a[name="connection_title"]'),

        connectionPageHeading: by.css('div[class="cpb-title page-title"]'),
        connectionSection: by.css('div[class="cpb_container"]'),

        firstConnectionContainer: by.css('div[class="cpb-first"] div.item.tab-section'),
        firstConnectionName: by.css('div[class="cpb-first"] div[class="name"]'),
        firstConnectionRelation: by.css('div[class="cpb-first"] div[class="related"]'),
        secondConnectionContainer: by.css('div[class="cpb-second"] div.item.tab-section'),
        secondConnectionName: by.css('div[class="cpb-second"] div[class="name"]'),
        secondConnectionRelation: by.css('div[class="cpb-second"] div[class="related"]'),
        //------------------creation
        createConnectionIcon: by.css('div[id="new-connection"]'),
        newConnectionSection: by.css('div[class="create-new-panel create-new-connection show"]'), //need name tag

        newConnectionTitle: by.css('h3[class="create-new-title"]'),

        connectionPersoNSearchLabel: by.css('label.col-sm-3.control-label'),
        connectionTypeDropdownLabel: by.css('label.col-sm-3.control-label'),
        connectionResponsibilityDropdownLabel: by.css('label.col-sm-3.control-label'),
        connectionRelatedAsDropdownLabel: by.css('label.col-sm-3.control-label'),
        connectionToDropdownLabel: by.css('label.col-sm-3.control-label'),

        connectionPersoNSearch: by.css('div.search-include-1 div.selectize-input input[type="text"]'),
        connectionPersoNSearchList: by.css('div.search-include-1 div.selectize-dropdown.multi div.selectize-dropdown-content'),
        connectionSearchListOption: by.css('div.option'),

        connectionTypeDropdown: by.css('div[name="connectionTypeConnection"]'),
        connectionResponsibilityDropdown: by.css('div [name="connectionResponsibility"]'),

        connectionRelatedAsDropdown: by.css('div [name="connectionRelatedAs"]'),
        connectionToDropdown: by.css('div.multiSelect-dropdown-panel'), //need name tag - unique
        connectionToDropdownList: by.css('div.multiSelect-dropdown-panel.open'), //need name tag - unique
        connectionToDropdownList1st: by.css('ul.dropdown-me.nu-new.connection-To-list li'),
        connectionShowAllRelationFilterIcon: by.css('div[class="hatrickIcons icon-dropdown-filter"]'),
        activeFilterIcon: by.css('.hatrickIcons.icon-dropdown-filter.active'),

        createConnectionSubmit: by.css('button[class="btn btn-create-new"]'),
        //-------------------verification

        connectionPills: by.css('div[name="connections-pills"]'),
        connectionOnePill: by.css('a'), // need name to anchor

        essentioalInfoSection: by.css('div[name="essentialInfo-section"]'),
        EIParentRespIcon: by.css('span.icon-connections.icon-bigger'),
        perFacetsContainer: by.css('.person-view-masonry-new .container-fluid'),
        essentioalInfoParentalResp: by.css('div[name="essentialInfo-section"] div[name="parental-responsibility"]'), // description needs name='parental-responsibility-summary/desc'
        //-----------------------
        connectionFilter: by.css('.person-toolbar .icon-filter'),
        connectionFilterPanel: by.css('.explorer-filter.open'),
        connectionFilterPanelClose: by.css('.explorer-filter .filter-close'),
        connectionFilterPanelReset: by.css('.filter-controls button.btn.grey-button'),

        connectionFilterList: by.css('.explorer-filter.open'),
        connectionFilterListItem: by.css('.row .filter-group ul li'),
        connectionFilterListItemLabel: by.css('label:nth-child(2)'),
        connectionFilterListItemCheck: by.css('.white-check.task-check'),
        //------------------------
        editLink: by.css(".lnkEditView"),
        socialRelTypeLinkInEdit: by.css('.lnkRelType.social'),
        socialRelationsListItems: by.css('div.relations a.relations-node'),
        socialRelationsSelectedItems: by.css('div.relations a.related-selected'),
        profRelTypeLinkInEdit: by.css('.lnkRelType.prof'),
        profRelationsListItems: by.css('div.relations_professional a.relations-node'),
        profRelationsSelectedItems: by.css('div.relations_professional a.related-selected'),
        respLinkInEdit: by.css('.lnkRelType.lnkConType.resp'),
        responsibilitySelectedItems: by.css('div.responsbilityGroup a.related-selected'),
        saveEditChanges: by.css('.edit-done-panel > a'),

        connectionRelatedAsDropdownBtn: by.css('div[name="connectionRelatedAs"] > button'),
        connectionRelatedAsDropdownListItems: by.css('div[name="connectionRelatedAs"] > ul > li'),
        connectionToDropdownText: by.css('div#selected-connection-to')
    },

    connectionNavigation: function () {

        return driver.wait(until.elementsLocated(page.connections_page.elements.relationFacetConnectionLink), 10000).then(function () {
            return driver.findElement(page.connections_page.elements.relationFacetConnectionLink).click()
                .then(function () {
                    return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPageHeading), 10000);
                });
        });
    },

    connectionPageVerify: function () {

        return driver.wait(until.elementsLocated(page.connections_page.elements.connectionSection), 10000).then(function () {
            return driver.findElement(page.connections_page.elements.connectionPageHeading).getText()
                .then(function (sectionTitle) {
                    expect(sectionTitle).to.equal("Connections");

                    return driver.getTitle().then(function (pageTitle) {
                        expect(pageTitle).to.equal("Connection Explorer | One Social Care");
                    });

                });
        });
    },

    verifyCreateConnectionSection: function () {
        driver.wait(until.elementsLocated(page.connections_page.elements.createConnectionIcon), 10000);
        return driver.findElement(page.connections_page.elements.createConnectionIcon).click()
            .then(function () {
                return driver.wait(until.elementsLocated(page.connections_page.elements.newConnectionSection), 10000)
                    .then(function () {

                        driver.findElement(page.connections_page.elements.newConnectionTitle).getText()
                            .then(function (newConnectionTitle) { expect(newConnectionTitle).to.equal("Create new Connections"); });
                        helpers.gridGetText(page.connections_page.elements.newConnectionSection, page.connections_page.elements.connectionPersoNSearchLabel, "Connection")
                            .then(function (connectionPersoNSearchLabel) { expect(connectionPersoNSearchLabel).to.equal("Connection"); });
                        //driver.findElement(page.connections_page.elements.connectionTypeDropdownLabel).getText()
                        helpers.gridGetText(page.connections_page.elements.newConnectionSection, page.connections_page.elements.connectionTypeDropdownLabel, "Type")
                            .then(function (connectionTypeDropdownLabel) { expect(connectionTypeDropdownLabel).to.equal("Type"); });
                        //driver.findElement(page.connections_page.elements.connectionResponsibilityDropdownLabel).getText()
                        helpers.gridGetText(page.connections_page.elements.newConnectionSection, page.connections_page.elements.connectionResponsibilityDropdownLabel, "Responsibility")
                            .then(function (connectionResponsibilityDropdownLabel) { expect(connectionResponsibilityDropdownLabel).to.equal("Responsibility"); });
                        //driver.findElement(page.connections_page.elements.connectionRelatedAsDropdownLabel).getText()
                        helpers.gridGetText(page.connections_page.elements.newConnectionSection, page.connections_page.elements.connectionRelatedAsDropdownLabel, "Related as")
                            .then(function (connectionRelatedAsDropdownLabel) { expect(connectionRelatedAsDropdownLabel).to.equal("Related as"); });
                        //driver.findElement(page.connections_page.elements.connectionToDropdownLabel).getText() 
                        return helpers.gridGetText(page.connections_page.elements.newConnectionSection, page.connections_page.elements.connectionToDropdownLabel, "To")
                            .then(function (connectionToDropdownLabel) {
                                expect(connectionToDropdownLabel).to.equal("To");
                            });
                    });
            });

    },

    createConnectionWith: function (toConnectPersonName, type, relation) {

        // return page.connections_page.verifyCreateConnectionSection().then(function () {
        driver.wait(until.elementsLocated(page.connections_page.elements.createConnectionIcon), 10000);
        return driver.findElement(page.connections_page.elements.createConnectionIcon).click().then(function () {

            return driver.wait(until.elementsLocated(page.connections_page.elements.newConnectionSection), 10000).then(function () {
                driver.sleep(1000);
                return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearch), 5000).then(function () {
                    return driver.findElement(page.connections_page.elements.connectionPersoNSearch).sendKeys(toConnectPersonName).then(function () {
                        driver.sleep(1000);
                        return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearchList), 10000).then(function () {
                            driver.sleep(1000);
                            // console.log('waited 1500');
                            return helpers.gridClick(page.connections_page.elements.connectionPersoNSearchList, page.connections_page.elements.connectionSearchListOption, toConnectPersonName).then(function () {

                                driver.sleep(1000);
                                // return helpers.selectOption(page.connections_page.elements.connectionTypeDropdown, type).then(function () {
                                return helpers.clickIncludesList(page.connections_page.elements.connectionTypeDropdown, 'button', by.css('li a'), type).then(function () {
                                    driver.sleep(1000);
                                    //return helpers.selectOption(page.connections_page.elements.connectionResponsibilityDropdown, "Parental Responsibility").then(function () {
                                    return helpers.clickIncludesList(page.connections_page.elements.connectionResponsibilityDropdown, 'button', by.css('li a'), "Parental Responsibility").then(function () {
                                        driver.sleep(1000);
                                        //driver.findElement(page.connections_page.elements.connectionShowAllRelationFilterIcon).isDisplayed();
                                        //driver.findElement(page.connections_page.elements.connectionShowAllRelationFilterIcon).click();
                                        driver.sleep(1000);
                                        // return helpers.selectOption(page.connections_page.elements.connectionRelatedAsDropdown, relation).then(function () {
                                        return helpers.clickIncludesList(page.connections_page.elements.connectionRelatedAsDropdown, 'button', by.css('li a'), relation).then(function () {
                                            driver.sleep(1000);
                                            driver.findElement(page.connections_page.elements.connectionToDropdown).click();
                                            driver.sleep(1000);
                                            //driver.findElement(page.connections_page.elements.connectionToDropdownList1st).click();
                                            config = jsonfile.readFileSync('./support/' + featureConfig);
                                            fRandomName = config.PersonDetails.Name;
                                            //return driver.findElement(page.connections_page.elements.connectionToDropdownList1st).click().then(function () {
                                            // return helpers.gridClick(page.connections_page.elements.connectionToDropdownList, page.connections_page.elements.connectionToDropdownList1st, fRandomName).then(function () {

                                            driver.sleep(1500);
                                            driver.findElement(page.connections_page.elements.createConnectionSubmit).click();
                                            return driver.sleep(5000);
                                            // });
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

    verifyCreatedConnectionWith: function (connectedPersonName, relation) {

        return driver.wait(until.elementsLocated(page.connections_page.elements.firstConnectionContainer), 15000).then(function () {
            return driver.findElement(page.connections_page.elements.firstConnectionName).getText()
                .then(function (firstConnectionName) {
                    //console.log('firstConnectionName : ', firstConnectionName);
                    expect(firstConnectionName).to.equal(connectedPersonName);

                    return driver.findElement(page.connections_page.elements.firstConnectionRelation).getText()
                        .then(function (firstConnectionRelation) {
                            //console.log('firstConnectionRelation : ', firstConnectionRelation);
                            expect(firstConnectionRelation).to.equal(relation);
                        });
                });
        });
    },

    verifyParentalRespEI: function (relation, person2name) {

        return driver.wait(until.elementsLocated(page.connections_page.elements.essentioalInfoSection), 15000).then(function () {
            //console.log(1);
            return driver.wait(until.elementsLocated(page.connections_page.elements.EIParentRespIcon), 15000).then(function () {
                //console.log(2);
                return driver.findElement(page.connections_page.elements.essentioalInfoParentalResp).getText()
                    .then(function (essentioalInfoParentalResp) {
                        //console.log('essentioalInfoParentalResp : ', essentioalInfoParentalResp);
                        //console.log('\n\n : ', person2name + ' is Parent and has Parental Responsibilityto ' + fRandomName);
                        config = jsonfile.readFileSync('./support/' + featureConfig);
                        fRandomName = config.PersonDetails.Name;
                        return expect(essentioalInfoParentalResp).to.contain(person2name + ' is ' + relation + ' and has Parental Responsibility to ' + fRandomName);
                    });
            });
        });

    },

    verifyCouncilParentalRespEI: function (COUNCIL, PERSON) {
        var councilRespText = COUNCIL + ' has parental responsibility for ' + PERSON;
        return driver.wait(until.elementsLocated(page.connections_page.elements.essentioalInfoSection), 15000).then(function () {
            return driver.wait(until.elementsLocated(page.connections_page.elements.EIParentRespIcon), 15000).then(function () {
                return helpers.gridGetElement(page.connections_page.elements.perFacetsContainer, page.connections_page.elements.essentioalInfoParentalResp, councilRespText).then(function (EICouncilRespItem) {
                    driver.sleep(1000);
                    return EICouncilRespItem.getText().then(function (EICouncilRespTxt) {
                        console.log('EICouncilRespTxt : ', EICouncilRespTxt);
                        console.log('\nCouncilRespText: ', councilRespText);
                        return expect(EICouncilRespTxt).to.contain(councilRespText);
                    });
                });
            });
        });
    },

    create2ndConnectionWith: function (toConnectPersonName, type, relation) {

        // return page.connections_page.verifyCreateConnectionSection().then(function () {
        driver.wait(until.elementsLocated(page.connections_page.elements.createConnectionIcon), 10000);
        return driver.findElement(page.connections_page.elements.createConnectionIcon).click().then(function () {

            return driver.wait(until.elementsLocated(page.connections_page.elements.newConnectionSection), 10000).then(function () {
                driver.sleep(1000);
                return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearch), 5000).then(function () {
                    return driver.findElement(page.connections_page.elements.connectionPersoNSearch).sendKeys(toConnectPersonName).then(function () {
                        driver.sleep(1000);
                        return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearchList), 10000).then(function () {
                            driver.sleep(1000);
                            // console.log('waited 1500');
                            return helpers.gridClick(page.connections_page.elements.connectionPersoNSearchList, page.connections_page.elements.connectionSearchListOption, toConnectPersonName).then(function () {

                                driver.sleep(1000);
                                //return helpers.selectOption(page.connections_page.elements.connectionTypeDropdown, type).then(function () {
                                return helpers.clickIncludesList(page.connections_page.elements.connectionTypeDropdown, 'button', by.css('li a'), type).then(function () {
                                    driver.sleep(1000);
                                    //return helpers.selectOption(page.connections_page.elements.connectionResponsibilityDropdown, "Parental Responsibility").then(function () {
                                    return helpers.clickIncludesList(page.connections_page.elements.connectionResponsibilityDropdown, 'button', by.css('li a'), "Parental Responsibility").then(function () {
                                        driver.sleep(1000);
                                        //driver.findElement(page.connections_page.elements.connectionShowAllRelationFilterIcon).isDisplayed();
                                        return helpers.clickIncludesList(page.connections_page.elements.connectionRelatedAsDropdown, 'button', by.css('li a'), relation).then(function () {
                                            driver.findElement(page.connections_page.elements.connectionToDropdown).click();
                                            driver.sleep(1000);
                                            //driver.findElement(page.connections_page.elements.connectionToDropdownList1st).click();
                                            config = jsonfile.readFileSync('./support/' + featureConfig);
                                            fRandomName = config.PersonDetails.person1.Name;
                                            //return driver.findElement(page.connections_page.elements.connectionToDropdownList1st).click().then(function () {
                                            // return helpers.gridClick(page.connections_page.elements.connectionToDropdownList, page.connections_page.elements.connectionToDropdownList1st, fRandomName).then(function () {
                                            driver.sleep(1500);
                                            driver.findElement(page.connections_page.elements.createConnectionSubmit).click();
                                            return driver.sleep(5000);
                                            // });
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

    clickConnectionWith: function () {
        return driver.wait(until.elementsLocated(page.connections_page.elements.firstConnectionContainer), 5000).then(function () {
            var connectionContainer = driver.findElement(page.connections_page.elements.firstConnectionContainer);
            return connectionContainer.findElement(by.css('div.avatar')).click().then(function () {
                //console.log('firstConnection Clicked');
                return driver.sleep(1500);
            });
        });
    },

    verify2ndDegreeConnectionWith: function (connectedPersonName, relation) {

        return driver.wait(until.elementsLocated(page.connections_page.elements.secondConnectionContainer), 5000).then(function () {
            return driver.findElement(page.connections_page.elements.secondConnectionName).getText().then(function (secondConnectionName) {
                // console.log('secondConnectionName : ', secondConnectionName);
                expect(secondConnectionName).to.equal(connectedPersonName);

                return driver.findElement(page.connections_page.elements.secondConnectionRelation).getText().then(function (secondConnectionRelation) {
                    //console.log('secondConnectionRelation : ', secondConnectionRelation);
                    expect(secondConnectionRelation).to.equal(relation);
                });
            });
        });
    },

    toggleConnectionFilterTo: function (filterOption) {
        /**connectionFilter: by.css('.person-toolbar .icon-filter'),
        connectionFilterPanel: by.css('.explorer-filter.open'),
        connectionFilterPanelClose: by.css('.explorer-filter .filter-close'),
        connectionFilterPanelReset: by.css('.filter-controls button.btn.grey-button'),
 
        connectionFilterList: by.css('.explorer-filter.open .row .filter-group'),
        connectionFilterListItem: by.css('.explorer-filter.open .row ul li'),
        connectionFilterListItemCheck: by.css('.white-check.task-check'), */
        return driver.wait(until.elementsLocated(page.connections_page.elements.connectionFilter), 5000).then(function () {
            return driver.findElement(page.connections_page.elements.connectionFilter).click().then(function () {
                driver.sleep(1000);
                return driver.wait(until.elementsLocated(page.connections_page.elements.connectionFilterPanel), 5000).then(function () {
                    driver.findElement(page.connections_page.elements.connectionFilterPanelClose).isDisplayed();
                    driver.findElement(page.connections_page.elements.connectionFilterPanelReset).isDisplayed();
                    driver.findElement(page.connections_page.elements.connectionFilterList).isDisplayed();
                    console.log('set connection filterOption : ', filterOption);
                    return helpers.gridGetElement(page.connections_page.elements.connectionFilterList, page.connections_page.elements.connectionFilterListItem, filterOption)
                        .then(function (FILTEROPTION) {
                            FILTEROPTION.findElement(page.connections_page.elements.connectionFilterListItemLabel).getText().then(function (retText) {
                                console.log('retText : ', retText);
                            });
                            FILTEROPTION.findElement(page.connections_page.elements.connectionFilterListItemCheck).click();

                            return driver.sleep(800);
                        });
                });
            });
        });
    },

    editConnection: function (connectedPersonName, type, relation) {
        return driver.wait(until.elementsLocated(page.connections_page.elements.firstConnectionContainer), 15000)
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionName).getText()
                    .then(function (firstConnectionName) {
                        expect(firstConnectionName).to.equal(connectedPersonName);
                    });
            })
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionRelation)
                    .then(function (firstConnectionRelation) {
                        return firstConnectionRelation.findElement(by.css('a')).click().then(function () {
                            return driver.wait(until.elementLocated(page.connections_page.elements.editLink), 15000, "Edit link not located")
                                .then(function (editLinkElem) {
                                    return editLinkElem.click();
                                })
                        })
                    });
            })
            .then(function () {
                if (type == "Social") {
                    return driver.wait(until.elementLocated(page.connections_page.elements.socialRelTypeLinkInEdit), 5000, "Social rel type not located")
                        .then(function (socialRelTypeElem) {
                            return socialRelTypeElem.click().then(function () {
                                return driver.wait(until.elementsLocated(page.connections_page.elements.socialRelationsListItems), 5000, "socialRelationsListItems not located")
                            })
                        })
                } else if (type == "Professional") {
                    return driver.wait(until.elementLocated(page.connections_page.elements.profRelTypeLinkInEdit), 5000, "Professional rel type not located")
                        .then(function (profRelTypeElem) {
                            return profRelTypeElem.click().then(function () {
                                return driver.wait(until.elementsLocated(page.connections_page.elements.profRelationsListItems), 5000, "profRelationsListItems not located")
                            })
                        })
                } else {
                    assert.fail("type passed as argument is incorrect");
                }
            }).then(function (options) {
                var desiredOption;
                let srchElem = function (min, max, flag) {
                    option = options[min];
                    helpers.scrollIntoView(option);
                    return option.getText().then(function doesOptionMatch(text) {
                        if (text.includes(relation)) {
                            // console.log("matched:" + relation + "\nValue : " + text);
                            desiredOption = option;
                            flag = true;
                        }
                    }).then(function () {
                        if (min < max && !flag) {
                            srchElem(min + 1, max, flag);
                        }
                    });
                }
                return driver.sleep(100).then(function () {
                    srchElem(0, options.length - 1, false);
                })
                    .then(function () {
                        assert.isDefined(desiredOption, "No element found with matching text: " + relation);
                        desiredOption.click();
                    });
            })
            .then(function () {
                return driver.findElement(page.connections_page.elements.saveEditChanges).click().then(function () {
                    return driver.sleep(1000);
                });
            });
    },

    verifyFilterBehaviourForRelatedAs: function (toConnectPersonName, type, person2Gender) {
        var withFilterCount = null, withoutFilterCount = null;
        var maleWithFilterRealtion, maleWithoutFilterRelation;
        return driver.wait(until.elementsLocated(page.connections_page.elements.createConnectionIcon), 10000).then(function () {
            return driver.findElement(page.connections_page.elements.createConnectionIcon).click().then(function () {
                return driver.wait(until.elementsLocated(page.connections_page.elements.newConnectionSection), 10000).then(function () {
                    driver.sleep(1000);
                    return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearch), 5000).then(function () {
                        return driver.findElement(page.connections_page.elements.connectionPersoNSearch).sendKeys(toConnectPersonName).then(function () {
                            driver.sleep(1000);
                            return driver.wait(until.elementsLocated(page.connections_page.elements.connectionPersoNSearchList), 10000).then(function () {
                                driver.sleep(1000);
                                // console.log('waited 1500');
                                return helpers.gridClick(page.connections_page.elements.connectionPersoNSearchList, page.connections_page.elements.connectionSearchListOption, toConnectPersonName).then(function () {
                                    driver.sleep(1000);
                                    return helpers.clickIncludesList(page.connections_page.elements.connectionTypeDropdown, 'button', by.css('li a'), type).then(function () {
                                        return driver.sleep(1000).then(function () {
                                            if (person2Gender == "Male" || person2Gender == "Female") {
                                                console.log("toConnectPersonGender: ", person2Gender);
                                                return driver.wait(until.elementLocated(page.connections_page.elements.activeFilterIcon), 5000)
                                            }
                                        }).then(function () {
                                            return driver.findElement(page.connections_page.elements.connectionRelatedAsDropdownBtn).click().then(function () {
                                                return driver.wait(until.elementsLocated(page.connections_page.elements.connectionRelatedAsDropdownListItems), 5000).then(function (relatedAsListItems) {
                                                    withFilterCount = relatedAsListItems.length;
                                                    console.log("withFilterCount: ", withFilterCount);
                                                    return relatedAsListItems[0].getText().then(text => {
                                                        maleWithFilterRealtion = text;
                                                        console.log("maleWithFilterRealtion::::", maleWithFilterRealtion)
                                                    });
                                                });
                                            });
                                        }).then(function () {
                                            return driver.sleep(1000).then(function () {
                                                if (person2Gender == "Male" || person2Gender == "Female") {
                                                    return driver.findElement(page.connections_page.elements.activeFilterIcon).click().then(function () {
                                                        return driver.wait(until.elementLocated(page.connections_page.elements.connectionShowAllRelationFilterIcon), 5000);
                                                    });
                                                } else {
                                                    return driver.findElement(page.connections_page.elements.connectionShowAllRelationFilterIcon).click();
                                                }
                                            }).then(function () {
                                                return driver.wait(until.elementLocated(page.connections_page.elements.connectionRelatedAsDropdownBtn), 5000).then(function () {
                                                    return driver.findElement(page.connections_page.elements.connectionRelatedAsDropdownBtn).click().then(function () {
                                                        return driver.wait(until.elementsLocated(page.connections_page.elements.connectionRelatedAsDropdownListItems), 5000).then(function (relatedAsListItems) {
                                                            withoutFilterCount = relatedAsListItems.length;
                                                            console.log("withoutFilterCount: ", withoutFilterCount);
                                                            return relatedAsListItems[0].getText().then(text => {
                                                                maleWithoutFilterRelation = text;
                                                                console.log("maleWithoutFilterRelation::::", maleWithoutFilterRelation)
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }).then(function () {
                                        validationFlag = (person2Gender == "Female") ? withFilterCount = withoutFilterCount && (maleWithFilterRealtion == "Wife") && (maleWithoutFilterRelation == "Spouse") : (person2Gender == "Male") ? (withFilterCount == withoutFilterCount) && (maleWithFilterRealtion == "Husband") && (maleWithoutFilterRelation == "Spouse") : false;
                                        if (!validationFlag) {
                                            assert.fail("Filter is not working as expected");
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    },

    validatePersonInToField: function (personToCheck) {
        return driver.wait(until.elementLocated(page.connections_page.elements.createConnectionIcon), 10000).then(function (createIcon) {
            return createIcon.click().then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.connectionToDropdownText), 10000).then(function (toField) {
                    return toField.getText().then(function (personName) {
                        expect(personName).to.equal(personToCheck);
                    });
                });
            });
        })
    },

    unselectConnectionsAndVerifySaveButtonInEdit: function (connectedPersonName) {
        return driver.wait(until.elementsLocated(page.connections_page.elements.firstConnectionContainer), 15000)
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionName).getText()
                    .then(function (firstConnectionName) {
                        expect(firstConnectionName).to.equal(connectedPersonName);
                    });
            })
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionRelation)
                    .then(function (firstConnectionRelation) {
                        return firstConnectionRelation.findElement(by.css('a')).click().then(function () {
                            return driver.wait(until.elementLocated(page.connections_page.elements.editLink), 15000, "Edit link not located")
                                .then(function (editLinkElem) {
                                    return editLinkElem.click();
                                })
                        })
                    });
            })
            .then(function () {
                return page.connections_page.unselectRelations();
            })
            .then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.saveEditChanges), 5000, "Save button not available").then(function (saveBtn) {
                    return !saveBtn.isEnabled();
                });
            });
    },

    unselectRelations: function () {
        return driver.sleep(1000)
            .then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.socialRelTypeLinkInEdit), 5000, "Social rel type not located")
                    .then(function (socialRelTypeElem) {
                        return socialRelTypeElem.getText().then(function (socialRelTypetext) {
                            var socialRelCount = parseInt((socialRelTypetext.split("("))[1].replace(")", ""));
                            if (socialRelCount > 0) {
                                return socialRelTypeElem.click().then(function () {
                                    return driver.wait(until.elementsLocated(page.connections_page.elements.socialRelationsSelectedItems), 5000, "socialRelationsSelectedItems not located")
                                        .then(function (options) {
                                            options.some(function (option) {
                                                option.click().then(function () {
                                                    driver.sleep(300);
                                                })
                                            })
                                        });
                                });
                            }
                        });
                    });
            })
            .then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.profRelTypeLinkInEdit), 5000, "Professional rel type not located")
                    .then(function (profRelTypeElem) {
                        return profRelTypeElem.getText().then(function (profRelTypetext) {
                            var profRelCount = parseInt((profRelTypetext.split("("))[1].replace(")", ""));
                            if (profRelCount > 0) {
                                return profRelTypeElem.click().then(function () {
                                    return driver.wait(until.elementsLocated(page.connections_page.elements.profRelationsSelectedItems), 5000, "profRelationsSelectedItems not located")
                                        .then(function (options) {
                                            options.some(function (option) {
                                                option.click().then(function () {
                                                    driver.sleep(300);
                                                })
                                            })
                                        });
                                });
                            }
                        })
                    })
            })
    },

    unselectparentalRespAndSaveInEdit: function (connectedPersonName) {
        return driver.wait(until.elementsLocated(page.connections_page.elements.firstConnectionContainer), 15000)
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionName).getText()
                    .then(function (firstConnectionName) {
                        expect(firstConnectionName).to.equal(connectedPersonName);
                    });
            })
            .then(function () {
                return driver.findElement(page.connections_page.elements.firstConnectionRelation)
                    .then(function (firstConnectionRelation) {
                        return firstConnectionRelation.findElement(by.css('a')).click().then(function () {
                            return driver.wait(until.elementLocated(page.connections_page.elements.editLink), 15000, "Edit link not located")
                                .then(function (editLinkElem) {
                                    return editLinkElem.click();
                                })
                        })
                    });
            })
            .then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.respLinkInEdit), 5000, "Responsibility link not located")
                    .then(function (respElem) {
                        return respElem.click().then(function () {
                            return driver.wait(until.elementLocated(page.connections_page.elements.responsibilitySelectedItems), 5000, "responsibilitySelectedItems not located")
                                .then(function (selItem) {
                                    selItem.click();
                                });
                        })
                    })
            })
            .then(function () {
                return driver.wait(until.elementLocated(page.connections_page.elements.saveEditChanges), 5000, "Save button not available").then(function (saveBtn) {
                    return saveBtn.click()
                        .then(function () {
                            return driver.sleep(1000);
                        });
                });
            });
    }
}