Feature: Services functionality 
@professionalOrganisation @sanity
  Scenario: Creating Professional & Organisation
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    #CREATE PROFESSIONAL
    When I create a new Professional
    Then I should be taken to social worker dashboard
    #SEARCH PROFESSIONAL
    When I search for the professional and select
    Then I should see professional page with all the widgets
    #CREATE ORGANISATION
    When I create a new Organisation
    Then I should be taken to social worker dashboard
    #SEARCH ORGANISATION
    When I search for the organisation and select
    Then I should see organisation page with all the widgets

    And I add new Service Provider
    Then I add new Service
    Then I add another Service
