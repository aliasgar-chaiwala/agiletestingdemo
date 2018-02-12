module.exports = {
	
	elements: {
		s47EnquiryFormVisible: by.css('h1[aria-label="S47 Enquiry"]'),
        viewsToggle: by.css('[name="Views"] a.accordion-toggle'),
		DQCWidget: by.css('.hatrickIcons.icon-dqc.pull-right'),
		dataQualityCheck: by.css('div.case-confidential-panel.show h4'),
		missingInfo: by.css('[aria-label="Missing Information"]'),
		completedInfo: by.css('[aria-label="Completed Information"]'),
		missingInfoForm: by.css('#missinginformation span.list-group-item strong.list-group-item-heading'),
        DQCScreen: by.css('div.container-fluid .col-sm-3 h2'),
		missingInfoFormName: by.css('span.panel-title'),
		completedInfoFormName: by.css('#completeddocuments strong.list-group-item-heading'),
        givenMissingInfo: by.css('#action-taken'),
		submitDQC: by.css('button.btn.btn-create-new'),
		formInformation: by.css('h4.sub-text.pull-right.dropdown-toggle'),
		completedStatus: by.css('span.progress-label.m-r-sm'),
		enquiryToggle: by.css('[name="S47 Enquiry details"] a.accordion-toggle'),
		enquiryAgency: by.css('#plan-overview'),
		enquiryBeginDate: by.css('div.panel-collapse.in.collapse .panel-body > div section .form-horizontal .form-group:nth-child(1) .datepicker-panel input'),
		enquiryDueDate: by.css('div.panel-collapse.in.collapse .panel-body > div section .form-horizontal .form-group:nth-child(2) .datepicker-panel input'),
		participant: by.css('div.panel-collapse.in.collapse .panel-body > div > div:nth-child(3) [placeholder="Search person, professional..."]'),
		setParticipant: by.css('div.panel-collapse.in.collapse .panel-body > div > div:nth-child(3) div.selectize-control div.selectize-dropdown-content div.option'),
		name: by.css('#ContactorName [placeholder="Search person..."]'),
		setName: by.css('#ContactorName div.selectize-control div.selectize-dropdown-content div.option'),
		viewsFrom: by.css('div.row.panel-sub-panel.people-panel [placeholder="Search person..."]'),
		setViewsForm: by.css('div.row.panel-sub-panel.people-panel div.selectize-control div.selectize-dropdown-content div.option'),
		viewsNotes: by.css('#Comment'),
		

 	},
			
		
 verifyS47EnquiryForm: function () {		
	        page.pageHead.s47EnquiryFormNavigation();
		    return driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.s47EnquiryFormVisible), 25000)
		   .then(function () { 
			return driver.findElement(page.s47Enquiry_page.elements.s47EnquiryFormVisible).getText()
		    })
            .then(function (s47EnquiryFormVisibleText) {
            expect(s47EnquiryFormVisibleText).to.equal('S47 Enquiry');
		    })
	},

	verifyDQC: function () {
		driver.sleep(1500);
		driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.DQCWidget), 15000);
		return driver.findElement(page.s47Enquiry_page.elements.DQCWidget).click()
         .then(function () {
        driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.dataQualityCheck), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.dataQualityCheck).getText();
		})
		 .then(function (dataQualityCheckText) {
			return expect(dataQualityCheckText).to.equal("Data Quality Check");
		})
		
		  .then(function () {
			driver.findElement(page.s47Enquiry_page.elements.missingInfo).click();
			return driver.findElement(page.s47Enquiry_page.elements.missingInfo).getText();
		})
				.then(function (missingInfoText) {
			return expect(missingInfoText).to.equal("Missing Information");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.missingInfoForm), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.missingInfoForm).getText();
        })
		    .then(function (missingInfoFormText) {
			return expect(missingInfoFormText).to.equal("S47 Enquiry");
        })
           .then(function(){
            return  driver.findElement(page.s47Enquiry_page.elements.missingInfoForm).click();
        })

	},

	submitDQCInfo: function () {
		  driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.DQCScreen), 15000);
          return driver.findElement(page.s47Enquiry_page.elements.DQCScreen).getText()
		     .then(function (DQCScreenName) {
			return expect(DQCScreenName).to.equal("Data quality Check");
		})
		  .then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.missingInfoFormName), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.missingInfoFormName).getText();
		})
			.then(function (missingInfoFormNameText) {
			return expect(missingInfoFormNameText).to.equal("S47 Enquiry");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.formInformation), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.formInformation).getText();
		})
		   .then(function (formInformationText) {
			return expect(formInformationText).to.equal("Missing Information");
		})
			.then(function () {
			driver.sleep(1000);
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.givenMissingInfo), 15000);
	       return driver.findElement(page.s47Enquiry_page.elements.givenMissingInfo).sendKeys("Filling Missing Info");
		})
           .then(function () {
			driver.sleep(1000);
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.submitDQC), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.submitDQC).click();
		})
	},

	verifyCompletedDQC: function () {
		driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.DQCWidget), 15000);
		return driver.findElement(page.s47Enquiry_page.elements.DQCWidget).click()
         .then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.dataQualityCheck), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.dataQualityCheck).getText();
		})
		 .then(function (dataQualityCheckText) {
			return expect(dataQualityCheckText).to.equal("Data Quality Check");
		})
		
		  .then(function () {
			driver.findElement(page.s47Enquiry_page.elements.completedInfo).click();
			return driver.findElement(page.s47Enquiry_page.elements.completedInfo).getText();
		})
				.then(function (completedInfoText) {
			return expect(completedInfoText).to.equal("Completed Information");
		})
			.then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.completedInfoFormName), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.completedInfoFormName).getText();
		})
		    .then(function (completedInfoFormNameText) {
			return expect(completedInfoFormNameText).to.equal("S47 Enquiry");
		})
           .then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.completedInfoFormName), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.completedInfoFormName).click();
		})
		   .then(function () {		
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.formInformation), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.formInformation).getText();
		})
		   .then(function (formInformationText) { 	
			return expect(formInformationText).to.equal("Completed Information");
		})
		   	.then(function () {
			driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.completedStatus), 15000);
			return driver.findElement(page.s47Enquiry_page.elements.completedStatus).getText();
		})
		   .then(function (completedStatusText) {
			return expect(completedStatusText).to.equal("Completed");
		})
	},

	fillEnquiryDetails: function(){
          return driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.enquiryToggle), 15000)
		   //return driver.findElement(page.s47Enquiry_page.elements.enquiryToggle).click()
		   .then(function(){
			   driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.enquiryAgency), 15000);
			   return helpers.selectOption(page.s47Enquiry_page.elements.enquiryAgency, "Health");
		   })
		   .then(function(){
            driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.enquiryBeginDate), 15000);
		    driver.findElement(page.s47Enquiry_page.elements.enquiryBeginDate).click();
            return helpers.gridClickDate('curr', 18);
		   })
		   .then(function(){
            driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.enquiryDueDate), 15000);
		    driver.findElement(page.s47Enquiry_page.elements.enquiryDueDate).click();
            return helpers.gridClickDate('curr', 20);
		   })
		   .then(function(){
				config = jsonfile.readFileSync('./support/'+featureConfig);
		       var personName = config.PersonDetails.Name;
			   driver.findElement(page.s47Enquiry_page.elements.participant).clear();
             driver.findElement(page.s47Enquiry_page.elements.participant).sendKeys(personName);
			 driver.sleep(2000);
             return driver.findElement(page.s47Enquiry_page.elements.setParticipant).click();
		   })
		   	.then(function(){
				driver.sleep(2000);
				config = jsonfile.readFileSync('./support/'+featureConfig);
		       var personName = config.PersonDetails.Name;
			   driver.findElement(page.s47Enquiry_page.elements.name).clear();
             driver.findElement(page.s47Enquiry_page.elements.name).sendKeys(personName);
			 driver.sleep(2000);
              driver.findElement(page.s47Enquiry_page.elements.setName).click();
			  return driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');')
		   })
	},

		fillViewDetails: function(){
			driver.sleep(2000);
			 driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.viewsToggle), 15000);
		    driver.findElement(page.s47Enquiry_page.elements.viewsToggle).click();
		   return driver.sleep(1000)
		   .then(function(){
			   driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
				config = jsonfile.readFileSync('./support/'+featureConfig);
		       var personName = config.PersonDetails.Name;
			   driver.findElement(page.s47Enquiry_page.elements.viewsFrom).clear();
             driver.findElement(page.s47Enquiry_page.elements.viewsFrom).sendKeys(personName);
			 driver.sleep(1500);
             return driver.findElement(page.s47Enquiry_page.elements.setViewsForm).click();
			 		   })
			 .then(function(){
				 driver.wait(until.elementsLocated(page.s47Enquiry_page.elements.viewsNotes), 15000);
				return driver.findElement(page.s47Enquiry_page.elements.viewsNotes).sendKeys("Testing");
				// return driver.findElement(page.s47Enquiry_page.elements.viewsToggle).click()
			 })
	
	},


				
}
