
module.exports = {

    url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        appCredLink: by.css('a.identityProvider'),
        idSelector: by.css('div[id="userEmailId"] input[id="emailId"]'),
        pwdSelector: by.css('div[id="userPassword"] input[id="password"]'),
        notNowSelector: by.css('button[name="notNow"]'),
        searchInput: by.css('gsfi'),
        searchResultLink: by.css('#lst-ib'),//'div.g > h3 > a')
        teamSelectDropDown: by.css('select[name="team"]'),

        globalSearch: by.css('input.nav-search-box'),
        walkmeBox: by.css('div.wm-outer-div.wm-shoutout.wm-position-center'),
        walkmeBoxClose: by.css('div.wm-close-button.walkme-x-button'),
        //walkmeBoxClose: by.css('span.wm-close-link')

        errorIconUserId: by.css('div[class="form-control-feedback-wrapper-userid"][id="divemailId"]'),
        errorIconPassword: by.css('div[class="form-control-feedback-wrapper"][id="divpassword"]'),
        errorIconUserIdTooltip: by.css('div[class="form-control-feedback-wrapper-userid"][id="divemailId"] + div.tooltip'),
        errorIconPasswordTooltip: by.css('div[class="form-control-feedback-wrapper"][id="divpassword"] + div.tooltip'),
        submitButton: by.css('button[type="submit"]'),

        tncCheckbox: by.css('#tnc'),
        tncTermsWidgetTitles: by.css('div.title'),
        tncLink: by.css('a#TandC'),
        forgotPasswdLink: by.css('a[class^="sign-in"][href$="forgotPassword"]'),
        forgotPasswdForm: by.css('form[aria-label="forgot-password"]'),
        forgotPasswdFormEmailTextbox: by.css('form[aria-label="forgot-password"] input[name="email"]'),
        forgotPasswdFormSubmitButton: by.css('form[aria-label="forgot-password"] button[type="submit"]'),
        resetPasswordMsg: by.css('small.sign-in'),
    },

    preformSearch: function (searchQuery) {

        console.log('in performsearch method :', searchQuery);
        var selector = page.googleSearch.elements.searchInput;

        // return a promise so the calling function knows the task has completed
        return driver.findElement(page.googleSearch.elements.searchInput).sendKeys(searchQuery, selenium.Key.ENTER);
    },

    login: function (ID, PWD, TEAMNAME, USERTYPE) {

        var loginText = 'Login with your application credentials';

        return driver.sleep(500)
            .then(function () {
                return driver.wait(until.elementsLocated(page.login_page.elements.appCredLink), 20000, 'Login Page Links Not Visible')
                    .then(function () {
                        return driver.findElement(page.login_page.elements.appCredLink, loginText).click()
                            .then(function () {
                                var id = ID;
                                return driver.sleep(1500)
                                    .then(function () {
                                        driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 5000)
                                        return driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 5000)
                                            .then(function () {
                                                return driver.findElement(page.login_page.elements.idSelector).sendKeys(id)
                                                    .then(function () {
                                                        var pwd = PWD;
                                                        return driver.wait(until.elementsLocated(page.login_page.elements.pwdSelector), 5000)
                                                            .then(function () {
                                                                driver.findElement(page.login_page.elements.pwdSelector).sendKeys(pwd, selenium.Key.ENTER)
                                                                return driver.sleep(500)
                                                                    .then(function () {
                                                                        // console.log("ENVIRONMENT: ", ENVIRONMENT);
                                                                        if (ENVIRONMENT != "staging1") {
                                                                            return driver.wait(until.elementsLocated(page.login_page.elements.notNowSelector), 5000)
                                                                                .then(function () {
                                                                                    // return driver.findElement(page.login_page.elements.notNowSelector, 'Not now').click().then(function () {
                                                                                    return driver.findElement(page.login_page.elements.notNowSelector, 'Not now').sendKeys(selenium.Key.ENTER);
                                                                                })
                                                                        }
                                                                    }).then(function () {
                                                                        driver.sleep('1200');
                                                                        return driver.getCurrentUrl()
                                                                            .then(function (tmSelectionUrl) {
                                                                                var onTeamSelect = tmSelectionUrl.includes('selectTeam');
                                                                                //console.log('onTeamSelect : ', onTeamSelect);
                                                                                if (onTeamSelect) {
                                                                                    return driver.sleep(500)
                                                                                        .then(function () {
                                                                                            return driver.wait(until.elementsLocated(page.login_page.elements.teamSelectDropDown), 5000)
                                                                                                .then(function () {
                                                                                                    var teamName = TEAMNAME;
                                                                                                    return helpers.selectOption(page.login_page.elements.teamSelectDropDown, teamName)
                                                                                                        .then(function () {
                                                                                                            //console.log('TEAMNAME inner select : ', onTeamSelect);
                                                                                                            driver.findElement(By.tagName('button'), 'Submit').click();
                                                                                                        });
                                                                                                });
                                                                                        });
                                                                                }
                                                                            }).then(function () {
                                                                                // console.log("In: ", new Date());                                                                                
                                                                            })
                                                                    });
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            }).catch(function (err) {
                return page.login_page.recoveryMechanism(ID, PWD, TEAMNAME, USERTYPE);
            });

    },

    closeWalkme: function () {
        // driver.sleep(10000);
        return driver.wait(until.elementLocated(page.login_page.elements.globalSearch), 15000).then(function () {
            return driver.wait(until.elementLocated(page.login_page.elements.walkmeBox), 15000).then(function () {
                driver.findElement(page.login_page.elements.walkmeBoxClose).click();
                return driver.sleep(800);
            });
        });
    },
    recoveryMechanism: function (ID, PWD, TEAMNAME, USERTYPE) {
        console.log("inside Recovery mechanism ");
        return driver.navigate().refresh()
            .then(function () {
                return driver.navigate().to("https://" + ENVIRONMENT + "-login.onesc.co.uk/local/login/step1")
                    .then(function () {
                        return driver.sleep(1500)
                            .then(function () {
                                return driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 20000)
                                    .then(function () {
                                        return driver.findElement(page.login_page.elements.idSelector).sendKeys(ID)
                                            .then(function () {
                                                var pwd = PWD;
                                                return driver.wait(until.elementsLocated(page.login_page.elements.pwdSelector), 20000)
                                                    .then(function () {
                                                        driver.findElement(page.login_page.elements.pwdSelector).sendKeys(pwd, selenium.Key.ENTER)
                                                        return driver.sleep(500)
                                                            .then(function () {
                                                                return driver.wait(until.elementsLocated(page.login_page.elements.notNowSelector), 20000)
                                                                    .then(function () {
                                                                        return driver.findElement(page.login_page.elements.notNowSelector, 'Not now').sendKeys(selenium.Key.ENTER)
                                                                            .then(function () {
                                                                                driver.sleep('1200');
                                                                                return driver.getCurrentUrl()
                                                                                    .then(function (tmSelectionUrl) {
                                                                                        var onTeamSelect = tmSelectionUrl.includes('selectTeam');
                                                                                        if (onTeamSelect) {
                                                                                            return driver.sleep(500)
                                                                                                .then(function () {
                                                                                                    return driver.wait(until.elementsLocated(page.login_page.elements.teamSelectDropDown), 20000)
                                                                                                        .then(function () {
                                                                                                            var teamName = TEAMNAME;
                                                                                                            return helpers.selectOption(page.login_page.elements.teamSelectDropDown, teamName)
                                                                                                                .then(function () {
                                                                                                                    return driver.findElement(By.tagName('button'), 'Submit').click().then(function () {

                                                                                                                    });
                                                                                                                });
                                                                                                        });
                                                                                                });
                                                                                        }
                                                                                    })
                                                                            });

                                                                    });
                                                            })
                                                    });
                                            });
                                    });
                            });

                    });
            });
    },

    verifyFirstScreen: function () {
        var login1Text = "Login with your application credentials";
        var login2Text = "Login with your organisation credentials";
        return driver.wait(until.elementsLocated(page.login_page.elements.appCredLink), 20000, 'Login Page Links Not Visible')
            .then(function () {
                return driver.findElements(page.login_page.elements.appCredLink)
                    .then(function (options) {
                        options[0].getText().then(function (text) {
                            // console.log(text)
                            expect(text.trim()).to.equal(login1Text);
                        })
                        options[1].getText().then(function (text) {
                            // console.log(text)
                            expect(text.trim()).to.equal(login2Text);
                        })
                    })
            })
    },

    clickLoginWithApplnCred: function () {
        var login1Text = "Login with your application credentials";
        return driver.wait(until.elementsLocated(page.login_page.elements.appCredLink), 20000, 'Login Page Links Not available')
            .then(function () {
                return driver.findElements(page.login_page.elements.appCredLink)
                    .then(function (options) {
                        options[0].getText().then(function (text) {
                            expect(text.trim()).to.equal(login1Text);
                        })
                        return options[0].click();
                    })
            })
    },

    loginWithInvalidCredentials: function () {
        return driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 10000)
            .then(function () {
                return driver.findElement(page.login_page.elements.idSelector).sendKeys("radomUserId")
                    .then(function () {
                        return driver.wait(until.elementsLocated(page.login_page.elements.pwdSelector), 20000)
                            .then(function () {
                                driver.findElement(page.login_page.elements.pwdSelector).sendKeys("randomPwd").then(function () {
                                    driver.findElement(page.login_page.elements.submitButton).click();
                                })
                            })
                    })
            }).then(function verifyErrorMsgs() {
                return driver.wait(until.elementsLocated(page.login_page.elements.errorIconUserId), 10000)
                    .then(function () {
                        return driver.actions().mouseMove(driver.findElement(page.login_page.elements.errorIconUserId)).perform().then(function () {
                            return driver.wait(until.elementsLocated(page.login_page.elements.errorIconUserIdTooltip), 2000).then(function () {
                                return driver.findElement(page.login_page.elements.errorIconUserIdTooltip).getText().then(function (tooltipText) {
                                    // console.log("tooltipTextUserId: ", tooltipText);
                                    expect(tooltipText).to.equal("You need to check the id");
                                })
                            })
                        })
                    })
                    .then(function () {
                        return driver.actions().mouseMove(driver.findElement(page.login_page.elements.errorIconPassword)).perform().then(function () {
                            return driver.wait(until.elementsLocated(page.login_page.elements.errorIconPasswordTooltip), 2000).then(function () {
                                return driver.findElement(page.login_page.elements.errorIconPasswordTooltip).getText().then(function (tooltipText) {
                                    // console.log("tooltipTextPwd: ", tooltipText);
                                    expect(tooltipText).to.equal("Please enter a valid password");
                                })
                            })
                        })
                    })
            });
    },

    enterCredentials: function (id, password) {
        return driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 10000)
            .then(function () {
                return driver.findElement(page.login_page.elements.idSelector).clear().then(function () {
                    return driver.findElement(page.login_page.elements.idSelector).sendKeys(id);
                }).then(function () {
                    return driver.wait(until.elementsLocated(page.login_page.elements.pwdSelector), 2000).then(function () {
                        return driver.findElement(page.login_page.elements.pwdSelector).sendKeys(password);
                    })
                })
            })
    },

    refreshAndverify: function (id, password) {
        return helpers.refreshBrowser()
            .then(function () {
                return driver.wait(until.elementsLocated(page.login_page.elements.idSelector), 10000)
                    .then(function () {
                        return driver.findElement(page.login_page.elements.idSelector).getAttribute("value").then(function (userIdText) {
                            expect(userIdText.trim()).to.equal("");
                        });
                    })
            })
    },

    verifyTnCCheckBoxBehaviour: function () {
        return driver.wait(until.elementsLocated(page.login_page.elements.tncCheckbox), 10000)
            .then(function () {
                return driver.findElement(page.login_page.elements.tncCheckbox).then(function (tncCheckElem) {
                    if (tncCheckElem.isSelected()) {
                        return driver.findElement(page.login_page.elements.submitButton).isEnabled().then(function () {
                            return !(driver.findElement(page.login_page.elements.tncTermsWidgetTitles).isDisplayed()).then(function () {
                                return tncCheckElem.click()
                                    .then(function () {
                                        return !(driver.findElement(page.login_page.elements.submitButton).isEnabled()).then(function () {
                                            !tncCheckElem.isSelected();
                                            return driver.sleep(1000).then(function () {
                                                return driver.wait(until.elementIsVisible(driver.findElement(page.login_page.elements.tncTermsWidgetTitles)), 5000).then(function (tnCTitleElem) {
                                                    return tnCTitleElem.isDisplayed().then(function () {
                                                        return tnCTitleElem.getText().then(function (tnCTitleText) {
                                                            expect(tnCTitleText).to.contain("TERMS OF USE");
                                                        });
                                                    });
                                                });
                                            })
                                        });
                                    })
                                    .then(function () {
                                        return driver.findElement(page.login_page.elements.tncCheckbox).then(function (tncCheckElem) {
                                            !tncCheckElem.isSelected();
                                            return tncCheckElem.click().then(function () {
                                                return driver.findElement(page.login_page.elements.submitButton).isEnabled().then(function () {
                                                    tncCheckElem.isSelected();
                                                    return driver.sleep(1000).then(function () {
                                                        return !(driver.findElement(page.login_page.elements.tncTermsWidgetTitles).isDisplayed());
                                                    });
                                                })
                                            })
                                        })
                                    })
                                    .then(function () {
                                        return driver.findElement(page.login_page.elements.tncLink).click().then(function () {
                                            return driver.findElement(page.login_page.elements.tncTermsWidgetTitles).isDisplayed();
                                        })
                                    });
                            });
                        });
                    } else {
                        assert.fail("By deafult tnc check should be selected");
                    }
                });
            });
    },

    verifyForgotPassword: function (id) {
        return driver.wait(until.elementsLocated(page.login_page.elements.forgotPasswdLink), 10000)
            .then(function () {
                return driver.findElement(page.login_page.elements.forgotPasswdLink).then(function (forgotPwdElem) {
                    forgotPwdElem.click();
                });
            })
            .then(function () {
                return driver.wait(until.elementsLocated(page.login_page.elements.forgotPasswdForm), 10000)
                    .then(function () {
                        return driver.findElement(page.login_page.elements.forgotPasswdFormEmailTextbox).then(function (forgotPwdEmailBoxElem) {
                            forgotPwdEmailBoxElem.sendKeys(id);
                        });
                    });
            })
            .then(function () {
                return driver.findElement(page.login_page.elements.forgotPasswdFormSubmitButton).then(function (forgotPwdSubmitElem) {
                    forgotPwdSubmitElem.click();
                });
            })
            .then(function () {
                var resetMsgheading = "Reset link has been sent to " + id;
                return driver.wait(until.elementsLocated(page.login_page.elements.resetPasswordMsg), 10000)
                    .then(function () {
                        return driver.findElement(page.login_page.elements.resetPasswordMsg).getText().then(function (resetPwdMsgHeading) {
                            expect(resetPwdMsgHeading).to.equal(resetMsgheading);
                        });
                    })
            });
    }
};