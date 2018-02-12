@ASFI
Feature: Adult Safeguarding Full Investigation Flow

 @regression
  Scenario: Adult Safeguarding Full Investigation Flow
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

        Then I create a new API person
        Then I should be taken to team manager dashboard

        #CREATE_NEWPERSON2
        Then I create a new API person2
        Then I should be taken to team manager dashboard

        #FirstDegreeConnection
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to connections
        Then I should see connections page
		Then I create first connection with "person2" where type as "Family" and relation as "Parent"
        And I search for the unique person and select
        Then I should see person facet with all the widgets
        And I should see connected person pill under relationship on person facet with relation as "Parent"

        And I should see "Parent" relation and parental responsibility with "person2" under Essential Information

        When I navigate to connections
        Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"

        #SEARCH
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        And I navigate to "Adult Safeguarding Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Adult Safeguarding Full Investigation" form from Journeys "Adult Safeguarding Process"

     #   And I navigate to "Adult Safeguarding Full Investigation"

        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Investigation Details in Adult Safeguarding Full Investigation
        #need to verify below step
        And I approach to provide next steps options
        And I select "Adult Safeguarding Process-Adult Safeguarding Plan" from next steps list
        #And I provide Mental capacity assessment for Health in Adult Safeguarding Full Investigation

        #And I approach to provide next steps options
        #And I select "Adult Safeguarding Process-Adult Safeguarding Plan" from next steps list
        And I search and select team as "Team1" in next step
        And I provide Mental capacity assessment for Health in Adult Safeguarding Full Investigation
        Then I approve the form
        #Then I submit the Form as a Manager
        Then I should see case facet with all the widgets

        # Then I should be taken to team manager dashboard

        # When I search for the unique person and select

        Then I should see Mental Capacity visible on person facet
        #And I should see Mental Capacity Health visible on person facet

        And I logout from application
        And I navigate back in browser

        #     @CreatePlan
        # Scenario: Adult SafeGuarding Plan auto creation of Safeguarding Mental capacity
     #Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Initial Inquiry" form from Journeys "Adult Safeguarding Process"
        Then I should see unique person in Subject of form