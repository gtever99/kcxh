const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api_": {
        target: "http://10.8.1.3:8088",
        changeOrigin: true,
        pathRewrite: {
          "^/api_": ""
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })]
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })]
      })
    ]
  }
});
