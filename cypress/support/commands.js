// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Cypress.Commands.add("loginToApplication", (email, password) => {

  let emailLocator = "input[placeholder=\"Email\"]";

  let passwordLocator = "[placeholder=\"Password\"]";

  let buttonTag = "button"

  let signInText = "Sign in";

  cy.get(emailLocator).as("emailField")

  cy.get(passwordLocator).type(password)

  cy.get("@emailField").type(email)

  cy.contains(buttonTag, signInText).click()
})