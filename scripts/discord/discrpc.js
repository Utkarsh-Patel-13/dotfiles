// const { error, log } = require("console");
const RPC = require("discord-rpc"),
  log = require("fancy-log");
const scopes = ["rpc", "rpc.api"];
const rpc = new RPC.Client({
  transport: "ipc",
});

rpc.on("ready", () => {
  rpc.setActivity({
    // details: "",
    state: "idk",
    startTimestamp: new Date(),
    largeImageKey: "formulacoin-_fc__02",
    largeImageText: "FC",
  });

  console.log("RPC Loaded");
});

rpc
  .login({
    clientId: "798402549437693982",
    // scopes: scopes,
  })
  .catch(log.error);

// const clientId = "798402549437693982";
// const scopes = ["rpc", "rpc.api", "messages.read"];

// const client = new RPC.Client({ transport: "websocket" });

// client.on(
//   "ready",
//   () => {
//     console.log("Logged in as", client.application.name);
//     console.log("Authed for user", client.user.username);

//     // client.selectVoiceChannel("81384788862181376");
//   },
//   "catch",
//   () => {
//     console.log("error");
//   }
// );

// // Log in to RPC with client id
// client.login({ clientId, scopes });
