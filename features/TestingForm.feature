
Feature: Testing Form for all components

    Scenario: Verify Testing Form components visibility
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        # Then I create a new API person
        # Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Testing Form"

        Then I should see unique person in Subject of form

        Then I should see component "accommodationDetails"
        And I verify the accommodationDetails component details

        Then I should see component "actionTaken"
        And I verify the actionTaken component details

        Then I should see component "adultmeetingNotes"
        And I verify the adultmeetingNotes component details

        Then I should see component "agencies"
        And I verify the agencies component details

        Then I should see component "allegedAbuse"
        And I verify the allegedAbuse component details

        Then I should see component "analysis"
        Then I should see component "appointments"
        Then I should see component "assessmentDetails"

        And I verify the assessmentDetails component details

        Then I should see component "attachments"
        And I verify the attachments component details

        Then I should see component "bankAccountDetails"
        And I verify the bankAccountDetails component details

        Then I should see component "bedroomSeen"
        And I verify the bedroomSeen component details

        Then I should see component "careerAdvice"

        Then I should see component "caringResponsibility"
        And I verify the caringResponsibility component details

        Then I should see component "chairsSummary"
        And I verify the chairsSummary component details

        Then I should see component "childInNeed"
        Then I should see component "childProtectionConcernDetails"

        Then I should see component "childYoungPersonAnalysis"
        And I verify the childYoungPersonAnalysis component details

        Then I should see component "comments"
        And I verify the comments component details

        Then I should see component "communication"
        And I verify the communication component details

        Then I should see component "conferenceDetails"
        And I verify the conferenceDetails component details

        Then I should see component "conferenceDetailsForm"
        And I verify the conferenceDetailsForm component details

        Then I should see component "conferenceRecommendations"
        And I verify the conferenceRecommendations component details

        Then I should see component "conferenceReportBackground"
        And I verify the conferenceReportBackground component details

        Then I should see component "connections"
        And I verify the connections component details

        Then I should see component "contactLog"
        And I verify the contactLog component details

        Then I should see component "contactor"
        And I verify the contactor component details

        Then I should see component "contingencyPlan"
        And I verify the contingencyPlan component details

        Then I should see component "dateOfVisit"
        And I verify the dateOfVisit component details

        Then I should see component "decisionsTaken"
        And I verify the decisionsTaken component details

        Then I should see component "determination"
        And I verify the determination component details

        Then I should see component "disabilities"

        Then I should see component "dissentingViews"
        And I verify the dissentingViews component details

        Then I should see component "education"
        And I verify the education component details

        Then I should see component "employment"
        And I verify the employment component details

        Then I should see component "factors"
        And I verify the factors component details

        Then I should see component "familyViews"
        And I verify the familyViews component details

        Then I should see component "impactonChild"
        And I verify the impactonChild component details

        Then I should see component "informationSharing"
        And I verify the informationSharing component details

        Then I should see component "investigationDetails"
        And I verify the investigationDetails component details

        Then I should see component "medicalConditions"
        And I verify the medicalConditions component details

        Then I should see component "medications"
        And I verify the medications component details

        Then I should see component "meetingNotes"
        And I verify the meetingNotes component details

        Then I should see component "mentalCapacityAssessment"
        And I verify the mentalCapacityAssessment component details

        Then I should see component "minutesOfConference"
        And I verify the minutesOfConference component details

        Then I should see component "observations"

        Then I should see component "otherSubjectDetails"
        And I verify the otherSubjectDetails component details

        Then I should see component "oversight"
        And I verify the oversight component details

        Then I should see component "parentingCapacityOfParents"
        And I verify the parentingCapacityOfParents component details

        Then I should see component "participantsInDiscussion"
        And I verify the participantsInDiscussion component details

        Then I should see component "passportDetails"
        And I verify the passportDetails component details

        Then I should see component "personPosingRisk"
        Then I should see component "professionalAgencyVisit"

        Then I should see component "professionalViews"
        And I verify the professionalViews component details

        Then I should see component "reason"
        And I verify the reason component details

        Then I should see component "recommendations"
        And I verify the recommendations component details

        Then I should see component "referenceChecks"
        And I verify the referenceChecks component details

        Then I should see component "returnInterview"
        Then I should see component "riskCalculation"
        And I verify the riskCalculation component details

        Then I should see component "riskProtectiveFactors"
        And I verify the riskProtectiveFactors component details

        Then I should see component "risks"
        And I verify the risks component details

        Then I should see component "routine"
        And I verify the routine component details

        Then I should see component "safeguardingConcerns"
        Then I should see component "safeguardingConcernsDetails"
        And I verify the safeguardingConcernsDetails component details

        Then I should see component "serafInformation"
        And I verify the serafInformation component details

        Then I should see component "servicesAndInterventions"
        And I verify the servicesAndInterventions component details

        Then I should see component "stayInTouch"
        And I verify the stayInTouch component details

        Then I should see component "strategyDiscussionDeadline"
        Then I should see component "strategyDiscussionDetails"
        And I verify the strategyDiscussionDetails component details

        Then I should see component "summaryOfSectionEnquiry"
        And I verify the summaryOfSectionEnquiry component details

        Then I should see component "support"
        And I verify the support component details

        Then I should see component "suspectDetails"
        And I verify the suspectDetails component details

        Then I should see component "training"
        And I verify the training component details

        Then I should see component "typeOfVisit"
        And I verify the typeOfVisit component details

        Then I should see component "visitDetails"
        And I verify the visitDetails component details

        Then I should see component "visitList"
        And I verify the visitList component details

        Then I should see component "vulnerability"
        And I verify the vulnerability component details