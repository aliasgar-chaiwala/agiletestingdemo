@provision
Feature: As user able to create Finance provisions

    Scenario: As a user able to verify and create provisions for finance widget
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard

        # When I create a new person
        # Then I should see person facet with all the widgets    

        Then I create a new API person1
        Then I should see case facet with all the widgets
        When I search for the unique person1 and select
        Then I should see case facet with all the widgets

        # When I create a new person1
        # And I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see case facet with all the widgets       
        And I should see Finance with budget, contributions and provisions
        Then I navigate to Provision
        When I create new Provision
        Then I should see the Created Provisions under provisions

        @smoke
    Scenario: As a user able to verify all fields under finance provision
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see case facet with all the widgets

        # When I create a new person
        # Then I should see person facet with all the widgets          
        And I should see Finance with budget, contributions and provisions
        Then I navigate to Provision
        And I verify all fields under provision
