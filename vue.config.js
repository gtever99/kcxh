const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const pathSrc = path.resolve(__dirname, "src");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: true,
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
  devServer: {
    proxy: {
      [process.env.VUE_APP_PROXY_NAME]: {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_PROXY_NAME}`]: ""
        }
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
