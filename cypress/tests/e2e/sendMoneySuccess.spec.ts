import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import TransactionPage from '../../pages/transactionPage'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.login.userSuccess.username, userData.login.userSuccess.password)
    transactionPage.sendSuccess(userData.transactionData.amount, userData.transactionData.note)
  });
});