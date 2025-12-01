import Search from '../pageobjects/searchBar.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('Checking for captcha on the Steam website', () => {

    it(`Using numerous different options to check for captcha`, async () => {
        await browser.url('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')

        await LFunc.menuLoop()

    })

})

