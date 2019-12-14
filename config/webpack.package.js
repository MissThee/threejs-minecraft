const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
//打包成插件用的
module.exports = {
    entry: './src/package/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',//当你在 import 引入模块时，这可以将你的 library bundle 暴露为名为 webpackNumbers 的全局变量
        libraryTarget: 'umd'//
//可以通过以下方式暴露 library：
// 变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。默认为 var
// this：通过 this 对象访问（libraryTarget:'this'）。
// window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
// UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。
    },
    externals: {//外部化lodash引用，不将lodash打包，而是在使用时，直接用用户环境中的lodash
        // lodash: {
        //     commonjs: 'lodash',
        //     commonjs2: 'lodash',
        //     amd: 'lodash',
        //     root: '_'
        // }
    },
    plugins: [
        //清理输出目录
        new CleanWebpackPlugin(),//npm install clean-webpack-plugin --save-dev
    ]
};
