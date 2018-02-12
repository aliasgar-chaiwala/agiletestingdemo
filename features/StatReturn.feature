Feature: Statutory Return 

@sanity   @regression 
Scenario: Verify the Stat Return Page

Given I am on the socialcare login page
When I login to "Team1" as "SocialWorker1"
Then I should be taken to social worker dashboard
Then I navigate to Statutory Return page
Then I verify the collection period and upload period for "2018-2019"
And I verify the collection period and upload period for "2017-2018"
Then I verify the page on click of GenerateXML button
#Then I verify Collection Period and Upload Period