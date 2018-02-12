Feature: Equipment

@sanity   @regression
	Scenario: Add the equipment for new person
		Given I am on the socialcare login page
		When I login to "Team2" as "TeamManager1"
		Then I should be taken to team manager dashboard
		Then I create a new API person
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets
		# When I create a new person
		# Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
		Then I navigate to Equipments
		And I add new Equipment with category
		Then I create equipment with returned date
		Then I should see created equipment available on equipment page
		When I update created equipment with service date
		Then I should see updated service equipment available on equipment page