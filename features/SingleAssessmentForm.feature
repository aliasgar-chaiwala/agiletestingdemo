Feature: Single Assessment Form

   @regression
    Scenario: As a social worker able to submit the form for manager approval
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child Protection Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Single Assessment" form from Journeys "Child Protection Process"

        Then I should see unique person in Subject of form
        # Then I verify single assessment Form
        And I set the Start date for Form
        And I set the deadline date for Form
        And I fill Assessment Details on single assessment form
        Then I set Reason for delay in Assessment Details
        And I fill "Alcohol misuse" as category and "1A" as factor for Factors Identified for assessment

        And I approach to provide next steps options
        And I select "Child Protection Process-Visit" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form for Manager Approval 
        # When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I should see event for "Single assessment allocated" on personfacet
        Then I should see event for "Single Assessment SFA" on personfacet

        Then I navigate to Forms from Person page
        And I should see "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

       @regression 
    Scenario: As a social worker able to submit the form for manager approval
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I navigate to Forms from Person page
        And I should see and select "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

        Then I should see unique person in Subject of form

        And I Reject the Form sent by Social Worker

        And I should see "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"

          @regression
    Scenario: As a social worker able to submit the form for manager approval
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I navigate to Forms from Person page
        And I should see and select "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"

        Then I should see unique person in Subject of form

        And I verify the Rejection Date