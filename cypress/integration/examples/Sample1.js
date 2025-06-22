//Cypress Spec File for sample 1

describe('Open Page', function () {
    it('Should verify if it is loaded', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input.search-keyword").type("ca");
        cy.get("button.search-button").click();
        cy.wait(1000); //wait for 1s
        // cy.get(".product:visible").should('have.length',4);
        //Better way is below (Parent Child chaining)
        cy.get('.products').as('productsArray'); //as() is alias command which resolves promises and store the resulting elements in vairable which can be used futhur using @
        cy.get('@productsArray').find('.product').should('have.length', 4);
        cy.get('@productsArray').find('.product').eq(2).contains("ADD TO CART").click(); //EQ() To get the 2nd element from list and contains() will find the dom element which contains that perticular text
        cy.get('@productsArray').find('.product').each(($element, index, $list) => {
            if ($element.find('h4.product-name').text().includes("Cashews")){
                cy.wrap($element).find('button').click();
            }
        });
        cy.get('.brand').should('have.text','GREENKART');
        cy.get('.brand').then((logo) => {
            cy.log(logo.text());
        });
    });
});