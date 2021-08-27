const {merge} = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');
const path = require('path');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    mode: "development",
    //webpack-dev-server服务的配置，仅在使用webpack-dev-server有实际作用
    devServer: {
        static: path.join(__dirname,'../dist') ,
        host: 'localhost',
        port: 8080,
        https: false,
        hot: false,
        // proxy: {...}, // 设置代理
        onBeforeSetupMiddleware: app => {
        }
    },
});
