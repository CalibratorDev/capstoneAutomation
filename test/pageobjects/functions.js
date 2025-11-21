import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Components from '../pageobjects/components.js'

class Functions extends Page {

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

/*     \\---------------------------- Click Carousel Arrows ----------------------------//     */
/*      \\-----------------------------------------------------------------------------//     */

    async featArrowBtn() {
        await expect(Components.featureRightArrow).toBePresent()
        await Components.featureRightArrow.click()
    }
    
    async discArrowBtn() {
        await expect(Components.discountRightArrow).toBePresent()
        await Components.discountRightArrow.click()
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

}

export default new Functions();
