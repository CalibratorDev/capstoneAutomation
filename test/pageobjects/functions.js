import { $, browser } from '@wdio/globals'
import Page from './url.js';
import Components from '../pageobjects/components.js'
import components from '../pageobjects/components.js';

class Functions extends Page {

/*     \\---------------------------- Click Menu Options ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

    async aboutBtn1() {
        await expect(Components.aboutMenuBtn1).toBePresent()
        await Components.aboutMenuBtn1.click()
        // await expect(browser).contains('INSTALL STEAM')
    }

    async aboutBtn2() {
        await expect(Components.aboutMenuBtn2).toBePresent()
        await Components.aboutMenuBtn2.click()
        // await expect(browser).contains('INSTALL STEAM')
    }

    async logoBtn() {
        await expect(Components.steamLogo).toBePresent()
        await Components.steamLogo.click()
        // await expect(browser).contains('FEATURED & RECOMMENDED')
    }

    async commBtn() {
        await expect(Components.communityBtn).toBePresent()
        await Components.communityBtn.click()
        // await expect(browser).contains('Community Activity')
    }

    async supportBtn() {
        await expect(Components.supportBtn).toBePresent()
        await Components.supportBtn.click()
        // await expect(browser).contains('Steam Support')
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
        // await Components.carouselSlide.moveTo({ xOffset: 250, yOffset: 200})
        await Components.carouselSlide.click({ xOffset: 250, yOffset: 200})
    }

/*     \\---------------------------- Select CS2 Listing ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

    async cs2() {
        await expect(Components.cs2Listing).toBePresent()
        await Components.cs2Listing.click()
        await expect(browser).toHaveUrl('https://store.steampowered.com/app/730/CounterStrike_2/')
    }

/*     \\---------------------------- Add CS2 Feature (Purchasable) to the Cart ----------------------------//     */
/*      \\-------------------------------------------------------------------------------------------------//     */

    async primeAdd2Cart() {
        await expect(Components.add2Cart).toBePresent()
        await Components.add2Cart.click()
    }

    async dialogBoxViewCart() {
        await expect(Components.dialogViewCart).toBePresent()
        await Components.dialogViewCart.click()
    }

    async selectProfile() {
        await expect(Components.valveProfile).toBePresent()
        await Components.valveProfile.click()
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

}

export default new Functions();
