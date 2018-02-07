const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
  	home: path.resolve(__dirname, './src/js/index.js'),
  	precios: path.resolve(__dirname, './src/js/precios.js'),
  	contacto: path.resolve(__dirname, './src/js/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // Aquí van los loaders
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