module.exports = {

    elements: {

        dashboardTaskIcon: by.css('.tasks-container > a'),
        tasksPage: by.css('div.app-content.your-task-active'),
        taskPageTitle: 'Your tasks',
        taskPageHeading: by.css('h2[class="page-title dropdown"] span[class="m-l-sm"]'),
        taskSection: by.css('div[class="app-content your-task-active"]'),
        createTaskIcon: by.css('div.toolbar-container a.hatrickIcons.icon-new-task'),
        newTaskSection: by.css('div.create-new-panel.create-new-task.event-form.show'), //need name tag
        taskDescription: by.css('#create-new-task textarea.textarea-reason'),
        taskDueDate: by.css('#create-new-task .datepicker-panel input'),
        taskOwnSearchUserPill: by.css('#create-new-task div[name="new-task-owner"] .selectize-input span'),
        taskOwnTeamPill: by.css('#create-new-task div[name="new-task-owner"] .selectize-input span.team-tag'),
        taskOwnerSearchInput: by.css('#create-new-task div[name="new-task-owner"] .selectize-input input'),
        taskOwnerSearchInputDd: by.css('#create-new-task div[name="new-task-owner"] .selectize-dropdown-content'), //> div[class="option"] > span
        taskForSearchInput: by.css('#create-new-task div[name="new-task-for"] .selectize-input input'),
        taskForSearchDd: by.css('#create-new-task div[name="new-task-for"] .selectize-dropdown-content'), //> div[class="option"] > span
        taskOwnSearchForPill: by.css('#create-new-task div[name="new-task-for"] .selectize-input span'),
        taskAddSubmit: by.css('#create-new-task button.btn-create-new'),
        //-----nav team task
        taskSwitchCaret: by.css('.caret-bg'),
        taskSwitchPop: by.css('ul[aria-label="dropdown Menu Task"]'),
        taskSwitchItem: by.css('li a'),
        //---------verification--------
        taskListPanel: by.css('div[class*="task-active"] div.panel-group'),
        taskListItems: by.css('div.panel.panel-default'),
        taskListItemDesc: by.css('div.text-ellipsis'),
        taskListTaskAccCollapsed: by.css('a.new-task-expander.collapsed'),
        taskListTaskAccExp: by.css('a[class="new-task-expander element-inline-tc accordion-toggle pointer"]'),
        taskListTaskTaskExpandedSec: by.css('div.panel-collapse.collapse.in .panel-body'),
        taskListTaskInnerDesc: by.css('.collapse.in .panel-body p'),
        taskListTaskInnerDate: by.css('.collapse.in .panel-body div[data-bind*="(dueDate)"]'),
        taskListPerTaskInnerPill: by.css('.collapse.in .panel-body span[class*="person-tag"]'),
        taskOwnit: by.css('a.underline.pointer'),
        taskListTaskDone: by.css('div.white-check.task-check'),
        taskOwnerSearchList: by.css('#create-new-task div[name="new-task-owner"] .selectize-dropdown-content .option')
    },
    collapseTask: function () {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListTaskAccExp), 10000).then(function () {
            return driver.findElement(page.tasks_page.elements.taskListTaskAccExp).click().then(function () {
                return driver.sleep(500);
            });
        });
    },

    navigateTasks: function () {

        return driver.wait(until.elementsLocated(page.tasks_page.elements.dashboardTaskIcon), 10000).then(function () {
            return driver.findElement(page.tasks_page.elements.dashboardTaskIcon).click().then(function () {
                return driver.wait(until.elementsLocated(page.pageHead.elements.search), 10000).then(function () {
                    return driver.findElement(page.pageHead.elements.search).click();
                });
            });

        });
    },

    createPersonTask: function (personName) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.tasksPage), 10000)
            .then(function () {
                driver.getTitle().then(function (pageTitle) {
                    expect(pageTitle).to.contain("Tasks | One Social Care");
                });
            }).then(function () {
                driver.sleep(500);
                return driver.wait(until.elementsLocated(page.tasks_page.elements.taskPageHeading), 10000)
                    .then(function () {
                        return driver.findElement(page.tasks_page.elements.taskPageHeading).getText().then(function (pageHeading) {
                            expect(pageHeading).to.contain("Your tasks");
                        }).then(function () {
                            return driver.wait(until.elementsLocated(page.tasks_page.elements.createTaskIcon), 10000).then(function () {
                                return driver.findElement(page.tasks_page.elements.createTaskIcon).click().then(function () {
                                    driver.sleep(500);
                                    return driver.wait(until.elementsLocated(page.tasks_page.elements.newTaskSection), 10000).then(function () {
                                        return driver.findElement(page.tasks_page.elements.taskDescription).sendKeys(config.Tasks.personTaskDesc + personName).then(function () {
                                            driver.sleep(500);
                                            driver.findElement(page.tasks_page.elements.taskDueDate).click();
                                            //driver.findElement(page.tasks_page.elements.taskDueDate).sendKeys('13/01/2017');
                                            driver.findElement(page.tasks_page.elements.taskDescription).click();
                                            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnSearchUserPill), 10000).then(function () {
                                                // return driver.findElement(page.tasks_page.elements.taskOwnSearchUserPill).getText().then(function (pillUserName) {
                                                //     expect(pillUserName).to.contain("Your tasks");
                                                // });
                                                driver.findElement(page.tasks_page.elements.taskForSearchInput).sendKeys(personName);
                                                driver.sleep(500);
                                                return driver.wait(until.elementsLocated(page.tasks_page.elements.taskForSearchDd), 10000).then(function () {
                                                    driver.sleep(1000)
                                                    return helpers.gridClick(page.tasks_page.elements.taskForSearchDd, by.css('div.option'), personName).then(function () {
                                                        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnSearchForPill), 10000).then(function () {
                                                            //driver.sleep(5000)
                                                            driver.findElement(page.tasks_page.elements.taskAddSubmit).click();
                                                            driver.sleep(3000);
                                                            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000);
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

    createTeamTask: function (teamName) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.tasksPage), 10000)
            .then(function () {
                driver.getTitle().then(function (pageTitle) {
                    expect(pageTitle).to.contain("Tasks | One Social Care");
                });
            }).then(function () {
                //driver.sleep(500);
                return driver.wait(until.elementsLocated(page.tasks_page.elements.taskPageHeading), 10000)
                    .then(function () {
                        return driver.findElement(page.tasks_page.elements.taskPageHeading).getText().then(function (pageHeading) {
                            expect(pageHeading).to.contain("Your tasks");
                        }).then(function () {
                            return driver.wait(until.elementsLocated(page.tasks_page.elements.createTaskIcon), 10000).then(function () {
                                return driver.findElement(page.tasks_page.elements.createTaskIcon).click().then(function () {
                                    driver.sleep(500);
                                    return driver.wait(until.elementsLocated(page.tasks_page.elements.newTaskSection), 10000).then(function () {
                                        return driver.findElement(page.tasks_page.elements.taskDescription).sendKeys(config.Tasks.teamTaskDesc + teamName).then(function () {
                                            driver.sleep(500);
                                            driver.findElement(page.tasks_page.elements.taskDueDate).click();
                                            driver.findElement(page.tasks_page.elements.taskDescription).click();
                                            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnSearchUserPill), 10000).then(function () {
                                                // return driver.findElement(page.tasks_page.elements.taskOwnSearchUserPill).getText().then(function (pillUserName) {
                                                //     expect(pillUserName).to.contain("Your tasks");
                                                // });
                                                driver.sleep(500);
                                                driver.findElement(page.tasks_page.elements.taskOwnerSearchInput).click();
                                                driver.findElement(page.tasks_page.elements.taskOwnerSearchInput).sendKeys(teamName);
                                                driver.sleep(1000);
                                                // driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnerSearchList), 10000, 'Team list not visible on searching');
                                                return driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnerSearchList), 10000).then(function () {
                                                    // console.log(1);
                                                    driver.sleep(800);
                                                    return helpers.gridClick(page.tasks_page.elements.taskOwnerSearchInputDd, by.css('div.option'), teamName).then(function () {
                                                        // console.log(2);
                                                        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskOwnTeamPill), 10000).then(function () {
                                                            // console.log(3);
                                                            return driver.sleep(1000).then(function () {
                                                                // console.log(4);
                                                                //driver.findElement(page.tasks_page.elements.taskDueDate).sendKeys('13/01/2017')
                                                                driver.findElement(page.tasks_page.elements.taskAddSubmit).click();
                                                                // console.log(5);
                                                                return driver.sleep(3000).then(function () {
                                                                    // console.log(6);
                                                                    return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000);
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

    verifyPersonTask: function (expectedTitle) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListItems), 10000).then(function () {
                return helpers.gridGetElement(page.tasks_page.elements.taskListPanel, page.tasks_page.elements.taskListItems, expectedTitle)
                    .then(function (task) {
                        task.findElement(page.tasks_page.elements.taskListItemDesc).getText().then(function (taskOuterDesc) {
                            console.log('taskOuterDesc : ', taskOuterDesc);
                            expect(taskOuterDesc).to.contain(expectedTitle);
                        });
                        task.findElement(page.tasks_page.elements.taskListTaskAccCollapsed).click();
                        driver.sleep(500);
                        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListTaskTaskExpandedSec), 10000).then(function () {
                            task.findElement(page.tasks_page.elements.taskListPerTaskInnerPill).getText().then(function (TaskInnerPill) {
                                console.log('TaskInnerPill : ', TaskInnerPill);
                                expect(TaskInnerPill).to.contain(config.PersonDetails.Name);
                            });
                            return task.findElement(page.tasks_page.elements.taskListTaskInnerDesc).getText().then(function (taskInnerDesc) {
                                console.log('taskInnerDesc : ', taskInnerDesc);
                                return expect(taskInnerDesc).to.contain(expectedTitle);
                            });
                        });
                    });
            });
        });
    },

    verifyTeamTask: function (expectedTitle) {
        console.log("Inside expectedTitle: "+expectedTitle);
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListItems), 10000).then(function () {
                return helpers.gridGetElement(page.tasks_page.elements.taskListPanel, page.tasks_page.elements.taskListItems, expectedTitle)
                    .then(function (task) {
                        task.findElement(page.tasks_page.elements.taskListItemDesc).getText().then(function (taskOuterDesc) {
                            console.log('taskOuterDesc : ', taskOuterDesc);
                            expect(taskOuterDesc).to.contain(expectedTitle);
                        });
                        task.findElement(page.tasks_page.elements.taskListTaskAccCollapsed).click();
                        driver.sleep(500);
                        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListTaskTaskExpandedSec), 10000).then(function () {
                            return task.findElement(page.tasks_page.elements.taskListTaskInnerDesc).getText().then(function (taskInnerDesc) {
                                console.log('taskInnerDesc : ', taskInnerDesc);
                                return expect(taskInnerDesc).to.contain(expectedTitle);
                            });
                        });
                    });
            });
        });
    },

    switchTaskTypePage: function (type) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskSwitchCaret), 10000).then(function () {
            driver.findElement(page.tasks_page.elements.taskSwitchCaret).click();
            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskSwitchPop), 10000).then(function () {
                helpers.clickIncludesGrid(page.tasks_page.elements.taskSwitchPop, page.tasks_page.elements.taskSwitchItem, type);
                driver.sleep(1000);
                return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000);
            });
        });
    },

    ownTeamTask: function (expectedTitle) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListItems), 10000).then(function () {
                return helpers.gridGetElement(page.tasks_page.elements.taskListPanel, page.tasks_page.elements.taskListItems, expectedTitle)
                    .then(function (task) {
                        driver.wait(until.elementsLocated(page.tasks_page.elements.taskListTaskTaskExpandedSec), 10000).then(function () {
                            task.findElement(page.tasks_page.elements.taskOwnit).click();
                        });
                        return driver.sleep(1000);
                    });
            });
        });
    },

    markTaskDone: function (expectedTitle) {
        return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListPanel), 10000).then(function () {
            return driver.wait(until.elementsLocated(page.tasks_page.elements.taskListItems), 10000).then(function () {
                return helpers.gridGetElement(page.tasks_page.elements.taskListPanel, page.tasks_page.elements.taskListItems, expectedTitle)
                    .then(function (task) {
                        // driver.wait(until.elementsLocated(page.tasks_page.elements.taskListTaskTaskExpandedSec), 10000).then(function () {
                        task.findElement(page.tasks_page.elements.taskListTaskDone).click();
                        // });
                        return driver.sleep(2000);
                    });
            });
        });
    }
}


