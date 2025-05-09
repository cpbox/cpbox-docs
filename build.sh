#!/bin/bash

# 设置环境变量以支持 UTF-8
export LC_ALL=C
export LANG=C

# 0. Git 操作
echo "开始执行 Git 操作..."

# 切换到 main 分支
echo "切换到 main 分支..."
if ! git checkout main; then
    echo "错误：无法切换到 main 分支"
    exit 1
fi

# 拉取最新代码
echo "拉取最新代码..."
if ! git pull origin main; then
    echo "错误：无法拉取最新代码"
    exit 1
fi

# 切换到 gh-pages 分支
echo "切换到 gh-pages 分支..."
if ! git checkout gh-pages; then
    echo "错误：无法切换到 gh-pages 分支"
    exit 1
fi
git reset --hard
git pull origin gh-pages
# 合并 main 分支
echo "合并 main 分支..."
if ! git merge main; then
    echo "错误：无法合并 main 分支"
    exit 1
fi

# 1. 检查并安装依赖
echo "检查并安装依赖..."
if ! command -v gitbook &> /dev/null; then
    echo "未找到 gitbook 命令，尝试安装..."
    if ! npm install -g gitbook-cli; then
        echo "错误：无法安装 gitbook-cli"
        exit 1
    fi
fi

# 安装项目依赖
echo "安装项目依赖..."
if [ -f "package.json" ]; then
    if ! npm install; then
        echo "错误：无法安装项目依赖"
        exit 1
    fi
fi

# 安装 gitbook 插件
echo "安装 gitbook 插件..."
if ! gitbook install; then
    echo "错误：无法安装 gitbook 插件"
    exit 1
fi

# 2. 执行gitbook构建
echo "开始构建gitbook..."
if ! gitbook build; then
    echo "gitbook构建失败，请检查错误信息"
    exit 1
fi

# 2. 将_book目录复制到docs目录
echo "复制构建文件到docs目录..."
if [ -d "_book" ]; then
    # 如果docs目录存在，先清空
    if [ -d "docs" ]; then
        rm -rf docs/*
    else
        mkdir docs
    fi
    # 复制_book内容到docs（包括隐藏文件）
    cp -r _book/* docs/
    # 单独复制.gitbook目录
    if [ -d "_book/.gitbook" ]; then
        cp -r _book/.gitbook docs/
        echo "已复制.gitbook目录到docs"
    fi
    # 删除_book目录
    rm -rf _book
fi

# 3. 处理.gitbook目录的替换
echo "处理.gitbook目录替换..."
if [ -d "docs/.gitbook" ]; then
    if [ -d "docs/gitbook" ]; then
        # 如果两个目录都存在，将.gitbook/assets的内容复制到gitbook/assets
        if [ -d "docs/.gitbook/assets" ]; then
            mkdir -p docs/gitbook/assets
            cp -r docs/.gitbook/assets/* docs/gitbook/assets/
        fi
        # 删除.gitbook目录
        rm -rf docs/.gitbook
        echo "删除.gitbook目录"
    else
        # 如果只有.gitbook目录，直接重命名
        mv docs/.gitbook docs/gitbook
        echo "重命名.gitbook目录为gitbook"
    fi
fi

# 4. 替换文件中的引用（只替换docs目录下的内容）
echo "替换docs目录下的引用..."
if [ -d "docs" ]; then
    # 替换.gitbook/为gitbook/
    find docs -type f -name "*.html" -exec sed -i '' 's/\.gitbook\//gitbook\//g' {} \;
    # 替换.gitbook"为gitbook"
    find docs -type f -name "*.html" -exec sed -i '' 's/\.gitbook"/gitbook"/g' {} \;
    # 处理特殊情况：恢复www.gitbook.com的引用
    find docs -type f -name "*.html" -exec sed -i '' 's/www\.gitbook\.com/www.gitbook.com/g' {} \;
fi

# 2.1 处理HTML文件中的换行标签
echo "处理HTML文件中的换行标签..."
if [ -d "docs" ]; then
    find docs -type f -name "*.html" -exec sed -i '' 's/<p>\\<\/p>/<br\/>/g' {} \;
    find docs -type f -name "*.html" -exec sed -i '' 's/<p>\\/<br\/>/g' {} \;
    find docs -type f -name "*.html" -exec sed -i '' 's/\\<\/p>/<\/p>/g' {} \;
    echo "已处理HTML文件中的换行标签"
fi


echo "所有操作完成！" 