const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // Force Gatsby to look for dependencies within the local node_modules from docs.
      modules: [path.join(__dirname, 'node_modules')],
      alias: {
        '@8base/boost': path.resolve(__dirname, '../es/index.js'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  })
}
