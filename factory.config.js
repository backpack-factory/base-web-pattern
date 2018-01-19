const path = require('path')

module.exports = {
  patterns: ['base-pattern'],

  webpack: {
    target: 'web',
    output: { publicPath: '/build/' },
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
    }
  },

  scripts: {
    dev: (config, webpack) => {
      const WebpackDevServer = require('webpack-dev-server')

      const nodeModules = config.paths.patterns.map(p => path.join(p, 'node_modules'))
      config.webpack.resolve.modules.push(...nodeModules)
      config.webpack.resolveLoader.modules.push(...nodeModules)

      const compiler = webpack(config.webpack)
      const server = new WebpackDevServer(compiler, {
        hot: true,
        publicPath: compiler.options.output.publicPath
      })
      server.listen(3000, 'localhost')
    }
  }
}
