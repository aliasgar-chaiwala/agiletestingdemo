Feature: Stage2 Assessment Form

    @regression
    Scenario: As a social worker able to submit the form for manager approval
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #Person
        Then I create a new API person
        Then I should be taken to social worker dashboard
        #new person1
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets

        When I search for the unique person and select
        Then I should see person facet with all the widgets
        # Then I create a new person
        # Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I set the Start date for Form
        And I provide Contactor Details in Contact Record       
        # And I verify Primary Support Reason in Contact Record
        And I approach to provide next steps options
        And I select "Other-Stage 2 Assessment" from next steps list
        And I search and select team as "Me" in next step
        # And I select priority in next step       
        And I submit the Form for Manager Approval
        When I search for the unique person and select
        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to Forms from Person page
        And I should see and select "Stage 2 Assessment" Owned by "SocialWorker1" from "Team2" with status "NEW"
        #Then I verify stage2 assessment Form
        And I should see unique person in Subject of form
        And I set the Start date for Form
        When I provide background check information
        And I should see everyone after clubbing data
        And I approach to provide next steps options
        And I select "Other-Child Protection Conference" from next steps list
        And I search and select team as "Me" in next step
        Then I submit the Form for Manager Approval 
        # Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should see event for "Stage 2 assessment allocated" on personfacet
        Then I should see event for "Stage 2 assessment SFA" on personfacet
        Then I navigate to Forms from Person page
        And I should see "Stage 2 Assessment" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"

    @regression
    Scenario: As a valid user able to verify the core saved reference check data
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I set the Start date for Form       
        And I provide Contactor Details in Contact Record
        #And I provide Contactor Details in Contact Record with Extra sourceOfReferral
        And I approach to provide next steps options
        And I select "Other-Stage 2 Assessment" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval
        When I search for the unique person and select
        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to Forms from Person page
        And I should see and select "Stage 2 Assessment" Owned by "SocialWorker1" from "Team2" with status "NEW" 
        And I should see unique person in Subject of form 
        #When I search for the unique Person1 and select in Subject of form    
        When I verify the saved core data under reference checks
        And I should see everyone after clubbing data
        Then I update the reference check details
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Stage 2 Assessment" Owned by "SocialWorker1" from "Team2" with status "IN PROGRESS"
        When I verify the saved step data under reference checks
        And I should see everyone after clubbing data
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to Contact Record form
        Then I should see unique person in Subject of form
        When I search for the unique Person1 and select in Subject of form
        And I set the Start date for Form
        #And I provide Contactor Details in Contact Record with Extra sourceOfReferral
        And I approach to provide next steps options
        And I select "Other-Stage 2 Assessment" from next steps list
        And I search and select team as "Me" in next step
        And I submit the Form for Manager Approval
        When I search for the unique person and select
        And I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        Then I navigate to Forms from Person page
        And I should see and select "Stage 2 Assessment" Owned by "SocialWorker1" from "Team2" with status "NEW" 
        And I should see unique person in Subject of form
        When I verify the saved core data under reference checks