Feature: Case bubble size

     @regression
    Scenario: Validate Case Bubble Size
        Given I am on the socialcare login page
        When I login to "Team3" as "TeamManager1"
        Then I should be taken to team manager dashboard
        And I cleanup unassigned Cases upto 10 cases to "TeamManager1" of "Team3"
        Then I create a new API person1
        Then I should be taken to team manager dashboard
        And I search for the unique person1 and select
        Then I should see person facet with all the widgets
        Then I should not see "Default Link" Event on facet
        And I navigate to "Adult Safeguarding Process"
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets
        Then I verify unassigned workload and allocte case1 to "SocialWorker1" of "Team3"
        And I logout from application
        And I navigate back in browser
        Given I am on the socialcare login page
        When I login to "Team3" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I verify the allocated person1 case under Case Load Screen
        And I verify the case bubble size
        And I search for the unique person1 and select
        Then I should see case facet with all the widgets
        And I navigate to "Strategy Discussion" form from Journeys "Child Protection Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        And I provide Strategy discussion details on Strategy Discussion form
        And I approach to provide next steps options
        And I select "Other-S47 Enquiry" from next steps list
        And I search and select team as "Me" in next step
        Then I Submit the form
        And I search for the unique person1 and select
        Then I should see case facet with all the widgets
        And I navigate to "Adult Safeguarding Plan" form from Journeys "Adult Safeguarding Process"
        Then I should see unique person1 in Subject of form
        And I set the Start date for Form
        And I approach to provide next steps options
        And I select "Other-No Further Action Required" from next steps list
        Then I Submit the form
        Then I should see case facet with all the widgets
        Then I verify the increased case bubble size


