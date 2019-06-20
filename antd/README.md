# Antd学习

- 新建一个空项目
  - [项目实战](https://ant.design/docs/react/practical-projects-cn)
  - [创建 umi 项目](https://umijs.org/zh/guide/create-umi-app.html#创建-umi-项目)

```bash
# 创建目录
mkdir antd 
# 安装更新 umi
yarn global add umi
# 创建项目
# cnpm install -g create-umi && create-umi
yarn create umi
# 初始化 node_modules 即安装依赖
yarn
yarn start
# App running at:
#  - Local:   http://localhost:8000/ (copied to clipboard)

# 安装npx  用于执行 node_modules 下的命令
yarn global add npx

# 新建路由
npx umi g page products
# 新增或修改
# src/components/ProductList.js
# src/models/products.js
# src/pages/products.js
# src/app.js

# 打包
npm run build

```

​    

