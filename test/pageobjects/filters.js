import { $ } from '@wdio/globals'

class Filter {

    filterTypeSelector(name) {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "${name}")]`);
    }
    
    filterTagSelector(name) {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "${name}")]`);
    }

}

export default new Filter();