//registerApplication注册子应用模块，启动项目模块
import { registerApplication, start } from "single-spa";

//注册一个名为@single-spa/welcome的子应用
registerApplication({
	name: "@single-spa/welcome", //应用名称

	//应用的导⼊函数，⽀持使用System.import()函数，本实例为线上子应用地址
	app: () =>System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),

	//为应用绑定的路由地址，默认的single-spa为路由分发模式
    //路由匹配规则为模糊匹配，符合/**规则时该子应用均会被渲染到视图中
	activeWhen: ["/"],
});

//增加子应用示例
// registerApplication({
//   name: "@base/navbar",
//   app: () => System.import("@base/navbar"),
//   activeWhen: ["/"]
// });

//启动基座服务
start({
	urlRerouteOnly: true,
});
