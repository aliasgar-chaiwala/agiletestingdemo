module.exports = function () {


    this.When(/^I am testing step1$/, function () {


        return page.testing_page.test1().then(function () {
            return page.addPerson_page.setPerson(fRandomNameSplit).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I am testing step2$/, function () {
        return page.testing_page.test1().then(function () {
            return page.addPerson_page.setPerson(fRandomNameSplit).then(function () {
                return writeToConfig(config);
            });
        });
    });

    this.When(/^I am testing step3$/, function () {
        return page.testing_page.test1().then(function () {
            return page.addPerson_page.setPerson(fRandomNameSplit).then(function () {
                return writeToConfig(config);
            });
        });
    });
}