module.exports = {
    configureWebpack: {
        output: {
            filename: 'index.js',
            libraryTarget: "umd",
        },
        externals: {
            'vue-datetime': 'commonjs2 vue-datetime'
        },
        mode: 'production',
    },
}