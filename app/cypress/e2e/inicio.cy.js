/// <reference types="cypress" />

describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Deve renderizar o h1 com o texto correto', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
  it('Deve renderizar corretamente o texto da seção de vantagens ', () => {
    cy.getByData('titulo-secundario').contains('Vantagens do nosso banco:');
  });
});
