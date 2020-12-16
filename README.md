# Project-6-Udacity-Supply-Chain

a decentralized app that tracks coffee beans supply chain or logistics with parties from the farmers, distributors, retailers, and consumers. The parties will act as the actors to record the item throughout its journey

## UML Diagram

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Activity%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Sequence%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/State%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Data%20Modeling%20Diagram.PNG)


## Smart Contract

SupplyChain tx hash: 0xbbadf89a1e3081834b1b71cf35b9fa69fefd3046fb8018a619be40471a4456fe

SupplyChain contract address: 0x7b5a9809e1F1BD9c2711208704cfB3D3f863E987

url address: https://rinkeby.etherscan.io/address/0x7b5a9809e1F1BD9c2711208704cfB3D3f863E987

```
1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x7d725bce42c0826c8f7cdc5a1a497523434d402c2adfcb31fa0b7edf24d5e6ec
   > Blocks: 1            Seconds: 10
   > contract address:    0x736c868aeE35d90840c32ffEE6FC5830574fbe51
   > block number:        7723774
   > block timestamp:     1608032449
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.696303469
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x24c8b50d68b51436236580e02fa90654d1e5b22cc0d90ea392c579cd895def70
   > Blocks: 1            Seconds: 22
   > contract address:    0xa2bb57E67636EB6ddb4A5608A2fE9cDE2F746361
   > block number:        7723777
   > block timestamp:     1608032494
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.692818999
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x2dbcdb15d2e7ea944731ab652e97b8c63337309e3f642e51d8e4f2abfe61624b
   > Blocks: 1            Seconds: 15
   > contract address:    0x589965cf64DB8e3a2D0DBA1c9123Bec5716ce211
   > block number:        7723779
   > block timestamp:     1608032524
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.689758399
   > gas used:            306060 (0x4ab8c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030606 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x1031eac34ad8b837df2fe5abaf30aa990924e7330b2bb2927872a07eb12e7601
   > Blocks: 1            Seconds: 14
   > contract address:    0x033d0E481f2AEF9833968C853aE228b701C5bA90
   > block number:        7723781
   > block timestamp:     1608032554
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.686697559
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x1fc9b303a260b0884b6fda9c44c486da6627a5fd0347b7f408db10cb09ae9773
   > Blocks: 1            Seconds: 15
   > contract address:    0x76217B71b7B077094cD77b816C97bEBC25C884fF
   > block number:        7723783
   > block timestamp:     1608032584
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.683636719
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xbbadf89a1e3081834b1b71cf35b9fa69fefd3046fb8018a619be40471a4456fe
   > Blocks: 1            Seconds: 14
   > contract address:    0x7b5a9809e1F1BD9c2711208704cfB3D3f863E987
   > block number:        7723786
   > block timestamp:     1608032629
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             13.658874769
   > gas used:            2476195 (0x25c8a3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02476195 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03700507 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.03925744 ETH 
```
