const path = require('path');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const JS_DIR = path.resolve(__dirname, '/src/js');
const IMG_DIR = path.resolve(__dirname, '/src/img');
const BUILD_DIR = path.resolve(__dirname, '/build');
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const entry = {
    main: JS_DIR + '/main.js',
    single: JS_DIR + '/single.js'
};
const output = {
    path: BUILD_DIR,
    filename: 'js/[name].js'
};
const rules = [
    {
        test: /\.js$/,
        include: [JS_DIR],
        exclude: /node_modules/,
        use:  'babel-loader'
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
			MiniCssExtractPlugin.loader,
			'css-loader'
        ]
    },
    {
        test: /\.(png|jpg|svg|jpeg|gif|ico)$$/,
        use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
			}
		}
    }
];

const plugins = (argv) => [
    new CleanWebpackPlugin( {
		cleanStaleWebpackAssets: ( 'production' === argv.mode  ) // Automatically remove all unused webpack assets on rebuild, when set to true in production. ( https://www.npmjs.com/package/clean-webpack-plugin#options-and-defaults-optional )
	} ),
    new MiniCssExtractPlugin( {
		filename: 'css/[name].css'
	} ),

]

getMatchedCSSRules.exports = (env, argv) => ({
    entry: entry,
    output: output,
    devtool: 'source-map',
    module: {
        rules: rules
    },
    plugins: plugins(argv)

});