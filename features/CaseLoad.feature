Feature: Case load

    @regression
    Scenario: Allocte the case to other social worker
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
       # And I navigate to "Adult Safeguarding Plan" form from Journeys "Adult Safeguarding Process"
        # Then I verify single assessment Form
        # And I set the Start date for Form
        # # And I add Assessemnt start date details
        # And I fill Assessment Details on single assessment form
        # And I approach to provide next steps options
        # And I select "Child in Need Process-Child in Need Plan" from next steps list
        # And I search and select team as "Me" in next step
        # Then I submit the Form as a Manager      
        #When I search for the unique person2 and select
        #Then I should see case facet with all the widgets
        #Then I navigate to Forms from Person page
        #And I should see "Single Assessment" Owned by "TeamManager1" from "Team2" with status "APPROVED"
        Then I verify unassigned workload and allocte case1 to "SocialWorker1" of "Team3"  

     @regression
    Scenario: As a social worker able to verify the allocted case
        Given I am on the socialcare login page
        When I login to "Team3" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I verify the allocated person1 case under Case Load Screen