---
description: 适用于 DeFi 项目冷启动、社群裂变和用户增长等营销场景
---

# LP挖矿推荐奖励的营销代币部署

针对近来有用户询问如何做一个带LP池子，让推荐来加池子的用户获得奖励的一个代币，针对这个需求，CPBox解析了下库里面的合约代码，让用户了解整个池子和合约的内容，同时可以自己发布类似的代币，解决相应的需求。

1. 首先 这是一个ERC20的Token，支持基本的代币转账，余额查询，我们需求在部署的时候设置代币的name、symbol、decimal这几个参数
2. 交易费用机制
   1. 买入税率和卖出税率，各自总量不超过25%，
      1. **买入卖出税** : 每笔买入都会扣除对应比例代币送进`合约地址`,在**触发阈值**时会自动**卖出**然后发送到你的营销钱包地址
      2. **销毁税** : 每笔买入都会扣除对应比例代币送进`黑洞地址`,达到销毁的目的
      3. **流动性税** : 每笔买入都会扣除对应比例代币送进`合约地址`,在**触发阈值**时会自动添加流动性,使池子更厚，加池子获得的LP默认给到营销钱包
3. 支持白名单机制，白名单地址可以免除费用
4. 流动性挖矿
   1. **挖矿供应量比例** : 挖矿产出的代币占总代币数量的比例。例如代币总量100000000枚，挖矿产出50000000枚，那这个比例就应该是50%。在创建合约的时候，会有50000000枚的代币直接进入挖矿合约，任何人无法取出。
   2. **每日挖矿奖励:** : 每日固定产出多少代币，直接填数量即可
5. 邀请奖励机制
   1. 支持多级邀请奖励系统，可以设置不同层级的奖励比例：
      * **邀请级数** : 可以有多少的下级，目前最多可以设置16级
      * 第一级数量， 第二级数量， 第三级数量，剩余级别数量， 所有的总和应该是100%

这是一个功能相当完整的代币合约，特别适合用于：

* 流动性挖矿项目
* 带有邀请奖励机制的项目
* 需要复杂费用结构的项目
* 需要空投功能的项目

合约的设计比较灵活，管理员可以通过各种参数来调整代币的经济模型，包括费率、奖励机制等。同时也包含了必要的安全机制来防止滥用。我们可以使用CPBox提供合约,直接导入[remix](https://remix.ethereum.org/) 进行部署:&#x20;

源码地址 https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/lpmine.sol

<figure><img src="../../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>流动性挖矿代码</p></figcaption></figure>

我这里给出一份参数，并解释如何修改适合自己的参数

* 第一个 stringParams 的参数: `["CPBoxTestToken", "CPBLP"]`
* 第二个addressParams 的参数:

`["0x1234567890123456789012345678901234567890","0x0987654321098765432109876543210987654321","0x1111111111111111111111111111111111111111","0x2222222222222222222222222222222222222222"]`

* 第三个numberParams参数：`["18","1000000000000000000","200","100","50","200","100","50","30","100000000000000000","100000000000000000","100000000000000000","10","50","30","10","2","10","3","1000000000000000"]`
* 第四个boolParams 参数： `[true,true,true,true,true,true]`

解析：

```
// 字符串参数数组
string[] memory stringParams = [
    "CPBoxTestToken",  //  代币name，请修改为你自己的代币符号
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
    18,                     // decimals: 代币精度
    1000000000000000000,   // totalSupply: 代币总供应量
    200,                   // buyFundFee: 买入基金费率 (2%)
    100,                   // buyLPFee: 买入LP费率 (1%)
    50,                    // buy_burnFee: 买入销毁费率 (0.5%)
    200,                   // sellFundFee: 卖出基金费率 (2%)
    100,                   // sellLPFee: 卖出LP费率 (1%)
    50,                    // sell_burnFee: 卖出销毁费率 (0.5%)
    30,                    // mineRate: 挖矿比例 (30%)
    100000000000000000,    // LPRewardCondition: LP奖励条件
    100000000000000000,    // minLPHoldAmount: 最小LP持有量
    100000000000000000,    // minInvitorHoldAmount: 最小邀请人持币量
    10,                    // generations: 邀请层级数
    50,                    // fristRate: 一级邀请奖励比例 (50%)
    30,                    // secondRate: 二级邀请奖励比例 (30%)
    10,                    // thirdRate: 三级邀请奖励比例 (10%)
    2,                     // leftRate: 剩余级别邀请奖励比例 (2%)
    10,                    // kb: 防同步块数
    3,                     // airdropNumbs: 空投数量
    1000000000000000       // _minTransAmount: 最小转账金额
];

// 布尔参数数组
bool[] memory boolParams = [
    true,    // enableOffTrade: 手动开启交易
    true,    // enableKillBlock: 防同步块
    true,    // enableRewardList: 白名单
    true,    // enableChangeTax: 允许修改税率
    true,    // currencyIsEth: 是否使用ETH作为交易对
    true     // airdropEnable: 空投开关
];
```

\
如果想要更多的了解CPBOX这个产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

***

【其他社媒】

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox)

Youtube：[https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)\
