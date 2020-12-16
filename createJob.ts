const mihome = require('node-mihome');

// local miIO
mihome.miioProtocol.init();
mihome.miCloudProtocol.login(process.env.MI_USERNAME!, process.env.MI_PASSWORD!);

const device = mihome.device({
  id: process.env.DEVICE_ID!, // required, device id
  model: process.env.MI_MODEL!, // required, device model
  address: process.env.DEVICE_IP!, // miio-device option, local ip address
  token: process.env.DEVICE_TOKEN!, // miio-device option, device token
  refresh: 30000 // miio-device option, device properties refresh interval in ms  
});
device.on('properties', (data:any) => {
 // console.log(data);
});

export function createJob(phone: string) {
  return {
    data: {
      phone
    },
    rpcHandler: {
      async startCleaner(){
        console.log("Starting cleaning...");
        await device.init();
        device.setClean();
        return "";
      },
      async stopCleaner() {
        console.log("Returning to dock...");
        await device.init();
        device.setCharge(); 
        return "";       
      },
      async getBattery() {
        await device.init();
        return device.getBattery(); 
      }
    }
  };
}
