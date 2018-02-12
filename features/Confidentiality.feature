
Feature: Case confidentiality

 @regression 
  Scenario: As a team manager able to allocte the case to other social worker
    Given I am on the socialcare login page
    When I login to "Team3" as "TeamManager1"
    Then I should be taken to team manager dashboard
    And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team3"
    Then I create a new API person2
    Then I should be taken to team manager dashboard
    And I search for the unique person2 and select
    Then I should see person facet with all the widgets
    # When I create a new person2
    # And I should see person facet with all the widgets
    # Then I should see person2 name on person facet
    Then I should not see "Default Link" Event on facet
    And I navigate to "Child Protection Process"
    When I search for the unique person2 and select
    Then I should see case facet with all the widgets
    And I navigate to "Single Assessment" form from Journeys "Child Protection Process"
    #Then I verify single assessment Form
    # And I add Assessemnt start date details
    # Then I should see unique person2 in Subject of form
    # And I set the Start date for Form
    # And I fill Assessment Details on single assessment form
    # And I approach to provide next steps options
    # And I select "Child Protection Process-Strategy Discussion" from next steps list
    # #And I select "-Conference" from next steps list
    # And I search and select team as "Me" in next step
    # Then I submit the Form as a Manager
    And I search for the unique person2 and select
    Then I should see case facet with all the widgets
    #Then I navigate to Forms from Person page
    #And I should see "Single Assessment" Owned by "TeamManager1" from "Team3" with status "APPROVED"
    Then I verify unassigned workload and allocte case2 to "SocialWorker1" of "Team3"

  @setCaseConfidentiality
  Scenario: As a social worker able to set confidentiality for cases
    Given I am on the socialcare login page
    When I login to "Team3" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person2 and select
    Then I should see case facet with all the widgets
    Then I should see person2 name on person facet
    And I should see case owner information under case summary 
    Then I set case access denied to "TeamManager1" of "Team1"

  @regression
  Scenario: As a team manager able to verify the denied access
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I should see person2 name on person facet
    # Then I should see denied access message for confidential case
    Then I should see information with confidentiality message

  @regression
  Scenario: As a social worker able to provide access for cases
    Given I am on the socialcare login page
    When I login to "Team3" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person2 and select
    Then I set case access allow to "TeamManager1" of "Team1"

  @regression
  Scenario: As a team manager able to verify the allow access for confidential case
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I navigate to Forms from Person page
    And I should see "Single Assessment" Owned by "TeamManager1" from "Team3" with status "APPROVED"
