class HistoryPage {

    selectorList() {
        const selectors = {
            myHistory: "[data-test='nav-personal-tab']",
            historyGrid: "[data-test='transaction-list']"
        }
        return selectors
    }

    accessTransactionPage() {
        cy.get(this.selectorList().myHistory).click()
    }

    checkHistoryGrid() {
        cy.get(this.selectorList().historyGrid)
    }
}

export default HistoryPage