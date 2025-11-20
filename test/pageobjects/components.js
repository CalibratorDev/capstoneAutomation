import { $, browser } from '@wdio/globals'
import Page from './page.js';

class Components extends Page {

/*     \\---------------------------- Component Selectors ----------------------------//     */
/*      \\---------------------------------------------------------------------------//     */

    get aboutMenuBtn() {
        return $('a.menuitem[href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]');
    }

    get featureRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="1"]');
    }

    get discountRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="2"]');
    }

    get categoryRightArrow() {
        return $('//div[@class="content_hub_carousel"]/div/div[@class="arrow right"]')
    }

    get steamDeckRightArrow() {
        return $('//div[@id="featured_steam_deck_games"]/div/div[@class="arrow right"]')
    }

    get steamLogo() {
        return $('a[href="https://store.steampowered.com/?snr=1_14_4__global-header"][aria-label="Link to the Steam Homepage"]');
    }
}

export default new Components();
