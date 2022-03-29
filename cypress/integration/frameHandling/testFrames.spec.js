/// <reference types="cypress" />


describe("Verify Frame and Drag and Drop", function(){

    //hooks
    beforeEach(function(){
        //Navigation to a website

        cy.visit("https://jqueryui.com/droppable/")

       
    })

    it("Drag and Drop", function(){

        cy.get(".demo-frame").then(frame => {

           const body = frame.contents().find("body");

           cy.wrap(body).as("body")

        })

        cy.get("@body").find("#draggable").as("source")

        cy.get("@body").find("#droppable").as("target")

        cy.get("@source").trigger("mousedown", {which: 1})

        cy.get("@target").trigger("mousemove").trigger("mouseup", {force: true})
    })

    

})