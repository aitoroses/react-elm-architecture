const { FuseBox, TypeScriptHelpers, SourceMapPlainJsPlugin } = require('fuse-box')

const fuseBox = FuseBox.init({
  homeDir : "./src",
  outFile : "./build/bundle.js",
  sourceMap: {
    bundleReference: "./sourcemaps.js.map",
    outFile: "./build/sourcemaps.js.map",
  },
  alias: {
    'react-elm': 'react-elm/src/index.ts'
  },
  plugins: [
    SourceMapPlainJsPlugin()
  ]
})

fuseBox.devServer(`>index.ts`, {
  root: './',
  port: 8080
});
