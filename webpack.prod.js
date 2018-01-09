const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    plugins:[
        new CleanWebpackPlugin(['public']),//clean folder public
        new UglifyJSPlugin(),// uglify bundle js
        new HtmlWebpackPlugin({
            template: 'index.html'  // re-create index.html every build
        })
    ],
    externals:{
        config: JSON.stringify(require('./config/globalConfig.prod.json'))
    }
});