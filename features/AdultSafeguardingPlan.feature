Feature: Adult Safeguarding Plan

   @regression
     Scenario: Adult Safegurading plan request through Social Worker
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Adult Safeguarding Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Adult Safeguarding Plan" form from Journeys "Adult Safeguarding Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I approach to provide next steps options
        And I select "Other-S47 Enquiry" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I logout from application
        And I navigate back in browser

        # Scenario: Adult Safeguarding Plan notification verification and Approving plan - TM
        #     Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I navigate to notifications
        Then I should see "Adult Safeguarding Plan" plan notification for Approval Request
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I approach to provide next steps options
        And I approve the Form sent by Social Worker
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "APPROVED"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "APPROVED"
        And I logout from application
        And I navigate back in browser

        #     @planNotificationSW 
        # Scenario: Verifying Adult Safegurading plan approved notification SW
        #     Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I navigate to notifications
        And I should see "Adult Safeguarding Plan" plan notification for Approved Request



         @regression
    Scenario: Creating adult safeguarding plan with multiple services
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #CREATE PROFESSIONAL
        ##When I create a new Professional
        ##Then I should be taken to team manager dashboard
        # #SEARCH PROFESSIONAL ---------------------------Not needed as checking if navigates back to dashboard
        # When I search for the professional and select
        # Then I should see professional page with all the widgets
        #CREATE ORGANISATION
        ##When I create a new Organisation
        ##Then I should be taken to team manager dashboard
        # #SEARCH ORGANISATION---------------------------Not needed as checking if navigates back to dashboard
        # When I search for the organisation and select
        # Then I should see organisation page with all the widgets
        ##And I add new Service Provider
        ##Then I add new Service
        ##Then I add another Service
        ##And I click on home to navigate to dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        Then I create a new API person1
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        ##Then I should be taken to team manager dashboard
        ##When I search for the unique person1 and select
        ##Then I should see person facet with all the widgets
        ##When I search for the unique person and select
        ##Then I should see person facet with all the widgets
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record
        #  And I verify Primary Support Reason in Contact Record
        And I approach to provide next steps options
        And I select "Other-Referral" from next steps list
        And I search and select team as "Me" in next step
        #  And I select priority in next step
        And I submit the Form for Manager Approval
        When I search for the unique person and select
        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to Forms from Person page
        And I should see and select "Referral" Owned by "TeamManager1" from "Team1" with status "NEW"
        # When I create a new person
        # Then I should see person facet with all the widgets
        #And I navigate to "Referral"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I set the deadline date for Form
        #And I provide Contactor Details in Referral Form
        #And I provide multiple Alleged abuse category details     
        #And I submit the Form for Manager Approval
        And I approach to provide next steps options
        And I select "Adult Safeguarding Process-Strategy Discussion" from next steps list
        And I search and select team as "Me" in next step
        And I set the Authorization or Rejection date for Form
        And I Submit the form
        #Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Adult Safeguarding Plan" form from Journeys "Adult Safeguarding Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I verify the Needs, Risks and Strengths options
        And I choose to add Risk details
        And I choose to add Outcome details by linking Risks
        And I choose to add Action details by linking Outcomes
        # #    And I choose to add Service1 details by linking Actions
        # #    And I choose to add Service2 details by linking Actions
        And I choose to add Service details by linking Actions
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        Then I submit the Form as a Manager
        #Then I should be taken to team manager dashboard
        #When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see "Adult Safeguarding Plan" Owned by "TeamManager1" from "Team1" with status "APPROVED"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Placement
        And I verify Service details while providing new Placement Details
        And I create the placement
        Then I verify the created Placement details
        And I logout from application
        And I navigate back in browser
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I navigate to Placement
        Then I verify the created Placement details
        When I edit the placement with provision amount
        Then I verify the created Placement details
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "TeamManager1" from "Team1" with status "APPROVED"
        Then I set to Review 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "TeamManager1" from "Team1" with status "IN PROGRESS"
        And I verify the Needs, Risks and Strengths options
        Then I should see updated placement with provision amount