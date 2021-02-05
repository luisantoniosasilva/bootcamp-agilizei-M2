/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro';

context('Cadastro', () => {
    beforeEach(() => {
        cadastro.acessarFormularioDeCadastro()
    })
    it('Cadastrar um novo usuário', () => {
        cadastro.preencherFormulario()
        cadastro.submeterCadastro()
        cadastro.verificarSeOCadastroFoiCriadoComSucesso()
        cadastro.verificarElementosEmTela()
    });
});