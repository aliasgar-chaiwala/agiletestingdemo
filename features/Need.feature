Feature: Needs
@regression
  Scenario: Creating Needs
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I create a new API person
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    # Then I create a new person
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Needs Risks and Strengths widget
    When I create new Unmet Need
    Then I should see the created Need Title	
    When I update the created need
    Then I should see the updated Need Title

    @smoke
  Scenario: As a user able to verify all available fields for need
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Needs Risks and Strengths widget
    Then I verify the Need Available Fields
