/// <reference types="cypress" />

import { articlePage } from "../../support/conduitApplication/pages/articlePage"
import { loginPage } from "../../support/conduitApplication/pages/loginPage"

describe("Verify Article Feature", function () {

    //hooks
    beforeEach(function () {

        //Start a listener
        cy.intercept({
            method: "GET",
            url: "/api/tags"
        },{
            fixture: "tags.json"
        }).as("tagsApi")



        //Navigation to a website
        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(xhr=>{

            console.log(xhr)

            expect(xhr.response.body.tags).to.contain("Cypress")
        })

        loginPage.navigateToLoginPage()

        cy.loginToApplication("saurabh@fake.com", "admin")
        // loginPage.loginToApplication("saurabh@fake.com", "admin")
    })

    it("Add Article", function () {

        //Start a interceptor
        cy.intercept({
            method: "POST",
            url: "api/articles"
        }, (req) => {

            req.body.article.title = "Cypress Updated"

        }).as("productApi")

        //Perform the operation
        articlePage.navigateToArticlePage()

        articlePage.addArticle("Learning Cypress", "Learning Cypress with Js", "Learning Cypress", "Cypress");



        // Verify the response is as per interceptor
        cy.wait("@productApi")

        cy.get("@productApi").then(xhr => {

            expect(xhr.response.body.article.title).to.contain("Cypress Updated")

        })

       
    })

})