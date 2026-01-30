class HomePage {
    selectorList() {
        const selectors = {
            transactionList: "[data-test='transaction-list']",
            integrationText: "[data-test='user-onboarding-dialog-title']"
        }
        return selectors
    }

    checkHomeGrid() {
        cy.get(this.selectorList().transactionList)
    }

    checkNewUserGrid() {
        cy.get(this.selectorList().integrationText)
    }
}

export default HomePage