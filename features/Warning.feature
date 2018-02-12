Feature: Warning
I want to verify Adding a warning to a Person/Case

@sanity   @regression
	Scenario: Add a warning
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets

		# Then I create a new person
		# Then I should see person facet with all the widgets
		# When I search for the unique person and select
		# Then I should see person facet with all the widgets
		Then I click warning icon
		And I should see warning page
		And I create new warning
		Then I should see Created Warning
		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should see event for "Warning created" on personfacet

