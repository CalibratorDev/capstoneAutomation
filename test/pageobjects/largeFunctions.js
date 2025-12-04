import { $, browser } from '@wdio/globals'
import Page from './url.js';
import Functions from '../pageobjects/functions.js'
import Components from '../pageobjects/components.js'

class LFunc extends Page {

/*     \\---------------------------- Large Function Title ----------------------------//     */
/*      \\----------------------------------------------------------------------------//     */
    async menuLoop() {
        for (let i = 0; i < 2; i++) {
            await Functions.commBtn()
            await Functions.supportBtn()
            await Functions.aboutBtn2()
            await Functions.logoBtn()
        }
    }

/*     \\---------------------------- Check if Names Match ----------------------------//     */
/*      \\----------------------------------------------------------------------------//     */

    async checkNames() {
        let currentSlideText = await Components.currentSlide.getText();
        await Components.carouselSlide.click({ xOffset: 250, yOffset: 200});
        await this.checkForMature();
        let gamePageTitle = await Components.gameTitle.getText();
        expect(currentSlideText).toBe(gamePageTitle);
    }

}

export default new LFunc();
