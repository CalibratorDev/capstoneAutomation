import { $, browser } from '@wdio/globals'
import Page from './url.js';
import Functions from '../pageobjects/functions.js'
import Components from '../pageobjects/components.js'

class LFunc extends Page {

/*     \\---------------------------- Large Function Title ----------------------------//     */
/*      \\----------------------------------------------------------------------------//     */
    async arrowBtnsLoop() {
            
        for (let i = 0; i < 30; i++) {
            await Functions.featArrowBtn()
        }

        for (let i = 0; i < 12; i++) {
            await Functions.discArrowBtn()
        }

    }

}

export default new LFunc();
