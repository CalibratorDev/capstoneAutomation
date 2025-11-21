import Search from '../pageobjects/search.js'
import SecurePage from '../pageobjects/secure.page.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('Checking for captcha on the Steam website', () => {

    it(`Using numerous different options to check for captcha`, async () => {
        await browser.url('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')

        await LFunc.arrowBtnsLoop()
        await browser.scroll(0,-4000)
        await Search.inputSearch("Counter Strike 2")
        await Functions.cs2()
        await browser.scroll(0,300)
        await Functions.primeAdd2Cart()
        await Functions.dialogBoxViewCart()
        await Functions.selectProfile()

    })

})

