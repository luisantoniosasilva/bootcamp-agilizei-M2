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
} export default new Login();