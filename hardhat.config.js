require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "LDBcrjM4xMUn0x_NePQETutfslrnPyKk";
const SEPOLIA_PRIVATE_KEY = "890c6d53aed9b6c8b758f276444925c041f091775d45b2613ac3f4cd4215eaf3";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      gasPrice: 10000000000,
    }
  }
};