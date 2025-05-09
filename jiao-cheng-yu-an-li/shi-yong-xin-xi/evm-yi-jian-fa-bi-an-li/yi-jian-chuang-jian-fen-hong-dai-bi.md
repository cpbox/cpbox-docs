---
description: 教你创建分红代币，让你的代币价格不停的往上涨
---

# 一键创建分红代币

#### 什么是分红代币？

分红本币，指的是持币分本币（所谓本币，就是**你发行的代币**）。用户从每一笔交易中，按照分红税率扣除一定的代币给到所有持币人。每个持币人所能分到的奖励，和它所拥有的代币数额有关系。持仓越大，分到的奖励越多。

#### 使用场景

通过定期分红（如协议收入、交易手续费等），鼓励用户长期持有代币而非短期抛售，稳定代币价格。结合代币燃烧和提供流动性奖励等机制，实现灵活的代币运营。

#### 合约部署

打开[remix](https://remix.ethereum.org/)，新建文件并粘贴合约源码，或者直接关联合约源码地址，操作流程参考：

合约源码：[https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/dividend.sol](https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/dividend.sol)

**参数说明**

<figure><img src="../../../.gitbook/assets/image (54).png" alt=""><figcaption><p>创建分红代币</p></figcaption></figure>

这里给出一份示例参数，并解释如何修改适合自己的参数

* 第一个 stringParams 的参数: `["CPBoxTestToken", "CPBLP"]`
* 第二个addressParams 的参数:

`["0x1234567890123456789012345678901234567890","0x0987654321098765432109876543210987654321","0x1111111111111111111111111111111111111111"]`

* 第三个numberParams参数：`["18","1000000000000000000","200","100","100","50","200","100","100","50","3"]`
* 第四个boolParams 参数： `[true]`

参数说明：

```java
// 字符串参数数组
string[] memory stringParams = [
    "CPBoxTestToken",  // 代币name，请修改为你自己的代币符号
    "CPB"              // 代币符号，请修改为你自己的代币符合
];

// 地址参数数组
address[] memory addressParams = [
    0x1234567890123456789012345678901234567890,  // fundAddress: 基金地址
    0x0987654321098765432109876543210987654321,  // currency: 交易对代币地址
    0x1111111111111111111111111111111111111111   // swapRouter: 交易路由合约地址
];

// 数值参数数组
uint256[] memory numberParams = [
    18,                    // decimals: 代币精度
    1000000000000000000,   // totalSupply: 代币总供应量
    200,                   // buyFundFee: 买入基金费率 (2%)
    100,                   // buyLPFee: 买入LP费率 (1%)
    100,                   // buyReflectFee: 买入分红税率 (1%)
    50,                    // buyBurnFee: 买入销毁费率 (0.5%)
    200,                   // sellFundFee: 卖出基金费率 (2%)
    100,                   // sellLPFee: 卖出LP费率 (1%)
    100,                   // sellReflectFee: 卖出分红税率率 (1%)
    50,                    // sellBurnFee: 卖出销毁费率 (0.5%)
    3                      // airdropNumbs: 空投数量
];

// 布尔参数数组
bool[] memory boolParams = [
    true    // enableAirdrop: 空投开关
];
```

（买入/卖出）费率说明：

* 基金费率：每笔买入/卖入都会扣除对应比例本币发送到你的`营销钱包`地址
* LP费率：每笔买入/卖入都会扣除对应比例代币送进`资金池`
* 分红费率：每笔买入/卖入都会扣除对应比例的本币分给所有`持币地址`
* 销毁费率：每笔买入/卖入都会扣除对应比例代币送进`黑洞地址`,达到销毁的目的

**注意事项**

* 总的买入税率不能超过25%（ 买入营销税 + 买入税 + 分红税 + 买入销毁 < 2500）
* 总的卖出税率不能超过25%（卖出营销税 + 卖出税 + 卖出分红 + 卖出销毁 <2500）
* 在Pancake第一次添加流动性的时候，必须做V2的池子，不能做V3的池子。V3不支持任何机制，所以只能在V2做，请注意
* 合约创建完成后默认丢弃权限，也没有白名单、黑名单、杀机器人、交易开关等功能
* 黑洞地址如果持有代币，同样会参与分红

如果想要更多的了解CPBOX这个产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

***

【其他社媒】&#x20;

TG交流群：[https://t.me/cpboxio](yi-jian-chuang-jian-fen-hong-dai-bi.md#shen-me-shi-fen-hong-dai-bi)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox)

Youtube：[https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
