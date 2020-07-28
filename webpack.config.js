const path = require('path')

module.exports = {
    entry: {
        main: './main.js'
    },
    mode: 'development',
    // mode: 'production',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            '@babel/plugin-transform-react-jsx',
                            { pragma: 'ToyReact.createElement' }
                        ]]
                    }
                }
            }
        ]
    }
    
}
