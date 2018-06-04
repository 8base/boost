process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const babelCompilerOptions = {
  presets: ['react-app', 'flow'],
  plugins: ['inline-react-svg', 'flow-react-proptypes', 'jsx-control-statements'],
};

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*test.js',
    ],
    tests: [
      'src/**/*test.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony',
      },
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelCompilerOptions),
    },

    testFramework: 'jest',

    setup (wallaby) {
      const jestConfig = require('./package.json').jest;

      jestConfig.moduleNameMapper = {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${wallaby.localProjectDir}/__mocks__/file-mock.js`,
      };

      wallaby.testFramework.configure(jestConfig);
    },
  };
};
