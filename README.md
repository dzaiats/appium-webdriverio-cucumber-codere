## How to run the tests
- Install `npm i`
- Launch the android device and specify the correct parameters in `./config/wdio.android.app.conf.js` or set `ANDROID_DEVICE_NAME` and `ANDROID_PLATFORM_VERSION` as env vars
- Launch appium `node ./node_modules/appium --address 0.0.0.0 --port 4723 --base-path=/`
- Launch the tests `npm run android:app`
- Check the report in the allure or in the console

Screenshot:
![Screenshot](./screenshots/screenshot1.png "Screenshot")

Video:
![Video](./screenshots/video.webm "Video")

### P.S
Test credentials might be not valid

### How to run the tests on multiple devices
Depending on the mobile test provider - it is possible to configure a workflow on Github and split the devices into reusable workflow, specifying the device configuration per workflow and passing the arguments as env variables.
A current example is only using a single spec name.
