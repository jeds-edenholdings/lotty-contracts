require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");

dotenv.config();

let accounts = {
  mnemonic: process.env.DEPLOYER_MNEMONIC,
}

if(!!`${process.env.DEPLOYER_KEY || ''}`){
  accounts = [`${process.env.DEPLOYER_KEY}`];
}


/** @type import('hardhat/config').HardhatUserConfig */
// apiKey: "HUMUMZK6U3IYE52QD7UQVJCA25B5DK6US3",
module.exports = {
  solidity: "0.8.18",

  etherscan: {
    apiKey: "RYR6W5SSQX6MN7MDMY14DITMSRHTRIDF9U",
  },

  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL || "",
      accounts,
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts,
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts,
    },
  }
};
