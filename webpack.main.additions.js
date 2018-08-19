const { join } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'

console.log('')

module.exports = isDev ? {} : {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
    path: join(process.cwd(), 'app/main')
  },
  plugins: [
    new CopyWebpackPlugin([ {from: 'src/main/preload.js', to: 'preload.js', toType: 'file' }])
  ]
}
