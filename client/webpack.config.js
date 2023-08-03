const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");

const src = path.resolve(__dirname, 'src') + '/';

let config = {
  context: path.join(__dirname, '/src'),
  entry: 'index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['./', 'node_modules'],
    alias: {
      '@components': src + 'components',
      '@containers': src + 'containers',
      '@store': src + 'store',

      '@store/*': src + 'store/*',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      title: 'Jet Ruby Agency',
      base: '/',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
}

module.exports = config;