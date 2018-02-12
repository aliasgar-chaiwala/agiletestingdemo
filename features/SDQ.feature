Feature: Strength and Difficulties Questionaries Feature

   @regression
  Scenario: Adding SDQ Form
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard   
    Then I create a new API person
    When I search for the unique person and select
    Then I should see person facet with all the widgets    
    And I navigate to "Child In Care Process"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Strengths and Difficulties Questionnaire" form from Journeys "Child In Care Process"
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    When I provide the SDQ Information
    And I approach to provide next steps options
    And I select "-No Further Action Required" from next steps list
    Then I Submit the form
    # Then I should be taken to team manager dashboard
    # When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I navigate to Forms from Person page
    And I should see "Strengths and Difficulties Questionnaire" Owned by "TeamManager1" from "Team2" with status "APPROVED"
    
    # Commented out below code to accomodate changes of PBI#62864 done by mavericks team
    
    # And I logout from application
    # And I navigate back in browser
    # When I login to "Team2" as "TeamManager1"
    # Then I should be taken to team manager dashboard   
    # When I search for the unique person and select
    # Then I should see case facet with all the widgets    
    # And I navigate to "Child In Care Process"
    # When I search for the unique person and select
    # Then I should see case facet with all the widgets
    # And I navigate to "Strengths and Difficulties Questionnaire" form from Journeys "Child In Care Process"
    # Then I should see unique person in Subject of form
    # And I set the Start date for Form
    # When I provide the SDQ NO Information
    # And I approach to provide next steps options
    # And I select "-No Further Action Required" from next steps list
    # Then I Submit the form
    # And I Submit the form
    # # Then I should be taken to team manager dashboard
    # # When I search for the unique person and select
    # Then I should see case facet with all the widgets
    # Then I navigate to Forms from Person pageThen I navigate to Forms from Person page
    # And I should see "Strengths and Difficulties Questionnaire" Owned by "TeamManager1" from "Team2" with status "APPROVED"