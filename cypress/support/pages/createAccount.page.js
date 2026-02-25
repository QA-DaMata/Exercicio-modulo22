/// <reference types="cypress"/>

const btnSignUP = '[data-testid="signUp"]'
const firstName = '[data-testid="firstName"]'
const lastName = '[data-testid="lastName"]'
const phone = '[data-testid="phone"]'
const email = '[data-testid="email"]'
const pwd = '[data-testid="password"]'
const confirmpdw = '[data-testid="repassword"]'
const btnCreate = '[data-testid="create"]'
const checkName = '[data-testid="CustomerName"]'
const checkPhone = '[data-testid="CustomerPhone"]'
const warning = '[data-testid="warning"]'
const logOut = '.r-14lw9ot > :nth-child(5)'
const confirmLogOut = '[data-testid="confirm"]'

export const CreateAccount = {
    data(inputFirstName, inputLastName, inputPhone, inputEmail, inputpwd, inputConfirmpwd) {
        cy.get(btnSignUP).click()
        cy.get(firstName).type(inputFirstName)
        cy.get(lastName).type(inputLastName)
        cy.get(phone).type(inputPhone)
        cy.get(email).eq(1).type(inputEmail)
        cy.get(pwd).eq(1).type(inputpwd)
        cy.get(confirmpdw).type(inputConfirmpwd)

    },

    sendUser() {
        cy.get(btnCreate).click()
    },

    validateAccount(name, phone) {
        cy.get(checkName).should('contain', name)
        cy.get(checkPhone).should('contain', phone)
    },

    nullFields(field, eq) {
        let option = `[data-testid="${field}"]`
        cy.get(option).eq(eq).clear({ multiple: true })
    },

    warning(value) {
        cy.get(warning).should('exist')
        cy.get(warning).should('contain.text', value)
    },

    logOut(){
        cy.get(logOut).click()
        cy.get(confirmLogOut).click()
    }

}