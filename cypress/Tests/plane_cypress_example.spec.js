import userData from '../fixtures/user.json';

describe('TYL Test', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    // login to webpage
    // Sort the products by Price (high to low)
    // Add the cheapest & costliest products to your basket
	// Open the basket
	// Checkout
	// Enter details and Finish the purchase


    it('Login to page and complete order', () => {

        // login
        cy.get('#user-name').type(userData.userName);
        cy.get('#password').type(userData.password);

        cy.get('#login-button').click();

        cy.location('pathname', {timeout: 2000}).should('include', 'inventory.html');

        // Sort the Products

        cy.get('.product_sort_container').select('Price (low to high)');

        // add both cheapest and most expensice to basket
        // Manual Selection of the items as I know there value - However could be written to be done automatically based on value.

        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

        // Open the basket
        cy.get('.shopping_cart_link').click();

        // Checkout
        cy.get('#checkout').click();

        // Enter details and finish the purchase
        cy.get('#first-name').type(userData.firstName);
        cy.get('#last-name').type(userData.lastName);
        cy.get('#postal-code').type(userData.postCode);

        cy.get('#continue').click();
        cy.get('#finish').click();
    })
})