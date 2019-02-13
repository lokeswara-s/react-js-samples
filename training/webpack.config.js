const Webpack = require('webpack');


const Jarvis = require("webpack-jarvis");
const chalk = require('chalk')
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Jarvis({
            port: 1337 // optional: set a port
        }),
        new SimpleProgressPlugin({
            messageTemplate: [':bar', chalk.green(':percent'), ':msg'].join(' '),
            progressOptions: {
                complete: chalk.bgGreen(' '),
                incomplete: chalk.bgWhite(' '),
                width: 40,
                total: 100,
                clear: false
            }
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    }
};