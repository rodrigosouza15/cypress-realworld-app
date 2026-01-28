class HomePage {
    selectorList() {
        const selectors = {
            transactionList: "[data-test='transaction-list']"
        }

        return selectors
    }

    checkHomeGrid() {
        cy.get(this.selectorList().transactionList)

    }
}

export default HomePage