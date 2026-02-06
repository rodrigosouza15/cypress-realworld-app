import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.login.userSuccess.username, userData.login.userSuccess.password)
    homePage.checkHomeGrid()
  })
})