/// <reference types="cypress"/>

export const VisitPage = {
    visit() {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    }
}