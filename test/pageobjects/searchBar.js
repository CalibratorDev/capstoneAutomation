import { $ } from '@wdio/globals'

class Search {

    get searchBar() {
        return $('//input[@placeholder="Search the store"]');
    }

    get btnSubmit() {
        return $('//button[@type="submit"]');
    }

    get suggestBox() {
        return $ (`//div[@id="searchSuggestions_«r0»"]`);
    }

    get searchTag() {
        return $(`//div[@id="searchtag_tmpl"][@class="searchtag tag_dynamic"]`);
    }

    get oopsHeader() {
        return $(`//div/h2`);
    }

    async inputSearch(search) {
        await this.searchBar.setValue(search);
    }

}

export default new Search();
