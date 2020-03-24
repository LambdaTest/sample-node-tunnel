var lambdaTunnel = require("@lambdatest/node-tunnel");
var tunnelInstance = new lambdaTunnel();
var tunnelArguments = {
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  logFile: "local.log"
};

tunnelInstance
  .start(tunnelArguments)
  .then(_ => {
    console.log("Tunnel is Running Successfully");
  })
  .catch(err => {
    console.log(err);
  });
