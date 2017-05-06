var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common'); // 合并重复代码到 common.js 文件中
var webpackHelper = require("./webpack/webpackHelper");

// src目录下的js文件列表
var dirListArray = webpackHelper.getDirlistArray(__dirname+'/src/');

// 入口文件json
var entry = webpackHelper.getEntry(dirListArray);
//console.log(entry);

// 根据模板在build下创建呈现html
webpackHelper.createHtml(__dirname + '/src/tpl/page.html',dirListArray);

// webpack config
module.exports = {
    entry: entry,
    devtool: 'source-map',
    output: {
        path: __dirname + "/build",
        filename: "[name].js" // [name] 是entry入口的 key
    },
    plugins: [commonsPlugin],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'] // es6 react 编译
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.json'] // 默认扩展名
    }
}