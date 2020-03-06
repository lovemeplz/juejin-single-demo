const StatsPlugin = require('stats-webpack-plugin');
module.exports = {
  publicPath: "//localhost:3000/",
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
      extract: false
  },
  configureWebpack: {
      output: {
          library: "vue1", // 导出名称
          libraryTarget: "window", //挂载目标
      },
      plugins: [
        new StatsPlugin('manifest.json', {
            chunkModules: false,
            entrypoints: true,
            source: false,
            chunks: false,
            modules: false,
            assets: false,
            children: false,
            exclude: [/node_modules/]
        }),
      ]
  },
  devServer: {
      contentBase: './',
      compress: true,
      disableHostCheck: true,
      headers: {"Access-Control-Allow-Origin":"*"}
  }
};

