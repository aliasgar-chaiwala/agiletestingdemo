Feature: Contact Record

    @regression
  Scenario: Contact Record
    # Given I Login into Older People Area Team - North as Social Worker
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    # When I login to "Team1" as "TeamManager1"
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard

    Then I create a new API person1
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I should see person facet with all the widgets

    Then I should not see "Default Link" Event on facet

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    When I search for the unique Person1 and select in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details in Contact Record 

    #  And I verify Primary Support Reason in Contact Record
    And I approach to provide next steps options
    And I select "-No Further Action Required" from next steps list
    And I search and select team as "Me" in next step
    # #  And I select priority in next step

    And I submit the Form for Manager Approval
    And I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    #Then I should see event for "Strategy discussion allocated" on personfacet
    Then I should see event for "Contact Record Created" on personfacet
    Then I navigate to Forms from Person page
    And I should see "Contact Record" Owned by "SocialWorker1" from "Team1" with status "COMPLETED"

  @regression 
  Scenario: Contact Record

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

    #  And I verify Primary Support Reason in Contact Record
    And I approach to provide next steps options   
    And I select "-No Further Action Required" from next steps list    
    And I submit the Form for Manager Approval
    And I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    Then I should see event for "Contact Record Created" on personfacet
    Then I navigate to Forms from Person page
    And I should see "Contact Record" Owned by "SocialWorker1" from "Team1" with status "COMPLETED"
  
  @regression 
  Scenario: Contact Record    
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard

    Then I create a new API person
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets

    # When I create a new person
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Contactor Details in Contact Record

    And I approach to provide next steps options
    And I select "Other-Visit" from next steps list

    # And I select "-Visit" from next steps list
    And I search and select team as "Me" in next step
    And I Submit the form
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet

    Then I should see event for "Child visit allocated" on personfacet
    Then I should see event for "Contact Record Created" on personfacet

    Then I navigate to Forms from Person page
    And I should see "Visit" Owned by "TeamManager1" from "Team1" with status "NEW"
    And I should see "Contact Record" Owned by "TeamManager1" from "Team1" with status "COMPLETED"

  @regression
  Scenario: Missing Information   
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team2"


    Then I create a new API person
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets

    # When I create a new person
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I provide Missing Contactor Details in Contact Record
    And I approach to provide next steps options
    And I should see "Risk Assessment" form under "Missing Child Process" in next steps list
    And I select "Missing Child Process-Risk Assessment" from next steps list
    And I search and select team as "Me" in next step
    And I Submit the form
    And I should see case facet with all the widgets    
    Then I should see Missing flag for missing person
    Then I navigate to Forms from Person page
    And I should see and select "Contact Record" Owned by "TeamManager1" from "Team2" with status "COMPLETED"
    Then I verify unassigned workload and allocte case to "SocialWorker1" of "Team2"
    And I logout from application
    And I navigate back in browser
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I should see Missing person available under case load section

  @regression
  Scenario: Absent Information   
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team2"

    Then I create a new API person1
    Then I should be taken to team manager dashboard
    When I search for the unique person1 and select
    Then I should see case facet with all the widgets

    # When I create a new person1
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Contact Record form
    Then I should see unique person1 in Subject of form
    And I set the Start date for Form
    And I provide Absent Contactor Details in Contact Record
    And I approach to provide next steps options
    And I should see "Risk Assessment" form under "Missing Child Process" in next steps list
    And I select "Missing Child Process-Risk Assessment" from next steps list
    And I search and select team as "Me" in next step
    And I Submit the form
    Then I should be taken to team manager dashboard
    When I search for the unique person1 and select
    Then I should see Absent flag for missing person
    Then I navigate to Forms from Person page
    And I should see and select "Contact Record" Owned by "TeamManager1" from "Team2" with status "COMPLETED"
    Then I verify unassigned workload and allocte case1 to "SocialWorker1" of "Team2"
    And I logout from application
    And I navigate back in browser
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I should see Absent person1 available under case load section

  @smoke
  Scenario: Verify Contact Record form
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard

    Then I create a new API person
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets

    # When I create a new person
    # Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    And I verify the Contactor Details in Contact Record
    And I verify the Recommendations Details in Contact Record

