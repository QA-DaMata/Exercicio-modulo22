import { faker } from "@faker-js/faker";

export default {
    usersData() {
        const inputFirstName = faker.person.firstName()
        const inputLastName = faker.person.lastName()
        const inputPhone = '(11) 98722-4321'
        const inputEmail = faker.internet.email({ firstName: `${inputFirstName}`, lastName: `${inputLastName}` })
        const inputpwd = 'Admin123@'

        return {
            firstName: inputFirstName,
            lastName: inputLastName,
            phone: inputPhone,
            email: inputEmail,
            password: inputpwd,
            confirmPassword: inputpwd
        }
    },

}