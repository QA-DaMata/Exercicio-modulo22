/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";
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
const inputFirstName = faker.person.firstName()
const inputLastName = faker.person.lastName()
const inputPhone = '(11) 98722-4321'
const inputEmail = faker.internet.email({ firstName: `${inputFirstName}`, lastName: `${inputLastName}` })
const inputpwd = 'Admin123@'

export const CreateAccount = {
    data() {

        cy.get(btnSignUP).click()
        cy.get(firstName).type(inputFirstName)
        cy.get(lastName).type(inputLastName)
        cy.get(phone).type(inputPhone)
        cy.get(email).eq(1).type(inputEmail)
        cy.get(pwd).eq(1).type(inputpwd)
        cy.get(confirmpdw).type(inputpwd)
        cy.get(btnCreate).click()
    },

    validateAccount() {
        cy.get(checkName).should('contain', inputFirstName)
        cy.get(checkPhone).should('contain', inputPhone)
        
    }
}