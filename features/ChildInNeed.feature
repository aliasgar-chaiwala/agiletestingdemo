Feature: CIN Journey

@smoke
    Scenario: Somke Test Child in Need Plan
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child in Need Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
        Then I verify child in need plan
        And I set the Start date for Form
        Then I verify all Meeting Notes fields
        And I verify the Needs, Risks and Strengths options

    @regression
    Scenario: Submit Child in Need Plan
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child in Need Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
        Then I verify child in need plan
        And I set the Start date for Form
        And I fill the meeting details 
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I Submit the form
        And I Submit the form
        When I search for the unique person and select
        Then I should see event for "Child in Need Plan Started" on personfacet
        Then I should see event for "Child in Need Plan Approved" on personfacet
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see "Child in Need Plan" Owned by "TeamManager1" from "Team2" with status "APPROVED"

          @regression1
    Scenario: Verify if a event is triggered when a plan is approved and reviewed
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child in Need Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
        Then I verify child in need plan
        And I set the Start date for Form
        And I fill the meeting details 
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I Submit the form
        And I Submit the form
        When I search for the unique person and select
        Then I should see event for "Child in Need Plan Started" on personfacet
        Then I should see event for "Child in Need Plan Approved" on personfacet
        And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
        Then I set to Review 
        #When I search for the unique person and select
        #Then I should see case facet with all the widgets
        #And I navigate to "Child in Need Process"
        And I Submit the form
        And I Submit the form
        When I search for the unique person and select
        Then I should see event for "Child in Need Plan Reviewed" on personfacet
        And I logout from application
        
    
