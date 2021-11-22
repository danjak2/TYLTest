import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import userData from '../../fixtures/user.json';
    
//test steps 
Given('I can login to the website', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type(userData.userName);
    cy.get('#password').type(userData.password);

    cy.get('#login-button').click();

    cy.location('pathname', {timeout: 2000}).should('include', 'inventory.html');


    
When ('I sort the items by value', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
})

And ('I add the least valued and most valued itms to the basket', () => {
    // add both cheapest and most expensice to basket
    // Manual Selection of the items as I know there value - However could be written to be done automatically based on value.

    cy.get('#add-to-cart-sauce-labs-onesie').click();
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

})

Then ('I Open the Basket', () => {
    cy.get('.shopping_cart_link').click();
})


Then ('I navigate to the checkout and complete the order', () => {
    cy.get('#checkout').click();

})

And ('I verify that order has been successfully placed',() => {
    cy.get('#first-name').type(userData.firstName);
    cy.get('#last-name').type(userData.lastName);
    cy.get('#postal-code').type(userData.postCode);

    cy.get('#continue').click();
    cy.get('#finish').click();
})

})