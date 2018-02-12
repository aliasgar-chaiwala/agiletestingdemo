Feature: Appointments

    @regression
    Scenario: Create new appointments
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Appointments
        Then I add new unique appointment
        And I verify the created unique appointment

        @regression
    Scenario:Add New Appointments using PIR Form 
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard

        #CREATE PROFESSIONAL
        When I create a new Professional
        Then I should be taken to social worker dashboard
        #CREATE ORGANISATION
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        #SEARCH ORGANISATION
       When I search for the organisation and select
       Then I should see organisation page with all the widgets

        When I search for the unique person and select
        Then I should see person facet with all the widgets
         And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see No Appointment has been recorded
        When I add a new Appointments through PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I verify the Appointments Section
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        When I verify the Appointments Section
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        #Then I should see case facet with all the widgets

         @regression
    Scenario: Add Appointments available on core data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"
        Then I should see unique person in Subject of form
        When I verify the Appointments Section
        Then I should see the Created Appointments
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I verify the Appointments Section
        Then I should see the Created Appointments
        When I delete the created appointment
        #And I check to see autosave functionality
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I verify the Appointments Section
        Then I should see the Created Appointments

        @PBI47186Scenario2
    Scenario: As a Manager Verify the PIR Form appointments 
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see the Created Appointments
        And I update the created Appointments
        #And I check to see autosave functionality
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I verify the Appointments Section
        Then I should see the Created Appointments
        When I delete the created appointment
        #When I delete the created appointment
        #And I check to see autosave functionality
        Then I should see No Appointment has been recorded

          @regression
    Scenario: Add Appointments for Two new persons using PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see No Appointment has been recorded
        #When I add a new Appointments for new person1 through PIR Form
        When I add a new Appointments through PIR Form
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should see case facet with all the widgets
        #  Then I should be taken to social worker dashboard
        #VERIFY MULTIPLE PERSONS
        Then I create a new API person
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see the created both persons appointment data
        When I delete the another person created appointment
        #When I delete the created appointment
        #When I delete the created appointment
        Then I should see No Appointment has been recorded for both persons
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        When I verify the Appointments Section
        ##Confirm the below Step
        #When I set the Take Latest under Appointments Notification
        #Then I should see the created both persons appointment data
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        #confirm the below steps
        Then I should be taken to social worker dashboard 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        #Then I should see case facet with all the widgets
        #        Then I should be taken to social worker dashboard 
        #        When I search for the unique person and select
        #        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"
        When I verify the Appointments Section
        Then I should see the created both persons appointment data


          @regression
    Scenario: Add New Appointments for Two persons using PIR Form and check pre save
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets   
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see No Appointment has been recorded
        When I add a new Appointments for new person1 through PIR Form
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I enable "coreVersionCheck" Feature
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see the created both persons appointment data
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"
        And I should see "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        When I verify the Appointments Section
        Then I should see the created both persons appointment data
        When I update the ceated Appointments
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should see Information Mismatch Notification
        Then I should see case facet with all the widgets
