import LoginScreen from '../screenobjects/login.screen';
import * as appMessages from '../Constants/appMessages.constant';
import {Given, Then, When} from "@wdio/cucumber-framework";
import HomeScreen from "../screenobjects/home.screen";

Given('I accept cookies', async () => {
    await HomeScreen.waitForIsShown();
    await HomeScreen.acceptCookies();
});

Given('I open login screen', async  () => {
    await HomeScreen.openLoginView();
    await LoginScreen.waitForIsShown(true);
});

When(
    'I try to log in with credentials email: {string} and password: {string}',
    async (email, password) => {
        await LoginScreen.login(email, password);
    },
);

Then('app displays a message that the credentials are invalid', async () => {
    const errorHeader = await LoginScreen.errorHeader.getText();
    const errorMessage = await LoginScreen.errorMessage.getText();
    expect(errorHeader).toEqual(appMessages.INVALID_EMAIL_OR_PASSWORD_HEADER);
    expect(errorMessage).toEqual(appMessages.INVALID_EMAIL_OR_PASSWORD_MESSAGE);
});

Then('I close the error', async () => {
    await LoginScreen.errorModalClose.click();
});
