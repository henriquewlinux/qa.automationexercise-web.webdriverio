import { $ } from '@wdio/globals'
import { SignupPageElements } from '../../elements/signup-elements.ts'
import { SignupDetails } from '../../interfaces/signup-interface.ts'

class SignupPage {
    public async fillDetails(details: SignupDetails) {
        await $(SignupPageElements.titleMr).click()
        await $(SignupPageElements.password).setValue(details.password)
        await $(SignupPageElements.days).selectByVisibleText(details.day)
        await $(SignupPageElements.months).selectByVisibleText(details.month)
        await $(SignupPageElements.years).selectByVisibleText(details.year)
        await $(SignupPageElements.newsletter).click()
        await $(SignupPageElements.optin).click()
        await $(SignupPageElements.firstName).setValue(details.firstName)
        await $(SignupPageElements.lastName).setValue(details.lastName)
        await $(SignupPageElements.company).setValue(details.company)
        await $(SignupPageElements.address).setValue(details.address)
        await $(SignupPageElements.address2).setValue(details.address2)
        await $(SignupPageElements.country).selectByVisibleText(details.country)
        await $(SignupPageElements.state).setValue(details.state)
        await $(SignupPageElements.city).setValue(details.city)
        await $(SignupPageElements.zipcode).setValue(details.zipcode)
        await $(SignupPageElements.mobileNumber).setValue(details.mobileNumber)
    }

    public async createAccountForm(details: SignupDetails) {
        await this.fillDetails(details)
        await $(SignupPageElements.createAccountButton).click()
    }
}

export default new SignupPage()
