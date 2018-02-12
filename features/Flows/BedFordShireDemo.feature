@BedfordShireFlow
Feature: BedFordShire Demo Flow

@BedFordShireAddPerson
    Scenario: Adding person for BedFordShire Flow
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I create a new person
        Then I should see person facet with all the widgets
        #CREATE_NEWPERSON1
        When I create a new person1
        Then I should see person1 name on person facet
        And I should see person facet with all the widgets
        #CREATE_NEWPERSON2
        When I create a new person2
        Then I should see person2 name on person facet
        And I should see person facet with all the widgets
        #CREATE_NEWPLACEMENTPERSON
        When I create a new placement person
        Then I should see placement person name on person facet
        And I should see person facet with all the widgets
        #CREATE_NEWPERSON3
        When I create a new person3
        Then I should see person3 name on person facet
        And I should see person facet with all the widgets

        #SEARCH
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to Education details

        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I should see Finance with budget, contributions and provisions


        @HasedOut
    Scenario: Fill Contact record form with child in need team in next step
        Given I am on the socialcare login page
        #for stockton
        #team1 SW1 and then team2 SW3 are same login user with diff team
        #for auto1
        #--------auto.testersw1@example.com---------team1 and team2
        When I login to "Team1" as "SocialWorker2"
        Then I should be taken to social worker dashboard
        When I search for the placement person and select
        And I navigate to Contact Record form
        Then I should see placement person in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record
        And I approach to provide next steps options
        And I select "Adult Safeguarding Process-Adult Safeguarding Plan" from next steps list
        And I search and select team as "Team1" in next step
        # And I select priority in next step
        And I submit the Form for Manager Approval
        Then I should be taken to social worker dashboard

        @HasedOutResult
    Scenario: verify hased out data in Adult team
        Given I am on the socialcare login page
        When I login to "Team4" as "SocialWorker1"
        And I should be taken to social worker dashboard
        When I search for the placement person and select
        Then I should see information with confidentiality message

        @verify
    Scenario: Fill Contact record form and validating person details provided while adding new person

        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record
        And I provide multiple Alleged abuse category details

        And I approach to provide next steps options
        And I select "Adult Safeguarding Process-Adult Safeguarding Plan" from next steps list
        And I search and select team as "Me" in next step
        #And I select priority in next step
        And I submit the Form for Manager Approval

        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I navigate to Forms from Person page
        And I should see and select "Contact Record" Owned by "SocialWorker1" from "Team1" with status "COMPLETED"
        Then I should see unique person in Subject of form
        And I should see two versions of Contact record Form

        #  And I verify person details in Contact Record Form
        @professionalOrganisation
    Scenario: Creating Professional & Organisation
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
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

        @Service
    Scenario: Add Service for Plan
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        And I add new Service Provider
        Then I add new Service


        @CreatePlan @Bug56000
    Scenario: Adult SafeGuarding Plan creation by SW which need to be approved by elivated manager only
        Given I am on the socialcare login page
        #team1 - sw1 to request, then team1 tm1, then team1 tm0 will be elivated
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "NEW"
        And I should see Adult Safeguarding Plan
        Then I should see unique person in Subject of plan
        And I set the Start date for Form
        And I verify the Needs, Risks and Strengths options
        And I choose to add Risk details
        And I choose to add Outcome details by linking Risks
        And I choose to add Action details by linking Outcomes
        And I choose to add Service details by linking Actions
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I should see risk name on person context
        Then I navigate to Plans from Person page
        And I should see "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"

        @disableActionButton
    Scenario: Adult Safeguarding Plan verification for immediate manager
        Given I am on the socialcare login page
        #team1 - sw1 to request, then team1 tm1, then team1 tm0 will be elivated
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        #click on plan
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I should see Adult Safeguarding Plan
        Then I should see unique person in Subject of plan
        And I should see Disabled Action Button

        @approveByElevatedManager
    Scenario: Adult SafeGuarding Plan approve by elevated
        Given I am on the socialcare login page
        #team1 - sw1 to request, then team1 tm1, then team1 tm2 will be elivated
        When I login to "Team1" as "TeamManager2"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        #click on plan
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I should see Adult Safeguarding Plan
        Then I should see unique person in Subject of plan
        And I approve the Form sent by Social Worker
        Then I should be taken to team manager dashboard

        @verifyProvision
    Scenario: Verify Provision created from Adult Safeguarding Plan
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Provision
        And I verify the Provision created from Adult Safeguarding Plan

        @CaseAllocation
    Scenario: As a team manager able to allocte the case to other social worker
        Given I am on the socialcare login page
        When I login to "Team3" as "TeamManager2"
        Then I should be taken to team manager dashboard
        When I search for the unique person3 and select
        And I should see person facet with all the widgets
        Then I verify single assessment Form
        # And I add Assessemnt start date details
        And I set the Start date for Form
        And I fill Assessment Details on single assessment form
         And I approach to provide next steps options
        And I select "-Conference" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form as a Manager 
        When I search for the unique person3 and select
        Then I navigate to Forms from Person page
        And I should see and select "Single Assessment" Owned by "TeamManager2" from "Team3" with status "APPROVED"
        Then I verify unassigned workload and allocte case3 to "SocialWorker1" of "Team3"

        @caseLoadVerificationForLTCTeam
    Scenario: As a social worker able to verify the allocted case
        Given I am on the socialcare login page
        When I login to "Team3" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I verify the allocated person3 case under Case Load Screen

        @caseLoadVerificationForCINTeam
    Scenario: As a social worker able to verify the allocted case
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker2"
        Then I should be taken to social worker dashboard
        Then I verify the allocated person3 not available on Case Load Screen

        @createMessage
    Scenario: As a social worker able to send message to manager
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I navigate to Messages
        When I create new message to "Team2" Manager "TeamManager1"

        @verifyCreatedMessage
        Scenario: As a Manger able to see messages
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I navigate to Messages
        And I should see the unique Messages
        Then I choose reply the message


        @verifySentMessage
    Scenario: As a Social Worker able to see replay message
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I navigate to Messages
        Then I verify the reply Message Visible

        @createAppointments
        Scenario: As a Social Worker able to create new appointments
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I navigate to Appointments
        Then I add new unique appointment
        And I verify the created unique appointment

        @addBudget
    Scenario: As a Social Worker able to add agreed and indicative amount
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I navigate to Finance Personal Budget
        And I add new personal budget
        When I choose recurring payment method as cheque
        Then I choose provision and create personal budget
        Then I should see created budget amount on personal budget page

        @updateBudget
    Scenario: As a Manager able to update agreed and indicative amount
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I navigate to Finance Personal Budget
        Then I should see created budget amount on personal budget page
        When I update the agreed amount
        Then I should see updated agreed amount on personal budget page

        @addEquipment
    Scenario: As a user able to add the equipment for new person
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
         #When I create a new person2
         #Then I should see person2 name on person facet
         #And I should see person facet with all the widgets
        When I search for the unique person2 and select
        And I should see person facet with all the widgets
		Then I navigate to Equipments
		And I add new Equipment with category
		Then I create equipment with returned date	
		Then I should see created equipment available on equipment page	
		When I update created equipment with service date
		Then I should see updated service equipment available on equipment page