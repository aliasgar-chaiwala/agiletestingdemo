var dateFormat = require('dateformat');
module.exports = {

  elements: {
    involvementsPage: by.css('div[class="involvements-pg"]'),
    involvementsPageTitle: by.css('h2[class="page-title"]'),
    createInvolvementIcon: by.css('#addNew-involvement'),
    newInvolvementWith: by.css('[placeholder="Search professional, organisation or service provider"]'),
    selectInvolvementWithList: by.css('#create-new-involvement  div.selectize-dropdown.multi  div[data-group="professional"] .option'),
    newInvolvementTitle: by.css('h3.create-new-title'),
    involvementFromDate: by.css('#create-new-involvement > div > div > div:nth-child(4) > div:nth-child(1) input'),
    involvementToDate: by.css('#create-new-involvement > div > div > div:nth-child(4) > div:nth-child(2) input'),
    involvementReason: by.css('#dropdownMenu1'),
    involvementReasonHeadTeacher: by.css('#create-new-involvement div:nth-child(3) ul > li > a > span:nth-child(2)'),
    involvementAdditionalInfo: by.css('[placeholder="Please provide detailed information of involvement"]'),
    addInvolvement: by.css('#create-new-involvement button.btn.btn-primary.pull-right'),

    createdInvolvement: by.css('#maincontent div.involvements-pg div.col-sm-11 > div:nth-child(1) > span.involvements-by'),

    involvementBlock: by.css('div[class="involvements-block-wrapper tab-section"]'),
    involvementBlockName: by.css('span[class="involvements-by"]'),
    userInvolvementBlockTeam: by.css('.involvement-type .involvement-title'),
    teamInvolvementTitle: by.css('.involvement-type div[name="involvement-list-reason"] .involvements-by span'),
    // teamInvolvementTitle: by.css('.involvements-by span'),
    involvementPageTitle: by.css('[class="page-title"]'),
    linkMore: by.css('a.lnk-view-more'),
    involvementBy: by.css('div.detail-content span.involvements-by'),
    involvementDateFrom: by.css('div.detail-content .involvement-date-from label'),
    involvementDateTo: by.css('div.detail-content .involvement-date-to label'),
    involvementEdit: by.css('div.detail-content .update-provision.icon-edit'),
    startDateIconInEdit: by.css('label[for="involvements-starts"] + div i'),
    endDateIconInEdit: by.css('label[for="involvements-ends"] + div i'),
    updateButton: by.css('#create-new-involvement .btn-primary'),
  },

  navigateToInvolvements: function () {
    return driver.wait(until.elementsLocated(page.personFacet_page.elements.involvementVisible), 25000).then(function () {
      driver.sleep(1500);
      return driver.findElement(page.personFacet_page.elements.involvementVisible).click();
    });
  },

  createInvolvement: function () {
    return driver.wait(until.elementsLocated(page.involvements_page.elements.involvementsPage), 25000).then(function () {
      driver.wait(until.elementsLocated(page.involvements_page.elements.involvementsPageTitle), 15000);
      return driver.findElement(page.involvements_page.elements.involvementsPageTitle).getText().then(function (involvementsPageText) {
        expect(involvementsPageText).to.equal("Involvements");
      }).then(function () {
        //console.log(1);
        driver.wait(until.elementsLocated(page.involvements_page.elements.createInvolvementIcon), 15000);
        //console.log(2);
        return driver.findElement(page.involvements_page.elements.createInvolvementIcon).click().then(function () {
          //console.log(3);
          driver.wait(until.elementsLocated(page.involvements_page.elements.newInvolvementTitle), 25000);
          //console.log(4);
          return driver.findElement(page.involvements_page.elements.newInvolvementTitle).getText().then(function (newInvolvementTitleName) {
            //console.log(5);
            expect(newInvolvementTitleName).to.equal("Add new Involvement");
            //console.log(6);
            return driver.wait(until.elementsLocated(page.involvements_page.elements.newInvolvementWith), 25000).then(function () {
              //console.log(7);
              driver.findElement(page.involvements_page.elements.newInvolvementWith).sendKeys(config.Professional.BasicInfo.NewName);
              //console.log(8);
              return driver.sleep(2000).then(function () {
                //console.log(9);
                driver.wait(until.elementsLocated(page.involvements_page.elements.selectInvolvementWithList), 25000);
                //console.log(000);
                driver.findElement(page.involvements_page.elements.selectInvolvementWithList).click();
                //console.log(001);
                driver.sleep(1500);
                return driver.findElement(page.involvements_page.elements.involvementAdditionalInfo).sendKeys("Testing Info").then(function () {
                  //console.log(002);
                  driver.wait(until.elementsLocated(page.involvements_page.elements.involvementReason), 25000);
                  //console.log(003);
                  driver.findElement(page.involvements_page.elements.involvementReason).click();
                  //console.log(004);
                  driver.sleep(500);
                  driver.findElement(page.involvements_page.elements.involvementReasonHeadTeacher).click();
                  return driver.sleep(500).then(function () {
                    driver.findElement(page.involvements_page.elements.involvementToDate).click();
                    driver.sleep(500);
                    driver.findElement(page.involvements_page.elements.involvementFromDate).click();
                    driver.sleep(500);
                    return driver.findElement(page.involvements_page.elements.addInvolvement).click();
                  });
                });
              });
            });
          });
        });
      });
    });
  },

  verifyCreatedInvolvement: function (Involvement) {
    return driver.wait(until.elementsLocated(page.involvements_page.elements.involvementBlock), 25000, 'Main Involvement Block Not Available')
      .then(function () {
        return driver.wait(until.elementIsVisible(driver.findElement(page.involvements_page.elements.createdInvolvement)), 25000).then(function () {
          driver.sleep(800);
          return helpers.gridGetParentElement(page.involvements_page.elements.involvementBlock, page.involvements_page.elements.involvementBlockName, Involvement)
            .then(function (createdInvolvement) {
              if (Involvement.includes('TM') || Involvement.includes('SW')) {
                return createdInvolvement.findElement(page.involvements_page.elements.userInvolvementBlockTeam).getText().then(function (userInvolvementBlockTeam) {
                  expect(userInvolvementBlockTeam).to.contain('Team :');
                  console.log("----------User verified on involvements page----------");
                });
              } else if (Involvement.includes('Team')) {
                driver.sleep(500);
                return createdInvolvement.findElement(page.involvements_page.elements.teamInvolvementTitle).getText().then(function (teamInvolvementTitle) {
                  expect(teamInvolvementTitle).to.contain('Team involvement');
                  console.log("----------Team verified on involvements page----------");
                });
              }
            });
        });
      });
  },

  verifyCreatedInvolvementBy: function (involvementName, involvementByToMatch) {
    return driver.wait(until.elementsLocated(page.involvements_page.elements.involvementBlock), 25000, 'Main Involvement Block Not Available')
      .then(function () {
        return driver.wait(until.elementIsVisible(driver.findElement(page.involvements_page.elements.createdInvolvement)), 25000).then(function () {
          driver.sleep(800);
          return helpers.gridGetParentElement(page.involvements_page.elements.involvementBlock, page.involvements_page.elements.involvementBlockName, involvementName)
            .then(function (createdInvolvement) {
              return createdInvolvement.findElement(page.involvements_page.elements.linkMore).click().then(function () {
                return driver.wait(until.elementsLocated(page.involvements_page.elements.involvementBy), 2500, 'involvementBy not located')
                  .then(function () {
                    return createdInvolvement.findElement(page.involvements_page.elements.involvementBy).getText()
                      .then(function (involvementByText) {
                        expect(involvementByText).to.equal(involvementByToMatch);
                      });
                  })
                  .then(function () {
                    return createdInvolvement.findElement(page.involvements_page.elements.involvementDateFrom).getText()
                      .then(function (involvementDateFromText) {
                        expect(involvementDateFromText).to.equal(PRIV_FOST_STARTDATE);
                      });
                  })
                  .then(function () {
                    return createdInvolvement.findElement(page.involvements_page.elements.involvementDateTo).getText()
                      .then(function (involvementDateToText) {
                        expect(involvementDateToText).to.equal(PRIV_FOST_ENDDATE);
                      });
                  });

              })
            });
        });
      });
  },

  updateDateForInvolvement: function (fieldToUpdate, involvementName, targetDate) {
    return driver.wait(until.elementsLocated(page.involvements_page.elements.involvementBlock), 25000, 'Main Involvement Block Not Available')
      .then(function () {
        return driver.wait(until.elementIsVisible(driver.findElement(page.involvements_page.elements.createdInvolvement)), 25000).then(function () {
          driver.sleep(800);
          return helpers.gridGetParentElement(page.involvements_page.elements.involvementBlock, page.involvements_page.elements.involvementBlockName, involvementName)
            .then(function (createdInvolvement) {
              return driver.wait(until.elementIsVisible(createdInvolvement.findElement(page.involvements_page.elements.linkMore)), 5000, "linkMore is not located")
                .then(function (linkMoreElem) {
                  return linkMoreElem.getText().then(function (linkMoreText) {
                    console.log("linkMoreText:", linkMoreText)
                    if (linkMoreText.includes("more")) {
                      return helpers.retryingClickWithParent(createdInvolvement, page.involvements_page.elements.linkMore);
                    }
                  })
                }).then(function () {
                  return createdInvolvement.findElement(page.involvements_page.elements.involvementEdit)
                    .then(function (involvementEditIconElem) {
                      return involvementEditIconElem.click().then(function () {
                        return driver.wait(until.elementLocated(page.involvements_page.elements.updateButton), 5000, 'Update button in Involvement edit page not located');
                      });
                    });
                })
                .then(function () {
                  if (fieldToUpdate == "From") {
                    return driver.wait(until.elementLocated(page.involvements_page.elements.startDateIconInEdit), 5000, 'Start date Icon in Involvement edit page not located');
                  } else if (fieldToUpdate == "To") {
                    return driver.wait(until.elementLocated(page.involvements_page.elements.endDateIconInEdit), 5000, 'End date Icon in Involvement edit page not located');
                  } else {
                    assert.fail("fieldToUpdate argument is not valid.");
                  }
                }).then(function (dateIconElem) {
                  return dateIconElem.click().then(function () {
                    return helpers.gridSelectDate(targetDate);
                  });
                });
            })
            .then(function () {
              return driver.wait(until.elementLocated(page.involvements_page.elements.updateButton), 5000, 'Update button in Involvement edit page not located').then(function (updateBtnElem) {
                return updateBtnElem.click().then(function () {
                  if (fieldToUpdate == "From") {
                    global.PRIV_FOST_STARTDATE = dateFormat(targetDate, "dd/mm/yyyy");
                  } else if (fieldToUpdate == "To") {
                    global.PRIV_FOST_ENDDATE = dateFormat(targetDate, "dd/mm/yyyy");
                  } else {
                    assert.fail("fieldToUpdate argument is not valid.");
                  }
                });
              })
                .then(function () {
                  return driver.sleep(1000);
                });
            });
        })
      });
  }
}