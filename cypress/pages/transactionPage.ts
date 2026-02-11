class TransactionPage {

    selectorList() {
        const selectors = {
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            selectUser: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            successMessage: "[data-test='alert-bar-success']"
        }
        return selectors
    }

    sendSuccess(amount: string, note: string) {
        cy.get(this.selectorList().newTransactionButton).click()
        cy.get(this.selectorList().selectUser).click()
        cy.get(this.selectorList().amountField).type(amount)
        cy.get(this.selectorList().noteField).type(note)
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().successMessage)
    }
}

export default TransactionPage