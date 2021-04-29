const RPC = require("discord-rpc");
log = require("fancy-log");
const clientId = '798402549437693982';

const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
	client.setActivity({
   		 // details: "",
    		state: "lazy day... ",
    		startTimestamp: new Date(),
    		largeImageKey: "formulacoin-_fc__02",
    		largeImageText: "FC",
 	 });


	console.log('Logged in as');
  	console.log('Authed for user');

});

// Log in to RPC with client id
client.login({ clientId }).catch(log.error);
