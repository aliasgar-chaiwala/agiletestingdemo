Feature: Leave Care Assessment

   @regression
    Scenario: Adding Leave Care Assessment Flow
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I create a new Professional
        Then I should be taken to social worker dashboard
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON
        Then I create a new API person
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON1  
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON2        
        Then I create a new API person2
        Then I should be taken to social worker dashboard
        When I search for the unique person2 and select
        Then I should see person facet with all the widgets
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to "Leaving Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Assessment" form from Journeys "Leaving Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I search for the unique Person1 and select in Subject of form
        And I provide Education details in Leave Care Assessment
        And I provide Employment details in Leave Care Assessment
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I verify Course details in Education widgets
        When I navigate to Education details
        Then I verify the Course details in Education
        Then I search for the unique person1 and select
        Then I should see person facet with all the widgets
        And I verify Course details in Education widgets
        When I navigate to Education details
        Then I verify the Course details in Education

    @regression 
    Scenario: Approve Leave Care Assessment form 
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Leaving Care Assessment" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"
        Then I provide another New Employment details in Leave Care Assessment
        Then I approve the Form sent by Social Worker
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Assessment" form from Journeys "Leaving Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I verify the created company's under employment section
        Then I delete and verify the available employment details


    @regression 
    Scenario: Core Data for Approved Leave Care Assessment form
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to Leaving Care Assessment form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I verify the created company's under employment section


    @regression
    Scenario: Add Leave Care Assessment Flow and validated the core employment details
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON
        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        # When I create a new person
        # And I should see person facet with all the widgets
        # Then I should see person name on person facet
        And I navigate to "Leaving Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Assessment" form from Journeys "Leaving Care Process"
        #And I navigate to Leaving Care Assessment form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        And I provide Employment details in Leave Care Assessment
        And I approach to provide next steps options
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see "Leaving Care Assessment" Owned by "SocialWorker1" from "Team1" with status "IN PROGRESS"
        When I search for the unique person and select
        And I should see person facet with all the widgets
        And I navigate to Leaving Care Assessment form
        And I should see No employment Record under Employment

    @regression
    Scenario: Add everyone section for training component with same core data
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON
        Then I create a new API person
        Then I should be taken to social worker dashboard
        ###CREATE_NEWPERSON1  
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a new Training
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a new Training
        Then I should see person facet with all the widgets
        And I navigate to "Leaving Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Assessment" form from Journeys "Leaving Care Process"
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I search for the unique Person1 and select in Subject of form
        And I verify Training details with Everyone section under Leave Care Assessment Form

    @regression
    Scenario: Add everyone section for training component with different core data
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a another Training for person1
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a another Training for person
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Leaving Care Assessment" Owned by "SocialWorker1" from "Team1" with status "IN PROGRESS"
        Then I should see unique person in Subject of form
        And I verify Training details with Everyone section under Leave Care Assessment Form

    @regression
    Scenario: Verify everyone section for training component with same core data
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I create a new Organisation
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON
        Then I create a new API person
        Then I should be taken to social worker dashboard
        ###CREATE_NEWPERSON1  
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a new Training
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to Training under Education widget
        Then I create a another Training for person
        Then I should see person facet with all the widgets
        And I navigate to "Leaving Care Process"
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        And I navigate to "Leaving Care Assessment" form from Journeys "Leaving Care Process"
        #And I navigate to Leaving Care Assessment form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        When I search for the unique Person1 and select in Subject of form
        And I verify Training details with Person Names under Leave Care Assessment Form
        When I update the step level training data 
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Leaving Care Assessment" Owned by "SocialWorker1" from "Team1" with status "IN PROGRESS"
        Then I should see unique person in Subject of form
        And I verify Training details with Everyone section under Leave Care Assessment Form