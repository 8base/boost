module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'inline-react-svg',
    'jsx-control-statements', 
    'emotion',
    'babel-plugin-react-css-modules'
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { 'targets': { 'node': 'current' } }]
      ]
    }
  }
}
 