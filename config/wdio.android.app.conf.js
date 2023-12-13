const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        path: '/',
        'platformName': 'Android',
        'appium:options': {
            automationName: 'UiAutomator2',
            deviceName: process.env.ANDROID_DEVICE_NAME || 'android_14',
            platformVersion: process.env.ANDROID_PLATFORM_VERSION || '14',
            app: process.env.ANDROID_APP || './apps/codere.apk',
            fullReset: true,
            noReset: false,
            newCommandTimeout: 7200,
            noSign: true,
            adbExecTimeout: 150000,
            appPackage: process.env.ANDROID_APP_PACKAGE || '',
            appWaitActivity: process.env.ANDROID_APP_WAIT_ACTIVITY || '',
            autoGrantPermissions: true,
        },
    }
];

config.serverConfig = {
    path: '/',
    host: process.env.APPIUM_HOST || '0.0.0.0',
    port: Number(process.env.APPIUM_PORT) || 4723,
    logLevel: 'error',
};

exports.config = config;
