const webpack = require('webpack');
const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: ['babel-polyfill', 'react-hot-loader/patch','./index.js'],

    output: {
        filename: "bundle.js",
        path: resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     loader : 'file-loader'
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     loader : 'file-loader'
            // }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['public']),//clean folder public
        new HtmlWebpackPlugin({
            template: 'index.html'  // re-create index.html every build
        })
    ],
}