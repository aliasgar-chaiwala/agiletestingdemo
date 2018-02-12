
config = jsonfile.readFileSync('./support/'+featureConfig);
module.exports = function () {

    this.When(/^I provide Investigation Details in Adult Safeguarding Full Investigation$/, function () {
        return page.adultSafeguardFullInvestigation_page.toggleInvestigationDetailsASFI();
    });

    //I provide Mental capacity assessment in Adult Safeguarding Full Investigation
    this.When(/^I provide Mental capacity assessment for Health in Adult Safeguarding Full Investigation$/, function () {
        return page.adultSafeguardFullInvestigation_page.setHealthMentalCapacityAssessment();
       /* return page.adultSafeguardFullInvestigation_page.toggleMentalCapacityAssessASFI()
        .then(function (){
            return page.adultSafeguardFullInvestigation_page.setHealthMentalCapacityAssessment();
        })*/
    });   
};