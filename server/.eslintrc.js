module.exports = {
    "extends": "standard",
    rules: {
        indent: ['off', 4],
        semi: ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'one-var': ['error', {
            const: 'consecutive'
        }],
        'eol-last': ['error', 'never']
    }
};