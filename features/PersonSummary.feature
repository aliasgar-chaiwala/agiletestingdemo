Feature: Person Summary Page Feature

  @sanity  
  Scenario: Private Fostering verification on Person summary for Adult
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"    
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    Then I create a new API person1
    Then I should be taken to social worker dashboard
    Then I create a new API person2
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    Then I click on edit Icon
    And I select DOB as today - 16 years
    And I submit the edit page

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details with "Private fostering"

    And I approach to provide next steps options
    And I select "No Further Action Required" from next steps list

    And I submit the Form for Manager Approval
    And I should see person facet with all the widgets
    Then I should see Private fostering details under case summary widget

    And I click on "first" private Fostering carer pill and verify
    And I verify "Background checks" widget present on private Fostering carer person page

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet
    And I click on "second" private Fostering carer pill and verify
    And I verify "Background checks" widget present on private Fostering carer person page

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet

    When I refresh the page
    Then I should see Private fostering details under case summary widget

    Then I navigate to Involvement
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer
    And I should see created Involvement for "SocialWorker1" and "Team1"

    
  Scenario: Private Fostering verification after updating values
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"    
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    Then I create a new API person1
    Then I should be taken to social worker dashboard
    Then I create a new API person2
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details with "Private fostering"

    And I approach to provide next steps options
    And I select "No Further Action Required" from next steps list

    And I submit the Form for Manager Approval
    And I should see person facet with all the widgets
    Then I should see Private fostering details under case summary widget

    And I click on "first" private Fostering carer pill and verify
    Then I click on edit Icon
    And I update firstName of unique "person1"
    And I submit the edit page

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet
    Then I should see Private fostering details under case summary widget

    And I click on "first" private Fostering carer pill and verify

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I navigate to Involvement
    And I update "From" date for "first" private Fostering carer to today - 10 days
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer
    And I update "To" date for "first" private Fostering carer to today - 1 days
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I should not see Private fostering details under case summary widget

    Then I navigate to Involvement
    And I update "To" date for "first" private Fostering carer to today
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I should see Private fostering details under case summary widget

    Then I navigate to Involvement
    And I update "To" date for "first" private Fostering carer to today + 2 days
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I should see Private fostering details under case summary widget

  @  
  Scenario: Private Fostering verification on Person summary for Child
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"    
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    Then I create a new API person1
    Then I should be taken to social worker dashboard
    Then I create a new API person2
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    Then I click on edit Icon
    And I select DOB as today - 15 years
    And I submit the edit page

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details with "Private fostering"

    And I approach to provide next steps options
    And I select "No Further Action Required" from next steps list

    And I submit the Form for Manager Approval
    And I should see person facet with all the widgets
    Then I should see Private fostering details under case summary widget

    And I click on "first" private Fostering carer pill and verify
    And I verify "Background checks" widget present on private Fostering carer person page

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet
    And I click on "second" private Fostering carer pill and verify
    And I verify "Background checks" widget present on private Fostering carer person page

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet

    When I refresh the page
    Then I should see Private fostering details under case summary widget

    Then I navigate to Involvement
    And I should see created Involvement for "first" private Fostering carer
    And I should see created Involvement for "second" private Fostering carer
    And I should see created Involvement for "SocialWorker1" and "Team1"