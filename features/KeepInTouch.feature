Feature: Keep In Touch Form
Keep In Touch Form

 @regression
    Scenario: Keep In Touch Form verification & fill
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        # When I search for the unique person and select
        # Then I should see person facet with all the widgets
        # Then I should not see "Default Link" Event on facet


        And I navigate to "Leaving Care Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Keep in touch" form from Journeys "Leaving Care Process"

        #Then I navigate to "Keep in touch"
        And I should see unique person in Subject of form
        And I set the Start date for Form
        And I check to see autosave functionality
        And I should see keep in touch form
        Then I fill the Keep in touch form details

        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I Submit the form

        # When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I should see event for "Keep in touch allocated" on personfacet
        Then I should see event for "Keep in touch approved" on personfacet

