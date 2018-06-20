/* global module, __dirname, require */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => { 
  const isProduction = env === 'production'
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' } )
  return {
    entry: './src/app.js',
    mode: 'development',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: { 
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node-modules/,
      }, {
        test: /\.s?css$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
    },
    plugins: [ CSSExtract ],
    // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    // problèmes avec utilisation de source map avec webpack
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    }
  }
}

