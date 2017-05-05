var fs = require("fs");
var path = require("path");

// 获取js文件array
exports.getDirlistArray = function(dirName){
    return fs.readdirSync(dirName);
};

// 生成入口文件列表
exports.getEntry = function(dirListArray){
    var entry = {};
    dirListArray.forEach(function(filename){
        if(path.extname(filename) != '.js'){
            return;
        }
        var basename = path.basename(filename, '.js');
        entry[basename] = path.resolve(__dirname, '../') + '/src/' + filename;
        console.log('入口:' + filename);
    });
    return entry;
};

// 根据模板生成html页面
exports.createHtml = function(tplFileName,dirListArray){
    var tpHtml = fs.readFileSync(tplFileName,'utf-8');

    dirListArray.forEach(function(filename){
        if(path.extname(filename) != '.js'){
            return;
        }
        var basename = path.basename(filename, '.js');
        var newFileName = path.resolve(__dirname, '../') + '/build/' + basename + '.html';
        var newFileHtml = tpHtml.replace('[filename]',filename);
        fs.writeFileSync(newFileName,newFileHtml);
        console.log('新建:' + newFileName);
    });
};