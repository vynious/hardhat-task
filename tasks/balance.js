const { task } = require("hardhat/config");

task("balance", "Get account balance")
    .addParam("account", "Account to query")
    .setAction(async (taskArgs, hre) => {
        const { ethers } = hre;
        const balance = await ethers.provider.getBalance(taskArgs.account);
        console.log(ethers.formatEther(balance), "ETH");
    });

module.exports = {};