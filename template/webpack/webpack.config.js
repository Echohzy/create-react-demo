var webpack = require('webpack');

module.exports = {
  entry: {
    main:[
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    "./src/javascripts/index.js"
    ]
  },
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { 
        test:   /\.css$/, 
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test: /\.js|jsx$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};