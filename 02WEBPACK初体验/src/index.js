/*
  index.js :webpack入口起点文件
  1.运行指令
  开发环境:webpack ./src/index.js -o ./build/built.js --mode=development
  webpack 会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js
  整体打包环境，是开发环境
  生产环境:webpack ./src/index.js -o ./build/built.js --mode=production
  webpack 会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js
  整体打包环境，是生产环境
  2结论:
    1.webpack 能处理js文件和json资源，不能处理css/img等其他资源。
                  2.生产和开发环境将ES6模块化编译成浏览器识别的模块化。
                  3.生产环境比开发环境多一个代码压缩
*/
import './index.css'
import data from './data.json'
console.log(data)

function add(x, y) {
    return x + y;

}
console.log(add(1, 2));