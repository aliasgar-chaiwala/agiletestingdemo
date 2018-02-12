module.exports = {

	//  url: 'https://www.google.co.in/[a-zA-Z0-9\-_?=]+',

	elements: {
		provisionOrgName: by.css('[name="provision-list-name"] strong'),
		provisionServiceName: by.css('[name="provision-address"] > div:nth-child(1) > strong'),
		provisionStatus: by.css(''),
		paymentOption: by.css('.provision-date.col-sm-7 > div:nth-child(2)'),
		provisionLabel: by.css('.provision-app > section > div > h2'),
		provisionAmount: by.css('[name="provision-address"] div:nth-child(2)'),
		newProvisionIcon: by.css('a.icon-create-new'),
		personSearch: by.css('[placeholder="Search for person or organisation or service provider"]'),
		personSelect: by.css('[id*="create-new-provision"] .selectize-dropdown.multi.form-control.plugin-remove_button > div > div > div.option'),
		paymentMethod: by.css('#paymentMethod'),
		paymentMethodList: by.css('.dropdown.open ul.dropdown-menu'),
		paymentType: by.css('#paymentType'),
		paymentTypeList: by.css('.create-new-provision .container div:nth-child(3) .form-group .dropdown.open:nth-child(2) ul.dropdown-menu'),
		amount: by.css('[name="amount"]'),
		paymentDate: by.css('#datePickerdateToPayOn div.datepicker-parent input'),
		reason: by.css('#reason'),
		submit: by.css('[name="new-provision"]'),
		paymentFrequency: by.css('#paymentFrequency'),
		paymentFrequencyList: by.css('.create-new-provision .container div:nth-child(4) div:nth-child(3) .form-group .dropdown ul.dropdown-menu'),
		paymentStartDate: by.css('#datePickerStartDate div.datepicker-parent input'),
		paymentEndDate: by.css('#datePickerEndDate div.datepicker-parent input'),
		provisionPersonName: by.css('[name="provision-list-name"]'),
		provisionPaymentOption: by.css('.provision-date.col-sm-7 > div:nth-child(3)'),
		provisionCreatedAmount: by.css('[name="provision-address"] div:nth-child(1)'),
		moreProvisionLink: by.css('.lnk-view-more'),
		editProvisionLink: by.css('a.update-provision'),
		updateTitle: by.css('#addProvision'),
		updateButton: by.css('.btn-create-new'),
		provisionsTitle: by.css('.provision-app h2'),
		addProvisionsTitle: by.css('#addProvision'),
		payeeLabel: by.css('[for="searchForm"]'),
		paymentMethodLabel: by.css('[for="paymentMethod"]'),
		paymentTypeLabel: by.css('[for="paymentType"]'),
		amountLabel: by.css('[for="pro-amount"]'),
		reasonLabel: by.css('[for="reason"]'),
		paymentMethodDiv: by.css('div[data-bind*="isDropdownOpenForPayment"] div.dropdown'),
		paymentTypeDiv: by.css('div[data-bind*="setDropdownOpenForPaymentType"] div.dropdown'),
		paymentFrequencyDiv: by.css('div[data-bind*="setDropdownOpenForFrequency"] div.dropdown')
	},

	planProvisionVerify: function (org, serviceName) {
		return driver.wait(until.elementsLocated(page.provision_page.elements.provisionOrgName), 10000)
			.then(function () {
				return driver.findElement(page.provision_page.elements.provisionOrgName).getText()
					.then(function (orgName) {
						expect(orgName).to.equal(org);
						driver.sleep(100);
						return driver.findElement(page.provision_page.elements.provisionServiceName).getText()
							.then(function (serName) {
								expect(serName).to.equal(serviceName);
								driver.sleep(100);
								return driver.findElement(page.provision_page.elements.paymentOption).getText()
									.then(function (paymentDetails) {
										expect(paymentDetails).to.equal('One off payment by Cash ,');
										driver.sleep(100);
									});
							});
					});
			});
	},

	placementProvisionVerify: function (org, serviceName) {
		return driver.wait(until.elementsLocated(page.provision_page.elements.provisionOrgName), 10000)
			.then(function () {
				return driver.findElement(page.provision_page.elements.provisionOrgName).getText()
					.then(function (orgName) {
						expect(orgName).to.equal(org);
						driver.sleep(100);
						return driver.findElement(page.provision_page.elements.provisionServiceName).getText()
							.then(function (serName) {
								expect(serName).to.equal(serviceName);
								driver.sleep(100);
								return driver.findElement(page.provision_page.elements.paymentOption).getText()
									.then(function (paymentDetails) {
										expect(paymentDetails).to.equal('One off payment by Cash , Approved');
										return driver.findElement(page.provision_page.elements.provisionAmount).getText()
											.then(function (provisionAmt) {
												expect(provisionAmt).to.equal('Provisioned amount £ 111.00');
												return driver.sleep(100);
											});
									});
							});
					});
			});
	},

	cppUpdatedProvisionVerify: function (org, serviceName) {
		return driver.wait(until.elementsLocated(page.provision_page.elements.provisionOrgName), 10000)
			.then(function () {
				return driver.findElement(page.provision_page.elements.provisionOrgName).getText()
					.then(function (orgName) {
						expect(orgName).to.equal(org);
						driver.sleep(100);
						return driver.findElement(page.provision_page.elements.provisionServiceName).getText()
							.then(function (serName) {
								expect(serName).to.equal(serviceName);
								driver.sleep(100);
								return driver.findElement(page.provision_page.elements.paymentOption).getText()
									.then(function (paymentDetails) {
										expect(paymentDetails).to.equal('One off payment by Cash , Approved');
										return driver.findElement(page.provision_page.elements.provisionAmount).getText()
											.then(function (provisionAmt) {
												expect(provisionAmt).to.equal('Provisioned amount £ 222.00');
												return driver.sleep(100);
											});
									});
							});
					});
			});
	},


	createProvision: function (person) {
		driver.sleep(1000);
		return driver.wait(until.elementsLocated(page.provision_page.elements.newProvisionIcon), 15000).then(function () {
			return driver.findElement(page.provision_page.elements.newProvisionIcon).click().then(function () {
				return driver.wait(until.elementsLocated(page.provision_page.elements.personSearch), 10000).then(function () {
					driver.findElement(page.provision_page.elements.personSearch).sendKeys(person);
					driver.sleep(2000);
					return driver.wait(until.elementsLocated(page.provision_page.elements.personSelect), 10000).then(function () {
						driver.findElement(page.provision_page.elements.personSelect).click();
						return driver.sleep(500).then(function () {
							helpers.clickIncludesList(page.provision_page.elements.paymentMethodDiv, 'button', by.css('li a'), 'Vouchers or Tokens')
							return helpers.clickIncludesList(page.provision_page.elements.paymentTypeDiv, 'button', by.css('li a'), 'Recurring').then(function () {
								driver.sleep(500);
								return driver.findElement(page.provision_page.elements.amount).sendKeys("80.00").then(function () {
									return helpers.clickIncludesList(page.provision_page.elements.paymentFrequencyDiv, 'button', by.css('li a'), 'Nightly').then(function () {
										driver.sleep(500);
										driver.findElement(page.provision_page.elements.paymentStartDate).click();
										return helpers.gridClickDate('next', '16').then(function () {
											driver.sleep(500);
											driver.findElement(page.provision_page.elements.paymentEndDate).click()
											return helpers.gridClickDate('next', '18').then(function () {
												driver.findElement(page.provision_page.elements.reason).sendKeys("Test")
												return driver.sleep(1000).then(function () {
													driver.findElement(page.provision_page.elements.submit).click()
													return driver.sleep(1000);
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
		//});
	},

	verifyCreatedProvision: function (person) {
		return driver.wait(until.elementsLocated(page.provision_page.elements.provisionPersonName), 10000)
			.then(function () {
				return driver.findElement(page.provision_page.elements.provisionPersonName).getText()
					.then(function (orgName) {
						expect(orgName).to.equal(person);
						driver.sleep(100);
						return driver.findElement(page.provision_page.elements.provisionPaymentOption).getText()
							.then(function (paymentDetails) {
								expect(paymentDetails).to.equal('Nightly payment by Vouchers or Tokens , Awaiting approval');
								return driver.findElement(page.provision_page.elements.provisionCreatedAmount).getText()
									.then(function (provisionAmt) {
										expect(provisionAmt).to.equal('Provisioned amount £ 80.00');
										return driver.sleep(100);
									});
							});
					});
			});
	},

	updateProvision: function (person) {
		driver.sleep(1000);
		return driver.wait(until.elementsLocated(page.provision_page.elements.moreProvisionLink), 15000).then(function () {
			return driver.findElement(page.provision_page.elements.moreProvisionLink).click().then(function () {
				driver.wait(until.elementsLocated(page.provision_page.elements.editProvisionLink), 10000);
				return driver.findElement(page.provision_page.elements.editProvisionLink).click().then(function () {
					return driver.findElement(page.provision_page.elements.updateTitle).getText().then(function (update) {
						expect(update).to.equal('Update Provision');

						return driver.sleep(500).then(function () {
							driver.findElement(page.provision_page.elements.amount).clear();
							return driver.findElement(page.provision_page.elements.amount).sendKeys("100.00").then(function () {
								driver.findElement(page.provision_page.elements.updateButton).click();
								return driver.sleep(1500).then(function () {
									return driver.findElement(page.provision_page.elements.provisionPersonName).getText().then(function (orgName) {
										expect(orgName).to.equal(person);
										driver.sleep(100);
										return driver.findElement(page.provision_page.elements.provisionPaymentOption).getText()
											.then(function (paymentDetails) {
												expect(paymentDetails).to.equal('Nightly payment by Vouchers or Tokens , Approved');
												return driver.findElement(page.provision_page.elements.provisionCreatedAmount).getText()
													.then(function (provisionAmt) {
														expect(provisionAmt).to.equal('Provisioned amount £ 100.00');
														return driver.sleep(100);
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

	verifyProvisionDetails: function () {
		driver.wait(until.elementLocated(page.provision_page.elements.provisionsTitle), 20000);
		return driver.findElement(page.provision_page.elements.provisionsTitle).getText().then(function (provisionsTitle) {
			expect(provisionsTitle).to.equal("Provisions");
			driver.sleep(1500);
			driver.wait(until.elementLocated(page.provision_page.elements.newProvisionIcon), 20000);
			return driver.findElement(page.provision_page.elements.newProvisionIcon).click().then(function () {
				driver.wait(until.elementLocated(page.provision_page.elements.addProvisionsTitle), 20000);
				return driver.findElement(page.provision_page.elements.addProvisionsTitle).getText().then(function (addProvisionsTitle) {
					expect(addProvisionsTitle).to.equal("Add Provision");
					driver.wait(until.elementsLocated(page.provision_page.elements.payeeLabel), 10000);
					return driver.findElement(page.provision_page.elements.payeeLabel).getText().then(function (payeeLabel) {
						expect(payeeLabel).to.equal("Payee");
						driver.wait(until.elementsLocated(page.provision_page.elements.paymentMethodLabel), 10000);
						return driver.findElement(page.provision_page.elements.paymentMethodLabel).getText().then(function (paymentMethodLabel) {
							expect(paymentMethodLabel).to.equal("Payment method");
							driver.wait(until.elementsLocated(page.provision_page.elements.paymentTypeLabel), 10000);
							return driver.findElement(page.provision_page.elements.paymentTypeLabel).getText().then(function (paymentTypeLabel) {
								expect(paymentTypeLabel).to.equal("Payment type");
								driver.wait(until.elementsLocated(page.provision_page.elements.amountLabel), 10000);
								return driver.findElement(page.provision_page.elements.amountLabel).getText().then(function (amountLabel) {
									expect(amountLabel).to.equal("Amount (£)");
									driver.wait(until.elementsLocated(page.provision_page.elements.reasonLabel), 10000);
									return driver.findElement(page.provision_page.elements.reasonLabel).getText().then(function (reasonLabel) {
										return expect(reasonLabel).to.equal("Reason for provision");
									});
								});
							});
						});
					});
				});
			});
		});
	}

	//-------End
}