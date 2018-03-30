'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLess = new ExtractTextPlugin({
    //filename: "[name].[contenthash].css",
    filename: "[name].css"
});

const WorkboxPlugin = require('workbox-webpack-plugin');

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
        extractLess,
        new WorkboxPlugin.GenerateSW({
            swDest: '../sw.js',
            cacheId: 'magento-pwa-info',
            // precache
            globDirectory: './pub',
            globPatterns: ['build/*.css', 'build/fontawesome-all.min.js', 'md/*.md', '*.html'],
            // one page
            navigateFallback: '/index.html',
            navigateFallbackWhitelist: [/^\/slides/],
            // fonts
            runtimeCaching: [{
                urlPattern: /fonts/,
                handler: 'cacheFirst',
                options: {
                    cacheName: 'fonts',
                    expiration: {
                        maxEntries: 5
                    }
                },
            }]
        })
    ],

    devServer: {
        inline: true,
        contentBase: "./pub",
        historyApiFallback: {
            index: 'index.html'
        }
    }

};
