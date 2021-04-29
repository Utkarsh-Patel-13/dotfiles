const RPC = require("discord-rpc"),
    log = require("fancy-log");
const scopes = ["rpc", "rpc.api"];
const rpc = new RPC.Client({
    transport: "ipc",
});

rpc.on("ready", () => {
    rpc.setActivity({
        state: "idk",
        startTimestamp: new Date(),
        largeImageKey: "formulacoin-_fc__02",
        largeImageText: "FC",
    });

    console.log("RPC Loaded");
});

rpc.login({
    clientId: "<id>",
}).catch(log.error);
