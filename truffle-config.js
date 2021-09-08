
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
       version: "^0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "petersburg"
      }
    },
  },
};

// Daitoken - 0x86D802A49cAb2699e3E4ca5bc6A03D5Ad39a3570: 

//truffle run verify Orange@0xAEcd72eD4A947906029590C030ae7f73AC21b32A --network testnet

//orange: 0xAEcd72eD4A947906029590C030ae7f73AC21b32A
// TokenFarm = 0x726C23Aa63625B833f78b4048A8b10157F2b8525

//truffle run verify TokenFarm@0x726C23Aa63625B833f78b4048A8b10157F2b8525 --network testnet
