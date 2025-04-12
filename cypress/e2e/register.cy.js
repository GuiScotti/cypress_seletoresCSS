describe("Página de Cadastro", () => {
  beforeEach(() => {
    cy.visit("/register"); // Altere o caminho se for diferente
  });

  it("Deve exibir o formulário de cadastro", () => {
    cy.get("#register-form").should("be.visible");
  });

  it("Deve conter 3 campos de input com a classe .input-field", () => {
    cy.get(".input-field").should("have.length", 3);
  });

  it('Deve exibir o botão de cadastro com o texto "Cadastrar"', () => {
    cy.get("#register-button").should("contain.text", "Cadastrar");
  });

  it("Deve encontrar o link de login pela classe .login-link", () => {
    cy.get(".login-link").should(
      "contain.text",
      "Já tem uma conta? Faça login"
    );
  });

  it("Deve preencher os campos e enviar o formulário", () => {
    cy.get('input[type="text"]').type("João da Silva");
    cy.get('input[type="email"]').type("joao@example.com");
    cy.get('input[type="password"]').type("senhaSegura123");

    cy.get("#register-button").click();
  });
});
