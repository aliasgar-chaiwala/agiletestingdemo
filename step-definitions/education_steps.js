var config = require('../support/config.json');
module.exports = function () {

    this.When(/^I create Education details$/, function () {
        return page.education_page.setSchoolInfo().then(function () {
            console.log('after setSchoolInfo');
            return page.education_page.setAttendanceDetails().then(function () {
                console.log('after setAttendanceDetails');
                return page.education_page.addExclusion().then(function () {
                    console.log('after addExclusion');
                    return page.education_page.setAdditionalInfo().then(function () {
                        console.log('after setAdditionalInfo');
                        return page.education_page.submitEducation()
                    });
                });
            });
        });
    });


    //I verify the Course details in Education
    this.When(/^I verify the Course details in Education$/, function () {
        return page.education_page.verifyCourse();
    });

    this.Then(/^I create a new Training$/, function () {
        return page.education_page.createTrainingDetails();
    });

    this.Then(/^I create a another Training for person1$/, function () {
        return page.education_page.createAnotherTrainingDetailsForPerson1();
    });

    this.Then(/^I create a another Training for person$/, function () {
        return page.education_page.createAnotherTrainingDetailsForPerson();
    });
};