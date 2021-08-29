const {merge} = require('webpack-merge');//npm install --save-dev webpack-merge
const base = require('./webpack.base.js');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    mode: "development",
});
