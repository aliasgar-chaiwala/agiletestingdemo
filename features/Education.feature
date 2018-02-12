Feature: Education
  @regression
  Scenario: Adding person and Education
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets

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
    #EDUCATION
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    When I navigate to Education details
    When I create Education details
    Then I validate Education details
    And I validate Essential Information
    Then I should see event for "Exclusion record added" on personfacet
    Then I should see event for "SEN status updated" on personfacet
