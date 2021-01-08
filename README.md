# How to start the demo app

This example shows how to build an assistant for controlling Xiaomi vacuum cleaner on top of Dasha. If you need any help, join us in our [Developer Community](https://discord.gg/R8mDP2JGmv).

The app is built on [`node-mihome`](https://www.npmjs.com/package/node-mihome) and uses it's specific parameters. Please consult with their docs on how to obtain your `DEVICE_ID`, `DEVICE_TOKEN`, etc.

1. Create a file `.env` that contains:
```sh
DASHA_APIKEY=<your_dasha_apikey>
DEVICE_ID=<your_deviceid>
MI_USERNAME=<your_mi_username>
MI_PASSWORD=<your_mi_password>
MI_MODEL=<your_device_model>
DEVICE_IP=<your_device_ip>
DEVICE_TOKEN=<your_device_token>
```
To receive your Dasha API key, enroll into our beta program here https://dasha.ai/en-us/developers.
1. Run `npm i`.
```sh
npm i
```
3. Run one of the following:
    * To start outbound call run
    ```sh
    npm start <phone_number>
    ```
     (phone number in international format without `+`, for instance `12223334455`).
    * To start text chat run
    ```sh
    npm start chat
    ```
