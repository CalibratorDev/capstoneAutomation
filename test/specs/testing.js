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

    it(``, async () => {

        const slideName = await $(`//a/div/div[@class="app_name"]`).getText();
        await browser.action('pointer')
            .move({ x: 250, y: 200 })
            .down()
            .up()
            .perform();
        const gameTitle = await $(`//div/div[@class="apphub_HeaderStandardTop"]/div[@class="apphub_AppName"]`).getText();

        let nameCompare = (slideName == gameTitle);

        if (nameCompare == true) {
            
        } else {

        }

    })

})

