import { $ } from '@wdio/globals'
import { HomePageElements } from '../../elements/home-elements.ts'

class HomePage {
    public async clickNavButton(
        button:
            | 'home'
            | 'products'
            | 'cart'
            | 'login'
            | 'testCases'
            | 'apiTesting'
            | 'tutorialsVideo'
            | 'contactUs'
            | 'delete'
    ) {
        switch (button) {
            case 'home':
                await $(HomePageElements.homeButton).click()
                break
            case 'products':
                await $(HomePageElements.productsButton).click()
                break
            case 'cart':
                await $(HomePageElements.cartButton).click()
                break
            case 'login':
                await $(HomePageElements.signupLoginButton).click()
                break
            case 'testCases':
                await $(HomePageElements.testCasesButton).click()
                break
            case 'apiTesting':
                await $(HomePageElements.apiTestingButton).click()
                break
            case 'tutorialsVideo':
                await $(HomePageElements.tutorialsVideoButton).click()
                break
            case 'contactUs':
                await $(HomePageElements.contactUsButton).click()
                break
            case 'delete':
                await $(HomePageElements.deleteAccountButton).click()
                break
        }
    }
}

export default new HomePage()
