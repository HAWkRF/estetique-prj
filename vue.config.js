const path = require("path");

// vue.config.js
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    publicPath: "./",
    outputDir: path.resolve(__dirname, "dist/"),
}