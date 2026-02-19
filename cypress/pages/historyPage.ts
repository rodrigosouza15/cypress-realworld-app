class HistoryPage {

    selectorList() {
        const selectors = {
            myHistory: "[data-test='nav-personal-tab']",
            historyGrid: "[data-test='transaction-list']",
            noTransactionsGrid: "[data-test='empty-list-header']"
        }
        return selectors
    }

    accessTransactionPage() {
        cy.get(this.selectorList().myHistory).click()
    }

    checkHistoryGrid() {
        cy.get(this.selectorList().historyGrid)
    }

    pageNoTransaction() {
        cy.get(this.selectorList().noTransactionsGrid)
    }

    messageNoTransaction() {
        cy.contains('No Transactions')
    }
}

export default HistoryPage