require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

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
      goerli: {
        url: process.env.ALCHEMY_GOERLI_URL,
        accounts: [`0x${process.env.ALCHEMY_GOERLI_PRIVATE_KEY}`],
      },
    },
  },
};
