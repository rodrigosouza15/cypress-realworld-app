const { Password } = require("@mui/icons-material")

describe('Login com sucesso', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    PasswordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopbar: "[data-test='main']",
    wrognCredentialAlert: "[data-test='signin-error']"
  }

  it('Login com usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get(selectorlist.usernameField).type('Heath93')
    cy.get(selectorlist.PasswordField).type('s3cret')
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.sectionTitleTopbar).contains('Public')
  })
  it.only('Tentativa de login com usuário inválido', () => {
    cy.visit('http://localhost:3000/')
    cy.get(selectorlist.usernameField).type('timao')
    cy.get(selectorlist.PasswordField).type('s3cret')
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrognCredentialAlert)
  })
})