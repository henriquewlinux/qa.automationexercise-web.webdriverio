import { $ } from '@wdio/globals'
import { LoginPageElements } from '../../elements/login-elements.ts'
import { UserDetails } from '../../interfaces/user-interface.ts'

class LoginPage {
    public async signupForm(user: UserDetails) {
        await $(LoginPageElements.signupName).setValue(user.userName)
        await $(LoginPageElements.signupEmail).setValue(user.email)
        await $(LoginPageElements.signupButton).click()
    }
}

export default new LoginPage()
