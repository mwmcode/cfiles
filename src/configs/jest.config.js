module.exports = {
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    // [
    //   'jest-junit',
    //   {
    //     outputDirectory: path.join(__dirname, 'jest'),
    //   },
    // ],
  ],
  testRegex: '(\\.|/)(test|spec)\\.[jt]sx?$',
  modulePathIgnorePatterns: ['/cypress/', '/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./jest/mocks/css.js'),
    '\\.(svg)$': require.resolve('./jest/mocks/file.js'),
  },
  // before jest's been loaded
  setupFiles: [require.resolve('./jest/SetupFiles.js')],
  // after jest's been loaded
  setupFilesAfterEnv: [require.resolve('./jest/SetupFilesAfterEnv.js')],
};
