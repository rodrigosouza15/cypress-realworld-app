import userData from '../../fixtures/userData.json'
import HistoryPage from '../../pages/historyPage';
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
const historyPage = new HistoryPage()

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.login.userTest.username, userData.login.userTest.password)
        historyPage.accessTransactionPage()
        historyPage.pageNoTransaction()
        historyPage.messageNoTransaction()
    });
});