Feature: Referral Form
 @regression
    Scenario: Creating Referral Form
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team2"
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet


        And I navigate to Contact Record form       
        Then I should see unique person in Subject of form
     When I search for the unique Person1 and select in Subject of form
       Then I create a new API person1
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record

        #  And I verify Primary Support Reason in Contact Record
        And I approach to provide next steps options    
        And I select "Other-Referral" from next steps list
        And I search and select team as "Me" in next step
        # #  And I select priority in next step

        And I submit the Form for Manager Approval       
        When I search for the unique person and select
        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet

        Then I navigate to Forms from Person page
        And I should see and select "Referral" Owned by "TeamManager1" from "Team2" with status "NEW"

        #And I navigate to "Referral"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I set the deadline date for Form
        #And I provide Contactor Details in Referral Form
        #And I provide multiple Alleged abuse category details
        And I submit the Form for Manager Approval
        #And I approach to provide next steps options
        And I select "Child Protection Process-Strategy Discussion" from next steps list
        And I search and select team as "Team2" in next step
        And I set the Authorization or Rejection date for Form
        And I Submit the form     
        #Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I should see event for "Referral allocated" on personfacet
        Then I navigate to Forms from Person page
        And I should see and select "Referral" Owned by "TeamManager1" from "Team2" with status "APPROVED"
        Then I should see unique person in Subject of form
    #And I verify Source of referral details
    # Then I verify unassigned workload and allocte case to "TeamManager1" of "Team2" 
    # When I search for the unique person and select
    # Then I should see case facet with all the widgets

    @regression
    Scenario: Primary Need Update Notification
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        Then I approach to Contactor Details in Referral form
        Then I should see Primary need Details have been updated notification      
    #And I provide Contactor Details in Referral Form


    @regression
    Scenario: Primary Need Update Notification - Take Latest
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        Then I approach to Contactor Details in Referral form
        Then I should see Primary need Details have been updated notification 

        And I verify the Take Latest Functionality under Primary Need Notification
    #Then I should be able to see the comparision window


    @regression
    Scenario: Primary Need Update Notification - Keep my changes
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        Then I approach to Contactor Details in Referral form
        Then I should see Primary need Details have been updated notification 

        And I verify the Keep my changes Functionality under Primary Need Notification

    @referral @steps @BaselineR6 @sanity1 @PBI65379Scenario4
    Scenario: Primary Need Update Notification should not be visible on page refresh after keep Changes
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        Then I approach to Contactor Details in Referral form
        Then I should see Primary need Details have been updated notification 

        And I verify the Keep my changes Functionality under Primary Need Notification

        Then I refresh the browser
        Then I approach to Contactor Details in Referral form
        Then I should not see Primary need Details have been updated notification 

    @regression
    Scenario: Primary Need Update Notification should not be visible on page refresh after keep Changes after Take Latest
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        Then I approach to Contactor Details in Referral form
        Then I should see Primary need Details have been updated notification 

        And I verify the Take Latest Functionality under Primary Need Notification
        Then I refresh the browser
        Then I approach to Contactor Details in Referral form
        Then I should not see Primary need Details have been updated notification 

    @regression
    Scenario: Pre-Version Check 
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        #Then I create a new person
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        And I add contactor details in Referral Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page
        # When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Referral" form from Journeys "Child Protection Process"
        And I set the Start date for Form 
        #Then I approach to Contactor Details in Referral form
        #Then I should see Primary need Details have been updated notification  
        And I approach to provide next steps options
        And I select "Strategy Discussion" from next steps list 
        And I search and select team as "Me" in next step
        And I set the Authorization or Rejection date for Form
        Then I Submit the form
        Then I should see Information Mismatch notification

    @regression
    Scenario: Primary Need Verification with no core Data and After Update 
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new person without primary Need
        #Then I create a new API person
        #Then I should be taken to team manager dashboard
        #When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child Protection Process"

        And I collapse "Child Protection Process"
        And I Add "Referral" plan or form from Select form or plan dropdown
        And I click on right mark to save selected form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"

        Then I approach to Contactor Details in Referral form
        Then I verify primary Need in Referral form
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        Then I update the "Primary Need" in Edit Person page

        Then I should see case facet with all the widgets
        And I navigate to "Referral" form from Journeys "Child Protection Process"
        And I set the Start date for Form
        Then I approach to Contactor Details in Referral form
        Then I verify primary Need in Referral form
        And I add contactor details in Referral Form without primary need 

        Then I should see Primary need Details have been updated notification

        And I click on Keepmychanges button
        # Then I approach to Contactor Details in Referral form

        And I approach to provide next steps options
        And I select "Strategy Discussion" from next steps list 
        And I search and select team as "Me" in next step
        And I set the Authorization or Rejection date for Form
        Then I Submit the form





