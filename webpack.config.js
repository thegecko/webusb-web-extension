const path = require('path');
const copy = require('copy-webpack-plugin');

const common = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: {
        vscode: 'commonjs vscode'
    }
};

const config = [
    {
        ...common,
        target: 'webworker',
        entry: {
            extension: './src/browser/extension.ts'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist', 'browser'),
            libraryTarget: 'commonjs'
        }
    },
    {
        ...common,
        target: 'web',
        entry: {
            devices: './src/views/webusb-view.ts'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist', 'views')
        },
        plugins: [
            new copy({
                patterns: [
                    {
                        from: 'node_modules/@vscode/webview-ui-toolkit/dist/toolkit.min.js'
                    }
                ]
            })
        ]
    }
];

module.exports = (_env, argv) => {
    if (argv.mode === 'development') {
        config.forEach(entry => entry.devtool = 'source-map');
    }

    return config;
};
