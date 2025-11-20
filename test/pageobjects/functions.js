import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Components from '../pageobjects/components.js'

class Functions extends Page {

/*     \\---------------------------- Function Title ----------------------------//     */
/*      \\----------------------------------------------------------------------//     */
    async aboutBtn() {
        await expect(Components.aboutMenuBtn).toBePresent()
        await Components.aboutMenuBtn.click()
    }

    async featArrowBtn() {
        await expect(Components.featureRightArrow).toBePresent()
        await Components.featureRightArrow.click()
    }
    
    async discArrowBtn() {
        await expect(Components.discountRightArrow).toBePresent()
        await Components.discountRightArrow.click()
    }

    async ctgryArrowBtn() {
        await expect(Components.categoryRightArrow).toBePresent()
        await Components.categoryRightArrow.click()
    }

    async stmDkArrowBtn() {
        await expect(Components.steamDeckRightArrow).toBePresent()
        await Components.steamDeckRightArrow.click()
    }

    async logoBtn() {
        await expect(Components.steamLogo).toBePresent()
        await Components.steamLogo.click()
    }
}

export default new Functions();
