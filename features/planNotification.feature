Feature: Notification for plan Approval

     @regression
    Scenario: As a social worker able to submit the plan and verify the notification 
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        And I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"
        And I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to "CP Plan" form from Journeys "Child Protection Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I fill the meeting details 
        And I approach to provide next steps options
        And I select "No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        And I submit the Form for Manager Approval
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see "Child Protection Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"

    @regression
    Scenario: As a manager able to verify the plan notification sent by social worker
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
       # Then I navigate to notifications
        #And I should see plan notification for Approval Request
        #Then I should see unique person in Subject of form
        Then I navigate to Plans from Person page
        And I should see and select "Child Protection Plan" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I set the Start date for Form
        And I approach to provide next steps options
        Then I approve the Form sent by Social Worker
        Then I approve the Form sent by Social Worker
        When I search for the unique person and select
        Then I navigate to Plans from Person page
        And I should see "Child Protection Plan" Owned by "SocialWorker1" from "Team1" with status "APPROVED"
        And I should see and select "Child Protection Plan" Owned by "SocialWorker1" from "Team1" with status "APPROVED"
        And I approach to provide next steps options
        Then I set to Review 
        And I Submit the form
        And I Submit the form
        When I search for the unique person and select
        Then I should see event for "Decision made in CP plan Review Meeting to keep the child or young person on a Child Protection Plan" on personfacet
        And I logout from application
        
        