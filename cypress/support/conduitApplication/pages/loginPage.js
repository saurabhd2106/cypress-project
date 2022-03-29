export class LoginPage{

    //All page objects

    signInLink = "a[href = '/user/login']";
    emailField = "input[placeholder='Email']";
    passwordField = "input[placeholder='Password']";
    newArticleLink = "a[href='/editor']";
    signInText = "Sign in";
    homePageTitle = "Conduit";
    signInPageTitle = "LOGIN | NEXT REALWORLD";

    

    //All functionalities (logic)

    navigateToLoginPage(){

        cy.get(this.signInLink).as("signInLink")

        cy.get("@signInLink").click()

        //Verify that we are on Sign In page

        //Verify Title of the page

        cy.title().should("equal", this.signInPageTitle)


        //Sign in header (text) should be visible
        cy.contains("h1", this.signInText).should("be.visible")

    }

    loginToApplication(email, Password){

        cy.get(this.emailField).type("saurabh@fake.com")

        cy.get(this.passwordField).type("admin")

        cy.contains("button", this.signInText).click()

        cy.get(this.newArticleLink).should("be.visible");

        cy.title().should("equal", this.homePageTitle)

    }

}

export const loginPage = new LoginPage();