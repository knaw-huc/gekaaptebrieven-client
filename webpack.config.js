module.exports = {
	devServer: {
		contentBase: __dirname,
		disableHostCheck: true,
		historyApiFallback: true,
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				pathRewrite: {'^/api': ''}
			}
		}
	},
	entry:  './src/index.tsx',
	mode: 'development',
	output: {
		filename: `bundle.js`,
		path: __dirname + '/build',
		publicPath: '/build/',
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
			}
		]
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	}
}
