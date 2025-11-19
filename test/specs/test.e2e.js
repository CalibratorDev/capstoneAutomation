import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('Checking for captcha on the FBRC website', () => {

    it(`Checking for captcha using the "Accessories" drop down menu; looped 10 times`, async () => {
        await browser.url('https://www.homedepot.com/')
        await expect(browser).toHaveUrl('https://www.homedepot.com/')

        await LFunc.runMenus()
    })

})

