const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 提取css成单独文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    //'style-loader', //创建style标签，将样式放入，
                    MiniCssExtractPlugin.loader, //取代style-loader，提取js中css成单独文件
                    'css-loader' //将css文件整合到js文件中
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css' //重命名
        })

    ],
    mode: 'development'
}