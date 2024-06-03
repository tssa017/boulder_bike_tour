const jestConfig = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {},
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'test.jsx'],
    globals: {
        'process.env.NODE_ENV': 'test',
    },
    testMatch: ['**/*.test.mjs', '**/*.test.js'],
    type: 'module',
};

export default jestConfig;
