var webpack = require('webpack');
var path = require('path');

module.exports = function (cwd, port) {
  return {
    entry: [
      path.resolve(__dirname, 'node_modules/webpack-dev-server/client')+'?http://localhost:' + port,
      path.resolve(__dirname, 'node_modules/webpack/hot/dev-server'),
      './src/client'
    ],
    output: {
      path: path.resolve(cwd, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.coffee']
    },
    module: {
      loaders: [
        { test: /\/src\/[^\/]+\/index.coffee$/, loaders: [path.resolve(__dirname, 'node_modules/react-hot-loader')] },
        { test: /\.coffee$/, loaders: [path.resolve(__dirname, 'node_modules/iced-loader')] },
        { test: /\.cx\.html$/, loaders: [path.resolve(__dirname, 'node_modules/iced-loader'), path.resolve(__dirname, 'node_modules/chtmlx')] },
        { test: /\.css$/, loaders: [path.resolve(__dirname, 'node_modules/style-loader'), path.resolve(__dirname, 'node_modules/css-loader')] },
        { test: /\.less$/, loaders: [path.resolve(__dirname, 'node_modules/style-loader'), path.resolve(__dirname, 'node_modules/css-loader'), path.resolve(__dirname, 'node_modules/less-loader')] }
        //{ test: /\.css$/, loaders: ['style/url', 'file?context=src/&name=[path][name].[ext]#hash=[hash]'] }
      ]
    },
  };
};
