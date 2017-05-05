# react开发环境

## npm安装

```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-react react react-dom webpack-dev-server webpack
```

## 配置 `webpack`

> 多文件入口
> 合并复用代码到common.js

## 配置指令 `package.json`

> npm start         监听方式自动编译开发调试
> npm run server    localhost:8080本地www服务
> npm run dist      产品的方式发布

## 目录说明

```
├── build                           编译生成目录
│   ├── 01-helloword.js
│   └── common.js
├── pages                           访问页面
│   ├── 01-helloword.html
│   └── favicon.ico
├── src                             es6源码
│   └── 01-helloword.js
├── README.md
├── package.json                    npm配置
└── webpack.config.js               webpack配置
```
