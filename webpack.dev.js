const webpack = require('webpack');
const { resolve } = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool:'eval-source-map',
    devServer: {
        inline: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        hot: true,
        port: 9000
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});