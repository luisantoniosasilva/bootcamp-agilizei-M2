/// <reference types="cypress" />

const faker = require('faker')

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        cy.visit('register');
        cy.get('input[ng-model*=username]').type(faker.name.findName());
        cy.get('input[ng-model*=email]').type(faker.internet.email());
        cy.get('input[ng-model*=password]').type(12345678);
        cy.get('button.btn-primary').click();
    });
});