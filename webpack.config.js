var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app', 'src', 'index')
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'app', 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app', 'build'),
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