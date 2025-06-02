---
description: Dividend-paying tokens automatically distribute mainstream coins from each transaction, with rewards proportional to holdings for easy passive income!        4o
---

# Creating Dividend-Paying Tokens

## What is Dividend-Paying?

Dividend-paying refers to a mechanism where after you issue a token, users holding your issued tokens can receive dividend tokens from every transaction according to the dividend tax rate, distributed to all token holders. The rewards each holder receives are related to the amount of tokens they own. The larger the holdings, the more rewards they receive. You can choose which specific coin to distribute as dividends when creating the contract, typically mainstream coins such as wBNB, USDT, USDC, Doge, etc.

## Contract Function Description

* Features include blacklist, whitelist, burn, marketing wallet, and other functions
* Dividend distribution in other coins (USDT, USDC, etc.), does not support distributing the native token
* Dividend-paying can set thresholds
* After token issuance, buy/sell tax rates can be adjusted
* After deployment, token permissions can be renounced

## Contract Deployment

Open [remix](https://remix.ethereum.org/), create a new file and paste the contract source code, or directly link to the contract source code address

Contract source code: [https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/dividendPayingToken.sol](https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/dividendPayingToken.sol)

**Parameter Description**

Here's a sample parameter set with explanations on how to modify them for your needs:

* First stringParams parameter: `["CPBoxTestToken", "CPBLP"]`
* Second addressParams parameter:

`["0x1234567890123456789012345678901234567890","0x0987654321098765432109876543210987654321","0x1111111111111111111111111111111111111111"]`

* Third numberParams parameter: `["18","1000000000000000000","200","100","100","50","200","100","100","50","3"]`
* Fourth boolParams parameter: `[true]`

Parameter explanation:

```java
// String parameter array
string[] memory stringParams = [
    "CPBoxTestToken",  // Token name, please modify to your own token name
    "CPB"              // Token symbol, please modify to your own token symbol
];

// Address parameter array
address[] memory addressParams = [
    0x1234567890123456789012345678901234567890,  // fundAddress: Fund address
    0x0987654321098765432109876543210987654321,  // currency: Trading pair token address
    0x1111111111111111111111111111111111111111   // swapRouter: Trading router contract address
];

// Numeric parameter array
uint256[] memory numberParams = [
    18,                    // decimals: Token precision
    1000000000000000000,   // totalSupply: Total token supply
    200,                   // buyFundFee: Buy fund fee rate (2%)
    100,                   // buyLPFee: Buy LP fee rate (1%)
    100,                   // buyReflectFee: Buy dividend tax rate (1%)
    50,                    // buyBurnFee: Buy burn fee rate (0.5%)
    200,                   // sellFundFee: Sell fund fee rate (2%)
    100,                   // sellLPFee: Sell LP fee rate (1%)
    100,                   // sellReflectFee: Sell dividend tax rate (1%)
    50,                    // sellBurnFee: Sell burn fee rate (0.5%)
    3                      // airdropNumbs: Airdrop quantity
];

// Boolean parameter array
bool[] memory boolParams = [
    true    // enableAirdrop: Airdrop switch
];
```

(Buy/Sell) Fee Rate Explanation:

* Fund fee rate: Each buy/sell transaction will deduct the corresponding proportion of native tokens and send them to your `marketing wallet` address
* LP fee rate: Each buy/sell transaction will deduct the corresponding proportion of tokens and send them to the `liquidity pool`
* Dividend fee rate: Each buy/sell transaction will deduct the corresponding proportion of native tokens and distribute them to all `token holding addresses`
* Burn fee rate: Each buy/sell transaction will deduct the corresponding proportion of tokens and send them to the `black hole address` to achieve burning

**Important Notes**

* Total buy tax rate cannot exceed 25% (buyFundFee + buyLPFee + buyReflectFee + buyBurnFee < 2500)
* Total sell tax rate cannot exceed 25% (sellFundFee + sellLPFee + sellReflectFee + sellBurnFee < 2500)
* When adding liquidity for the first time on Pancake, you must create a V2 pool, not a V3 pool. V3 does not support any mechanisms, so you can only use V2. Please note this.
* After contract creation, permissions are renounced by default, and there are no whitelist, blacklist, anti-bot, or trading switch functions
* If the black hole address holds tokens, it will also participate in dividend distribution

If you want to learn more about other uses and features of the CPBOX product

You can visit [https://docs.cpbox.io/](https://docs.cpbox.io/)

Or if you have good suggestions or need development assistance

You can find us through the contact information at the bottom of the homepage [https://www.cpbox.io/](https://www.cpbox.io/en/?_s=docs)

***

【Other Social Media】

TG Community: [https://t.me/cpboxio](https://t.me/cpboxio)

Twitter: [https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox)

Youtube: [https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
