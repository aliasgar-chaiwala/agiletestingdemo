Feature: Verify Supervisions fnctionality @L4

@supervision @webclient @personalinformation
    Scenario: Supervision Functionality
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I navigate to My profile
        And I should see profile for "TeamManager1" of "Team2"

        And I navigate to Supervision
        And I create a new supervision for "TeamManager1" of "Team2"
        Then I should see the creted supervision for "TeamManager1" of "Team2"

        Then I should see last supervised details

        # And I navigate to myteamapp from dashboard
        # And I expand the "TeamManager1" block of "Team2" to see cases

        # And I click on home to navigate to dashboard
        # Then I should be taken to team manager dashboard
