const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin')
// const ManifestPlugin = require('webpack-manifest-plugin');
// const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index/FirstPage.js'
    },
    output: {
        filename: 'package/js/[name].[contenthash].entry.js',//入口文件输出名称，默认name为manifest
        chunkFilename: 'package/js/[name].[contenthash].bundle.js',//非入口文件 chunk 的名称
        path: path.resolve(__dirname, '../dist'),//输出文件夹
        // 引用静态资源文件路径。相对路径从index目录为起始，即打开的html所在目录;绝对路径从根目录起始即/
        publicPath: './',
    },
    //报错在源码位置显示，定位错误代码
    // devtool: 'inline-source-map',//改为在dev配置中启用
    plugins: [
        //生成index.html并添加所有入口文件的引用
        new HtmlWebpackPlugin({//npm install --save-dev html-webpack-plugin
            title: 'MC',//标题，需要模板中title为<%= htmlWebpackPlugin.options.title%>
            inject: 'body',//入口资源引用，插入到新的文件中
            // filename: "FirstPage.html",//输出文件名
            template: "./src/index/FirstPage.html",//可指定自己的html文件
            favicon: "./src/index/favicon.ico",
            filename: "index.html",//输出的html名称，默认index.html
            minify: {
                // 压缩选项
                collapseWhitespace: false
            }
        }),
        //静态资源拷贝打包（已改为对象引用，使用loader处理，不再直接拷贝）
        // npm install --save-dev webpack-manifest-plugin
        // new copyWebpackPlugin([{
        //     from: './src/assets',// 打包的静态资源目录地址
        //     to: 'assets' // 打包到dist下面的assets
        // }]),
        //原文件与输出文件追踪记录，输出目录产生manifest.json（自定义各个打包后文件之后就没什么用了）
        // new ManifestPlugin(),// npm install --save-dev webpack-manifest-plugin
    ],
    resolve: {
        alias: {
            //路径别名
            'src': path.join(__dirname, '../src')
        },
    },
    externals: {},
    optimization: {//将所有入口js中重复的引用，提取出公共js文件使用。动态引入和直接引入都会提取，会覆盖动态引入时指定的webpackchunk名称
        moduleIds: 'hashed',
        // minimize: false,//是否使用压缩，默认mode为development为false，为production为true
        minimizer: [new terserWebpackPlugin({//此处只是定义，并不是启用
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
                compress: {
                    drop_console: true,//去除console输出
                },
            },
        }),],
        runtimeChunk: true,//打包后js中出现runtime文件，是管理动态加载模块的代码，修改入口js，本文件hash不变，修改import()动态加载的模块，本文件hash会变。（可配置{name:'manifest_hahaha'}自己改名）
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 100000,//个人编码部分打包后每个文件的最大尺寸，大于此尺寸要分出更多文件，vendor~xx文件
            minChunks: 1,//当一个组件被共享次数大于此值，则会被拆分到单文件
            maxAsyncRequests: 5,//打包后，按需加载的模块最多能拆分成几个文件
            maxInitialRequests: 3,//限制打包后动态加载的包个数，入口算一个，如现在还有三个组件需要打成vendor~xx，此时只会打包出有两个（按依赖的大小，大的会被单独打包）
            automaticNameDelimiter: '~',
            name: true,//false时，打包后的js，依赖包代码文件，不会有名称，使用数字编号。如本项目中vendor~mc名字会变为数字
            cacheGroups: {//设置缓存组用来抽取满足不同规则的chunk
                //将基本不会改变的代码提取出来（如引用的组件，工具类库等），输出为一个文件，可利于浏览器缓存
                vendor: {
                    //name:'aaaa',//不设置名称，且以上name配置为true时，则会以[本对象key][automaticNameDelimiter][引用此模块的模块]。此处设置name则直接叫name名
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10//优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        // minimizer: [new UglifyJSPlugin({//可自定义压缩插件，过时插件用terser-webpack-plugin替代
        //     uglifyOptions: {
        //         compress: {
        //             warnings: false,
        //             drop_debugger: true,
        //             drop_console: true,
        //         },
        //     },
        //     sourceMap: false,
        //     parallel: true,
        // })],
    },
    module: {
        rules: [
            {//npm install style-loader css-loader -D
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {//npm install url-loader -D
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'package/images/[name].[hash].[ext]?',
                            limit: 5000,
                        }
                    }],
            },
            {//npm install url-loader -D
                test: /\.(mp3|ogg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'package/sound/[name].[hash].[ext]?',
                            limit: 5000,
                        }
                    }],
            },
            {//npm install @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env babel-loader -D
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         'file-loader'
            //     ],
            // },
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
