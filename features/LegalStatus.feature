Feature: Legal Status


 @regression
	Scenario: Add a legal status
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		#Then I should be taken to team manager dashboard

		#Then I create a new person
		# Then I should see person facet with all the widgets

		#Then I create a new API person2
		#Then I should be taken to team manager dashboard
		#And I search for the unique person2 and select
		#Then I should see case facet with all the widgets

		# When I create a new person2
		# And I should see person facet with all the widgets
		# Then I should see person2 name on person facet	
		#Then I should not see "Default Link" Event on facet

		When I search for the unique person and select
		Then I should see person facet with all the widgets

		# Then I navigate to connections
		# Then I should see connections page
		# Then I create first connection with "person2" where type as "Family" and relation as "Parent"

		#And I search for the unique person and select
		#Then I should see person facet with all the widgets

		#And I should see connected person pill under relationship on person facet with relation as "Parent"		
		#And I should see "Parent" relation and parental responsibility with "person2" under Essential Information

		#When I search for the unique person and select
		#Then I should see person facet with all the widgets
		Then I navigate to "Add a Status"

		Then I should see legal status page
		Then I click new legal status icon
		And I should see new legal status section
		And I create new Status with "C1 - Interim care order" status
		Then I should see Created Status with "C1 - Interim care order" status

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should see event for "Status added - C1 - Interim care order" on personfacet
		# Then I should see event for "Status updated - C1 - Interim care order" on personfacet
		And I should see "Council" parental responsibility for "unique" person under Essential Information

