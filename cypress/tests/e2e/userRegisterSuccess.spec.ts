import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    loginPage.accessLoginPage()
    loginPage.accessUserRegistration()
    registerPage.registeringUserSuccess(
        userData.register.firstname,
        userData.register.lastname,
        userData.register.username,
        userData.register.password,
        userData.register.confirmpassword)
    loginPage.validateLoginScreen()
  });
});