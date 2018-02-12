module.exports = {

    //  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

    elements: {
        toggleInvestigationDetails: by.css('[name="Investigation details"] div:nth-child(2) div a'),
        toggleMentalCapicityAssess: by.css('[data-view*="mentalCapacityAssessment"] [class="accordion-toggle pull-right"]'),
        mentalCapicityArea: by.css('#mentalCapacityArea > form [class="col-sm-12"]:nth-child(1) [class="col-sm-6"]:nth-child(1) button'),
        safeguardMentalCapicityArea: by.css('#mentalCapacityArea > form [class="col-sm-12"]:nth-child(1) [class="col-sm-6"]:nth-child(1) ul li:nth-child(1) a'),
        //  healthMentalCapicityArea: by.css('#mentalCapacityArea > form [class="col-sm-12"]:nth-child(1) [class="col-sm-6"]:nth-child(1) ul li:nth-child(3) a'),
        dateOfAssessment: by.css('#assessmentDate #reusableDatepicker'),
        outcomeOfAssessment: by.css('[placeholder="Please provide relevant details"]'),
        advocateSearch: by.css('[placeholder="Search person/professional ..."]'),
        advocateSelect: by.css('#mentalCapacityArea > form > div > div > div:nth-child(5) > div:nth-child(1) .selectize-dropdown.multi.form-control.plugin-remove_button > div > div'),
        jobCard: by.css('[class="card hovered"]'),
        jobCardPerson: by.css('[class="card hovered"] [class="last-name"]'),
        jobCardPersonRelation: by.css('[class="card hovered"] [data-bind*="relation"]'),
        jobCardAppointedDate: by.css('[class="card hovered"] #reusableDatepicker'),
        //mentalCapacityAssessmenttogglepart1: by.css('div[name='),
        //mentalCapacityAssessmenttogglepart2: by.css('.col-sm-1 div a'),
        mentalCapacityAssessmenttoggle: by.css('#maincontent div.panel-collapse.collapse.in div:nth-child(4) div.row.panel-sub-panel.people-panel form div.panel-heading .accordion-toggle.pull-right'),
        dateClick: by.css('#assessmentDate i.icon-date-picker-small.pointer'),
        outcomeofassesment: by.css('#mentalCapacityArea > form > div > div > div:nth-child(3) > div > textarea'),
        dateofassessmentlabel: by.css('label[for="dateOfAssessment"]'),
        dateinput: by.css('#assessmentDate .durandal-wrapper .form-control'),
        
    },

    toggleInvestigationDetailsASFI: function () {
        return driver.wait(until.elementsLocated(page.adultSafeguardFullInvestigation_page.elements.toggleInvestigationDetails), 10000)
            /*.then(function () {
                return driver.findElement(page.adultSafeguardFullInvestigation_page.elements.toggleInvestigationDetails).click()
                })*/
            .then(function () {
                return driver.wait(until.elementsLocated(page.adultSafeguardFullInvestigation_page.elements.toggleMentalCapicityAssess), 10000)
            });

    },

    toggleMentalCapacityAssessASFI: function () {
        return driver.wait(until.elementsLocated(page.adultSafeguardFullInvestigation_page.elements.toggleMentalCapicityAssess), 10000)
            .then(function () {
                driver.executeScript('return window.scrollTo(' + 900 + ',' + 900 + ');')
                return driver.sleep(300).then(function () {
                    return driver.findElement(page.adultSafeguardFullInvestigation_page.elements.toggleMentalCapicityAssess).click().then(function () {
                        return driver.wait(until.elementsLocated(page.adultSafeguardFullInvestigation_page.elements.mentalCapicityArea), 10000);
                    });
                });
            });
    },

    setHealthMentalCapacityAssessment: function () {
        return driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1000 + ')').then(function () {
            driver.sleep(1000);
            driver.findElement(page.adultSafeguardFullInvestigation_page.elements.mentalCapacityAssessmenttoggle).click();
            return driver.sleep(1000).then(function () {
                driver.sleep(4000);
                 var today = new Date();
                 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                 var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
                 var time = today.getHours() + ":" + today.getMinutes();
                 var dateTime = date+' '+time;
                 console.log("Formated Date Time: "+dateTime);
                 return driver.findElement(page.adultSafeguardFullInvestigation_page.elements.dateinput).sendKeys(dateTime);
                // return driver.findElement(page.adultSafeguardFullInvestigation_page.elements.dateinput).sendKeys("3/08/2017 11:12");
            });
        });
    },

}