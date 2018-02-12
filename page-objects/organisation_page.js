module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {

        addProfessionalLabel: by.css('h2[class="page-title"]'),
        setOrgName: by.css('[name="subjectName"]'),
        setOrgType: by.css('[id="typeSelect"]'),
        setOrgTypeList: by.css('div[name="createNewOrganisationType"] ul'),
        setOrgTypeListItem: by.css('li a'),
        personEmail: by.css('[id="personEmail"]'),
        contactNumber: by.css('[id="user-input"]'),
        submitOrg: by.css('[name="submit-info"]'),
        searchInOrg: by.css('[id="nav-global-search-box"]'),
        workLoadSection: by.css('[aria-controls="workload"]'),
        organisationName: by.css('.organisation-banner .given-name'),
        addmemberButton: by.css('[name="add-member-btn"]'),
        searchMember: by.css('.work-info-table .selectize-control .selectize-input > input'),
        search1stElement: by.css('.selectize-dropdown .selectize-dropdown-content div:nth-child(1)'),
        roleFromDt: by.css('.work-info-table td:nth-child(3) .dateonlypicker'),
        roleSelect: by.css('[id="selectRole"]'),
        roleList: by.css('div[name="Members-info-panel"] div[data-bind*="isRoleSelected"] ul'),
        roleListItem: by.css('li a'),
        workInfoRoleSubmitTick: by.css('.work-info-table .confirm-panel .icon-thik-tick'),
        profMember: by.css('[name="member-name"]'),
        workProf: by.css('[class="professional-tag m-l-sm"]'),
        setOrgTypeButton: by.css('#typeSelect'),
        setOrgTypeList: by.css('div[name="createNewOrganisationType"] ul'),
        setOrgTypeListItem: by.css('li a')
    },

    addOrganisation: function (organisationName, professionalName) {
        var email1 = organisationName.split(" ");
        email = email1[0] + "@example.com";
        //console.log("in setOrg");
        //console.log("1");
        driver.wait(until.elementsLocated(page.organisation_page.elements.addProfessionalLabel), 10000);
        driver.wait(until.elementsLocated(page.organisation_page.elements.submitOrg), 10000);
        return driver.findElement(page.organisation_page.elements.searchInOrg).click().then(function () {
            // console.log("2");
            // console.log('In then 1')
            console.log("organisationName: ", organisationName);
            console.log("Email: " + email);
            return driver.wait(until.elementsLocated(page.organisation_page.elements.setOrgName), 10000).then(function () {
                // console.log("3");
                return driver.findElement(page.organisation_page.elements.setOrgName).sendKeys(organisationName).then(function () {
                    driver.findElement(page.organisation_page.elements.setOrgType).click();
                    helpers.clickIncludesGrid(page.organisation_page.elements.setOrgTypeList, page.organisation_page.elements.setOrgTypeListItem, 'School');
                    //console.log("4");

                    return driver.wait(until.elementLocated(page.organisation_page.elements.addmemberButton), 10000).then(function (addMemberElem) {
                        return helpers.scrollIntoView(addMemberElem).then(function () {
                            return addMemberElem.click();
                        }).then(function () {
                            return driver.findElement(page.organisation_page.elements.personEmail).sendKeys(email);
                        }).then(function () {
                            return helpers.setContact('Home', '121244544').then(function () {
                                return driver.wait(until.elementsLocated(page.organisation_page.elements.addmemberButton), 10000).then(function () {
                                    // console.log("5");
                                    return driver.wait(until.elementsLocated(page.organisation_page.elements.searchMember), 10000).then(function () {
                                        //  console.log("6");
                                        return driver.findElement(page.organisation_page.elements.searchMember).sendKeys(professionalName).then(function () {
                                            // console.log("7");
                                            return driver.sleep(2000)
                                                .then(function () {
                                                    return driver.wait(until.elementsLocated(page.organisation_page.elements.search1stElement), 10000).then(function () {
                                                        driver.findElement(page.organisation_page.elements.search1stElement).click();
                                                        driver.sleep(1000);
                                                        // console.log("9");
                                                        driver.wait(until.elementsLocated(page.organisation_page.elements.roleSelect), 20000);
                                                        driver.findElement(page.organisation_page.elements.roleSelect).click();
                                                        helpers.clickIncludesGrid(page.organisation_page.elements.roleList, page.organisation_page.elements.roleListItem, 'Head Teacher');
                                                        return driver.findElement(page.organisation_page.elements.roleFromDt).click().then(function () {
                                                            //console.log("11");
                                                            driver.sleep(500);
                                                            return driver.findElement(page.organisation_page.elements.workInfoRoleSubmitTick).click().then(function () {
                                                                // console.log("12");
                                                                return driver.wait(until.elementsLocated(page.organisation_page.elements.workProf), 10000);
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
        });
    },

    addOrgWithoutMem: function (organisationName) {
        // console.log("1");
        driver.wait(until.elementsLocated(page.organisation_page.elements.addProfessionalLabel), 10000);
        driver.wait(until.elementsLocated(page.organisation_page.elements.submitOrg), 10000);
        return driver.findElement(page.organisation_page.elements.searchInOrg).click().then(function () {
            //  console.log("2");            
            //   console.log("organisationName: ",organisationName);
            return driver.wait(until.elementsLocated(page.organisation_page.elements.setOrgName), 10000).then(function () {
                //  console.log("3");
                // helpers.selectOption(page.organisation_page.elements.setOrgType, 'School');

                return driver.findElement(page.organisation_page.elements.setOrgName).sendKeys(organisationName).then(function () {
                    //  console.log("4");
                    driver.findElement(page.organisation_page.elements.addmemberButton).click();
                    return driver.wait(until.elementsLocated(page.organisation_page.elements.addmemberButton), 10000).then(function () {
                        //  console.log("5");
                        return driver.wait(until.elementsLocated(page.organisation_page.elements.searchMember), 10000);
                    });
                });
            });
        });
    },
    addOrgAsCourt: function (organisationName) {
        driver.wait(until.elementsLocated(page.organisation_page.elements.addProfessionalLabel), 10000);
        driver.wait(until.elementsLocated(page.organisation_page.elements.submitOrg), 10000);
        return driver.findElement(page.organisation_page.elements.searchInOrg).click().then(function () {
            return driver.wait(until.elementsLocated(page.organisation_page.elements.setOrgName), 10000).then(function () {
                return driver.findElement(page.organisation_page.elements.setOrgName).sendKeys(organisationName).then(function () {
                    driver.findElement(page.organisation_page.elements.setOrgTypeButton).click();
                    helpers.clickIncludesGrid(page.organisation_page.elements.setOrgTypeList, page.organisation_page.elements.setOrgTypeListItem, 'Court');
                    driver.findElement(page.organisation_page.elements.addmemberButton).click();
                    return driver.wait(until.elementsLocated(page.organisation_page.elements.addmemberButton), 10000).then(function () {
                        return driver.wait(until.elementsLocated(page.organisation_page.elements.searchMember), 10000);
                    });
                });
            });
        });
    },

    submitOrganisation: function () {
        driver.sleep(800);
        //  console.log("In submit");
        return driver.findElement(page.organisation_page.elements.submitOrg).click().then(function () {
            //  console.log('In then3');
            return driver.wait(until.elementsLocated(page.organisation_page.elements.workLoadSection), 25000);
        });
    },

    organisationVerification: function (organisation) {
        return driver.wait(until.elementsLocated(page.organisation_page.elements.organisationName), 10000).then(function () {
            return driver.findElement(page.organisation_page.elements.organisationName).getText().then(function (org) {
                //   console.log("assert org1");
                expect(org).to.equal(organisation);
            });
        });
    },

    profOnOrgPage: function (professional) {
        return driver.wait(until.elementsLocated(page.organisation_page.elements.profMember), 10000).then(function () {
            return driver.findElement(page.organisation_page.elements.profMember).getText().then(function (prof) {
                //   console.log("assert prof: ", prof);
                return expect(prof).to.equal(professional);
            });
        });
    }

}