const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
});

// 向外暴露一个打包配置对象
// node 的语法，因为webpack 是基于node构建的，所以支持node的api和语法
module.exports = {
    mode: 'development', //  development 开发(不压缩)  production 生产(压缩)
    plugins: [ //  插件
        htmlPlugin
    ],
    module: { // 第三方模块的配置规则
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
            // 注意1：模块化后css中的class选择器和id选择器会被模块化
            // 注意2：HTML标签选择器不会被模块化
            // localIdentName 的配置说明：https://github.com/webpack/loader-utils#interpolatename
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // css 配置
            {test: /\.ttf|woff2|woff|eot|svg$/, use: 'url-loader'}, // 图标文件处理
            {test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]', 'sass-loader']} //自己的文件处理器
        ]
    },
    resolve: {
        // 自动补全后缀配置，此处默认[".js", ".json"]
        extensions: [".js", ".jsx", ".json"],
        alias: { // 之后使用 @ 符号就是 /src
            "@": path.join(__dirname, './src'),
        }
    }
};