module.exports = {
  recipes: ['base-pattern'],
  target: 'web',

  updateConfig: (config) => {
    config.webpack.output.publicPath = '/build/'
    config.webpack.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })
    return config
  },

  scripts: {
    dev: (config, webpack) => {
      const WebpackDevServer = require('webpack-dev-server')

      const compiler = webpack(config.webpack)
      const server = new WebpackDevServer(compiler, {
        hot: true,
        publicPath: compiler.options.output.publicPath
      })
      server.listen(3000, 'localhost')
    }
  }
}
