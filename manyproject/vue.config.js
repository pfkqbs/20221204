// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
// });
const path = require('path')
// const debug = process.env.NODE_ENV !== 'production'
console.log(process.env.VUE_APP_AAA)
module.exports = {
    lintOnSave:false,  // 修改成false 就是不检查了

    pages:{
      index:{
        entry:`src/project/${process.env.VUE_APP_AAA}/main.js`
      },
      // subpage:"src/project/projectB/main.js"
    },
    // 配置 scss
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/styles/${process.env.VUE_APP_AAA}/index.scss";`
        }
      }
    },
    // css: {
    //   loaderOptions: {
    //     scss: {
    //       additionalData: `@import "~@/styles/main.scss";`
    //     }
    //   }
    // },
    chainWebpack: config => {
      config.module.rules.delete('svg'); //重点:删除默认配置中处理svg,
      config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(path.resolve('src/icon/svg')) //处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]',
        });
  },
    configureWebpack: (config) => {
      config.resolve = { // 配置解析别名
        extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@m': path.resolve(__dirname, './src/module')
        }
      } 
    }
    // publicPath: '/', // 根域上下文目录
    // outputDir: 'dist', // 构建输出目录
    // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    // lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    // runtimeCompiler: true, // 运行时版本是否需要编译
    // transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    // productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    // configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    //     if (debug) { // 开发环境配置
    //         config.devtool = 'cheap-module-eval-source-map'
    //     } else { // 生产环境配置
    //     }
    //     // Object.assign(config, { // 开发生产共同配置
    //     //     resolve: {
    //     //         alias: {
    //     //             '@': path.resolve(__dirname, './src'),
    //     //             '@c': path.resolve(__dirname, './src/components'),
    //     //             'vue$': 'vue/dist/vue.esm.js'
    //     //         }
    //     //     }
    //     // })
    // },
    // chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    //     if (debug) {
    //         // 本地开发配置
    //     } else {
    //         // 生产开发配置
    //     }
    // },
    // parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    // pluginOptions: { // 第三方插件配置
    // },
    // pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // },
    // devServer: {
    //     open: true,
    //     host: 'localhost',
    //     port: 8080,
    //     https: false,
    //     hotOnly: false,
    //     proxy: { // 配置跨域
    //         '/api': {
    //             target: '',	//接口域名
    //             ws: true,	//是否代理websockets
    //             changOrigin: true,	//是否跨域
    //             pathRewrite: {		//重置路径
    //                 '^/api': ''
    //             }
    //         }
    //     },
    //     before: app => { }
    // }
}


