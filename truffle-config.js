//var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "xxx";
var mnemonic = "xxx";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 80000000 // Match any network id,
    
    },
    ropsten: {
      network_id: 3,
      //provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      gas: 5800000
    },
    geth: {
      host: "localhost",
      port: 8545,
      gas: 5800000
    },
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 58000000,
    },
  },
  mocha: {
    enableTimeouts: false,
    useColors: true
  },
  compilers: {
    solc: {
      //version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      version: "0.6.9",    // Fetch exact version from solc-bin (default: truffle's version)
      //optimizer: {
      //  enabled: true,
      //  runs: 200
      //}
    }
  }
  
};