/*
loader:1.下载，2使用（配置）
plugins:1.下载 2.引入3.使用
*/
const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [ //配置plugins
        // 引入html-webpack-plugin
        //功能:默认创建一个空的html，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            // 复制一个./src/index.html，并将自动引入打包输出的资源
            template: './src/index.html'
        })
    ],


    mode: 'development'
};