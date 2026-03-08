import { browser } from '@wdio/globals'
import { faker } from '@faker-js/faker'
import HomePage from '../pages/home/home-page.ts'
import LoginPage from '../pages/login/login-page.ts'
import SignupPage from '../pages/signup/signup-page.ts'
import AccountCreatedPage from '../pages/account-created/account-created-page.ts'
import DeleteAccountPage from '../pages/delete-account/delete-account-page.ts'
import formData from '../data/form-data.json' assert { type: 'json' }

describe('Automation Exercise - Register User', () => {
    beforeEach(async () => {
        await browser.url('/')
    })

    it('Verify register a new user with success', async () => {
        //Arrange
        await HomePage.clickNavButton('login')

        // Act
        await LoginPage.signupForm({
            userName: formData.userName,
            email: faker.internet.email().replace(/[^a-zA-Z0-9@.]/g, ''),
        })

        await SignupPage.createAccountForm(formData.signupForm)

        await AccountCreatedPage.verifyAndContinue(formData.alert.accountCreated)

        await HomePage.clickNavButton('delete')

        // Assert
        await DeleteAccountPage.verifyAccountDeleted(formData.alert.accountDeleted)
    })
})
