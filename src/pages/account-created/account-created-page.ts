import { $, expect } from '@wdio/globals'
import { AccountCreatedElements } from '../../elements/account-created-elements.ts'

class AccountCreatedPage {
    public async verifyAndContinue(text: string) {
        await expect($(AccountCreatedElements.accountCreated)).toHaveText(text)
        await $(AccountCreatedElements.continueButton).click()
    }
}

export default new AccountCreatedPage()
