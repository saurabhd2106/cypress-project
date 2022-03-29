/// <reference types="cypress" />


describe("Verify Alerts", function(){

    //hooks
    beforeEach(function(){
        //Navigation to a website

        cy.visit("https://test.qatechhub.com/alert-handling/")

       
    })

    it("Alert Handling", function(){

        cy.get("#NormalAlert").click();

        cy.on("window:alert", (message)=> {

            expect(message).to.be.equal("Hello! I am an alert box!");
        })
    })

    it("Custom alert Handling", function(){

        cy.get("#CustomAlert").click();

        cy.on("window:confirm", (message)=> {

            expect(message).to.be.equal("Press a button!");

            return false;
        })
    })


})