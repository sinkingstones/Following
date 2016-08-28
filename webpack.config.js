var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app', 'src', 'index')
    ],
    output: {
        path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app', 'dist') : path.resolve(ROOT_PATH, 'app', 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: process.env.NODE_ENV === 'production' ? [] : ['eslint'],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app', 'dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Listlogs'
        })
    ]
};