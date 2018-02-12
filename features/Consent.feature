Feature: Consent
I want to verify Adding a Consent to a Person/Case

  @regression
	Scenario: Adding Consent
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard

		Then I create a new API person
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets

		Then I create a new API person1
		Then I should see person facet with all the widgets
		When I search for the unique person1 and select
		Then I should see person facet with all the widgets
		Then I should see person1 name on person facet

		When I create a new Professional
		Then I should be taken to team manager dashboard
		#SEARCH PROFESSIONAL
		# When I search for the professional and select
		# Then I should see professional page with all the widgets
		#CREATE ORGANISATION
		When I create a new Organisation
		Then I should be taken to team manager dashboard
		#SEARCH ORGANISATION
		When I search for the organisation and select
		Then I should see organisation page with all the widgets

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet

		Then I click Consent icon
		And I should see Consent page
		Then I create new Partial Consent
		Then I add more details for new Partial Consent
		Then I submit new Partial Consent
		Then I click Consent icon
		Then I should see Created Partial Consent
		Then I Hover on consent icon to check created consent

