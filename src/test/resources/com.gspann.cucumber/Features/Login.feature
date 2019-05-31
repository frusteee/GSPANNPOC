
Feature: Login  Feature to Demonstrate

  Scenario: Verify Valid Login
    Given User is at Login Page
    When User Enters valid Email and Password
    When User Clicks on Login
    Then User is successfully Logged In


    Scenario: Verify Valid Login with Data Table
      Given User is at  Login Page
      When User Enters valid Email and Password from DataTable
      |Email                  |Password|
      |rahul.sharma@gspann.com|Test@123|
      |sharma.rahul@gspann.com|123@Test|
      When User Clicks on Login
      Then User is successfully Logged In
