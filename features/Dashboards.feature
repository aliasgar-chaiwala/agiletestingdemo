
Feature: Dashboards
I want to verify the user dashboards in the system

@sanity   @regression
	Scenario: Verify Dashboards - TM 2
		Given I am on the socialcare login page
		When I login to "Team2" as "TeamManager1"
		Then I should be taken to team manager dashboard
		And I should see user name of "TeamManager1" from "Team2" on dashboard
		And I should see side pane on dashboard
		And I verify Workload under side pane on dashboard
		And I verify Forms under side pane on dashboard
		And I should see Members list on page
		And I navigate to cases in page and verify
		And I navigate to Approvals Requests page and verify
		And I navigate to Unassigned Workload page and verify
		And I click on home to navigate to dashboard

		@regression
	Scenario: Verify Dashboards - SW
		Given I am on the socialcare login page
		When I login to "Team1" as "SocialWorker1"
		Then I should be taken to social worker dashboard
		And I should see user name of "SocialWorker1" from "Team1" on dashboard
		And I should see side pane on dashboard
		And I verify Workload under side pane on dashboard
		And I verify Forms under side pane on dashboard

		@regression
	Scenario: Verify myteamapp - TM
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard
		And I should see user name of "TeamManager1" from "Team1" on dashboard
		And I navigate to myteamapp from dashboard
		And I should see member count and case count
		And I expand the "SocialWorker1" block of "Team1" to see cases
		And I click on home to navigate to dashboard
		# And I should see member count and case count same as my team app
		Then I should be taken to team manager dashboard
		And I expand the "SocialWorker1" block of "Team1" to see cases

		@regression
	Scenario: Verify Logout and Browser back session 
		Given I am on the socialcare login page
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard
		And I should see user name of "TeamManager1" from "Team1" on dashboard
		Then I create a new API person
		When I search for the unique person and select
		# Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
		And I logout from application
		And I navigate back in browser
		
		When I login to "Team1" as "TeamManager1"
		Then I should be taken to team manager dashboard
		And I should see user name of "TeamManager1" from "Team1" on dashboard

		# @userLogins		
		# Scenario Outline: Login Specified User 
		# Given I am on the socialcare login page
		# When I login as <User> on given env
		# Then I navigate to My profile
		# # # Then I search and select user <User>
		# # And I should see user facet with user details for <User>
		# Examples: 
		# | User   |
		# # # | Darren M Dixie |
		# # # | Darren Dixie|
		# # # |	Pierce Reeve	|
		# # # |	Kim Roberts	|
		# # # |	Tristen Smedley	|
		# # # |	Michael Wilkins	|
		# # # |	Penelope Snelling	|
		# # # |	Kelly Winters	|
		# # # |	Lilly Brooks	|
		# # # |	Graham Smith 	|
		# # # |	Tilly Farrell 	|
		# # # |	Laurence Moran 	|
		# # # |	Pete Freeman 	|
		# # # |	Terry Alberts 	|
		# # # |	Morgan Bond 	|
		# # # |	Ken Robertson 	|
		# # # |	Lamene Awolowo 	|
		# # # |	Grainne Houlihan	|
		# # # |	Matt Colton 	|
		# # # |	Gary Winchester 	|
		# # # |	Tom Hayward 	|
		# # # |	Milton Gardyner 	|
		# # # |	Paul Blackburn 	|
		# # # |	Krishna Sharma 	|
		# # # |	Lena Nowak 	|
		# # # |	Gene Parker	|
		# # # |	Carrie Burke 	|
		# # # |	Christopher Gilbert 	|
		# |	Auto TesterTM0	|
		# |	Auto TesterTM1	|
		# |	Auto TesterSW0 	|
		# |	Auto TesterSW1	|
		# # # |	Carl Greene 	|
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