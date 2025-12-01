import { browser } from '@wdio/globals'

export default class Url {
    open() {
        return browser.url(`https://store.steampowered.com/`)
    }
}
