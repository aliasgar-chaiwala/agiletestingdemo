@mentalCapacity @personalinformation
Feature: Mental Capacity

@smokeTest
    Scenario: As a Social Worker able to add mental capacity
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        Then I create a new API person
        Then I should be taken to social worker dashboard

        # When I create a new person
        # Then I should see person facet with all the widgets
        #CREATE_NEWPERSON1

        Then I create a new API person1
        Then I should be taken to social worker dashboard
        When I search for the unique person1 and select
        Then I should see person facet with all the widgets

        # When I create a new person1
        # Then I should see person1 name on person facet
        # And I should see person facet with all the widgets
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to mental capacity

        Then I verify all fields in mental capacity


        @sanity   @regression
    Scenario: Add safeguarding mental capacity
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        Then I create a new API person
        #Then I should be taken to social worker dashboard
        #Then I create a new API person2
        #Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to mental capacity
        Then I create Safeguarding Capacity with Advocate
        Then I should see created Safeguarding Capacity visible on capacity screen
        When I search for the unique person and select
        Then I should see Mental Capacity visible on person facet
        And I should see Mental Capacity Safeguarding visible on person facet

        @regression
    Scenario: Add Finance mental capacity
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to mental capacity
        Then I create Finance Capacity with Advocate
        Then I should see created Finance Capacity visible on capacity screen
        When I search for the unique person and select
        Then I should see Mental Capacity visible on person facet
        And I should see Mental Capacity Finance visible on person facet

        @regression
    Scenario: Add Health mental capacity
        Given I am on the socialcare login page
        When I login to "Team2" as "SocialWorker1"
        Then I should be taken to social worker dashboard
        When I search for the unique person and select
        Then I should see person facet with all the widgets
        Then I navigate to mental capacity
        Then I create Health Capacity with Advocate
        Then I should see created Health Capacity visible on capacity screen
        When I search for the unique person and select
        Then I should see Mental Capacity visible on person facet
        And I should see Mental Capacity Health visible on person facet