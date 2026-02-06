class LoginPage {

    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            signUpButton: "[data-test='signup']",
            loginGrid: ".SignInForm-paper"
        }
        return selectors
        
    }

    accessLoginPage() {
        cy.visit('/login')
    }

    loginWithAnyUser(username: string, password: string) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().wrongCredentialAlert)
    }

    accessUserRegistration() {
        cy.get(this.selectorList().signUpButton).click()
    }

    validateLoginScreen() {
        cy.get(this.selectorList().loginGrid)
    }
}

export default LoginPage