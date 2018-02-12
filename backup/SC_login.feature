@allTeamSWAndTMLogins
Feature: As a different team people Social Workers and Team Manager able to Login and verify dashboard screen

@capita
Scenario: Login Multi Steps
    Given I am on the socialcare login page
    When I click on "Login with your application credentials"
    Then I provide login id as "Darren.Dixie@tcc.gov.uk"
    And I provide password as "OneSoc!alCare"
	Then I click "Not now" on two factor auth page
	Then I select team as "Older Peoples Area Team - North"
	Then I should see manager dashboard


@SW
Scenario: Login Social Worker Steps
  Given I am on the socialcare login page
  When I click on "Login with your application credentials"
  Then I provide login id as "Nhamo.Mahovo@tcc.gov.uk"
  And I provide password as "OneSoc!alCare"
	Then I click "Not now" on two factor auth page
  Then I should see social worker dashboard


@OlderPeopleNorthSW
Scenario: Login to Social Care through Older People North Team Social Worker and verifying dashboard

Given I Login into Older People Area Team - North as Social Worker

@OlderPeopleNorthTM
Scenario: Login to Social Care through Older People North Team Team Manager and verifying dashboard

Given I Login into Older People Area Team - North as Team Manager

@OlderPeopleSouthSW
Scenario: Login to Social Care through Older People South Team Social Worker and verifying dashboard

# Given I Login into Older People Area Team - South as Social Worker
Given I am on the socialcare login page
    When I login to "Team2" as "SocialWorker1"
    Then I should be taken to social worker dashboard

@OlderPeopleSouthTM
Scenario: Login to Social Care through Older People South Team Team Manager and verifying dashboard

# Given I Login into Older People Area Team - South as Team Manager
Given I am on the socialcare login page
    When I login to "Team2" as "TeamManager1"
    Then I should be taken to team manager dashboard

@AdultFinanceTeamSW
Scenario: Login to Social Care through Adult Finance Team Social Worker and verifying dashboard

Given I Login into Adult Finance Team as Social Worker

@AdultFinanceTeamTM
Scenario: Login to Social Care through Adult Finance Team Team Manager and verifying dashboard

Given I Login into Adult Finance Team as Team Manager

@LongTermCareNorthTeamSW
Scenario: Login to Social Care through Long Term Care North Team Social Worker and verifying dashboard

Given I Login into Long Term Care North Team as Social Worker

@LongTermCareNorthTeamTM
Scenario: Login to Social Care through Long Term Care North Team Team Manager and verifying dashboard

Given I Login into Long Term Care North Team as Elevated Manager

@ChildInNeedTeamSW
Scenario: Login to Social Care through Child In Need Team Social Worker and verifying dashboard

Given I Login into Child In Need Team as Social Worker