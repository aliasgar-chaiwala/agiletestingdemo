Feature: Placement Flow

 @regression
    Scenario: Adding Org & Service Provider for Placement Flow
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        # --------------------------------------adding person not required in this scenario
        # When I create a new person
        # Then I should see person facet with all the widgets
        # Then I should not see "Default Link" Event on facet

        #CREATE PROFESSIONAL
        When I create a new Professional
        Then I should be taken to social worker dashboard
        #SEARCH PROFESSIONAL
        When I search for the professional and select
        Then I should see professional page with all the widgets
        #CREATE ORGANISATION
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        #SEARCH ORGANISATION
        When I search for the organisation and select
        Then I should see organisation page with all the widgets

        And I add new Service Provider
        Then I add new Service

     @regression
    Scenario: Create the case & add placement with service provider 
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # And I navigate to "Adult Safeguarding Full Investigation" form from Journeys "Adult Safeguarding Process"

        # And I navigate to "Referral"
        # Then I should see unique person in Subject of form
        # And I set the Start date for Form
        # And I set the deadline date for Form
        # And I provide Contactor Details in Referral Form
        # And I provide multiple Alleged abuse category details     
        # And I submit the Form for Manager Approval
        # #And I approach to provide next steps options
        # And I select "Child Protection Process-Strategy Discussion" from next steps list
        # And I search and select team as "Team2" in next step
        # And I submit the Form as a Manager
        # # Then I should be taken to team manager dashboard

        # # When I search for the unique person and select
        # Then I should see case facet with all the widgets

        Then I navigate to Placement
        And I provide Placement Details
        And I provide Placement provider Details
        Then I provide Provision for Placement
        And I create the placement

        Then I verify the created Placement details

        @regression
    Scenario: Verify Provision created from Placement
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Provision
        And I verify the Provision created from Placement
 
 @regression
    Scenario: Adult SafeGuarding Plan creation by SW which need to be approved by elivated manager only
        Given I am on the socialcare login page
        #team1 - sw1 to request, then team1 tm1, then team1 tm0 will be elivated
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        And I navigate to "Child Protection Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "CP Plan" form from Journeys "Child Protection Process"
        # And I navigate to "Child Protection Plan"

        Then I should see unique person in Subject of plan
        And I set the Start date for Form
        And I verify the Needs, Risks and Strengths options
        And I choose to add Risk details
        And I choose to add Outcome details by linking Risks
        And I choose to add Action details by linking Outcomes
        And I choose to select Placement Service details by linking Actions
        And I approach to provide next steps options
        And I select "Other-S47 Enquiry" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval
        # Then I should be taken to social worker dashboard
        # When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I should see risk name on person context
        Then I navigate to Plans from Person page
        And I should see "Child Protection Plan" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

        @regression
    Scenario: Child Protection Plan approve by elevated
        Given I am on the socialcare login page
        #team1 - sw1 to request, then team1 tm1, then team1 tm2 will be elivated
        When I login to "Team2" as "TeamManager2"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Plans from Person page
        #click on plan
        And I should see and select "Child Protection Plan" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

        Then I should see unique person in Subject of plan
        And I approve the Form sent by Social Worker
        #Then I should be taken to team manager dashboard
        #When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see "Child Protection Plan" Owned by "SocialWorker1" from "Team2" with status "APPROVED"


        @regression
    Scenario: Verify Provision updated and Placement updates from Child Protection Plan
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Placement
        And I verify the Placement updated from Child Protection Plan

        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Provision
        And I verify the Provision updated from Child Protection Plan