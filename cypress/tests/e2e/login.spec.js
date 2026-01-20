import userData from '../../fixtures/userData.json'

const { Password } = require("@mui/icons-material")

describe('Login com sucesso', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    PasswordField: "[name='password']",
    loginButton: "[type='submit']",
    transactionList: "[data-test='transaction-list']",
    wrongCredentialAlert: "[data-test='signin-error']"
  }

  it('Login com usuário válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.PasswordField).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.transactionList)
  })
  it('Tentativa de login com usuário inválido', () => {
    cy.visit('http://localhost:3000/')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.PasswordField).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})