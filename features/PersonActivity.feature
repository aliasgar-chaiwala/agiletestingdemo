Feature: Person activity widget

@regression
    Scenario: As a team manager able to verify the activity widget
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person2
        Then I should be taken to team manager dashboard
        And I search for the unique person2 and select
        Then I should see case facet with all the widgets

        # When I create a new person2
        # And I should see person facet with all the widgets
        
        Then I should not see "Default Link" Event on facet
        Then I verify single assessment Form
        And I fill Assessment Details on single assessment form
        Then I choose Next Step with Team and Priority
        Then I submit the Form for Manager Approval 
        When I search for the unique person2 and select
        Then I validate the person activity widget 
