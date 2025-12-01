import { $ } from '@wdio/globals'
import Page from './url.js';

class Search extends Page {

    get inputSearch() {
        return $('//input[@placeholder="Search the store"]');
    }

    get btnSubmit() {
        return $('//button[@type="submit"]');
    }

    async inputSearch(search) {
        await this.inputSearch.setValue(search);
        await this.btnSubmit.click();
    }

    open() {
        return super.open();
    }
}

export default new Search();
