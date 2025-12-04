import Search from '../pageobjects/searchBar.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('The final Capstone of this course', () => {

    // it(`Moving through menu pages`, async () => {
    //     await browser.url('https://store.steampowered.com/')
    //     await expect(browser).toHaveUrl('https://store.steampowered.com/')

    //     await LFunc.menuLoop()

    // })

    it(`Checking the names of the carousel slides match with the names of the game the link takes you to`, async () => {
        await browser.url('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
        
        await Functions.checkNames()
        

    })

    // it(`Working all the kinds of ways to utilize the search bar`, async () => {



    // })

})

