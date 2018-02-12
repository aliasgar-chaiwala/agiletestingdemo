Feature: Organisation

 @sanity   @regression
  Scenario: Adding Organisation without member
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new Organisation without member
    Then I should be taken to social worker dashboard
    When I search for the organisation and select
    Then I should see organisation page with all the widgets

    @forFlows  @regression
  Scenario: Adding Organisation with professional as member
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new Professional
    Then I should be taken to social worker dashboard
    When I search for the professional and select
    Then I should see professional page with all the widgets

    When I create a new Organisation
    Then I should be taken to social worker dashboard
    When I search for the organisation and select
    Then I should see organisation page with all the widgets
    Then I should see professional as member on organisation page

