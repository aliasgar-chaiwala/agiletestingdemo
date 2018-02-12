module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        placementList: by.css('h2[class="page-title"]'),
        addPlacement: by.css('[id="addNew-placement"]'),
        placementTypeClick: by.css('[id="palcement_type"]'),
        placementTypeSelect: by.css('#placementType > ul > li:nth-child(1) > a > span:nth-child(2)'),
        placementStartDate: by.css('#placementDetails [class="form-group"] #reusableDatepicker'),
        placementReasonToStartClick: by.css('[id="reason_to_start"]'),
        placementReasonToStartSelect: by.css('#placementDetails > div > div > div:nth-child(2) > div:nth-child(2) > div > div > ul > li:nth-child(1) > a > span:nth-child(2)'),
        placementReasonTxt: by.css('.textarea-reason'),
        placeWithProvider: by.css('[placeholder="Search person, organisation, service provider, services..."]'),
        placeWithProviderSelect: by.css('#placementProviderDetails div:nth-child(1) > div > div:nth-child(1) div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
        provisionRateClick: by.css('[id="placement-provision-content"] > div:nth-child(1) [class="form-group"] button'),
        provisionRateSelect: by.css('[id="placement-provision-content"] > div:nth-child(1) [class="form-group"] ul li a'),
        provisionPaymentMethodClick: by.css('[id="placement-provision-content"] > div:nth-child(2) > div:nth-child(1) [class="form-group"] button'),
        provisionPaymentMethodSelect: by.css('[id="placement-provision-content"] > div:nth-child(2) > div:nth-child(1) [class="form-group"] ul > li:nth-child(1) a'),
        provisionPaymentTypeClick: by.css('[id="placement-provision-content"] > div:nth-child(2) > div:nth-child(2) [class="form-group"] button'),
        provisionPaymentTypeSelect: by.css('[id="placement-provision-content"] > div:nth-child(2) > div:nth-child(2) [class="form-group"] ul > li:nth-child(1) a'),
        provisionAmount: by.css('#placement-provision-content > div:nth-child(3) > div:nth-child(1) > div > input'),
        provisionPaymentDate: by.css('#datePickerdateToPayOn > div > div > div input'),
        createPlacementButton: by.css('[name="new-placement-create"]'),
        address: by.css('#addressLine1'),
        serviceName: by.css('[class="placement-title"]'),
        serviceAddress: by.css('[class="placement-address"]'),
        more: by.css('[name="placement-list-expander"]'),
        updatedProvAmt: by.css('[name="provision amount"] strong'),
        existingService: by.css('[id="service_dropdown"]'),
        selectExistingService: by.css('#placementDetails > div > div > div:nth-child(1) > div > div:nth-child(1) > div > ul li:nth-child(1)'),
        moreLink: by.css('[name = "placement-list-expander"]'),
        editLink: by.css('[name = "placement-list-edit-btn"]'),
        updateProvisionAmount: by.css('#placement-provision-content > div:nth-child(3) > div:nth-child(1) input'),
        updateButton: by.css('#create-new-placement > .container-fluid [name="new-placement-create"]')
    },

    verifyServicesInPlacement: function () {
        driver.sleep(1000);
        return driver.wait(until.elementsLocated(page.placement_page.elements.placementList), 10000).then(function () {
            driver.findElement(page.placement_page.elements.addPlacement).click();
            return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeClick), 4000).then(function () {
                driver.sleep(1000);
                return driver.wait(until.elementsLocated(page.placement_page.elements.existingService), 10000)
                    .then(function () {
                        return driver.findElement(page.placement_page.elements.existingService).click()
                            .then(function () {
                                driver.wait(until.elementsLocated(page.placement_page.elements.selectExistingService), 10000)
                                driver.findElement(page.placement_page.elements.selectExistingService).click()
                                return driver.sleep(2000)
                                    .then(function () {
                                        driver.findElement(page.placement_page.elements.placementTypeClick).click();
                                        return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeSelect), 4000).then(function () {
                                            driver.findElement(page.placement_page.elements.placementTypeSelect).click();
                                            return driver.wait(until.elementsLocated(page.placement_page.elements.placementStartDate), 4000)
                                                .then(function () {
                                                    //driver.findElement(page.placement_page.elements.placementStartDate).click();
                                                    driver.findElement(page.placement_page.elements.placementReasonToStartClick).click();
                                                    return driver.wait(until.elementsLocated(page.placement_page.elements.placementReasonToStartSelect), 4000).then(function () {
                                                        driver.findElement(page.placement_page.elements.placementReasonToStartSelect).click();
                                                        return driver.sleep(300);
                                                    });
                                                });
                                        });
                                    });
                            });
                    })
            })
        })
    },

    setPlacementDetails: function () {
        driver.sleep(1000);
        return driver.wait(until.elementsLocated(page.placement_page.elements.placementList), 10000).then(function () {
            driver.findElement(page.placement_page.elements.addPlacement).click();
            return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeClick), 4000).then(function () {
                console.log("1");
                return driver.sleep(2000).then(function () {
                    driver.findElement(page.placement_page.elements.placementTypeClick).click();
                    return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeSelect), 4000).then(function () {
                        console.log("1.5");
                        driver.findElement(page.placement_page.elements.placementTypeSelect).click();
                        return driver.wait(until.elementsLocated(page.placement_page.elements.placementStartDate), 4000, 'Start date issues')
                            .then(function () {
                                console.log("2");
                                driver.findElement(page.placement_page.elements.placementStartDate).click();
                                driver.findElement(page.placement_page.elements.placementReasonToStartClick).click();
                                return driver.wait(until.elementsLocated(page.placement_page.elements.placementReasonToStartSelect), 4000).then(function () {
                                    console.log("3");
                                    driver.findElement(page.placement_page.elements.placementReasonToStartSelect).click();
                                    return driver.sleep(800);
                                });
                            });
                    });
                })
            })
        })
    },

    existingService: function () {
        driver.sleep(1000);
        return driver.wait(until.elementsLocated(page.placement_page.elements.placementList), 10000).then(function () {
            driver.findElement(page.placement_page.elements.addPlacement).click();
            return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeClick), 4000).then(function () {
                console.log("1");
                driver.findElement(page.placement_page.elements.placementTypeClick).click();
                return driver.wait(until.elementsLocated(page.placement_page.elements.placementTypeSelect), 4000).then(function () {
                    console.log("1.5");
                    driver.findElement(page.placement_page.elements.placementTypeSelect).click();
                    return driver.wait(until.elementsLocated(page.placement_page.elements.placementStartDate), 4000).then(function () {
                        console.log("2");
                        driver.findElement(page.placement_page.elements.placementStartDate).click();
                        driver.findElement(page.placement_page.elements.placementReasonToStartClick).click();
                        return driver.wait(until.elementsLocated(page.placement_page.elements.placementReasonToStartSelect), 4000).then(function () {
                            console.log("3");
                            driver.findElement(page.placement_page.elements.placementReasonToStartSelect).click();
                            return driver.sleep(300);
                        });
                    });
                });
            });
        });
    },

    setPlacementProviderDetails: function () {
        driver.findElement(page.placement_page.elements.placeWithProvider).sendKeys(config.Service.ServiceName);
        driver.sleep(2000);
        return driver.wait(until.elementsLocated(page.placement_page.elements.placeWithProviderSelect), 10000).then(function () {
            driver.sleep(2000)
            driver.findElement(page.placement_page.elements.placeWithProviderSelect).click();
            return driver.sleep(800);
        });
    },

    verifyPlacementDetails: function () {
        driver.sleep(1500);
        driver.wait(until.elementsLocated(page.placement_page.elements.placementList), 10000);
        return driver.findElement(page.placement_page.elements.serviceName).getText().then(function (serviceName) {
            expect(serviceName).to.equal(config.Service.ServiceName);
            return driver.findElement(page.placement_page.elements.serviceAddress).getText().then(function (serviceAddr) {
                var addr = config.Organisation.Address2.House + ', ' + config.Organisation.Address2.Area + ', ' + config.Organisation.Address2.Country + ', ' + config.Organisation.Address2.Post;
                // expect(serviceAddr).to.equal(addr);
                expect(serviceAddr).to.include(addr);
                return driver.sleep(200);
            });
        });

        //NEED TO WORK ON THIS
        //UNABLE TO GET THE TEXT FROM DISABPLED ADDRESS FIELDS
        /* 
            return driver.findElement(page.placement_page.elements.address).getAttribute("data-bind")
            .then(function (data){
                console.log("123: ",data);
            }) ;   
           var className = driver.executeScript("return document.getElementById('addressLine1').getAttribute('input');")
            return driver.findElement(page.placement_page.elements.address).getText()
                .then(function (address) {
                    console.log(address);
     
                    console.log("address:", className.getText());
                    var className1 = driver.executeScript("return document.getElementById('addressLine1').getAttribute('input');").getText()
                        .then(function (className1) {
                            console.log("check1:", className1);
                        });
                })*/
    },

    verifyCPPupdatedPlacement: function () {
        driver.sleep(500);
        driver.wait(until.elementsLocated(page.placement_page.elements.placementList), 10000)
        return driver.findElement(page.placement_page.elements.serviceName).getText().then(function (serviceName) {
            expect(serviceName).to.equal(config.Service.ServiceName);
            return driver.findElement(page.placement_page.elements.serviceAddress).getText().then(function (serviceAddr) {
                var addr = config.Organisation.Address2.House + ', ' + config.Organisation.Address2.Area + ', ' + config.Organisation.Address2.Country + ', ' + config.Organisation.Address2.Post;
                expect(serviceAddr).to.equal(addr);
                driver.findElement(page.placement_page.elements.more).click();
                return driver.wait(until.elementsLocated(page.placement_page.elements.updatedProvAmt), 10000).then(function () {
                    return driver.findElement(page.placement_page.elements.updatedProvAmt).getText().then(function (amt) {
                        expect(amt).to.equal('222');
                        return driver.sleep(100);
                    });
                });
            });
        });
    },

    setProvisionForPlacement: function () {
        driver.findElement(page.placement_page.elements.provisionRateClick).click();
        driver.findElement(page.placement_page.elements.provisionRateSelect).click();
        driver.findElement(page.placement_page.elements.provisionPaymentMethodClick).click();
        driver.findElement(page.placement_page.elements.provisionPaymentMethodSelect).click();
        driver.findElement(page.placement_page.elements.provisionPaymentTypeClick).click();
        driver.findElement(page.placement_page.elements.provisionPaymentTypeSelect).click();
        driver.findElement(page.placement_page.elements.provisionAmount).sendKeys('111');
        driver.findElement(page.placement_page.elements.provisionPaymentDate).click();
        driver.findElement(page.placement_page.elements.placementReasonTxt).click();
        return driver.sleep(1000);
    },

    createPlacement: function () {
        return driver.executeScript('return window.scrollTo(' + 2000 + ',' + 2000 + ');').then(function () {
            driver.sleep(500);
            driver.findElement(page.placement_page.elements.createPlacementButton).click();
            return driver.sleep(1000);
        });
    },

    updatePlacementAmount: function () {
        driver.wait(until.elementsLocated(page.placement_page.elements.moreLink), 10000)
        return driver.findElement(page.placement_page.elements.moreLink).click().then(function () {
            driver.wait(until.elementsLocated(page.placement_page.elements.editLink), 10000)
            return driver.findElement(page.placement_page.elements.editLink).click().then(function () {
                driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
                driver.wait(until.elementsLocated(page.placement_page.elements.updateProvisionAmount), 10000)
                driver.findElement(page.placement_page.elements.updateProvisionAmount).clear();
                driver.sleep(300);
                driver.findElement(page.placement_page.elements.updateProvisionAmount).sendKeys("50.00");
                return driver.sleep(500).then(function () {
                    driver.wait(until.elementsLocated(page.placement_page.elements.updateButton), 15000)
                    driver.findElement(page.placement_page.elements.updateButton).click();
                    return driver.sleep(5000);
                })
            })
        })

    }
}