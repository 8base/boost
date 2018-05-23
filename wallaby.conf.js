module.exports = () => {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js',
    ],
    tests: [
      'src/**/*.test.js',
    ],
    testFramework: 'jest',
    env: {
      type: 'node',
      runner: 'node',
    },

    debug: true,
  };
};
