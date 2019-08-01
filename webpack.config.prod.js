
import path from 'path';
import webpack from 'webpack';
import HtmlWebpakPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so that their names change when content changes
    new WebpackMd5Hash,

    // use commonsChunkPlugin to create separate bundle
    // of vendor libraries so that they are cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // create HTML file that includes reference to bundle JS
    new HtmlWebpakPlugin ({
      template: 'src/index.html',
      minify: {
        removeComments:true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,

      // Properties you define hereare available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: "3161d70dca1b48d9915015509a67e9a5"

    }),

    // eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
