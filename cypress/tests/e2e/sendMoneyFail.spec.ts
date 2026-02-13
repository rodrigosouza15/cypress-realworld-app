import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import TransactionPage from '../../pages/transactionPage'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.login.userSuccess.username, userData.login.userSuccess.password)
        transactionPage.sendFail(userData.transactionData.amount, userData.transactionData.note)
        transactionPage.errorMessageInvalidValue()
    });
});