var dateFormat = require('dateformat');
module.exports = {


    /**
     * returns a promise that is called when the url has loaded and the body element is present
     * @param {string} url to load
     * @returns {Promise}
     * @example
     *      helpers.loadPage('http://www.google.com');
     */
    loadPage: function (url, waitInSeconds) {

        //console.log('\n In load page :', url,' ', waitInSeconds);
        // use either passed in timeout or global 10 seconds default

        var timeout = (waitInSeconds) ? (waitInSeconds * 1000) : DEFAULT_TIMEOUT;

        //console.log('\n In load page calculated Timeout : ', timeout);

        // load the url and wait for it to complete
        return driver.get(url).then(function () {

            // now wait for the body element to be present
            return driver.wait(until.elementLocated(by.css('body')), timeout);
        });
    },

    /***
     * returns the value of an attribute on an element   
     * @param {string} css selector used to find the element
     * @param {string} attribute name to retrieve
     * @returns {string} the value of the attribute or empty string if not found
     * @example
     *      helpers.getAttributeValue('body', 'class');
     */
    getAttributeValue: function (selector, attributeName) {

        // get the element from the page
        return driver.findElement(by.css(selector)).then(function (attributeValue) {
            return attributeValue;
        })
            .catch(function () {
                return '';
            });
    },

    /**
     * returns list of elements matching a query selector who's inner text mathes param.
     * WARNING: The element returned might not be visible in the DOM and will therefore have restricted interactions
     * @param {string} css selector used to get list of elements
     * @param {string} inner text to match (does not have to be visible)
     * @returns {Promise}
     * @example
     *      helpers.getElementsContainingText('nav[role="navigation"] ul li a', 'Safety Boots')
     */
    getElementsContainingText: function (cssSelector, textToMatch) {

        // method to execute within the DOM to find elements containing text
        function findElementsContainingText(query, content) {

            var results = []; // array to hold results

            // workout which property to use to get inner text
            var txtProp = ('textContent' in document) ? 'textContent' : 'innerText';

            // get the list of elements to inspect
            var elements = document.querySelectorAll(query);

            for (var i = 0, l = elements.length; i < l; i++) {
                if (elements[i][txtProp] === content) {
                    results.push(elements[i]);
                }
            }

            return results;
        };

        // grab matching elements
        return driver.findElements(by.js(findElementsContainingText, cssSelector, textToMatch));
    },

    /**
     * returns first elements matching a query selector who's inner text matches textToMatch param
     * @param {string} css selector used to get list of elements
     * @param {string} inner text to match (does not have to be visible)
     * @returns {Promise}
     * @example
     *      helpers.getFirstElementContainingText('nav[role="navigation"] ul li a', 'Safety Boots').click();
     */
    getFirstElementContainingText: function (cssSelector, textToMatch) {

        return helpers.getElementsContainingText(cssSelector, textToMatch).then(function (elements) {
            return elements[0];
        });
    },

    /**
     * clicks an element (or multiple if present) that is not visible, useful in situations where a menu needs a hover before a child link appears
     * @param {string} css selector used to locate the elements
     * @param {string} text to match inner content (if present)
     * @example
     *      helpers.clickHiddenElement('nav[role="navigation"] ul li a','Safety Boots');
     */
    clickHiddenElement: function (cssSelector, textToMatch) {

        // method to execute within the DOM to find elements containing text
        function clickElementInDom(query, content) {

            // get the list of elements to inspect
            var elements = document.querySelectorAll(query);

            // workout which property to use to get inner text
            var txtProp = ('textContent' in document) ? 'textContent' : 'innerText';

            for (var i = 0, l = elements.length; i < l; i++) {

                // if we have content, only click items matching the content
                if (content) {

                    if (elements[i][txtProp] === content) {
                        elements[i].click();
                    }
                }
                // otherwise click all
                else {
                    elements[i].click();
                }
            }
        };

        // grab matching elements
        return driver.findElements(by.js(clickElementInDom, cssSelector, textToMatch));
    },
    //----------------------------------------------------------------------------------

    selectOption: function (selector, item) {
        var selectList, desiredOption;

        selectList = driver.findElement(selector);
        return selectList.click()
            .then(function () {
                return selectList.findElements(By.tagName('option'))
                    .then(function findMatchingOption(options) {
                        options.some(function (option) {
                            option.getText().then(function doesOptionMatch(text) {
                                //console.log('text : ', text);
                                if (item === text) {
                                    //console.log('Matched text : ', item, ' ', text);
                                    desiredOption = option;
                                    // return true;
                                }
                            });
                        });
                    });
            })
            .then(function clickOption() {
                assert.isDefined(desiredOption, "Element not found with text:", item);
                if (desiredOption) {
                    return desiredOption.click();
                }
            });
    },

    selectSpan: function (selector, item) {
        var selectList, desiredOption;
        selectList = driver.findElement(selector);
        selectList.click();
        return selectList.findElements(By.tagName('li'))
            .then(function findMatchingOption(options) {
                options.some(function (option) {
                    option.getText().then(function doesOptionMatch(text) {
                        if (item === text) {
                            desiredOption = option;
                        }
                    });
                });
            })
            .then(function clickOption() {
                if (desiredOption) {
                    return desiredOption.click();
                }
            });
    },

    gridClick: function (selector, selector1, item) {
        var selectList, desiredOption;
        // console.log('selector :', selector, '\nselector1 : ', selector1);
        driver.sleep(1500);
        selectList = driver.findElement(selector);
        //selectList.click();
        //console.log("Clicked");
        return selectList.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    //console.log("Option:", text);
                    //console.log("Item:", item);
                    if (item === text) {
                        console.log("\ngridClick matched:" + item + "\nValue : " + text);
                        desiredOption = option;
                        //return true;
                    }
                });
            });
        }).then(function clickOption() {
            assert.isDefined(desiredOption, "No element found with matching text: " + item);
            if (desiredOption) {
                // console.log("desiredOption click:");
                return helpers.retryingClickWithElement(desiredOption);
            }
        });
    },

    gridClickWithElementParam: function (elem, selector1, item) {
        var selectList, desiredOption;
        return elem.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    if (item === text) {
                        console.log("\ngridClick matched:" + item + "\nValue : " + text);
                        desiredOption = option;
                    }
                });
            });
        }).then(function clickOption() {
            if (desiredOption) {
                return desiredOption.click();
            }
        });
    },

    clickIncludesGrid: function (selector, selector1, item) {
        var selectList, desiredOption;
        //console.log('selector :', selector, '\nselector1 : ', selector1);
        selectList = driver.findElement(selector);
        //selectList.click();
        //console.log("Clicked");
        return selectList.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    // console.log("Option:", text);
                    // console.log("Item:", item);
                    if (text.includes(item)) {
                        //console.log("matched:" + item + "\nValue : " + text);
                        desiredOption = option;
                        //return true;
                    }
                });
            });
        }).then(function clickOption() {
            if (desiredOption) {
                //  console.log("desiredOption:", desiredOption);
                return desiredOption.click();
            }
        });
    },

    gridGetText: function (selector, selector1, item) {
        var selectList, desiredOption;
        selectList = driver.findElement(selector);

        return selectList.findElements(selector1)
            .then(function findMatchingOption(options) {
                options.some(function (option) {
                    option.getText()
                        .then(function doesOptionMatch(text) {
                            //  console.log("Option:", text);
                            if (item === text) {
                                //   console.log("matched:" + item + "\nValue : " + text);
                                desiredOption = option;
                                //return true;
                            }
                        });
                });
            })
            .then(function clickOption() {
                if (desiredOption) {
                    // desiredOption.getText().then(function (desiredOption12) {
                    //    console.log("desiredOption12:", desiredOption);
                    // })
                    return desiredOption.getText();
                }
            });
    },

    gridFormClick: function (selector, selector1, item) {
        var selectList, desiredOption;
        selectList = driver.findElement(selector);
        //selectList.click();
        //console.log("Clicked");
        return selectList.findElements(selector1)
            .then(function findMatchingOption(options) {
                //console.log("Options:", options);
                options.some(function (option) {
                    option.getText()
                        .then(function doesOptionMatch(text) {
                            //console.log("Option:", text);
                            if (item === text) {
                                console.log("matched:" + item + " value:" + text);
                                return desiredOption = option;
                                //return true;
                            }
                        });
                });
            })
            .then(function clickOption() {
                if (desiredOption) {
                    console.log("\ndesiredOption:");
                    desiredOption.click();
                    return driver.sleep(5000);
                }
            });
    },

    gridGetClickForm: function (selector, selector1, selector3, item, formName) {
        var selectList, desiredOption = null, parent;
        var finalTd = null;

        selectList = driver.findElement(selector);
        return selectList.findElements(selector1)
            .then(function findMatchingOption(options) {
                options.some(function (option) {
                    option.getText()
                        .then(function doesOptionMatch(text) {
                            //console.log("doesOptionMatch text :", text);
                            if (item === text) {
                                //console.log("matched:" + item + "\nValue : " + text);
                                desiredOption = option;
                            }
                        });
                });
            })
            .then(function clickOption() {
                if (desiredOption != null) {
                    desiredOption.findElements(selector3).then(function (tdOptions) {
                        tdOptions.some(function (tdOption) {
                            tdOption.getText()
                                .then(function (tdOPtText) {
                                    //console.log("\ntdOPtText:", tdOPtText);
                                    if (tdOPtText === formName) {
                                        //console.log('in if : true ');
                                        finalTd = tdOption;
                                    }
                                })
                        })
                    })
                }
            }).then(function () {
                //console.log('in td click', finalTd);
                finalTd.findElement(by.css('a')).click();
                return driver.sleep(5000);
            });
    },

    gridGetForm: function (selector, selector1, selector3, item, formName) {
        var selectList, desiredOption = null, parent;
        var finalTd = null;

        selectList = driver.findElement(selector);
        return selectList.findElements(selector1)
            .then(function findMatchingOption(options) {
                options.some(function (option) {
                    option.getText()
                        .then(function doesOptionMatch(text) {
                            //  console.log("doesOptionMatch text :", text);
                            if (item === text) {
                                //  console.log("matched:" + item + "\nValue : " + text);
                                desiredOption = option;

                            }
                        });
                });
            })
            .then(function clickOption() {
                if (desiredOption != null) {
                    desiredOption.findElements(selector3).then(function (tdOptions) {
                        tdOptions.some(function (tdOption) {
                            tdOption.getText()
                                .then(function (tdOPtText) {
                                    //console.log("\ntdOPtText:", tdOPtText);
                                    if (tdOPtText === formName) {
                                        //console.log('in if : true ');
                                        finalTd = tdOption;
                                    }
                                })
                        })
                    })
                }
            }).then(function () {
                return finalTd.findElement(by.css('a')).getText();
            });
    },

    gridunAssignedAllocation: function (selector, selector1, selector2, person, swName) {
        var selectList, desiredOption = null;
        var caseBlock = null;
        var listWorker = null;
        var collapsiblePanel = null;
        var newFlag = false;
        selectList = driver.findElement(selector);

        let scrollFromNTo = function (options, min, max, flag) {
            option = options[min];
            helpers.scrollIntoView(option);
            return driver.wait(until.elementIsVisible(option), 5000, "Element from scrollFromNTo function is not visible")
                .then(function () {
                    return driver.wait(until.elementsLocated(selector2), 10000, "Locator from scrollFromNTo function is not available")
                        .then(function (unAsgWLCaseBlockCaseNames) {
                            helpers.scrollIntoView(unAsgWLCaseBlockCaseNames[min]);
                            return unAsgWLCaseBlockCaseNames[min].getText()
                                .then(function doesOptionMatch(retText) {
                                    // console.log("AssignedAllocation text :", retText);
                                    if (person === retText) {
                                        // console.log("matched:" + person + "\nValue : " + retText);
                                        newFlag = true;
                                        caseBlock = option;
                                    }
                                });
                        });
                })
                .then(function () {
                    if (!newFlag && min < max) {
                        scrollFromNTo(options, min + 1, max, newFlag);
                    }
                })
        }
        let someFunct = function (flag, prevCasesCount) {
            if (!flag) {
                let totalCaseShown = 0;
                return selectList.findElements(selector1).then(function (options) {
                    return scrollFromNTo(options, prevCasesCount, options.length - 1, flag).then(function () {
                        totalCaseShown = options.length;
                    });
                }).then(function () {
                    return driver.sleep(2500).then(function () {
                        if (prevCasesCount < totalCaseShown - 1 || newFlag) {
                            someFunct(newFlag, totalCaseShown - 1);
                        } else {
                            assert.fail("Reached END of page but required case not found.");
                        }
                    });
                })
            }
        }
        return driver.sleep(500).then(function () {
            someFunct(false, 0);
        }).then(function clickAllocateButton() {
            if (caseBlock != null) {
                return caseBlock.findElement(by.css('[name="btnTransfercase"]')).then(function (allocateButton) {
                    allocateButton.click();
                    driver.sleep(1500).then(function () {
                        collapsiblePanel = caseBlock.findElement(by.css('.panel-collapse.collapse.in'));
                        collapsiblePanel.findElement(by.css('span.caret')).click();
                        driver.sleep(1000);
                    }).then(function () {
                        var workerList = collapsiblePanel.findElement(by.css('ul.dropdown-menu-new'));
                        workerList.findElements(by.css('li')).then(function findMatchingOption(listItems) {
                            listItems.some(function (listItem) {
                                listItem.getText().then(function doesOptionMatch(workerName) {
                                    if (swName === workerName) {
                                        listWorker = listItem;
                                    }
                                });
                            });
                        }).then(function () {
                            // console.log('in td click listWorker');
                            listWorker.findElement(by.css('a')).click();
                            return driver.sleep(1500);
                        });
                    });
                });
            }
        });
    },

    gridGetParentElement: function (selector, selector1, item) {
        var flag = false;
        // console.log('selector :', selector, '\nselector1 : ', selector1);
        console.log("Item text :", item);
        return driver.wait(until.elementsLocated(selector), 5000, "Selector not located").then(() => {
            return driver.findElements(selector).then(function findMatchingOption(options) {
                return helpers.searchElement(options, selector1, 0, options.length - 1, item)
            });
        });
    },

    gridClickDate: function (month, date) {
        // console.log('in gridClickDate');
        var selectList, desiredOption = null, parent;
        var finalTd = null;

        nextMonth = by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days th.next');
        prevMonth = by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days th.prev');

        selector = by.css('.bootstrap-datetimepicker-widget.picker-open .datepicker .datepicker-days tbody');
        selector1 = by.css('tr td.day');

        if (month.includes("next")) {
            changeMonth = driver.findElement(nextMonth);
            changeMonth.click();
        } else if (month.includes("prev")) {
            changeMonth = driver.findElement(prevMonth);
            changeMonth.click();
        }

        selectList = driver.findElement(selector);

        return selectList.findElements(selector1)
            .then(function findMatchingOption(options) {
                var flag = true;
                var count = 0;
                options.some(function (option) {
                    option.getText()
                        .then(function doesOptionMatch(text) {
                            count++;
                            //console.log("doesOptionMatch text :", text);
                            //console.log("date text :", date);
                            if (date == text & flag & (count > parseInt(date))) {
                                //console.log("\nmatched date: " + date + "  Value :  " + text);
                                desiredOption = option;
                                flag = false;
                            }
                        });
                });
            })
            .then(function () {
                // console.log('in td desiredOption', desiredOption);
                desiredOption.click();
                return driver.sleep(1000);
            });
    },

    gridSelectDate: function (date) {
        datePickerDays = by.css('div.picker-open div[class="datepicker-days"][style="display: block;"]');
        datePickerMonths = by.css('div.picker-open div[class="datepicker-months"][style="display: block;"]');
        datePickerYears = by.css('div.picker-open div[class="datepicker-years"][style="display: block;"]');
        pickerSwitch = by.css('.picker-switch');
        days = by.css('.day');
        months = by.css('.month');
        years = by.css('.year');
        nextIcon = by.css('.next');
        prevIcon = by.css('.prev');

        var selectList, desiredOption = null, parent;
        var dayToSelect = date.getDate();
        monthToSelect = dateFormat(date, "mmm");
        var yearToSelect = date.getFullYear();
        var finalTd = null;

        function clickMatchedText(selector, selector1, textToMatch, type) {
            return selector.findElements(selector1)
                .then(function findMatchingOption(options) {
                    var flag = true;
                    var count = 0;
                    options.some(function (option) {
                        option.getText()
                            .then(function doesOptionMatch(textFound) {
                                count++;
                                if (textToMatch == textFound & flag) {
                                    if (type.includes('day')) {
                                        if (count > parseInt(textToMatch)) {
                                            desiredOption = option;
                                            flag = false;
                                        }
                                    } else {
                                        desiredOption = option;
                                        flag = false;
                                    }
                                }
                            });
                    });
                })
                .then(function () {
                    desiredOption.click();
                    return driver.sleep(300);
                });
        }
        return driver.findElement(datePickerDays)
            .then(function (daysBlock) {
                return daysBlock.findElement(pickerSwitch).then(function (monthPickerSwitch) {
                    monthPickerSwitch.click();
                    return driver.wait(until.elementIsVisible(driver.findElement(datePickerMonths)), 5000, "date picker months not displayed");
                })
            })
            .then(function (monthBlock) {
                return monthBlock.findElement(pickerSwitch).then(function (yearPickerSwitch) {
                    yearPickerSwitch.click();
                    return driver.wait(until.elementIsVisible(driver.findElement(datePickerYears)), 5000, "date picker years not displayed");
                })
            })
            .then(function (yearBlock) {
                var yearPresentFlag = false;
                return yearBlock.findElement(pickerSwitch)
                    .then(function (yearPicker) {
                        return yearPicker.getText().then(function (yearsText) {
                            var minYearText = yearsText.split("-")[0];
                            var maxYearText = yearsText.split("-")[1];
                            if (yearToSelect >= parseInt(minYearText) & yearToSelect <= parseInt(maxYearText)) {
                                return yearPresentFlag = true;
                            } else if (yearToSelect < parseInt(minYearText)) {
                                for (var count = 1; count <= 10; count++) {
                                    yearPicker.getText().then(function (yearsText) {
                                        minYearText = parseInt(yearsText.split("-")[0]);
                                        if (yearToSelect >= minYearText) {
                                            driver.sleep(100);
                                            yearPresentFlag = true;
                                            // break;
                                        } else {
                                            yearBlock.findElement(prevIcon).click();
                                            driver.sleep(500);
                                        }
                                    })
                                }
                            } else if (yearToSelect > parseInt(maxYearText)) {
                                for (var count = 1; count <= 10; count++) {
                                    yearPicker.getText().then(function (yearsText) {
                                        maxYearText = parseInt(yearsText.split("-")[1]);
                                        if (yearToSelect <= maxYearText) {
                                            driver.sleep(100);
                                            yearPresentFlag = true;
                                            // break;
                                        } else {
                                            yearBlock.findElement(nextIcon).click();
                                            driver.sleep(500);
                                        }
                                    })
                                }
                            }
                        })
                    })
                    .then(function () {
                        if (yearPresentFlag) {
                            clickMatchedText(yearBlock, years, yearToSelect, "year");
                            return driver.wait(until.elementIsVisible(driver.findElement(datePickerMonths)), 5000, "date picker months not displayed");
                        } else {
                            assert.fail("Expected Year not clicked.");
                        }
                    })
            })
            .then(function (monthBlock) {
                clickMatchedText(monthBlock, months, monthToSelect, "month");
                return driver.wait(until.elementIsVisible(driver.findElement(datePickerDays)), 5000, "date picker months not displayed");
            })
            .then(function (daysBlock) {
                clickMatchedText(daysBlock, days, dayToSelect, "day");
                console.log("Date: ", dateFormat(date, "dd/mm/yyyy"), " is selected from calendar.");
            })
    },

    gridGetElement: function (selector1, selector2, item) {
        var selectList, desiredOption;

        selectList = driver.findElement(selector1);

        return selectList.findElements(selector2).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    console.log("OptionMatch text :", text);
                    console.log("Item text :", item);
                    if (text.includes(item)) {
                        console.log("\n\nMatched:" + item + "\nValue : " + text);
                        desiredOption = option;
                    }
                });
            });
        }).then(function returnElement() {
            assert.isDefined(desiredOption, "No element found with matching text: " + item);
            if (desiredOption) {
                // console.log("\n\Return Element");
                return desiredOption;
            }
        });
    },

    clickIncludesList: function (selector, button, selector1, item) {
        var selectList, desiredOption;
        driver.findElement(selector).findElement(by.tagName(button)).click();
        driver.sleep(200);
        return driver.wait(until.elementIsVisible(driver.findElement(selector).findElement(by.tagName('ul'))), 5000, item + " did not appear")
            .then(function (selectList) {
                return selectList.findElements(selector1).then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                            if (text === item) {
                                desiredOption = option;
                            }
                        });
                    });
                }).then(function clickOption() {
                    assert.isDefined(desiredOption, "No element found with matching text: " + item);
                    if (desiredOption) {
                        //  console.log("desiredOption:", desiredOption);
                        return desiredOption.click();
                    }
                });
            });
    },

    gridGetElementApprovalRequest: function (selector1, selector2, item) {
        var selectList, desiredOption;

        selectList = driver.findElement(selector1);
        var text1 = "";
        return selectList.findElements(selector2).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.findElements(by.css('td')).then(function findMatchingOption(options1) {
                    options1.some(function (option1) {
                        option1.getText().then(function doesOptionMatch(text) {
                            // console.log("OptionMatch text :", text);
                            text1 = text1 + text + " ";
                        });
                    })
                }).then(function () {
                    // console.log("OptionMatch text1:", text1);
                    // console.log("Item text :", item);
                    if (text1.includes(item)) {
                        console.log("\n\nMatched:" + item + "\nValue : " + text1);
                        desiredOption = option;
                    }
                }).then(function () {
                    text1 = "";
                });
            });
        }).then(function returnElement() {
            assert.isDefined(desiredOption, "No element found with matching text: " + item);
            if (desiredOption) {
                // console.log("\n\Return Element");
                return desiredOption;
            }
        });
    },

    clickIncludesListWithElement: function (elem, button, selector1, item) {
        var selectList, desiredOption;
        elem.findElement(by.tagName(button)).click();
        driver.sleep(200);
        return driver.wait(until.elementIsVisible(elem.findElement(by.tagName('ul'))), 5000, item + " did not appear")
            .then(function (selectList) {
                return selectList.findElements(selector1).then(function findMatchingOption(options) {
                    options.some(function (option) {
                        option.getText().then(function doesOptionMatch(text) {
                            if (text === item) {
                                desiredOption = option;
                            }
                        });
                    });
                }).then(function clickOption() {
                    if (desiredOption) {
                        //  console.log("desiredOption:", desiredOption);
                        return desiredOption.click();
                    }
                });
            });
    },

    setContact: function (type, number) {
        var item = type;

        selector = by.css('.contact-component ul');
        selector1 = by.css('li a');

        driver.findElement(by.css('.contact-component input')).sendKeys(number);
        driver.sleep(5000).then(function () {
            driver.wait(until.elementsLocated(selector), 20000, 'Contact Type list did not appear on page');
        });
        var selectList, desiredOption;
        //console.log('selector :', selector, '\nselector1 : ', selector1);
        selectList = driver.findElement(selector);
        //selectList.click();
        //console.log("Clicked");
        return selectList.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.getText().then(function doesOptionMatch(text) {
                    // console.log("Option:", text);
                    // console.log("Item:", item);
                    if (text.includes(item)) {
                        //console.log("matched:" + item + "\nValue : " + text);
                        desiredOption = option;
                        //return true;
                    }
                });
            });
        }).then(function clickOption() {
            if (desiredOption) {
                //  console.log("desiredOption:", desiredOption);
                desiredOption.click();
            }
        }).then(function clickTick() {
            return driver.findElement(by.css('.contact-component a[aria-label="Save contact number"]')).click();
        });
    },

    gridCaseBubble: function (selector, selector1, selector2, FirstName) {
        var selectList, desiredOption = null;
        var caseBlock = null;
        var listWorker = null;
        var collapsiblePanel = null;
        config = jsonfile.readFileSync('./support/' + featureConfig);
        FirstName = config.PersonDetails.person2.FirstName;
        driver.sleep(800);
        selectList = driver.findElement(selector);
        return selectList.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.findElement(selector2).getText()
                    .then(function doesOptionMatch(retText) {
                        //console.log("AssignedAllocation text :", retText);
                        if (FirstName === retText) {
                            //console.log("matched:" + person + "\nValue : " + retText);
                            caseBlock = option;
                        }
                    });
            });
        }).then(function clickAllocateButton() {
            if (caseBlock != null) {
                caseBlock.findElement(by.css('[style = "height: 50px; width: 50px;"]')).then(function (style) {
                    style.click();
                    driver.sleep(1500).then(function () {
                        collapsiblePanel = caseBlock.findElement(by.css('.text-center.profile-li'));
                        collapsiblePanel.getText().then(function (name) {
                            //console.log(name);
                            config = jsonfile.readFileSync('./support/' + featureConfig);
                            FirstName = config.PersonDetails.person2.FirstName;
                            expect(name).to.equal(FirstName + "'s Page");
                            collapsiblePanel.click();
                            return driver.sleep(1000);
                        });
                    });
                });
            }
        });
    },

    gridIncreasedCaseBubble: function (selector, selector1, selector2, FirstName) {
        var selectList, desiredOption = null;
        var caseBlock = null;
        var listWorker = null;
        var collapsiblePanel = null;
        config = jsonfile.readFileSync('./support/' + featureConfig);
        FirstName = config.PersonDetails.person2.FirstName;
        driver.sleep(800);
        selectList = driver.findElement(selector);
        return selectList.findElements(selector1).then(function findMatchingOption(options) {
            options.some(function (option) {
                option.findElement(selector2).getText()
                    .then(function doesOptionMatch(retText) {
                        //console.log("AssignedAllocation text :", retText);
                        if (FirstName === retText) {
                            //console.log("matched:" + person + "\nValue : " + retText);
                            caseBlock = option;
                        }
                    });
            });
        }).then(function clickAllocateButton() {
            if (caseBlock != null) {
                caseBlock.findElement(by.css('[style = "height: 55px; width: 55px;"]')).then(function (style) {
                    style.click();
                    driver.sleep(1500).then(function () {
                        collapsiblePanel = caseBlock.findElement(by.css('.text-center.profile-li'));
                        collapsiblePanel.getText().then(function (name) {
                            //console.log(name);
                            config = jsonfile.readFileSync('./support/' + featureConfig);
                            FirstName = config.PersonDetails.person2.FirstName;
                            expect(name).to.equal(FirstName + "'s Page");
                            collapsiblePanel.click();
                            return driver.sleep(1000);
                        });
                    });
                });
            }
        });
    },

    expandOnCondition: function (selector, decisionAttribute, elementName) {
        return driver.wait(until.elementLocated(selector), 5000, elementName + " is not located.").then(function (elem) {
            return elem.getAttribute(decisionAttribute).then(function (flag) {
                if (flag.includes("false")) {
                    driver.findElement(selector).click();
                    driver.sleep(700);
                    // console.log(elementName + " expanded. ");
                } else if (flag === "true") {
                    console.log(elementName + " is already expanded. ");
                } else {
                    assert.fail(elementName + " returns unexpected value. ");
                }
            })
        });
    },

    collapseOnCondition: function (selector, decisionAttribute, elementName) {
        return driver.wait(until.elementLocated(selector), 5000, elementName + " is not located.").then(function () {
            return driver.findElement(selector).getAttribute(decisionAttribute).then(function (flag) {
                if (flag === "true") {
                    driver.findElement(selector).click();
                    driver.sleep(1000);
                    console.log(elementName + " collapsed. ");
                } else {
                    console.log(elementName + " is already Collapsed. ");
                }
            })
        });
    },

    scrollIntoView: function (element) {
        return driver.executeScript("arguments[0].scrollIntoView(true);", element);
    },

    refreshBrowser: function () {
        return driver.navigate().refresh().then(function () {
            return driver.wait(until.elementLocated(by.css('head + body div')), 8000, "Page element not located").then(function () {
                return driver.wait(until.elementIsVisible(driver.findElement(by.css('head + body div'))), 4000, "Page did not load with in time");
            })
        })
    },

    retryingClick: function (selector) {
        let retry = function (selector, count) {
            var result = false;
            return driver.wait(until.elementLocated(selector), 5000, "addExclusionButton not located")
                .then(function (element) {
                    return helpers.scrollIntoView(element).then(function () {
                        return element.click().then(function () {
                            return result = true;
                        });
                    })
                }).catch(function (error) {
                    count++;
                    console.log("Count::", error);
                    if (count < 5) {
                        return retry(selector, count);
                    } else {
                        assert.fail("Element not found after multiple attempts");
                    }
                });
        }
        return retry(selector, 0);
    },

    retryingClickWithElement: function (element) {
        let retry = function (element, count) {
            var result = false;
            return driver.wait(until.elementIsVisible(element), 5000)
                .then(() => {
                    return element.click().then(function () {
                        return result = true;
                    });
                }).catch(function (error) {
                    count++;
                    console.log("Count::", error);
                    if (count < 5) {
                        return retry(element, count);
                    } else {
                        assert.fail("Element not found after multiple attempts");
                    }
                });
        }
        return retry(element, 0);
    },

    retryingClickWithParent: function (parent, selector) {
        let retryWithParent = function (parent, selector, count) {
            var result = false;
            return parent.findElement(selector).then(function (element) {
                return helpers.scrollIntoView(element).then(function () {
                    return element.click().then(function () {
                        return result = true;
                    });
                });
            }).catch(function (error) {
                count++;
                return driver.sleep(200).then(function () {
                    if (count < 5) {
                        return retryWithParent(parent, selector, count)
                    }
                });
            });
        }
        return retryWithParent(parent, selector, 0);
    },

    returnElemPosition: function (options, min, textToMatch) {
        var flag = false;
        option = options[min];
        helpers.scrollIntoView(option);
        return driver.wait(until.elementIsVisible(option), 5000, "Element from scrollFromNTo function is not visible")
            .then(function () {
                return option.getText()
                    .then(function doesOptionMatch(retText) {
                        // console.log("Optiontext :", retText);
                        // console.log("textToMatch :", textToMatch);
                        if (textToMatch === retText) {
                            // console.log("matched:" + textToMatch + "\nValue : " + retText);
                            flag = true;
                        }
                    });
            })
            .then(function () {
                if (!flag && min < options.length - 1) {
                    return helpers.returnElemPosition(options, min + 1, textToMatch);
                } else if (flag) {
                    return min;
                } else {
                    assert.fail(textToMatch, " is not found");
                }
            })
    },

    searchElement: function (options, selector, min, max, item) {
        var flag = false;
        option = options[min];
        return driver.wait(until.elementIsVisible(option), 5000, "Element from scrollFromNTo function is not visible")
            .then(function () {
                return helpers.scrollIntoView(option).then(function () {
                    return option.findElement(selector).getText()
                        .then(function doesOptionMatch(text) {
                            // console.log("OptionMatch text :", text);
                            // console.log("Item text :", item);
                            if (item === text) {
                                console.log("matched: " + item + "\nValue: " + text);
                                flag = true;
                                return option;
                            }
                        });
                });
            })
            .then(function (desiredOption) {
                if (!flag && min < max) {
                    return helpers.searchElement(options, selector, min + 1, max, item);
                } else {
                    assert.isDefined(desiredOption, "No element found with matching text: " + item);
                    return desiredOption;
                }
            })
    },

    getDateFormat: function(date, format){
        return dateFormat(date, format);
    }
};
