Feature: OrangeHRM Login

  Scenario: Login with valid credentials
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click the login button
    Then I should see the OrangeHRM dashboard