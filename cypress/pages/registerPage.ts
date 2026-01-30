class RegisterPage {

    selectorList() {
        const selectors = {
            firstNameField: "[data-test='signup-first-name']",
            lastNameField: "[data-test='signup-last-name']",
            userNameField: "[data-test='signup-username']",
            passwordField: "[data-test='signup-password']",
            confirmPasswordField: "[data-test='signup-confirmPassword']",
            signUpButton: "[data-test='signup-submit']"
        }

        return selectors
    }

    registeringUser(
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
}

export default RegisterPage