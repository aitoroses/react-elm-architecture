import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const isDev = process.env.NODE_ENV != "production"

export default {
    entry : './src/index.ts',
    format : 'umd',
    moduleName : 'ReactELM',
    external: ['react'],
    globals: {
      react: 'React'
    },
    plugins : [
        typescript({typescript: require('typescript')}),
        nodeResolve({jsnext: true, main: true}),
        commonjs({
            include: 'node_modules/**',
        }),
        !isDev ? uglify() : null
    ].filter(Boolean)
}
