@CaseTransfer
Feature: Case Transfer

    @regression
    Scenario: Transfer the case to other social worker
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team2"
        Then I create a new API person1
        Then I should be taken to team manager dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet      
        And I navigate to "Adult Safeguarding Process"
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I verify unassigned workload and allocte case1 to "TeamManager1" of "Team2" 
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I navigate to "Case Transfer Request"
        And I should see Transfer form
        And I check to see autosave functionality
        When I search for the unique person1 and select
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Case Transfer Request" Owned by "TeamManager1" from "Team2" with status "IN PROGRESS"
        And I should see unique person1 in Subject of form
        And I set the Start date for Form
        And I fill details in Transfer form
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        Then I submit the Form as a Manager
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I should see event for "Case transfer request allocated" on personfacet
        Then I should see event for "Case transfer request approved" on personfacet
        And I navigate to myteamapp from dashboard
        And I expand the "TeamManager1" block of "Team2" to see cases
        And I transfer the unique "person1" case
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        And I should see the transfer case owner information under case summary