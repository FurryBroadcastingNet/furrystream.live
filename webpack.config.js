const path = require("path");
module.exports = {
    entry: [
        "./_src/index.js"
    ],
    output: {
        filename: "javascript/bundle.js",
        path: path.resolve(__dirname, "assets")
    },
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            '@': path.join(__dirname, "node_modules/kiwiirc/src"),
        }
    },
    module: {
        rules: [
            {
                test: /candy-chat\/.*\.js$/,
                use: ['script-loader']
            },
        ]
    }
}