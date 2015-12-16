var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config =  {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/javascripts/main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,          
			exclude: /node_modules/, 
			loader: 'babel-loader',     
			query:{
                presets:['es2015','react']
            }
		}, {
			test: /\.css$/,
			loader: 'style!css'         
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'   
		}, {
			test: /\.(woff|svg)/,
			loader: 'url?limit=100000'
		}]
	}
}

module.exports =  config;