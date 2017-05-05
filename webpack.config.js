var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common'); // 合并重复代码到 common.js 文件中
var webpackHelper = require("./webpack/webpackHelper");

var dirListArray = webpackHelper.getDirlistArray(__dirname+'/src/');
var entry = webpackHelper.getEntry(dirListArray);
//console.log(entry);
webpackHelper.createHtml(__dirname + '/src/tpl/page.html',dirListArray);


// // 根据模板 生成html
// // 模板文件
// var tpHtml = fs.readFileSync(__dirname + '/src/tpl/page.html','utf-8');
// //console.log(tpHtml);

// // 读取入口文件
// var entry = {};
// fs.readdirSync(__dirname+'/src/').forEach(function(filename){
//     if(path.extname(filename) != '.js'){
//         return;
//     }

//     // 读取入口文件
//     var basename = path.basename(filename, '.js');
//     entry[basename] = __dirname + '/src/' + filename;
//     console.log('入口:' + filename);

//     // 创建文件-覆盖
//     var newFileName = __dirname + '/build/' + basename + '.html';
//     var newFileHtml = tpHtml.replace('[filename]',filename);
//     fs.writeFileSync(newFileName,newFileHtml);
//     console.log('新建:' + newFileName);
// });
// //console.log(entry);

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