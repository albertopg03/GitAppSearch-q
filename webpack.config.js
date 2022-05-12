const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development', // or 'production'
	entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "build"),
    },
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.html', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
                    options: {
                        presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
				}
			},
            {
				test: /\.ts$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'ts-loader'
				}
			},
            {
				test: /\.html$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'html-loader',
					options: {
						esModule: false
					}

				}
			},
            {
				test: /\.(png|jpe?g|gif)$/,
				type: 'asset/resource'
			},
            {
				test: /\.scss$/,
				exclude: /(node_modules)/,
				use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                  ],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    devtool: 'inline-source-map',
    devServer: {
		hot: true,
		open: true,
		port: 9000
	},
};