module.exports = function () {

    //console.log('global config value in : searchPersonSteps', config);

    config = jsonfile.readFileSync('./support/' + featureConfig);

    this.When(/^I search for the unique person and select$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var person = config.PersonDetails.Name;

        return page.pageHead.personSearch(person)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.selectCategoryElement(person);
                    });
            });
    });

    this.When(/^I search and select the person by "([^"]*)" postcode$/, function (postCode) {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var person = config.PersonDetails.person5.Name;

        return page.pageHead.personSearch(postCode)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.selectCategoryElement(person);
                    });
            });
    });

    this.When(/^I search for the specialChar person and select$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var person = config.PersonDetails.personSpecial.Name;

        return page.pageHead.personSearch(person)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.selectCategoryElement(person);
                    });
            });
    });

    this.When(/^I search for the  asylum seeking person and select$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = config.PersonDetails.personAsylum.Name;
        return page.pageHead.personSearch(person)
            .then(function () {
                return driver.sleep(1000).then(function () {
                    return page.pageHead.selectCategoryElement(person);
                });
            });
    });

    this.When(/^I search for the unique person1 and select$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var person = config.PersonDetails.person1.Name;

        return page.pageHead.personSearch(person)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.selectCategoryElement(person)
                            .then(function () {
                                return driver.sleep(2000);
                            });
                    });
            });
    });

    this.When(/^I search for the unique person2 and select$/, function () {
        //    console.log('config:', config.wait);
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);

        var person = config.PersonDetails.person2.Name;

        return page.pageHead.personSearch(person)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.selectCategoryElement(person)
                            .then(function () {
                                return driver.sleep(2000);
                            });
                    });
            });
    });

    this.When(/^I search for the unique person3 and select$/, function () {
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = config.PersonDetails.person3.Name;
        return page.pageHead.personSearch(person)
            .then(function () {
                return driver.sleep(1000)
                    .then(function () {
                        return page.pageHead.selectCategoryElement(person)
                            .then(function () {
                                return driver.sleep(2000);
                            });
                    });
            });
    });

    this.When(/^I search for the placement person and select$/, function () {
        // driver wair returns a promise so return that
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = config.PersonDetails.placePerName;
        return page.pageHead.personSearch(person)
            .then(function () {
                return driver.sleep(1000)
                    .then(function () {
                        return page.pageHead.selectCategoryElement(person)
                            .then(function () {
                                return driver.sleep(2000);
                            });
                    });
            });
    });

    this.Then(/^I search and select user ([^"]*)$/, function (UserName) {
        return page.pageHead.personSearch(UserName).then(function () {
            return driver.sleep(1000).then(function () {
                //console.log("In then UserName: ", UserName);
                return page.pageHead.selectCategoryUser(UserName);
            });
        });
    });
    this.Then(/^I search for the unique person and verify "([^"]*)" and select$/, function (key) {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = config.PersonDetails.Name;
        return page.pageHead.personSearch(person)
            .then(function () {
                //console.log("1 sec sleep");
                return driver.sleep(1000)
                    .then(function () {
                        //    console.log("In then: ", person);
                        return page.pageHead.verifySearchResult(key).then(function () {
                            return page.pageHead.selectCategoryElement(person)
                                .then(function () {
                                    return driver.sleep(2000);
                                });
                        });
                    });
            });
    });

    this.Then(/^I search for the unique person and verify Missing Icon after person id$/, function () {
        config = jsonfile.readFileSync('./support/' + featureConfig);
        var person = config.PersonDetails.Name;
        return page.pageHead.personSearch(person)
            .then(function () {
                return page.pageHead.verifyMissingIcon(person);
            });
    });
}