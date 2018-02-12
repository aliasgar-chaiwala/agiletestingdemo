@login
Feature: Login
Login into system

   
@sanity   @regression
    Scenario: Login as a Social Worker
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

 @regression
    Scenario: Login as a TeamManager
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard

    @regression
    Scenario: Verify login page for First Screen, refresh page, invalid data & tnc Checkbox behaviour
        Given I am on the socialcare login page
        Then I verify first screen of login page and select
        And I enter credentials of "SocialWorker1" from "Team1" and refresh the page without clicking submit
        And I try to login with invalid credentials
        And I enter credentials of "SocialWorker1" from "Team1" and check TnC checkbox behaviour

 @regression
    Scenario: Verify user not gets logged in once logged out and navigates back
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        And I logout from application
        And I navigate back in browser
        Then I verify first screen of login page

  @regression
    Scenario: Verify by copy paste URL
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        And I copy url after login
        And I logout from application
        And I paste the url and verify

 @regression
    Scenario: Verify login page for First Screen, refresh page, invalid data & tnc Checkbox behaviour
        Given I am on the socialcare login page
        Then I verify first screen of login page and select
        And I verify forgotPassword link

@regression
    Scenario: Login as a Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

@regression
    Scenario: Login as a Social Worker2
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker2"
        Then I should be taken to social worker dashboard
@regression
    Scenario: Login as a Social Worker2
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker2"
        Then I should be taken to team manager dashboard

@regression
    Scenario: Login as a TeamManager
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard

@regression
    Scenario: Login as a TeamManager2
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager2"
        Then I should be taken to team manager dashboard

@regression
    Scenario: Login as a TeamManager2
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager2"
        Then I should be taken to team manager dashboard