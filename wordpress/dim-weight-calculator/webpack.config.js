import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'calculator.js',
    library: 'DimWeightCalculator',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'calculator.css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    '@wordpress/element': 'wp.element',
  },
};