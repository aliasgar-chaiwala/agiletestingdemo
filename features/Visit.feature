Feature: Visit Form

    @regression
    Scenario: Add Visit Form
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        And I navigate to "Child Protection Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Visit" form from Journeys "Child Protection Process"

        # When I create a new person
        # Then I should see person facet with all the widgets
        # Then I should not see "Default Link" Event on facet

        #And I navigate to "Visit"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        #1
        And I provide Visit Information
        And I provide the observations information   
        And I approach to provide next steps options
        And I select "Child Protection Process-Strategy Discussion" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval
        # Then I should be taken to social worker dashboard

        When I search for the unique person and select
        Then I should see event for "Child visit allocated" on personfacet
        Then I should see event for "Statutory visit" on personfacet
        Then I should see event for "Statutory visit to a child on a child in protection plan took place" on personfacet
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Visit" Owned by "SocialWorker1" from "Team1" with status "COMPLETED"

