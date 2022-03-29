/// <reference types="cypress" />

import { stringify } from "querystring"
import { articlePage } from "../../support/conduitApplication/pages/articlePage";
import { loginApi } from "../../support/conduitApplication/pages/loginApi";
import { restClient } from "../../support/requests/restClient";


describe("Verify Article Feature through API", function () {

    let token;

    beforeEach(function () {

        loginApi.loginToApplication("saurabh@fake.com", "admin").then((response) => {
            
            expect(response.status).to.equal(200)

            cy.log(stringify(response))

            token = response.body.user.token

            cy.log(token)
        })

    })


    it("Get Tags API", function () {

        restClient.sendGetRequest("/api/tags").then((response) => {
            
            expect(response.status).to.equal(200)

            cy.log(stringify(response))

            expect(response.body.tags).to.contain("Cypress")
        })

    })

    it("Add Article", function () {

        cy.request({
            method: "POST",
            url: "/api/articles",
            headers: {
                "Authorization": "Token " + token
            },
            body: {
                "article": {
                    "title": "Learning Cypress",
                    "description": "Cypress",
                    "body": "Learning cypress test",
                    "tagList": [
                        "Test"
                    ]
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
        })

    })



    it("Edit Article", function () {

        let articleSlug;

        //Add Article and then edit
        cy.request({
            method: "POST",
            url: "/api/articles",
            headers: {
                "Authorization": "Token " + token
            },
            body: {
                "article": {
                    "title": "Learning Cypress",
                    "description": "Cypress",
                    "body": "Learning cypress test",
                    "tagList": [
                        "Test"
                    ]
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)

            articleSlug = response.body.article.slug

            cy.log(articleSlug)


            cy.request({
                method: "PUT",
                url: "/api/articles/" + articleSlug,
                headers: {
                    "Authorization": "Token " + token
                },
                body: {
                    "article": {
                        "title": "Learning Cypress updated",
                        "description": "Cypress",
                        "body": "Learning cypress test",
                        "tagList": [
                            "Test"
                        ]
                    }
                }
            }).then(response => {
                expect(response.status).to.equal(200)

                expect(response.body.article.title).to.equal("Learning Cypress updated")
            })

        })


        //Edit article (PUT)



    })
})