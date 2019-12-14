const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    //报错在源码位置显示，定位错误代码
    // devtool: 'inline-source-map',//改为在dev配置中启用
    //webpack-dev-server服务的根目录
    devServer: {
        contentBase: '../dist'
    },
    plugins: [
        //清理输出目录
        new CleanWebpackPlugin(),//npm install clean-webpack-plugin --save-dev
        //生成index。html并添加所有入口文件的引用
        new HtmlWebpackPlugin({//npm install --save-dev html-webpack-plugin
            title: 'MC',//标题
            inject: 'body',//入口资源引用，插入到新的文件中
            // filename: "index.html",//输出文件名
            template: "./src/index.html",//可指定自己的html文件
            // chunks: ["app"], // entry中的app入口才会被打包
            favicon: "./src/favicon.ico",
            minify: {
                // 压缩选项
                collapseWhitespace: false
            }
        }),
        //静态资源拷贝打包
        // npm install --save-dev webpack-manifest-plugin
        new copyWebpackPlugin([{
            from: './src/assets',// 打包的静态资源目录地址
            to: 'assets' // 打包到dist下面的assets
        }]),
        //原文件与输出文件追踪记录，输出目录产生manifest.json
        new ManifestPlugin(),// npm install --save-dev webpack-manifest-plugin
    ],
    output: {
        filename: 'package/[name].[contenthash].js',//出口使用[name]来使用key输出多个文件
        chunkFilename: 'package/[name].[contenthash].bundle.js',//非入口 chunk 的名称
        path: path.resolve(__dirname, '../dist'),
        // 引用静态资源文件路径。相对路径从index目录为起始，即打开的html所在目录;绝对路径从根目录起始即/
        publicPath: ''
    },
    externals: {

    },
    mode: "production",//也可以在命令行接口中使用 --optimize-minimize 标记，来使用 UglifyJSPlugin
    module: {
        rules: [
            {//npm install --save-dev style-loader css-loader
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {//npm install --save-dev file-loader
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ],
            },
            // {//npm install --save-dev csv-loader
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //         'csv-loader'
            //     ],
            // },
            // {//npm install --save-dev xml-loader
            //     test: /\.xml$/,
            //     use: [
            //         'xml-loader'
            //     ],
            // },
            // {//npm install --save-dev html-loader
            //     test: /\.html$/,
            //     use: [{
            //         loader: "html-loader",
            //         options: {
            //             interpolate: true
            //         }
            //     }]
            // }
        ]
    },
};
