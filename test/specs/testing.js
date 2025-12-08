import Search from '../pageobjects/searchBar.js'
import Components from '../pageobjects/components.js'
import Functions from '../pageobjects/functions.js'
import LFunc from '../pageobjects/largeFunctions.js'

describe('The final Capstone of this course', () => {

    it(`Moving through menu pages`, async () => {
        
        await Functions.openHomePage()
        await LFunc.menuLoop()

    })

    it(`Working all the kinds of ways to utilize the search bar`, async () => {

        await Functions.openHomePage()
        await LFunc.searchBarTests()

    })

    it(`Checking that all the filters can be clicked individually, and then all at the same time`, async () => {

        await Functions.openDevProfile()
        await LFunc.filtersTest()

    })

    it(`Checking the names of the carousel slides match with the names of the game the link takes you to`, async () => {

        await Functions.openHomePage()
        await LFunc.nameCheckLoop()
        await LFunc.carouselLoop()

    })

})

