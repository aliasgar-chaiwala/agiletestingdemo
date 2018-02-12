@StocktonFlow
Feature: Stockton Demo Flow

@StocktonAddPerson
  Scenario: Adding person for Stockton Flow
    # Given I Login into Older People Area Team - North as Social Worker
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I create a new person
    Then I should see person facet with all the widgets
    Then I should not see "Default Link" Event on facet
    #CREATE PROFESSIONAL
    When I create a new Professional
    Then I should be taken to social worker dashboard
    #SEARCH PROFESSIONAL
    When I search for the professional and select
    Then I should see professional page with all the widgets
    #CREATE ORGANISATION
    When I create a new Organisation
    Then I should be taken to social worker dashboard
    #SEARCH ORGANISATION
    When I search for the organisation and select
    Then I should see organisation page with all the widgets
    #EDUCATION
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    When I navigate to Education details
    When I create Education details
    Then I validate Education details
    And I validate Essential Information
    Then I should see event for "Exclusion record added" on personfacet
    Then I should see event for "SEN status updated" on personfacet

    @conn
  Scenario: Creating Other persons and checking connections, warning
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    #CREATE_NEWPERSON1
    Then I create a new API person1
    Then I should be taken to social worker dashboard

    #CREATE_NEWPERSON2
    Then I create a new API person2
    Then I should be taken to social worker dashboard
    #SEARCH
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    #WARNING
    Then I click warning icon
    And I should see warning page
    And I create new warning
    Then I should see Created Warning

    #FirstDegreeConnection
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I should see event for "Warning created" on personfacet
    Then I navigate to connections
    Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Parent"
    And I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should see connected person pill under relationship on person facet with relation as "Parent"
    # And I should see parental responsibility under Essential Information
    And I should see "Parent" relation and parental responsibility with "person2" under Essential Information

    When I navigate to connections
    Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"

    #2ndDegreeConnection
    When I search for the unique person1 and select
    Then I should see person1 name on person facet
    Then I should see person facet with all the widgets
    Then I navigate to connections
    Then I should see connections page
    Then I create connection between person1 and person2
    Then I should see created connection between person1 and person2
    And I search for the unique person and select
    Then I should see person facet with all the widgets
    And I should see connected person pill under relationship on person facet with relation as "Parent"
    # And I should see parental responsibility under Essential Information
    And I should see "Parent" relation and parental responsibility with "person2" under Essential Information

    When I navigate to connections
    Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"
    Then I click on first degree connection
    Then I should see created 2nd degree connection with person


    @taskConsentCreation
  Scenario: Add a Task & consent for person to User
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    # # Then I create a new person
    # # Then I should see person facet with all the widgets
    Then I navigate to tasks page
    Then I create a new task for person to user
    Then I should see created person task
    Then I mark my task done
    Then I collapse expanded task

    Then I navigate to tasks page
    Then I create a team task for "Team1" to user
    Then I should see created team task for "Team1"
    Then I mark team task for "Team1" done
    Then I collapse expanded task

    Then I switch task view to "Team tasks"
    Then I should see created team task for "Team1"
    And I own the team task for "Team1"
    Then I mark team task for "Team1" done
    #Then I collapse expanded task
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I click Consent icon
    And I should see Consent page
    Then I create new Partial Consent
    Then I add more details for new Partial Consent
    Then I submit new Partial Consent
    Then I click Consent icon
    When I search for the unique person and select
    Then I should see person facet with all the widgets
    Then I click Consent icon
    And I should see Consent page
    Then I should see Created Partial Consent
    Then I Hover on consent icon to check created consent

    @CreateContactRecord
  Scenario: Creating contact record form
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to Contact Record form
    Then I should see unique person in Subject of form
    And I set the Start date for Form
    When I search for the unique Person1 and select in Subject of form
    #And I provide Contactor Details for two persons in Contact Record
    #And I provide multiple Alleged abuse category details
    And I approach to provide next steps options
    And I select "Child Protection Process-Strategy Discussion" from next steps list
    And I search and select team as "Me" in next step
    And I select "Child in Need Process-Single Assessment" as second from next steps list
    And I set second next step for unique person
    And I search and select team as "Team2" in second next step
    And I select "Adult Safeguarding Process-Adult Safeguarding Plan" as third from next steps list
    And I set third next step for unique person1
    And I search and select team as "Team3" in third next step
    And I submit the Form for Manager Approval
    Then I should be taken to social worker dashboard

    When I search for the unique person and select
    Then I navigate to Forms from Person page
    And I should see "Contact Record" Owned by "SocialWorker1" from "Team1" with status "COMPLETED"
    And I should see "Strategy Discussion" Owned by "SocialWorker1" from "Team1" with status "NEW"
    And I should see "Single Assessment" Owned by "Team2" with status "NEW"
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I should see event for "Strategy discussion allocated" on personfacet
    Then I should see event for "Contact Record Created" on personfacet

    @StrategyDiscussion
  Scenario: Creating Strategy Discussion form
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    And I navigate to "Strategy Discussion" form from Journeys "Child Protection Process"
    Then I should see unique person in Subject of form 
    And I set the Start date for Form
    #reason mandatory
    And I provide Strategy discussion details on Strategy Discussion form
   # And I verify Alleged abuse category in Single Assessment
    And I approach to provide next steps options
    And I select "-S47 Enquiry" from next steps list
    And I search and select team as "Me" in next step
    #   And I select priority in next step
    Then I submit the Form as a Manager 
    Then I should be taken to team manager dashboard
    When I search for the unique person and select
    Then I should see case facet with all the widgets
    Then I should see event for "Strategy discussion approved" on personfacet
    Then I should see event for "S47 Enquiry allocated" on personfacet


    @involvements
  Scenario: Verify Involvements for Stockton Flow
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person1 and select
    Then I should see case facet with all the widgets
    Then I navigate to Involvement
    Then I create a new professional Involvement
    And I should see created Involvement for Professional under involvements

    @verifySWDashboard
  Scenario: Verify social worker dashboard screen for Stockton Flow
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    And I should see user name of "SocialWorker1" from "Team1" on dashboard
    And I should see side pane on dashboard
    And I verify Workload under side pane on dashboard
    And I verify Forms under side pane on dashboard 

    @verifyTMdashboard
  Scenario: Verify Team Manager dashboard screen for Stockton Flow
    Given I am on the socialcare login page
    When I login to "Team1" as "TeamManager1"
    Then I should be taken to team manager dashboard
    And I should see user name of "TeamManager1" from "Team1" on dashboard
    And I should see side pane on dashboard
    And I verify Workload under side pane on dashboard
    And I verify Forms under side pane on dashboard
    And I should see Members list on page
    And I navigate to cases in page and verify
    And I navigate to Approvals Requests page and verify
    And I navigate to Unassigned Workload page and verify

    @socialWorkerFormSubmitForApproval
  Scenario: As a social worker able to submit the form for manager approval
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person2 and select
    Then I should see case facet with all the widgets
    Then I verify single assessment Form
    And I set the Start date for Form
    # And I add Assessemnt start date details 
    And I fill Assessment Details on single assessment form   
    And I approach to provide next steps options
    And I select "-Visit" from next steps list
    And I search and select team as "Me" in next step
    Then I submit the Form for Manager Approval
    When I search for the unique person2 and select
    Then I navigate to Forms from Person page
    #And I should see "Single Assessment" Owned by "Anthony Harry Hemingway" with status "AUTHORISATION REQUESTED"
    And I should see "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

    @TMCaseAllocation
  Scenario: As a team manager able to allocte the case to other social worker
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I navigate to Forms from Person page
    # And I should see and select "Single Assessment" Owned by "Anthony Harry Hemingway" with status "AUTHORISATION REQUESTED"
    And I should see and select "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"
    Then I approve the Form sent by Social Worker
    When I search for the unique person2 and select
    Then I navigate to Forms from Person page
   # And I should see "Single Assessment" Owned by "Anthony Harry Hemingway" with status "APPROVED"
    And I should see and select "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "APPROVED"
    Then I verify unassigned workload and allocte case2 to "SocialWorker1" of "Team2"
    # Examples: 
    # | socialWorker            |
    # | Anthony Harry Hemingway |

    @caseLoadVerification
  Scenario: As a social worker able to verify the allocted case
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    Then I verify the allocated person2 case under Case Load Screen

    @setCaseConfidentiality
  Scenario: As a social worker able to set confidentiality for cases
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person2 and select
    #And I check to see if duty working is ON else I trun it OFF
    # Then I set case access denied to manager
    Then I set case access denied to "TeamManager1" of "Team2"

    @verifyCaseDeniedAccess
  Scenario: As a team manager able to verify the denied access
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I should see information with confidentiality message

    @provideCaseAccess
  Scenario: As a social worker able to provide access for cases
    Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the unique person2 and select
    # Then I set case access allow to manager
    Then I set case access allow to "TeamManager1" of "Team2"

    @verifyCaseAllowAccess
  Scenario: As a team manager able to verify the allow access for confidential case
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I navigate to Forms from Person page
    # And I should see "Single Assessment" Owned by "Anthony Harry Hemingway" with status "APPROVED"
    And I should see "Single Assessment" Owned by "SocialWorker1" from "Team2" with status "APPROVED"

    @dataQualityCheck
  Scenario: As a manager able to create new case for DQC and verify
    Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard
    When I search for the unique person2 and select
    Then I should see case facet with all the widgets
    When I navigate to S47Enquiry form
    And I set the Start date for Form
    And I approach to provide next steps options
    And I select "-Conference" from next steps list
    And I search and select team as "Me" in next step
    Then I submit the Form as a Manager
    Then I submit the Form for Manager Approval
    Then I search for the unique person2 and select
    Then I navigate to Forms from Person page
    And I should see "S47 Enquiry" Owned by "TeamManager1" from "Team2" with status "APPROVED"
    When I search for the unique person2 and select
    And I verify the DQC for S47Enquiry Form
    Then I submit the missing soft mandatory information
    Then I verify the DQC Completed Information
    When I search for the unique person2 and select