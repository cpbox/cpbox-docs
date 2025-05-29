---
description: 手把手教你使用remix部署一个纯净的ERC20代币
---

# ERC20 代币部署教程

### 不求别人，手把手教你自己通过remix部署EVM合约代码

#### 什么是标准ERC20代币？

标准ERC20代币指的是**没有任何功能**、机制的代币合约，代币创建之后默认会丢弃权限，所以也没有任何权限，是一个纯粹的、干净的、标准的合约。

根据以下步骤，您可以在可支持的任意一条链上，创建一个标准合约代币。

* 注意：没有安装钱包的不能发币，我们使用Metamask(小狐狸)钱包来演示，请先安装小狐狸钱包插件

以下已Sepolia testnet为例进行部署的说明：

#### 部署准备

Metamask

如果Metamask中没有要部署代币的网络，可前往[cpbox.io小狐狸助](https://www.cpbox.io/cn/metamask/helper)手搜索对应的主网并添加到Metamask中，添加流程参考【教程】

地址有余额用于支付部署代币的gas费用

如果是测试网络部署，可以去对应链的水龙头领取测试代币，然后metamusk切到对应的测试网络。可通过[https://www.cpbox.io/cn/metamask/helper](https://www.cpbox.io/cn/metamask/helper)查询对应链的测试网领水地址，并将测试网添加到Metamask中。

#### 部署流程

我们使用[remix](https://remix.ethereum.org/)进行合约部署

<figure><img src="../../../../.gitbook/assets/image (10) (1) (1).png" alt=""><figcaption><p>Remix 导入代码</p></figcaption></figure>

这里我们之间从URL链接中导入合约代码

<figure><img src="../../../../.gitbook/assets/image (2) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>通过链接导入代码</p></figcaption></figure>

链接在这https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/erc20.sol

cpbox已经在github中提供了可以直接部署的代码，填入对应的url即可导入合约代码。

有的时候网络不是很好，可能会导入不了，我现在就没导入

<figure><img src="../../../../.gitbook/assets/image (11) (1) (1).png" alt=""><figcaption><p>导入出错</p></figcaption></figure>

这个时候，索性打开github.com的文件，然后新建一个erc20.sol的文件，然后把文件里面的内容拷贝进去Remix 会弹出一个安全提示

<figure><img src="../../../../.gitbook/assets/image (12) (1).png" alt=""><figcaption><p>安全提示</p></figcaption></figure>

意思是要注意安全，别拷贝了有木马的代码，拷贝完事以后和github.com上面的源码比较一下， 一样的话就放心了。成功导入后，找到erc20.sol这个文件，保存一下即可编译

<figure><img src="../../../../.gitbook/assets/image (3) (1) (1) (1) (1).png" alt=""><figcaption><p>编译</p></figcaption></figure>

编译的时候把参数选一下

<figure><img src="../../../../.gitbook/assets/image (13) (1).png" alt=""><figcaption><p>编译参数</p></figcaption></figure>

EVM version 不一样的版本设计到一些EVM 更新，一般选默认就行了，这里选默认的 cancun， Optimization，一般可以勾选一下，这个会对编译的代码做一些优化，大多数情况下都会在部署的时候省不少gas费。

编译成功的话可以看到左侧第三个按钮有个绿色的勾，下一步准备连接钱包进行合约的部署

<figure><img src="../../../../.gitbook/assets/image (4) (1) (1) (1) (1).png" alt=""><figcaption><p>链接钱包</p></figcaption></figure>

通过红色框的按钮切到部署合约的面板，在下拉中选择连接MetaMask，此时会唤起钱包的弹框，点击连接即可连接上钱包

<figure><img src="../../../../.gitbook/assets/image (5) (1) (1) (1) (1).png" alt=""><figcaption><p>部署合约</p></figcaption></figure>

成功连接之后，可以看到当前所在的链已经连接的钱包地址和钱包余额

<figure><img src="../../../../.gitbook/assets/image (6) (1) (1) (1) (1).png" alt=""><figcaption><p>查看钱包地址余额</p></figcaption></figure>

下面开始部署合约，首先根据要部署的代币信息填写对应的参

数假设我们总共的代币供应量为10000，decimal为18位，那么这里的initialSupply的供应量就需要填10000000000000000000000 = 10000 \* 10^18（10000乘以10的18次方）

<figure><img src="../../../../.gitbook/assets/image (7) (1) (1) (1) (1).png" alt=""><figcaption><p>合约参数</p></figcaption></figure>

点击transact唤起钱包，查看预估要消耗的gas，点击确认进行合约的部署

<figure><img src="../../../../.gitbook/assets/image (8) (1) (1) (1).png" alt=""><figcaption><p>部署合约</p></figcaption></figure>

控制面板中可以看到交易的状态，交易确认后即部署成功

<figure><img src="../../../../.gitbook/assets/image (9) (1) (1) (1).png" alt=""><figcaption><p>查看交易结果</p></figcaption></figure>

这里便是刚刚部署的合约地址，可通过区块浏览器进行查看。[https://sepolia.etherscan.io/address/0x5afd0dbcd0cc417c754ac71380e0124ba1db3562#code](https://sepolia.etherscan.io/address/0x5afd0dbcd0cc417c754ac71380e0124ba1db3562#code)

打开钱包的代币面板，点击添加代币，将刚刚的代币合约地址添加进去，即可看到刚刚的代币信息和当前地址代币的余额

<figure><img src="../../../../.gitbook/assets/image (14) (1).png" alt=""><figcaption><p>添加代币</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (15) (1).png" alt=""><figcaption><p>查看余额</p></figcaption></figure>

#### 附录：

Remix地址：[https://remix.ethereum.org/](https://remix.ethereum.org/)

代币合约源码：[https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/erc20.sol](https://github.com/cpbox/cpbox-token-contracts/blob/main/evm/erc20.sol)

CPBOX也提供了更复杂的工具和功能，如果需要定制的话可以加TG群联系我们 [https://t.me/cpboxio](https://t.me/cpboxio)

如果你有好的建议，也欢迎一起来探讨 [https://www.cpbox.io/cn/suggest](https://www.cpbox.io/cn/suggest)
