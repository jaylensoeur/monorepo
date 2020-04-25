const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: [
        './src/index.tsx',
    ],
    mode: 'development',
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                js: {
                    test: /\.js$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 7,
                },
                css: {
                    test: /\.(css|sass|scss)$/,
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /src\/app\/config\.json$/,
                loader: 'string-replace-loader',
                options: {
                    search: '{{API_URL}}',
                    replace: process.env.API_URL,
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}
        ],
    },

    devServer: {
        clientLogLevel: 'trace',
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: './index.html',
        }),
        new CleanWebpackPlugin({
            verbose: true,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            publicPath: '/',
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
};
