import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Component Selectors ----------------------------//     */
/*      \\---------------------------------------------------------------------------//     */

    get compSelector() {
        return $('');
    }

}

export default new Components();
