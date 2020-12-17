# Project-6-Udacity-Supply-Chain

a decentralized app that tracks coffee beans supply chain or logistics with parties from the farmers, distributors, retailers, and consumers. The parties will act as the actors to record the item throughout its journey

## UML Diagram

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Activity%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Sequence%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/State%20Diagram.PNG)

![Alt Text](https://github.com/MuhdRaffiq/Project-6-Udacity-Supply-Chain/blob/master/UML%20Diagram/Data%20Modeling%20Diagram.PNG)

## IPFS Hosting

link to IPFS website: https://gateway.ipfs.io/ipfs/QmeTvjXYkuev1tMcXpdET1vURLAoFtjKmAex2T7Mbqr9V2/
## Smart Contract

SupplyChain tx hash: 0x438bc41901fd5a48ef13a948173af27d3e77c7de5febaab7751e5d3a0ecceb7f

SupplyChain contract address: 0x62F0970DceEB0Ced92bFE6Fb1Ca4a8747FfE2DEF

url address: https://rinkeby.etherscan.io/address/0x62f0970dceeb0ced92bfe6fb1ca4a8747ffe2def

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================
   > Blocks: 1            Seconds: 18
   > contract address:    0x1D15E8A5E6a3CfD8353b25cf3bc7102f415bdC7e
   > block number:        7734763
   > block timestamp:     1608197923866048334625e064ea8e6e81a26fd7cc5e2e4c43284c41ac37df3e47
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.654411020000000002
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

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0xa4e65cce179a266f4d01720a48ee41bd55ba1ade8a0b2c997c4215c5a696d2d3
   > Blocks: 1            Seconds: 9
   > contract address:    0xDD8e25d7eb9d58dAB1E40Cb9f88a577E04745c87
   > block number:        7734765
   > block timestamp:     1608197953
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.650926550000000002
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0x7c1cd6af6207cdcaa7bca8c41dd92d59ab3f19fe370710d15eb5a223574e11b2
   > Blocks: 1            Seconds: 9
   > contract address:    0x27a5442053863F81296635D61BAdA41e73D83Ae0
   > block number:        7734766
   > block timestamp:     1608197968
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.647865950000000002
   > gas used:            306060 (0x4ab8c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0030606 ETH


   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0x25596742a9997351fc2c3b37b767a9227474349fc0b408dd89aae8e31fd83d50
   > Blocks: 2            Seconds: 21
   > contract address:    0x6bda5cC7981790BC241EFa52516051B9AAafeB81
   > block number:        7734768
   > block timestamp:     1608197998
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.644805110000000002
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0xab674aeeea0bf56349ed6f917acdc685b47e4fa1d5205769cba9a1f608daedc5
   > Blocks: 2            Seconds: 21
   > contract address:    0xE6262D657E65911bdDd574B5543Cb9bDB8984545
   > block number:        7734770
   > block timestamp:     1608198028
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.641744270000000002
   > gas used:            306084 (0x4aba4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306084 ETH


   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0x438bc41901fd5a48ef13a948173af27d3e77c7de5febaab7751e5d3a0ecceb7f
   > Blocks: 1            Seconds: 5
   > contract address:    0x62F0970DceEB0Ced92bFE6Fb1Ca4a8747FfE2DEF
   > block number:        7734771
   > block timestamp:     1608198043
   > account:             0x6D353B78Fc48BD98610cC0420C89A3502031eCF7
   > balance:             7.614668970000000002
   > gas used:            2707530 (0x29504a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0270753 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03931842 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.04157079 ETH
```

## Libraries

Roles - used for adding, removing, and check if the actors added is in the list for mapping for access control

Truffle - for deploying smart contracts

## Versions

ipfs version 0.7.0

Truffle v5.1.52 (core: 5.1.52)

Solidity v0.5.16 (solc-js)

Node v10.16.3

Web3.js v1.2.9
