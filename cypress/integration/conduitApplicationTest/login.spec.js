/// <reference types="cypress" />

import { loginPage } from "../../support/conduitApplication/pages/loginPage"

// describe -- test suite
describe("Test Login feature", function () {

    let credentials;

    before(function () {
        cy.fixture("credentials").then(response => {
            credentials = response;

           
        })


    })

    afterEach(function() {
        cy.screenshot()
    })

    //it -- test case
    it("Login Application", function () {
        // Logic is added here

        expect(credentials.email).to.equal("saurabh@fake.com");
        expect(credentials.password).to.equal("admin");

        cy.visit("/")

        cy.screenshot()

        loginPage.navigateToLoginPage()

        cy.screenshot({"blackout" : ["input[placeholder='Password']"]})


        loginPage.loginToApplication(credentials.email, credentials.password)


    })

})