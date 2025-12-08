import { $, browser } from '@wdio/globals'
import Functions from '../pageobjects/functions.js'
import Components from '../pageobjects/components.js'
import Search from '../pageobjects/searchBar.js'
import Filters from './filters.js';

class LFunc {

/*     \\---------------------------- Looping the Menu Buttons ----------------------------//     */
/*      \\--------------------------------------------------------------------------------//     */
    async menuLoop() {
        for (let i = 0; i < 2; i++) {
            await Functions.commBtn()
            await Functions.supportBtn()
            await Functions.aboutBtn()
            await Functions.logoBtn()
        }
    }

/*     \\---------------------------- Check if Names Match ----------------------------//     */
/*      \\----------------------------------------------------------------------------//     */

    async checkNames() {
        let currentSlideText = await Components.currentSlide.getText();
        
        await Components.carouselSlide.moveTo()
        await browser.pause(1000)
        let hoverCheck = await Components.hoverBox.isExisting();
        if (hoverCheck == true) {
            let hoverText = await Components.hoverTitle.getText();
            expect(hoverText).toBe(currentSlideText);
        }

        await Components.carouselSlide.click();
        await Functions.checkForMature();

        let gamePageTitle = await Components.gameTitle.getText();
        expect(currentSlideText).toBe(gamePageTitle);
        await Functions.logoBtn();
    }

/*     \\---------------------------- Carousel Loop: Arrows & Thumbs ----------------------------//     */
/*      \\--------------------------------------------------------------------------------------//     */

    async carouselLoop() {
        
        for (let i = 0; i < 8; i++) {
            Components.featureRightArrow.click()
        }
        for (let i = 0; i < 3; i++) {
            Components.featureLeftArrow.click()
        }
        for (let i = 0; i < 4; i++) {
            Components.discountRightArrow.click()
        }
        for (let i = 0; i < 2; i++) {
            Components.discountLeftArrow.click()
        }

    }

/*     \\---------------------------- Looping the nameCheck Function ----------------------------//     */
/*      \\--------------------------------------------------------------------------------------//     */

    async nameCheckLoop() {
        for (let i = 0; i < 5; i++) {
            await this.checkNames()
        }
    }

/*     \\---------------------------- Search Using: Letters, Numbers, Special, Empty, Spam, Real Game Name, Character Limit ----------------------------//     */
/*      \\---------------------------------------------------------------------------------------------------------------------------------------------//     */

    async letterSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`Using letters`)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`"Using letters"`)
    }

    async numberSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`123456`)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`"123456"`)
    }

    async specialCharSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`!@#$%^&*`)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`"!@#$%^&*"`)
    }

    async emptySearch() {
        await Search.searchBar.click()
        await Search.inputSearch(` `)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`" "`)
    }

    async spamSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`aiyg83604oqgp2&(H{Y(372hp@$#&^%$*&^%(R&OFUSAVFALIYSG))})`)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`"aiyg83604oqgp2&(H{Y(372hp@$#&^%$*&^%(R&OFUSAVFALIYSG))})"`)
    }

    async realNameSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`Counter Strike 2`)
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()

        let searchTagText = await Search.searchTag.getText();
        await expect(searchTagText).toBe(`"Counter Strike 2"`)
    }

    async charLimitSearch() {
        await Search.searchBar.click()
        await Search.inputSearch(`0`.repeat(5000));
        await expect(Search.suggestBox).toBePresent()
        await Search.btnSubmit.click()
        await expect(Search.oopsHeader).toBePresent()
    }

    async searchBarTests() {
        await this.letterSearch()
        await this.numberSearch()
        await this.specialCharSearch()
        await this.emptySearch()
        await this.spamSearch()
        await this.realNameSearch()
        await this.charLimitSearch()
    }

/*     \\---------------------------- Enabling / Disabling each filter type individually, and then all together ----------------------------//     */
/*      \\---------------------------------------------------------------------------------------------------------------------------------//     */

/* ----- TYPE ----- */

    async pressTypeInd() {
        await Functions.typeAllBtn()
        await Functions.typeAllBtn()

        await Functions.typeGameBtn()
        await Functions.typeGameBtn()

        await Functions.typeMusicBtn()
        await Functions.typeMusicBtn()

        await Functions.typeHardBtn()
        await Functions.typeHardBtn()

        await Functions.typeDLCBtn()
        await Functions.typeDLCBtn()

        await Functions.typeSoftBtn()
        await Functions.typeSoftBtn()

        await Functions.typeVideoBtn()
        await Functions.typeVideoBtn()
    }
    async pressTypeAll() {
        await Functions.typeAllBtn()
        await Functions.typeGameBtn()
        await Functions.typeMusicBtn()
        await Functions.typeHardBtn()
        await Functions.typeDLCBtn()
        await Functions.typeSoftBtn()
        await Functions.typeVideoBtn()

        await Functions.typeAllBtn()
        await Functions.typeGameBtn()
        await Functions.typeMusicBtn()
        await Functions.typeHardBtn()
        await Functions.typeDLCBtn()
        await Functions.typeSoftBtn()
        await Functions.typeVideoBtn()
    }

/* ----- FILTER TO ----- */

    async pressFilterToInd() {
        await Functions.filterToAllBtn()
        await Functions.filterToAllBtn()

        await Functions.filterToActBtn()
        await Functions.filterToActBtn()

        await Functions.filterToAdvBtn()
        await Functions.filterToAdvBtn()

        await Functions.filterToCoBtn()
        await Functions.filterToCoBtn()

        await Functions.filterToMultiBtn()
        await Functions.filterToMultiBtn()

        await Functions.filterToMusicBtn()
        await Functions.filterToMusicBtn()

        await Functions.filterToStratBtn()
        await Functions.filterToStratBtn()
    }
    async pressFilterToAll() {
        await Functions.filterToAllBtn()
        await Functions.filterToActBtn()
        await Functions.filterToAdvBtn()
        await Functions.filterToCoBtn()
        await Functions.filterToMultiBtn()
        await Functions.filterToMusicBtn()
        await Functions.filterToStratBtn()

        await Functions.filterToAllBtn()
        await Functions.filterToActBtn()
        await Functions.filterToAdvBtn()
        await Functions.filterToCoBtn()
        await Functions.filterToMultiBtn()
        await Functions.filterToMusicBtn()
        await Functions.filterToStratBtn()
    }

/* ----- WHOLE TEST ----- */

    async filtersTest() {
        await this.pressTypeInd()
        await this.pressTypeAll()
        await this.pressFilterToInd()
        await this.pressFilterToAll()
    }

}

export default new LFunc();
