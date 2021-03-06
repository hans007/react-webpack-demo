# react 学习调试环境

这是一个基于npm的react`学习调试`环境，方便入门快速上手。

`./src`目录下是`facebook`官网文档中的代码示例，你可以直接删除，写上自己的代码。

## 开发步骤

0. 第一次下载本环境，请不要忘记 `npm i`
1. 在src下创建react的js文件
2. 在 ./ 下执行 `npm start`
3. 在 `./build` 下找js同名的html文件查看效果

## 注意事项

- 公共组件请写在 `./component`
- 如果组件其它js没用到，就直接写在当前js中，需要的时候再抽取出单独文件
- 第三方组件库放在 `./vendor` 如(react-redux、redux、react-router、redux-thunk)
- `./build/common.js` 文件是编译自动抽取的公共库文件 请不要删除

## 关于调试

- chrome浏览器安装插件 `React Developer Tools`
- `npm run release` 编译
- chrome开发工具 `Source` 面板中 `webpack://src` 目录下的对应js文件, 支持断点

## 学习参考文推荐

不分先后，陆续整理中...

- 语法基础
    - [facebook QUICK START](https://facebook.github.io/react/docs/installation.html)
    - [ES6 编码规范](https://github.com/yuche/javascript)
    - [ECMAScript 6 - 阮一峰](http://es6.ruanyifeng.com/)
    - [React/React Native 的ES5 ES6写法对照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)

- 在线调试
    - [codepen.io](http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010)

## npm用到的包

```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-react react react-dom webpack-dev-server webpack
```

## 指令

- `npm start`         监听方式自动编译开发代码
- `npm run server`    localhost:8080本地www服务
- `npm run release`   一次性重新编译开发代码
- `npm run dist`      产品的方式发布

## 目录说明

```
├── build                           编译生成目录
│   ├── 01-helloword.js             编译后的js
│   ├── 01-helloword.html           与js同名的可查看html文件
│   └── common.js                   编译抽取的公共库文件
├── src                             es6源码
│   └── 01-helloword.js             react源码文件
├── webpack                         集成环境工具库目录
│   └── webpackHelper.js            webpack帮助函数
├── component                       自定义组件目录
├── vendor                          第三方组件库目录
├── assets                          静态资源文件                                                
├── tpl                             模板目录
│   └── page.html                   查看的html模板文件
├── README.md                       readme
├── package.json                    npm配置
└── webpack.config.js               webpack配置
```

