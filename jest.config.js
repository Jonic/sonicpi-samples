module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '!src/**/test.js',
    '!src/**/config/*.js',
    '!src/*.js',
    '!src/vendor/*.js',
    'src/**/*.js',
  ],
  coverageReporters: ['html', 'text', 'text-summary'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mocks__/file-mock.js`,
  },
  modulePaths: ['src'],
  setupFiles: [`<rootDir>/loadershim.js`, 'jest-plugin-context/setup'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', 'jest-enzyme'],
  testEnvironment: 'jest-environment-jsdom-global',
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  testURL: `http://localhost`,
  verbose: true,
}
