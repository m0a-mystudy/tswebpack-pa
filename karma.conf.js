// Karma configuration
// Generated on Tue Mar 29 2016 18:15:06 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'tests/*_test.ts'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "tests/*_test.ts": ["webpack"]
    },
    "plugins":[
      "karma-mocha",
      "karma-webpack",
      "karma-chrome-launcher"
    ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { 
            test: /_test\.ts$/,
            exclude: /node_modules/, 
            loader: "webpack-espower-loader!ts-loader" 
          },
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      resolve: {
        extensions: ['', '.ts', '.js', ".tsx"]
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
