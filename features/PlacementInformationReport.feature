Feature: Placement Information Report

     @regression
         Scenario: Adding PIR, then Set medicaiton for 2 persons
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        #Then I should not see "Default Link" Event on facet
        
        Then I create a new API person1        
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        # Then I should not see "Default Link" Event on facet
        
        Then I create a new API person2        
        And I search for the unique person2 and select
        # Then I should see person facet with all the widgets       
        # Then I should not see "Default Link" Event on facet

        When I search for the unique person and select
        #Then I should see person facet with all the widgets
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I search for the unique Person1 and select in Subject of form
       # And I approach to provide Medical conditions on PIR form
        # And I verify Empty Medical conditions for Everyone on PIR form
        # And I provide Medical conditions on PIR form
        And I approach to provide Medication on PIR form
        And I verify Empty Medication for Everyone on PIR form
       
        And I provide Medication on PIR form
        And I approach to provide Disabilities on PIR form
        And I provide Disabilities on PIR form  
        #And I approach to provide Disabilities on PIR form
        ##PBI52305scenario
        #When I search for the unique person and select
        #Then I should see case facet with all the widgets
        #Then I navigate to Health Widget
        #Then I should see no records found on disabilities
        ##PBI53286scenario
        When I search for the unique person and select
       Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should not see notification
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval  
        And I should see "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"   
        #Then I should see case facet with all the widgets  
        # When I search for the unique person and select
        ##Then I should see case facet with all the widgets

         @regression
    Scenario: verify medicaiton in both person health widget created from PIR and delete person1 medication from Health info
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        # verify Medication details in Health Widget for unique person
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I verify Disabilities created in Health Information from PIR form
        And I verify Medication created in Health Information from PIR form
        When I search for the unique person1 and select
        Then I should see person1 name on person facet
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I verify Disabilities created in Health Information from PIR form
        And I verify Medication created in Health Information from PIR form
        Then I delete Medication from Health Information
        And I save the Health Information
        #PBI53286scenario
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"
        And I approach to provide Medication on PIR form
        Then I should not see notification

       @regression
    Scenario: Verify medication for unique person and Empty medicaiton for person1
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medication on PIR form
        And I verify Medication for unique Person on PIR form
        And I verify Empty Medication for unique Person1 on PIR form

       @regression
    Scenario: Add medicaiton for person2 from Health Information and data should be same as data for unique person and person1
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I verify Medical Conditions on Health Information
        And I create Medication in Health Information
        And I save the Health Information

        @regression
    Scenario: Verify Everyone in PIR for all 3 persons as medicaiton is same for all and then split person2 from first 2 persons
        # Given I Login into Older People Area Team - North as Social Worker
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I search for the unique Person2 and select in Subject of form
        And I approach to provide Medication on PIR form
        Then I verify Medication for Everyone on PIR form
        And I remove Person2 from This is for in Medication of PIR Form
        And I verify Medication for first two Person on PIR form
        And I verify Empty Medication for unique Person2 on PIR form

        @regression
    Scenario: Verify the Health medication comparison window visible on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        
       # Then I should see unique person in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        #When I update the medication on PIR Form
        #And I verify Empty Medication for unique Person1 on PIR form
        Then I provide Medication on PIR form
        When I search for the unique person and select
        Then I should see case facet with all the widgets              
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        When I search for the unique person and select
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        #Then I should not see notification
        Then I should see compare changes notification
        #Then I should see comparison window
        #And I verify the field and version details

        @regression
    Scenario: Verify the Health medication latest changes visible on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        #Then I should not see notification
        Then I should see compare changes notification
        Then I choose and verify the keep my latest changes
        
        @regression
        Scenario: Add more Healthy medication and verify latest changes visible on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        #Then I enable "notifications" Feature
        Then I navigate to Health Widget
        Then I provide Third Medication on Health Widget
        #When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        #Below step it verifies 'added' status and choose keep my changes
        Then I should see comparison window with status added

        @regression
    Scenario: Delete created health medication from PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        When I delete and verify the created medication on PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        #Below step it verifies 'removed' status and choose keep my changes
        Then I should see comparison window with status removed

        @regression
    Scenario: Delete created health medication from Health Widget
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget      
        When I delete and verify the created medication on Health Information
        And I save the Health Information
        #When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should see compare changes notification
        Then I choose and verify the keep my latest changes

        @regression
    Scenario: Add more Healthy medication and update with latest changes and updated care data should visible on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        #Then I enable "notifications" Feature
        Then I navigate to Health Widget
        Then I provide Third Medication on Health Widget
        #When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should see compare changes notification
        Then I choose and verify the latest changes
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should not see notification
        When I delete the medication on step level 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should not see notification
        #Then I should see comparison window
        #And I verify the field and version details


        @regression
    Scenario: Verify the Healthy medication comparison window for different core data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        # When I create a new person1
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        #new person
        Then I create a new API person
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        # When I create a new person
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I create Medication in Health Information
        #And I save the Health Information
        #When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        When I verify person1 and update medication on everyone section
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should not see notification
        # Then I should see compare changes notification
        # Then I should see comparison window
        # And I verify the field and version details
        # Then I should see two subjected persons under comparison window
        # Then I verify comparison window and choose latest
        #Then I should see comparison window with not clubbed core data

        @regression
    Scenario: Verify the Healthy medication comparison window for same core data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        # When I create a new person1
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets		
        #new person
        Then I create a new API person
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        # When I create a new person
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        And I should see everyone on everyone section
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should see compare changes notification
        Then I should see comparison window
        And I verify the field and version details
        Then I verify comparison window and choose latest
        And I should see everyone after clubbing data


        @regression
    Scenario: Verify the Health Disability data visible on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        # When I create a new person
        # Then I should see case facet with all the widgets
        #Then I enable "notifications" Feature
        Then I navigate to Health Widget
        Then I provide Two Disabilities on Health Widget
        And I save the Health Information
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I approach to provide Disabilities on PIR form
        Then I should see Created Disabilities on PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        When I update created disabilities Details
        And I save the Health Information
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        Then I should see unique person in Subject of form
        And I approach to provide Disabilities on PIR form
        Then I should see Created Disabilities on PIR Form

        @regression
    Scenario: Verify Health facet diabilities after PIR Form discarding
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I create a new API person
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        # When I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form      
        And I approach to provide Disabilities on PIR form
        And I verify Empty Disabilities for Everyone on PIR form
        And I provide Disabilities on PIR form   
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        Then I discard the Form as a Social Worker
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I should see no records found on disabilities

        @regression
    Scenario: Verify the Healthy Disabilities for two different persons core data should appear on PIR Form
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        # When I create a new person1
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Disabilities on Health Widget
        And I save the Health Information
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets		
        #new person
        Then I create a new API person
        Then I should see case facet with all the widgets	
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        # When I create a new person
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Disabilities on Health Widget
        And I save the Health Information
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Disabilities on PIR form     
        Then I should see created Disabilities for both persons
        When I choose another person to see everyone section
        Then I should see unique person disabilities under everyone section       
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        # And I should see "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"

        @regression
    Scenario: Verify the Healthy medication comparison window for two different persons core data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        #Then I enable "notifications" Feature
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        #When I search for the unique person1 and select
        Then I should see case facet with all the widgets		
        #new person
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I verify Medical Conditions on Health Information
        And I create Medication in Health Information
        And I save the Health Information
        Then I should see case facet with all the widgets
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        When I update the medication on PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should see compare changes notification
        Then I should see comparison window
        And I verify the field and version details
        Then I should see two subjected persons under comparison window

        @regression
    Scenario: Verify the Healthy medication comparison window for two different persons with combined Data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        Then I should see person facet with all the widgets		
        #new person1
        Then I create a new API person1
        Then I should see person facet with all the widgets
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        # And I verify Medical Conditions on Health Information
        # And I create Medication in Health Information
        # And I save the Health Information
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        When I update the medication on PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medication on PIR form
        Then I should not see notification
        #Then I should see compare changes notification
        #Then I should see comparison window
        #And I verify the field and version details
        #Then I should see two subjected persons under comparison window
        #When I should not see Update My Changes With Selecting Combinations
        #Then I not able to see latest changes when I choose latest version    
        #And I set Reset then I should not see Update My Changes With Selecting Combinations
        #When I set combinations by choosing update my changes with selecting combinations
        #And I choose and verify the updated combined changes 


        @regression
    Scenario: Verify the Mis Match Data and submit the form with keep changes
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        # When I create a new person
        # Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Two Medication on Health Widget
        Then I enable "coreVersionCheck" Feature
        Then I should see person facet with all the widgets	
        And I navigate to "Child In Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        And I approach to provide Medication on PIR form
        Then I should not see notification
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        Then I provide Third Medication on Health Widget
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"     
        And I set the Start date for Form
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        
        Then I should see Information Mismatch Notification
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "APPROVED"

        @regression
    Scenario: Verify the Medical Conditions comparison window for two different persons core data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        Then I navigate to Health Widget
        And I create multiple Medical Conditions
        And I save the Health Information
        Then I should see case facet with all the widgets		
        #new person
        Then I create a new API person
        Then I should see case facet with all the widgets
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Health Widget
        And I create a Medical Conditions
        And I save the Health Information
        Then I should see case facet with all the widgets
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Child In Care Process"
        When I search for the unique person2 and select
        Then I should see case facet with all the widgets
        And I navigate to "Placement Information Record" form from Journeys "Child In Care Process"
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I approach to provide Medical conditions on PIR form
        Then I should not see notification
        When I update the Medical Conditions on PIR Form
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Placement Information Record" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        And I approach to provide Medical conditions on PIR form
        Then I should see the Medical Condition compare changes notification
        Then I should see the Medical Condition comparison window
        And I verify the field and version details
        Then I should see two subjected persons under comparison window