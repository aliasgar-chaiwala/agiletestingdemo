Feature:  Group
I want to Create Group of Persons/Cases
        #takes sec to run on local
        #takes  sec to run on vm
    @sanity   @regression
    Scenario: Create a group
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard

        # Then I create a new person
        # Then I should see person facet with all the widgets

        Then I create a new API person1
        Then I should be taken to team manager dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets

        # When I create a new person1
        # Then I should see person1 name on person facet
        # And I should see person facet with all the widgets

        Then I navigate to create group page
        And I should see create group page
        Then I create a group between unique person and person1
        Then I should group details on group facet

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should see group details on person facet

        Then I search and select created group
        Then I should group details on group facet
