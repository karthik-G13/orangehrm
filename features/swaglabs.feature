Feature: New swaglabs project

  Scenario: To check the swaglabs functionality
        Given I enter the swaglabs page
        When I add a  product to cart
        And I checkout that
        Then I place the order