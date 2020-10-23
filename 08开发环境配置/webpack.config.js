/*
  开发环境配置：能让代码运行
  运行指令：
  webpack 会将打包结果输出
  npx webpack-dev-server 只会在内存中编译打包 没有输出
*/
const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif)/,
                loader: 'url-loader',
                options: {
                    name: '[hash:10].[ext]',
                    limit: 8 * 1024,
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|js|less|css|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'meida'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    },
    mode: 'development'
}