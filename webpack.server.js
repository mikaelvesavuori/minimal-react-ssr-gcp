const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const srcDir = path.resolve(__dirname, 'src/');
const serverDir = path.resolve(__dirname, 'server/build');

module.exports = {
	context: srcDir,
	entry: './indexServer.jsx',
	output: {
		path: serverDir,
		filename: 'server.bundle.js',
		libraryTarget: 'commonjs2'
	},
	optimization: {
		minimize: true
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false
	},
	externals: nodeExternals(),
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, './')
		],
		extensions: ['.js', '.jsx', '.html', '.jpg', '.jpeg', '.svg', '.png', '.woff2', '.woff'],
		alias: {
			'lodash-es': 'lodash'
			// Preact is encouraged, but you need to run Styled Components 3.4.X for it to actually work and it's possible some other libraries need to be downgraded as well
			//react: "preact-compat",
			//"react-dom": "preact-compat"
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							emitFile: false
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		})
	]
};
