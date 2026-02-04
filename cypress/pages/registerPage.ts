class RegisterPage {

    selectorList() {
        const selectors = {
            firstNameField: "[data-test='signup-first-name']",
            lastNameField: "[data-test='signup-last-name'] input",
            userNameField: "[data-test='signup-username']",
            passwordField: "[data-test='signup-password']",
            confirmPasswordField: "[data-test='signup-confirmPassword']",
            signUpButton: "[data-test='signup-submit']",
            registerGrid: ".SignUpForm-form",
            errorMessage: "[data-test='signup-last-name']"
        }

        return selectors
    }

    registeringUserSuccess(
        firstname: string,
        lastname: string,
        username: string,
        password: string,
        confirmpassword: string
    ) {
    const selectors = this.selectorList()
        cy.get(selectors.firstNameField).type(firstname)
        cy.get(selectors.lastNameField).type(lastname)
        cy.get(selectors.userNameField).type(username)
        cy.get(selectors.passwordField).type(password)
        cy.get(selectors.confirmPasswordField).type(confirmpassword)
        cy.get(selectors.signUpButton).click()
    }

    registeringUserFail(
        firstname: string,
        lastname: string,
        username: string,
        password: string,
        confirmpassword: string
    ) {
    const selectors = this.selectorList()
        cy.get(selectors.firstNameField).type(firstname)
        cy.get(selectors.lastNameField).type(lastname).clear()
        cy.get(selectors.userNameField).type(username)
        cy.get(selectors.passwordField).type(password)
        cy.get(selectors.confirmPasswordField).type(confirmpassword)
    }

    validateRegisterScreen() {
        cy.get(this.selectorList().registerGrid)
    }

    errorMessageValidation() {
        cy.get(this.selectorList().errorMessage)
        cy.contains('Last Name is required')

    }
}

export default RegisterPage