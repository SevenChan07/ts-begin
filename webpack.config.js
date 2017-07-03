const path = require('path')
const webpack = require('webpack')
const HOST = '0.0.0.0'
const PORT = 3000

module.exports = {
    devServer: {
        inline: true,
        port: PORT,
    },
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    
    plugins:[new webpack.HotModuleReplacementPlugin()],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        react: 'var React',
    },
};