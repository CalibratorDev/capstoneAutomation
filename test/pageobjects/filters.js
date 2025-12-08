import { $ } from '@wdio/globals'

class Filter {

/*     \\---------------------------- TYPE | Dev Profile Filters ----------------------------//     */
/*      \\----------------------------------------------------------------------------------//     */

    get typeAll() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "All")]`);
    }
    get typeGame() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "Game")]`);
    }
    get typeMusic() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "Soundtracks")]`);
    }
    get typeHardware() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "Hardware")]`);
    }
    get typeDLC() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "DLC")]`);
    }
    get typeSoftware() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "Software")]`);
    }
    get typeVideo() {
        return $(`//div[@id="filtertype_container"]/a[contains(text(), "Video")]`);
    }

/*     \\---------------------------- FILTER TO | Dev Profile Filters ----------------------------//     */
/*      \\---------------------------------------------------------------------------------------//     */

    get filterToAll() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "All")]`);
    }
    get filterToAction() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Action")]`);
    }
    get filterToAdventure() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Adventure")]`);
    }
    get filterToCoop() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Co-op")]`);
    }
    get filterToMulti() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Multiplayer")]`);
    }
    get filterToMusic() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Soundtrack")]`);
    }
    get filterToStrategy() {
        return $(`//div[@id="filtertags_container"]/a[contains(text(), "Strategy")]`);
    }


}

export default new Filter();