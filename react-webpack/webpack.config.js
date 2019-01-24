 const path = require('path');
 const webpack = require('webpack');

 const HWP = require('html-webpack-plugin');
 module.exports = {
     entry: {
         index: path.join(__dirname, '/src/index.js')
     },
     output: {
         filename: 'build.js',
         path: path.join(__dirname, '/dist')
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'

         }]

     },
     resolve: {
         extensions: ['.js', '.jsx']
     },
     plugins: [
         new HWP({
             template: path.join(__dirname, '/src/index.html')
         })

     ]
 }