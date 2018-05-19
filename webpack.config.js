const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

const plugins = [];

plugins.push(new HTMLWebpackPlugin({
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index.html',
    template: __dirname + '/main.html'
}));

plugins.push(new copyPlugin([
    { from: 'img' }
]));

plugins.push(new extractTextPlugin("styles.css"));

plugins.push(new optmizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
        discardComments: {
            removeAll: true
        }
    },
    canPrint: true
}));

module.exports = {
    entry: {
        app: './src/app/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]  
    },
    plugins
};