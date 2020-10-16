const merge = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(base, {
    mode: "production",
    devtool: 'source-map',//避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    plugins: [
        //清理输出目录
        new CleanWebpackPlugin(),//npm install clean-webpack-plugin --D
    ],
    module:{
        rules:[

        ]
    }
});
