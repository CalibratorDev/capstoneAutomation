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
        
        await Components.carouselSlide.moveTo()
        await browser.pause(1000)
        let hoverCheck = await Components.hoverBox.isExisting();
        if (hoverCheck == true) {
            let hoverText = await Components.hoverTitle.getText();
            expect(hoverText).toBe(currentSlideText);
        }

        await Components.carouselSlide.click();
        await Functions.checkForMature();

        let gamePageTitle = await Components.gameTitle.getText();
        expect(currentSlideText).toBe(gamePageTitle);
        await Functions.logoBtn();
    }

/*     \\---------------------------- Carousel Loop: Arrows & Thumbs ----------------------------//     */
/*      \\--------------------------------------------------------------------------------------//     */

    async carouselLoop() {
        
        for (let i = 0; i < 8; i++) {
            Components.featureRightArrow.click()
        }
        for (let i = 0; i < 3; i++) {
            Components.featureLeftArrow.click()
        }
        for (let i = 0; i < 4; i++) {
            Components.discountRightArrow.click()
        }
        for (let i = 0; i < 2; i++) {
            Components.discountLeftArrow.click()
        }

    }

/*     \\---------------------------- Looping the nameCheck Function ----------------------------//     */
/*      \\--------------------------------------------------------------------------------------//     */

    async nameCheckLoop() {
        for (let i = 0; i < 5; i++) {
            await this.checkNames()
        }
    }

/*     \\---------------------------- Check for Hover Info Box ----------------------------//     */
/*      \\--------------------------------------------------------------------------------//     */

    // async hoverBoxCheck() {

    //     let hoverCheck = await Components.hoverBox.isExisting();
    //     if (hoverCheck == true) {
    //         let hoverText = Components.hoverTitle.getText();
    //         expect(hoverText).toBe(checkNames.currentSlideText);
    //     }

    // }


}

export default new LFunc();
