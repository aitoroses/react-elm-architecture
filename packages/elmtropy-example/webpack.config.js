const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    output:{
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: ["node_modules"],
        alias: {
            'elmtropy': 'elmtropy/src/index.ts',
            'react-elmtropy': 'react-elmtropy/src/index.ts'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'awesome-typescript-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 8080
    },
    devtool: 'cheap-module-eval-source-map'
}
