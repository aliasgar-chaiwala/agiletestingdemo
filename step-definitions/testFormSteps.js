
module.exports = function () {

    config = jsonfile.readFileSync('./support/'+featureConfig);

    this.Then(/^I should see component "([^"]*)"$/, function (component) {
        return page.testingForm_page.componentVisible(component);
    });

    this.Then(/^I verify the accommodationDetails component details$/, function () {
        return page.testingForm_page.toggleaccommodationDetailsComponent()
            .then(function () {
                return page.testingForm_page.accommodationDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleaccommodationDetailsComponent()
                    })
            })
    });

    //I verify the actionTaken component details
    this.Then(/^I verify the actionTaken component details$/, function () {
        return page.testingForm_page.toggleactionTakenComponent()
            .then(function () {
                return page.testingForm_page.actionTakencomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleactionTakenComponent()
                    })
            })
    });

    //I verify the adultmeetingNotes component details
    this.Then(/^I verify the adultmeetingNotes component details$/, function () {
        return page.testingForm_page.toggleadultmeetingNotesComponent()
            .then(function () {
                return page.testingForm_page.adultmeetingNotescomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleadultmeetingNotesComponent()
                    })
            })
    });

    //I verify the agencies component details
    this.Then(/^I verify the agencies component details$/, function () {
        return page.testingForm_page.toggleagenciesComponent()
            .then(function () {
                return page.testingForm_page.agenciescomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleagenciesComponent()
                    })
            })
    });

    //I verify the allegedAbuse component details
    this.Then(/^I verify the allegedAbuse component details$/, function () {
        return page.testingForm_page.toggleallegedAbuseComponent()
            .then(function () {
                return page.testingForm_page.allegedAbusecomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleallegedAbuseComponent()
                    })
            })
    });

    //I verify the assessmentDetails component details
    this.Then(/^I verify the assessmentDetails component details$/, function () {
        return page.testingForm_page.toggleassessmentDetailsComponent()
            .then(function () {
                return page.testingForm_page.assessmentDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleassessmentDetailsComponent()
                    })
            })
    });

    //I verify the attachments component details
    this.Then(/^I verify the attachments component details$/, function () {
        return page.testingForm_page.toggleattachmentsComponent()
            .then(function () {
                return page.testingForm_page.attachmentscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleattachmentsComponent()
                    })
            })
    });

    //I verify the bankAccountDetails component details
    this.Then(/^I verify the bankAccountDetails component details$/, function () {
        return page.testingForm_page.togglebankAccountDetailsComponent()
            .then(function () {
                return page.testingForm_page.bankAccountDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglebankAccountDetailsComponent()
                    })
            })
    });

    //I verify the bedroomSeen component details
    this.Then(/^I verify the bedroomSeen component details$/, function () {
        return page.testingForm_page.togglebedroomSeenComponent()
            .then(function () {
                return page.testingForm_page.bedroomSeencomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglebedroomSeenComponent()
                    })
            })
    });

    //I verify the caringResponsibilityoomSeen component details
    this.Then(/^I verify the caringResponsibility component details$/, function () {
        return page.testingForm_page.togglecaringResponsibilityComponent()
            .then(function () {
                return page.testingForm_page.caringResponsibilitycomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecaringResponsibilityComponent()
                    })
            })
    });

    //I verify the chairsSummary component details
    this.Then(/^I verify the chairsSummary component details$/, function () {
        return page.testingForm_page.togglechairsSummaryComponent()
            .then(function () {
                return page.testingForm_page.chairsSummarycomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglechairsSummaryComponent()
                    })
            })
    });

    //I verify the childYoungPersonAnalysis component details
    this.Then(/^I verify the childYoungPersonAnalysis component details$/, function () {
        return page.testingForm_page.togglechildYoungPersonAnalysisComponent()
            .then(function () {
                return page.testingForm_page.childYoungPersonAnalysiscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglechildYoungPersonAnalysisComponent()
                    })
            })
    });

    //I verify the comments component details
    this.Then(/^I verify the comments component details$/, function () {
        return page.testingForm_page.togglecommentsComponent()
            .then(function () {
                return page.testingForm_page.commentscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecommentsComponent()
                    })
            })
    });

    //I verify the communication component details
    this.Then(/^I verify the communication component details$/, function () {
        return page.testingForm_page.togglecommunicationComponent()
            .then(function () {
                return page.testingForm_page.communicationcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecommunicationComponent()
                    })
            })
    });

    //I verify the conferenceDetails component details
    this.Then(/^I verify the conferenceDetails component details$/, function () {
        return page.testingForm_page.toggleconferenceDetailsComponent()
            .then(function () {
                return page.testingForm_page.conferenceDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleconferenceDetailsComponent()
                    })
            })
    });

    //I verify the conferenceDetailsForm component details
    this.Then(/^I verify the conferenceDetailsForm component details$/, function () {
        return page.testingForm_page.toggleconferenceDetailsFormComponent()
            .then(function () {
                return page.testingForm_page.conferenceDetailsFormcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleconferenceDetailsFormComponent()
                    })
            })
    });

    // And I verify the conferenceRecommendations component details
    this.Then(/^I verify the conferenceRecommendations component details$/, function () {
        return page.testingForm_page.toggleconferenceRecommendationsComponent()
            .then(function () {
                return page.testingForm_page.conferenceRecommendationscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleconferenceRecommendationsComponent()
                    })
            })
    });

    // And I verify the conferenceReportBackground component details
    this.Then(/^I verify the conferenceReportBackground component details$/, function () {
        return page.testingForm_page.toggleconferenceReportBackgroundComponent()
            .then(function () {
                return page.testingForm_page.conferenceReportBackgroundcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleconferenceReportBackgroundComponent()
                    })
            })
    });

    // And I verify the connections component details
    this.Then(/^I verify the connections component details$/, function () {
        return page.testingForm_page.toggleconnectionsComponent()
            .then(function () {
                return page.testingForm_page.connectionscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleconnectionsComponent()
                    })
            })
    });

    // And I verify the contactLog component details
    this.Then(/^I verify the contactLog component details$/, function () {
        return page.testingForm_page.togglecontactLogComponent()
            .then(function () {
                return page.testingForm_page.contactLogcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecontactLogComponent()
                    })
            })
    });

    //I verify the contactor component details
    this.Then(/^I verify the contactor component details$/, function () {
        return page.testingForm_page.togglecontactorComponent()
            .then(function () {
                return page.testingForm_page.contactorcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecontactorComponent()
                    })
            })
    });

    //I verify the contingencyPlan component details
    this.Then(/^I verify the contingencyPlan component details$/, function () {
        return page.testingForm_page.togglecontingencyPlanComponent()
            .then(function () {
                return page.testingForm_page.contingencyPlancomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglecontingencyPlanComponent()
                    })
            })
    });

    //I verify the dateOfVisit component details
    this.Then(/^I verify the dateOfVisit component details$/, function () {
        return page.testingForm_page.toggledateOfVisitComponent()
            .then(function () {
                return page.testingForm_page.dateOfVisitcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggledateOfVisitComponent()
                    })
            })
    });

    //I verify the decisionsTaken component details
    this.Then(/^I verify the decisionsTaken component details$/, function () {
        return page.testingForm_page.toggledecisionsTakenComponent()
            .then(function () {
                return page.testingForm_page.decisionsTakencomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggledecisionsTakenComponent()
                    })
            })
    });

    //I verify the determination component details
    this.Then(/^I verify the determination component details$/, function () {
        return page.testingForm_page.toggledeterminationComponent()
            .then(function () {
                return page.testingForm_page.determinationcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggledeterminationComponent()
                    })
            })
    });

    //I verify the dissentingViews component details
    this.Then(/^I verify the dissentingViews component details$/, function () {
        return page.testingForm_page.toggledissentingViewsComponent()
            .then(function () {
                return page.testingForm_page.dissentingViewscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggledissentingViewsComponent()
                    })
            })
    });

    //I verify the education component details
    this.Then(/^I verify the education component details$/, function () {
        return page.testingForm_page.toggleeducationComponent()
            .then(function () {
                return page.testingForm_page.educationcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleeducationComponent()
                    })
            })
    });

    //I verify the employment component details
    this.Then(/^I verify the employment component details$/, function () {
        return page.testingForm_page.toggleemploymentComponent()
            .then(function () {
                return page.testingForm_page.employmentcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleemploymentComponent()
                    })
            })
    });

    //I verify the factors component details
    this.Then(/^I verify the factors component details$/, function () {
        return page.testingForm_page.togglefactorsComponent()
            .then(function () {
                return page.testingForm_page.factorscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglefactorsComponent()
                    })
            })
    });

    //I verify the familyViews component details
    this.Then(/^I verify the familyViews component details$/, function () {
        return page.testingForm_page.togglefamilyViewsComponent()
            .then(function () {
                return page.testingForm_page.familyViewscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglefamilyViewsComponent()
                    })
            })
    });

    //I verify the impactonChild component details
    this.Then(/^I verify the impactonChild component details$/, function () {
        return page.testingForm_page.toggleimpactonChildComponent()
            .then(function () {
                return page.testingForm_page.impactonChildcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleimpactonChildComponent()
                    })
            })
    });

    //I verify the informationSharing component details
    this.Then(/^I verify the informationSharing component details$/, function () {
        return page.testingForm_page.toggleinformationSharingComponent()
            .then(function () {
                return page.testingForm_page.informationSharingcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleinformationSharingComponent()
                    })
            })
    });

    //I verify the investigationDetails component details
    this.Then(/^I verify the investigationDetails component details$/, function () {
        return page.testingForm_page.toggleinvestigationDetailsComponent()
            .then(function () {
                return page.testingForm_page.investigationDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleinvestigationDetailsComponent()
                    })
            })
    });

    //I verify the medicalConditions component details
    this.Then(/^I verify the medicalConditions component details$/, function () {
        return page.testingForm_page.togglemedicalConditionsComponent()
            .then(function () {
                return page.testingForm_page.medicalConditionscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglemedicalConditionsComponent()
                    })
            })
    });

    //I verify the medications component details
    this.Then(/^I verify the medications component details$/, function () {
        return page.testingForm_page.togglemedicationsComponent()
            .then(function () {
                return page.testingForm_page.medicationscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglemedicationsComponent()
                    })
            })
    });

    //I verify the meetingNotes component details
    this.Then(/^I verify the meetingNotes component details$/, function () {
        return page.testingForm_page.togglemeetingNotesComponent()
            .then(function () {
                return page.testingForm_page.meetingNotescomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglemeetingNotesComponent()
                    })
            })
    });

    //I verify the mentalCapacityAssessment component details
    this.Then(/^I verify the mentalCapacityAssessment component details$/, function () {
        return page.testingForm_page.togglementalCapacityAssessmentComponent()
            .then(function () {
                return page.testingForm_page.mentalCapacityAssessmentcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglementalCapacityAssessmentComponent()
                    })
            })
    });

    //I verify the minutesOfConference component details
    this.Then(/^I verify the minutesOfConference component details$/, function () {
        return page.testingForm_page.toggleminutesOfConferenceComponent()
            .then(function () {
                return page.testingForm_page.minutesOfConferencecomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleminutesOfConferenceComponent()
                    })
            })
    });

    //I verify the otherSubjectDetails component details
    this.Then(/^I verify the otherSubjectDetails component details$/, function () {
        return page.testingForm_page.toggleotherSubjectDetailsComponent()
            .then(function () {
                return page.testingForm_page.otherSubjectDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleotherSubjectDetailsComponent()
                    })
            })
    });

    //I verify the oversight component details
    this.Then(/^I verify the oversight component details$/, function () {
        return page.testingForm_page.toggleoversightComponent()
            .then(function () {
                return page.testingForm_page.oversightcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleoversightComponent()
                    })
            })
    });

    //I verify the parentingCapacityOfParents component details
    this.Then(/^I verify the parentingCapacityOfParents component details$/, function () {
        return page.testingForm_page.toggleparentingCapacityOfParentsComponent()
            .then(function () {
                return page.testingForm_page.parentingCapacityOfParentscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleparentingCapacityOfParentsComponent()
                    })
            })
    });

    //I verify the participantsInDiscussion component details
    this.Then(/^I verify the participantsInDiscussion component details$/, function () {
        return page.testingForm_page.toggleparticipantsInDiscussionComponent()
            .then(function () {
                return page.testingForm_page.participantsInDiscussioncomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleparticipantsInDiscussionComponent()
                    })
            })
    });

    //I verify the passportDetails component details
    this.Then(/^I verify the passportDetails component details$/, function () {
        return page.testingForm_page.togglepassportDetailsComponent()
            .then(function () {
                return page.testingForm_page.passportDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglepassportDetailsComponent()
                    })
            })
    });

    //I verify the professionalViews component details
    this.Then(/^I verify the professionalViews component details$/, function () {
        return page.testingForm_page.toggleprofessionalViewsComponent()
            .then(function () {
                return page.testingForm_page.professionalViewscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleprofessionalViewsComponent()
                    })
            })
    });

    //I verify the reason component details
    this.Then(/^I verify the reason component details$/, function () {
        return page.testingForm_page.togglereasonComponent()
            .then(function () {
                return page.testingForm_page.reasoncomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglereasonComponent()
                    })
            })
    });

    //I verify the recommendations component details
    this.Then(/^I verify the recommendations component details$/, function () {
        return page.testingForm_page.togglerecommendationsComponent()
            .then(function () {
                return page.testingForm_page.recommendationscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglerecommendationsComponent()
                    })
            })
    });

    //I verify the referenceChecks component details
    this.Then(/^I verify the referenceChecks component details$/, function () {
        return page.testingForm_page.togglereferenceChecksComponent()
            .then(function () {
                return page.testingForm_page.referenceCheckscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglereferenceChecksComponent()
                    })
            })
    });

    //I verify the riskCalculation component details
    this.Then(/^I verify the riskCalculation component details$/, function () {
        return page.testingForm_page.toggleriskCalculationComponent()
            .then(function () {
                return page.testingForm_page.riskCalculationcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleriskCalculationComponent()
                    })
            })
    });

    //And I verify the riskProtectiveFactors component details 
    this.Then(/^I verify the riskProtectiveFactors component details$/, function () {
        return page.testingForm_page.toggleriskProtectiveFactorsComponent()
            .then(function () {
                return page.testingForm_page.riskProtectiveFactorscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleriskProtectiveFactorsComponent()
                    })
            })
    });

    //I verify the risks component details
    this.Then(/^I verify the risks component details$/, function () {
        return page.testingForm_page.togglerisksComponent()
            .then(function () {
                return page.testingForm_page.riskscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglerisksComponent()
                    })
            })
    });

    //I verify the routine component details
    this.Then(/^I verify the routine component details$/, function () {
        return page.testingForm_page.toggleroutineComponent()
            .then(function () {
                return page.testingForm_page.routinecomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleroutineComponent()
                    })
            })
    });

    //I verify the safeguardingConcernsDetails component details
    this.Then(/^I verify the safeguardingConcernsDetails component details$/, function () {
        return page.testingForm_page.togglesafeguardingConcernsDetailsComponent()
            .then(function () {
                return page.testingForm_page.safeguardingConcernsDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglesafeguardingConcernsDetailsComponent()
                    })
            })
    });

    //I verify the serafInformation component details
    this.Then(/^I verify the serafInformation component details$/, function () {
        return page.testingForm_page.toggleserafInformationComponent()
            .then(function () {
                return page.testingForm_page.serafInformationcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleserafInformationComponent()
                    })
            })
    });

    //I verify the servicesAndInterventions component details
    this.Then(/^I verify the servicesAndInterventions component details$/, function () {
        return page.testingForm_page.toggleservicesAndInterventionsComponent()
            .then(function () {
                return page.testingForm_page.servicesAndInterventionscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggleservicesAndInterventionsComponent()
                    })
            })
    });

    //I verify the stayInTouch component details
    this.Then(/^I verify the stayInTouch component details$/, function () {
        return page.testingForm_page.togglestayInTouchComponent()
            .then(function () {
                return page.testingForm_page.stayInTouchcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglestayInTouchComponent()
                    })
            })
    });

    //I verify the strategyDiscussionDetails component details
    this.Then(/^I verify the strategyDiscussionDetails component details$/, function () {
        return page.testingForm_page.togglestrategyDiscussionDetailsComponent()
            .then(function () {
                return page.testingForm_page.strategyDiscussionDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglestrategyDiscussionDetailsComponent()
                    })
            })
    });

    //I verify the summaryOfSectionEnquiry component details
    this.Then(/^I verify the summaryOfSectionEnquiry component details$/, function () {
        return page.testingForm_page.togglesummaryOfSectionEnquiryComponent()
            .then(function () {
                return page.testingForm_page.summaryOfSectionEnquirycomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglesummaryOfSectionEnquiryComponent()
                    })
            })
    });

    //I verify the support component details
    this.Then(/^I verify the support component details$/, function () {
        return page.testingForm_page.togglesupportComponent()
            .then(function () {
                return page.testingForm_page.supportcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglesupportComponent()
                    })
            })
    });

    //I verify the suspectDetails component details
    this.Then(/^I verify the suspectDetails component details$/, function () {
        return page.testingForm_page.togglesuspectDetailsComponent()
            .then(function () {
                return page.testingForm_page.suspectDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglesuspectDetailsComponent()
                    })
            })
    });

    //I verify the training component details
    this.Then(/^I verify the training component details$/, function () {
        return page.testingForm_page.toggletrainingComponent()
            .then(function () {
                return page.testingForm_page.trainingcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggletrainingComponent()
                    })
            })
    });

    //I verify the typeOfVisit component details
    this.Then(/^I verify the typeOfVisit component details$/, function () {
        return page.testingForm_page.toggletypeOfVisitComponent()
            .then(function () {
                return page.testingForm_page.typeOfVisitcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.toggletypeOfVisitComponent()
                    })
            })
    });

    //I verify the visitDetails component details
    this.Then(/^I verify the visitDetails component details$/, function () {
        return page.testingForm_page.togglevisitDetailsComponent()
            .then(function () {
                return page.testingForm_page.visitDetailscomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglevisitDetailsComponent()
                    })
            })
    });

    //I verify the visitList component details
    this.Then(/^I verify the visitList component details$/, function () {
        return page.testingForm_page.togglevisitListComponent()
            .then(function () {
                return page.testingForm_page.visitListcomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglevisitListComponent()
                    })
            })
    });
    
    //I verify the vulnerability component details
    this.Then(/^I verify the vulnerability component details$/, function () {
        return page.testingForm_page.togglevulnerabilityComponent()
            .then(function () {
                return page.testingForm_page.vulnerabilitycomponentVisible()
                    .then(function () {
                        return page.testingForm_page.togglevulnerabilityComponent()
                    })
            })
    });

};
