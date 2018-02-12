@default @ms @personalinformation @person-events
Feature: Add Persons

  @API
  Scenario: Adding persons through API
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets

    Then I create a new API person1
    Then I should see case facet with all the widgets
    When I search for the unique person1 and select
    Then I should see case facet with all the widgets

    Then I create a new API person with special character
    And I search for the specialChar person and select
    Then I should see case facet with all the widgets

    Then I create a new API person2
    Then I should see case facet with all the widgets
    And I search for the unique person2 and select
    Then I should see case facet with all the widgets

    Then I create a new API person3
    Then I should see case facet with all the widgets
    And I search for the unique person3 and select
    Then I should see case facet with all the widgets

    Then I create a new API placement person
    Then I should see case facet with all the widgets
    And I search for the placement person and select
    Then I should see case facet with all the widgets

    Then I create a new API asylum seeking person
    Then I should see case facet with all the widgets
    And I search for the  asylum seeking person and select
    Then I should see case facet with all the widgets



   @sanity   @regression
  Scenario: Adding persons
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new person
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    When I search for the unique person and select
    Then I should see person facet with all the widgets and address on person banner
    Then I should not see "Default Link" Event on facet

  @regression
  Scenario: Adding specialChar person
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new API person with special character

    # When I create a new person with special character
    # Then I should see person facet with all the widgets

    When I search for the specialChar person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

   @regression 
  Scenario: Adding persons
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I enable "asylumSeeking" Feature
    Then I should be taken to social worker dashboard

    Then I create a new API asylum seeking person
    # Then I create a new asylum seeking person

    # Then I should see person facet with all the widgets
    # Then I should not see "Default Link" Event on facet

    When I search for the  asylum seeking person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

   @regression
  Scenario: Adding persons and verify person Id
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new person
    And I should see person facet with all the widgets

    Then I create a new API person1

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should not see "Default Link" Event on facet
    And I should see personId with 10 characters

    Then I click on edit Icon
    And I select DOB as today - 16 years
    And I update contact number
    And I submit the edit page

    Then I click on edit Icon
    Then I check National insurance number text box presence based on age of person
    And I select DOB as today - 15 years
    And I submit the edit page

    Then I click on edit Icon
    Then I check National insurance number text box presence based on age of person
    And I submit the edit page
    And I should see person facet with all the widgets
    And I should see personId with 10 characters

    Then I navigate to Health Widget
    And I should see personId with 10 characters

    When I search for the unique person and select
    Then I should see person facet with all the widgets
    And I click on duplicate Icon on toolbar
    And I verify personId of person1 in duplicate widget with 10 characters

    @   @household
Scenario: Add a person with another household members
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new person with another household member
    And I verify the message for person added with household members
    When I add a second household member
    And I verify the message for person added with household members
    When I add a third household member
    And I verify the message for person added with household members
    And I verify the fields for household person added
    Then I click on cancel for added household person 
    And I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    When I create a new temporary household person
    Then I click on cancel for added household person
    Then I should be taken to social worker dashboard

   
  