import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Menu Buttons ----------------------------//     */
/*      \\--------------------------------------------------------------------//     */

    get aboutMenuBtn() {
        return $('a.menuitem[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]');
    }

    get steamLogo() {
        return $('a[href="https://store.steampowered.com/?snr=1_14_4__global-header"][aria-label="Link to the Steam Homepage"]');
    }

/*     \\---------------------------- Home Page Carousel Arrows ----------------------------//     */
/*      \\---------------------------------------------------------------------------------//     */

    get featureRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="1"]');
    }

    get discountRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="2"]');
    }

/*     \\---------------------------- Game Listing Links ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

    get cs2Listing() {
        return $('//div/a[@data-ds-appid="730"]')
    }

/*     \\---------------------------- Cart Components ----------------------------//     */
/*      \\-----------------------------------------------------------------------//     */

    get add2Cart() {
        return $('//a[@id="btn_add_to_cart_54029"]')
    }

    get dialogViewCart() {
        return $('//div[@role]/div/div/button[@class="DialogButton _DialogLayout Primary Focusable"]')
    }

    get valveProfile() {
        return $('//div[@class="_2T8Ub04W0G2L6_3692y23L _1qhLqXcizfytm6omB4ywDD"]/a')
    }
}

export default new Components();
