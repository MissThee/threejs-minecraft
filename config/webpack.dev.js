const merge = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(base, {
    devtool: 'inline-source-map',
    plugins: [
        //清理输出目录(服务型启动方式不需要清理)
        // new CleanWebpackPlugin(),//npm install clean-webpack-plugin --save-dev
    ],
    //webpack-dev-server服务的根目录
    devServer: {
        contentBase: '../dist',
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {...}, // 设置代理
        before: app => {
        }
    },
});
