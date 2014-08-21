var webpack = require('webpack');
var path = require('path');

module.exports = function (cwd, port) {
  return {
    entry: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/dev-server',
      './src/client'
    ],
    output: {
      path: path.resolve(cwd, 'dist'),
      filename: 'recomp.js',
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
        { test: /\/src\/[^\/]+\/index.coffee$/, loaders: ['react-hot'] },
        { test: /\.coffee$/, loaders: ['iced'] },
        { test: /\.cx\.html$/, loaders: ['iced', 'chtmlx'] },
        { test: /\.css$/, loaders: ['style', 'css'] }
        //{ test: /\.css$/, loaders: ['style/url', 'file?context=src/&name=[path][name].[ext]#hash=[hash]'] }
      ]
    },
  };
};
