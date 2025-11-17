import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Components from '../pageobjects/components.js'

class Functions extends Page {

/*     \\---------------------------- Opening Accessories Drop Down + Using Each Option ----------------------------//     */
/*      \\---------------------------------------------------------------------------------------------------------//     */
    async clickStore() {
        await expect(Components.storeBtn).toBePresent()
        await Components.storeBtn.click()
    }

    async clickCommunity() {
        await expect(Components.communityBtn).toBePresent()
        await Components.communityBtn.click()
    }

    async clickAbout() {
        await expect(Components.aboutBtn).toBePresent()
        await Components.aboutBtn.click()
    }

    async clickSupport() {
        await expect(Components.supportBtn).toBePresent()
        await Components.supportBtn.click()
    }
}

export default new Functions();
