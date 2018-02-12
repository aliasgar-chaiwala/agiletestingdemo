
Feature: Contact Arrangement
@sanity   @regression
    Scenario: Creating Contact Arrangement
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard

        Then I create a new API placement person
        Then I should be taken to social worker dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets

        When I navigate to Contact Arrangements
        Then I should see the Contact Arrangements page

        And I proceed to create new Contact Arranagements


        And I provide Contact Arrangements required details

        And I Add the Contact Arranagements

        Then I should see Contact Arranagements Details FOR

        When I search for the placement person and select

        And I navigate to Contact Arrangements

        Then I should see Contact Arranagements Details TO