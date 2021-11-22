Feature: Shopping e2e example
I want to shop on https://www.saucedemo.com/ Website

Scenario: Placing Order for two items

Given I can login to the website
When I sort the items by value
And I add the least valued and most valued itms to the basket
Then I Open the Basket
Then I navigate to the checkout and complete the order
And I verify that order has been successfully placed