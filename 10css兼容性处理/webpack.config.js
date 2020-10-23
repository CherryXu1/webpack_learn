const {
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 提取css成单独文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    // 设置nodejs环境变量
process.env.NODE_ENV = "development"
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    /*
                    css处理兼容性：postcss--->postcss-loader post-preset-env（库）
                    帮postcss找到package.json中的browserslist里面的配置，通过加载指定的css兼容样式
                    "browserslist": {
                      //开发环境-->设置node环境变量：process.env.NODE_ENV=develpment
                      //process.env 属性会返回包含用户环境的对象,
                            {
                                TERM: 'xterm-256color',
                                SHELL: '/usr/local/bin/bash',
                                USER: 'nodejscn',
                                PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
                                PWD: '/Users/nodejscn',
                                EDITOR: 'vim',
                                SHLVL: '1',
                                HOME: '/Users/nodejscn',
                                LOGNAME: 'nodejscn',
                                _: '/usr/local/bin/node'
                            }

                               "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"],
                               //生产环境:默认是生产环境
                               "production": [">0.2%", "not dead", "not op_mini all"]
    }
                    */
                    //第一种使用loader默认配置
                    //  'postcss-loader',
                    //第二种修改loader配置
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => {
                                // postcss插件
                                require('postcss-preset-env')
                            }
                        }
                    }
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