Feature: Budget

 @sanity   @regression
	Scenario: Add agreed and indicative amount
		Given I am on the socialcare login page
		When I login to "Team2" as "SocialWorker1"
		Then I should be taken to social worker dashboard

		Then I create a new API person
		Then I should be taken to social worker dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets

		# When I create a new person
		# Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
		Then I navigate to Finance Personal Budget
		And I add new personal budget
		When I choose recurring payment method as cheque
		Then I choose provision and create personal budget
		Then I should see created budget amount on personal budget page

		@updateBudget
	Scenario: As a Manager able to update agreed and indicative amount
		Given I am on the socialcare login page
		When I login to "Team2" as "TeamManager1"
		Then I should be taken to team manager dashboard
		When I search for the unique person and select
		Then I navigate to Finance Personal Budget	
		Then I should see created budget amount on personal budget page
		When I update the agreed amount
		Then I should see updated agreed amount on personal budget page

		@smoke
	Scenario: As a User able to validate the budget fields
		Given I am on the socialcare login page
		When I login to "Team2" as "SocialWorker1"
		Then I should be taken to social worker dashboard

		Then I create a new API person
		Then I should be taken to social worker dashboard
		When I search for the unique person and select
		Then I should see person facet with all the widgets

		# When I create a new person
		# Then I should see person facet with all the widgets
		Then I should not see "Default Link" Event on facet
		Then I navigate to Finance Personal Budget
		And I verify all personal budget fields

