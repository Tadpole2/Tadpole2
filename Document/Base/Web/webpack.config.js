const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // 入口
  entry: {// main是默认入口，也可以是多入口
    main: './src/main.js' 
  },
  // 出口
  output: {
    filename: './build.js', // 指定js文件
    path: path.join(__dirname, 'dist')// 最好是绝对路径
    // path: path.join(__dirname, '..', 'dist')
    // 代表当前目录的上一级的dist
  },
  module: {
    // 和loaders一样的功能 rules: webpack2.x之后新加的功能
    loaders: [  
      {
        test: /\.css$/, //require('./a.css||./a.js') 
        loader: 'style-loader!css-loader',
        // 顺序是反过来的2！1
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        loader: 'url-loader?limit=4096&name=[name].[ext]',
        // 顺序是反过来的2！1
        // [name].[ext]内置提供，因为本身是先读这个文件
        // options: {
        //   limit: 4096,
        //   name: '[name].[ext]'
        // }
        // loader和 options两种方式都可以，建议使用 options
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 排除node_module下的所有
        exclude: /node_modules/,
        options: {
          presets: ['es2015'], // 关键字
          plugins: ['transform-runtime'], // 函数
        }      
      },
      { // 解析vue
        test: /\.vue$/,
        loader: 'vue-loader', // vue-template-compiler是代码上的依赖
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  }, 
  plugins: [
    // 插件的执行顺序是依次执行
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
  ]
}

// npm i babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime -D 
// 相关打包的东西 -D