module.exports = {

	elements: {
		workLoadSection: by.css('[aria-controls="workload"]'),
		formSection: by.css('#sidebar-wrapper > div > div:nth-child(2) ul li:nth-child(2) a'),
		//tasksUnderWorkload: by.css('.panel-collapse.collapse.in [aria-controls="tasks"]'),
		tasksUnderWorkload: by.css('[class="nav-icon nav-icon-tasks"]'),
		//appointmentUnderWorkload: by.css('#todayPanel ul li:nth-child(2) a'),
		appointmentUnderWorkload: by.css('[class="nav-icon nav-icon-appointments"]'),
		//messageUnderWorkload: by.css('#todayPanel ul li:nth-child(3) a'),
		messageUnderWorkload: by.css('[class="nav-icon nav-icon-messages"]'),
		swName: by.css('#sidebar-wrapper div.sidebar-greetings.p-sm strong'),
		caseLoadSection: by.css('[aria-label="Case Load"]'),
		casesLists: by.css('#container-fluid'),
		casePersonName: by.css('[class="first-name pointer"]'),
		workLdMessages: by.css('li[data-bind*="messages"] a'),
		messageSubject: by.css('#messagesToday li.list-group-item:nth-child(1)'),
		flag: by.css('div.case-flag.text-center.m-t-md span'),
		casePerson: by.css('.case-bubble-wrapper'),
		caseSection: by.css('.case-bubble-wrapper.item.image-wrapper'),
		caseBubble: by.css('[style = "height: 55px; width: 55px;"]')

	},

	socialWorkerDashboard: function (personName) {
		return driver.wait(until.elementsLocated(page.swDashboard_page.elements.workLoadSection), 35000).then(function () {
			driver.findElement(page.swDashboard_page.elements.workLoadSection).isDisplayed();
			driver.findElement(page.swDashboard_page.elements.formSection).isDisplayed();
			return driver.wait(until.elementsLocated(page.swDashboard_page.elements.tasksUnderWorkload), 35000)
				.then(function () {
					driver.findElement(page.swDashboard_page.elements.tasksUnderWorkload).isDisplayed();
					return driver.wait(until.elementsLocated(page.swDashboard_page.elements.appointmentUnderWorkload), 35000).then(function () {
						return driver.findElement(page.swDashboard_page.elements.appointmentUnderWorkload).isDisplayed().then(function () {
							return driver.findElement(page.swDashboard_page.elements.messageUnderWorkload).isDisplayed().then(function () {
								return driver.wait(until.elementsLocated(page.swDashboard_page.elements.caseLoadSection), 20000).then(function () {
									return driver.findElement(page.swDashboard_page.elements.caseLoadSection).isDisplayed();//.then(function () {
									//return assert(driver.findElement(page.swDashboard_page.elements.swName).getText(), "Nhamo");
									//});
								});
							});
						});
					});
				});
		});
	},

	checkCaseLoadScreenForPerson1: function (FirstName) {
		driver.sleep(2000);
		return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.casePersonName, config.PersonDetails.person1.FirstName)
			.then(function (casePersonName) {
				return expect(casePersonName).to.equal(FirstName);
			});
	},

	checkCaseLoadScreenForPerson2: function (FirstName) {
		driver.sleep(2000);
		return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.casePersonName, FirstName)
			.then(function (casePersonName) {
				return expect(casePersonName).to.equal(FirstName);
			});

	},

	checkCaseLoadScreenForPerson3: function (FirstName) {
		driver.sleep(2000);
		return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.casePersonName, config.PersonDetails.person3.FirstName)
			.then(function (casePersonName) {
				return expect(casePersonName).to.equal(FirstName);
			});
	},

	/*verifyCaseUnderCaseLoad: function () {
		driver.sleep(3000);
		return driver.wait(until.elementsLocated(page.swDashboard_page.elements.caseLoadSection), 20000)
			.then(function () {
			if ((page.swDashboard_page.elements.casePersonName).length > 0) {
				console.log('Element is visible');
				return false;
	
			} else  {
				 console.log('Element is not visible');
				return true;
			}
	
		})
	
	},
	
	verifyCaseUnderCaseLoad: function () {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		var caseName = config.PersonDetails.person3.FirstName;
		try { 
			if (caseName === true) {
				console.log('Element is visible');
			}
		}
		catch(err)  {
			console.log('Element is not visible');
		}
	},
	
	*/

	verifyCaseUnderCaseLoad: function () {
		driver.sleep(2000);

		config = jsonfile.readFileSync('./support/'+featureConfig);

		var caseName = config.PersonDetails.person3.FirstName;

		if (caseName == true) {
			//console.log('Element is visible');
			return false;

		} else {
			//console.log('Element is not visible');
			return true;
		}

	},

	verifyMessageSubject: function () {
		return driver.wait(until.elementsLocated(page.swDashboard_page.elements.workLoadSection), 50000).then(function () {
			driver.wait(until.elementsLocated(page.swDashboard_page.elements.messageSubject), 50000);
			driver.sleep(4500);
			driver.findElement(page.swDashboard_page.elements.workLdMessages).click();
			return driver.findElement(page.swDashboard_page.elements.messageSubject).getText().then(function (subject) {
				//Changed to include due to sendkey issue
				return expect(subject).to.include("Auto TesterTM2 Text Replay Testing");
			});
		});
	},


	checkMissingCase: function (FirstName) {
		driver.sleep(2000);
		return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.casePersonName, FirstName)
			.then(function (casePersonName) {
				return expect(casePersonName).to.equal(FirstName);
			}).then(function () {
				driver.sleep(800);
				return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.flag, "Missing")
					.then(function (flag) {
						return expect(flag).to.equal("Missing");
					})
			})
	},

	checkAbsentCase: function (Name) {
		driver.sleep(2000);
		return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.casePersonName, Name)
			.then(function (casePersonName) {
				return expect(casePersonName).to.equal(Name);
			}).then(function () {
				driver.sleep(800);
				return helpers.gridGetText(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.flag, "Absent")
					.then(function (flag) {
						return expect(flag).to.equal("Absent");
					})
			})
	},

	verifyCaseBubble: function (FirstName) {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.person2.FirstName;
		driver.sleep(1500);
		return helpers.gridCaseBubble(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.caseSection, page.swDashboard_page.elements.casePersonName, FirstName)
	},

	verifyIncreasedCaseBubble: function (FirstName) {
		config = jsonfile.readFileSync('./support/'+featureConfig);
		FirstName = config.PersonDetails.person2.FirstName;
		driver.sleep(5000);
		driver.findElement(page.tmDashboard_page.elements.homeIcon).click();
		driver.sleep(5000);
		return helpers.gridIncreasedCaseBubble(page.swDashboard_page.elements.casesLists, page.swDashboard_page.elements.caseSection, page.swDashboard_page.elements.casePersonName, FirstName)
	}
}