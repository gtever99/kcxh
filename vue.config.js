const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const pathSrc = path.resolve(__dirname, "src");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: "all",
    // disableHostCheck: true,
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
  css: {
    loaderOptions: {
      sass: {
        // 具体路径根据你们项目来
        additionalData: `
          @use "@/styles/variable.scss" as *;
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        dts: path.resolve(pathSrc, "auto-imports.d.ts")
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })]
      })
    ]
  }
});
