module.exports = {

    elements: {
        toggleaccommodationDetails: by.css('[name="accommodationDetails"] div:nth-child(2) > div a'),
        accommodationDetails: by.css('[data-view*="accommodationDetails/accommodationDetails"] > div:nth-child(1) span strong'),
        accommodationType: by.css('[name="accomodationTypeRow"] label'),
        activityStatus: by.css('[name="activityStatusRow"] label'),

        toggleactionTaken: by.css('[name="actionTaken"] div:nth-child(2) > div a'),
        Actions: by.css('[data-view*="actionTaken/actionTaken"] > div:nth-child(1) span strong'),
        ActionsOwner: by.css('[id="reusable-action-taken"] > div:nth-child(2) > div.col-sm-8 > div > label'),
        actionAction: by.css('[id="reusable-action-taken"] > div:nth-child(3) > div.col-sm-12 > div > label'),

        toggladultmeetingNotes: by.css('[name="adultmeetingNotes"] div:nth-child(2) > div a'),
        meetingDate: by.css('[data-view*="adultmeetingNotes/adultmeetingNotes"] form > div > div:nth-child(1) label'),
        placeOfAdultMeetingNote: by.css('[data-view*="adultmeetingNotes/adultmeetingNotes"] form > div > div:nth-child(2) label'),
        attendeesOfAdultMeetingNote: by.css('[data-view*="adultmeetingNotes/adultmeetingNotes"] form > div > div:nth-child(3) label'),

        toggleagencies: by.css('[name="agencies"] > div:nth-child(2) > div a'),
        agenciesAgencies: by.css('[data-view*="agencies/agencies"] form > span strong'),

        toggleallegedAbuse: by.css('[name="allegedAbuse"] > div:nth-child(2) > div a'),

        toggleassessmentDetails: by.css('[name="assessmentDetails"] > div:nth-child(2) > div a'),
        assessmentStartDate: by.css('[data-view*="assessmentDetails/assessmentDetails"] form > div:nth-child(1) > div:nth-child(1) label'),
        assessmentEndDate: by.css('[data-view*="assessmentDetails/assessmentDetails"] form > div:nth-child(1) > div:nth-child(2) label'),
        assessmentInternalReviewDate: by.css('[data-view*="assessmentDetails/assessmentDetails"] form > div:nth-child(2) > div:nth-child(1) label'),
        reasonforAssessment: by.css('[data-view*="assessmentDetails/assessmentDetails"] form > div:nth-child(3) label'),

        toggleattachments: by.css('[name="attachments"] > div:nth-child(2) > div a'),
        attachmentsAttachments: by.css('[data-view*="attachments/attachments"] label'),

        togglebankAccountDetails: by.css('[name="bankAccountDetails"] > div:nth-child(2) > div a'),
        bankAccountDetails: by.css('[data-view*="bankAccountDetails/bankAccountDetails"] > strong'),

        togglebedroomSeen: by.css('[name="bedroomSeen"] > div:nth-child(2) > div a'),
        bedroomSeen: by.css('[data-view*="bedroomSeen/bedroomSeen"] form span > strong'),

        togglecaringResponsibility: by.css('[name="caringResponsibility"] > div:nth-child(2) > div a'),
        caringResponsibility: by.css('[data-view*="caringResponsibility/caringResponsibility"] form span > strong'),

        togglechairsSummary: by.css('[name="chairsSummary"] > div:nth-child(2) > div a'),
        chairsSummary: by.css('[data-view*="chairsSummary/chairsSummary"] form span > strong'),

        togglechildYoungPersonAnalysis: by.css('[name="childYoungPersonAnalysis"] > div:nth-child(2) > div a'),
        childYoungPersonAnalysis: by.css('[data-view*="childYoungPersonAnalysis/childYoungPersonAnalysis"] > div:nth-child(1) > span:nth-child(1) > strong'),
        childYoungPersonAnalysisDetails: by.css('[data-view*="childYoungPersonAnalysis/childYoungPersonAnalysis"] > div:nth-child(2) form > div:nth-child(1) label'),

        togglecomments: by.css('[name="comments"] > div:nth-child(2) > div a'),
        commentsComments: by.css('[data-view*="comments/comments"] form span > strong'),

        togglecommunication: by.css('[name="communication"] > div:nth-child(2) > div a'),
        communicationCommunication: by.css('[data-view*="communication/communication"] form span > strong'),
        communicationDiscussion: by.css('[data-view*="communication/communication"] form > div:nth-child(3) > label'),
        communicationRisk: by.css('[data-view*="communication/communication"] form > div:nth-child(5) > label'),

        toggleconferenceDetails: by.css('[name="conferenceDetails"] > div:nth-child(2) > div a'),
        conferenceType: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(1) > div:nth-child(1) > label'),
        conferenceReason: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(1) > div:nth-child(2) label'),
        conferenceDueDateConf: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(3) > div:nth-child(1) label'),
        conferenceDueDateReport: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(3) > div:nth-child(2) label'),
        conferenceActualDate: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) label'),
        conferenceReportDist: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) label'),
        conferenceChairPerson: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(5) > div:nth-child(1) label'),
        conferenceInvitesDate: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(5) > div:nth-child(2) label'),
        conferenceLocation: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(6) > div:nth-child(2) label'),
        conferenceBackground: by.css('[data-view*="conferenceDetails/conferenceDetails"] form > div:nth-child(7) > div:nth-child(1) label'),

        toggleconferenceDetailsForm: by.css('[name="conferenceDetailsForm"] > div:nth-child(2) > div a'),
        conferenceDetailsType: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(1) div:nth-child(2) > label'),
        conferenceDetailsReason: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(1) div:nth-child(3) > label'),
        conferenceDetailsDueDateConf: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(2) div:nth-child(1) > label'),
        conferenceDetailsDueDateReport: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(2) div:nth-child(2) > label'),
        conferenceDetailsActualDate: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(3) div:nth-child(2) > label'),
        conferenceDetailsMissing: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(4) div:nth-child(2) > label'),
        conferenceDetailsChairPerson: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(3) div:nth-child(1) > label'),
        conferenceDetailsInvitesDate: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(4) div:nth-child(3) label'),
        conferenceDetailsLocation: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(5) label'),
        conferenceDetailsBackground: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(6) label'),
        conferenceDetailsChildReceived: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(7) > label:nth-child(1)'),
        conferenceDetailsChildDiscussed: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(8)'),
        conferenceDetailsParentReceived: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(10) > label:nth-child(1)'),
        conferenceDetailsParentDiscussed: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(11)'),
        conferenceDetailsChildDiscussedDate: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(7) label:nth-child(3)'),
        conferenceDetailsParentDiscussedDate: by.css('[data-view*="conferenceDetailsForm/conferenceDetailsForm"] form > div:nth-child(10) label:nth-child(3)'),

        toggleconferenceRecommendationsForm: by.css('[name="conferenceRecommendations"] > div:nth-child(2) > div a'),
        allocatedRecommendations: by.css('[data-view*="conferenceRecommendations/conferenceRecommendations"] form > div label'),

        toggleconferenceReportBackground: by.css('[name="conferenceReportBackground"] > div:nth-child(2) > div a'),
        conferenceReportBackgroundType: by.css('[data-view*="conferenceReportBackground/conferenceReportBackground"] form > div:nth-child(1) label'),

        toggleconnections: by.css('[name="connections"] > div:nth-child(2) > div a'),
        connectionsConnections: by.css('[data-view*="connections/connections"] > div > div > div > span strong'),

        togglecontactLog: by.css('[name="contactLog"] > div:nth-child(2) > div a'),
        contactLogContactLog: by.css('[data-view*="contactLog/contactLog"] form > span strong'),

        togglecontactor: by.css('[name="contactor"] > div:nth-child(2) > div a'),
        contactorContactor: by.css('[data-view*="contactor/contactor"] span strong'),
        contactorName: by.css('label[for="ContactorName"]'),
        contactorMethod: by.css('label[for="ContactMethod"]'),
        contactorAbout: by.css('[data-view*="contactor/contactor"] label[for="plan-overview"]'),
        contactorEventDate: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(4) > div:nth-child(2) label'),
        contactorEventReportDate: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(5) label'),
        contactorEventLocation: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(6) label'),
        contactorProfCheck: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(7) > div > div > label'),
        contactorReason: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(9) label'),
        contactorDiscussed: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(10) > div > div > label'),
        contactorFamilyRisk: by.css('[data-view*="contactor/contactor"] > div > div:nth-child(12) > div > div > label'),

        togglecontingencyPlan: by.css('[name="contingencyPlan"] > div:nth-child(2) > div a'),
        contingencyPlanDetails: by.css('[data-view*="contingencyPlan/contingencyPlan"] form label'),

        toggledateOfVisit: by.css('[name="dateOfVisit"] > div:nth-child(2) > div a'),
        dateOfVisitDetails: by.css('[data-view*="dateOfVisit/dateOfVisit"] form span strong'),

        toggledecisionsTaken: by.css('[name="decisionsTaken"] > div:nth-child(2) > div a'),
        decisionsTakenDetails: by.css('[data-view*="decisionsTaken/decisionsTaken"] form > div > span > strong'),
        decisionsTakenMedical: by.css('[data-view*="decisionsTaken/decisionsTaken"] form > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > label'),
        decisionsTakenEvidence: by.css('[data-view*="decisionsTaken/decisionsTaken"] form > div:nth-child(2) > div:nth-child(8) > div > div:nth-child(1) > div > label'),
        decisionsTakenChild: by.css('[data-view*="decisionsTaken/decisionsTaken"] form > div:nth-child(2) > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div > label'),
        decisionsTakenEmergency: by.css('[data-view*="decisionsTaken/decisionsTaken"] form > div:nth-child(2) > div:nth-child(12) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div > label'),

        toggledetermination: by.css('[name="determination"] > div:nth-child(2) > div a'),
        determinationDetermination: by.css('[data-view*="determination/determination"] > form div span strong'),

        toggledissentingViews: by.css('[name="dissentingViews"] > div:nth-child(2) > div a'),
        dissentingViewsFrom: by.css('[data-view*="dissentingViews/dissentingViews"] form > div > div:nth-child(2) > div > label'),
        dissentingViewsCheck: by.css('[data-view*="dissentingViews/dissentingViews"] form > div > div:nth-child(3) > div > label'),

        toggleeducationViews: by.css('[name="education"] > div:nth-child(2) > div a'),
        noEducation: by.css('[data-view*="education/education"] form > div:nth-child(1) > strong'),
        appliedToEducation: by.css('[data-view*="education/education"] form > div:nth-child(3) > div:nth-child(1) > label'),
        educationPersonalAdv: by.css('[data-view*="education/education"] form > div:nth-child(6) > label'),

        toggleemploymentViews: by.css('[name="employment"] > div:nth-child(2) > div a'),
        noemployment: by.css('[data-view*="employment/employment"] form > div:nth-child(1) > strong'),
        appliedToEmployment: by.css('[data-view*="employment/employment"] form > div:nth-child(3) > div:nth-child(1) > label'),
        employmentPersonalAdv: by.css('[data-view*="employment/employment"] form > div:nth-child(6) > label'),

        togglefactors: by.css('[name="factors"] > div:nth-child(2) > div a'),
        factorsAssessmentCategories: by.css('[data-view*="factors/factors"] form label'),

        togglefamilyViews: by.css('[name="familyViews"] > div:nth-child(2) > div a'),
        familyViewsParentCarer: by.css('[data-view*="familyViews/familyViews"] > div > span strong'),
        familyViewsName: by.css('[data-view*="familyViews/familyViews"] form label'),

        toggleimpactonChild: by.css('[name="impactonChild"] > div:nth-child(2) > div a'),
        impactonChildYoung: by.css('[data-view*="impactonChild/impactonChild"] > div > span > strong'),
        impactonChildDetails: by.css('[data-view*="impactonChild/impactonChild"] form > div > label'),

        toggleinformationSharing: by.css('[name="informationSharing"] > div:nth-child(2) > div a'),
        informationSharingDetails: by.css('[data-view*="informationSharing/informationSharing"] form span strong'),

        toggleinvestigationDetails: by.css('[name="investigationDetails"] > div:nth-child(2) > div a'),
        investigationDetails: by.css('[data-view*="investigationDetails/investigationDetails"] > div > span > strong'),
        agencyS47Enquiry: by.css('[data-view*="investigationDetails/investigationDetails"] form > div:nth-child(1) > div:nth-child(1) label'),
        investigationDetailsBeginDate: by.css('[data-view*="investigationDetails/investigationDetails"] form > div:nth-child(1) > div:nth-child(2) label'),
        investigationDetailsDueDate: by.css('[data-view*="investigationDetails/investigationDetails"] form > div:nth-child(2) > div:nth-child(1) label'),

        togglemedicalConditions: by.css('[name="medicalConditions"] > div:nth-child(2) > div a'),
        medicalConditionsExist: by.css('[data-view*="medicalConditions/medicalConditions"]  form > div > div > label'),

        togglemedications: by.css('[name="medications"] > div:nth-child(2) > div a'),
        noMedications: by.css('[data-view*="medications/medications"]  form > div > div:nth-child(2)'),

        togglemeetingNotes: by.css('[name="meetingNotes"] > div:nth-child(2) > div a'),
        meetingNotesType: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(1) > div > div > label'),
        meetingNotesScheduleDate: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(2) > div > div > label'),
        meetingNotesDate: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(2) > div:nth-child(2) > label'),
        meetingNotesNote: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(4) > div > div > label'),
        meetingNotesNextDate: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(5) > div > div > label'),
        meetingNotesParticipation: by.css('[data-view*="meetingNotes/meetingNotes"] form > div > div:nth-child(6) > div > div > label'),

        togglementalCapacityAssessment: by.css('[name="mentalCapacityAssessment"] > div:nth-child(2) > div a'),
        mentalCapacityAssessmentLabel: by.css('[data-view*="mentalCapacityAssessment/mentalCapacityAssessment"] > div > span > strong'),

        toggleminutesOfConference: by.css('[name="minutesOfConference"] > div:nth-child(2) > div a'),
        minutesOfConferenceLabel: by.css('[data-view*="minutesOfConference/minutesOfConference"] > div > span  strong'),

        toggleotherSubjectDetails: by.css('[name="otherSubjectDetails"] > div:nth-child(2) > div a'),
        otherSubjectDetailsLabel: by.css('[data-view*="otherSubjectDetails/otherSubjectDetails"] > div > div:nth-child(1) > div span strong'),

        toggleoversightDetails: by.css('[name="oversight"] > div:nth-child(2) > div a'),
        oversightSocialWorkerDecision: by.css('[data-view*="oversight/oversight"] h4'),
        oversightDecisions: by.css('[data-view*="oversight/oversight"] > div:nth-child(2) > div'),

        toggleparentingCapacityOfParents: by.css('[name="parentingCapacityOfParents"] > div:nth-child(2) > div a'),
        parentingCapacityOfParentsParentingCapacity: by.css('[data-view*="parentingCapacityOfParents/parentingCapacityOfParents"] > div:nth-child(1) > span:nth-child(1) > strong'),
        parentingCapacityDetails: by.css('[data-view*="parentingCapacityOfParents/parentingCapacityOfParents"] form div label'),

        toggleparticipantsInDiscussion: by.css('[name="participantsInDiscussion"] > div:nth-child(2) > div a'),
        participantsInDiscussion: by.css('[data-view*="participantsInDiscussion/participantsInDiscussion"] > div:nth-child(1) > span:nth-child(2) > strong'),
        participantsInDiscussionSearch: by.css('[data-view*="participantsInDiscussion/participantsInDiscussion"] form div label'),

        togglepassportDetails: by.css('[name="passportDetails"] > div:nth-child(2) > div a'),
        passportDetails: by.css('[data-view*="passportDetails/passportDetails"] > div:nth-child(1) > strong'),

        toggleprofessionalViews: by.css('[name="professionalViews"] > div:nth-child(2) > div a'),
        professionalViews: by.css('[data-view*="professionalViews/professionalViews"] form > div:nth-child(1) strong'),
        professionalViewsViewsFrom: by.css('[data-view*="professionalViews/professionalViews"] form > div:nth-child(4) > div:nth-child(1) label'),
        professionalViewsDissentingView: by.css('[data-view*="professionalViews/professionalViews"] form > div:nth-child(4) > div:nth-child(2) label'),

        togglereason: by.css('[name="reason"] > div:nth-child(2) > div a'),
        reasonDetails: by.css('[data-view*="reason/reason"] form label'),

        togglerecommendations: by.css('[name="recommendations"] > div:nth-child(2) > div a'),
        recommendationsDetails: by.css('[data-view*="recommendations/recommendations"] label'),

        togglereferenceChecks: by.css('[name="referenceChecks"] > div:nth-child(2) > div a'),
        referencesCheckAdd: by.css('[data-view*="referenceChecks/referenceChecks"] [data-bind*="addReferenceChecks"]'),
        referenceChecksReferenceChecks: by.css('[data-view*="referenceChecks/referenceChecks"] [aria-label="References/Checks"]'),
        referenceChecksType: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) label'),
        referenceChecksMethod: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) label'),
        referenceChecksDateRequested: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) label'),
        referenceChecksDateResponse: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) label'),
        referenceChecksDateRenewal: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) label'),
        referenceChecksProvided: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) label'),
        referenceChecksRequested: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) label'),
        referenceChecksOutcome: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) label'),
        referenceChecksPersonal: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) label'),
        referenceChecksNotes: by.css('[data-view*="referenceChecks/referenceChecks"] [id="reusable-references-checks"] > div:nth-child(2) > div:nth-child(9) > div:nth-child(1) label'),

        toggleriskCalculation: by.css('[name="riskCalculation"] > div:nth-child(2) > div a'),
        riskCalculation: by.css('[data-view*="riskCalculation/riskCalculation"] form > span'),

        toggleriskProtectiveFactors: by.css('[name="riskProtectiveFactors"] > div:nth-child(2) > div a'),
        riskProtectiveFactors: by.css('[data-view*="riskProtectiveFactors/riskProtectiveFactors"] form > span'),

        togglerisks: by.css('[name="risks"] > div:nth-child(2) > div a'),
        risks: by.css('[data-view*="risks/risks"] [aria-label="Risks"] strong'),

        toggleroutine: by.css('[name="routine"] > div:nth-child(2) > div a'),
        routine: by.css('[data-view*="routine/routine"] form > span'),

        togglesafeguardingConcernsDetails: by.css('[name="safeguardingConcernsDetails"] > div:nth-child(2) > div a'),
        safeguardingConcernsDetails: by.css('[data-view*="safeguardingConcernsDetails/safeguardingConcernsDetails"] [id="Child_Protection"] > div:nth-child(1) strong'),
        safeguardingConcernsDetailsDetails: by.css('[data-view*="safeguardingConcernsDetails/safeguardingConcernsDetails"] [id="Child_Protection"] form > div > div:nth-child(1) label'),
        safeguardingConcernsDetailsInjuries: by.css('[data-view*="safeguardingConcernsDetails/safeguardingConcernsDetails"] [id="Child_Protection"] form > div > div:nth-child(2) > div > label'),
        safeguardingConcernsDetailsImpact: by.css('[data-view*="safeguardingConcernsDetails/safeguardingConcernsDetails"] [id="Child_Protection"] form > div > div:nth-child(4) label'),

        toggleserafInformation: by.css('[name="serafInformation"] > div:nth-child(2) > div a'),
        serafInformation: by.css('[data-view*="serafInformation/serafInformation"] form strong'),

        toggleservicesAndInterventions: by.css('[name="servicesAndInterventions"] > div:nth-child(2) > div a'),
        servicesAndInterventions: by.css('[data-view*="servicesAndInterventions/servicesAndInterventions"] span strong'),
        servicesAndInterventionsDetails: by.css('[data-view*="servicesAndInterventions/servicesAndInterventions"] form label'),

        togglestayInTouch: by.css('[name="stayInTouch"] > div:nth-child(2) > div a'),
        stayInTouch: by.css('[data-view*="stayInTouch/stayInTouch"] > div:nth-child(1) span strong'),
        stayInTouchAttempt: by.css('[data-view*="stayInTouch/stayInTouch"] form div:nth-child(1) > div > label'),

        togglestrategyDiscussionDetails: by.css('[name="strategyDiscussionDetails"] > div:nth-child(2) > div a'),
        strategyDiscussionDetailsType: by.css('[data-view*="strategyDiscussionDetails/strategyDiscussionDetails"] form > div:nth-child(1) > div:nth-child(1) label'),
        strategyDiscussionDetailsMeeting: by.css('[data-view*="strategyDiscussionDetails/strategyDiscussionDetails"] form > div:nth-child(1) > div:nth-child(2) label'),
        strategyDiscussionDetailsDate: by.css('[data-view*="strategyDiscussionDetails/strategyDiscussionDetails"] form > div:nth-child(1) > div:nth-child(3) label'),

        togglesummaryOfSectionEnquiry: by.css('[name="summaryOfSectionEnquiry"] > div:nth-child(2) > div a'),
        summaryOfSectionEnquiry: by.css('[data-view*="summaryOfSectionEnquiry/summaryOfSectionEnquiry"] > div:nth-child(1) span strong'),

        togglesupport: by.css('[name="support"] > div:nth-child(2) > div a'),
        support: by.css('[data-view*="support/support"] form > div > span strong'),

        togglesuspectDetails: by.css('[name="suspectDetails"] > div:nth-child(2) > div a'),
        suspectDetails: by.css('[data-view*="suspectDetails/suspectDetails"] form > div > span strong'),

        toggletraining: by.css('[name="training"] > div:nth-child(2) > div a'),
        trainingInfo: by.css('[data-view*="training/training"] form > div strong'),
        trainingApplied: by.css('[data-view*="training/training"] form > div:nth-child(3) > div:nth-child(1) label'),
        trainingPersonal: by.css('[data-view*="training/training"] form > div:nth-child(6) > label'),

        toggletypeOfVisit: by.css('[name="typeOfVisit"] > div:nth-child(2) > div a'),
        typeOfVisit: by.css('[data-view*="typeOfVisit/typeOfVisit"] div label'),

        togglevulnerability: by.css('[name="vulnerability"] > div:nth-child(2) > div a'),
        vulnerability: by.css('[data-view*="vulnerability/vulnerability"] form > div > span strong'),

        togglevisitDetails: by.css('[name="visitDetails"] > div:nth-child(2) > div a'),
        visitDetails: by.css('[data-view*="visitDetails/visitDetails"] > div > span strong'),
        visitDetailsDate: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(1) > div:nth-child(1) label'),
        visitDetailsType: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(1) > div:nth-child(2) label'),
        visitDetailsReason: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(2) > div:nth-child(1) label'),
        visitDetailsUnannounced: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(2) > div:nth-child(2) > label'),
        visitDetailsLocation: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(3) > div:nth-child(1) > label'),
        visitDetailsChronology: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(3) > div:nth-child(2) > label:nth-child(1)'),
        visitDetailsSuccessful: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(3) > div:nth-child(2) > label:nth-child(3)'),
        visitDetailsPeopleUndertaking: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(3) > div:nth-child(2) > label:nth-child(5)'),
        visitDetailsPeopleMet: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(5) > div:nth-child(1) > label'),
        visitDetailsPeopleExpected: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(5) > div:nth-child(2) > label'),
        visitDetailsNotes: by.css('[data-view*="visitDetails/visitDetails"] [id="reasonsection"] > div > div form > div:nth-child(7) > div:nth-child(1) > label'),

        togglevisitList: by.css('[name="visitList"] > div:nth-child(2) > div a'),
        visitListDue: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(1) > label:nth-child(1)'),
        visitListCompleted: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(1) > label:nth-child(3)'),
        visitListLink: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(1) > label:nth-child(5)'),
        visitListReason: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form div:nth-child(2) > label'),
        visitListMeasures: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form div:nth-child(3) > label'),
        visitListName: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(4) div a:nth-child(1) div div:nth-child(1) strong'),
        visitListSeen: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(4) div a:nth-child(1) div div:nth-child(2) strong'),
        visitListBedroom: by.css('[data-view*="visitList/visitList"] [id="visitSection"] form > div > div:nth-child(4) div a:nth-child(1) div div:nth-child(3) strong'),
    },

    componentVisible: function (component) {
        var componentCss = '[aria-label="' + component + '"]';
        return driver.wait(until.elementsLocated(by.css(componentCss)), 10000)
            .then(function () {
                driver.findElement(by.css(componentCss)).getText()
                    .then(function (componentTitle) {
                        console.log("component: ", component);
                        console.log("componentTitle: ", componentTitle)
                        expect(componentTitle).to.contain(component);
                    });
            });
    },

    toggleaccommodationDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleaccommodationDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.accommodationDetails), 10000)
    },

    accommodationDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.accommodationDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.accommodationDetails).getText()
                .then(function (accommodationDetails) {
                    console.log("accommodationDetails: ", accommodationDetails);
                    expect(accommodationDetails).to.contain("Accommodation details and activity status");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.accommodationType).getText()
                        .then(function (accommodationType) {
                            console.log("accommodationType: ", accommodationType);
                            expect(accommodationType).to.contain("Accomodation type");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.activityStatus).getText()
                        .then(function (activityStatus) {
                            console.log("activityStatus: ", activityStatus);
                            expect(activityStatus).to.contain("Activity status")
                        })
                })
        })
    },

    toggleactionTakenComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleactionTaken).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.Actions), 10000)
    },

    actionTakencomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.Actions), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.Actions).getText()
                .then(function (Actions) {
                    console.log("Actions: ", Actions);
                    expect(Actions).to.contain("Actions");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.ActionsOwner).getText()
                        .then(function (ActionsOwner) {
                            console.log("ActionsOwner: ", ActionsOwner);
                            expect(ActionsOwner).to.contain("Owner");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.actionAction).getText()
                        .then(function (actionAction) {
                            console.log("actionAction: ", actionAction);
                            expect(actionAction).to.contain("Action")
                        })
                })
        })
    },

    toggleadultmeetingNotesComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggladultmeetingNotes).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.meetingDate), 10000)
    },

    adultmeetingNotescomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.meetingDate), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.meetingDate).getText()
                .then(function (meetingDate) {
                    console.log("meetingDate: ", meetingDate);
                    expect(meetingDate).to.contain("Date of meeting");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.placeOfAdultMeetingNote).getText()
                        .then(function (placeOfAdultMeetingNote) {
                            console.log("placeOfAdultMeetingNote: ", placeOfAdultMeetingNote);
                            expect(placeOfAdultMeetingNote).to.contain("Place of meeting");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.attendeesOfAdultMeetingNote).getText()
                        .then(function (attendeesOfAdultMeetingNote) {
                            console.log("attendeesOfAdultMeetingNote: ", attendeesOfAdultMeetingNote);
                            expect(attendeesOfAdultMeetingNote).to.contain("Attendees of meeting")
                        })
                })
        })
    },

    toggleagenciesComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleagencies).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.agenciesAgencies), 10000)
    },

    agenciescomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.agenciesAgencies), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.agenciesAgencies).getText()
                .then(function (agenciesAgencies) {
                    console.log("agenciesAgencies: ", agenciesAgencies);
                    expect(agenciesAgencies).to.contain("Agencies");
                })
        })
    },

    toggleallegedAbuseComponent: function () {
        return driver.findElement(page.testingForm_page.elements.toggleallegedAbuse).click()
        //    return driver.wait(until.elementsLocated(page.testingForm_page.elements.agenciesAgencies), 10000)
    },

    allegedAbusecomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.toggleallegedAbuse), 10000)
    },

    toggleassessmentDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleassessmentDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.assessmentStartDate), 10000)
    },

    assessmentDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.assessmentStartDate), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.assessmentStartDate).getText()
                .then(function (assessmentStartDate) {
                    console.log("assessmentStartDate: ", assessmentStartDate);
                    expect(assessmentStartDate).to.contain("Assessment start date");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.assessmentEndDate).getText()
                        .then(function (assessmentEndDate) {
                            console.log("assessmentEndDate: ", assessmentEndDate);
                            expect(assessmentEndDate).to.contain("Assessment end date");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.assessmentInternalReviewDate).getText()
                        .then(function (assessmentInternalReviewDate) {
                            console.log("assessmentInternalReviewDate: ", assessmentInternalReviewDate);
                            expect(assessmentInternalReviewDate).to.contain("Internal review date")
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.reasonforAssessment).getText()
                        .then(function (reasonforAssessment) {
                            console.log("reasonforAssessment: ", reasonforAssessment);
                            expect(reasonforAssessment).to.contain("Reason for assessment")
                        })
                })
        })
    },

    toggleattachmentsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleattachments).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.attachmentsAttachments), 10000)
    },

    attachmentscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.attachmentsAttachments), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.attachmentsAttachments).getText()
                .then(function (attachmentsAttachments) {
                    console.log("attachmentsAttachments: ", attachmentsAttachments);
                    expect(attachmentsAttachments).to.contain("Attachments");
                })
        })
    },

    togglebankAccountDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglebankAccountDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.bankAccountDetails), 10000)
    },

    bankAccountDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.bankAccountDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.bankAccountDetails).getText()
                .then(function (bankAccountDetails) {
                    console.log("bankAccountDetails: ", bankAccountDetails);
                    expect(bankAccountDetails).to.contain("Bank account details");
                })
        })
    },

    togglebedroomSeenComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglebedroomSeen).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.bedroomSeen), 10000)
    },

    bedroomSeencomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.bedroomSeen), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.bedroomSeen).getText()
                .then(function (bedroomSeen) {
                    console.log("bedroomSeen: ", bedroomSeen);
                    expect(bedroomSeen).to.contain("Bedroom Seen");
                })
        })
    },

    togglecaringResponsibilityComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecaringResponsibility).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.caringResponsibility), 10000)
    },

    caringResponsibilitycomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.caringResponsibility), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.caringResponsibility).getText()
                .then(function (caringResponsibility) {
                    console.log("caringResponsibility: ", caringResponsibility);
                    expect(caringResponsibility).to.contain("Caring responsibility");
                })
        })
    },

    togglechairsSummaryComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglechairsSummary).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.chairsSummary), 10000)
    },

    chairsSummarycomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.chairsSummary), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.chairsSummary).getText()
                .then(function (chairsSummary) {
                    console.log("chairsSummary: ", chairsSummary);
                    expect(chairsSummary).to.contain("Chair's summary");
                })
        })
    },

    togglechildYoungPersonAnalysisComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglechildYoungPersonAnalysis).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.childYoungPersonAnalysis), 10000)
    },

    childYoungPersonAnalysiscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.childYoungPersonAnalysis), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.childYoungPersonAnalysis).getText()
                .then(function (childYoungPersonAnalysis) {
                    console.log("childYoungPersonAnalysis: ", childYoungPersonAnalysis);
                    expect(childYoungPersonAnalysis).to.contain("Child/Young person views");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.childYoungPersonAnalysisDetails).getText()
                        .then(function (childYoungPersonAnalysisDetails) {
                            console.log("childYoungPersonAnalysisDetails: ", childYoungPersonAnalysisDetails);
                            expect(childYoungPersonAnalysisDetails).to.contain("Details");
                        })
                })
        })
    },

    togglecommentsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecomments).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.commentsComments), 10000)
    },

    commentscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.commentsComments), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.commentsComments).getText()
                .then(function (commentsComments) {
                    console.log("commentsComments: ", commentsComments);
                    expect(commentsComments).to.contain("Comments");
                })
        })
    },

    togglecommunicationComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecommunication).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.communicationCommunication), 10000)
    },

    communicationcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.communicationCommunication), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.communicationCommunication).getText()
                .then(function (communicationCommunication) {
                    console.log("communicationCommunication: ", communicationCommunication);
                    expect(communicationCommunication).to.contain("Communication");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.communicationDiscussion).getText()
                        .then(function (communicationDiscussion) {
                            console.log("communicationDiscussion: ", communicationDiscussion);
                            expect(communicationDiscussion).to.contain("Have you discussed the contact with the family");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.communicationRisk).getText()
                        .then(function (communicationRisk) {
                            console.log("communicationRisk: ", communicationRisk);
                            expect(communicationRisk).to.contain("Is there are any risks around disclosure or making contact with any family members");
                        })
                })
        })
    },

    toggleconferenceDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleconferenceDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceType), 10000)
    },

    conferenceDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceType), 10000).then(function () {
            driver.executeScript('return window.scrollTo(' + 480 + ',' + 480 + ');');
            driver.sleep(1000);
            return driver.findElement(page.testingForm_page.elements.conferenceType).getText()
                .then(function (conferenceType) {
                    console.log("conferenceType: ", conferenceType);
                    expect(conferenceType).to.contain("Conference type");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceReason).getText()
                        .then(function (conferenceReason) {
                            console.log("conferenceReason: ", conferenceReason);
                            expect(conferenceReason).to.contain("Reason for the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDueDateConf).getText()
                        .then(function (conferenceDueDateConf) {
                            console.log("conferenceDueDateConf: ", conferenceDueDateConf);
                            expect(conferenceDueDateConf).to.contain("Due date of the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDueDateReport).getText()
                        .then(function (conferenceDueDateReport) {
                            console.log("conferenceDueDateReport: ", conferenceDueDateReport);
                            expect(conferenceDueDateReport).to.contain("Due date for the report distribution");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceActualDate).getText()
                        .then(function (conferenceActualDate) {
                            console.log("conferenceActualDate: ", conferenceActualDate);
                            expect(conferenceActualDate).to.contain("Actual date of the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceReportDist).getText()
                        .then(function (conferenceReportDist) {
                            console.log("conferenceReportDist: ", conferenceReportDist);
                            expect(conferenceReportDist).to.contain("Report distributed on");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceChairPerson).getText()
                        .then(function (conferenceChairPerson) {
                            console.log("conferenceChairPerson: ", conferenceChairPerson);
                            expect(conferenceChairPerson).to.contain("Name of independent chair");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceInvitesDate).getText()
                        .then(function (conferenceInvitesDate) {
                            console.log("conferenceInvitesDate: ", conferenceInvitesDate);
                            expect(conferenceInvitesDate).to.contain("Date invites sent");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceLocation).getText()
                        .then(function (conferenceLocation) {
                            console.log("conferenceLocation: ", conferenceLocation);
                            expect(conferenceLocation).to.contain("Location of conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceBackground).getText()
                        .then(function (conferenceBackground) {
                            console.log("conferenceBackground: ", conferenceBackground);
                            expect(conferenceBackground).to.contain("Background for convening the conference");
                        })
                })
        })
    },

    toggleconferenceDetailsFormComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleconferenceDetailsForm).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceDetailsType), 10000)
    },

    conferenceDetailsFormcomponentVisible: function () {
        driver.sleep(5000)
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceDetailsType), 10000).then(function () {
            driver.sleep(5000);
            return driver.findElement(page.testingForm_page.elements.conferenceDetailsType).getText()
                .then(function (conferenceDetailsType) {
                    console.log("conferenceDetailsType: ", conferenceDetailsType);
                    expect(conferenceDetailsType).to.contain("Conference Type");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsReason).getText()
                        .then(function (conferenceDetailsReason) {
                            console.log("conferenceDetailsReason: ", conferenceDetailsReason);
                            expect(conferenceDetailsReason).to.contain("Reason for the Conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsDueDateConf).getText()
                        .then(function (conferenceDetailsDueDateConf) {
                            console.log("conferenceDetailsDueDateConf: ", conferenceDetailsDueDateConf);
                            expect(conferenceDetailsDueDateConf).to.contain("Due date of the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsDueDateReport).getText()
                        .then(function (conferenceDetailsDueDateReport) {
                            console.log("conferenceDetailsDueDateReport: ", conferenceDetailsDueDateReport);
                            expect(conferenceDetailsDueDateReport).to.contain("Date the report was distributed");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsActualDate).getText()
                        .then(function (conferenceDetailsActualDate) {
                            console.log("conferenceDetailsActualDate: ", conferenceDetailsActualDate);
                            expect(conferenceDetailsActualDate).to.contain("Actual date of the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsMissing).getText()
                        .then(function (conferenceDetailsMissing) {
                            console.log("conferenceDetailsMissing: ", conferenceDetailsMissing);
                            expect(conferenceDetailsMissing).to.contain("Reason for missing due date");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsChairPerson).getText()
                        .then(function (conferenceDetailsChairPerson) {
                            console.log("conferenceDetailsChairPerson: ", conferenceDetailsChairPerson);
                            expect(conferenceDetailsChairPerson).to.contain("Name of independent chair");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsInvitesDate).getText()
                        .then(function (conferenceDetailsInvitesDate) {
                            console.log("conferenceDetailsInvitesDate: ", conferenceDetailsInvitesDate);
                            expect(conferenceDetailsInvitesDate).to.contain("Date invites sent");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsLocation).getText()
                        .then(function (conferenceDetailsLocation) {
                            console.log("conferenceDetailsLocation: ", conferenceDetailsLocation);
                            expect(conferenceDetailsLocation).to.contain("Location of conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsBackground).getText()
                        .then(function (conferenceDetailsBackground) {
                            console.log("conferenceDetailsBackground: ", conferenceDetailsBackground);
                            expect(conferenceDetailsBackground).to.contain("Background for convening the conference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsChildReceived).getText()
                        .then(function (conferenceDetailsChildReceived) {
                            console.log("conferenceDetailsChildReceived: ", conferenceDetailsChildReceived);
                            expect(conferenceDetailsChildReceived).to.contain("Has the child/young person received a copy of the conference report?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsChildDiscussed).getText()
                        .then(function (conferenceDetailsChildDiscussed) {
                            console.log("conferenceDetailsChildDiscussed: ", conferenceDetailsChildDiscussed);
                            expect(conferenceDetailsChildDiscussed).to.contain("Has the report been discussed with the child/young person?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsParentReceived).getText()
                        .then(function (conferenceDetailsParentReceived) {
                            console.log("conferenceDetailsParentReceived: ", conferenceDetailsParentReceived);
                            expect(conferenceDetailsParentReceived).to.contain("Has the parent/carer received a copy of the conference report?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsParentDiscussed).getText()
                        .then(function (conferenceDetailsParentDiscussed) {
                            console.log("conferenceDetailsParentDiscussed: ", conferenceDetailsParentDiscussed);
                            expect(conferenceDetailsParentDiscussed).to.contain("Has the report been discussed with the parent/carer?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsChildDiscussedDate).getText()
                        .then(function (conferenceDetailsChildDiscussedDate) {
                            console.log("conferenceDetailsChildDiscussedDate: ", conferenceDetailsChildDiscussedDate);
                            expect(conferenceDetailsChildDiscussedDate).to.contain("Date discussed with child/young person");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.conferenceDetailsParentDiscussedDate).getText()
                        .then(function (conferenceDetailsParentDiscussedDate) {
                            console.log("conferenceDetailsParentDiscussedDate: ", conferenceDetailsParentDiscussedDate);
                            expect(conferenceDetailsParentDiscussedDate).to.contain("Date discussed with parents/carers");
                        })
                })

        })
    },

    toggleconferenceRecommendationsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleconferenceRecommendationsForm).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.allocatedRecommendations), 10000)
    },

    conferenceRecommendationscomponentVisible: function () {
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.allocatedRecommendations), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.allocatedRecommendations).getText()
                .then(function (allocatedRecommendations) {
                    console.log("allocatedRecommendations: ", allocatedRecommendations);
                    expect(allocatedRecommendations).to.contain("Allocated worker's recommendations");
                })
        })
    },

    toggleconferenceReportBackgroundComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleconferenceReportBackground).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceReportBackgroundType), 10000)
    },

    conferenceReportBackgroundcomponentVisible: function () {
        driver.sleep(3000);
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.conferenceReportBackgroundType), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.conferenceReportBackgroundType).getText()
                .then(function (conferenceReportBackgroundType) {
                    console.log("conferenceReportBackgroundType: ", conferenceReportBackgroundType);
                    expect(conferenceReportBackgroundType).to.contain("Type of conference");
                })
        })
    },

    toggleconnectionsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleconnections).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.connectionsConnections), 10000)
    },

    connectionscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.connectionsConnections), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.connectionsConnections).getText()
                .then(function (connectionsConnections) {
                    console.log("connectionsConnections: ", connectionsConnections);
                    expect(connectionsConnections).to.contain("Connections");
                })
        })
    },

    togglecontactLogComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecontactLog).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contactLogContactLog), 10000)
    },

    contactLogcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contactLogContactLog), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.contactLogContactLog).getText()
                .then(function (contactLogContactLog) {
                    console.log("contactLogContactLog: ", contactLogContactLog);
                    expect(contactLogContactLog).to.contain("Contact log");
                })
        })
    },

    togglecontactorComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecontactor).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contactorContactor), 10000)
    },

    contactorcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contactorContactor), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.contactorContactor).getText()
                .then(function (contactorContactor) {
                    console.log("contactorContactor: ", contactorContactor);
                    expect(contactorContactor).to.contain("Contactor");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorName).getText()
                        .then(function (contactorName) {
                            console.log("contactorName: ", contactorName);
                            expect(contactorName).to.contain("Name");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorMethod).getText()
                        .then(function (contactorMethod) {
                            console.log("contactorMethod: ", contactorMethod);
                            expect(contactorMethod).to.contain("Contact method");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorAbout).getText()
                        .then(function (contactorAbout) {
                            console.log("contactorAbout: ", contactorAbout);
                            expect(contactorAbout).to.contain("Contact is about");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorEventDate).getText()
                        .then(function (contactorEventDate) {
                            console.log("contactorEventDate: ", contactorEventDate);
                            expect(contactorEventDate).to.contain("Date and time of the event");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorEventReportDate).getText()
                        .then(function (contactorEventReportDate) {
                            console.log("contactorEventReportDate: ", contactorEventReportDate);
                            expect(contactorEventReportDate).to.contain("Date and time event reported");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorEventLocation).getText()
                        .then(function (contactorEventLocation) {
                            console.log("contactorEventLocation: ", contactorEventLocation);
                            expect(contactorEventLocation).to.contain("Location of the event");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorProfCheck).getText()
                        .then(function (contactorProfCheck) {
                            console.log("contactorProfCheck: ", contactorProfCheck);
                            expect(contactorProfCheck).to.contain("Is the contactor a professional?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorReason).getText()
                        .then(function (contactorReason) {
                            console.log("contactorReason: ", contactorReason);
                            expect(contactorReason).to.contain("Reasons that led to this contact");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorDiscussed).getText()
                        .then(function (contactorDiscussed) {
                            console.log("contactorDiscussed: ", contactorDiscussed);
                            expect(contactorDiscussed).to.contain("Have you discussed the contact with the family?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.contactorFamilyRisk).getText()
                        .then(function (contactorFamilyRisk) {
                            console.log("contactorFamilyRisk: ", contactorFamilyRisk);
                            expect(contactorFamilyRisk).to.contain("Are there any risks around disclosure or making contact with any family members?");
                        })
                })
        })
    },

    togglecontingencyPlanComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglecontingencyPlan).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contingencyPlanDetails), 10000)
    },

    contingencyPlancomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.contingencyPlanDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.contingencyPlanDetails).getText()
                .then(function (contingencyPlanDetails) {
                    console.log("contingencyPlanDetails: ", contingencyPlanDetails);
                    expect(contingencyPlanDetails).to.contain("Details");
                })
        })
    },

    toggledateOfVisitComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggledateOfVisit).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.dateOfVisitDetails), 10000)
    },

    dateOfVisitcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.dateOfVisitDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.dateOfVisitDetails).getText()
                .then(function (dateOfVisitDetails) {
                    console.log("dateOfVisitDetails: ", dateOfVisitDetails);
                    expect(dateOfVisitDetails).to.contain("Date of Next Visit");
                })
        })
    },

    toggledecisionsTakenComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggledecisionsTaken).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.decisionsTakenDetails), 10000)
    },

    decisionsTakencomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.decisionsTakenDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.decisionsTakenDetails).getText()
                .then(function (decisionsTakenDetails) {
                    console.log("decisionsTakenDetails: ", decisionsTakenDetails);
                    expect(decisionsTakenDetails).to.contain("Decision Taken");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.decisionsTakenMedical).getText()
                        .then(function (decisionsTakenMedical) {
                            console.log("decisionsTakenMedical: ", decisionsTakenMedical);
                            expect(decisionsTakenMedical).to.contain("Medical examination required?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.decisionsTakenEvidence).getText()
                        .then(function (decisionsTakenEvidence) {
                            console.log("decisionsTakenEvidence: ", decisionsTakenEvidence);
                            expect(decisionsTakenEvidence).to.contain("Best evidence interview required?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.decisionsTakenChild).getText()
                        .then(function (decisionsTakenChild) {
                            console.log("decisionsTakenChild: ", decisionsTakenChild);
                            expect(decisionsTakenChild).to.contain("Child interview plan required");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.decisionsTakenEmergency).getText()
                        .then(function (decisionsTakenEmergency) {
                            console.log("decisionsTakenEmergency: ", decisionsTakenEmergency);
                            expect(decisionsTakenEmergency).to.contain("Emergency protection order required?");
                        })
                })
        })
    },

    toggledeterminationComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggledetermination).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.determinationDetermination), 10000)
    },

    determinationcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.determinationDetermination), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.determinationDetermination).getText()
                .then(function (determinationDetermination) {
                    console.log("determinationDetermination: ", determinationDetermination);
                    expect(determinationDetermination).to.contain("Determination");
                })
        })
    },

    toggledissentingViewsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggledissentingViews).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.dissentingViewsFrom), 10000)
    },

    dissentingViewscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.dissentingViewsFrom), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.dissentingViewsFrom).getText()
                .then(function (dissentingViewsFrom) {
                    console.log("dissentingViewsFrom: ", dissentingViewsFrom);
                    expect(dissentingViewsFrom).to.contain("Views from");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.dissentingViewsCheck).getText()
                        .then(function (dissentingViewsCheck) {
                            console.log("dissentingViewsCheck: ", dissentingViewsCheck);
                            expect(dissentingViewsCheck).to.contain("Dissenting View");
                        })
                })
        })
    },

    toggleeducationComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleeducationViews).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noEducation), 10000)
    },

    educationcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noEducation), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.noEducation).getText()
                .then(function (noEducation) {
                    console.log("noEducation: ", noEducation);
                    expect(noEducation).to.contain("No education information present");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.appliedToEducation).getText()
                        .then(function (appliedToEducation) {
                            console.log("appliedToEducation: ", appliedToEducation);
                            expect(appliedToEducation).to.contain("Have you applied to education ?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.educationPersonalAdv).getText()
                        .then(function (educationPersonalAdv) {
                            console.log("educationPersonalAdv: ", educationPersonalAdv);
                            expect(educationPersonalAdv).to.contain("Personal adviser");
                        })
                })
        })
    },

    toggleemploymentComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleemploymentViews).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noemployment), 10000)
    },

    employmentcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noemployment), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.noemployment).getText()
                .then(function (noemployment) {
                    console.log("noemployment: ", noemployment);
                    expect(noemployment).to.contain("No employment record present");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.appliedToEmployment).getText()
                        .then(function (appliedToEmployment) {
                            console.log("appliedToEmployment: ", appliedToEmployment);
                            expect(appliedToEmployment).to.contain("Have you applied to employement ?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.employmentPersonalAdv).getText()
                        .then(function (employmentPersonalAdv) {
                            console.log("employmentPersonalAdv: ", employmentPersonalAdv);
                            expect(employmentPersonalAdv).to.contain("Personal adviser");
                        })
                })
        })
    },

    togglefactorsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglefactors).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.factorsAssessmentCategories), 10000)
    },

    factorscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.factorsAssessmentCategories), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.factorsAssessmentCategories).getText()
                .then(function (factorsAssessmentCategories) {
                    console.log("factorsAssessmentCategories: ", factorsAssessmentCategories);
                    expect(factorsAssessmentCategories).to.contain("Assessment categories");
                })
        })
    },

    togglefamilyViewsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglefamilyViews).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.familyViewsParentCarer), 10000)
    },

    familyViewscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.familyViewsParentCarer), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.familyViewsParentCarer).getText()
                .then(function (familyViewsParentCarer) {
                    console.log("familyViewsParentCarer: ", familyViewsParentCarer);
                    expect(familyViewsParentCarer).to.contain("Parent / Carer's views (if available)");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.familyViewsName).getText()
                        .then(function (familyViewsName) {
                            console.log("familyViewsName: ", familyViewsName);
                            expect(familyViewsName).to.contain("Name");
                        })
                })
        })
    },

    toggleimpactonChildComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleimpactonChild).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.impactonChildDetails), 10000)
    },

    impactonChildcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.impactonChildDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.impactonChildDetails).getText()
                .then(function (impactonChildDetails) {
                    console.log("impactonChildDetails: ", impactonChildDetails);
                    expect(impactonChildDetails).to.contain("Details");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.impactonChildYoung).getText()
                        .then(function (impactonChildYoung) {
                            console.log("impactonChildYoung: ", impactonChildYoung);
                            expect(impactonChildYoung).to.contain("Impact on child/young person");
                        })
                })
        })
    },

    toggleinformationSharingComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleinformationSharing).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.informationSharingDetails), 10000)
    },

    informationSharingcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.informationSharingDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.informationSharingDetails).getText()
                .then(function (informationSharingDetails) {
                    console.log("informationSharingDetails: ", informationSharingDetails);
                    expect(informationSharingDetails).to.contain("Information sharing");
                })
        })
    },

    toggleinvestigationDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleinvestigationDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.investigationDetails), 10000)
    },

    investigationDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.investigationDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.investigationDetails).getText()
                .then(function (investigationDetails) {
                    console.log("investigationDetails: ", investigationDetails);
                    expect(investigationDetails).to.contain("S47 Enquiry details");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.agencyS47Enquiry).getText()
                        .then(function (agencyS47Enquiry) {
                            console.log("agencyS47Enquiry: ", agencyS47Enquiry);
                            expect(agencyS47Enquiry).to.contain("Agency leading S47 Enquiry");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.investigationDetailsBeginDate).getText()
                        .then(function (investigationDetailsBeginDate) {
                            console.log("investigationDetailsBeginDate: ", investigationDetailsBeginDate);
                            expect(investigationDetailsBeginDate).to.contain("Date the S47 Enquiry begins");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.investigationDetailsDueDate).getText()
                        .then(function (investigationDetailsDueDate) {
                            console.log("investigationDetailsDueDate: ", investigationDetailsDueDate);
                            expect(investigationDetailsDueDate).to.contain("S47 Enquiry completion due date");
                        })
                })
        })
    },

    togglemedicalConditionsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglemedicalConditions).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.medicalConditionsExist), 10000)
    },

    medicalConditionscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.medicalConditionsExist), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.medicalConditionsExist).getText()
                .then(function (medicalConditionsExist) {
                    console.log("medicalConditionsExist: ", medicalConditionsExist);
                    expect(medicalConditionsExist).to.contain("Are there any existing medical conditions?");
                })
        })
    },

    togglemedicationsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglemedications).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noMedications), 10000)
    },

    medicationscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.noMedications), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.noMedications).getText()
                .then(function (noMedications) {
                    console.log("noMedications: ", noMedications);
                    //expect(noMedications).to.contain("Currently there are no medications for Karlee Otha OKeefe");
                })
        })
    },

    togglemeetingNotesComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglemeetingNotes).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.meetingNotesType), 10000)
    },

    meetingNotescomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.meetingNotesType), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.meetingNotesType).getText()
                .then(function (meetingNotesType) {
                    console.log("meetingNotesType: ", meetingNotesType);
                    expect(meetingNotesType).to.contain("Meeting type");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.meetingNotesScheduleDate).getText()
                        .then(function (meetingNotesScheduleDate) {
                            console.log("meetingNotesScheduleDate: ", meetingNotesScheduleDate);
                            expect(meetingNotesScheduleDate).to.contain("Scheduled date of review");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.meetingNotesDate).getText()
                        .then(function (meetingNotesDate) {
                            console.log("meetingNotesDate: ", meetingNotesDate);
                            expect(meetingNotesDate).to.contain("Date of meeting");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.meetingNotesNote).getText()
                        .then(function (meetingNotesNote) {
                            console.log("meetingNotesNote: ", meetingNotesNote);
                            expect(meetingNotesNote).to.contain("Meeting notes");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.meetingNotesNextDate).getText()
                        .then(function (meetingNotesNextDate) {
                            console.log("meetingNotesNextDate: ", meetingNotesNextDate);
                            expect(meetingNotesNextDate).to.contain("Next review date");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.meetingNotesParticipation).getText()
                        .then(function (meetingNotesParticipation) {
                            console.log("meetingNotesParticipation: ", meetingNotesParticipation);
                            expect(meetingNotesParticipation).to.contain("Participation in this plan");
                        })
                })
        })
    },

    togglementalCapacityAssessmentComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglementalCapacityAssessment).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.mentalCapacityAssessmentLabel), 10000)
    },

    mentalCapacityAssessmentcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.mentalCapacityAssessmentLabel), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.mentalCapacityAssessmentLabel).getText()
                .then(function (mentalCapacityAssessmentLabel) {
                    console.log("mentalCapacityAssessmentLabel: ", mentalCapacityAssessmentLabel);
                    expect(mentalCapacityAssessmentLabel).to.contain("Mental capacity assessment");
                })
        })
    },

    toggleminutesOfConferenceComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleminutesOfConference).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.minutesOfConferenceLabel), 10000)
    },

    minutesOfConferencecomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.minutesOfConferenceLabel), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.minutesOfConferenceLabel).getText()
                .then(function (minutesOfConferenceLabel) {
                    console.log("minutesOfConferenceLabel: ", minutesOfConferenceLabel);
                    expect(minutesOfConferenceLabel).to.contain("Minutes of the conference");
                })
        })
    },

    toggleotherSubjectDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleotherSubjectDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.otherSubjectDetailsLabel), 10000)
    },

    otherSubjectDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.otherSubjectDetailsLabel), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.otherSubjectDetailsLabel).getText()
                .then(function (otherSubjectDetailsLabel) {
                    console.log("otherSubjectDetailsLabel: ", otherSubjectDetailsLabel);
                    expect(otherSubjectDetailsLabel).to.contain("Other subject details");
                })
        })
    },

    toggleoversightComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleoversightDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.oversightSocialWorkerDecision), 10000)
    },

    oversightcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.oversightSocialWorkerDecision), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.oversightSocialWorkerDecision).getText()
                .then(function (oversightSocialWorkerDecision) {
                    console.log("oversightSocialWorkerDecision: ", oversightSocialWorkerDecision);
                    expect(oversightSocialWorkerDecision).to.contain("Team Managers/Consultant Social Workers Decision");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.oversightDecisions).getText()
                        .then(function (oversightDecisions) {
                            console.log("oversightDecisions: ", oversightDecisions);
                            expect(oversightDecisions).to.contain("Please explain reasons for any decisions taken.");
                        })
                })
        })
    },

    toggleparentingCapacityOfParentsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleparentingCapacityOfParents).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.parentingCapacityOfParentsParentingCapacity), 10000)
    },

    parentingCapacityOfParentscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.parentingCapacityOfParentsParentingCapacity), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.parentingCapacityOfParentsParentingCapacity).getText()
                .then(function (parentingCapacityOfParentsParentingCapacity) {
                    console.log("parentingCapacityOfParentsParentingCapacity: ", parentingCapacityOfParentsParentingCapacity);
                    expect(parentingCapacityOfParentsParentingCapacity).to.contain("Parenting capacity");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.parentingCapacityDetails).getText()
                        .then(function (parentingCapacityDetails) {
                            console.log("parentingCapacityDetails: ", parentingCapacityDetails);
                            expect(parentingCapacityDetails).to.contain("Details");
                        })
                })
        })
    },

    toggleparticipantsInDiscussionComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleparticipantsInDiscussion).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.participantsInDiscussion), 10000)
    },

    participantsInDiscussioncomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.participantsInDiscussion), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.participantsInDiscussion).getText()
                .then(function (participantsInDiscussion) {
                    console.log("participantsInDiscussion: ", participantsInDiscussion);
                    expect(participantsInDiscussion).to.contain("Participants in the discussion");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.participantsInDiscussionSearch).getText()
                        .then(function (participantsInDiscussionSearch) {
                            console.log("participantsInDiscussionSearch: ", participantsInDiscussionSearch);
                            expect(participantsInDiscussionSearch).to.contain("Search participant");
                        })
                })
        })
    },

    togglepassportDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglepassportDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.passportDetails), 10000)
    },

    passportDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.passportDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.passportDetails).getText()
                .then(function (passportDetails) {
                    console.log("passportDetails: ", passportDetails);
                    expect(passportDetails).to.contain("Passport details");
                })
        })
    },

    toggleprofessionalViewsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleprofessionalViews).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.professionalViews), 10000)
    },

    professionalViewscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.professionalViews), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.professionalViews).getText()
                .then(function (professionalViews) {
                    console.log("professionalViews: ", professionalViews);
                    expect(professionalViews).to.contain("Professional views");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.professionalViewsViewsFrom).getText()
                        .then(function (professionalViewsViewsFrom) {
                            console.log("professionalViewsViewsFrom: ", professionalViewsViewsFrom);
                            expect(professionalViewsViewsFrom).to.contain("Views from");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.professionalViewsDissentingView).getText()
                        .then(function (professionalViewsDissentingView) {
                            console.log("professionalViewsDissentingView: ", professionalViewsDissentingView);
                            expect(professionalViewsDissentingView).to.contain("Dissenting View");
                        })
                })
        })
    },

    togglereasonComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglereason).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.reasonDetails), 10000)
    },

    reasoncomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.reasonDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.reasonDetails).getText()
                .then(function (reasonDetails) {
                    console.log("reasonDetails: ", reasonDetails);
                    expect(reasonDetails).to.contain("Details");
                })
        })
    },

    togglerecommendationsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglerecommendations).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.recommendationsDetails), 10000)
    },

    recommendationscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.recommendationsDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.recommendationsDetails).getText()
                .then(function (recommendationsDetails) {
                    console.log("recommendationsDetails: ", recommendationsDetails);
                    expect(recommendationsDetails).to.contain("Details");
                })
        })
    },

    togglereferenceChecksComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglereferenceChecks).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.referenceChecksReferenceChecks), 10000)
    },

    referenceCheckscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.referenceChecksReferenceChecks), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.referenceChecksReferenceChecks).getText()
                .then(function (referenceChecksReferenceChecks) {
                    console.log("referenceChecksReferenceChecks: ", referenceChecksReferenceChecks);
                    expect(referenceChecksReferenceChecks).to.contain("References/Checks");
                    driver.findElement(page.testingForm_page.elements.referencesCheckAdd).click();
                    return driver.wait(until.elementsLocated(page.testingForm_page.elements.referenceChecksType), 10000)
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksType).getText()
                        .then(function (referenceChecksType) {
                            console.log("referenceChecksType: ", referenceChecksType);
                            expect(referenceChecksType).to.contain("Type of check");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksMethod).getText()
                        .then(function (referenceChecksMethod) {
                            console.log("referenceChecksMethod: ", referenceChecksMethod);
                            expect(referenceChecksMethod).to.contain("Method");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksDateRequested).getText()
                        .then(function (referenceChecksDateRequested) {
                            console.log("referenceChecksDateRequested: ", referenceChecksDateRequested);
                            expect(referenceChecksDateRequested).to.contain("Date requested");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksDateResponse).getText()
                        .then(function (referenceChecksDateResponse) {
                            console.log("referenceChecksDateResponse: ", referenceChecksDateResponse);
                            expect(referenceChecksDateResponse).to.contain("Date response received");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksDateRenewal).getText()
                        .then(function (referenceChecksDateRenewal) {
                            console.log("referenceChecksDateRenewal: ", referenceChecksDateRenewal);
                            expect(referenceChecksDateRenewal).to.contain("Date of renewal");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksProvided).getText()
                        .then(function (referenceChecksProvided) {
                            console.log("referenceChecksProvided: ", referenceChecksProvided);
                            expect(referenceChecksProvided).to.contain("Provided by");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksRequested).getText()
                        .then(function (referenceChecksRequested) {
                            console.log("referenceChecksRequested: ", referenceChecksRequested);
                            expect(referenceChecksRequested).to.contain("Requested/ Performed by");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksOutcome).getText()
                        .then(function (referenceChecksOutcome) {
                            console.log("referenceChecksOutcome: ", referenceChecksOutcome);
                            expect(referenceChecksOutcome).to.contain("Outcome");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksPersonal).getText()
                        .then(function (referenceChecksPersonal) {
                            console.log("referenceChecksPersonal: ", referenceChecksPersonal);
                            expect(referenceChecksPersonal).to.contain("Personal Reference");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.referenceChecksNotes).getText()
                        .then(function (referenceChecksNotes) {
                            console.log("referenceChecksNotes: ", referenceChecksNotes);
                            expect(referenceChecksNotes).to.contain("Notes");
                        })
                })
        })
    },

    toggleriskCalculationComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleriskCalculation).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.riskCalculation), 10000)
    },

    riskCalculationcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.riskCalculation), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.riskCalculation).getText()
                .then(function (riskCalculation) {
                    console.log("riskCalculation: ", riskCalculation);
                    expect(riskCalculation).to.contain("Risk calculation");
                })
        })
    },

    toggleriskProtectiveFactorsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleriskProtectiveFactors).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.riskProtectiveFactors), 10000)
    },

    riskProtectiveFactorscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.riskProtectiveFactors), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.riskProtectiveFactors).getText()
                .then(function (riskProtectiveFactors) {
                    console.log("riskProtectiveFactors: ", riskProtectiveFactors);
                    expect(riskProtectiveFactors).to.contain("Risk And Protective Factors");
                })
        })
    },

    togglerisksComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglerisks).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.risks), 10000)
    },

    riskscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.risks), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.risks).getText()
                .then(function (risks) {
                    console.log("risks: ", risks);
                    expect(risks).to.contain("Risks");
                })
        })
    },

    toggleroutineComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleroutine).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.routine), 10000)
    },

    routinecomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.routine), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.routine).getText()
                .then(function (routine) {
                    console.log("routine: ", routine);
                    expect(routine).to.contain("Routine");
                })
        })
    },

    togglesafeguardingConcernsDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglesafeguardingConcernsDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.safeguardingConcernsDetails), 10000)
    },

    safeguardingConcernsDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.safeguardingConcernsDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.safeguardingConcernsDetails).getText()
                .then(function (safeguardingConcernsDetails) {
                    console.log("safeguardingConcernsDetails: ", safeguardingConcernsDetails);
                    expect(safeguardingConcernsDetails).to.contain("Safeguarding concern details");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.safeguardingConcernsDetailsDetails).getText()
                        .then(function (safeguardingConcernsDetailsDetails) {
                            console.log("safeguardingConcernsDetailsDetails: ", safeguardingConcernsDetailsDetails);
                            expect(safeguardingConcernsDetailsDetails).to.contain("Details of suspected harm");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.safeguardingConcernsDetailsInjuries).getText()
                        .then(function (safeguardingConcernsDetailsInjuries) {
                            console.log("safeguardingConcernsDetailsInjuries: ", safeguardingConcernsDetailsInjuries);
                            expect(safeguardingConcernsDetailsInjuries).to.contain("Are there any physical injuries?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.safeguardingConcernsDetailsImpact).getText()
                        .then(function (safeguardingConcernsDetailsImpact) {
                            console.log("safeguardingConcernsDetailsImpact: ", safeguardingConcernsDetailsImpact);
                            expect(safeguardingConcernsDetailsImpact).to.contain("Impact of harm");
                        })
                })
        })
    },

    toggleserafInformationComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleserafInformation).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.serafInformation), 10000)
    },

    serafInformationcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.serafInformation), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.serafInformation).getText()
                .then(function (serafInformation) {
                    console.log("serafInformation: ", serafInformation);
                    expect(serafInformation).to.contain("SERAF information");
                })
        })
    },

    toggleservicesAndInterventionsComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggleservicesAndInterventions).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.servicesAndInterventions), 10000)
    },

    servicesAndInterventionscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.servicesAndInterventions), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.servicesAndInterventions).getText()
                .then(function (servicesAndInterventions) {
                    console.log("servicesAndInterventions: ", servicesAndInterventions);
                    expect(servicesAndInterventions).to.contain("Past services and interventions");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.servicesAndInterventionsDetails).getText()
                        .then(function (servicesAndInterventionsDetails) {
                            console.log("servicesAndInterventionsDetails: ", servicesAndInterventionsDetails);
                            expect(servicesAndInterventionsDetails).to.contain("Details");
                        })
                })
        })
    },

    togglestayInTouchComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglestayInTouch).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.stayInTouch), 10000)
    },

    stayInTouchcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.stayInTouch), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.stayInTouch).getText()
                .then(function (stayInTouch) {
                    console.log("stayInTouch: ", stayInTouch);
                    expect(stayInTouch).to.contain("Staying in touch details");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.stayInTouchAttempt).getText()
                        .then(function (stayInTouchAttempt) {
                            console.log("stayInTouchAttempt: ", stayInTouchAttempt);
                            expect(stayInTouchAttempt).to.contain("Was an attempt made to get in touch?");
                        })
                })
        })
    },

    togglestrategyDiscussionDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglestrategyDiscussionDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.strategyDiscussionDetailsType), 10000)
    },

    strategyDiscussionDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.strategyDiscussionDetailsType), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.strategyDiscussionDetailsType).getText()
                .then(function (strategyDiscussionDetailsType) {
                    console.log("strategyDiscussionDetailsType: ", strategyDiscussionDetailsType);
                    expect(strategyDiscussionDetailsType).to.contain("Discussion type");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.strategyDiscussionDetailsMeeting).getText()
                        .then(function (strategyDiscussionDetailsMeeting) {
                            console.log("strategyDiscussionDetailsMeeting: ", strategyDiscussionDetailsMeeting);
                            expect(strategyDiscussionDetailsMeeting).to.contain("Meeting type");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.strategyDiscussionDetailsDate).getText()
                        .then(function (strategyDiscussionDetailsDate) {
                            console.log("strategyDiscussionDetailsDate: ", strategyDiscussionDetailsDate);
                            expect(strategyDiscussionDetailsDate).to.contain("Date and time of discussion");
                        })
                })
        })
    },

    togglesummaryOfSectionEnquiryComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglesummaryOfSectionEnquiry).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.summaryOfSectionEnquiry), 10000)
    },

    summaryOfSectionEnquirycomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.summaryOfSectionEnquiry), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.summaryOfSectionEnquiry).getText()
                .then(function (summaryOfSectionEnquiry) {
                    console.log("summaryOfSectionEnquiry: ", summaryOfSectionEnquiry);
                    expect(summaryOfSectionEnquiry).to.contain("Summary of section 47 enquiry");
                })
        })
    },

    togglesupportComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglesupport).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.support), 10000)
    },

    supportcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.support), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.support).getText()
                .then(function (support) {
                    console.log("support: ", support);
                    expect(support).to.contain("Support");
                })
        })
    },

    togglesuspectDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglesuspectDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.suspectDetails), 10000)
    },

    suspectDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.suspectDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.suspectDetails).getText()
                .then(function (suspectDetails) {
                    console.log("suspectDetails: ", suspectDetails);
                    expect(suspectDetails).to.contain("Suspect details");
                })
        })
    },

    toggletrainingComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggletraining).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.trainingInfo), 10000)
    },

    trainingcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.trainingInfo), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.trainingInfo).getText()
                .then(function (trainingInfo) {
                    console.log("trainingInfo: ", trainingInfo);
                    expect(trainingInfo).to.contain("No training information present");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.trainingApplied).getText()
                        .then(function (trainingApplied) {
                            console.log("trainingApplied: ", trainingApplied);
                            expect(trainingApplied).to.contain("Have you applied to training ?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.trainingPersonal).getText()
                        .then(function (trainingPersonal) {
                            console.log("trainingPersonal: ", trainingPersonal);
                            expect(trainingPersonal).to.contain("Personal adviser");
                        })
                })
        })
    },

    toggletypeOfVisitComponent: function () {
        driver.findElement(page.testingForm_page.elements.toggletypeOfVisit).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.typeOfVisit), 10000)
    },

    typeOfVisitcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.typeOfVisit), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.typeOfVisit).getText()
                .then(function (typeOfVisit) {
                    console.log("typeOfVisit: ", typeOfVisit);
                    expect(typeOfVisit).to.contain("Type of Visit");
                })
        })
    },

    togglevisitDetailsComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglevisitDetails).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.visitDetails), 10000)
    },

    visitDetailscomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.visitDetails), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.visitDetails).getText()
                .then(function (visitDetails) {
                    console.log("visitDetails: ", visitDetails);
                    expect(visitDetails).to.contain("Visit details");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsDate).getText()
                        .then(function (visitDetailsDate) {
                            console.log("visitDetailsDate: ", visitDetailsDate);
                            expect(visitDetailsDate).to.contain("Date and time");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsType).getText()
                        .then(function (visitDetailsType) {
                            console.log("visitDetailsType: ", visitDetailsType);
                            expect(visitDetailsType).to.contain("Visit type");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsReason).getText()
                        .then(function (visitDetailsReason) {
                            console.log("visitDetailsReason: ", visitDetailsReason);
                            expect(visitDetailsReason).to.contain("Reason for delay");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsUnannounced).getText()
                        .then(function (visitDetailsUnannounced) {
                            console.log("visitDetailsUnannounced: ", visitDetailsUnannounced);
                            expect(visitDetailsUnannounced).to.contain("Unannounced visit");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsLocation).getText()
                        .then(function (visitDetailsLocation) {
                            console.log("visitDetailsLocation: ", visitDetailsLocation);
                            expect(visitDetailsLocation).to.contain("Location of visit");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsChronology).getText()
                        .then(function (visitDetailsChronology) {
                            console.log("visitDetailsChronology: ", visitDetailsChronology);
                            expect(visitDetailsChronology).to.contain("Add to chronology?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsSuccessful).getText()
                        .then(function (visitDetailsSuccessful) {
                            console.log("visitDetailsSuccessful: ", visitDetailsSuccessful);
                            expect(visitDetailsSuccessful).to.contain("Visit successful?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsPeopleUndertaking).getText()
                        .then(function (visitDetailsPeopleUndertaking) {
                            console.log("visitDetailsPeopleUndertaking: ", visitDetailsPeopleUndertaking);
                            expect(visitDetailsPeopleUndertaking).to.contain("People undertaking the visit");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsPeopleMet).getText()
                        .then(function (visitDetailsPeopleMet) {
                            console.log("visitDetailsPeopleMet: ", visitDetailsPeopleMet);
                            expect(visitDetailsPeopleMet).to.contain("People met during the visit");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsPeopleExpected).getText()
                        .then(function (visitDetailsPeopleExpected) {
                            console.log("visitDetailsPeopleExpected: ", visitDetailsPeopleExpected);
                            expect(visitDetailsPeopleExpected).to.contain("People you expect to meet during the visit");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitDetailsNotes).getText()
                        .then(function (visitDetailsNotes) {
                            console.log("visitDetailsNotes: ", visitDetailsNotes);
                            expect(visitDetailsNotes).to.contain("Notes of the visit");
                        })
                })
        })
    },

    togglevisitListComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglevisitList).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.visitListDue), 10000)
    },

    visitListcomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.visitListDue), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.visitListDue).getText()
                .then(function (visitListDue) {
                    console.log("visitListDue: ", visitListDue);
                    expect(visitListDue).to.contain("Visit due date");
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListCompleted).getText()
                        .then(function (visitListCompleted) {
                            console.log("visitListCompleted: ", visitListCompleted);
                            expect(visitListCompleted).to.contain("Visit completed on");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListLink).getText()
                        .then(function (visitListLink) {
                            console.log("visitListLink: ", visitListLink);
                            expect(visitListLink).to.contain("Link to form");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListReason).getText()
                        .then(function (visitListReason) {
                            console.log("visitListReason: ", visitListReason);
                            expect(visitListReason).to.contain("Reason child or young person not visited on time");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListMeasures).getText()
                        .then(function (visitListMeasures) {
                            console.log("visitListMeasures: ", visitListMeasures);
                            expect(visitListMeasures).to.contain("Measures put in place to address the issue");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListName).getText()
                        .then(function (visitListName) {
                            console.log("visitListName: ", visitListName);
                            expect(visitListName).to.contain("Name");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListSeen).getText()
                        .then(function (visitListSeen) {
                            console.log("visitListSeen: ", visitListSeen);
                            expect(visitListSeen).to.contain("Child or young person seen alone?");
                        })
                })
                .then(function () {
                    return driver.findElement(page.testingForm_page.elements.visitListBedroom).getText()
                        .then(function (visitListBedroom) {
                            console.log("visitListBedroom: ", visitListBedroom);
                            expect(visitListBedroom).to.contain("Child or young person's bedroom seen?");
                        })
                })
        })
    },

    togglevulnerabilityComponent: function () {
        driver.findElement(page.testingForm_page.elements.togglevulnerability).click()
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.vulnerability), 10000)
    },

    vulnerabilitycomponentVisible: function () {
        return driver.wait(until.elementsLocated(page.testingForm_page.elements.vulnerability), 10000).then(function () {
            return driver.findElement(page.testingForm_page.elements.vulnerability).getText()
                .then(function (vulnerability) {
                    console.log("vulnerability: ", vulnerability);
                    expect(vulnerability).to.contain("Vulnerability");
                })
        })
    },


}