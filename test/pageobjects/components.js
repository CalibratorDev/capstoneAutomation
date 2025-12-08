import { $, browser } from '@wdio/globals'

class Components {

/*     \\---------------------------- Menu Buttons ----------------------------//     */
/*      \\--------------------------------------------------------------------//     */

    get aboutMenuBtn() {
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
