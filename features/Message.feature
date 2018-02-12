Feature: Messages

@sanity   @regression
    Scenario: As a social worker able to send message to manager
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I navigate to Messages
        When I create new message to "Team2" Manager "TeamManager1"

         @regression
    Scenario: As a Manger able to see messages
        Given I am on the socialcare login page
        When I login to "Team2" as "TeamManager1"
        Then I should be taken to team manager dashboard
        Then I navigate to Messages
        And I should see the unique Messages
        Then I choose reply the message

        @regression
    Scenario: As a Social Worker able to see replay message
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
		And I should see message with subject under workload section
        Then I navigate to Messages
        Then I verify the reply Message Visible

@regression 
    Scenario: As a social worker able to send message to manager
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I navigate to Messages
        When I create new Team message to "Team2" Manager "TeamManager1"
		Then I should see Team Message screen