import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Functions from '../pageobjects/functions.js'
import Components from '../pageobjects/components.js'

class LFunc extends Page {

/*     \\---------------------------- Run Accessories ----------------------------//     */
/*      \\-----------------------------------------------------------------------//     */
    async runMenus() {
        await Functions.clickStore()
        await Functions.clickCommunity()
        await Functions.clickAbout()
        await Functions.clickSupport()
    }

    async runMenusLoop() {
        for (let i = 0; i < 10; i++) {
            await this.runMenus()
        }
    }

}

export default new LFunc();
