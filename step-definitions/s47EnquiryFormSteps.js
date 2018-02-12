
module.exports = function () {
   
    this.When(/^I navigate to S47Enquiry form$/, function () {       
        return page.s47Enquiry_page.verifyS47EnquiryForm();

	});

	this.When(/^I verify the DQC for S47Enquiry Form$/, function () {	
		return page.s47Enquiry_page.verifyDQC();

	});

	this.When(/^I submit the missing soft mandatory information$/, function () {	
		return page.s47Enquiry_page.submitDQCInfo();

	});

	this.When(/^I verify the DQC Completed Information$/, function () {	
		return page.s47Enquiry_page.verifyCompletedDQC();

	});

	this.When(/^I provide the enquiry details$/, function () {	
		return page.s47Enquiry_page.fillEnquiryDetails();

	});

	this.When(/^I provide the views details$/, function () {	
		return page.s47Enquiry_page.fillViewDetails();

	});

}