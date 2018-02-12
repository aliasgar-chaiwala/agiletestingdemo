Feature: Contribution

  @regression
    Scenario: Create new finance contributor
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard

        # When I create a new person
        # Then I should see person facet with all the widgets

        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets

        # When I create a new person1
        # Then I should see person1 name on person facet

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I should see Finance with budget, contributions and provisions

        And I navigate to Finance contributions

        When I create new Contribution

        Then I should see the Created Contribution

        @smoke
    Scenario: Verify finance contributor fields 
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets

        # When I create a new person
        # Then I should see person facet with all the widgets
        And I should see Finance with budget, contributions and provisions
        And I navigate to Finance contributions
        Then I validate all contribution fields