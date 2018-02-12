module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		adultSafeguardingPlanlabel: by.css('[aria-label="Adult Safeguarding Plan"]'),
		subjectInPill: by.css('.col-sm-11 div.col-sm-11 .selectize-input.items.not-full.has-options.has-items > span'),
		toggleNeedRiskStrength: by.css('[name*="Needs"] [aria-label="Accordion expander"] > a'),
		personName: by.css('form .panel-heading .col-sm-11 span'),
		addButton: by.css('[id="addmenu"]'),
		innerToggleNeedRisk: by.css('form .panel-heading .col-sm-1 > div > a'),
		addRisk: by.css('ul[aria-labelledby="addmenu"] li:nth-child(2) > a'),
		riskTitle: by.css('[placeholder="Enter risk title.."]'),
		riskDetails: by.css('[placeholder="Enter risk description.."]'),
		riskType: by.css('[id="riskType"]'),
		riskSubType: by.css('[id="riskSubtype"]'),
		riskLikelihood: by.css('[id="riskLikelihood"]'),
		riskImpact: by.css('[id="riskImpact"]'),
		riskStatus: by.css('[id="riskStatus"]'),
		confirmRisk: by.css('[class="add-Risk-action"] [value="Confirm"]'),
		addOutcome: by.css('ul[aria-labelledby="addmenu"] li:nth-child(3) > a'),
		outcomeTitle: by.css('[placeholder="Add outcome title..."]'),
		outcomeDetails: by.css('[placeholder="Please add some details of the desired outcome.."]'),
		outcomeStatus: by.css('[name="riskCreate_chkType"]'),
		linkOutcome: by.css('form .panel-collapse.in.collapse > div > div > div:nth-child(4) .m-b-none > div > span > a'),
		linkToRisk: by.css('.in.collapse div:nth-child(2) div.sliding-menu.pull-left.m-t-sm > div:nth-child(2) > strong'),
		linkRiskTitle: by.css('div.dropdown-menu.dropdown-linking.dropdown-linking-menu.collpase.collapse.in > div:nth-child(3) > div > div > label > i'),
		confirmOutcome: by.css('form .panel-collapse.in.collapse > div > div > div:nth-child(4) .p-md.set-border .text-right.m-b-sm > input.btn.btn-primary.close-add-panel.pull-right'),
		addAction: by.css('ul[aria-labelledby="addmenu"] li:nth-child(4) > a'),
		actionTitle: by.css('[placeholder="Add action title..."]'),
		actionDetails: by.css('[placeholder="Please add some details of the desired action.."]'),
		linkAction: by.css('#openlinking-dropdown'),
		linkOutcomeTitle: by.css('[id*="openlinking-dropdown"] > div > div > div > div > label > i'),
		confirmAction: by.css('form .panel-collapse.in.collapse > div > div > div:nth-child(5) .p-md.set-border > div:nth-child(3) input.btn.btn-primary.close-add-panel.pull-right'),
		addService: by.css('ul[aria-labelledby="addmenu"] li:nth-child(5) > a'),
		serviceTitle: by.css('[placeholder="Add service title..."]'),
		serviceListClick: by.css('#service_dropdown'),
		serviceSelect: by.css('[class="add-service-action row relative"] ul li:nth-child(1) a'),

		searchService: by.css('[placeholder="Search for service/service provider/service type..."]'),
		selectService: by.css('#dropdownMenu1 > div > div.selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		serviceStartDate: by.css('form > div:nth-child(6) > div > div:nth-child(1) > div > div > div > div > div > div > div > input'),
		serviceEndDate: by.css('form > div:nth-child(6) > div > div:nth-child(2) > div > div > div > div > div > div > div > input'),

		scheduleType: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(1) > div > div:nth-child(1) button'),
		scheduleOneOff: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(1) > div > div:nth-child(1) ul li:nth-child(1) a span'),
		scheduleRecurring: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(1) > div > div:nth-child(1) ul li:nth-child(2) a span:nth-child(2)'),

		provisionStartDate: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(2) > div > div:nth-child(1) input'),
		provisionEndDate: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(2) > div > div:nth-child(2) input'),

		needProvisionToggle: by.css('.form-group.col-sm-12.addprovision > div > div > label > span.onoffswitch-switch'),
		provisionRate: by.css('#provision-disply > div > div:nth-child(1) > div:nth-child(1) button'),
		provisionRateSelect: by.css('#provision-disply > div > div:nth-child(1) > div:nth-child(1) ul li:nth-child(1) a span:nth-child(2)'),
		provisionCost: by.css('#provision-disply > div > div:nth-child(1) > div:nth-child(5) input'),
		requiredDuration: by.css('#provision-disply > div > div:nth-child(1) > div:nth-child(2) input'),
		paymentMethod: by.css('#provision-disply > div > div:nth-child(2) button'),
		paymentMethodSelect: by.css('#provision-disply > div > div:nth-child(2) ul li:nth-child(1) a span:nth-child(2)'),
		paymentType: by.css('#provision-disply > div > div:nth-child(3) button'),
		paymentTypeSelect: by.css('#provision-disply > div > div:nth-child(3) ul li:nth-child(1) a span:nth-child(2)'),
		paymentDate: by.css('#provision-disply > div > div:nth-child(5) div.row div.col-sm-4 .durandal-wrapper .input-group.datepicker-panel input'),
		linkService: by.css('.panel-collapse.in.collapse div:nth-child(6) .m-b-none > div > span > a'),
		linkActionTitle: by.css('[id*="openlinking-dropdown_service"] > div.sliding-submenu.pull-right > div > div > label > i'),
		confirmService: by.css('[class="add-service-action row relative"] [value="Confirm"]'),

		startDateLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(2) > div > div:nth-child(1) label.control-label.text-left.block'),
		endDateLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(2) > div > div:nth-child(2) label.control-label.text-left.block'),
		startTimeLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(3) > div > div:nth-child(1) label.control-label.text-left.block'),
		endTimeLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(4) > div > div:nth-child(1) label.control-label.text-left.block'),
		frequencyLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) > div > div:nth-child(1) > div > label'),
		frequency: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div.row div:nth-child(1) div.form-group button.btn.btn-dropdown.dropdown-toggle'),
		setDailyFrequency: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div.row div:nth-child(1) div.form-group ul.dropdown-menu li:nth-child(1) a span:nth-child(2)'),
		everyLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div div:nth-child(2) div label:nth-child(1)'),
		dayLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div div:nth-child(2) div label:nth-child(2)'),
		endLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(4) div.row div:nth-child(1) div.form-group label'),
		endSet: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(4) div.row div:nth-child(1) div.form-group button.btn.btn-dropdown.dropdown-toggle'),
		endList: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(4) div.row div:nth-child(1) div.form-group ul.dropdown-menu'),
		setWeeklyFrequency: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div.row div:nth-child(1) div.form-group ul.dropdown-menu li:nth-child(2) a span:nth-child(2)'),
		ondayLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div.col-sm-6 > div > label'),
		weekList: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div.col-sm-6 > div.form-group > div.row > div div.btn-group.btn-group-xs.btn-3state.form-control-static'),
		setMonthlyFrequency: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div.row div:nth-child(1) div.form-group ul.dropdown-menu li:nth-child(3) a span:nth-child(2)'),
		onDateLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(3) > div > div:nth-child(2) > div > label'),
		onMonthLabel: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(3) > div > div:nth-child(1) > div > label'),
		setYearlyFrequency: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) div.row div:nth-child(1) div.form-group ul.dropdown-menu li:nth-child(4) a span:nth-child(2)'),
		monthSet: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(3) > div > div:nth-child(1) > div > div > button.btn.btn-dropdown.dropdown-toggle'),
		monthList: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(3) > div > div:nth-child(1) > div > div > ul.dropdown-menu'),
		setDay: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(1) > div > div:nth-child(2) > div > div > div > input'),
		endSetAfterOccurences: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(4) div.row div:nth-child(1) div.form-group ul.dropdown-menu li:nth-child(2) a span:nth-child(2)'),
		endOccurences: by.css('form > div.serviceScheduler > div.scheduleCount > div:nth-child(5) > div:nth-child(4) div.col-sm-2.p-none > div > input'),
		addMoreButton: by.css('button.btn.btn-secondary.m-b'),
		setWeek: by.css('form > div.serviceScheduler > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div > div:nth-child(2) > div > div > div > input'),
		setOnDay: by.css('form > div.serviceScheduler > div:nth-child(3) > div:nth-child(5) > div.col-sm-6 > div > div > div > div > label:nth-child(4)'),
		weeklyEndSet: by.css('form > div.serviceScheduler > div:nth-child(3) > div:nth-child(5) > div:nth-child(4) > div > div > div > div > div.input-group-btn > button'),
		weeklySetAfterOccurences: by.css('form > div.serviceScheduler > div:nth-child(3) > div:nth-child(5) > div:nth-child(4) > div > div > div > div > div.input-group-btn.open > ul > li:nth-child(2) > a > span:nth-child(2)'),
		weeklyOccurences: by.css('form > div.serviceScheduler > div:nth-child(3) > div:nth-child(5) > div:nth-child(4) > div > div > div > div > div.col-sm-2.p-none > div > inputt'),
		outcomeClick: by.css('#showOutcomeAction'),
		createdDailyFrequency: by.css('div.provision-block-wrapper > div > div.col-sm-12.m-b-sm > div.row.provision-type.m-b-sm > div:nth-child(3) > p:nth-child(1)'),
		disabledActionButton: by.css('button[id="action-caret"]:disabled'),
		removeService: by.css('.selectize-input.items.has-options.full.has-items > span > a[title="Remove"]'),
		dailyFrequencyStartDate: by.css('form > div:nth-child(8) > div.form-group #datePickerdateToPayOn input'),
		dailyFrequencyEndDate: by.css('form > div:nth-child(9) > div.form-group #datePickerdateToPayOn input'),
		outcomeAction: by.css('[id="showOutcomeAction"]'),
		toggleServiceAsPlacement: by.css('.addprovision.m-t-md span:nth-child(2)'),
		riskTypediv: by.css('.add-Risk-action .m-t-sm #riskType'),
		riskSubTypediv: by.css('.add-Risk-action .m-t-sm #riskSubtypes'),
		riskLikelihooddiv: by.css('.add-Risk-action .m-t-sm #riskLikelihood'),
		riskImpactdiv: by.css('.add-Risk-action .m-t-sm #riskImpact'),
		riskStatusdiv: by.css('.add-Risk-action .m-t-sm #CreateRiskStatus'),
		commonListSelector: by.css('ul li a'),
		addserviceTitle: by.css('.add-service-action input[data-bind*="serviceTitle"]'),
		linkServicetype: by.css('#dropdownMenu1 input[placeholder*="service"]'),
		linkServicetypeDropDown: by.css('#dropdownMenu1 .selectize-dropdown-content div[data-group="service_type"]'),
		linkServiveTypeDropDownList: by.css('div.option'),
		serviceStartDatePicker: by.css('.row div.col-sm-6:nth-child(1) div[data-bind*="serviceStartDate"] .datepicker-parent input'),
		startDatePicker: by.css('#datePickerdateToPayOn[data-bind*="data: \'startDate\'"] input')
	},

	verifyAdultSafeguardingPlan: function () {
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.adultSafeguardingPlanlabel), 20000)
			.then(function () {
				return driver.findElement(page.adultSafeguardingPlan_page.elements.adultSafeguardingPlanlabel).getText()
					.then(function (adultPlanLabel) {
						expect(adultPlanLabel).to.equal("Adult Safeguarding Plan");
						return driver.sleep(100);
					});
			});
	},

	subjectPillVisible: function (person) {
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.subjectInPill), 25000)
			.then(function () {
				return driver.findElement(page.adultSafeguardingPlan_page.elements.subjectInPill).getText().then(function (pillName) {
					var newStr = pillName.substring(0, pillName.length - 1);
					var someText = newStr.replace(/(\r\n|\n|\r)/gm, "");
					expect(someText).to.equal(person);
					return driver.sleep(100);
				});
			});
	},

	verifyNeedsRisksStrengths: function (person) {
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.toggleNeedRiskStrength), 10000).then(function () {
			//driver.findElement(page.adultSafeguardingPlan_page.elements.toggleNeedRiskStrength).click();
			return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.personName), 10000).then(function () {
				driver.sleep(500);
				return driver.findElement(page.adultSafeguardingPlan_page.elements.personName).getText().then(function (pName) {
					expect(pName).to.equal(person);
					return driver.sleep(100).then(function () {
						driver.findElement(page.adultSafeguardingPlan_page.elements.innerToggleNeedRisk).click();
						return driver.sleep(400);
					});
				});
			});
		});
	},

	addRiskAdultSafePlan: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addButton), 10000);
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addRisk), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addRisk).click();
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.riskTitle).sendKeys(config.personfacets.Risks.Title);
			driver.findElement(page.adultSafeguardingPlan_page.elements.riskDetails).sendKeys('Risk Details');
			helpers.clickIncludesList(page.adultSafeguardingPlan_page.elements.riskTypediv, 'button', page.adultSafeguardingPlan_page.elements.commonListSelector, 'Physical');
			//helpers.selectOption(page.adultSafeguardingPlan_page.elements.riskType, 'Physical');
			driver.sleep(300);
			helpers.clickIncludesList(page.adultSafeguardingPlan_page.elements.riskSubTypediv, 'button', page.adultSafeguardingPlan_page.elements.commonListSelector, 'Risk of worsening physical condition');
			//helpers.selectOption(page.adultSafeguardingPlan_page.elements.riskSubType, 'Risk of worsening physical condition');
			helpers.clickIncludesList(page.adultSafeguardingPlan_page.elements.riskLikelihooddiv, 'button', page.adultSafeguardingPlan_page.elements.commonListSelector, 'Almost certain');
			//helpers.selectOption(page.adultSafeguardingPlan_page.elements.riskLikelihood, 'Almost certain');
			helpers.clickIncludesList(page.adultSafeguardingPlan_page.elements.riskImpactdiv, 'button', page.adultSafeguardingPlan_page.elements.commonListSelector, 'Major');
			//helpers.selectOption(page.adultSafeguardingPlan_page.elements.riskImpact, 'Major');
			helpers.clickIncludesList(page.adultSafeguardingPlan_page.elements.riskStatusdiv, 'button', page.adultSafeguardingPlan_page.elements.commonListSelector, 'Risk Remains');
			//helpers.selectOption(page.adultSafeguardingPlan_page.elements.riskStatus, 'Risk Remains');
			return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmRisk).click()
		});
	},

	addOutcomeToRiskInAdultSafePlan: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addOutcome), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addOutcome).click();
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.outcomeTitle).sendKeys('Outcome Title');
			driver.findElement(page.adultSafeguardingPlan_page.elements.outcomeDetails).sendKeys('Outcome Details');
			helpers.selectOption(page.adultSafeguardingPlan_page.elements.outcomeStatus, 'No Progress');
			driver.findElement(page.adultSafeguardingPlan_page.elements.linkOutcome).click();
			driver.sleep(700);
			driver.findElement(page.adultSafeguardingPlan_page.elements.linkToRisk).click();
			driver.findElement(page.adultSafeguardingPlan_page.elements.linkRiskTitle).click();
			return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmOutcome).click()
		});
	},

	addActionToOutcomeInAdultSafePlan: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addAction), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addAction).click();
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.actionTitle).sendKeys('Action Title');
			driver.findElement(page.adultSafeguardingPlan_page.elements.actionDetails).sendKeys('Action Details');
			driver.findElement(page.adultSafeguardingPlan_page.elements.linkAction).click();
			driver.sleep(700);
			driver.findElement(page.adultSafeguardingPlan_page.elements.linkOutcomeTitle).click();
			return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmAction).click();
		});
	},

	addServiceToActionInAdultSafePlan: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addService), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addService).click();
			driver.sleep(1000);
			driver.findElement(page.adultSafeguardingPlan_page.elements.addserviceTitle).sendKeys('Service title');
			driver.sleep(500);
			driver.findElement(page.adultSafeguardingPlan_page.elements.searchService).sendKeys(config.Service.ServiceName);
			driver.sleep(1500);
			return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.selectService), 10000).then(function () {
				driver.sleep(1500);
				driver.findElement(page.adultSafeguardingPlan_page.elements.selectService).click()
				return driver.sleep(1000)
					.then(function () {
						driver.findElement(page.adultSafeguardingPlan_page.elements.serviceStartDate).click();
						helpers.gridClickDate('curr', '16');
						driver.sleep(500);
						driver.findElement(page.adultSafeguardingPlan_page.elements.serviceEndDate).click();
						helpers.gridClickDate('next', '16');
						driver.sleep(500);
						driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleType).click();
						driver.sleep(500);
						driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleOneOff).click();
						driver.sleep(500);
						driver.findElement(page.adultSafeguardingPlan_page.elements.provisionStartDate).click();
						helpers.gridClickDate('curr', '16');
						driver.sleep(500);
						driver.findElement(page.adultSafeguardingPlan_page.elements.provisionEndDate).click();
						helpers.gridClickDate('next', '16');
						driver.sleep(1000);
						return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {

							driver.findElement(page.adultSafeguardingPlan_page.elements.dailyFrequencyStartDate).click();
							helpers.gridClickDate('prev', '16');
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.needProvisionToggle).click();
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRate).click();
							driver.sleep(300);
							driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRateSelect).click();
							driver.sleep(300);

							driver.findElement(page.adultSafeguardingPlan_page.elements.requiredDuration).sendKeys('111');
							driver.sleep(300);

							driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRate).click();
							driver.sleep(300);
							driver.findElement(page.adultSafeguardingPlan_page.elements.paymentMethod).click();
							driver.findElement(page.adultSafeguardingPlan_page.elements.paymentMethodSelect).click();

							driver.sleep(300);
							driver.findElement(page.adultSafeguardingPlan_page.elements.paymentType).click();
							driver.sleep(300);
							driver.findElement(page.adultSafeguardingPlan_page.elements.paymentTypeSelect).click();
							driver.sleep(300);
							driver.findElement(page.adultSafeguardingPlan_page.elements.paymentDate).click();
							helpers.gridClickDate('next', '16');
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.toggleServiceAsPlacement).click();
							driver.sleep(500);

							return driver.executeScript('return window.scrollTo(' + 50 + ',' + 50 + ');').then(function () {
								driver.sleep(500);
								driver.findElement(page.adultSafeguardingPlan_page.elements.linkService).click();
								driver.sleep(500);
								driver.findElement(page.adultSafeguardingPlan_page.elements.linkActionTitle).click();
								driver.sleep(500);
								driver.executeScript('return window.scrollTo(' + 1200 + ',' + 1200 + ');')
								return driver.sleep(500)
									.then(function () {
										return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmService).click();
									});
							});
						});
					});
			});
		});
	},

	addSelectServiceToActionInAdultSafePlan: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addService), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addService).click();
			return driver.sleep(3000).then(function () {
				return driver.findElement(page.adultSafeguardingPlan_page.elements.serviceTitle).sendKeys("Test Service Title").then(function () {
					driver.findElement(page.adultSafeguardingPlan_page.elements.linkServicetype).sendKeys("Ambulances");
					return driver.sleep(100).then(function () {
						return helpers.gridClick(page.adultSafeguardingPlan_page.elements.linkServicetypeDropDown, page.adultSafeguardingPlan_page.elements.linkServiveTypeDropDownList, "Ambulances")
							.then(function () {
								return driver.findElement(page.adultSafeguardingPlan_page.elements.serviceStartDatePicker).click()
									.then(function () {
										driver.sleep(300);
										return helpers.gridClickDate('curr', '10') //driver.sleep(300)
											.then(function () {
												return driver.executeScript('return window.scrollTo(' + 1000 + ',' + 1000 + ');')
													.then(function () {
														return driver.executeScript('return window.scrollTo(' + 100 + ',' + 100 + ');').then(function () {
															driver.sleep(1000);
															driver.findElement(page.adultSafeguardingPlan_page.elements.linkService).click();
															driver.sleep(1000);
															driver.findElement(page.adultSafeguardingPlan_page.elements.linkActionTitle).click();
															driver.sleep(1000);
															return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {
																return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmService).click()
															});
														})
													});
											});
									});
							});
					});
				});
			});
		});
	},

	serviceDailyFrequency: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addService), 10000)
			.then(function () {
				driver.findElement(page.adultSafeguardingPlan_page.elements.addService).click();
				driver.sleep(300);
				driver.findElement(page.adultSafeguardingPlan_page.elements.serviceTitle).sendKeys('Service title');
				driver.findElement(page.adultSafeguardingPlan_page.elements.searchService).sendKeys(config.Service.ServiceName);
				driver.sleep(3000);
				return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.selectService), 10000).then(function () {
					driver.sleep(1000);
					driver.findElement(page.adultSafeguardingPlan_page.elements.selectService).click();
					return driver.sleep(2000).then(function () {
						driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleType).click();
						return driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleRecurring).click().then(function () {
							driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.startDateLabel), 10000);
							return driver.findElement(page.adultSafeguardingPlan_page.elements.startDateLabel).getText().then(function (startDate) {
								expect(startDate).to.equal("Schedule start date")
								driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.startTimeLabel), 10000);
								return driver.findElement(page.adultSafeguardingPlan_page.elements.startTimeLabel).getText().then(function (starTime) {
									expect(starTime).to.equal("Schedule start time")
									driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.endTimeLabel), 10000);
									return driver.findElement(page.adultSafeguardingPlan_page.elements.endTimeLabel).getText().then(function (endTime) {
										expect(endTime).to.equal("Schedule end time");
										driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.frequencyLabel), 10000);
										return driver.findElement(page.adultSafeguardingPlan_page.elements.frequencyLabel).getText().then(function (frequency) {
											expect(frequency).to.equal("Frequency");
											driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
											driver.sleep(500);
											return driver.findElement(page.adultSafeguardingPlan_page.elements.setDailyFrequency).click().then(function () {
												driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.everyLabel), 10000);
												return driver.findElement(page.adultSafeguardingPlan_page.elements.everyLabel).getText().then(function (everyLabel) {
													expect(everyLabel).to.equal("Every")
													driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.dayLabel), 10000);
													return driver.findElement(page.adultSafeguardingPlan_page.elements.dayLabel).getText().then(function (day) {
														expect(day).to.equal("day")
														driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.endLabel), 10000);
														return driver.findElement(page.adultSafeguardingPlan_page.elements.endLabel).getText().then(function (endLabel) {
															expect(endLabel).to.equal("End");
															driver.findElement(page.adultSafeguardingPlan_page.elements.endSet).click();
															driver.sleep(500);
															return driver.findElement(page.adultSafeguardingPlan_page.elements.endList).getText().then(function (endList) {
																var listValues = "NeverAfteroccurrencesOn date"
																endList = endList.replace(" ", "").replace(/[\r\n]+/g, "");
																return expect(endList).to.equal(listValues);
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

	serviceWeeklyFrequency: function () {
		driver.sleep(2000);
		driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
		driver.sleep(1000);
		return driver.findElement(page.adultSafeguardingPlan_page.elements.setWeeklyFrequency).click().then(function () {
			driver.sleep(1000);
			driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.everyLabel), 10000);
			return driver.findElement(page.adultSafeguardingPlan_page.elements.everyLabel).getText().then(function (everyLabel) {
				expect(everyLabel).to.equal("Every")
				driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.dayLabel), 10000);
				return driver.findElement(page.adultSafeguardingPlan_page.elements.dayLabel).getText().then(function (day) {
					expect(day).to.equal("week");
					driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.ondayLabel), 10000);
					return driver.findElement(page.adultSafeguardingPlan_page.elements.ondayLabel).getText().then(function (ondayLabel) {
						expect(ondayLabel).to.equal("On day");
						driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.weekList), 10000);
						return driver.findElement(page.adultSafeguardingPlan_page.elements.weekList).getText().then(function (weekListText) {
							var weekListValue = "MonTueWedThuFriSatSun"
							week = weekListText.replace(" ", "").replace(/[\r\n]+/g, "");
							expect(week).to.equal(weekListValue);
							driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.endLabel), 10000);
							return driver.findElement(page.adultSafeguardingPlan_page.elements.endLabel).getText().then(function (endLabel) {
								expect(endLabel).to.equal("End");
								driver.findElement(page.adultSafeguardingPlan_page.elements.endSet).click();
								driver.sleep(500);
								return driver.findElement(page.adultSafeguardingPlan_page.elements.endList).getText().then(function (endList) {
									var listValues = "NeverAfteroccurrencesOn date"
									endList = endList.replace(" ", "").replace(/[\r\n]+/g, "");
									return expect(endList).to.equal(listValues);
								});
							});
						});
					});
				});
			});
		});
	},

	serviceMonthlyFrequency: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.frequency), 10000);
		driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
		driver.sleep(500);
		driver.findElement(page.adultSafeguardingPlan_page.elements.setMonthlyFrequency).click().then(function () {
			driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.everyLabel), 10000);
			return driver.findElement(page.adultSafeguardingPlan_page.elements.everyLabel).getText().then(function (everyLabel) {
				expect(everyLabel).to.equal("Every");
				driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.dayLabel), 10000);
				return driver.findElement(page.adultSafeguardingPlan_page.elements.dayLabel).getText().then(function (day) {
					expect(day).to.equal("month");
					driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.onDateLabel), 10000);
					return driver.findElement(page.adultSafeguardingPlan_page.elements.onDateLabel).getText().then(function (onDateLabel) {
						expect(onDateLabel).to.equal("On date");
						driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.endLabel), 10000);
						return driver.findElement(page.adultSafeguardingPlan_page.elements.endLabel).getText().then(function (endLabel) {
							expect(endLabel).to.equal("End");
							driver.findElement(page.adultSafeguardingPlan_page.elements.endSet).click();
							driver.sleep(500);
							return driver.findElement(page.adultSafeguardingPlan_page.elements.endList).getText().then(function (endList) {
								var listValues = "NeverAfteroccurrencesOn date"
								endList = endList.replace(" ", "").replace(/[\r\n]+/g, "");
								return expect(endList).to.equal(listValues);
							});
						});
					});
				});
			});
		});
	},

	serviceYearlyFrequency: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
		driver.sleep(500);
		driver.findElement(page.adultSafeguardingPlan_page.elements.setYearlyFrequency).click().then(function () {
			driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.everyLabel), 10000);
			return driver.findElement(page.adultSafeguardingPlan_page.elements.everyLabel).getText().then(function (everyLabel) {
				expect(everyLabel).to.equal("Every");
				driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.dayLabel), 10000);
				return driver.findElement(page.adultSafeguardingPlan_page.elements.dayLabel).getText().then(function (day) {
					expect(day).to.equal("year");
					driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.onMonthLabel), 10000);
					return driver.findElement(page.adultSafeguardingPlan_page.elements.onMonthLabel).getText().then(function (onMonthLabel) {
						expect(onMonthLabel).to.equal("On month");
						driver.findElement(page.adultSafeguardingPlan_page.elements.monthSet).click();
						driver.sleep(500);
						return driver.findElement(page.adultSafeguardingPlan_page.elements.monthList).getText().then(function (monthList) {
							var monthListValue = "JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember"
							months = monthList.replace(" ", "").replace(/[\r\n]+/g, "");
							expect(months).to.equal(monthListValue);
							driver.findElement(page.adultSafeguardingPlan_page.elements.monthSet).click();
							driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.endLabel), 10000);
							return driver.findElement(page.adultSafeguardingPlan_page.elements.endLabel).getText().then(function (endLabel) {
								expect(endLabel).to.equal("End");
								driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');')
								driver.findElement(page.adultSafeguardingPlan_page.elements.endSet).click();
								driver.sleep(500);
								return driver.findElement(page.adultSafeguardingPlan_page.elements.endList).getText().then(function (endList) {
									var listValues = "NeverAfteroccurrencesOn date"
									endList = endList.replace(" ", "").replace(/[\r\n]+/g, "");
									return expect(endList).to.equal(listValues);
								});
							});
						});
					});
				});
			});
		});
	},

	addDailyServiceToActionInAdultSafePlan: function () {
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addService), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addService).click();
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.serviceTitle).sendKeys('Service title');
			driver.findElement(page.adultSafeguardingPlan_page.elements.searchService).sendKeys(config.Service.ServiceName);
			driver.sleep(3000);
			return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.selectService), 10000).then(function () {
				driver.sleep(1000);
				driver.findElement(page.adultSafeguardingPlan_page.elements.selectService).click();
				return driver.sleep(2000).then(function () {
					driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleType).click();
					driver.sleep(800);
					driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleRecurring).click();
					driver.sleep(800);
					driver.findElement(page.adultSafeguardingPlan_page.elements.provisionStartDate).click();
					return helpers.gridClickDate('curr', '16').then(function () {
						driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
						driver.sleep(500);
						return driver.findElement(page.adultSafeguardingPlan_page.elements.setDailyFrequency).click().then(function () {
							driver.findElement(page.adultSafeguardingPlan_page.elements.setDay).sendKeys("4");
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.endSet).click();
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.endSetAfterOccurences).click();
							driver.sleep(500);
							driver.findElement(page.adultSafeguardingPlan_page.elements.endOccurences).sendKeys("2");
							driver.sleep(800);
							driver.findElement(page.adultSafeguardingPlan_page.elements.dailyFrequencyStartDate).click();
							helpers.gridClickDate('prev', '16');
							driver.sleep(800);
							driver.findElement(page.adultSafeguardingPlan_page.elements.dailyFrequencyEndDate).click();
							helpers.gridClickDate('next', '16');
							driver.sleep(800);
							return driver.executeScript('return window.scrollTo(' + 17 + ',' + 17 + ');').then(function () {
								driver.sleep(1500);
								driver.findElement(page.adultSafeguardingPlan_page.elements.linkService).click();
								driver.sleep(1700);
								driver.findElement(page.adultSafeguardingPlan_page.elements.linkActionTitle).click();
								driver.sleep(1000);
								console.log("scroll222");
								return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {
									driver.sleep(1000);
									return driver.findElement(page.adultSafeguardingPlan_page.elements.confirmService).click()
								});
							});
						});
					});
				});
			});
		});
	},

	addWeeklyServiceToActionInAdultSafePlan: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addMoreButton), 10000)
		driver.findElement(page.adultSafeguardingPlan_page.elements.addMoreButton).click();
		return driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');').then(function () {
			driver.sleep(500);
			driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleType).click();
			driver.sleep(200);
			return driver.findElement(page.adultSafeguardingPlan_page.elements.scheduleRecurring).click().then(function () {
				driver.sleep(200);
				driver.findElement(page.adultSafeguardingPlan_page.elements.frequency).click();
				driver.sleep(200);
				return driver.findElement(page.adultSafeguardingPlan_page.elements.setWeeklyFrequency).click().then(function () {
					driver.executeScript('return window.scrollTo(' + 500 + ',' + 500 + ');')
					driver.sleep(200);
					driver.findElement(page.adultSafeguardingPlan_page.elements.setWeek).sendKeys("4");
					driver.sleep(200);
					driver.findElement(page.adultSafeguardingPlan_page.elements.setOnDay).click();
					driver.sleep(200);
					driver.executeScript('return window.scrollTo(' + 100 + ',' + 100 + ');');
					driver.findElement(page.adultSafeguardingPlan_page.elements.weeklyEndSet).click();
					driver.sleep(1500);
					driver.findElement(page.adultSafeguardingPlan_page.elements.weeklySetAfterOccurences).click();
					driver.sleep(300);
					//driver.findElement(page.adultSafeguardingPlan_page.elements.weeklyOccurences).sendKeys("2");
					return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');');
				});
			});
		});
	},

	verifyCreatedScheduled: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.outcomeClick), 10000)
		driver.findElement(page.adultSafeguardingPlan_page.elements.outcomeClick).click();
		return driver.executeScript('return window.scrollTo(' + 700 + ',' + 700 + ');').then(function () {
			driver.sleep(500);
			return driver.findElement(page.adultSafeguardingPlan_page.elements.createdDailyFrequency).getText().then(function (daily) {
				return expect(daily).to.equal("Frequency daily");
			});
		});
	},

	isDiabledActionButtonVisible: function () {
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.disabledActionButton), 10000);
	},

	verifyPlanServices: function () {
		var dateFormat = require('dateformat');
		var date = new Date();
		var dd = date.setDate(16);
		var mm = date.setMonth(date.getMonth() - 1);
		var yyyy = date.getFullYear();
		return driver.executeScript("return $('.service-wrapper.m-l-md > div:nth-child(6) [id=\"reusableDatepicker\"]').val();")
			.then(function (startDate) {
				var prevDate = dateFormat(date, "dd/mm/yyyy");
				console.log("startDate: ", startDate)
				console.log("formatDate: ", prevDate)
				expect(startDate).to.equal(prevDate)
				return driver.sleep(100)
					.then(function () {
						return driver.executeScript("return $('.service-wrapper.m-l-md > div:nth-child(7) [id=\"reusableDatepicker\"]').val();")
							.then(function (endDate) {
								var date1 = new Date();
								var dd = date1.setDate(16);
								var mm = date1.setMonth(date1.getMonth() + 1);
								var yyyy = date1.getFullYear();
								nextDate = dateFormat(date1, "dd/mm/yyyy");
								console.log("endDate: ", endDate)
								console.log("formatDate: ", nextDate)
								expect(endDate).to.equal(nextDate)
								return driver.sleep(1000)
							})
					})
			})
	},

	addService1ToActionInAdultSafePlan: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addButton), 10000);
		driver.findElement(page.adultSafeguardingPlan_page.elements.addButton).click();
		return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.addService), 10000).then(function () {
			driver.findElement(page.adultSafeguardingPlan_page.elements.addService).click();
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.serviceTitle).sendKeys('Service title');
			driver.findElement(page.adultSafeguardingPlan_page.elements.searchService).sendKeys(config.Service.ServiceName);
			driver.sleep(2000);
			return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.selectService), 10000).then(function () {
				driver.sleep(800);
				driver.findElement(page.adultSafeguardingPlan_page.elements.selectService).click();
				return driver.sleep(1500).then(function () {
					driver.findElement(page.adultSafeguardingPlan_page.elements.needProvisionToggle).click();
					driver.sleep(800);
					driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRate).click();
					driver.sleep(300);
					return driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRateSelect).getText().then(function (rate) {
						return expect(rate).to.equal('10-Day Care(Per Hour)');
					});
				});
			});
		});
	},

	addService2ToActionInAdultSafePlan: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.removeService), 10000);
		return driver.findElement(page.adultSafeguardingPlan_page.elements.removeService).click().then(function () {
			driver.sleep(300);
			driver.findElement(page.adultSafeguardingPlan_page.elements.searchService).sendKeys(config.Service.ServiceName2);
			driver.sleep(2000);
			return driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.selectService), 10000).then(function () {
				driver.sleep(800);
				driver.findElement(page.adultSafeguardingPlan_page.elements.selectService).click();
				return driver.sleep(2000).then(function () {
					driver.sleep(900);
					driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRate).click();
					driver.sleep(300);
					return driver.findElement(page.adultSafeguardingPlan_page.elements.provisionRateSelect).getText().then(function (rate) {
						console.log(rate, " : rate");
						return expect(rate).to.equal('20-Day Care(Per Hour)');
					});
				});
			});
		});
	},

	verifyUpdatedAmount: function () {
		driver.wait(until.elementsLocated(page.adultSafeguardingPlan_page.elements.outcomeAction), 10000);
		return driver.findElement(page.adultSafeguardingPlan_page.elements.outcomeAction).click().then(function () {
			driver.executeScript('return window.scrollTo(' + 1400 + ',' + 1400 + ');');
			return driver.executeScript("return $('#actualCost').val();").then(function (text) {
				expect(text).to.equal("50.00");
				return driver.sleep(1000);
			})
		})

	}

}