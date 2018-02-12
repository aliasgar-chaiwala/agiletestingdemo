Feature: LCA Process for Journeys


    Scenario: Add SA form
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        And I navigate to "Child Protection Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Single Assessment" form from Journeys "Child Protection Process"

        #Then I verify single assessment Form
        # And I add Assessemnt start date details
        Then I should see unique person in Subject of form

        #Then I verify single assessment Form
        And I set the Start date for Form
        And I fill Assessment Details on single assessment form
        And I approach to provide next steps options
        And I select "Leaving Care Process-Leaving Care Assessment" from next steps list         
        And I search and select team as "Me" in next step
        Then I Submit the form
        #I submit the Form as a Manager
        # Then I should be taken to team manager dashboard
        # When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Leaving Care Assessment" Owned by "TeamManager1" from "Team2" with status "NEW"
        And I should see "Single Assessment" Owned by "TeamManager1" from "Team2" with status "APPROVED"
        When I search for the unique person and select
        #Then I should see journeys for "Leaving Care Assessment" on personfacet
        Then I verify the start and due date for Leaving Care Process