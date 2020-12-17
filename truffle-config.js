const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "2a86bf13256f4416b08597ba26841646";
const mnemonic = "keep crazy tree second approve earth gallery wheel private soup bring obscure";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    },
  }
};