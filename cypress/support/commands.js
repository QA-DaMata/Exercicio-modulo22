import { LoginAccount } from "./pages/login.page";
import { MenuPage } from "../support/pages/menu.page";
import { Products } from "./pages/products.page";


Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }) //Para setar cookies na aplicação
    cy.visit('/')
    MenuPage.menu('Account')
    LoginAccount.login(email, senha)
})

Cypress.Commands.add('addProducts', () => {
    Products.addProducts()
    MenuPage.menu('Order')
    Products.deleteOrder()
})

Cypress.Commands.add('changeStockQuantity', () => {
    Products.changeStockQuantity()
    MenuPage.menu('Order')
    Products.deleteOrder()
})