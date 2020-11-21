'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/mynote/',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: '192.168.0.109', // can be overwritten by process.env.HOST
    port: 8012, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
    devServer: {
      port: 8083,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VUE_APP_BASE_API]: {
          // target: `http://dev.zz.admin.ikaoyaner.com/backend`,
          target: `http://192.168.0.196`,
          changeOrigin: true,
          pathRewrite: {
            ['^' + process.env.VUE_APP_BASE_API]: ''
          }
        }
      }
    },
  },

  build: {
    // Template for index.html
    // index: path.resolve(__dirname, '../dist/mynote/index.html'),
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    // assetsRoot: path.resolve(__dirname, '../dist/mynote/'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // assetsPublicPath: '/mynote/',//测试
    assetsPublicPath: '/',//本地

    /**
     * Source Maps
     */

    // productionSourceMap: true,
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
