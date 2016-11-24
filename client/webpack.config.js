var constants = require('../config.json');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var plugins = [
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new ExtractTextPlugin('../css/app.css', {
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
];

var cssLoader = {};

var entry = [
    './src/index.js'
];

if(process.env.NODE_ENV === 'production'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );

    cssLoader = {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
    };

} else {

    cssLoader = {
        test: /\.css$/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
    };
    var patch_should_be_first = ['react-hot-loader/patch'];
    entry = patch_should_be_first.concat(entry.concat([
        'webpack-dev-server/client?' + constants.WEBPACK_DEV_SERVER_HOST + ':' + constants.WEBPACK_DEV_SERVER_PORT,
        'webpack/hot/only-dev-server'
    ]));

}

module.exports = {
    entry: entry,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            cssLoader
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist/static/js',
        publicPath: constants.WEBPACK_DEV_SERVER_HOST + ':' + constants.WEBPACK_DEV_SERVER_PORT + '/static/js',
        filename: 'bundle.js'
    },
    devServer: {
        //hot: true,
        historyApiFallback: true
    },
    plugins: plugins
};
