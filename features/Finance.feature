Feature: Finance

    @sanity   @regression
    Scenario: Create contibutions for finance widget
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I should see Finance with budget, contributions and provisions
        And I navigate to Finance contributions
        When I create new Contribution
        Then I should see the Created Contribution

       @regression
    Scenario: Create provisions for finance widget
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        Then I should be taken to social worker dashboard
        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I should see Finance with budget, contributions and provisions
        Then I navigate to Provision
        When I create new Provision
        Then I should see the Created Provisions under provisions

        @regression 
    Scenario: Update provisions for finance widget
        Given I am on the socialcare login page
        When I login to "Team1" as "TeamManager1"
        Then I should be taken to team manager dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        And I should see Finance with budget, contributions and provisions
        Then I navigate to Provision
        Then I should see the Created Provisions under provisions
        And I choose to update and verify the created Provision