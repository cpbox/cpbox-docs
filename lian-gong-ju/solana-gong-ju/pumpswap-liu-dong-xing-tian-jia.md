---
description: 教你如何使用pumpswap
---

# PumpSwap流动性添加

### 前言

在Solana生态中，**Pump.fun**和**Raydium**代表了两种截然不同的交易文化——一个是土狗狂欢的赌场，另一个是正经项目的战场。它们的核心差异决定了你会成为哪种玩家

现在pumpfun团队也推出了自己的Dex，[pumpswap](https://swap.pump.fun/)。

[pumpswap](https://swap.pump.fun/)的出现，会有一些老玩家说，终于不需要再老老实实的刷粘合曲线，不用再担心被平台的机器人狙击了。想好好的做小项目也不需要raydium那么高的要求和复杂操作了。今天来带大家如何使用pumpSwap为你的sol代币创建流动性资金池了。

### 创建代币

进入CPBOX官网后，点击上方菜单实用工具，中的solana一键发币

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=YTBhMzFiNmRlZDg3YzU0NWIxMjdlMTk5MzA5YTM0N2Nfbk5NczVlM1l4Ym1mNUpnSXZPR3cyVW9nSm5vT0duV3BfVG9rZW46TlJvUmJJS0dJb0k3Sll4STdxZGxiV0Y1Z25oXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

进入页面后链接钱包

依次上传头像，输入相关信息。

这边我们默认代币精度为9。我这里供应量选择了一个亿

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NmViMjk2ZDU2N2JiM2E5ODJmZmM1NWRhOGFjMGM1NzVfbUVOSEFxUzk0RktWOXNQQjgzeUZLNm83bGJFekx5bE5fVG9rZW46RzUwdGJXSHFTbzRLV2x4b2FVdmx6Nmt0Z2JQXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

下方还有一个相关信息可以选填，这边不过多做演示了

点击创建代币后会弹出一个弹窗，信息二次确认

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NmVjMTJiM2VkZmZhNmE0MTYyZTQ5NWU1YzBkMmM1MmVfd2dhc050MGpwTk16clBMODBrRkVKcWhNUk5NcjJkYjNfVG9rZW46WDRjb2JZOWc3bzVoUlJ4RkM5UGxWTkhUZ1RoXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

注意这边CPBOX会收取**0.1个sol作为服务费用**

代币创建成功之后，我们就可以看到代币的合约地址了

***

### 添加流动性

我们进入[pumpswap](https://swap.pump.fun/)的页面，点击进入中间的Deposit/create 按钮

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=OTRkNzg4YjVhZTg2N2IxN2ZjNzdlNWEyYmM3NzcxOWFfa0tnaEk1MzdBRDduV29Gc0dBR2RJQ2twM2hPVlF3bGpfVG9rZW46WnNXSmJ4dHlOb3JxNTZ4cG5FZWxZZ2lFZ1NnXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

deposit就是质押的意思，进来后我们能看到中间有三个选项

* deposit：质押代币，就是加池子
* withdraw：这里是撤池子
* create：创建池子，建立交易对

我们现在要创建流动性池，所以先点击create按钮下面把自己创建代币的合约地址输入进去。

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=Y2VkMTQ5Y2YyNzg5NWE3ZDE0MDhhZmQ2YzFkODg1ODZfbWh0T2JzbG05MjNGb09VTnJTVW9BdFdqd3FiUHgyRm5fVG9rZW46RXllVmJMWkFqb0pWTTZ4Q1dXb2xNUTFuZzRnXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

这边选择相应质押的代币数量和Sol数量。

成功创建流动性池后，我们可以点回左上方的swap 进行交易测试了

<figure><img src="https://uf6jjv03ijb.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MjczZDIwZDQzYjhiYmZkYTNhYmNiNjQxOWMzODUxM2RfR3F2WjhoeWpKRmtqZUZTM3FWbWFBcEowVnBzREhBUmxfVG9rZW46SXNOdmI1bWlGb0toaTV4MmpFZ2w5bTZsZ3lmXzE3NDY2OTkyMjE6MTc0NjcwMjgyMV9WNA" alt=""><figcaption></figcaption></figure>

### 加池子和撤池子

回到中间的deposit页面。我们就可以根据当前的价格来同比例进行加池子，或者是撤池子了

如果你不太清楚什么是流动性池，可以阅读一下下面的文章。

{% content-ref url="../../qi-bu-yin-dao/xiao-bai-ru-men/shen-me-shi-liu-dong-xing-zi-jin-chi-amm-liu-dong-xing-wa-kuang.md" %}
[shen-me-shi-liu-dong-xing-zi-jin-chi-amm-liu-dong-xing-wa-kuang.md](../../qi-bu-yin-dao/xiao-bai-ru-men/shen-me-shi-liu-dong-xing-zi-jin-chi-amm-liu-dong-xing-wa-kuang.md)
{% endcontent-ref %}

\
如果你觉的本篇的加池子不是很清楚，可以参考Sui链或者Ton链的加池子教程。

{% content-ref url="../../sui-lian-gong-ju/sui-liu-dong-xing-chi-tian-jia.md" %}
[sui-liu-dong-xing-chi-tian-jia.md](../../sui-lian-gong-ju/sui-liu-dong-xing-chi-tian-jia.md)
{% endcontent-ref %}

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

Youtube：[youtube.com/channel/UCDcg1zMH4CHTfuwUpGSU-wA](../../solana-gong-ju/solana-yi-jian-fa-bi.md)\


