import { VisitPage } from "../support/pages/visit.page"
import { MenuPage } from "../support/pages/menu.page";
import { CreateAccount } from "../support/pages/createAccount.page";
describe('template spec', () => {

  beforeEach(() => {
    VisitPage.visit()
  });


  it('Deve criar o usuário com sucesso', () => {
    MenuPage.menu('Account')
    CreateAccount.data()
    MenuPage.menu('Account')
    CreateAccount.validateAccount()
  })
})