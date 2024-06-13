// webpack.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Ajoutez d'autres règles de loader au besoin
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './public/index.html',
  //     filename: 'index.html',
  //   }),
  // ],
  // resolve: {
  //   fallback: {
  //     "os": require.resolve("os-browserify/browser")
  //   }
  // }
};
