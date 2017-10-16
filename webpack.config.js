const path = require('path');
const args = require('yargs').argv;
const build = args.p;

module.exports = {
    entry: "./src/index.ts",
    output: {
      path: build ? path.join(__dirname, 'dist/') : path.join(__dirname, 'test/_dev/'),
      filename: 'rxidb.js',
      libraryTarget: 'var',
      library: 'RxIDB'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, loader: "ts-loader", exclude: /node_nmodules/ }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'test/_dev'),
      historyApiFallback: true
  }
}