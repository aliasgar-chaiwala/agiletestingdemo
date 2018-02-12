Feature: Involvement

    @regression
    Scenario: Add person Involvements
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        # Then I create a new person
        # Then I should see person facet with all the widgets
        When I create a new Professional
        When I search for the professional and select
        Then I should see professional page with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Involvement
        Then I create a new professional Involvement
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Involvement
        And I should see created Involvement for Professional under involvements

    @regression 
    Scenario: Add Team & User Involvements
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record
        And I approach to provide next steps options
        And I select "-Referral" from next steps list
        And I search and select team as "Me" in next step
        And I Submit the form

        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to Forms from Person page
        And I should see and select "Referral" Owned by "TeamManager1" from "Team1" with status "NEW"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Referral Form
        And I approach to provide next steps options
        And I select "Child Protection Process-Strategy Discussion" from next steps list
        And I search and select team as "Me" in next step
        And I set the Authorization or Rejection date for Form
        And I Submit the form
        And I should see "Strategy Discussion" Owned by "TeamManager1" from "Team1" with status "NEW"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I navigate to Involvement
        And I should see created Involvement for "TeamManager1" and "Team1"
