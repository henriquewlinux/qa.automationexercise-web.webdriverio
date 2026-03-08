import { $, expect } from '@wdio/globals'
import { DeleteAccountElements } from '../../elements/delete-account-elements.ts'

class DeleteAccountPage {
    public async verifyAccountDeleted(text: string) {
        await expect($(DeleteAccountElements.accountDeleted)).toHaveText(text)
        await expect($(DeleteAccountElements.accountDeleted)).toBeDisplayed()
        await expect($(DeleteAccountElements.continueButton)).toBeDisplayed()
    }
}

export default new DeleteAccountPage()
