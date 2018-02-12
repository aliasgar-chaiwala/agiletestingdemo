
Feature: Connections
I want to verify connections to a Person/Case

	@sanity   @regression
	Scenario: Adding  connection
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard

		Then I create a new API person1
		Then I should be taken to team manager dashboard

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Parent"
		Then I should see "Parent/Parental Responsibility" connection with "person1" in Connections Explorer

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		And I should see connected "person1" pill under relationship on person facet with relation as "Parent"
		And I should see "Parent" relation and parental responsibility with "person1" under Essential Information

		When I navigate to connections
		Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"
		Then I change connection filter to filter by "Same address"
		Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"

		Then I create a new API person2
		When I search for the unique person2 and select
		And I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
		Then I should see person2 name on person facet

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Extended family" and relation as "Uncle/Aunt"
		Then I should see "Uncle/Aunt/Parental Responsibility" connection with "person1" in Connections Explorer

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		When I navigate to connections
		Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"
		Then I click on first degree connection
		Then I should see created 2nd degree connection with person


	##@regression
	#Need to review
	Scenario: Add a GPconnection
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard


		Then I create a new API person
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets

		# Then I create a new person
		# Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I create a new API person1
		Then I should see person facet with all the widgets
		When I search for the unique person1 and select
		Then I should see person facet with all the widgets

		# When I create a new person1
		# Then I should see person1 name on person facet
		# And I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		When I search for the unique person and select
		Then I should see person facet with all the widgets

		Then I navigate to connections
		Then I should see connections page

		Then I create "GP" connection with "person1"

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		Then I should see person pill for "person1" under relationship on person facet with "GP" relation
		Then I should see "GP" relation and parental responsibility with "person1" under Essential Information

		When I navigate to connections
		# Then I change connection filter to ""
		Then I should see "GP" connection with "person1" in Connections Explorer

	@  
	Scenario: Edit and Add multiple connections
	##(SP:To be changed later once Edit func fixes)
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard

		Then I create a new API person1
		Then I should be taken to team manager dashboard

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Parent"
		Then I should see "Parent/Parental Responsibility" connection with "person1" in Connections Explorer

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		And I should see connected "person1" pill under relationship on person facet with relation as "Parent"

		# When I navigate to connections
		# Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"
		# And I edit the first degree connection with "person1" where type as "Social" and relation as "Biological Parent"

		# And I verify save button disabled when removing all relations with "person1" in Edit mode

		# When I search for the unique person and select
		# Then I should see person facet with all the widgets
		# Then I should not see "Default Link" Event on facet

		# And I should see connected "person1" pill under relationship on person facet with relation as "2 relationships"

		And I click on connection pill of "person1" on "person" summary page and verify

		Then I click on edit Icon
		And I update firstName of unique "person1"
		And I submit the edit page

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		And I should see connected "person1" pill under relationship on person facet with relation as "Parent"

		And I click on connection pill of "person1" on "person" summary page and verify
		And I should see connected "person" pill under relationship on person facet with relation as "Child"

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		When I navigate to connections
		Then I should see created connection with other person in Connections Explorer with relation as "Parent/Parental Responsibility"
	# And I edit the first degree connection with "person1" where responsibility is none
	# Then I should see created connection with other person in Connections Explorer with relation as "2 relationships"

	@  
	Scenario: Verify filter behaviour
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard

		Then I create a new API person1
		Then I should be taken to team manager dashboard

		When I search for the unique person1 and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I click on edit Icon
		And I update gender as "Male"
		And I submit the edit page

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		When I navigate to connections
		And I verify auto selected "person" in To field when creating new connections
		And I verify Connection RelatedAs filter behaviour with gender of "person1" as "Male"

		When I search for the unique person1 and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I click on edit Icon
		And I update gender as "Female"
		And I submit the edit page

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		When I navigate to connections
		And I verify Connection RelatedAs filter behaviour with gender of "person1" as "Female"

	@regression @Bug67625
	Scenario: Add connection and verify bidirectional
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard

		Then I create a new API person1
		Then I should be taken to team manager dashboard

		When I search for the unique person1 and select
		Then I should see person facet with all the widgets
		Then I click on edit Icon
		And I update gender as "Female"
		And I submit the edit page

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Wife"
		Then I should see "Wife/Parental Responsibility" connection with "person1" in Connections Explorer

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		And I should see connected "person1" pill under relationship on person facet with relation as "Wife"

		When I navigate to connections
		Then I should see created connection with other person in Connections Explorer with relation as "Wife/Parental Responsibility"

		And I search for the unique person and select
		Then I should see person facet with all the widgets
		And I click on connection pill of "person1" on "person" summary page and verify
		And I should see connected "person" pill under relationship on person facet with relation as "Spouse"

		Then I create a new API person1

		And I search for the unique person and select
		Then I should see person facet with all the widgets

		Then I click on edit Icon
		And I update gender as "Male"
		And I submit the edit page

		Then I navigate to connections
		Then I should see connections page
		Then I create first connection with "person1" where type as "Family" and relation as "Child"
		Then I should see "Child/Parental Responsibility" connection with "person1" in Connections Explorer

		And I search for the unique person and select
		Then I should see person facet with all the widgets
		And I should see connected "person1" pill under relationship on person facet with relation as "Child"
		And I click on connection pill of "person1" on "person" summary page and verify
		And I should see connected "person" pill under relationship on person facet with relation as "Father"