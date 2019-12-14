const merge = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//npm install --save-dev uglifyjs-webpack-plugin
const webpack = require('webpack');

module.exports = merge(base, {
    devtool: 'source-map',//避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
    plugins: [
        // new UglifyJSPlugin({//不能压缩ES6语法文件，需配合babel使用
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({//为所有的依赖定义这个变量process.env.NODE_ENV
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

    ],
    optimization: {//将所有入口js中重复的引用，提取出公共js文件使用。动态引入和直接引入都会提取，会覆盖动态引入时指定的webpackchunk名称
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                //将基本不会改变的代码提取出来（如引用的组件，工具类库等），输出为一个文件，可利于浏览器缓存
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
});
