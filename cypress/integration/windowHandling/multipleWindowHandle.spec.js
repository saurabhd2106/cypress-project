/// <reference types="cypress" />


describe("Verify Multiple Windows Feature", function(){

    //hooks
    beforeEach(function(){
        //Navigation to a website

        cy.visit("https://test.qatechhub.com/window-handling/")

       
    })

    it("Multiple window", function(){

        cy.contains("a", "Click Here").as("clickHereLink")
       
        cy.get("@clickHereLink").should("have.attr", "target").and("equal", "_blank");

        cy.get("@clickHereLink").should("have.attr", "href").and("equal", "https://qatechhub.com")
    })

    it("Multiple window with page check", function(){

        cy.contains("a", "Click Here").as("clickHereLink")
       
       cy.get("@clickHereLink").invoke("removeAttr", "target").click()

       cy.title().should("equal", "QA Automation Tools Trainings and Tutorials | QA Tech Hub");

        cy.go("back")

    })

})