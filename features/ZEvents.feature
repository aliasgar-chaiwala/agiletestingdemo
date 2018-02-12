Feature: Verify Events on Adding a Consent to a Person/Case
I want to verify Events on Adding a Consent to a Person/Case

@consentevent
	Scenario: Add a Consent & verify events
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard
		# Then I create a new person
		# Then I should see person facet with all the widgets
		# When I search for the unique person and select
		# Then I should see person facet with all the widgets
		# Then I click Consent icon
		# And I should see Consent page
		# And I create new Partial Consent
		# Then I click Consent icon
		# Then I should see Created Partial Consent
		# Then I Hover on consent icon to check created consent
		# Then I click on home to navigate to dashboard

		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should see event for "Partial Consent" on personfacet
		Then I should see event for "Contact Record" on personfacet
		Then I should see event for "Warning created" on personfacet
		# Then I should see event for "Casenote" on personfacet
		# Then I should see event for "Healthinfo" on personfacet
		Then I should see event for "S47 Enquiry" on personfacet
		Then I should see event for "Conference allocated" on personfacet
		Then I should see event for "Single assessment approved" on personfacet
		Then I should see event for "Case closure request allocated" on personfacet
		Then I should see event for "Case closure request approved" on personfacet
		Then I should see event for "Status added - C1 - Interim care order" on personfacet
		Then I should see event for "Status updated - C1 - Interim care order" on personfacet

