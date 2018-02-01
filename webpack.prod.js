const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    plugins:[
        new UglifyJSPlugin(),// uglify bundle js
    ],
    externals:{
        config: JSON.stringify(require('./config/globalConfig.prod.json'))
    }
});