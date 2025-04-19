#!/bin/bash

# 设置环境变量以支持 UTF-8
export LC_ALL=C
export LANG=C

# 1. 执行gitbook构建
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
    # 复制_book内容到docs
    cp -r _book/* docs/
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
    else
        # 如果只有.gitbook目录，直接重命名
        mv docs/.gitbook docs/gitbook
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

echo "所有操作完成！" 