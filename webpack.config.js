const myPath = require('path');
const htmlwebpack = require('html-webpack-plugin');//de bt3ml html file
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //instead of style-loader
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry:"./src/index.js", //l entry point
    output: {
        path: myPath.resolve(__dirname, 'dist'),//dist path
        filename: 'myBundle.js',//file inside dist folder
        assetModuleFilename:'images/[name][ext]'//da path l images x el-production
    },
    mode: 'development',
    plugins: [
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({filename: 'style/myStyle.css'}),
        new htmlwebpack({template: 'src/index.html'}),

    ],
    module: {
        rules: [
            {
                test: /\.css$/i, //da loader ll css
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                //l mini de bdl l style-loader
            }, 
            { //loader ll images-> built-in loader
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
}