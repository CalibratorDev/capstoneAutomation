import { $, browser } from '@wdio/globals'
import Components from '../pageobjects/components.js'
import Filters from './filters.js';

class Functions {

/*     \\---------------------------- Click Menu Options ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

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

/*     \\---------------------------- Click Carousel Arrows ----------------------------//     */
/*      \\-----------------------------------------------------------------------------//     */

    async featRgtArrowBtn() {
        await expect(Components.featureRightArrow).toBePresent()
        await Components.featureRightArrow.click()
    }

    async featLftArrowBtn() {
        await expect(Components.featureLeftArrow).toBePresent()
        await Components.featureLeftArrow.click()
    }
    
    async discRgtArrowBtn() {
        await expect(Components.discountRightArrow).toBePresent()
        await Components.discountRightArrow.click()
    }

    async discLftArrowBtn() {
        await expect(Components.discountLeftArrow).toBePresent()
        await Components.discountLeftArrow.click()
    }

    async slideClick() {
        await Components.carouselSlide.click()
    }

/*     \\---------------------------- Check for Mature Page ----------------------------//     */
/*      \\-----------------------------------------------------------------------------//     */

    async checkForMature() {

        let matureTextCheck = await Components.viewMatureMessage.isExisting();
        if (matureTextCheck == true) {
            await Components.yearDrpDwn.click()
            await Components.yearOption.click()
            await Components.viewMaturePageBtn.click()
        }
    }

/*     \\---------------------------- Dev Profile Filter Buttons ----------------------------//     */
/*      \\----------------------------------------------------------------------------------//     */

/* ----- TYPE ----- */

    async typeAllBtn() {
        await Filters.typeAll.click()
    }
    async typeGameBtn() {
        await Filters.typeGame.click()
    }
    async typeMusicBtn() {
        await Filters.typeMusic.click()
    }
    async typeHardBtn() {
        await Filters.typeHardware.click()
    }
    async typeDLCBtn() {
        await Filters.typeDLC.click()
    }
    async typeSoftBtn() {
        await Filters.typeSoftware.click()
    }
    async typeVideoBtn() {
        await Filters.typeVideo.click()
    }

/* ----- FILTER TO ----- */

    async filterToAllBtn() {
        await Filters.filterToAll.click()
    }
    async filterToActBtn() {
        await Filters.filterToAction.click()
    }
    async filterToAdvBtn() {
        await Filters.filterToAdventure.click()
    }
    async filterToCoBtn() {
        await Filters.filterToCoop.click()
    }
    async filterToMultiBtn() {
        await Filters.filterToMulti.click()
    }
    async filterToMusicBtn() {
        await Filters.filterToMusic.click()
    }
    async filterToStratBtn() {
        await Filters.filterToStrategy.click()
    }

/*     \\---------------------------- Opening Test Pages ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

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
