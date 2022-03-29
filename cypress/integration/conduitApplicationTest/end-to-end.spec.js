/// <reference types="cypress" />

import { articlePage } from "../../support/conduitApplication/pages/articlePage"
import { loginApi } from "../../support/conduitApplication/pages/loginApi"
import { loginPage } from "../../support/conduitApplication/pages/loginPage"

describe("Verify Article Feature(End to end testing)", function(){

    let res;
    //hooks
    beforeEach(function(){

        loginApi.loginToApplication("saurabh@fake.com", "admin").then(response =>{

            res = response;
        })

        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(res.body.user))
            }
        })

        
       
       
    })

    it("Add Article", function(){

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Learning Cypress", "Learning Cypress with Js", "Learning Cypress", "Cypress");

    })

})