module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        serviceProviderLabel: by.css('#filterCss > div > div.app-wrapper > div.app-tabs.showService > div.row > div h2'),
        addNewServiceProvider: by.css('[aria-label="Add new service provider"]'),
        setOrganisation: by.css('[placeholder="Search for..."]'),
        selectOrganisation: by.css('#create-new-serviceProvider > div > div:nth-child(3) > div:nth-child(1) .selectize-dropdown.multi.form-control.plugin-remove_button > div > div'),
        createServiceProvider: by.css('#create-new-serviceProvider > div > div:nth-child(7) .col-sm-11.align-right.ls-button-group > button:nth-child(2)'),

        serviceParent: by.css('.app-tabs.showService .panel-group.accordion'),
        serviceSelect: by.css('.app-tabs.showService .panel-group.accordion .panel.panel-default h2 a'),
        serviceWidget: by.css('#serviceProvider'),
        serviceBanner: by.css('#maincontent .service-provider-banner .col-sm-11 > div:nth-child(1) .col-sm-8 span'),
        addNewService: by.css('[aria-label="Add new service "]'),
        // chooseService: by.css('[id="servieType"]'),
        serviceName: by.css('[id="service_name"]'),
        capacity: by.css('[id="capacity"]'),
        rate: by.css('[placeholder="rate"]'),
        chooseDuration: by.css('[id="frequencyForCapacity"]'),
        chooseCareType: by.css('[id="unitForCapacity"]'),
        chooseRateDuration: by.css('[id="costFrequency"]'),
        chooseRateCareType: by.css('[id="costUnit"]'),
        saveCost: by.css('[aria-label="Save cost"]'),
        createService: by.css('[name="new-provider-create"]'),
        createdService: by.css('#acc_Ambulances > div.panel-heading.m-b-sm.collapsed > h2 > a'),
        serviceHouse: by.css('[aria-label="House and street number"]'),
        serviceArea: by.css('[aria-label="Area"]'),
        serviceCountry: by.css('[aria-label="County"]'),
        servicePostCode: by.css('[aria-label="Postcode"]'),
        serviceCheck: by.css('span[data-bind*="defaultAddressCheck(true)"]'),
        serviceMark: by.css('[aria-label="click to save address"]'),
        capacity2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(1) > div #capacity'),
        rate2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(2) > div > input'),
        chooseDuration2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(1) > div #frequencyForCapacity'),
        chooseRateDuration2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(2) > div #costFrequency'),
        chooseCareType2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(1) > div #unitForCapacity'),
        chooseRateCareType2: by.css('#create-new-service > div > div:nth-child(12) > div:nth-child(2) > div #costUnit'),
        createService2: by.css('#create-new-service > div > div:nth-child(14) > div > button.btn.btn-primary.pull-right'),
        clickService: by.css('#primarySupportReason'),
        serviceDropdown: by.css('div[name="createServiceServiceType"] ul'),
        serviceDropdownList: by.css('li a'),
        frequencyForCapacitybutton: by.css('[id="frequencyForCapacity"]'),
        frequencyForCapacitybuttonDropdown: by.css('div[name="createServiceFrequencyForCapacity"] ul'),
        frequencyForCapacitybuttonDropdownList: by.css('li a'),
        costfrequencyButton: by.css('#costFrequency'),
        costfrequencyButtonDropDown: by.css('div[name="createServiceUnitForCapacitycostUnit"] ul'),
        costfrequencyButtonDropDownList: by.css('li a'),
        unitforcapapcityButton: by.css('#unitForCapacity'),
        unitforcapapcityButtonDropDown: by.css('div[name="createServiceunitForCapacity"] ul'),
        unitforcapapcityButtonDropDownList: by.css('li a'),
        addressLine1: by.css('.postal-address input[name="addressLine1"]'),
        addressLineArea: by.css('.postal-address input[name="Area"]'),
        addressLineTown: by.css('.postal-address input[name="Town"]'),
        addressLineCounty: by.css('.postal-address input[name="County"]'),
        addressLinePin: by.css('div[data-bind*="postCode"] input[name="postCode"]'),
        tickButton: by.css('button[data-bind*="addNewAddress"]'),
        serviceFrequencyforCapapcityDiv: by.css('div[name="createServiceFrequencyForCapacity"]'),
        commonlist: by.css('li a'),
        serviceCostFrequencyDiv: by.css('div[name="createServiceCostFrequency"]'),
        serviceunitForCapacityDiv: by.css('div[name="createServiceunitForCapacity"]'),
        serviceUnitForCapacitycostUnitdiv: by.css('div[name="createServiceUnitForCapacitycostUnit"]')
    },

    addServiceProvider: function (org) {
        driver.sleep(150);
        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.serviceProviderLabel), 10000)
            .then(function () {
                return driver.findElement(page.serviceProvider_page.elements.serviceProviderLabel).getText()
                    .then(function (service) {
                        expect(service).to.equal("Service Provider");
                        return driver.sleep(1000)
                            .then(function () {
                                driver.findElement(page.serviceProvider_page.elements.addNewServiceProvider).click()
                                return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.setOrganisation), 10000)
                                    .then(function () {
                                        return driver.findElement(page.serviceProvider_page.elements.setOrganisation).sendKeys(org)
                                            .then(function () {
                                                driver.sleep(2000);
                                                return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.selectOrganisation), 10000)
                                                    .then(function () {
                                                        driver.findElement(page.serviceProvider_page.elements.selectOrganisation).click()
                                                        return driver.sleep(1000)
                                                            .then(function () {
                                                                return driver.findElement(page.serviceProvider_page.elements.addressLine1).sendKeys(config.Organisation.Address2.House)
                                                                    .then(function () {
                                                                        return driver.findElement(page.serviceProvider_page.elements.addressLineArea).sendKeys(config.Organisation.Address2.Area)
                                                                            .then(function () {
                                                                                return driver.findElement(page.serviceProvider_page.elements.addressLineCounty).sendKeys(config.Organisation.Address2.Country)
                                                                                    .then(function () {
                                                                                        return driver.findElement(page.serviceProvider_page.elements.addressLinePin).sendKeys(config.Organisation.Address2.Post)
                                                                                            .then(function () {
                                                                                                return driver.findElement(page.serviceProvider_page.elements.tickButton).click()
                                                                                                    .then(function () {
                                                                                                        driver.findElement(page.serviceProvider_page.elements.createServiceProvider).click();
                                                                                                        return driver.sleep(2000)
                                                                                                            .then(function () {
                                                                                                                helpers.gridGetText(page.serviceProvider_page.elements.serviceParent, page.serviceProvider_page.elements.serviceSelect, org);
                                                                                                                return driver.sleep(2000);
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

    addService: function (org, serviceName) {
        driver.sleep(150);
        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.serviceProviderLabel), 10000)
            .then(function () {
                return driver.findElement(page.serviceProvider_page.elements.serviceProviderLabel).getText()
                    .then(function (service) {
                        expect(service).to.equal("Service Provider");
                        return driver.sleep(1000)
                            .then(function () {
                                return helpers.gridClick(page.serviceProvider_page.elements.serviceParent, page.serviceProvider_page.elements.serviceSelect, org)
                                    .then(function () {
                                        driver.sleep(1500);
                                        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.serviceWidget), 10000)
                                            .then(function () {
                                                return driver.findElement(page.serviceProvider_page.elements.serviceWidget).click()
                                                    .then(function () {
                                                        driver.sleep(2000);
                                                        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.serviceBanner), 10000)
                                                            .then(function () {
                                                                return driver.findElement(page.serviceProvider_page.elements.serviceBanner).getText()
                                                                    .then(function (orgName) {
                                                                        expect(orgName).to.equal(org);

                                                                        driver.sleep(1000);
                                                                        driver.findElement(page.serviceProvider_page.elements.addNewService).click();
                                                                        console.log("after adding new service");
                                                                        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.clickService), 10000)
                                                                            .then(function () {
                                                                                driver.findElement(page.serviceProvider_page.elements.clickService).click();
                                                                                helpers.clickIncludesGrid(page.serviceProvider_page.elements.serviceDropdown, page.serviceProvider_page.elements.serviceDropdownList, 'Ambulances');
                                                                                //helpers.selectOption(page.serviceProvider_page.elements.chooseService, "Ambulances");
                                                                                driver.findElement(page.serviceProvider_page.elements.serviceName).sendKeys(serviceName);
                                                                                driver.sleep(300);
                                                                                return driver.findElement(page.serviceProvider_page.elements.serviceHouse).clear()
                                                                                    .then(function () {
                                                                                        return driver.findElement(page.serviceProvider_page.elements.serviceHouse).sendKeys(config.Organisation.Address2.House)
                                                                                            .then(function () {
                                                                                                return driver.findElement(page.serviceProvider_page.elements.serviceArea).clear()
                                                                                                    .then(function () {
                                                                                                        return driver.findElement(page.serviceProvider_page.elements.serviceArea).sendKeys(config.Organisation.Address2.Area)
                                                                                                            .then(function () {
                                                                                                                driver.findElement(page.serviceProvider_page.elements.serviceCountry).clear()
                                                                                                                    .then(function () {
                                                                                                                        driver.findElement(page.serviceProvider_page.elements.serviceCountry).sendKeys(config.Organisation.Address2.Country);
                                                                                                                        driver.executeScript('return window.scrollTo(' + 41 + ',' + 566 + ');');
                                                                                                                        return driver.findElement(page.serviceProvider_page.elements.servicePostCode).clear()
                                                                                                                            .then(function () {


                                                                                                                                driver.findElement(page.serviceProvider_page.elements.servicePostCode).sendKeys(config.Organisation.Address2.Post);
                                                                                                                                driver.findElement(page.serviceProvider_page.elements.serviceCheck).click();
                                                                                                                                driver.findElement(page.serviceProvider_page.elements.serviceMark).click();

                                                                                                                                driver.findElement(page.serviceProvider_page.elements.capacity).sendKeys('10');
                                                                                                                                driver.sleep(300);
                                                                                                                                driver.findElement(page.serviceProvider_page.elements.rate).sendKeys('10');
                                                                                                                                return helpers.clickIncludesList(page.serviceProvider_page.elements.serviceFrequencyforCapapcityDiv, 'button', page.serviceProvider_page.elements.commonlist, "Per Hour")
                                                                                                                                    .then(function () {
                                                                                                                                        return helpers.clickIncludesList(page.serviceProvider_page.elements.serviceCostFrequencyDiv, 'button', page.serviceProvider_page.elements.commonlist, "Per Hour")
                                                                                                                                            .then(function () {
                                                                                                                                                return helpers.clickIncludesList(page.serviceProvider_page.elements.serviceunitForCapacityDiv, 'button', page.serviceProvider_page.elements.commonlist, "Day Care")
                                                                                                                                                    .then(function () {
                                                                                                                                                        helpers.clickIncludesList(page.serviceProvider_page.elements.serviceUnitForCapacitycostUnitdiv, 'button', page.serviceProvider_page.elements.commonlist, "Day Care");
                                                                                                                                                        driver.sleep(300);
                                                                                                                                                        return driver.findElement(page.serviceProvider_page.elements.frequencyForCapacitybutton).click()
                                                                                                                                                            .then(function () {
                                                                                                                                                                driver.sleep(300);
                                                                                                                                                                driver.findElement(page.serviceProvider_page.elements.saveCost).click();
                                                                                                                                                                driver.sleep(300);
                                                                                                                                                                driver.findElement(page.serviceProvider_page.elements.createService).click()
                                                                                                                                                                driver.sleep(300);
                                                                                                                                                                driver.wait(until.elementsLocated(page.serviceProvider_page.elements.createdService), 10000);
                                                                                                                                                                driver.sleep(2000);
                                                                                                                                                                return driver.findElement(page.serviceProvider_page.elements.createdService).getText()
                                                                                                                                                                    .then(function (newService) {
                                                                                                                                                                        var ambService = serviceName + ' ' + '(Ambulances)';
                                                                                                                                                                        return expect(newService).to.equal(ambService);
                                                                                                                                                                    });
                                                                                                                                                            });
                                                                                                                                                    });
                                                                                                                                            });
                                                                                                                                    });
                                                                                                                            });
                                                                                                                    });

                                                                                                            });
                                                                                                    });
                                                                                            })

                                                                                    })
                                                                            })
                                                                    })
                                                            })
                                                    });
                                            });
                                    });

                            });
                    });
            });

    },

    addAnotherService: function (org, serviceName) {
        driver.sleep(150);
        driver.findElement(page.serviceProvider_page.elements.addNewService).click();
        console.log("after adding new service");
        return driver.wait(until.elementsLocated(page.serviceProvider_page.elements.clickService), 10000)
            .then(function () {
                driver.findElement(page.serviceProvider_page.elements.clickService).click();
                helpers.clickIncludesGrid(page.serviceProvider_page.elements.serviceDropdown, page.serviceProvider_page.elements.serviceDropdownList, 'Ambulances');
                //helpers.selectOption(page.serviceProvider_page.elements.chooseService, "Ambulances");
                driver.findElement(page.serviceProvider_page.elements.serviceName).sendKeys(serviceName);
                driver.sleep(300);
                driver.findElement(page.serviceProvider_page.elements.serviceHouse).sendKeys(config.Organisation.Address2.House);
                driver.findElement(page.serviceProvider_page.elements.serviceArea).sendKeys(config.Organisation.Address2.Area);
                driver.findElement(page.serviceProvider_page.elements.serviceCountry).sendKeys(config.Organisation.Address2.Country);
                driver.executeScript('return window.scrollTo(' + 41 + ',' + 566 + ');');
                driver.findElement(page.serviceProvider_page.elements.servicePostCode).sendKeys(config.Organisation.Address2.Post);
                driver.findElement(page.serviceProvider_page.elements.serviceCheck).click();
                driver.findElement(page.serviceProvider_page.elements.serviceMark).click();
                driver.findElement(page.serviceProvider_page.elements.capacity).sendKeys('10');
                driver.sleep(300);
                driver.findElement(page.serviceProvider_page.elements.rate).sendKeys('10');
                driver.sleep(300);
                return driver.findElement(page.serviceProvider_page.elements.frequencyForCapacitybutton).click()
                    .then(function () {
                        helpers.clickIncludesGrid(page.serviceProvider_page.elements.frequencyForCapacitybuttonDropdown, page.serviceProvider_page.elements.frequencyForCapacitybuttonDropdownList, 'Per Hour');
                        return driver.findElement(page.serviceProvider_page.elements.costfrequencyButton).click()
                            .then(function () {
                                helpers.clickIncludesGrid(page.serviceProvider_page.elements.costfrequencyButtonDropDown, page.serviceProvider_page.elements.costfrequencyButtonDropDownList, 'Per Hour');
                                return driver.findElement(page.serviceProvider_page.elements.unitforcapapcityButton).click()
                                    .then(function () {
                                        helpers.clickIncludesGrid(page.serviceProvider_page.elements.unitforcapapcityButtonDropDown, page.serviceProvider_page.elements.unitforcapapcityButtonDropDownList, 'Per Hour');
                                        driver.sleep(300);
                                        driver.findElement(page.serviceProvider_page.elements.saveCost).click();
                                        driver.sleep(300);
                                        driver.findElement(page.serviceProvider_page.elements.createService).click()
                                        driver.sleep(300);
                                        driver.wait(until.elementsLocated(page.serviceProvider_page.elements.createdService), 10000);
                                        driver.sleep(2000);
                                        return driver.findElement(page.serviceProvider_page.elements.createdService).getText()
                                            .then(function (newService) {
                                                var ambService = serviceName + ' ' + '(Ambulances)';
                                                return expect(newService).to.equal(ambService);
                                            });
                                    });
                            });
                    });
            });
    },
}