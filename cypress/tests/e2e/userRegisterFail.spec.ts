import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve bloquear o cadastro quando o formulário está incompleto', () => {
    loginPage.accessLoginPage()
    loginPage.accessUserRegistration()
    registerPage.registeringUserFail(
      userData.register.firstname,
      userData.register.lastname,
      userData.register.username,
      userData.register.password,
      userData.register.confirmpassword)
    registerPage.validateRegisterScreen()
    registerPage.errorMessageValidation()
  });
});