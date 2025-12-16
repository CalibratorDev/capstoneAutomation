import { $, browser } from '@wdio/globals'
import Components from '../pageobjects/components.js'
import Filters from './filters.js';

class Functions {

    async aboutBtn() {
        await expect(Components.aboutMenuBtn).toBePresent()
        await Components.aboutMenuBtn.click()
    }

    async logoBtn() {
        await expect(Components.steamLogo).toBePresent()
        await Components.steamLogo.click()
    }

    async commBtn() {
        await expect(Components.communityBtn).toBePresent()
        await Components.communityBtn.click()
    }

    async supportBtn() {
        await expect(Components.supportBtn).toBePresent()
        await Components.supportBtn.click()
    }

    async featRgtArrowBtn() {
        await expect(Components.featureArrow(`right`)).toBePresent()
        await Components.featureArrow(`right`).click()
    }

    async featLftArrowBtn() {
        await expect(Components.featureArrow(`left`)).toBePresent()
        await Components.featureArrow(`left`).click()
    }
    
    async discRgtArrowBtn() {
        await expect(Components.discountArrow(`right`)).toBePresent()
        await Components.discountArrow(`right`).click()
    }

    async discLftArrowBtn() {
        await expect(Components.discountArrow(`left`)).toBePresent()
        await Components.discountArrow(`left`).click()
    }

    async slideClick() {
        await Components.carouselSlide.click()
    }

    async checkForMature() {

        let matureTextCheck = await Components.viewMatureMessage.isExisting();
        if (matureTextCheck == true) {
            await Components.yearDrpDwn.click()
            await Components.yearOption.click()
            await Components.viewMaturePageBtn.click()
        }
    }

    async typeAllBtn() {
        await Filters.filterTypeSelector(`All`).click()
    }
    async typeGameBtn() {
        await Filters.filterTypeSelector(`Game`).click()
    }
    async typeMusicBtn() {
        await Filters.filterTypeSelector(`Soundtracks`).click()
    }
    async typeHardBtn() {
        await Filters.filterTypeSelector(`Hardware`).click()
    }
    async typeDLCBtn() {
        await Filters.filterTypeSelector(`DLC`).click()
    }
    async typeSoftBtn() {
        await Filters.filterTypeSelector(`Software`).click()
    }
    async typeVideoBtn() {
        await Filters.filterTypeSelector(`Video`).click()
    }

    async filterToAllBtn() {
        await Filters.filterTagSelector(`All`).click()
    }
    async filterToActBtn() {
        await Filters.filterTagSelector(`Action`).click()
    }
    async filterToAdvBtn() {
        await Filters.filterTagSelector(`Adventure`).click()
    }
    async filterToCoBtn() {
        await Filters.filterTagSelector(`Co-op`).click()
    }
    async filterToMultiBtn() {
        await Filters.filterTagSelector(`Multiplayer`).click()
    }
    async filterToMusicBtn() {
        await Filters.filterTagSelector(`Soundtrack`).click()
    }
    async filterToStratBtn() {
        await Filters.filterTagSelector(`Strategy`).click()
    }

    async openHomePage() {
        await browser.url('https://store.steampowered.com/')
        await expect(browser).toHaveUrl('https://store.steampowered.com/')
    }

    async openDevProfile() {
        await browser.url('https://store.steampowered.com/developer/valve')
        await expect(browser).toHaveUrl('https://store.steampowered.com/developer/valve')
    }
}

export default new Functions();
