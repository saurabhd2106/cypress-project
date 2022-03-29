export class ArticlePage {

    newArticleText = "New Article"

    articleTitleField = "[placeholder='Article Title']"

    aboutArticleField = "[placeholder=\"What's this article about?\"]"

    descriptionField = "[placeholder=\"Write your article (in markdown)\"]";

    tagsField = "[placeholder='Enter tags']";

    publishText = "Publish";

    navigateToArticlePage(){


        cy.contains("a", this.newArticleText).click()
    }

    addArticle(title, articleType, description, tags){

        

        cy.get(this.articleTitleField).type(title)

        cy.get(this.aboutArticleField).type(articleType)

        cy.get(this.descriptionField).type(description)

        cy.get(this.tagsField).type(tags + "{enter}")

        cy.contains("button", this.publishText).click()

    }

}

export const articlePage = new ArticlePage();