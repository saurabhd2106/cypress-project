/// <reference types="cypress" />

import { articlePage } from "../../support/conduitApplication/pages/articlePage"
import { loginPage } from "../../support/conduitApplication/pages/loginPage"

describe("Verify Article Feature", function(){

    //hooks
    beforeEach(function(){
        //Navigation to a website

        cy.visit("/")

        
        loginPage.navigateToLoginPage()

      cy.loginToApplication("saurabh@fake.com", "admin")
       // loginPage.loginToApplication("saurabh@fake.com", "admin")
    })

    it("Add Article", function(){

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Learning Cypress", "Learning Cypress with Js", "Learning Cypress", "Cypress");

    })

})