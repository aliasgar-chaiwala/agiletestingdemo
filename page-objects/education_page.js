module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        searchSchool: by.css('[placeholder="Search an organisation ..."]'),
        selectSchool: by.css('.education-facet > div > div > section:nth-child(1) .col-sm-12 .selectize-dropdown.multi.form-control.plugin-remove_button > div > div'),
        attendancePercent: by.css('[id="attendance"]'),
        attendStartDateIcon: by.css('#datePickerStartDate i'),
        unAuthorisedAbsenceInput: by.css('#noOfunothorised'),
        authorisedAbsenceInput: by.css('#noOfothorised'),
        attendEndDateIcon: by.css('#datePickerEndDate i'),
        addExclusionButton: by.css('button[name="add-exclusion-btn"]'),
        exclusionCategory: by.css('select[name="Exlusions category"]'),
        exclusionStartDate: by.css('.exclusion-panel #datePickerStartDate i'),
        exclusionReason: by.css('textarea[name="reason "]'),
        exclusionEndDate: by.css('.exclusion-panel #datePickerConsentEndDate i'),
        exclusionDuration: by.css('#duration'),
        saveExclusion: by.css('.exclusion-panel div.confirm-panel a.address-tick'),
        saveSecondExclusion: by.css('.exclusion-panel-edit div.confirm-panel a.address-tick'),
        specialEduNeedStatus: by.css('.education-facet > div > div > section:nth-child(8) > div > div:nth-child(1) select'),
        EHCstartDate: by.css('#datePickerEHCStartDate > div > div > div > input '),
        additionInfo: by.css('span[aria-label="Attendance "]'),
        training: by.css('[aria-label="Training"]'),
        EHCendDate: by.css('#datePickerEHCEndDate > div > div > div > input'),
        submitEducationButton: by.css('button[name="submit-info"]'),
        essentialInfo: by.css('[name="educationInfo"] > div:nth-child(2) > div > strong:nth-child(1)'),
        orgNameInEdu: by.css('.school-address-panel address > strong:nth-child(1)'),
        courseLevel: by.css('[class="provision-block row"] > div:nth-child(1) strong:nth-child(1)'),
        eduCourse: by.css('[class="provision-block row"] > div:nth-child(1) strong:nth-child(2)'),
        eduInstitute: by.css('[class="provision-block row"] > div:nth-child(1) strong:nth-child(3)'),
        TrainingAddMoreButn: by.css('#addMoreTraining'),
        TrainingSearchOrg: by.css('#addCourse div.selectize-input.items.not-full input[type="text"]'),
        TrainingOrgSelect: by.css('div[data-bind*="propName : \'educationalInstitutions\'"] div.option'),
        TrainingLevel: by.css('#addCourse > div:nth-child(2) select'),
        TrainingCourseUnd: by.css('#addCourse > div:nth-child(3) select'),
        TrainingStartDate: by.css('#addCourse > div:nth-child(5) > div:nth-child(1) input'),
        TrainingEndDate: by.css('#addCourse > div:nth-child(5) > div:nth-child(2) input'),
        TrainingSaveButton: by.css('[title="Save"]'),
        TrainingSubmitButton: by.css('[name="submit-info"]')

    },


    setSchoolInfo: function () {
        return driver.wait(until.elementsLocated(page.education_page.elements.searchSchool), 10000).then(function () {
            driver.findElement(page.education_page.elements.searchSchool).sendKeys(config.Organisation.BasicInfo.NewName);
            return driver.sleep(3000).then(function () {
                return driver.findElement(page.education_page.elements.selectSchool).click().then(function () {
                    driver.sleep(1000);
                    return driver.wait(until.elementsLocated(page.education_page.elements.orgNameInEdu), 10000).then(function () {
                        return driver.findElement(page.education_page.elements.orgNameInEdu).getText().then(function (schoolName) {
                            console.log("schoolName: ", schoolName);
                            return expect(schoolName).to.equal(config.Organisation.BasicInfo.NewName);
                        })
                    })
                })
            })
        })
    },

    setAttendanceDetails: function () {
        return driver.findElement(page.education_page.elements.attendancePercent).sendKeys('55')
            .then(function () {
                return driver.findElement(page.education_page.elements.attendStartDateIcon).click();
            }).then(function () {
                return driver.findElement(page.education_page.elements.authorisedAbsenceInput).sendKeys('5');
            }).then(function () {
                return driver.findElement(page.education_page.elements.attendEndDateIcon).click();
            }).then(function () {
                return driver.findElement(page.education_page.elements.unAuthorisedAbsenceInput).sendKeys('2');
            });
    },

    addExclusion: function () {
        return driver.findElement(page.education_page.elements.addExclusionButton).click().then(function () {
            return driver.wait(until.elementsLocated(page.education_page.elements.exclusionCategory), 2000)
                .then(function () {
                    return helpers.selectOption(page.education_page.elements.exclusionCategory, 'Warning');
                }).then(function () {
                    return driver.findElement(page.education_page.elements.exclusionStartDate).click();
                }).then(function () {
                    return driver.findElement(page.education_page.elements.exclusionReason).click();
                }).then(function () {
                    return driver.findElement(page.education_page.elements.exclusionEndDate).click();
                }).then(function () {
                    return driver.findElement(page.education_page.elements.exclusionDuration).sendKeys('5');
                }).then(function () {
                    driver.findElement(page.education_page.elements.exclusionReason).click();
                    return driver.findElement(page.education_page.elements.exclusionReason).sendKeys('Reason1 for Exclusion')
                })
        }).then(function () {
            return driver.wait(until.elementLocated(by.css('span[aria-label="Attendance"]')), 5000, "atteandanceLableElem not located")
                .then(function (atteandanceLableElem) {
                    return helpers.scrollIntoView(atteandanceLableElem)
                        .then(function () {
                            return driver.wait(until.elementIsVisible(atteandanceLableElem), 5000, "atteandanceLableElem not visible");
                        });
                })
        }).then(function () {
            return driver.findElement(page.education_page.elements.addExclusionButton).click().then(function () {
                return driver.wait(until.elementsLocated(page.education_page.elements.exclusionCategory), 2000)
                    .then(function () {
                        return helpers.selectOption(page.education_page.elements.exclusionCategory, 'Warning');
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.exclusionStartDate).click();
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.exclusionReason).click();
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.exclusionEndDate).click();
                    }).then(function () {
                        driver.findElement(page.education_page.elements.exclusionDuration).sendKeys('5');
                        return driver.findElement(page.education_page.elements.exclusionReason).sendKeys('Reason2 for Exclusion')
                            .then(function () {
                                // console.log("Saving the exclusion");
                                return driver.findElement(page.education_page.elements.saveExclusion).click().then(function () {
                                    // console.log("Saving the exclusion2");
                                    return driver.findElement(page.education_page.elements.saveSecondExclusion).click()
                                });
                            })
                    })
            })
        });
    },

    setAdditionalInfo: function () {
        helpers.selectOption(page.education_page.elements.specialEduNeedStatus, 'E - Education Health and Care Plan');
        return driver.findElement(page.education_page.elements.training).click()
            .then(function () {
                driver.findElement(page.education_page.elements.training).click();
                return driver.wait(until.elementsLocated(page.education_page.elements.EHCstartDate), 2000)
                    .then(function () {
                        return driver.findElement(page.education_page.elements.EHCstartDate).click();
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.additionInfo).click();
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.EHCendDate).click();
                    }).then(function () {
                        return driver.findElement(page.education_page.elements.additionInfo).click();
                    })
            })
    },

    submitEducation: function () {
        //        console.log("submit");
        return driver.findElement(page.education_page.elements.submitEducationButton).click()
            .then(function () {
                return driver.wait(until.elementsLocated(page.education_page.elements.essentialInfo), 10000)
            })
    },

    verifyCourse: function () {
        return driver.wait(until.elementsLocated(page.education_page.elements.courseLevel), 10000)
            .then(function () {
                return driver.findElement(page.education_page.elements.courseLevel).getText()
                    .then(function (courseLevel) {
                        return expect(courseLevel).to.contain('MBA');
                    })
            })
            .then(function () {
                return driver.findElement(page.education_page.elements.eduCourse).getText()
                    .then(function (eduCourse) {
                        return expect(eduCourse).to.contain('Agriculture');
                    })
            })
            .then(function () {
                return driver.findElement(page.education_page.elements.eduInstitute).getText()
                    .then(function (eduInstitute) {
                        return expect(eduInstitute).to.contain(config.Organisation.BasicInfo.NewName);


                    })
            })
    },

    createTrainingDetails: function () {
        driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
        driver.wait(until.elementsLocated(page.education_page.elements.TrainingAddMoreButn), 10000)
        return driver.findElement(page.education_page.elements.TrainingAddMoreButn).click().then(function () {
            driver.sleep(1200);
            driver.findElement(page.education_page.elements.TrainingSearchOrg).sendKeys(config.Organisation.BasicInfo.NewName);
            driver.sleep(800);
            return driver.wait(until.elementsLocated(page.education_page.elements.TrainingOrgSelect), 10000)
                .then(function () {
                    driver.sleep(1000);
                    driver.findElement(page.education_page.elements.TrainingOrgSelect).click();
                    driver.sleep(1000);
                    driver.wait(until.elementsLocated(page.education_page.elements.TrainingLevel), 10000)
                    helpers.selectOption(page.education_page.elements.TrainingLevel, 'Foundation degree');
                    driver.sleep(1000);
                    return helpers.selectOption(page.education_page.elements.TrainingCourseUnd, 'Autism & Aspergers').then(function () {
                        return driver.findElement(page.education_page.elements.TrainingStartDate).click().then(function () {
                            driver.sleep(300);
                            helpers.gridClickDate('curr', '16');
                            return driver.findElement(page.education_page.elements.TrainingEndDate).click().then(function () {
                                driver.sleep(300);
                                helpers.gridClickDate('next', '16');
                                return driver.sleep(300).then(function () {
                                    return driver.findElement(page.education_page.elements.TrainingSaveButton).click().then(function () {
                                        driver.findElement(page.education_page.elements.TrainingSubmitButton).click();
                                        return driver.sleep(1000)
                                    })
                                })
                            })
                        })
                    })
                })

        })

    },

    createAnotherTrainingDetailsForPerson1: function () {
        driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
        driver.wait(until.elementsLocated(page.education_page.elements.TrainingAddMoreButn), 10000)
        return driver.findElement(page.education_page.elements.TrainingAddMoreButn).click().then(function () {
            driver.sleep(1200);
            driver.findElement(page.education_page.elements.TrainingSearchOrg).sendKeys(config.Organisation.BasicInfo.NewName);
            driver.sleep(800);
            return driver.wait(until.elementsLocated(page.education_page.elements.TrainingOrgSelect), 10000)
                .then(function () {
                    driver.sleep(1000);
                    return driver.findElement(page.education_page.elements.TrainingOrgSelect).click()
                })
                .then(function () {
                    driver.sleep(800);
                    driver.wait(until.elementsLocated(page.education_page.elements.TrainingLevel), 10000)
                    helpers.selectOption(page.education_page.elements.TrainingLevel, 'MBA');
                    driver.sleep(800);
                    return helpers.selectOption(page.education_page.elements.TrainingCourseUnd, 'Gang Culture').then(function () {
                        driver.sleep(800);
                        return driver.findElement(page.education_page.elements.TrainingStartDate).click()
                            .then(function () {
                                driver.sleep(300);
                                helpers.gridClickDate('curr', '16');
                            })
                            .then(function () {
                                driver.findElement(page.education_page.elements.TrainingEndDate).click()
                                driver.sleep(300);
                                helpers.gridClickDate('next', '16');
                            })
                            .then(function () {
                                driver.findElement(page.education_page.elements.TrainingSaveButton).click()
                                driver.sleep(1000);
                                return driver.findElement(page.education_page.elements.TrainingSubmitButton).click();
                            })
                    })
                })

        })

    },

    createAnotherTrainingDetailsForPerson: function () {
        driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
        driver.wait(until.elementsLocated(page.education_page.elements.TrainingAddMoreButn), 10000)
        return driver.findElement(page.education_page.elements.TrainingAddMoreButn).click().then(function () {
            driver.sleep(1200);
            driver.findElement(page.education_page.elements.TrainingSearchOrg).sendKeys(config.Organisation.BasicInfo.NewName);
            driver.sleep(2000);
            return driver.findElement(page.education_page.elements.TrainingOrgSelect).click().then(function () {
                driver.wait(until.elementsLocated(page.education_page.elements.TrainingLevel), 10000)
                helpers.selectOption(page.education_page.elements.TrainingLevel, 'Certificate of Higher Education');
                helpers.selectOption(page.education_page.elements.TrainingCourseUnd, 'Parent & Child Placements').then(function () {
                    return driver.findElement(page.education_page.elements.TrainingStartDate).click().then(function () {
                        driver.sleep(300);
                        helpers.gridClickDate('curr', '16');
                        return driver.findElement(page.education_page.elements.TrainingEndDate).click().then(function () {
                            driver.sleep(300);
                            helpers.gridClickDate('next', '18');
                            return driver.sleep(300).then(function () {
                                return driver.findElement(page.education_page.elements.TrainingSaveButton).click().then(function () {
                                    driver.findElement(page.education_page.elements.TrainingSubmitButton).click();
                                    return driver.sleep(1000)
                                })
                            })
                        })
                    })
                })
            })

        })

    }
}