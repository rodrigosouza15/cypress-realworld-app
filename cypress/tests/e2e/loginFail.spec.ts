import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Tentativa de login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.login.userFail.username, userData.login.userFail.password)
    loginPage.checkAccessInvalid()
  })
});