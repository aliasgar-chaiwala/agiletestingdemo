module.exports = {
    ariaExpanderAttribute: "aria-expanded",

    elements: {
        partnerAndAdvisorExpanderArrow: by.css('div[data-bind*="partnerAndAdvisorDetails"] a'),
        savAndInvExpanderArrow: by.css('div[data-bind*="SavingsAndInvestmentDetails"] a'),
        incomeAndBenefitExpanderArrow: by.css('div[data-bind*="IncomeAndBenefitsDetails"] a'),

        partnerSearchInput: by.css('#partnerDetailsCollapse div[data-bind*="propName : \'partner\'"] input'),
        partnerSearchList: by.css('div[data-bind*="propName : \'partner\'"] div[data-group="person"]'),
        partnerSearchListItem: by.css('div.option'),
        partnerPill: by.css('div[data-bind*="propName : \'partner\'"] .person-tag-base'),
        partnerSelectedName: by.css('div[data-bind*="partnerAndAdvisorDetails.partner"] span.name'),
        partnerSelectedNHS: by.css('div[data-bind*="partnerAndAdvisorDetails.partner"] span.nhs'),

        advisorSearchInput: by.css('#partnerDetailsCollapse div[data-bind*="propName : \'financialAdvisor\'"] input'),
        advisorSearchList: by.css('div[data-bind*="propName : \'financialAdvisor\'"] div[data-group="professional"]'),
        advisorSearchListItem: by.css('div.option'),
        advisorPill: by.css('div[data-bind*="propName : \'financialAdvisor\'"] .professional-tag'),
        advisorSelectedName: by.css('div[data-bind*="partnerAndAdvisorDetails.financialAdvisor"] span.name'),
        advisorSelectedID: by.css('div[data-bind*="partnerAndAdvisorDetails.financialAdvisor"] span.pull-right'),

        savingsBankSearchInput: by.css('div#savingsAndInvestmentsCollapse div[data-bind*="propName : \'bank\'"] input'),
        savingsBankSearchList: by.css('div#savingsAndInvestmentsCollapse div[data-bind*="propName : \'bank\'"] div[data-group="organisation"]'),
        savingsBankSearchListItem: by.css('div.option'),
        savingsBankPill: by.css('div#savingsAndInvestmentsCollapse div[data-bind*="propName : \'bank\'"] .organisation-tag'),
        savingsBalanceInput: by.css('div#savingsAndInvestmentsCollapse input[data-bind*="property : \'balance\'"]'),
        savingsJointAccountCheck: by.css('div#savingsAndInvestmentsCollapse div[data-bind*="data: \'isJointAccount\'"] input'),
        investmentShareTypeSelect: by.css('#typeOfShare'),
        investmentComapanyInput: by.css('input[placeholder="Company name/scheme"]'),
        investmentUnitsInput: by.css('input[data-bind*="value:$data.noOfUnits"]'),
        investmentCostInput: by.css('input[data-bind*="property : \'cost\'"]'),
        earningInput: by.css('input[data-bind*="earnings[0]"]'),
        earningPersonOneInput: by.css('input[data-bind*="earnings[1]"]'),
        location: by.css('#personAddressLine1'),
        addressSearchButton: by.css('#personAddressLine1 + div button.icon-search'),
        addressSearchList: by.css('#personAddressLine1 + div ul.address-lookup-dropdown'),
        addressSearchListSecondItem: by.css('#personAddressLine1 + div ul.address-lookup-dropdown li:nth-child(2) a'),
        ownershipShareInput: by.css('input[data-bind*="property : \'ownershipShare\'"]'),
        estimatedValueInput: by.css('input[data-bind*="property : \'estimatedValue\'"]'),
        mortgageAmountInput: by.css('input[data-bind*="property : \'mortgageAmount\'"]'),
        mortgageRemainInput: by.css('input[data-bind*="property : \'mortgageRemaining\'"]'),
        mortgageLenderInput: by.css('input[placeholder="Mortgage lender"]'),
        totalSavByPerson: by.css('#savingsAndInvestmentsCollapse ul > li:nth-child(1) > strong'),
        totalSavByPerson1: by.css('#savingsAndInvestmentsCollapse ul > li:nth-child(2) > strong'),
        totalSavAndInv: by.css('#savingsAndInvestmentsCollapse ul > li:nth-of-type(3) strong.m-r-md'),

        incomesInput: by.css('div#incomeAndBenefitsCollapse div[data-bind*="incomeAndBenefits.incomes"] input'),
        benefitsInput: by.css('div#incomeAndBenefitsCollapse div[data-bind*="incomeAndBenefits.benefits"] input')
    },

    expandPartnerAndAdvisorComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            driver.findElement(page.rfaForm_page.elements.partnerAndAdvisorExpanderArrow).click();
            driver.sleep(700);
        }).then(function () {
            // return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            helpers.expandOnCondition(page.rfaForm_page.elements.partnerAndAdvisorExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "Partner And Advisor Expander arrow");
            return driver.sleep(500);
        });
        // });
    },

    collapsePartnerAndAdvisorComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            helpers.collapseOnCondition(page.rfaForm_page.elements.partnerAndAdvisorExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "Partner And Advisor Expander arrow");
            return driver.sleep(500);
        });
    },

    setPartner: function () {
        driver.sleep(200);
        return driver.wait(until.elementLocated(page.rfaForm_page.elements.partnerSearchInput), 5000, "Partner Search Input did not appear").then(function () {
            driver.findElement(page.rfaForm_page.elements.partnerSearchInput).sendKeys(config.PersonDetails.person1.Name);
            driver.sleep(500);
            return driver.wait(until.elementLocated(page.rfaForm_page.elements.partnerSearchList), 5000, "Partner Search list did not appear").then(function () {
                return helpers.gridClick(page.rfaForm_page.elements.partnerSearchList, page.rfaForm_page.elements.partnerSearchListItem, config.PersonDetails.person1.Name)
                    .then(function () {
                        driver.sleep(1000);
                        driver.wait(until.elementLocated(page.rfaForm_page.elements.partnerPill), 5000, "Person pill under Partner did not appear").then(function () {
                            driver.findElement(page.rfaForm_page.elements.partnerPill).getText().then(function (pill1Text) {
                                expect(pill1Text).to.contain(config.PersonDetails.person1.Name);
                            });
                        });
                    })
                    .then(function () {
                        return driver.wait(until.elementLocated(page.rfaForm_page.elements.partnerSelectedName), 5000, "Person selected under Partner did not appear").then(function () {
                            driver.findElement(page.rfaForm_page.elements.partnerSelectedName).getText().then(function (personName) {
                                expect(personName).to.contain(config.PersonDetails.person1.Name);
                            });
                            return driver.wait(until.elementLocated(page.rfaForm_page.elements.partnerSelectedNHS), 500, "Person NHS selected under Partner did not appear")
                                .then(function () {
                                    driver.findElement(page.rfaForm_page.elements.partnerSelectedNHS).getText().then(function (personNHS) {
                                        expect(personNHS).to.contain(config.PersonDetails.person1.NHS);
                                        return driver.sleep(500);
                                    });
                                });
                        });
                    });
            });
        });
    },

    setAdvisor: function () {
        return driver.wait(until.elementLocated(page.rfaForm_page.elements.advisorSearchInput), 5000, "Advisor Search Input did not appear").then(function () {
            driver.findElement(page.rfaForm_page.elements.advisorSearchInput).sendKeys(config.Professional.BasicInfo.NewName);
            driver.sleep(1000);
            return driver.wait(until.elementLocated(page.rfaForm_page.elements.advisorSearchList), 5000, "Professional Search list did not appear for advisors and advisor details").then(function () {
                driver.sleep(500);
                helpers.gridClick(page.rfaForm_page.elements.advisorSearchList, page.rfaForm_page.elements.advisorSearchListItem, config.Professional.BasicInfo.NewName).then(function () {
                    driver.sleep(1000);
                    driver.wait(until.elementLocated(page.rfaForm_page.elements.advisorPill), 5000, "Professional pill under Advisor did not appear").then(function () {
                        driver.findElement(page.rfaForm_page.elements.advisorPill).getText().then(function (pill1Text) {
                            expect(pill1Text).to.contain(config.Professional.BasicInfo.NewName);
                        });
                    });
                });
                return driver.wait(until.elementLocated(page.rfaForm_page.elements.advisorSelectedName), 5000, "Professional selected under Advisor did not appear")
                    .then(function () {
                        driver.findElement(page.rfaForm_page.elements.advisorSelectedName).getText().then(function (profName) {
                            expect(profName).to.contain(config.Professional.BasicInfo.NewName);
                            return driver.sleep(500);
                        });
                    });
            });
        });
    },

    expandSavAndInvComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            driver.findElement(page.rfaForm_page.elements.savAndInvExpanderArrow).click();
            driver.sleep(700);
        }).then(function () {
            helpers.expandOnCondition(page.rfaForm_page.elements.savAndInvExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "Savings and investments Expander arrow");
            return driver.sleep(500);
        });
    },

    collapseSavAndInvComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            helpers.collapseOnCondition(page.rfaForm_page.elements.savAndInvExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "Savings and investments Expander arrow");
            return driver.sleep(500);
        });
    },

    setSavAndInvDetails: function (balance, earning1, earning2) {
        var investmentValue = "";
        var propertyValue = "";
        return page.rfaForm_page.setSavings(balance)
            .then(function () {
                return page.rfaForm_page.setInvestment().then(function (invValue) {
                    investmentValue = invValue;
                })
            })
            .then(function () {
                page.rfaForm_page.setEarnings(earning1, earning2);
            })
            .then(function () {
                return page.rfaForm_page.setProperty().then(function (propValue) {
                    propertyValue = propValue;
                })
            })
            .then(function () {
                totalValueP1 = parseFloat(balance) + parseFloat(investmentValue) + parseFloat(earning1) + parseFloat(propertyValue);
                driver.findElement(page.rfaForm_page.elements.totalSavByPerson).getText().then(function (text) {
                    expect(text).to.contain(totalValueP1);
                }).then(function () {
                    driver.findElement(page.rfaForm_page.elements.totalSavByPerson1).getText().then(function (text) {
                        expect(text).to.contain(earning2);
                    }).then(function () {
                        totalValue = totalValueP1 + parseFloat(earning2);
                        driver.findElement(page.rfaForm_page.elements.totalSavAndInv).getText().then(function (text) {
                            expect(text).to.contain(totalValue);
                        })
                    });
                })
            })

    },

    setSavings: function (bal) {
        var bankName = "Bauch LLC";
        return driver.wait(until.elementLocated(page.rfaForm_page.elements.savingsBankSearchInput), 5000, "Savings Bank Search Input did not appear for Savings and investments").then(function () {
            driver.findElement(page.rfaForm_page.elements.savingsBankSearchInput).clear();
            driver.findElement(page.rfaForm_page.elements.savingsBankSearchInput).sendKeys(bankName);
            driver.sleep(1500);
            return driver.wait(until.elementLocated(page.rfaForm_page.elements.savingsBankSearchList), 5000, "Savings Bank Search list did not appear for Savings and investments").then(function () {
                return helpers.gridClick(page.rfaForm_page.elements.savingsBankSearchList, page.rfaForm_page.elements.savingsBankSearchListItem, bankName).then(function () {
                    driver.sleep(1000);
                    driver.wait(until.elementLocated(page.rfaForm_page.elements.savingsBankPill), 5000, "Bank pill under Savings did not appear for Savings and investments")
                        // .then(function () {
                        //     driver.findElement(page.rfaForm_page.elements.savingsBankPill).getText().then(function (pill1Text) {
                        //         expect(pill1Text).to.contain(bankName);
                        //     });
                        // })
                        .then(function () {
                            driver.sleep(1000);
                            driver.findElement(page.rfaForm_page.elements.savingsBalanceInput).sendKeys(selenium.Key.CONTROL + "a")
                            driver.findElement(page.rfaForm_page.elements.savingsBalanceInput).sendKeys(bal);
                        })
                        .then(function () {
                            return driver.findElement(page.rfaForm_page.elements.savingsJointAccountCheck).sendKeys(selenium.Key.SPACE);
                        });
                });
            });
        });
    },

    setInvestment: function () {
        var companyName = "Tessa";
        var units = "3";
        var cost = "1623";
        return driver.wait(until.elementLocated(page.rfaForm_page.elements.investmentShareTypeSelect), 5000, "Investment type did not appear for Savings and investments")
            .then(function () {
                helpers.selectOption(page.rfaForm_page.elements.investmentShareTypeSelect, "Mutual Funds")
            })
            .then(function () {
                driver.findElement(page.rfaForm_page.elements.investmentComapanyInput).clear();
                driver.findElement(page.rfaForm_page.elements.investmentComapanyInput).sendKeys(companyName);
            })
            .then(function () {
                driver.findElement(page.rfaForm_page.elements.investmentUnitsInput).clear();
                driver.findElement(page.rfaForm_page.elements.investmentUnitsInput).sendKeys(units);
            })
            .then(function () {
                return driver.sleep(500).then(function () {
                    driver.findElement(page.rfaForm_page.elements.investmentCostInput).sendKeys(selenium.Key.CONTROL + "a");
                    driver.findElement(page.rfaForm_page.elements.investmentCostInput).sendKeys(cost);
                });
            })
            .then(function () {
                return parseInt(units) * parseInt(cost)
            })
    },

    setEarnings: function (earning1, earning2) {
        return driver.wait(until.elementIsVisible(driver.findElement(page.rfaForm_page.elements.earningInput)), 5000, "Earning Input did not appear for Savings and investments")
            .then(function (elem) {
                elem.sendKeys(selenium.Key.CONTROL + "a")
                elem.sendKeys(earning1);
            })
            .then(function () {
                driver.findElement(page.rfaForm_page.elements.earningPersonOneInput).sendKeys(selenium.Key.CONTROL + "a")
                driver.findElement(page.rfaForm_page.elements.earningPersonOneInput).sendKeys(earning2);
            });
    },

    setProperty: function () {
        return driver.executeScript('return window.scrollTo(' + 800 + ',' + 800 + ');').then(function () {
            config = jsonfile.readFileSync('./support/' + featureConfig);
            var ownershipShareValue = 50;
            var estimatedValue = "20000";
            var mortgageAmount = "15000";
            // var mortgageRemaining = "12000";
            var mortgageLender = "Som roodey";
            driver.wait(until.elementIsVisible(driver.findElement(page.rfaForm_page.elements.location)), 5000, "Property Address Search did not appear for Savings and investments");
            driver.findElement(page.rfaForm_page.elements.location).clear();
            driver.findElement(page.rfaForm_page.elements.location).sendKeys(config.PersonDetails.Address.Full);
            return driver.sleep(1000).then(function () {
                driver.findElement(page.rfaForm_page.elements.addressSearchButton).click();
                return driver.wait(until.elementsLocated(page.rfaForm_page.elements.addressSearchList), 10000).then(function () {
                    driver.wait(until.elementsLocated(page.rfaForm_page.elements.addressSearchListSecondItem), 10000, "Address search list not shown for property under Savings and investments").then(function () {
                        return helpers.gridClick(page.rfaForm_page.elements.addressSearchList, by.css('li a'), config.PersonDetails.Address.Full)
                            .then(function () {
                                driver.findElement(page.rfaForm_page.elements.ownershipShareInput).sendKeys(selenium.Key.CONTROL + "a");
                                driver.findElement(page.rfaForm_page.elements.ownershipShareInput).sendKeys(ownershipShareValue);
                                // config.PersonDetails.ownershipShareValue = ownershipShareValue;
                            })
                            .then(function () {
                                driver.findElement(page.rfaForm_page.elements.estimatedValueInput).sendKeys(selenium.Key.CONTROL + "a");
                                driver.findElement(page.rfaForm_page.elements.estimatedValueInput).sendKeys(estimatedValue);
                                config.PersonDetails.estimatedValue = estimatedValue;
                            })
                            .then(function () {
                                driver.findElement(page.rfaForm_page.elements.mortgageAmountInput).sendKeys(selenium.Key.CONTROL + "a");
                                driver.findElement(page.rfaForm_page.elements.mortgageAmountInput).sendKeys(mortgageAmount);
                                // config.PersonDetails.mortgageAmount = mortgageAmount;
                            })
                            // .then(function () {
                            //     driver.findElement(page.rfaForm_page.elements.mortgageRemainInput).sendKeys(selenium.Key.CONTROL + "a")
                            //     driver.findElement(page.rfaForm_page.elements.mortgageRemainInput).sendKeys(mortgageRemaining);
                            //     config.PersonDetails.mortgageRemaining = mortgageRemaining;
                            // })
                            .then(function () {
                                driver.sleep(500);
                                driver.findElement(page.rfaForm_page.elements.mortgageLenderInput).clear();
                                driver.findElement(page.rfaForm_page.elements.mortgageLenderInput).sendKeys(mortgageLender);
                                // config.PersonDetails.mortgageLender = mortgageLender;
                                jsonfile.writeFileSync(filePath, config);
                            })
                    });
                });
            }).then(function () {
                return estimatedValue;
            });
        })
    },

    expandIncAndBeneComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            driver.findElement(page.rfaForm_page.elements.incomeAndBenefitExpanderArrow).click();
            driver.sleep(700);
        }).then(function () {
            helpers.expandOnCondition(page.rfaForm_page.elements.incomeAndBenefitExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "income and Benefit Expander arrow");
            return driver.sleep(500);
        });
    },

    collapseIncAndBeneComponent: function () {
        return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
            helpers.collapseOnCondition(page.rfaForm_page.elements.incomeAndBenefitExpanderArrow, page.rfaForm_page.ariaExpanderAttribute, "income and Benefit Expander arrow");
            return driver.sleep(500);
        });
    },

    setIncAndBeneDetails: function () {
        var totalIncome = 0.0;
        var totalBenefit = 0.0;
        return driver.wait(until.elementsLocated(page.rfaForm_page.elements.incomesInput), 2000, "Income deatils not shown")
            .then(function () {
                return driver.findElements(page.rfaForm_page.elements.incomesInput).then(function (options) {
                    options.some(function (option) {
                        var randomNumber = (Math.random() * 20).toFixed(2);
                        option.sendKeys(selenium.Key.CONTROL + "a");
                        option.sendKeys(randomNumber);
                        totalIncome += parseFloat(randomNumber);
                    })
                    console.log("totalIncome: " + totalIncome);
                })
            })
            .then(function () {
                return driver.wait(until.elementsLocated(page.rfaForm_page.elements.benefitsInput), 2000, "Income deatils not shown").then(function () {
                    return driver.findElements(page.rfaForm_page.elements.benefitsInput).then(function (options) {
                        options.some(function (option) {
                            var randomNumber = (Math.random() * 20).toFixed(2);
                            option.sendKeys(selenium.Key.CONTROL + "a");
                            option.sendKeys(randomNumber);
                            totalBenefit += parseFloat(randomNumber);
                        })
                        console.log("totalBenefit: " + totalBenefit);
                    })
                })
            })
            .then(function () {
                config = jsonfile.readFileSync('./support/' + featureConfig);
                config.PersonDetails.TotalIncAndBenefitValue = parseFloat(totalIncome) + parseFloat(totalBenefit);
                return jsonfile.writeFileSync(filePath, config);
            })
    }
}