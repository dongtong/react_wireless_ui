var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
//不管 “React” 是什么时候在代码中引入的，它会去匹配压缩后的 React JS 文件取代去 node_modules 中遍历。
//var pathToMinReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config =  {
	//---------------
	// entry: {
	//     app: path.resolve(__dirname, 'app/main.js'),
	//     mobile: path.resolve(__dirname, 'app/mobile.js'),
	//     vendors: ['react'] // 其他库
	// },
	// output: {
	//     path: path.resolve(__dirname, 'dist'),
	//     filename: '[name].js' // 注意我们使用了变量
	// },
	//---------------
	// entry: {
	//     app: path.resolve(__dirname, 'app/main.js'),

	//     // Since react is installed as a node module, node_modules/react,
	//     // we can point to it directly, just like require('react');
	//     // 当 React 作为一个 node 模块安装的时候，
	//     // 我们可以直接指向它，就比如 require('react')
	//     vendors: ['react']
	// }
	//---------------
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/javascripts/main.js')],
	// resolve: {
	// 	alias: {
	// 		'react': pathToMinReact
	// 	}
	// },
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,          // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
			exclude: /node_modules/, 
			loader: 'babel-loader',     // 加载模块 "babel" 是 "babel-loader" 的缩写
			query:{
                presets:['es2015','react']
            }//,
            //noParse: [pathToMinReact]   //不管 Webpack 什么时候试图是解析压缩文件，我们阻止它，告诉它那不是必须的
			//loader: 'babel-loader',   /
			//loaders: ['react-loader', 'babel?presets[]=es2015,presets[]=react']
			//include: path.resolve(__dirname, './src')
			//query: {
		    //     presets:['react']
		    //}
		}, {
			test: /\.css$/,
			loader: 'style!css'         //同时加载css-loader和style-loader
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'   //url-loader 传入的 limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串
		}, {
			test: /\.(woff|svg)/,
			loader: 'url?limit=100000'
		}]
	}
	// plugins: [
	//     new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	// ]
}

module.exports =  config;