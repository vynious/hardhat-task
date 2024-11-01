const { task } = require("hardhat/config");

task("withdraw", "Withdraw tokens after interest accrual")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const secondAccount = new ethers.Wallet(process.env.SECOND_ACCOUNT_PRIVATE_KEY, ethers.provider);
    const tokenContract = await ethers.getContractAt("Token", process.env.CONTRACT_ADDRESS);

    console.log("Waiting 5 minutes for interest accrual...");
    await new Promise((resolve) => setTimeout(resolve, 5 * 60 * 1000)); // Wait 5 minutes

    const tx = await tokenContract.connect(secondAccount).withdraw();
    await tx.wait();

    console.log(`Withdrawn tokens with interest to ${secondAccount.address}`);
  });