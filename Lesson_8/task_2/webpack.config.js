const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {

    const isProdaction = argv.mode === 'prodaction';
    const config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                    test: /.s?css$/,
                    use: [isProdaction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /.(jpg|png)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8189,
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    }, ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            port: 9000,
            hot: true,
        }
    }
    if (isProdaction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css',
        }))
    }

    return config
};