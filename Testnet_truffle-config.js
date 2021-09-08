
 require('babel-register');
 require('babel-polyfill');
const HDWalletProvider = require("@truffle/hdwallet-provider");

// const infuraKey = "fj4jll3k.....";
//
const { mnemonic, BSCSCANAPIKEY} = require('./.env.json');

module.exports = {

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: BSCSCANAPIKEY
  },
  networks: {

    testnet: {
        networkCheckTimeout: 10000, 
        provider: () => new HDWalletProvider(mnemonic, `wss://data-seed-prebsc-1-s2.binance.org:8545/`),
        network_id: 97,
        confirmations: 5,
        gas: 9921975
        
      },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },
  
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
       version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    },
  },
};

// Daitoken - 0x86D802A49cAb2699e3E4ca5bc6A03D5Ad39a3570: 

//truffle run verify DappToken@0xfe8B1105c9eE41C0552d760aEDcf896c12839bEa --network testnet

//truffle run verify TokenFarm@0x2C23ABA6C00eD41109887E2Bb6caBDFF20754408 --network testnet
