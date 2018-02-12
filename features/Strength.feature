Feature: Strengths
@regression
  Scenario: Create strength
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I create a new API person
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    # When I create a new person
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Needs Risks and Strengths widget	
    When I create new Strength
    Then I should see the created Strength Title	
    When I update the created Strength
    Then I should see the updated Strength Title

    @smoke
  Scenario: As a user able to verify all available fields for risk
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Needs Risks and Strengths widget
    Then I verify the Strength Available Fields
