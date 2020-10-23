/*

webpack.config.js 是webpack的配置文件
作用:指示webpack干那些活 （当你运行webpack，指令时会加载里面的配置）
所有的构建工具都是基于nodejs平台运行的-模块化默认采用common.js
*/
//resolve 用来拼接绝对路径的方法
const {
    resolve
} = require("path");
module.exports = {
    //webpack 配置
    entry: './src/index.js', //入口起点
    output: {
        filename: 'built.js', //输出文件名
        path: resolve(__dirname, 'build'), //输出路径__dirname nodejs的变量，代表当前文件的目录绝对路径
    }, //输出
    //loader 配置
    module: {
        rules: [
            //详细的loader配置,不同资源配置不同loader
            {
                test: /\.css$/, //配置哪些文件
                use: [
                    // use数组中loader执行顺序是从右到左，从上到下，依次执行
                    //创建style标签，将js中样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成common.jsm模块加载到js中，里面内容是样式字符串
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
            }
        ]
    },
    //plugins 的配置
    plugins: [
        //详细的plugins配置
    ],
    mode: 'development',
    //mode:'production'
}