import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Components from '../pageobjects/components.js'

class Functions extends Page {

/*     \\---------------------------- Opening Accessories Drop Down + Using Each Option ----------------------------//     */
/*      \\---------------------------------------------------------------------------------------------------------//     */
    async clickStore() {

        if (sampleCondition) {
            await Components.storeBtnOn.click()
        } else {
            await Components.storeBtnOff.click()
        }
    }

    async clickCommunity() {
        await expect(Components.communityBtnOn).toBePresent()
        await Components.communityBtnOn.click()
    }

    async clickAbout() {
        await expect(Components.aboutBtnOn).toBePresent()
        await Components.aboutBtnOn.click()
    }

    async clickSupport() {
        await expect(Components.supportBtnOn).toBePresent()
        await Components.supportBtnOn.click()
    }
}

export default new Functions();
