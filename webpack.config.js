const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'gate-api.js',
    library: 'GateApi'
  },
  module: {
    rules: [
      {
        parser: {
          amd: false
        }
      }
    ],
  },
  mode: 'production'
}
