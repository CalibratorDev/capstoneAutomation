import { $, browser } from '@wdio/globals'
import Page from './page.js';
import Functions from '../pageobjects/functions.js'
import Components from '../pageobjects/components.js'

class LFunc extends Page {

/*     \\---------------------------- Large Function Title ----------------------------//     */
/*      \\----------------------------------------------------------------------------//     */
    async menuBtnsLoop() {

        // for (let i = 0; i < 2; i++) {
        //     await Functions.aboutBtn()
        //     await Functions.logoBtn()
            
            for (let i = 0; i < 10; i++) {
                await Functions.featArrowBtn()
                await browser.pause(5)
                await Functions.discArrowBtn()
                await browser.pause(5)
                await Functions.ctgryArrowBtn()
                await browser.pause(5)
                await Functions.stmDkArrowBtn()
                await browser.pause(5)
            }

        // }

    }

}

export default new LFunc();
