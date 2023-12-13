import AppScreen from './app.screen';

const TAB_BAR_ID = 'nav';
const SELECTORS = {
    MENU_XPATH: `xpath://*[@resource-id="${TAB_BAR_ID}"]//android.widget.Button[1]`,
    LOGIN_BUTTON_XPATH: `xpath://*[@resource-id="${TAB_BAR_ID}"]//android.widget.Button[@text="Acceder"]`,
    REGISTRATION_BUTTON_XPATH: `xpath:(//*[@resource-id="${TAB_BAR_ID}"]//android.widget.Button[@text="Regístrate"]`,
    COOKIES_ACCEPT_BUTTON: `xpath://android.app.Dialog//android.widget.Button[@text='ACEPTAR']`,
};

class HomeScreen extends AppScreen {
    constructor() {
        super(SELECTORS.COOKIES_ACCEPT_BUTTON);
    }

    get acceptCookiesButton() {
        return $(SELECTORS.COOKIES_ACCEPT_BUTTON);
    }

    get loginButton() {
        return $(SELECTORS.LOGIN_BUTTON_XPATH);
    }

    get registrationButton() {
        return $(SELECTORS.REGISTRATION_BUTTON_XPATH);
    }

    get menuButton() {
        return $(SELECTORS.MENU_XPATH);
    }

    async acceptCookies() {
        await this.acceptCookiesButton.click();
    }

    async openMenuView() {
        await this.menuButton.click();
    }

    async openLoginView() {
        await this.loginButton.click();
    }

    async openRegistrationView() {
        await this.registrationButton.click();
    }
}

export default new HomeScreen();
