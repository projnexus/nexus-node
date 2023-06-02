module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    testMatch: [
        '**/__tests__/unauthenticated/**/*.test.ts'
    ],
};
