Feature: As a manager able to verify Data Quality Check Widget

# @dataQualityCheck @   @L3
    Scenario: As a manager able to create new case for DQC and verify
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # When I create a new person
        # Then I should see case facet with all the widgets

        And I navigate to Contact Record form

        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record

        #  And I verify Primary Support Reason in Contact Record
        And I approach to provide next steps options
        And I select "-Referral" from next steps list
        And I search and select team as "Me" in next step
        # #  And I select priority in next step

        And I submit the Form for Manager Approval
        And I should see case facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I navigate to Forms from Person page
        And I should see and select "Referral" Owned by "TeamManager1" from "Team1" with status "NEW"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        # And I Submit the form

        And I provide Contactor Details in Referral Form

        And I Submit the form
        #And I approach to provide next steps options
        And I select "-S47 Enquiry" from next steps list
        And I search and select team as "Team1" in next step
        And I submit the Form as a Manager
        Then I should see case facet with all the widgets

        Then I navigate to Forms from Person page
        And I should see and select "S47Enquiry" Owned by "Team1" with status "NEW"

        #When I navigate to S47Enquiry form 
        When I search for the unique person and select
        And I set the Start date for Form
        Then I provide the enquiry details
        Then I provide the views details
        And I approach to provide next steps options
        And I select "-Conference" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form as a Manager
        Then I submit the Form for Manager Approval
        Then I search for the unique person and select
        Then I navigate to Forms from Person page
        And I should see "S47 Enquiry" Owned by "TeamManager1" from "Team2" with status "APPROVED"
        When I search for the unique person and select
        And I verify the DQC for S47Enquiry Form
        Then I submit the missing soft mandatory information
        Then I verify the DQC Completed Information
        When I search for the unique person and select
