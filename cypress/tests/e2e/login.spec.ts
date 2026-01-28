import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login com sucesso', () => {

  it.only('Login com usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.checkHomeGrid()
    
  })
  it('Tentativa de login com usuário inválido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})