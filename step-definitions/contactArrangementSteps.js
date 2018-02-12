
module.exports = function () {

    this.Then(/^I navigate to Contact Arrangements$/, function () {
        return page.personFacet_page.navigateToContactArrangement();
    });

    //I should see the Contact Arrangements page
    this.Then(/^I should see the Contact Arrangements page$/, function () {
        return page.contactArrangement_page.isContactArrangementsVisible();
    });

    //I proceed to create new Contact Arranagements
    this.Then(/^I proceed to create new Contact Arranagements$/, function () {
        return page.contactArrangement_page.createContactArrangements();
    });

    //I provide Contact Arrangements required details
    this.Then(/^I provide Contact Arrangements required details$/, function () {

        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        var todayDate = currentDate.getDate();


        var thisMnth = currentDate.getMonth();
        var thisYear = currentDate.getFullYear();
        var date1, month1;
        if (todayDate < 10)
            date1 = '0' + todayDate;
        else date1 = todayDate;
        if (thisMnth < 9)
            month1 = '0' + (thisMnth + 1);
        else month1 = thisMnth + 1;

        var nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 2);
        var tomorrowDate = nextDate.getDate();
        var futureMonth = nextDate.getMonth();
        var futureYear = nextDate.getFullYear();
        var date2, month2;
        if (tomorrowDate < 10)
            date2 = '0' + tomorrowDate;
        else date2 = tomorrowDate;
        if (futureMonth < 9)
            month2 = '0' + (futureMonth + 1);
        else month2 = futureMonth + 1;


        var fromDateFormat = date1 + '/' + month1 + '/' + thisYear;
        var toDateFormat = date2 + '/' + month2 + '/' + thisYear;

        return page.contactArrangement_page.setContactArrangements(fromDateFormat, toDateFormat);
    });

    //I Add the Contact Arranagements
    this.Then(/^I Add the Contact Arranagements$/, function () {
        return page.contactArrangement_page.addContactArrangements();
    });

    //I should see Contact Arranagements Details FOR
    this.Then(/^I should see Contact Arranagements Details FOR$/, function () {
        var contArrangeDetails = 'Contact with supervision allowed for ' + config.PersonDetails.placePerName;
        return page.contactArrangement_page.validateContactArrangementsForDetails(contArrangeDetails);
    });

    //I should see Contact Arranagements Details TO
     this.Then(/^I should see Contact Arranagements Details TO$/, function () {
        var contArrangeDetails = 'Contact with supervision allowed to ' + config.PersonDetails.placePerName;
        return page.contactArrangement_page.validateContactArrangementsToDetails(contArrangeDetails);
    });   

};