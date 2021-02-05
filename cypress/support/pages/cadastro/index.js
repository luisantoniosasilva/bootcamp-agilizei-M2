/// <reference types="cypress" />
const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

let faker_name = faker.name.findName()

class Cadastro {

    acessarFormularioDeCadastro() {
        cy.visit('register');
    }

    preencherFormulario() {
        cy.get(el.inputName).type(faker_name);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(12345678);
    }

    submeterCadastro() {
        cy.get(el.buttonSubmit).click()
    }

    verificarSeOCadastroFoiCriadoComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUsersResponse) => {
            expect(postUsersResponse.status).to.eq(200)
        });
        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        });
        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getArticlesFeedResponse) => {
            expect(getArticlesFeedResponse.status).to.eq(200)
        });
    }

    verificarElementosEmTela(){
        cy.get(el.navAppName).should('contain.text', 'conduit')
        cy.get(el.navYourFeed).should('contain.text', 'Your Feed')
        cy.get(el.navGlobalFeed).should('contain.text', 'Global Feed')
        cy.get(el.sidebarPopularTags).should('contain.text', 'Popular Tags');

        cy.get(el.linkHome).should('have.attr', 'href', '#/')
        cy.get(el.linkNewArticle).should('have.attr', 'href', '#/editor/')
        cy.get(el.linkSettings).should('have.attr', 'href', '#/settings')
        cy.get(el.linkProfile).should('contain.text', faker_name)

        cy.get(el.articlesFeed).should('contain.text', 'No articles are here... yet.');
    }
} export default new Cadastro();