Notes:
Cypress is asynchronus but it makes itself synchronus using built in engine 
now every command returns promise in cypress which is state of that process
Promise has 3 states by default Rejected, Resolved and Pending
Non cypress commands cannot resolve promises themselves
cy.visit(url) - To open web pahe url
Default command timeout is 4000ms
It only supports CSS Selectors only
EQ() To get the 2nd element from list and contains() will find the dom element which contains that perticular text
.get() to get element from css selector
Yield the element passed into `.wrap()` to the next command in the Cypress chain.
.then() waits for the promise of that command to get resolved which is wrapped internally so no need to write
.text() is jquery method its not cypress method or commnad


Cypress commands:
npm cypress open -> opens test dashboard
npm cypress run -> runs all tests configured in electron headless mode
npm cypress run --headed -> runs in headed mode
npm cypress run --browser chrome



Project structure:
Project
-> cypress
    -> fixtures - test data
    -> integration - All specs/tests
    -> plugins - Listeners for tests
    -> support - customatised commands or utils

cypress.config.js - cypress config
package-Lock.json
package.json