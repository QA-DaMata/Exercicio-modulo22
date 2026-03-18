const emailInput = '[data-testid="email"]'
const senhaInput = '[data-testid="password"]'
const btnConfirm = '[data-testid="btnLogin"]'

export const LoginAccount = {
    login(email, senha) {
        cy.get(emailInput).type(email)
        cy.get(senhaInput).type(senha)
        cy.get(btnConfirm).click()
    },

}