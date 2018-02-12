module.exports = {
    elements: {
        professionalName: by.css('.professional-banner .given-name'),
        addProfessionalLabel: by.css('h2[class="page-title"]'),
        setProfFirstName: by.css('[name="subjectName"]'),
        setProfMiddleName: by.css('[placeholder="Enter middle name"]'),
        setProfLastName: by.css('[placeholder="Enter last name"]'),
        addWorkInfo: by.css('[name="add-organisation"]'),
        setRole: by.css('[id="selectRole"]'),
        roleList: by.css('div[name="work-info-panel"] div[data-bind*="isRoleSelected"] ul'),
        roleListItem: by.css('li a'),
        submitProf: by.css('[name="submit-info"]'),
        searchInProf: by.css('[id="nav-global-search-box"]'),
        roleFromDate: by.css('.work-info-table td:nth-child(3) .dateonlypicker'),
        workInfoRoleSubmitTick: by.css('.work-info-table .confirm-panel .icon-thik-tick'),
        workLoadSection: by.css('[aria-controls="workload"]')
    },


    professionalVerification: function (professional) {
        return driver.wait(until.elementsLocated(page.professional_page.elements.professionalName), 10000).then(function () {
            //  console.log('Prof: ', professional);
            return driver.findElement(page.professional_page.elements.professionalName).getText().then(function (prof) {
                //   console.log("get: ", prof);
                return expect(prof).to.equal(professional);
            });
            //   return assert(driver.findElement(page.professional_page.elements.professionalName).getText(), professional);
        });
    },

    addProfessional: function (professionalName) {
        // console.log("in setPerson");

        return driver.wait(until.elementsLocated(page.professional_page.elements.addProfessionalLabel), 10000).then(function () {
            driver.wait(until.elementsLocated(page.professional_page.elements.setProfFirstName), 10000);
            driver.wait(until.elementsLocated(page.professional_page.elements.setProfMiddleName), 10000);
            driver.wait(until.elementsLocated(page.professional_page.elements.setProfLastName), 10000);
            driver.wait(until.elementsLocated(page.professional_page.elements.addWorkInfo), 10000);
            driver.wait(until.elementsLocated(page.professional_page.elements.submitProf), 10000);
            driver.sleep(500);
            return driver.findElement(page.professional_page.elements.searchInProf).click().then(function () {
                //  console.log('In then 1')
                //  driver.findElement(page.addPerson_page.elements.setProfFirstName).clear();
                return driver.wait(until.elementsLocated(page.professional_page.elements.setProfFirstName), 10000).then(function () {
                    // driver.sleep(500);
                    //      console.log("in then 2");
                    driver.findElement(page.professional_page.elements.setProfFirstName).sendKeys(professionalName[0]);
                    driver.findElement(page.professional_page.elements.setProfMiddleName).sendKeys(professionalName[1]);
                    return driver.findElement(page.professional_page.elements.setProfLastName).sendKeys(professionalName[2]);
                });
            });
        });
    },

    addWorkInformation: function () {
        return driver.wait(until.elementLocated(page.professional_page.elements.addWorkInfo), 10000).then(function (addWorkInfoElem) {
            return helpers.scrollIntoView(addWorkInfoElem).then(function () {
                return addWorkInfoElem.click();
            }).then(function () {
                driver.sleep(500);
                return driver.wait(until.elementsLocated(page.professional_page.elements.setRole), 3000).then(function () {
                    driver.findElement(page.professional_page.elements.setRole).click();
                    driver.wait(until.elementsLocated(page.professional_page.elements.roleList), 10000);
                    helpers.clickIncludesGrid(page.professional_page.elements.roleList, page.professional_page.elements.roleListItem, 'Head Teacher');
                    return driver.sleep(500)
                        .then(function () {
                            return driver.findElement(page.professional_page.elements.roleFromDate).click().then(function () {
                                driver.findElement(page.professional_page.elements.workInfoRoleSubmitTick).click();
                                return driver.sleep(2000);
                            });
                        });
                });
            });
        });
    },

    submitProfessional: function () {
        //  console.log('submit');
        return driver.findElement(page.professional_page.elements.submitProf).click().then(function () {
            driver.sleep(3000);
            return driver.wait(until.elementsLocated(page.professional_page.elements.workLoadSection), 25000);
        });
    }
}