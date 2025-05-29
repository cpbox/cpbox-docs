# Create Stable Pools on Raydium

{% embed url="https://youtu.be/F-kLQHTfQkQ" %}

### **前言：为什么选择Raydium？**

在Solana生态系统中，去中心化交易所（DEX）和流动性挖矿平台层出不穷，从Orca、Raydium到各种新兴的Pump.fun类项目，用户面临着众多选择。然而，**Raydium**仍然是Solana上最可靠、最具流动性的DeFi协议之一，尤其适合长期流动性提供者（LP）和交易者。

* **Raydium** 是Solana生态的**老牌DEX**，采用**CLMM（集中流动性做市商）** + **订单簿混合模型**，深度整合Serum，提供更高效的交易体验。
* Raydium的流动性池与**Serum订单簿**共享深度，减少滑点，适合大额交易。
* 提供**双币（LP Token）挖矿**，收益来自真实交易手续费，而非通胀代币激励。

***

### CLMM池创建

当你在CPBOX完成[SOL一键发币](https://www.cpbox.io/cn/solana/token/publish)后进入[raydium官网](https://raydium.io/swap/?inputMint=HtCqD3o5aF1RXcyGi6AW11PoB3bZmFdA8kvVyhJrpump\&outputMint=sol)后。连接您的钱包后，单击页面左上角的“liquidity” 。

<figure><img src="../../../zh/.gitbook/assets/image%20(6).png" alt=""><figcaption></figcaption></figure>

进入页面后单击右侧 create 创建按钮

<figure><img src="../../../zh/.gitbook/assets/image%20(2)%20(1).png" alt=""><figcaption></figcaption></figure>

跳出弹窗后，pool type这里，我们默认选择Concentrated liquidity（集中性流动池）

下方点击continue 继续

<figure><img src="../../../zh/.gitbook/assets/image%20(1)%20(1).png" alt=""><figcaption></figcaption></figure>

#### 选择基础和报价代币

基础代币是在代币对报价中首次出现的代币。因此，对于该代币对来说，第二个代币是报价代币。 报价代币代表购买1个基础代币所需的代币数量。

这里我们要让自己的代币可以交易，base token选择我们自己创建的代币

常见的报价代币（Quote token）包括SOL，USDC或其他稳定币。

<figure><img src="../../../zh/.gitbook/assets/image%20(3)%20(1).png" alt=""><figcaption></figcaption></figure>

注意：如果你选择的代币并没有显示头像等信息，大概率是solscan上并没有进行验证，导致信息不显示。

如果你需要相关信息能够显示完全，[更新信息](https://solscan.io/token-update)页面上传相关信息。并完成审核验证

<figure><img src="../../../zh/.gitbook/assets/image%20(4)%20(1).png" alt=""><figcaption></figcaption></figure>

点击下一步后进入价格设定界面

在下方选择价格的波动范围，我这里是设定代币价格范围稳定在1刀左右，所以价格范围设置的很小。如果池子的深度不够的话，基本是没办法成交的。

<figure><img src="../../../zh/.gitbook/assets/image%20(5)%20(1).png" alt=""><figcaption></figcaption></figure>

点击下一步后，进入到最后创建池子确认环节。选择初始要多少质押的代币，进入流动性池子。

我们这里因为没有没足够的usdcoin所以没法点击确认。

<figure><img src="../../../zh/.gitbook/assets/image%20(6)%20(1).png" alt=""><figcaption></figcaption></figure>

点击确认后池子就创建成功。

### 加池子操作

回到liquidity的主页，我们这边随便挑选一个来演示一下如何加池子。

点击deposit进入如果你创建池子成功了，可以直接在搜索栏中搜索找到自己的池子。

<figure><img src="../../../zh/.gitbook/assets/image%20(7).png" alt=""><figcaption></figcaption></figure>

进入页面后。因为是集中性流动池，所以可以在特定的价格范围提供不同的流动性深度。

<figure><img src="../../../zh/.gitbook/assets/image%20(8).png" alt=""><figcaption></figcaption></figure>

对于lp们（liquidity provider）来说，可以选择固定的价格范围来提供流动性，可以避免一些不必要的亏损。这也是CLMM的优势所在。

Raydium加池子的教程就讲到这里

***

如果想要深入了解CPBOX产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)查看

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

也可以通过下方社媒来联系我们

***

#### 其他社媒

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Discord：[https://discord.com/invite/XMwMMfHufN](https://discord.com/invite/XMwMMfHufN)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox)

Youtube：[youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](https://youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA)
