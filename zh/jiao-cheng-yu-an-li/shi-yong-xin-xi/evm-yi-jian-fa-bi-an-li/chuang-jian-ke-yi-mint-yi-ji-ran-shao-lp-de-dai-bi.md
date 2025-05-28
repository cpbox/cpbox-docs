---
description: CPBOXLPBurnToken 是一款集自动销毁、流动性管理与灵活税费于一体的代币合约，助力 DeFi 项目实现价值增长与生态稳定。
---

# 创建可以Mint,以及燃烧LP的代币

概述

**CPBOXLPBurnToken** 是由 [CPBOX.io](https://www.cpbox.io) 开发的一款创新型代币智能合约，结合了代币经济模型与流动性池管理机制。其核心目标是通过自动化的销毁机制与灵活的费用策略，实现代币价值的稳定增长与健康的流动性生态。

***

### 核心功能

1. 流动性管理机制

* **自动流动性燃烧**：定期销毁流动性池中代币的数量，减少池内流通量，提升代币稀缺性, 项目加了池子以后，池子里面自己的币可以按照固定周期进行燃烧销毁， 从而达到价格被动上涨。
* 可配置的销毁频率与比例

2. 交易费用机制
   1. 买入税率和卖出税率，各自总量不超过25%，
      1. **买入卖出税** : 每笔买入都会扣除对应比例代币送进`合约地址`,在**触发阈值**时会自动**卖出**然后发送到你的营销钱包地址
      2. **销毁税** : 每笔买入都会扣除对应比例代币送进`黑洞地址`,达到销毁的目的
      3. **流动性税** : 每笔买入都会扣除对应比例代币送进`合约地址`,在**触发阈值**时会自动添加流动性,使池子更厚，加池子获得的LP默认给到营销钱包

> 所有费用均可动态调整，以适应市场需求

3. 燃烧参数：
   1. 燃烧周期: 多少个小时燃烧一次，当有用户进行买卖 超过此时间就会燃烧
   2. 燃烧率: 每次燃烧的比例
   3. 燃烧条件：每个周期内必须有卖单才能燃烧
   4. 燃烧停止： 池子里面只有100个token的时候不再燃烧
4. 安全机制

* **白名单机制**：支持预设地址豁免交易限制
* **交易限制**：防止大额操作冲击市场
* **合约地址识别**：防止智能合约参与恶意行为
* **防同步攻击保护**：保障 LP 状态与市场行为一致性

5. 开启步骤
   1. 用户将使用Bnb 进行mint， 合约会按照设定好的比例返给用户，类似IEO的概念
   2. 用户只要往代币地址打Bnb,就会mint
   3. 项目方加池子以冰球手动开盘交易以后，mint阶段会结束或者Mint分数达到总分数，也会自动结束

***

### 应用场景

**✅ 代币经济管理**

* 控制供应量，维持稀缺性
* 自动化销毁机制增强通缩性
* 管理流动性池健康度

**✅ 项目融资**

* 通过代币铸造实现 Bnb 筹资
* 自动分配资金，支持项目发展
* 提升透明度与资金使用可追溯性

**✅ 稳定的交易市场**

* 抵御价格操控与异常交易
* 优化投资者交易体验
* 提供长期稳定的交易生态

***

### 部署

合约的设计比较灵活，管理员可以通过各种参数来调整代币的经济模型，包括费率、销毁参数等。同时也包含了必要的安全机制来防止滥用。

我们可以使用CPBox提供合约,直接导入[remix](https://remix.ethereum.org/) 进行部署: 源码地址 https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/lpburn.sol我这里给出一份参数，并解释如何修改适合自己的参数

<figure><img src="../../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>lpburn 合约</p></figcaption></figure>

* 第一个 stringParams 的参数: `["CPBoxLPTestToken", "CPBLP"]`
* 第二个addressParams 的参数:

`["0x1234567890123456789012345678901234567890","0x0987654321098765432109876543210987654321","0x1111111111111111111111111111111111111111","0x2222222222222222222222222222222222222222"]`

* 第三个numberParams参数：`["18","1000000000000000000","200","100","50","200","100","50","30","100","3600","100","5","1000000000000000","1000000000000000000","1000000"]`
* 第四个boolParams 参数： `[true,true,true,true,true,true,true]`

```
// 字符串参数数组
string[] memory stringParams = [
    "CPBoxLPTestToken",  //  代币name，请修改为你自己的代币符号
    "CPBLP"           // 代币符号，请修改为你自己的代币符合
];

// 地址参数数组
address[] memory addressParams = [
    0x1234567890123456789012345678901234567890,  // fundAddress: 基金地址
    0x0987654321098765432109876543210987654321,  // currency: 交易对代币地址
    0x1111111111111111111111111111111111111111,  // swapRouter: 交易路由合约地址
    0x2222222222222222222222222222222222222222   // ReceiveAddress: 接收地址
];

// 数值参数数组
uint256[] memory numberParams = [
    "18",                    // numberParams[0]: decimals (代币精度)
    "1000000000000000000",   // numberParams[1]: totalSupply (总供应量)
    "200",                   // numberParams[2]: maxWalletAmount (最大钱包持有量)
    "100",                   // numberParams[3]: _buyFundFee (买入营销费，单位：万分之)
    "50",                    // numberParams[4]: _buyLPFee (买入LP费，单位：万分之)
    "200",                   // numberParams[5]: buy_burnFee (买入销毁费，单位：万分之)
    "100",                   // numberParams[6]: _sellFundFee (卖出营销费，单位：万分之)
    "50",                    // numberParams[7]: _sellLPFee (卖出LP费，单位：万分之)
    "30",                    // numberParams[8]: sell_burnFee (卖出销毁费，单位：万分之)
    "100",                   // numberParams[9]: lpBurnRate (LP销毁率，单位：万分之)
    "3600",                  // numberParams[10]: lpBurnFrequency (LP销毁频率，单位：秒)
    "100",                   // numberParams[11]: kb (交易开始后的区块数限制)
    "5",                     // numberParams[12]: airdropNumbs (空投数量)
    "1000000000000000",      // numberParams[13]: price (铸造价格，单位：wei)
    "1000000000000000000",   // numberParams[14]: amountPerUnits (每单位铸造数量)
    "1000000"                // numberParams[15]: mintLimit (铸造限制)
];

// 布尔参数数组
bool[] memory boolParams = [
    true,  // boolParams[0]: enableOffTrade (是否启用离线交易)
    true,  // boolParams[1]: enableKillBlock (是否启用区块限制)
    true,  // boolParams[2]: enableRewardList (是否启用奖励列表)
    true,  // boolParams[3]: enableWalletLimit (是否启用钱包限制)
    true,  // boolParams[4]: enableChangeTax (是否启用税率变更)
    true,  // boolParams[5]: currencyIsEth (基础代币是否为ETH)
    true   // boolParams[6]: airdropEnable (是否启用空投)
]
```



***

### 总结

**CPBOXLPBurnToken** 代表了现代 DeFi 项目在合约设计上的一种新方式。

通过集成自动销毁机制、灵活的费用系统以及多重安全保障，它为需要维护长期价值和健康流动性的区块链项目提供了强大的支持。该合约将是任何追求可持续增长与生态健康的项目的理想选择。


如果想要更多的了解CPBOX这个产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

***

【其他社媒】&#x20;

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Twitter：[https://twitter.com/Web3CryptoBox](chuang-jian-ke-yi-mint-yi-ji-ran-shao-lp-de-dai-bi.md#he-xin-gong-neng)

Youtube：[https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
