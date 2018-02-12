Feature: As a user able to work with Residential Financial Assessment form

    Scenario Outline: 
        Given I am on the socialcare login page
        When I login to "Team1" as "SocialWorker1"
        Then I should be taken to social worker dashboard

        When I create a new API person
        Then I should be taken to social worker dashboard

        When I create a new API person1
        Then I should be taken to social worker dashboard

        When I create a new Professional
        Then I should be taken to social worker dashboard

        When I search for the unique person and select
        Then I should see person facet with all the widgets   

        And I navigate to "Care and Support Process"

        When I search for the unique person and select
        Then I should see case facet with all the widgets

        And I navigate to "Residential Financial Assessment" form from Journeys "Care and Support Process"

        Then I should see unique person in Subject of form
        And I set the Start date for Form

        And I should see component "Partners and advisor details"
        And I provide partner details in Partners and Advisor Component
        And I provide advisor details in Partners and Advisor Component

        Then I should see component "Savings and investments"
        And I provide details in Savings and investments Component with <balance> and <Earning1> and <Earning2>
        ## And I provide Earnings in Savings and investments Component with <Earning1> and <Earning2>
        ## And I provide Property in Savings and investments Component

        Then I should see component "Income and benefits"
        And I provide details in Income and benefits Component

    Examples:
        |  balance | Earning1 | Earning2 |
        |   35000  | 1500     |  1300    |

