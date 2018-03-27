'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    //filename: "[name].[contenthash].css",
    filename: "[name].css"
});

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'pub/build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        extractLess
    ],

    devServer: {
        inline: true,
        contentBase: "./pub",
        historyApiFallback: {
            index: 'index.html'
        }
    }

};
