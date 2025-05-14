---
description: 便捷创建和管理您的Solana代币Pump交易策略，消除pump狙击烦恼
---

# Pump 开盘合并买入

{% embed url="https://youtu.be/v_44Q5RW9Lo?si=2sRZCyjBjLEAUTLr" %}

### 前言

Pump.fun作为Solana和以太坊链上热门的memecoin发行平台，因其低门槛和流动性机制吸引了大量项目方，但也成为狙击者的"猎场"。本文将深入分析在Pump.fun发币遭遇狙击的应对策略，帮助项目方和投资者保护自身权益。\
**狙击**常指的是一个新发行的代币在刚上线交易时，被某些投资者（通常是机器人或专业交易者）利用技术或信息优势迅速大量买入，导致价格短时间内暴涨，随后可能高价抛售获利的行为。这种行为也被称为"**狙击开盘**"，因为pumpfun平台没有做相关的限制，导致新上线的币都有可能被狙击。

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZDY2ZjIwMjQyZmQ3OTZjZWEyMDVmNzE1ZDI1MmJhY2Jfem9KTnMxdkN6RXJOWEhMWnZLakZTcnpEbkNZS0tJcUZfVG9rZW46QW91aGJta2Rzb25IR2h4ZWZhcmxyVE5OZ0lxXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

### pump开盘捆绑买入 目标人群

因为pumpfun平台机制，越来越多的科学家利用自动化机器人（如MEV机器人）和通过高gas优先抢购。针对这个痛点，我们为以下目标人群开发了pump开盘捆绑买入的功能

* 想在sol链上发射代币的项目方和项目建设参与者，希望在代币发射前入手一定数量的代币
* 在pump的玩家，但是不希望自己被其他人狙击

### 功能演示

我们这边使用cryptobox pump开盘合并买入的功能。可以访问https://www.cpbox.io/cn/ 后点击实用工具，pump开盘合并买入功能需要注意的是，通过cpbox进行开盘合并买入是要收取费用的

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NmU3ZWU2NGRhNzU4NDFiNWM4MzM0NTVkNDY1ODkxZTRfcUZ1MFgyZzQydTRRZ2lTWUpsRU9Ja0xOcGdZdmFYY3BfVG9rZW46TGVJZWJveTY1b0ZFR2Z4bzIyMGxWajR5Z3loXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

* 创建代币:0.05SOL
* 靓号功能使用:0.1SOL
* 捆绑买入地址:每个/0.01SOL

如果在开盘的时候我们通过三个地址进行抢先买入的话，是会有0.05+（3\*0.01）=0.08sol的费用\
进入页面后，上面就正常的填写你要发币的代币基本信息，填写完成之后继续下滑

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=Y2ZjZDYzY2U4ODVjMWYzNDhlNGVhN2QxZWUxYzc4NGZfRFZMMlJma1pqWDIxOFVtWXNNYzRuckJmZGRzb25DVllfVG9rZW46VFZSbGJrZ0tLbzhIZHh4R0pJbWxQd1B6Z3JnXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

\
这里提示了 捆绑买入最多仅支持17个地址买入然后下面看到有一个Jito 费用的说明Jito能把提交的交易捆绑为一个Bundle，Bundle具有原子性，其中的交易只有两种情况，全部成功或者全部失败，从而达到了批量发送交易的目的，且捆绑的交易不会被插队jito费用越高，成功率就会越高。如果捆绑买入的地址比较多，或者买入数量比较大时，如果出现发币失败的情况建议适当调高jito费用。\


<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZjY2MDdmYzMxMjZlNWQyYTMzMjk2MGM3ZTlkNTFkMmFfQmxBY3dJUGlSSTVRemkzYzBYaXJYbTdaRXg0SExDM2RfVG9rZW46Q25TNGJTbDE0bzliRWx4blpTaWxoQnltZ2tmXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

然后点击导入私钥地址，这边会显示每个地址有多少sol的余额，因为在发币买入时，每个地址会收取0.01个sol，所以保证钱包里的余额大于你需要买入数量+0.01， 确认完成后，再点击修改数量

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MWNkZGMzY2QzODQzODVkNjc4MGE3ODZlYmM2MTMxMThfSEZLbEpDSmlpTDU1M2tSbXFSelk3dXZlNjhrS1U1Q3pfVG9rZW46U3JtdmJuRFk2b2t0V2d4M3N1dWxCYTV3Z1RoXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

