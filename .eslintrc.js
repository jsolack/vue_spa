module.exports = {
    // parent scope of the rules - all files of project
    root: true,
    // using ecma modules in this project
    parserOptions: {
        sourceType: 'module',
    },
    // https://standardjs.com/
    extends: "standard",
    // required to lint *.vue files
    plugins: [
        'html'
    ]
};
