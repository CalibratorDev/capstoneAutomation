import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('Logging in to test the four menu options', () => {
    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })

    it(`once logged in, open the menu, then go through all four options`, async () => {

    })

})

