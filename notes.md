Notes:
Cypress is asynchronus but it makes itself synchronus using built in engine 
now every command returns promise in cypress which is state of that process
Promise has 3 states by default Rejected, Resolved and Pending
Non cypress commands cannot resolve promises themselves
Cypress automatically accepts alert popups
Cypress and listen to browser event
Cypress can only work with 1 window and tab, to manage multiple tabs, we need to force open links to open in current tab by tweaking html
Cypress doesnt allow multi domain testing like we cannot go to another domain, to solve this we can use origin() function to change domain origin
Mouse hover events are not suppported by cypress so we use jquery for that to tweak again or force click


cy.visit(url) - To open web pahe url
Default command timeout is 4000ms
It only supports CSS Selectors only
EQ() To get the nth element from list and contains() will find the dom element which contains that perticular text
.get() to get element from css selector
.find() to get nested elements of get and can also be used with iframe to find elements in iframe
Yield the element passed into `.wrap()` to the next command in the Cypress chain.
.then() waits for the promise of that command to get resolved which is wrapped internally so no need to write
.text() is jquery method its not cypress method or commnad
.check(), .uncheck() for checkbox tick
.and() for multiple assertions
.select() for static dropdown
.on() is method for listening browser events
.invoke() helps executing jquery function to tweak DOM
.origin() to let cypress know that domain has changed and following commands will run in new domain
.next() to get immidiate sibling from get()
.click({force: true}) forces to click even if its invisible
.prop() to get proerties of that URL
.frameLoaded() to access iframe of page
.iframe() to work on iframe

JQuery:
removeAttr - to remove attribute
show - to show hidden elements on page, only applies on immidiate parent of hidden elements


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