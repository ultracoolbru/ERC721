require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        count: 10,
        initialIndex: 0,
        mnemonic: "test test test test test test test test test test test junk",
        path: "m/44'/60'/0'/0",
        accountsBalance: "1000000000000000000000000",
      },
    },
    hardhat: {
      goerli: {
        url: process.env.ALCHEMY_GOERLI_URL,
        accounts: [`0x${process.env.ALCHEMY_GOERLI_PRIVATE_KEY}`],
      },
    },
  },
};
