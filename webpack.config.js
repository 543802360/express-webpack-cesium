      const webpack = require('webpack');
      const path = require('path');
      const CopyWebpackPlugin = require('copy-webpack-plugin');

      const root = path.resolve(__dirname);
      const dist = path.join(root, 'public', 'javascripts', 'dist');
      const app = path.join(root, 'public', 'javascripts', 'app');

      const cesiumSource = path.join(root, 'node_modules', 'cesium', 'Build', 'Cesium');
      const cesiumDist = path.join(dist, 'cesium');

      const config = {
          entry: {
              index: path.join(app, 'index.js')
                  //,
                  //vendor: ['jquery', 'echarts']
          },
          output: {
              path: dist,
              filename: "[name].js",
          },
          module: {
              rules: [{ //CSS loader
                      test: /\.css$/,
                      use: [
                          { loader: 'style-loader' },
                          { loader: 'css-loader' }
                      ]
                  },
                  //ES6转码，bableloader
                  {
                      test: path.join(__dirname, 'public/javascripts/app'),
                      loader: 'babel-loader',
                      query: {
                          presets: 'es2015',
                      },
                  }, {
                      test: /\.(png|gif|jpg|jpeg)$/,
                      use: [{ loader: 'file-loader' }]
                  }
              ]
          },
          plugins: [
              new webpack.NoEmitOnErrorsPlugin(),
              new webpack.optimize.UglifyJsPlugin(),
              new CopyWebpackPlugin([
                  { from: cesiumSource, to: cesiumDist },
              ])
              //   ,
              //   new webpack.optimize.CommonsChunkPlugin({
              //       name: 'vendor',
              //   })
          ],
          stats: {
              colors: true
          },
          devtool: false,
      }
      module.exports = config;