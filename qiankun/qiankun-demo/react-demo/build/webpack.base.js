// webpack.base.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  // 入口文件
  entry: path.resolve(__dirname, '../src/index.tsx'),
  // 打包文件出口
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.resolve(__dirname, '../dist'), // 打包的出口文件夹路径
    publicPath: isDev ? '/' : './', // 打包后文件的公共前缀路径
    // 把微应用打包成 umd 库格式
    library: `react-app`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: 'webpackJsonp_react-app',// webpack5 更改为 chunkLoadingGlobal
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
        use: ['thread-loader', 'babel-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, // 此处不可将svg转换base64格式，会导致svg-sprite-loader无法正常转换svg
        type: "asset",
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          }
        },
        generator: {
          filename: 'static/images/[name].[contenthash:6][ext]'
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/fonts/[name].[contenthash:6][ext]', // 文件输出目录和命名
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: path.resolve(__dirname, "../src/icons"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        options: {
          symbolId: "icon-[name]" //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
        }
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        exclude: path.resolve(__dirname, "../src/icons"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 10000,
              outputPath: "font",
              publicPath: "font"
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/media/[name].[contenthash:6][ext]', // 文件输出目录和命名
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
    }),
  ],
  // 开启webpack持久化存储缓存
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
}
