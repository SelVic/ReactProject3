let path = require('path');


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './index.js',
    mode: 'development',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
        //при нескольких энтри
        // filename: '[name].js',
        // path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:[
                            // "@babel/preset-env",
                            "@babel/preset-react",
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            }
        ]
    },
};