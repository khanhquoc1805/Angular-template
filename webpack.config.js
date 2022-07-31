const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    output: {
        publicPath: "./",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "The Coffee House App",
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.svg$/,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, "src/assets"),
        },
    },
};
