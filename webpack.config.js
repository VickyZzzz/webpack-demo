var path = require('path');
var webpack = require('webpack');
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
            // {
            //     test:/\.css$/,
            //     loaders:['style-loader','css-loader'],
            //     // loaders: '"style-loader!css-loader!postcss-loader"'
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
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
            chunks:['index','common.js'], //对应接入的js文件
            title:"Hello World app",
            filename:'index.html',
            // template:""    //自动生成html文件的模板
        }),
        new HtmlwebpackPlugin({
            chunks:["about",'common.js'],
            title:"about",
            filename:"about.html",
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename:"common.js",
           chunks:['index','about']
        })

    ],


};