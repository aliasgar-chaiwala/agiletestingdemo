
Feature: Tasks
Adding a task for a Person-Case & Tam to SW-TM

@sanity   @regression
	Scenario: Add a Task for person to User
		Given I am on the socialcare login page
		When I login to "Team2" as "TeamManager1"
	    Then I should be taken to team manager dashboard
		Then I create a new API person
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
        #When I search for the unique person and select
		#Then I should see person facet with all the widgets
		Then I navigate to tasks page
        Then I create a new task for person to user
		Then I should see created person task
		Then I mark my task done
		Then I collapse expanded task

		@sanity @regression
	Scenario: Add a Task for person to User
		Given I am on the socialcare login page
		When I login to "Team2" as "TeamManager1"
	    Then I should be taken to team manager dashboard
        Then I navigate to tasks page
		Then I create a team task for "Team2" to user
		Then I should see created team task for "Team2"
		Then I mark team task for "Team2" done
		Then I collapse expanded task
		Then I switch task view to "Team tasks"
		Then I should see created team task for "Team2"
		And I own the team task for "Team2"
		Then I mark team task for "Team2" done
		