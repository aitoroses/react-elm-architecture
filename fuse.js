const { FuseBox, TypeScriptHelpers, SourceMapPlainJsPlugin } = require('fuse-box')

const fuseBox = FuseBox.init({
  homeDir : "./src",
  outFile : "./build/bundle.js",
  sourceMap: {
    bundleReference: "./sourcemaps.js.map",
    outFile: "./build/sourcemaps.js.map",
  },
  plugins: [
    SourceMapPlainJsPlugin()
  ]
})

fuseBox.devServer(">index.ts [**/*.ts] [**/*.tsx] +react-dom +react", {
  root: './',
  port: 8080
});
