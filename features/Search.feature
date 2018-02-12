Feature: Search Feature
@sanity   @regression
  Scenario: Adding person And Searching
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard

    Then I create a new API person
    Then I should be taken to social worker dashboard
    When I search for the unique person and select
    Then I should see person facet with all the widgets

    # When I create a new person
    # Then I should see person facet with all the widgets
    # When I search for the unique person and select
    # Then I should see person facet with all the widgets

    @regression
  Scenario: Searching an existing professional
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the professional and select
    Then I should see professional page with all the widgets

    @regression
  Scenario: Searching an existing Organisation
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    When I search for the organisation and select
    Then I should see organisation page with all the widgets

   @regression
  Scenario: Adding person And Searching
    Given I am on the socialcare login page
    When I login to "Team1" as "SocialWorker1"
    Then I should be taken to social worker dashboard
    # When I create a new person with "LA12 8EU" post code
    # Then I should see person facet with all the widgets
    And I search and select the person by "LA12 8EU" postcode
    Then I should see person facet with all the widgets

    # @SearchUser
    # Scenario Outline: Searching User
    # Given I am on the socialcare login page
    # When I login to "Team1" as "SocialWorker1"
    # When I login as <User> on given env
    # Then I should be taken to social worker dashboard
    # Then I navigate to My profile
    # Then I search and select user <User>
    # And I should see user facet with user details for <User>
    # Examples: 
    # | User   |
    # # | Darren M Dixie |
    # # | Darren Dixie|
    # |	Pierce Reeve	|
    # |	Kim Roberts	|
    # |	Tristen Smedley	|
    # |	Michael Wilkins	|
    # |	Penelope Snelling	|
    # |	Kelly Winters	|
    # |	Lilly Brooks	|
    # |	Graham Smith 	|
    # |	Tilly Farrell 	|
    # |	Laurence Moran 	|
    # |	Pete Freeman 	|
    # |	Terry Alberts 	|
    # |	Morgan Bond 	|
    # |	Ken Robertson 	|
    # |	Lamene Awolowo 	|
    # |	Grainne Houlihan	|
    # |	Matt Colton 	|
    # |	Gary Winchester 	|
    # |	Tom Hayward 	|
    # |	Milton Gardyner 	|
    # |	Paul Blackburn 	|
    # |	Krishna Sharma 	|
    # |	Lena Nowak 	|
    # |	Gene Parker	|
    # |	Carrie Burke 	|
    # |	Christopher Gilbert 	|
    # |	Auto TesterTM0	|
    # |	Auto TesterTM1	|
    # |	Auto TesterSW0 	|
    # |	Auto TesterSW1	|
    # |	Carl Greene 	|
    # |	Cathy Ferguson 	|
    # |	Auto TesterTM2	|
    # |	Auto TesterTM3 	|
    # |	Auto TesterSW2 	|
    # |	Monitoring UserTM 	|
    # |	Monitoring UserSW	|
    # |	Auto TesterTM4 	|
    # |	Auto TesterTM5 	|
    # |	Auto TesterSW3 	|
    # |	Auto TesterSW4	|
