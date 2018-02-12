@CINFlow
Feature: CIN FLOW (STOCKTON)

@CINFlow1
  Scenario: Adding Two Person and Creating Connection and Contact Record Form
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new API person
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I update the "Alias" in Edit Person page  
    Then I search for the unique person and verify "alias" and select
    Then I create a new API person1
    And I search for the unique person1 and select
		And I should see person facet with all the widgets
    When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Sibling"

    And I search for the unique person and select
		Then I should see person facet with all the widgets
     And I should see person pill for "person1" under relationship on person facet with "Sibling" relation
		#And I should see connected person pill under relationship on person facet with relation as "Sibling"
    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    When I search for the unique Person1 and select in Subject of form  
    Then I create a create a new person from Contactor details

    Then I provide Contactor Details in Contact Record-Stockton
    Then I Submit the form
    Then I verify the soft and Hard mandatory fields
    And I select "Other-Referral" from next steps list
    And I search and select team as "Team2" in next step
    Then I Submit the form
    #Then I Submit the form
    
@CINFlow1
    Scenario: Referral Form
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    Then I navigate to Forms from Person page
    And I should see and select "Referral" Owned by "Team2" with status "NEW"
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I set the deadline date for Form
    And I provide Referral Details in Referral Form
    Then I navigate to person summary from the form
    Then I navigate to Forms from Person page
    And I should see and select "Referral" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
    And I approach to provide next steps options
    And I select "Child in Need Process-Single Assessment" from next steps list
    And I search and select team as "Team3" in next step
    And I approach to add action in next step
    And I set Action details in next step to "Team2"
   
    Then I submit the Form for Manager Approval
    #Then I submit the Form for Manager Approval

    @CINFlow2
    Scenario:Approving the Referral Form and case allocation
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I navigate to Approval Request page
    Then I should see the all the fields available on the approval request page
    Then I should see and select "Referral" submitted by "SocialWorker1" of team "Team2" for case1 and case2
    Then I should see unique person in Subject of form
    Then I approve the Form sent by Social Worker
    Then I should see the all the fields available on the approval request page
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I verify the caseowner "Team2" in case facet page
    Then I verify unassigned workload and allocte case to "SocialWorker1" of "Team2"
    When I search for the unique person1 and select
    Then I should see case facet with all the widgets
    And I verify the caseowner "Team2" in case facet page
    #Then I refresh the browser
    Then I verify unassigned workload and allocte case1 to "SocialWorker1" of "Team2"
  

    @CINFlow3
    Scenario: Verify allocated case and Child in Need Plan
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I verify the allocated person case under Case Load Screen
    #Then I click on allocated person case under Case Load Screen
    Then I verify the allocated person1 case under Case Load Screen
    And I search for the unique person and select
		Then I should see case facet with all the widgets
    And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
    Then I should see unique person in Subject of form
    And I search for the unique person1 and select
		Then I should see case facet with all the widgets
    And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
    #Then I should see unique person1 in Subject of form


    @CINFlow4
    Scenario: Single Assessment and Case notes
    Given I am on the socialcare login page
    When I login to "Team3" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    And I search for the unique person and select
		Then I should see case facet with all the widgets
    And I navigate to "Single Assessment" form from Journeys "Child in Need Process"
    Then I should see unique person in Subject of form

    And I search for the unique person and select
		Then I should see case facet with all the widgets
    Then I click Casenote icon
		And I should see Casenote page

		Then I click new Casenote button
		Then I should see new case note section
		And I create new Casenote for Current week
		When I search for the unique person and select
		Then I should see case facet with all the widgets
		Then I click Casenote icon
		And I should see Casenote page
		Then I should see Created Current week Casenote

    And I search for the unique person1 and select
		Then I should see case facet with all the widgets
    Then I click Casenote icon
		And I should see Casenote page

		Then I click new Casenote button
		Then I should see new case note section
		And I create new Casenote for Current week
		When I search for the unique person and select
		Then I should see case facet with all the widgets
		Then I click Casenote icon
		And I should see Casenote page
		Then I should see Created Current week Casenote
    #And I set the Start date for Form
    #Then I should see unique person in Subject of form
    And I search for the unique person and select
		Then I should see case facet with all the widgets
    And I navigate to "Single Assessment" form from Journeys "Child in Need Process"

    And I set the Start date for Form
    And I set the deadline date for Form
    And I fill Assessment Details on single assessment form

    And I approach to provide next steps options
    And I click to segregate the subject
    And I select "Child in Need Process-Child in Need Plan" from next steps list for subject1
    And I select "Other-No Further Action Required" from next steps list for subject2
    And I search and select team as "Me" in next step
    Then I submit the Form for Manager Approval

    @CINFlow5
    Scenario: Approving the Single Assement Form
    Given I am on the socialcare login page
    When I login to "Team3" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Single Assessment" form from Journeys "Child in Need Process"
    Then I should see unique person in Subject of form
    Then I approve the Form sent by Social Worker
  

    @CINFlow6
    Scenario: Child in Need journey and Case Closure Initiate
    Given I am on the socialcare login page
    When I login to "Team3" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
    Then I should see unique person in Subject of form
    When I search for the unique Person1 and select in Subject of form 
    Then I verify child in need plan
    And I set the Start date for Form
    And I fill the meeting details 
    And I approach to provide next steps options
    And I select "Other-No Further Action Required" from next steps list
    Then I Submit the form

    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I navigate to "Case Closure Request"
    And I should see unique person in Subject of form
    And I should see Closure form
    And I check to see autosave functionality
    
    And I fill details in Closure form
    And I approach to provide next steps options
    And I select "-No Further Action Required" from next steps list
    Then I submit the Form for Manager Approval


    @CINFlow6
    Scenario: Approving Child in Need Plan
    Given I am on the socialcare login page
    When I login to "Team3" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Child in Need Plan" form from Journeys "Child in Need Process"
    Then I should see unique person in Subject of form
    Then I verify child in need plan
    Then I approve the Form sent by Social Worker
    