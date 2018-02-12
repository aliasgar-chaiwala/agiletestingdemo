
Feature: Permanence Plan 

 @regression
    Scenario: Creating Permanence Plan
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Permanence Plan" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I check to see autosave functionality
        Then I should see component "Background Information"

        @regression
        Scenario: Date of decision for adoption should not accept a future date
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Plan" form from Journeys "Child In Care Process"
        And I approach to Permanence details in Child In Care Plan
        Then I verify that Date of decision for adoption should not accept a future date