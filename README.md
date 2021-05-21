# How to start the demo app

This example shows how to build an assistant for controlling Xiaomi vacuum cleaner on top of Dasha. If you need any help, join us in our [Developer Community](https://community.dasha.ai).

The app is built on [`node-mihome`](https://www.npmjs.com/package/node-mihome) and uses it's specific parameters. Please consult with their docs on how to obtain your `DEVICE_ID`, `DEVICE_TOKEN`, etc.

1. Clone the repo and install the dependencies:

```sh
git clone https://github.com/dasha-samples/dasha-miio-vacuum-cleaner
cd dasha-miio-vacuum-cleaner
npm install
```

2. Create a file `.env` that contains:
```sh
DEVICE_ID=<your_deviceid>
MI_USERNAME=<your_mi_username>
MI_PASSWORD=<your_mi_password>
MI_MODEL=<your_device_model>
DEVICE_IP=<your_device_ip>
DEVICE_TOKEN=<your_device_token>
```

3. Create or log into your account using the Dasha CLI tool:

```sh
npx dasha account login
```

4. To start a text chat, run:

```sh
npm start chat
```

5. To receive a phone call from Dasha, run:

```sh
npm start <your phone number>
```

The phone number should be in the international format without the `+` (e.g. `12223334455`)
