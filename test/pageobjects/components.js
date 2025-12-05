import { $, browser } from '@wdio/globals'
import Page from './url.js';

class Components extends Page {

/*     \\---------------------------- Menu Buttons ----------------------------//     */
/*      \\--------------------------------------------------------------------//     */

    get aboutMenuBtn1() {
        return $('//div[@class]/div[@role="navigation"]/a[@href="https://store.steampowered.com/about/?snr=1_4_4__global-header"]');
    }

    get aboutMenuBtn2() {
        return $('//div[@class]/div[@role]/a[@href="https://store.steampowered.com/about/"]');
    }

    get steamLogo() {
        return $('//span[@id="logo_holder"]/a');
    }

    get communityBtn() {
        return $('//div[@role]/a[@href="https://steamcommunity.com/"]');
    }

    get supportBtn() {
        return $('//div[@role]/a[@href="https://help.steampowered.com/en/"]');
    }

/*     \\---------------------------- Home Page Carousel Components ----------------------------//     */
/*      \\-------------------------------------------------------------------------------------//     */

    get featureRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="1"]');
    }

    get featureLeftArrow() {
        return $('//div/div[@class="arrow left"][@data-usability="1"]');
    }

    get discountRightArrow() {
        return $('//div/div[@class="arrow right"][@data-usability="2"]');
    }

    get discountLeftArrow() {
        return $('//div/div[@class="arrow left"][@data-usability="2"]');
    }

    get carouselSlide() {
        return $(`//div[@class="home_cluster_ctn home_ctn"]`);
    }

    get currentSlide() {
        return $(`//a/div/div[@class="app_name"]`);
    }

    get gameTitle() {
        return $(`//div/div/div[@id="appHubAppName"]`);
    }

    get hoverBox() {
        return $(`//*/div[@id="global_hover"]`);
    }

    get hoverTitle() {
        return $(`//*/div[@id="global_hover"]/div/div/div/h4`);
    }

/*     \\---------------------------- Game Listing Links ----------------------------//     */
/*      \\--------------------------------------------------------------------------//     */

    get cs2Listing() {
        return $('//div/a[@data-ds-appid="730"]');
    }

/*     \\---------------------------- Cart Components ----------------------------//     */
/*      \\-----------------------------------------------------------------------//     */

    get add2Cart() {
        return $('//a[@id="btn_add_to_cart_54029"]');
    }

    get dialogViewCart() {
        return $('//div[@role]/div/div/button[@class="DialogButton _DialogLayout Primary Focusable"]');
    }

    get valveProfile() {
        return $('//div[@class="_2T8Ub04W0G2L6_3692y23L _1qhLqXcizfytm6omB4ywDD"]/a');
    }

/*     \\---------------------------- View Mature Page ----------------------------//     */
/*      \\------------------------------------------------------------------------//     */

    get viewMaturePageBtn() {
        return $(`//a[@id="view_product_page_btn"]`);
    }

    get viewMatureMessage() {
        return $(`//h2[contains(text(), "not appropriate")]`);
    }

    get yearOption() {
        return $(`//option[@value="2000"]`);
    }

    get yearDrpDwn() {
        return $(`//div/select[@id="ageYear"]`);
    }

/*     \\---------------------------- Carousel Thumbs ----------------------------//     */
/*      \\-----------------------------------------------------------------------//     */

    get carouselThumbOne() {
        return $(`//div[@class="carousel_thumbs"][@data-usability="1"]/div[@class="focus"]`);
    }

    get carouselThumbTwo() {
        return $(`//div[@class="carousel_thumbs"][@data-usability="2"]`);
    }

}

export default new Components();
