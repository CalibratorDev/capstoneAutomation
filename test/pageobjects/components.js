import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Menu Bar Buttons ----------------------------//     */
/*      \\------------------------------------------------------------------------//     */

    get storeBtnOn() {
        return $(`a.menuitem.supernav.supernav_active[href="https://store.steampowered.com/?snr=1_4_4__global-header"]`);
    }
    get storeBtnOff() {
        return $(`a.menuitem.supernav.[href="https://store.steampowered.com/?snr=1_4_4__global-header"]`);
    }


    get communityBtnOn() {
        return $(`a.menuitem.supernav.supernav_active[href="https://steamcommunity.com/"]`);
    }
    get communityBtnOff() {
        return $(`a.menuitem.supernav[href="https://steamcommunity.com/"]`);
    }


    get aboutBtnOn() {
        return $(`a.menuitem.supernav_active[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]`);
    }
    get aboutBtnOff() {
        return $(`a.menuitem.[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]`);
    }


    get supportBtnOn() {
        return $(`a.menuitem.supernav_active[href="https://help.steampowered.com/en/"]`);
    }
    get supportBtnOff() {
        return $(`a.menuitem[href="https://help.steampowered.com/en/"]`);
    }
}

export default new Components();
