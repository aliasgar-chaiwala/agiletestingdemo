Feature: Court Order

      @regression
    Scenario: Create  court order    
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

        ####create org as court
        When I create a new Organisation as court
        Then I should be taken to team manager dashboard

        When I create a new Professional
        Then I should be taken to team manager dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I enable "courtOrder" Feature
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to court orders Page
        Then I should see Court Order Page

        Then I click new court order
        Then I should see new Court Order creation section
        Then I create new court order of type "Absolute Order"
        Then I should see created court order of type "Absolute Order"

        When I search for the unique person and select

        Then I should see person facet with all the widgets
        Then I should see created court order under case Summary Section of type "Absolute Order"

        Then I navigate to court orders Page
        Then I should see Court Order Page
        Then I should see created court order of type "Absolute Order"
        Then I expand the court order of type "Absolute Order"
        Then I edit the court order of type "Absolute Order"
        Then I should see created court order of type "Absolute Order"

        Then I expand the court order of type "Absolute Order"
        Then I should see updated requested date in court order of type "Absolute Order"

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should see created court order under case Summary Section of type "Absolute Order"


        @regression
    Scenario: Court order with grant extended & discharge details as well

        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        ####create org as court
        When I create a new Organisation as court
        Then I should be taken to team manager dashboard

        When I create a new Professional
        Then I should be taken to team manager dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I enable "courtOrder" Feature
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to court orders Page
        Then I should see Court Order Page
        Then I click new court order
        Then I should see new Court Order creation section

        Then I create new court order with grant of type "Absolute Order"
        Then I should see created court order with grant of type "Absolute Order"

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should see created court order under case Summary Section of type "Absolute Order"

        @regression
    Scenario: Court Order extended but not discharged 
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        ####create org as court
        When I create a new Organisation as court
        Then I should be taken to team manager dashboard

        When I create a new Professional
        Then I should be taken to team manager dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I enable "courtOrder" Feature
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to court orders Page
        Then I should see Court Order Page
        Then I click new court order
        Then I should see new Court Order creation section

        Then I create new court order not discharged of type "Absolute Order"
        Then I should see created court order not discharged of type "Absolute Order"

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should see created court order under case Summary Section of type "Absolute Order"
