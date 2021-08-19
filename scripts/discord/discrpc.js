const RPC = require("discord-rpc"),
    log = require("fancy-log");
const scopes = ["rpc", "rpc.api"];
const rpc = new RPC.Client({
    transport: "ipc",
});

rpc.on("ready", () => {
    rpc.setActivity({
        // details: "",
        state: "",
        startTimestamp: new Date(),
        largeImageKey: "chickenread",
        largeImageText: "FC",
    });

    console.log("RPC Loaded");
});

rpc.login({
    clientId: "",
}).catch(log.error);
