/// <reference types="cypress"/>
const listProducts = '[data-testid="see-all-new"]'
const product = ':nth-child(6) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]'
const btnAdd = '[data-testid="addToCart"]'
const btnPayment = '[data-testid="selectAddressOrContinueToPayment"]'
const btnCheckout = '[data-testid="completeCheckout"]'
const validMsg = '[data-testid="goBackHome"]'
const addQty = '[data-testid="addItem"]'
const processing = '[data-testid="Placed"]'
const cancelOrder = '[data-testid="item-0"] > :nth-child(3) > [data-testid="cancel"]'
const btnConfirmCancelOrder = '[data-testid="confirm"]'
export const Products = {
    addProducts() {
        cy.get(listProducts).click()
        cy.get(product).click()
        cy.get(btnAdd).click()
        cy.get(btnPayment).click()
        cy.get(btnCheckout).click()
        cy.get(validMsg).should('contain', 'Go Back Home')
    },

    changeStockQuantity() {
        cy.get(listProducts).click()
        cy.get(product).click()
        cy.get(btnAdd).click()
        cy.get(addQty).click()
        cy.get(btnPayment).click()
        cy.get(btnCheckout).click()
        cy.get(validMsg).should('contain', 'Go Back Home')
    },

    deleteOrder() {
        cy.get(processing).click()
        cy.get(cancelOrder).click()
        cy.get(btnConfirmCancelOrder).click()
    }
}