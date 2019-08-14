module.exports = {
  transpileDependencies: ["vuex-module-decorators"],
  publicPath: process.env.VUE_APP_TARGET_BUILD,

  lintOnSave: process.env.NODE_ENV !== "production",

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
};
