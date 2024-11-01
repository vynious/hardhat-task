const { task } = require("hardhat/config");

task("transfer", "Transfer tokens to a second account and check balances")
    .addParam("to", "The recipient address")
    .addParam("amount", "The amount of tokens to transfer")
    .setAction(async (taskArgs, hre) => {
        const { ethers } = hre;
        const [deployer] = await ethers.getSigners();
        const tokenContract = await ethers.getContractAt("Token", "0xBECF4a7eBb1dfe3d274e6F33E844120F2F4B43F8"); // deployed contract

        // Execute the transfer
        const tx = await tokenContract.connect(deployer).transfer(taskArgs.to, taskArgs.amount);
        await tx.wait();
        console.log(`Transferred ${taskArgs.amount} tokens to ${taskArgs.to}`);
    });
