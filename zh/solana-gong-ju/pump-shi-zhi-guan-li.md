---
description: 专业优化您的DEX流动性池和BMM做市策略
---

# Pump 市值管理

### 选择功能概述

在数字货币市场中，市值管理是项目方非常关注的核心问题之一。有效的市值管理不仅能够稳定代币价格，还能吸引更多投资者的关注，从而推动项目的长期发展。CPBox.io平台推出的Pump市值管理功能，正是为解决这一市场痛点而设计的专业工具。

### 适用场景

CPBox.io的[Pump市值管理](https://www.cpbox.io/cn/solana/bmm)功能是一套针对数字货币项目的综合性市值管理解决方案。该功能通过智能算法和专业的交易策略，帮助项目方在不同的市场环境下实现对代币价格和市值的有效调控。

CPBox.io的Pump市值管理功能适用于多种场景：

* 新项目上线初期：帮助稳定价格，建立市场信心
* 重大利好消息发布期：配合项目方的营销活动，放大正面影响
* 市场低迷时期：防止代币价格过度下跌，维护投资者信心
* 长期市值增长计划：通过持续、渐进的方式提升代币价值

### 使用教程

如果你是第一次打开页面就会自动创建一个任务

![自动创建任务](https://www.cpbox.io/cpfiles/2024-09-13/d44ww8uzq5mzfbwlr9.png)

如果不是第一次打开，可以选择历史任务也可以新建任务

![打开历史任务image.png](https://www.cpbox.io/cpfiles/2024-09-13/d44wzurkgv4kdqmq0d.png)

输入需要做市的代币合约，如果输入的合约在Raydium(外盘)已经开盘可以在DEX处选择Raydium

<figure><img src="https://www.cpbox.io/cpfiles/2025-01-25/d7av5yr84grtiy6j9t.png" alt=""><figcaption><p>选择DEX</p></figcaption></figure>

![选择和收藏代币](https://www.cpbox.io/cpfiles/2024-09-13/d44x89hi4xd9a9dsho.png)

导入做市需要的钱包私钥


![导入钱包私钥](https://www.cpbox.io/cpfiles/2024-09-13/d44x2qa443a8f2pb29.png)

![批量导入或者去创建私钥](https://www.cpbox.io/cpfiles/2024-09-13/d452a7qfytsdtezleb.png)

基本交易参数设置（滑点是指对于拉盘买入价格的可接受波动范围）

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d44xs8ikyebaolvjoi.png" alt=""><figcaption><p>基本参数设置</p></figcaption></figure>

RPC节点设置,尊贵的VIP可选择独立高速VIP节点，也可自己导入私有节点


<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d44xvkacc64zwi4aar.png" alt=""><figcaption><p>RPC选择</p></figcaption></figure>

### 交易策略

CPBox.io 现阶段提供了4中交易策略，分别是一键砸盘，目标价拉盘，目标价下跌，和分批出货。

#### 目标价拉盘策略

1.填写停止条件

![目标价拉盘参数](https://www.cpbox.io/cpfiles/2024-09-13/d44yo36va2ew0lrbvc.png)

2.按金额（单个钱包买入多少Sol）

单个钱包买入固定金额

![单个钱包买入金额](https://www.cpbox.io/cpfiles/2024-09-13/d44ysa6jnzd4gwthlj.png)

单个钱包买入随机金额

![单个钱包随机金额](https://www.cpbox.io/cpfiles/2024-09-13/d44ytcs6yo0p2zsia3.png)

单个钱包内Sol余额固定百分比

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d44z1ljmsfr1sv0czu.png" alt=""><figcaption><p>单个钱包宝百分比金额</p></figcaption></figure>

单个钱包内Sol余额随机百分比

![钱包SOL余额](https://www.cpbox.io/cpfiles/2024-09-13/d44z0h25zh8ibfned0.png)

3.按数量(单个钱包买入多少数量的代币)

单个钱包买入固定数量

![按固定数量](https://www.cpbox.io/cpfiles/2024-09-13/d44z3gidxoafzpzaqe.png)

单个钱包买入随机数量

![随机数量买入](https://www.cpbox.io/cpfiles/2024-09-13/d44z3wxxmce2jjktkb.png)

#### 目标价下跌策略

1.填写代币的目标价格，当代币价格下跌到此价格时任务停止(价格是以Sol为计算单位)

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d45030ho6l8c4wbkwr.png" alt=""><figcaption><p>下跌参数</p></figcaption></figure>

2.按数量(单个钱包)

单个钱包卖出固定金额

![单个钱包固定金额](https://www.cpbox.io/cpfiles/2024-09-13/d4509m0310x0qw2dpj.png)

单个钱包卖出随机金额

![单个钱包随机金额](https://www.cpbox.io/cpfiles/2024-09-13/d4509zw95axil3y2li.png)

单个钱包内代币余额固定百分比

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d450am93px6hwkg1jz.png" alt=""><figcaption><p>单个钱包余额百分比</p></figcaption></figure>

单个钱包内代币余额随机百分比

![余额随机百分比](https://www.cpbox.io/cpfiles/2024-09-13/d450b1mydhqo0af7db.png)

#### 分配出货策略

![分配出货策略参数](https://www.cpbox.io/cpfiles/2024-09-13/d45138be3ebiq8vgu7.png)

卖出条件


![卖出条件](https://www.cpbox.io/cpfiles/2024-09-13/d4519iz3kftikjzk4d.png)

单个钱包卖出固定金额

![卖出固定金额](https://www.cpbox.io/cpfiles/2024-09-13/d451ccacc5crakojhi.png)

单个钱包卖出随机金额

![卖出随机金额](https://www.cpbox.io/cpfiles/2024-09-13/d451csvo6pev9osxp8.png)

单个钱包内代币余额固定百分比

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d451dg4ie0k3vjwcka.png" alt=""><figcaption><p>卖出固定百分比</p></figcaption></figure>

单个钱包内代币余额随机百分比

<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d451ebqsabzslf2m2c.png" alt=""><figcaption><p>卖出随机百分比</p></figcaption></figure>

以上设置完毕，即可立即执行，也可以定时执行，执行任务时前端页面必须保持开启，作为辅助市商工具，不脱离用户管控，更具安全性


<figure><img src="https://www.cpbox.io/cpfiles/2024-09-13/d451kn0aytishmic0u.png" alt=""><figcaption></figcaption></figure>

执行后可在交易日志中看到交易状态，哈希等信息

### 定制化服务

我们深知每个项目都有其独特的需求和挑战，CPBox.io提供全方位的定制化Solana上市值管理服务。无论您是希望针对特定DEX进行市值管理，还是需要为项目重大事件提供短期市值支持，或是寻求长期的代币价值增长策略，我们的专业团队都能为您量身定制最适合的解决方案。

如有任何特殊需求或疑问，欢迎随时联系我们的客户服务团队。CPBox.io的专业顾问将在24小时内与您取得联系，深入了解您的项目情况，并提供个性化的市值管理方案和报价。我们承诺，为每一个项目提供最专业、最高效的服务，助力您的项目在激烈的市场竞争中脱颖而出。

***

### 联系我们

如果想要深入了解CPBOX产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)查看

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

也可以通过下方社媒来联系我们

***

### 其他社媒

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox) | [https://x.com/cpboxio](https://x.com/cpboxio)

Youtube：[youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](solana-yi-jian-fa-bi.md)\

