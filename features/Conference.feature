Feature: Create conference form

@regression
    Scenario: Verify transfer in conference details
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        #CREATE_NEWPERSON

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Adult Safeguarding Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Conference" form from Journeys "Adult Safeguarding Process"

        # When I create a new person
        # And I should see person facet with all the widgets
        # Then I should see person name on person facet
        #When I search for the unique person and select
       # And I navigate to Conference form
        Then I should see unique person in Subject of form
        And I set the Start date for Form
        Then I provide the Conference details
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        And I submit the Form for Manager Approval
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets
        Then I navigate to Forms from Person page
        And I should see and select "Conference" Owned by "SocialWorker1" from "Team1" with status "AUTHORISATION REQUESTED"



