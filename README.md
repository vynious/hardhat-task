# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Token.js

# interacting with contract
npx hardhat transfer --to <address> --amount <amount> --network sepolia
```


Deployed address on Sepolia: 0xBECF4a7eBb1dfe3d274e6F33E844120F2F4B43F8