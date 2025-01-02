require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      chainId:31337,
      accounts: {
        count: 20, // Number of accounts
        initialBalance: "10000000000000000000000", // Balance in wei (10,000 ETH)
      },
      
    }
  },
  paths:{
    artifacts:"./client/src/artifacts",
  }
};
