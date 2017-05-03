/**
 * Created by zhang.yanping on 2017/4/28.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:__dirname + '/src/index/index.js',
        about:__dirname + '/src/about/about.js',
    },
    output:{
        path:__dirname + '/build',
        filename:"[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }

        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            chunks:['index'], //对应接入的js文件
            title:"Hello World app",
            filename:'index.html',
            // template:""    //自动生成html文件的模板
        }),
        new HtmlwebpackPlugin({
            chunks:["about"],
            title:"about",
            filename:"about.html",
        })
    ],
};