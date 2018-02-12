Feature: Case Note


 @sanity @regression
	Scenario: Add a Casenote
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I click Casenote icon
		And I should see Casenote page

		Then I click new Casenote button
		Then I should see new case note section
		And I create new Casenote for Current week
		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I click Casenote icon
		And I should see Casenote page
		Then I should see Created Current week Casenote

		And I change event timeline view to "View by day"
		Then I should see Created Current week Casenote

		And I change event timeline view to "View by week"
		Then I should see Created Current week Casenote

		And I change event timeline view to "View by month"
		Then I should see Created Current week Casenote

		# And I create new Casenote for previous month
		# And I change event timeline view to "View by year"
		# Then I should see Created previous month Casenote

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should see event for "Current Casenote" on personfacet


		# 	@groupCasenote @   @webclient @personalinformation @person-events @bug55616
		# Scenario: Add a Casenote
		# 	Given I am on the socialcare login page
		# 	When I login to "Team1" as "TeamManager1"
		# 	Then I should be taken to team manager dashboard

		# 	Then I navigate to create group page
		# 	And I should see create group page
		# 	Then I create a group between unique person and person1
		# 	Then I should group details on group facet

		# 	When I search for the unique person and select
		# 	Then I should see person facet with all the widgets
		# 	Then I should see group details on person facet

		# 	Then I search and select created group
		# 	Then I should group details on group facet

		# 	Then I navigate to "Add a Casenote"
		# 	# Then I click Casenote icon
		# 	And I should see Casenote page

		# 	Then I click new Casenote button
		# 	Then I should see new case note section
		# 	And I create new Casenote for Current week

		# 	And I change event timeline view to "View by day"
		# 	Then I should see Created Current week Casenote

		# 	And I change event timeline view to "View by week"
		# 	Then I should see Created Current week Casenote

		# 	And I change event timeline view to "View by month"
		# 	Then I should see Created Current week Casenote

		# 	# And I create new Casenote for previous month
		# 	# And I change event timeline view to "View by year"
		# 	# Then I should see Created previous month Casenote

		# 	When I search for the unique person and select
		# 	Then I should see person facet with all the widgets
		# 	Then I should see event for "Current Casenote" on personfacet

