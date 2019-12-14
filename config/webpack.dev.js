const merge = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(base, {
    devtool: 'inline-source-map',
    plugins: [
        //清理输出目录
        new CleanWebpackPlugin(),//npm install clean-webpack-plugin --save-dev
    ]
});
