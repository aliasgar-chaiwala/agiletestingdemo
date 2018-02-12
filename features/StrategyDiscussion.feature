@StrategyDiscussion
Feature: Strategy Discussion

    @regression
    Scenario: Adding Strategy Discussion
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        And I navigate to "Child Protection Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Strategy Discussion" form from Journeys "Child Protection Process"

        #And I navigate to Strategy Discussion form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Strategy discussion details on Strategy Discussion form

        And I approach to provide next steps options
        And I select "Other-S47 Enquiry" from next steps list
        And I search and select team as "Me" in next step
        #   And I select priority in next step
        And I approach to add action in next step
        And I set Action details in next step to "Team1"
        And I set the Authorization or Rejection date for Form
        Then I submit the Form as a Manager
        Then I submit the Form as a Manager       

        # Then I should be taken to team manager dashboard

        # When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "S47 Enquiry" Owned by "TeamManager1" from "Team1" with status "NEW"
        And I should see "Strategy Discussion" Owned by "TeamManager1" from "Team1" with status "APPROVED"

        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should see event for "Health information added" on personfacet
        Then I should see event for "Strategy discussion approved" on personfacet
        Then I should see event for "Strategy discussion allocated" on personfacet
        Then I should see event for "Child protection enquiry allocated" on personfacet
        

        Then I navigate to tasks page

        Then I switch task view to "Team tasks"
        Then I should see created team task for "Team1"
        And I own the team task for "Team1"
        Then I mark team task for "Team1" done