点击修改数量，确定钱包地址要买入的代币数量，可以选择固定金额和随机金额，这里我选择固定金额，每个地址买入0.01个sol

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NGUxZTM5YjNjNjZiZWViYTUyZWQzNTZmYjBhOGI2YTNfTlIweW9ISVNLNFlhQkNkRFBweExTbXNlMURIUVUxa3pfVG9rZW46WTFGUmIxZUNnb1NlY2h4blowd2wyb1JyZ01nXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

点击开始创建后，会弹出一个二次确认和发币的费用明细，我们再次点击确认并进行钱包签名\
发币成功后弹出你创建代币的合约地址然后你可以进入pumpfun 来查看\
然后进入pumpfun的页面，把我们的合约地址输入进去，就能看到我们的代币页面了你会发现开盘就已经在爆拉了，这就是被狙击的表现**我们这里只是做一个功能演示，并不是防止狙击没有效果，我们的买入动作是比机器人快的。**

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=OWJiNjk1MGEzNzJiOTJmNjEwNmJkMzdjZDMwNjMxYzZfWWM1OHlaV21tNm9vQ00wUkZoMXFHbnNjcGs4M0ZLR0NfVG9rZW46WHZNcmJFZ29sb2JSU1J4TU51Qmx5OXFPZ3poXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

**只是因为我们总共花费了0.02sol进行买入，且池子里面依旧有大量筹码。**&#x50;umpfun 发币的**初始流动性在85个sol**，如果开盘就买入一半的流动性，就不会存在被狙击的说法，如果有别的机器人买入就相当于在帮你拉盘，我们也可以卖出收割别人。

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZWUxMDI1Y2U5MzQxYjkxZDZkZjgxYzUzMmVlMDMzYTZfWkVRSnlmbWN1WWcwNDhwWWhHcm1CMXU4MVk0aE1wckFfVG9rZW46REI0MWJIN21jb09KTmR4NHphcWxkZjVjZ2VjXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

因为我们只有两个地址，并且每个地址只买入了0.01个sol，右下角买入0.03%的两个钱包 ，就是我们提前买入的钱包地址

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NzhjOWU3NDhkZGMwMzFmMjk3MWQ0OTY2MTg4MmY0ZDRfTGNyMlNEMUVlZkxKdXpsOEhCaDVNYWZUanlQSkJiWHBfVG9rZW46QXNpNmI0Zm9nb1BUS2V4WmQyOGxBanlmZ1BoXzE3NDcyMDg4NzA6MTc0NzIxMjQ3MF9WNA" alt=""><figcaption></figcaption></figure>

### 疑问解答

**PUMP发币不需要加池子吗？**

* **答：**&#x4E0D;需要的，用户买入后会自动形成一个联合曲线流动性，不需要手动添加

**PUMP发币满足什么条件才能上Raydium？**

* **答：**&#x5F53;PUMP联合曲线资金池达到85个sol时，PUMP将帮助代币在Raydium AMM上创建一个流动性，并将LP销毁。

**PUMP代币开盘初始价格是多少?**

* **答：**&#x50;UMP开盘初始价格默认是0.000000028sol

***

联系我们

如果想要深入了解CPBOX产品的其他用途和功能

可以点击[ https://docs.cpbox.io/](https://docs.cpbox.io/)查看

或者你有一些好的建议或者想要帮助开发的需求

可以通过主页 [https://www.cpbox.io/cn/ ](https://www.cpbox.io/cn/)最下方的联系方式来找到我们

也可以通过下方社媒来联系我们

***

### 其他社媒

TG交流群：[https://t.me/cpboxio](https://t.me/cpboxio)

Twitter：[https://twitter.com/Web3CryptoBox](https://twitter.com/Web3CryptoBox) | [https://x.com/cpboxio](https://x.com/cpboxio)

Youtube：[youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-](solana-yi-jian-fa-bi.md)
