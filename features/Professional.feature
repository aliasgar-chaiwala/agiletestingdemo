Feature: Professional

 @sanity   @regression
  Scenario: Adding Professional
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new Professional
    Then I should be taken to social worker dashboard
    When I search for the professional and select
    Then I should see professional page with all the widgets