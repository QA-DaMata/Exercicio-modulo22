import user from '../fixtures/login.json'
describe('Teste de criação do carrinho de compras', () => {
    it('Deve permitir a criacao do carrinho de compras', () => {
        cy.login(user.email, user.senha)
        cy.addProducts()
    })

    it('Deve permitir alterar a quantidade do produto dentro do carrinho', () => {
        cy.login(user.email, user.senha)
        cy.changeStockQuantity()
    })
})