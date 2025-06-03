---
description: Quickly resolve Ethereum network congestion issues, accelerate or cancel stuck ETH transactions with one click
---

# Ethereum Transaction Management

### Feature Overview

In the Ethereum blockchain network, transactions require gas fees to be confirmed. When users set gas fees too low, or when network congestion causes gas prices to suddenly spike, transactions may remain in a pending state for extended periods. CPBOX's transaction acceleration and cancellation feature is designed to solve this problem, helping users better manage their pending transactions.

### Problem Background

Ethereum network gas fees are dynamic, influenced by various factors such as network congestion and transaction demand. When users initiate transactions:

* If gas fees are set too low, miners will prioritize transactions with higher gas fees, causing low-gas transactions to wait for extended periods
* During network congestion, gas prices may rise dramatically in a short time, making previously reasonable gas settings insufficient
* Pending transactions may tie up users' fund balances, hindering the execution of other transactions

### CPBOX Transaction Acceleration Feature

The transaction acceleration feature allows users to increase gas fees for submitted but unconfirmed transactions, improving transaction priority:

1. Users select pending transactions that need acceleration
2. The system provides current network recommended gas price references
3. Users set new, higher gas prices
4. The system rebroadcasts the transaction using the same nonce value but with higher gas prices
5. Miners will choose to process the higher gas price version among transactions with the same nonce value

### CPBOX Transaction Cancellation Feature

When users no longer wish to execute a pending transaction, they can use the cancellation feature:

1. Users select pending transactions that need cancellation
2. The system creates a 0 ETH self-transfer transaction using the same nonce value as the original transaction
3. Set a gas price higher than the original transaction for this cancellation transaction
4. This new transaction will be processed with priority, making the original transaction permanently unconfirmable
5. Users only need to pay the gas fee for the cancellation transaction; the original transaction data will not be recorded on-chain

### Use Cases

CPBOX's transaction acceleration and cancellation features are particularly useful in the following scenarios:

* DeFi trading where timing is sensitive and quick confirmation is needed to capture market opportunities
* NFT minting or purchasing activities where transactions need to be completed within the activity window
* When users discover transaction parameter errors and wish to prevent incorrect transaction execution
* When the network suddenly becomes congested and gas prices spike, requiring quick transaction strategy adjustments

### Usage Recommendations

To better utilize CPBOX's transaction acceleration and cancellation features:

* Closely monitor network gas price trends and initiate transactions during relatively low periods
* For time-sensitive transactions, set gas prices slightly higher than current market rates
* Develop a habit of regularly checking pending transactions and promptly handling long-unconfirmed transactions
* During extreme network congestion periods, be prepared to pay higher gas fees or wait patiently

Through CPBOX's transaction acceleration and cancellation features, users can more flexibly respond to Ethereum network changes, ensure transactions are executed or cancelled according to their intentions, and improve fund utilization efficiency and transaction experience.

***

### **Contact Us**

Contact Us

If you want to learn more about other uses and features of CPBOX products

You can visit [https://docs.cpbox.io/](https://docs.cpbox.io/) to learn more

Or if you have good suggestions or development needs

You can find us through the contact information at the bottom of the homepage [https://www.cpbox.io/](https://www.cpbox.io/en/?_s=docs)

You can also contact us through the social media below

***

### Other Social Media

TG Group: [https://t.me/cpboxio](https://t.me/cpboxio)

Twitter: [https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox) | [https://x.com/cpboxio](https://x.com/cpboxio)

Youtube: [https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
