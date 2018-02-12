Feature: Health Information

@regression
  Scenario: Add medical conditions in health information widget
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard

    When I create a new Professional
    Then I should be taken to social worker dashboard
    When I search for the professional and select
    Then I should see professional page with all the widgets

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I navigate to Health Widget
    And I create multiple Medical Conditions
    # And I verify Medical Conditions on Health Information
    # And I verify Disabilities on Health Information
    And I save the Health Information
    Then I should see person facet with all the widgets

   @regression
  Scenario: Removing medical condition from PIR
    # Given I Login into Older People Area Team - North as Social Worker
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to Placement Information form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    Then I remove a medical condition
    When I search for the unique person and select
    Then I should see case facet with all the widgets

    Then I navigate to Health Widget
    And I verify multiple Medical Conditions


    @regression
  Scenario: Add dentakCheck
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard

    # Then I create a new API person
    # Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets

    Then I navigate to Health Widget

    And I add dental check details
    And I add dental check details

    And I save the Health Information