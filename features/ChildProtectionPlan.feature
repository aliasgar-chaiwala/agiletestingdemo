 @CPPlanFeature   @L4
Feature: Child Protection Plan

    #bug ID 54159
   @regression
  Scenario: Adding Child Protection Plan 
    #Status of Strategy discussion/ Section 47 form in 
    #Child Protection Journey always shows as “started” regardless of actual status
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    Then I create a new API person
    Then I create a new API person1
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    When I search for the unique Person1 and select in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details in Contact Record
    And I approach to provide next steps options
    And I select "Other-Referral" from next steps list
    And I search and select team as "Me" in next step
    And I submit the Form for Manager Approval
    #And I submit the Form for Manager Approval
    When I search for the unique person and select
    And I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    Then I navigate to Forms from Person page
    And I should see and select "Referral" Owned by "TeamManager1" from "Team1" with status "NEW"
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    #And I provide Contactor Details in Referral Form
    And I approach to provide next steps options
    And I select "Child Protection Process-Strategy Discussion" from next steps list
    And I search and select team as "Team1" in next step
    And I set the Authorization or Rejection date for Form
    And I submit the Form for Manager Approval
    #And I Submit the form   
    When I search for the unique person and select
    Then I should see event for "Referral allocated" on personfacet
    Then I navigate to Forms from Person page
    And I should see "Strategy Discussion" Owned by "Team1" with status "NEW"
    And I should see "Referral" Owned by "TeamManager1" from "Team1" with status "APPROVED"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I should see form status as "Started" in Journey
    And I navigate to "Strategy Discussion" form from Journeys "Child Protection Process"
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Strategy discussion details on Strategy Discussion form
    And I approach to provide next steps options
    And I select "Other-Contact Record" from next steps list
    And I search and select team as "Team2" in next step
    And I set the Authorization or Rejection date for Form
    And I submit the Form for Manager Approval
    And I submit the Form for Manager Approval
    When I search for the unique person and select
    Then I navigate to Forms from Person page
    And I should see "Strategy Discussion" Owned by "TeamManager1" from "Team1" with status "APPROVED"


    #   @StrategyDiscussion
    # Scenario: Creating Strategy Discussion form from Journey widget
    #   Given I am on the socialcare login page
    #   When I login to "Team1" as "TeamManager1"
    #   Then I should be taken to team manager dashboard

    #   When I search for the unique person and select
    #   Then I should see case facet with all the widgets

    #   And I should see form status as "Started" in Journey

    #   And I navigate to "Strategy Discussion" form from Journeys "Child Protection Process"
    #   Then I should see unique person in Subject of form
    #   And I set the Start date for Form
    #   And I approach to provide next steps options
    #   And I select "-Contact Record" from next steps list
    #   #And I search and select team as "Team2" in next step

    #   And I approve the Form sent by Social Worker

    #   Then I should be taken to team manager dashboard
    #   When I search for the unique person and select
    #   Then I should see case facet with all the widgets

    #   And I should see form status as "Completed" in Journey
    #   And I navigate to "Contact Record" form from Journeys "Child Protection Process"
    #   And I set the Start date for Form
    #   Then I should see unique person in Subject of form


    #   When I search for the unique person and select
    #   Then I should see case facet with all the widgets

    #   Then I navigate to Forms from Person page
    #   And I should see "Strategy Discussion" Owned by "SocialWorker1" from "Team1" with status "APPROVED"

    @regression
  Scenario: Adding Strategy Discussion form from Journey widget
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    Then I create a new API person
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to "Child Protection Process"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Single Assessment" form from Journeys "Child Protection Process"
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I approach to provide next steps options
    And I select "Other-Single Assessment" from next steps list
    And I search and select team as "Team1" in next step
    And I set the Authorization or Rejection date for Form
    And I submit the Form for Manager Approval
    #And I submit the Form for Manager Approval
    #Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    When I search for the unique person and select
    And I verify the number of forms in Journey to be "7"
    And I verify that the number of "Single Assessment" to be "2"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I navigate to Forms from Person page
    And I should see "Single Assessment" Owned by "TeamManager1" from "Team1" with status "APPROVED"
    #And I should see "Single Assessment" Owned by "TeamManager1" from "Team1" with status "NEW"
    #And I should see "S47 Enquiry" Owned by "TeamManager1" from "Team1" with status "APPROVED"


	@regression
  Scenario: Adding except listed in a Process (CPP)
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    Then I create a new API person
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to "Child Protection Process"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I navigate to "Journeys" from Person page
    And I collapse "Child Protection Process"
    And I click on "Add form or plan" button
    # Then I should see forms and plans list
    # And I should select Case Closure From 
    # And Click on right mark
    # Then it should save forms in child protection process
    # When I click on delete icon across the form
    # Then it should remove newly added form from the list.

     @regression
    Scenario: Discard Plan
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    Then I create a new API person
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to "Child Protection Process"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I navigate to "Journeys" from Person page
    And I collapse "Child Protection Process"
    And I click on "Add Form" dropdown button
    And I click on cross icon

     
    @regression
     Scenario: Verify user is able to submit the form added form Add form/plan button.
     Given I am on the socialcare login page
     When I login to "Team1" as "TeamManager1"
     Then I should be taken to team manager dashboard
     Then I create a new API person
     Then I should be taken to team manager dashboard
     When I search for the unique person and select 
     Then I should see person facet with all the widgets
     Then I should not see "Default Link" Event on facet
     And I navigate to "Child Protection Process"
     When I search for the unique person and select
     Then I should see case facet with all the widgets
     Then I navigate to "Journeys" from Person page
     And I collapse "Child Protection Process"
     And I click on "Add form" dropdown button
     And I click on right mark to save selected form
     When I search for the unique person and select
     Then I should see case facet with all the widgets
     Then I should not see "Default Link" Event on facet
     And I navigate to "Placement Information Record" form from Journeys "Child Protection Process"
     Then I should see unique person in Subject of form
      And I set the Start date for Form   
      And I approach to provide Medication on PIR form
      And I provide Medication on PIR form
      And I approach to provide Disabilities on PIR form
      And I provide Disabilities on PIR form         
      And I approach to provide next steps options
      And I select "Other-No Further Action Required" from next steps list
      And I submit the Form for Manager Approval
      When I search for the unique person and select
      Then I should see person facet with all the widgets
      Then I should not see "Default Link" Event on facet
      Then I navigate to "Case Closure Request"
      And I should see Closure form
      And I check to see autosave functionality
      When I search for the unique person2 and select
      Then I should see case facet with all the widgets
      Then I navigate to Forms from Person page
      And I should see and select "Case Closure Request" Owned by "TeamManager2" from "Team3" with status "IN PROGRESS"
      And I should see unique person2 in Subject of form
      And I fill details in Closure form
      And I approach to provide next steps options
      And I select "-No Further Action Required" from next steps list
      Then I submit the Form as a Manager
      Then I should see case facet with all the widgets
      When I search for the unique person and select
      Then I should see person facet with all the widgets
      Then I should not see "Default Link" Event on facet
      Then I navigate to "Case Closure Request"
      And I should see Closure form
      And I check to see autosave functionality
      When I search for the unique person2 and select
      Then I should see case facet with all the widgets
      Then I navigate to Forms from Person page
      And I should see and select "Case Closure Request" Owned by "TeamManager2" from "Team3" with status "IN PROGRESS"
      And I should see unique person2 in Subject of form
      And I fill details in Closure form
      And I approach to provide next steps options
      And I select "-No Further Action Required" from next steps list
      Then I submit the Form as a Manager
      Then I should see case facet with all the widgets

@regression22
  Scenario: Submittting S47 Enquiry form through social worker
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
          Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "S47 Enquiry" form from Journeys "Child Protection Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        #And I provide multiple Alleged abuse category details   
        And I approach to provide next steps options
        And I select "Other-Single Assessment" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval 
        And I submit the Form for Manager Approval 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should see event for "Child protection enquiry allocated" on personfacet
        Then I should see event for "Child protection enquiry SFA" on personfacet
        Then I should see event for "Child protection enquiry completed" on personfacet
        #Then I should see event for " Emotional abuse, Financial abuse & Neglect recorded" on personfacet
        Then I navigate to Forms from Person page
        And I should see "S47 Enquiry" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I logout from application
        And I navigate back in browser

        # Scenario: Checking the events triggered for S47 enquiry when approved by TM
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Single Assessment" Owned by "Team1" with status "NEW"
        And I should see and select "S47 Enquiry" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        And I approach to provide next steps options
        And I approve the Form sent by Social Worker
        And I should see and select "S47 Enquiry" Owned by "SocialWorker1" from "Team1" with status "APPROVED"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should see event for "Child protection enquiry completed" on personfacet
        And I logout from application
        And I navigate back in browser
