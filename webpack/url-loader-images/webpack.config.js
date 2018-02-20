const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        test: /\.js$/,
        use: {
        	loader: 'babel-loader',
        	options: {
        		presets: ['es2015']
        	}
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000, // maximo peso de la imagen en bytes
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer, (expresión regular)
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      }
    ]
  },
  plugins: [
    // aquí van los plugins
    new extractTextPlugin("css/[name].css") // donde se guardan archivos
  ]
}