/// <reference types="cypress"/>

export const MenuPage = {
    menu(page) {
        let option = `[href="/Tab/${page}"]`
        cy.get(option).click()
    }
}