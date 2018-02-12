Feature: MISSING CHILD FLOW 

  @Flow 
  Scenario: Adding Child Person and Create Missing record from Contact Record Form
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard

    When I create a new API person
    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I click on edit Icon
    And I select DOB as today - 15 years
    And I submit the edit page

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form 
    Then I provide Contactor Details with "Missing"
    And I approach to provide next steps options
    And I select "Contact Record – Missing Status Change" from next steps list
    And I search and select team as "Me" in next step
    Then I Submit the form

    Then I should see case facet with all the widgets
    ########### 11. Team manager will receive the notification for missing status (defect exists) (TODO)
    And I verify that missing Icon is shown on person banner
    And I should see event for "Child Missing" and date on personfacet
    Then I navigate to Events
    And I validate "Child Missing" event on Events page with creation date

    When I search for the unique person and select
    Then I should see case facet with all the widgets

    And I search for the unique person and verify Missing Icon after person id

    And I click warning icon
    And I verify "Missing Person" warning by "TeamManager1" of "Team1" on todays date

    ### Then I hover on warning Icon and verify warning as "Missing Person" by "TeamManager1" of "Team1" on todays date

    When I search for the unique person and select
    Then I should see case facet with all the widgets

    And I navigate to "Contact Record – Missing Status Change" form from Journeys "Missing Child Process"
    Then I should see unique person in Subject of form
    And I set the deadline date for Form
    And I select "Returned" in contact is about
    And I approach to provide next steps options
    And I select "No Further Action Required" from next steps list
    Then I Submit the form
    Then I Submit the form
    Then I should see case facet with all the widgets
    And I should see event for "Child Returned" and date on personfacet