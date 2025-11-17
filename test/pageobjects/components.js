import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Menu Bar Buttons ----------------------------//     */
/*      \\------------------------------------------------------------------------//     */

    get storeBtn() {
        return $(`a[href="https://store.steampowered.com/"]`);
    }

    get communityBtn() {
        return $(`a[href="https://steamcommunity.com/"]`);
    }

    get aboutBtn() {
        return $(`a[href="https://store.steampowered.com/about/"]`);
    }

    get supportBtn() {
        return $(`a[href="https://help.steampowered.com/en/"]`);
    }
}

export default new Components();
