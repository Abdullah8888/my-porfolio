const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const APP_PATH = path.resolve(__dirname, 'public');
console.log('the path is' + APP_PATH)
//const NODE_MODULE_PATH = path.resolve(__dirname, 'node_modules');

module.exports = {

  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    }

  },
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

        // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|json|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
      //{test: /\.(png|svg|jpg|gif|ico)$/, loader: "file-loader", options: { name: '/dist/[name].[ext]' }},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html')}),
   
  ]
};