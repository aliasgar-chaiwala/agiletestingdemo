@CaseClosure
Feature: Case closure

    @smoke
    Scenario: Case Closure Form Smoke
        Given I am on the socialcare login page
        When I login to "Team3" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person2 and select
        Then I should see person facet with all the widgets
        Then I should see person2 name on person facet
        Then I should not see "Default Link" Event on facet
        Then I navigate to "Case Closure Request"
        And I should see unique person2 in Subject of form
        And I should see Closure form
        And I check to see autosave functionality
        And I logout from application

       @regression
    Scenario: Close the case to other social worker
        Given I am on the socialcare login page
        When I login to "Team3" as "TeamManager2"
        Then I should be taken to team manager dashboard
        And I cleanup unassigned Cases upto 10 cases to "TeamManager2" of "Team3"
        Then I create a new API person2
        Then I should be taken to team manager dashboard
        When I search for the unique person2 and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet      
        And I navigate to "Adult Safeguarding Process"
        When I search for the unique person2 and select
        # Then I should see case facet with all the widgets
        # And I navigate to "Adult Safeguarding Plan" form from Journeys "Adult Safeguarding Process"
        # # And I navigate to "Referral"
        # # Then I should see unique person2 in Subject of form
        # # And I set the Start date for Form
        # # And I set the deadline date for Form
        # # And I provide Contactor Details in Referral Form
        # # And I provide multiple Alleged abuse category details     
        # # And I submit the Form for Manager Approval
        # # #And I approach to provide next steps options
        # # And I select "Child Protection Process-Strategy Discussion" from next steps list
        # # And I search and select team as "Team2" in next step
        # # And I submit the Form as a Manager
        # # #Then I should be taken to social worker dashboard
        # # #When I search for the unique person and select
        # # Then I should see case facet with all the widgets
        # # Then I should see event for "Referral approved" on personfacet
        # # Then I navigate to Forms from Person page
        # # And I should see "Referral" Owned by "TeamManager1" from "Team2" with status "APPROVED" 
        # When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        Then I verify unassigned workload and allocte case2 to "TeamManager2" of "Team3" 
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        #Then I should see event for "Referral allocated" on personfacet
        #Then I should see event for "Strategy discussion allocated" on personfacet
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
        Then I submit the Form as a Manager
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        Then I should see event for "Case closure request allocated" on personfacet
        Then I should see event for "Case closure request approved" on personfacet
        And I navigate to myteamapp from dashboard
        And I expand the "TeamManager2" block of "Team3" to see cases
        And I close the unique "person2" case
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I should see event for "Date of case closure decision" on personfacet
        #And I should see "Date on which decision was taken to close the case:" on notification under essential information widget on person page
        And I should see case closed icon under EI widget on person page 
    #   And I logout from application

    @bug54836
    Scenario: As a User i should be able to Close the case to other social worker
        Given I am on the socialcare login page
        When I login to "Team3" as "TeamManager2"
        Then I should be taken to team manager dashboard
        Then I create a new API person2
        Then I should be taken to team manager dashboard
        And I search for the unique person2 and select
        Then I should see case facet with all the widgets
        # When I create a new person2
        # Then I should see person facet with all the widgets
        # Then I should see person2 name on person facet
        Then I should not see "Default Link" Event on facet
        # Then I navigate to "Adult Safeguarding Process"
        # And I should see unique person2 in Subject of form
        # Then I navigate to "Child In Care Process"
        # And I should see unique person2 in Subject of form
        # Then I navigate to "Child Protection Process"
        # And I should see unique person2 in Subject of form
        # Then I navigate to "Child in Need Process"
        # And I should see unique person2 in Subject of form
        Then I navigate to "Adult Safeguarding Full Investigation"
        And I should see unique person2 in Subject of form
        Then I navigate to "Case Closure Request"
        And I should see unique person2 in Subject of form
        Then I navigate to "Case Transfer Request"
        And I should see unique person2 in Subject of form
        Then I navigate to "S47 Enquiry"
        And I should see unique person2 in Subject of form
        Then I navigate to "Placement Information Record"
        And I should see unique person2 in Subject of form
        Then I navigate to "Strategy Discussion"
        And I should see unique person2 in Subject of form
        Then I navigate to "Visit"
        And I should see unique person2 in Subject of form
        Then I navigate to "Conference"
        And I should see unique person2 in Subject of form
        Then I navigate to "Contact Record"
        And I should see unique person2 in Subject of form
        Then I navigate to "Leaving Care Assessment"
        And I should see unique person2 in Subject of form
        Then I navigate to "Risk Assessment"
        And I should see unique person2 in Subject of form
        Then I navigate to "Single Assessment"
        And I should see unique person2 in Subject of form
        Then I navigate to "Stage 2 Assessment"
        And I should see unique person2 in Subject of form
        # Then I navigate to "Sexual Exploitation"
        # And I should see unique person2 in Subject of form        
        Then I navigate to "Care and Support Plan"
        And I should see unique person2 in Subject of form
        Then I navigate to "Adult Safeguarding Plan"
        And I should see unique person2 in Subject of form
        Then I navigate to "Child In Care Plan"
        And I should see unique person2 in Subject of form
        Then I navigate to "Child in Need Plan"
        And I should see unique person2 in Subject of form
        Then I navigate to "Child Protection Plan"
        And I should see unique person2 in Subject of form
        Then I navigate to "Adult Referral"
        And I should see unique person2 in Subject of form
        When I search for the unique person2 and select
        Then I should see person facet with all the widgets