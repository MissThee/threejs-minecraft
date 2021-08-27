const {merge} = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: "production",
    devtool: false,//避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。可用source-map
});
