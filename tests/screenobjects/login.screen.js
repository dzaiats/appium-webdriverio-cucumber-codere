import AppScreen from './app.screen';

const SELECTORS = {
    LOGIN_BUTTON: 'xpath://*[@resource-id="btnaccess"]',
    INPUT: 'xpath:(//android.widget.EditText)[1]',
    PASSWORD: 'xpath:(//android.widget.EditText)[2]',
    LOGIN_ERROR_HEADER: 'xpath://*[starts-with(@resource-id,"alert-hdr-")]',
    LOGIN_ERROR_MESSAGE: 'xpath://*[starts-with(@resource-id,"alert-msg-")]',
    LOGIN_ERROR_CLOSE: 'xpath://android.widget.Button[@text="OK"]',
};

class LoginScreen extends AppScreen {
    constructor() {
        super(SELECTORS.LOGIN_BUTTON);
    }

    get loginButton() {
        return $(SELECTORS.LOGIN_BUTTON);
    }

    get email() {
        return $(SELECTORS.INPUT);
    }

    get password() {
        return $(SELECTORS.PASSWORD);
    }

    get errorHeader() {
        return $(SELECTORS.LOGIN_ERROR_HEADER);
    }

    get errorMessage() {
        return $(SELECTORS.LOGIN_ERROR_MESSAGE);
    }

    get errorModalClose() {
        return $(SELECTORS.LOGIN_ERROR_CLOSE);
    }

    async login(email, password) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginScreen();
