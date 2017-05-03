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
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

};