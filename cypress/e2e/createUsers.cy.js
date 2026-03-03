import { VisitPage } from "../support/pages/visit.page"
import { MenuPage } from "../support/pages/menu.page";
import { CreateAccount } from "../support/pages/createAccount.page";
import users from '../fixtures/factories/createUsers'

describe('template spec', () => {

  beforeEach(() => {
    VisitPage.visit()
  });

  it('Deve criar o usuário com sucesso', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    MenuPage.menu('Account')
    CreateAccount.validateAccount(user.firstName, user.phone)
  })

  it('Não deve criar o usuário com o campo firstName nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('firstName', 0)
    CreateAccount.sendUser()
    CreateAccount.warning('Please enter firstName')
  })

  it('Não deve criar o usuário com o campo lastName nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('lastName', 0)
    CreateAccount.sendUser()
    CreateAccount.warning('Please enter lastName')
  })

  //TODO: O sistema permite a criação de usuário sem o campo phone
  it.skip('Não deve criar o usuário com o campo phone nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('phone', 0)
    CreateAccount.sendUser()
    CreateAccount.warning('phone')
  })

  it('Não deve criar um usuário com o campo email nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('email', 1)
    CreateAccount.sendUser()
    CreateAccount.warning('Please enter an email')
  })

  it('Não deve criar um usuário com o campo password nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('password', 1)
    CreateAccount.sendUser()
    CreateAccount.warning('Please enter password')
  })

  it('Não deve criar um usuário com o campo re-enter password nulo', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.nullFields('repassword', 0)
    CreateAccount.sendUser()
    CreateAccount.warning('Password and confirm password do not match')
  })

  it('Não deve criar um usuário com o campo email sem o @', () => {
    let user = users.usersData()
    let invalidMail = 'guilherme.matagmail.com.br'

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, invalidMail, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    CreateAccount.warning('Enter a valid email address')
  })

  it('Não deve criar um usuário com o campo email sem o dominio', () => {
    let user = users.usersData()
    let invalidMail = 'guilherme.mata@.com.br'

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, invalidMail, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    CreateAccount.warning('Enter a valid email address')
  })

  it('Não deve criar o usuário com o email repetido', () => {
    let user = users.usersData()

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    MenuPage.menu('Account')
    CreateAccount.validateAccount(user.firstName, user.phone)
    CreateAccount.logOut()
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    CreateAccount.warning('Email already exist')
  })

  //TODO: Não tem validação para numero
  it.skip('Não deve criar um usuário com o campo phone invalido', () => {
    let user = users.usersData()
    let invalidPhone = '11 9g9e49981'

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, invalidPhone, user.email, user.password, user.confirmPassword)
    CreateAccount.sendUser()
    CreateAccount.warning('Enter a valid phone')
  })

  //TODO: Não tem validação para a senha (Tamanho ou conteudo)
  it('Não deve criar um usuário com o campo password diferente do campo Re-enter password', () => {
    let user = users.usersData()
    let invalidPdw = 'Mudei123'

    MenuPage.menu('Account')
    CreateAccount.data(user.firstName, user.lastName, user.phone, user.email, user.password, invalidPdw)
    CreateAccount.sendUser()
    CreateAccount.warning('Password and confirm password do not match')
  })
})