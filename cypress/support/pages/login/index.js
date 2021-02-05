const el = require('./elements').ELEMENTS

class Login {
    acessarLogin() {
        cy.visit('login');
    }

    preencherFormulario() {
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputSenha).type(Cypress.config().user.password);
    }

    submeterFormulario() {
        cy.get(el.butoonSubmit).click();
    }

    verificarElementosEmTela(){
        cy.get(el.navAppName).should('contain.text', 'conduit')
        cy.get(el.navYourFeed).should('contain.text', 'Your Feed')
        cy.get(el.navGlobalFeed).should('contain.text', 'Global Feed')
        cy.get(el.sidebarPopularTags).should('contain.text', 'Popular Tags');

        cy.get(el.linkHome).should('have.attr', 'href', '#/')
        cy.get(el.linkNewArticle).should('have.attr', 'href', '#/editor/')
        cy.get(el.linkSettings).should('have.attr', 'href', '#/settings')
        cy.get(el.linkProfile).should('contain.text', Cypress.config().user.name)
    }

} export default new Login();