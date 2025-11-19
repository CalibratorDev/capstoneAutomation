import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Menu Bar Buttons ----------------------------//     */
/*      \\------------------------------------------------------------------------//     */

    get storeBtn() {
        return $(`a.menuitem[href="https://store.steampowered.com/?snr=1_4_4__global-header"]`);
    }

    get communityBtn() {
        return $(`a.menuitem[href="https://steamcommunity.com/"]`);
    }

    get aboutBtn() {
        return $(`a.menuitem[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]`);
    }

    get supportBtn() {
        return $(`a.menuitem[href="https://help.steampowered.com/en/"]`);
    }

}

export default new Components();
