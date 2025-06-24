//This will include all forms elements

describe('Open Page', function () {
    it('Should verify if it is loaded', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1');
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3');
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($ele, $index, $arr) => {
            if ($ele.text() === 'India')
                $ele.click();
        });
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')
    });
});