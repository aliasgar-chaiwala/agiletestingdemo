Feature: Approval Request

   @regression
  Scenario: Validate Approval Requests
  Given I am on the socialcare login page
        When I login to "Team5" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child Protection Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Single Assessment" form from Journeys "Child Protection Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I set the deadline date for Form
        And I fill Assessment Details on single assessment form
        Then I set Reason for delay in Assessment Details
        And I fill "Alcohol misuse" as category and "1A" as factor for Factors Identified for assessment
        And I approach to provide next steps options        
        And I select "Child Protection Process-Visit" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form for Manager Approval       
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I should see event for "Single assessment allocated" on personfacet
        Then I should see event for "Single Assessment SFA" on personfacet
        Then I navigate to Forms from Person page
        And I should see "Single Assessment" Owned by "SocialWorker1" from "Team5" with status "AUTHORISATION REQUESTED"
        And I logout from application
        And I navigate back in browser
        When I login to "Team5" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I navigate to Approval Request page
        Then I should see the all the fields available on the approval request page
        And I should see and select "Single Assessment" submitted by "SocialWorker1" of team "Team5" for case
        And I should see unique person in Subject of form
        Then I approve the Form sent by Social Worker
        Then I should see case facet with all the widgets

        @caseallocation @steps @R8
        Scenario: Approval Request checking the autosave functionality with subjects
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child Protection Process"
        When I search for the unique person and select
        When I search for the unique person1 and select
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Single Assessment" form from Journeys "Child Protection Process"
        Then I should see unique person in Subject of form
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        And I set the deadline date for Form
        And I fill Assessment Details on single assessment form
        Then I set Reason for delay in Assessment Details
        And I fill "Alcohol misuse" as category and "1A" as factor for Factors Identified for assessment
        And I approach to provide next steps options        
        And I select "Child Protection Process-Visit" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form for Manager Approval       
        And I logout from application
        And I navigate back in browser
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I navigate to Approval Request page
        Then I should see the all the fields available on the approval request page        
        And I should see and select "Single Assessment" submitted by "SocialWorker1" of team "Team1" for case with owner "TeamManager1"
        And I should see unique person in Subject of form
        And I should see unique person1 in Subject of form
   