Feature: Services
  @regression
    Scenario: Adding new Service
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
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
        And I click on home to navigate to dashboard

    #     @addService @  
    # Scenario: As a valid user able to add new Service
    #     Given I am on the socialcare login page
    #     When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        And I add new Service Provider
        Then I add new Service

       @regression
    Scenario: As a Social Worker able to verify the service frequency on plans
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # When I create a new person
        # And I should see person facet with all the widgets
        # Then I should see person name on person facet     
        And I navigate to Adult Safeguarding Plan
        And I should see Adult Safeguarding Plan      
        Then I should see unique person in Subject of plan
        And I set the Start date for Form
        And I verify the Needs, Risks and Strengths options
        Then I verify the daily service frequency
        Then I verify the weekly service frequency
        Then I verify the monthly service frequency
        Then I verify the yearly service frequency

        @regression
    Scenario: Adult SafeGuarding Plan creation by SW to verify created scheduled frequency avialble to view
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I navigate to Adult Safeguarding Plan
        And I should see Adult Safeguarding Plan
        Then I should see unique person in Subject of plan
        And I set the Start date for Form
        And I verify the Needs, Risks and Strengths options
        And I choose to add Risk details
        And I choose to add Outcome details by linking Risks
        And I choose to add Action details by linking Outcomes
        And I choose to add daily scheduled service
        #And I choose to add Weekly scheduled service
        And I approach to provide next steps options
        And I select "-No Further Action Required" from next steps list
        And I approve the form
        # When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to Plans from Person page
        And I should see and select "Adult Safeguarding Plan" Owned by "SocialWorker1" from "Team2" with status "AUTHORISATION REQUESTED"
        And I should see Adult Safeguarding Plan
        Then I should see unique person in Subject of plan
        And I verify the Needs, Risks and Strengths options
        Then I should see the created daily and weekly scheduled service
        And I verify the Services Details in plan
