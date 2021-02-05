/// <reference types="cypress" />
const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

const database = {
    title: 'Agilizei Title',
    description: 'Cypress',
    paragraph: faker.lorem.paragraph(),
    tag: 'cypress'
}

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario() {
        cy.get(el.inputTitle).type(database.title)
        cy.get(el.inputDescription).type(database.description)
        cy.get(el.textAreaContent).type(database.paragraph)
        cy.get(el.inputTags).type(database.tag)
    }

    submeterPublicacao() {
        cy.get(el.buttonSubmit).click()
    }

    verificarSeAPublicacaoFoiCriadaComSucesso() {
        cy.url().should('include', '/article/')

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        });
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        });
        cy.wait(`@${Routes.as.getArticlesComments}`).then((getArticlesComments) => {
            expect(getArticlesComments.status).to.eq(200)
        });
    }

    verificarElementosEmTela() {
        cy.get(el.title).should('contain.text', database.title)
        cy.get(el.paragraph).should('contain.text', database.paragraph)

        cy.get(el.buttonDelete)
            .should('have.length', 2)
            .should('contain.text', 'Delete Article')

        cy.get(el.buttonEdit)
            .should('have.length', 2)
            .should('contain.text', 'Edit Article')

        cy.get(el.articleCreate)
            .should('contain', Cypress.moment().format('MMMM D, YYYY'))
    }
} export default new Articles();