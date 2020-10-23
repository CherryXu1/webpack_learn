const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {

                //处理图片资源--这种方式无法处理html图片处理
                test: /\.(png|jpg|gif)$/,
                //使用url-loader 下载file-loader和url-loader
                loader: 'url-loader',
                options: {
                    //图片大小小于8kb，就会被base64处理（能够减少请求数量，优点:减轻服务器压力，缺点:图片体积会更大文件请求速度更慢）
                    limit: 80 * 1024,
                    name: '[hash:10].[ext]', //给图片进行重命名[hsah:10]去图片hash前10位[ext]文件原来扩展名
                    outputPath: 'images/',
                    //问题：url-loader默认使用es6模块化进行解析的，而html-loader引用图片是common.js
                    //解析时会出现问题:[object Module]
                    //解决:关闭url-loader的es6模块化，使用common.js
                    esModule: false
                }
            },
            {
                test: /\.(htm)$/,
                //处理html的img图片,(负责引入img图片，从而被url-loader识别处理)
                loader: 'html-loader',
                // options: {
                //     attrs: [':data-src']
                // }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}