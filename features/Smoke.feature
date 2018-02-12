Feature: HTML SMOKE
SMOKE TESTS TO VISIT & CAPTURE HTML DIFFERENCES

@addpersonPageSmoke
    Scenario: Adding persons
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I navigate to "Add a Person"
        Then I capture the source for "AddPerson"
        And I should see add person form