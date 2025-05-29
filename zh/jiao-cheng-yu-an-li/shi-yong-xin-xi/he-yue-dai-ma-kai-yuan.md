---
description: 学会开源合约代码，Web3合约开源促进安全审计、建立透明信任、推动协作创新并加强社区问责制。
---

# 合约代码开源

## 为什么要进行合约代码开源

在[EVM 一键发币案例](evm-yi-jian-fa-bi-an-li/biao-zhun-erc20-dai-bi-bu-shu.md) 中介绍了很多种类型的token合约的部署，默认通过[remix](https://remix.ethereum.org/)部署的代币合约都是未开源的，打开对应链的区块浏览器，输入合约地址，点击Contract，可以看到合约是否开源

<figure><img src="../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>scan上的合约代码</p></figcaption></figure>

如上图所示是一个未开源的合约，合约内容都是16进制的数据，同时有个【Verify and Publish】的按钮会引导你进行合约的开源，具体的流程我们后面会进行说明。

合约开源有什么好处呢？

#### **增强透明度与可信度**

* 用户、开发者、审计方可以直接查看和验证合约的逻辑是否安全、是否如项目方所描述，减少黑箱操作的可能性，提升社区对项目的信任度。
* 安全专家或社区开发者可以检查是否存在漏洞、后门、权限过大等风险，更容易发现逻辑缺陷或潜在攻击点（如重入、权限滥用）。
* 针对未开源的代币合约，大部分交易平台或者第三方安全检查平台（如Ave.ai/gmgn/goPlus等）会将其标识为风险合约，风险标识会影响普通用户对代币的信任度，从而影响代币的交易。

#### **提升交互体验**

* 区块浏览器在合约开源并验证后，可以展示合约函数的名称和参数，用户可以直接通过 UI 与合约交互，无需借助第三方工具（如 Remix 或自定义脚本）。

#### **方便第三方集成**

* 钱包、DeFi 平台、DEX、分析平台等更愿意集成公开透明的合约，因为可读性高、风险可控。
* 提高代币被追踪、交易、上架的可能性。

## 怎样进行合约开源

合约代码的开源的方式有很多种，可以通过区块浏览器操作，可以在remix部署后在remix上进行，除此之外，如果你有本地的合约开发环境，还可以通过forge相关的命令进行合约开源，下面我们分别描述一下怎么操作：

### **通过区块浏览器**

前面我们已经看到，针对未开源的合约，区块浏览器会有相应的引导入口引导用户去进行合约的开源，这种方式相对比较简单，比较适合一些小白的用户。通过下面的流程一步一步操作，即可快速实现合约的开源。

<figure><img src="../../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption><p>开源代码</p></figcaption></figure>

进入合约开源页面之后，自动带入合约地址，因为我们示例的只有有个单独的合约文件，因为我们选择单文件，然后根据合约代码填写对应的合约编译器版本和开源协议

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>选择编译器版本</p></figcaption></figure>

这两个参数我们在部署的时候可以看到

<figure><img src="../../../.gitbook/assets/image (3) (1).png" alt=""><figcaption><p>编译版本</p></figcaption></figure>

点击继续进入下一个页面

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption><p>合约开源</p></figcaption></figure>

首先我们把合约代码拷贝进去，然后因为合约比较简单，注意 optimization 和 Runs 这两个参数在remix 上是自己选的

<figure><img src="../../../.gitbook/assets/image (15).png" alt=""><figcaption><p>remix 编译优化选项</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (5) (1).png" alt=""><figcaption><p>合约配置</p></figcaption></figure>

点击验证和部署，会看到这个提示

<figure><img src="../../../.gitbook/assets/image (6) (1).png" alt=""><figcaption><p>合约开源提示</p></figcaption></figure>

这个是再在区块浏览器中输入合约地址，发现合约已经是验证过的了，并且可以看到合约的源码

<figure><img src="../../../.gitbook/assets/image (8) (1).png" alt=""><figcaption></figcaption></figure>

#### **合约调用**

合约开源还有一个好处是，可以通过区块浏览器进行合约方法的调用，方法分两类，一类是读操作，一类是写操作，读操作一般不需要链接钱包，可以直接输入参数调用合约方法，比如我们想看token的相关信息：

<figure><img src="../../../.gitbook/assets/image (9) (1).png" alt=""><figcaption><p>合约只读调用</p></figcaption></figure>

另外一类是写操作，这类操作通常需要链接钱包，首先点击【Connect to Web3】进行钱包的连接

<figure><img src="../../../.gitbook/assets/image (10) (1).png" alt=""><figcaption><p>合约写调用</p></figcaption></figure>

比如这里我可以通过连接钱包，进行一笔代币的转移操作

<figure><img src="../../../.gitbook/assets/image (11) (1).png" alt=""><figcaption><p>transfer 测试</p></figcaption></figure>

### **通过Remix进行合约开源**

在Remix上进行合约部署之后，同样可以通过Remix进行合约的开源，首先进入插件的面板，开启合约的验证插件

<figure><img src="../../../.gitbook/assets/image (12).png" alt=""><figcaption><p>remix验证</p></figcaption></figure>

开启之后通过左侧的面板进入合约验证的插件管理页面

<figure><img src="../../../.gitbook/assets/image (13).png" alt=""><figcaption><p>remix 验证</p></figcaption></figure>

红框中是我们要进行验证的平台，也就是说验证完成后，在这些平台上可以看到合约的代码针对主流的区块浏览器（比如Etherscan），需要申请apikey进行配置，完成配置之后才能勾选apikey的申请地址：https://etherscan.io/apidashboard，申请到的apikey可以主网和测试网通用

<figure><img src="../../../.gitbook/assets/7a599358-b28e-4678-85bc-df2517d126e8.png" alt=""><figcaption><p>remix scan opikey</p></figcaption></figure>

填完之后回到初始面板，可以看到Etherscan已经是勾选的状态，点击验证即可开始验证

### **其他开源方法**

除了上面的两种方式，还可以通过一下开发工具进行合约代码的开源，以foundry为例，假设我们已经部署好了一份合约，执行下面的命令可以进行合约的开源

```typescript
forge verify-contract 0x123...abc MyContract \
    --chain mainnet \
    --verifier etherscan \
    --etherscan-api-key YOUR_ETHERSCAN_KEY \
    --compiler-version v0.8.23+commit.f704f362
```

* 参数解释

```javascript
<CONTRACT_ADDRESS>        合约部署地址        0x123...abc
<CONTRACT_NAME>        合约名称（与 Solidity 文件一致）        MyContract
--chain        链 ID（如 mainnet、goerli、polygon）        mainnet
--verifier        验证服务（通常 etherscan）        etherscan
--verifier-url        验证 API URL（可选，默认 Etherscan）    https://api.etherscan.io/api
--etherscan-api-key        Etherscan API Key        YourApiKey
--compiler-version        Solidity 编译器版本        v0.8.23+commit.f704f362
--optimizer-runs        优化器运行次数（默认 200）        200
--constructor-args        构造函数参数（ABI 编码）        0x000...123
上面介绍了几种合约代码开源的方式，
```

如果想要了解更多web3的知识，可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/) 查看

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

***

【其他社媒】

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox)

Youtube：[https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
