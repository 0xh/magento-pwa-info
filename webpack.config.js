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
        path: path.resolve(__dirname, 'pub/'),
        publicPath: '/',
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
            swDest: 'sw.js',
            cacheId: 'magento-pwa-info',
            importWorkboxFrom: 'local',
            // precache
            globDirectory: './pub',
            globPatterns: ['**/*.css', 'site.webmanifest', 'build/fontawesome-all.min.js', 'md/*.md', '*.html'],
            // one page
            navigateFallback: '/index.html',
            navigateFallbackWhitelist: [/^\/slides/],
            directoryIndex: 'index.html',
            templatedUrls: {
                '/': 'root-version-1',
            },
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
            }],
            manifestTransforms: [
                // fix for url normalisation of netlify
                (entries) => {
                    entries.forEach((entry) => {entry.url = (entry.url === '/') ? '' : entry.url});
                    return {manifest: entries, warnings: []};
                }
            ]
        }),
    ],

    devServer: {
        inline: true,
        contentBase: "./pub",
        historyApiFallback: {
            index: 'index.html'
        }
    }

};
