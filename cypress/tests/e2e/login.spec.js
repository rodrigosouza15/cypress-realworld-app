describe('Login com sucesso', () => {
  it('Login com usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type('Heath93')
    cy.get("[name='password']").type('s3cret')
    cy.get("[type='submit']").click()
    cy.get("[data-test='main']").contains('Public')
  })
  it('Tentativa de login com usuário inválido', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[name='username']").type('timao')
    cy.get("[name='password']").type('s3cret')
    cy.get("[type='submit']").click()
    cy.get("[data-test='signin-error']")
  })
})