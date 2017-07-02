var webpack = require('webpack');
//var chrome = require('chrome');

module.exports = function (config) {
  config.set({
    //browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ],    //use the mocha test framework
    plugins : [ 'karma-mocha' ,'karma-chrome-launcher','karma-webpack','babel-loader','karma-jasmine'],
    files: [

      { pattern: 'tests.webpack.js', watched: false }, //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack'], //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config

      module: {
                 loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },

            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
              query:
              {
                presets:['es2015', 'react']
              }
            }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
