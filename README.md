# react开发环境

## npm安装

```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-react react react-dom webpack-dev-server webpack
```

## 配置 `webpack`

> 自动读取 /src/ 下需要编译的react源码
> 自动创建 预览html文件
> 合并复用代码到common.js

## 配置指令 `package.json`

> npm start         监听方式自动编译开发调试
> npm run server    localhost:8080本地www服务
> npm run dist      产品的方式发布

## 目录说明

```
├── build                           编译生成目录
│   ├── 01-helloword.js
│   ├── 01-helloword.html
│   └── common.js
├── src                             es6源码
│   ├── tpl
│        └── page.html              模板文件
│   └── 01-helloword.js
├── webpack                         自定义编译库文件
│   └── webpackHelper.js            webpack帮助函数
├── README.md
├── package.json                    npm配置
└── webpack.config.js               webpack配置
```
