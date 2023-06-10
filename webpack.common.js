const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

function normalizeName(name) {
  if (typeof name !== "string") {
    name = String(name);
  }
    return name
      .replace(/node_modules/g, "nodemodules")
      .replace(/[\-_.|]+/g, " ")
      .replace(/\b(vendors|nodemodules|js|modules|es)\b/g, "")
      .trim()
      .replace(/ +/g, "-");
  }

module.exports = {
  entry: {
        "island1": "./scripts/island1.js",
        claim: "./scripts/claim.js",
        thirdwebtokengate: "./scripts/thirdwebtokengate.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets"),
    chunkFilename: (pathData) => {
        return normalizeName(pathData.chunk.id) + ".js";
      },
  },
  plugins: [new NodePolyfillPlugin()],
};