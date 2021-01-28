/// <reference types="cypress" />
const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario() {
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submeterPublicacao() {
        cy.get(el.buttonSubmit).click()
    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
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
} export default new Articles();