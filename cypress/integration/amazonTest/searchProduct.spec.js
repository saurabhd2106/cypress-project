/// <reference types="cypress" />

describe("Search Product Feature", function(){

    // Hook -- Executes before every test
    beforeEach(function(){

        cy.visit("https://www.amazon.in")

    })

    it("Search Product", function(){

        //Search Product Option
        cy.get("#searchDropdownBox").select("Electronics", {force: true});

        cy.get("#twotabsearchtextbox").type("Apple Watch");
        
        cy.get("#nav-search-submit-button").click();

        //Get all products in the list and save as an alias -- allProducts
        cy.get("div[data-component-type='s-search-result']").as("allProducts")

        //Select the first product from the list 

        cy.get("@allProducts").first().invoke("text").then((response) => {

            cy.log(response);
        })

        //Select the fifth product from the list

        cy.get("@allProducts").eq(4).invoke("text").then((response) => {

            cy.log(response);
        })

        //Select the last product from the list

        cy.get("@allProducts").last().invoke("text").then((response) => {

            cy.log(response);
        })

        //Get all the products from the list

        cy.get("@allProducts").each(($el, index, $list) => {
            
            cy.wrap($el).scrollIntoView();

            cy.log("Index of the element is - " + index + " and the element is " + $el.text())

          })

    })
})