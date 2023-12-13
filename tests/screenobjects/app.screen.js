import {DEFAULT_TIMEOUT} from '../Constants/constants';

export default class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    async waitForIsShown() {
        return $(this.selector).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            timeoutMsg: `No element with selector ${this.selector} appeared after ${DEFAULT_TIMEOUT}ms.`
        });
    }
}
