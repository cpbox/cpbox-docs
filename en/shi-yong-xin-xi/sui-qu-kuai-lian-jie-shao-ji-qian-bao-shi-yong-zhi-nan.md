# Sui Blockchain Introduction and Wallet Usage Guide

As blockchain technology continues to evolve, the Web3 world welcomes new technological waves. Among them, the **Sui** blockchain is gradually becoming the focus of developers and users with its high performance, scalability, and unique programming model.

### What is Sui Blockchain?

**Sui** is a Layer 1 public blockchain based on the Move language, developed by the Mysten Labs team, dedicated to providing high-throughput, low-latency infrastructure for digital assets, games, NFTs, DeFi, and everyday application scenarios. Sui official website: https://sui.io/


**1. Theoretical TPS**

* In official tests and documentation, Sui claims to support over **120,000 TPS**.
* This number is based on parallel transaction execution (such as "simple transactions" like transfers) and relies on powerful node hardware and optimized configurations.

**2. Actual Mainnet TPS**

* The actual TPS on the mainnet will be much lower than the theoretical value because it includes:
  * Transactions of different complexity (transfers vs contract interactions)
  * Network latency
  * Consensus costs between validators
  * On-chain resource contention
* **Actual TPS during stable mainnet operation**: roughly fluctuates between **300 - 2,000 TPS** (based on community and node observation data).

**3. Peak Performance in Stress Tests**

* In stress tests by the community or third-party teams, peak values of **5,000 - 20,000 TPS** have been achieved, provided that large batches of "simple transactions" (such as transfers between parallel addresses) are executed.

**4. Sui's Unique Advantages**

Sui does not emphasize "unified chain-wide TPS," but rather allows **transactions between multiple accounts to proceed simultaneously** through parallel execution. So its design does not pursue maximizing average TPS, but rather pursues **low latency and scalability** under high throughput.

#### Core Features of Sui:

* **Move-based Secure Smart Contracts**: Developed using the Move language with a resource-oriented model that prevents asset loss and unauthorized access.
* **Parallel Transaction Processing Architecture**: Significantly improves TPS (transactions per second), particularly suitable for high-frequency micro-transaction scenarios.
* **Object-driven State Model**: Abstracts on-chain assets as objects, providing a more intuitive development experience.
* **Strong Scalability**: Can scale horizontally without complex sharding, adapting to Web3 application growth.

### Sui Application Scenarios

* NFT and digital collectible platforms (such as Suiet, Clutchy)
* DeFi projects (such as Aftermath Finance)
* Gaming and blockchain game platforms (such as Abyss World)
* DAO and identity systems
* Enterprise-level Web3 services

***

### Sui Wallet Usage Guide (Using Suiet and Sui Wallet as Examples)

#### Introduction to Common Sui Wallets:

**Suiet Wallet**

* User-friendly browser extension wallet.
* Supports NFT display, multiple accounts, network switching.

&#x20; **✅ Step 1: Visit the Official Website**

&#x20; Open your browser and go to the official Suiet website:  👉 [https://suiet.app](https://suiet.app)  Click the "**Add to Chrome**" or "**Download Wallet**" button on the homepage to jump to the extension marketplace.

&#x20; **✅ Step 2: Install the Plugin**

* If you are using Chrome or compatible browsers (Brave / Edge), click "Add to Browser".
* After installation is complete, you will see the Suiet icon in the upper right corner of your browser.

**Sui Wallet (Official Wallet)**

* Officially launched by Mysten Labs.
* Suitable for development testing and general user use.
* GitHub: [https://github.com/MystenLabs/sui](https://github.com/MystenLabs/sui)

***

#### Creating a Wallet (Using Suiet as an Example)

Open Suiet and click "Create New Wallet".

1. Set a password (recommend using a strong password) and confirm.
2. The system will generate **12 mnemonic words** — **be sure to keep them safe**, this is equivalent to your on-chain account key and cannot be lost.
3. After confirming the order of the mnemonic words, click complete, and your wallet is created!

> 💡 **Security Reminder**: Do not screenshot or send mnemonic words to others. It is recommended to write them down on paper and keep them offline.

4. Wallet creation successful, enter the homepage.

***

#### Receiving and Transferring

**Receiving:**

Click the copy icon next to the address on the wallet homepage or the "Receive" button. Share your wallet address with the payer.

**Transferring:**

Click the "Send" button. Enter the recipient's wallet address, select the Token type (such as SUI) and amount. Click confirm to send and wait for on-chain confirmation.


If you have batch sending needs, you can refer to here: [https://www.cpbox.io/sui/batch-send-token](https://www.cpbox.io/en/sui/batch-send-token?_s=docs)

***

#### Connecting to DApps

Open a DApp website that supports Sui (such as Clutchy NFT platform, Keepsake). Click "Connect Wallet" and select Suiet. The wallet will pop up a connection request, confirm to complete the connection.

***

#### Switching Networks (Testnet / Mainnet)

Select the network (Mainnet / Testnet / Devnet) in wallet settings. Developers can receive faucet tokens on the testnet to test contracts.  Developer faucet address example:

* Testnet Faucet: https://faucet.testnet.sui.io

***

### Conclusion

The Sui blockchain has injected new vitality into the Web3 world. Whether you are a developer or an ordinary user, you can easily participate in this ecosystem by using Sui wallets. As more and more projects deploy to Sui, the future looks promising!
