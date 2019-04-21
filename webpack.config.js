const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: { // 开发服务器的配置
       contentBase: path.join(__dirname, 'dist'),
       compress: true,
       port: 3000
    },
    mode: 'development', // 模式 默认两种production development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js', //打包后的文件名
        path: path.resolve(__dirname, 'dist'), //路径必须是一个绝对路径
    },
    plugins: [ // 数组放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    module: { //模块
       rules: [ // 规则 css-loader 
       //  style-loader 把css插入到head的标签中
       //  loader的特点： 希望单一
       //  loader的用法： 字符串只用一个loader
       //  多个loader需要[]
       //  loader的顺序 默认是从右向左执行
       //  loader还可以写出对象方式
       {
        test: /\.css$/,
        use: [
            {
               loader: 'style-loader',
            //    options: {
            //        insertAt: 'top' //内联样式最高级
            //    }
            },
            'css-loader',
        ]
       },
       {
        test: /\.less$/,
        use: [
            {
               loader: 'style-loader',
            },
            'css-loader','less-loader'
        ]
       }
       ]
    }
}