export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  /**
   * 自基础库版本 2.11.1 起，小程序支持有选择地注入必要的代码，以降低小程序的启动时间和运行时内存。
   * {@link https://taro-docs.jd.com/taro/docs/app-config#lazycodeloading  lazyCodeLoading}
   */
  lazyCodeLoading: "requiredComponents",
};
