import userData from '../../fixtures/userData.json'
import HistoryPage from '../../pages/historyPage';
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()
const historyPage = new HistoryPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.login.userSuccess.username, userData.login.userSuccess.password)
        historyPage.accessTransactionPage()
        historyPage.checkHistoryGrid()
    });
});