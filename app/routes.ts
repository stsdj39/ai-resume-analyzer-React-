// 简化写法实际上在底层仍然会被转换成标准的 React Router 配置。它使用了一些约定和工具函数：
// index() 函数自动创建根路由 "/"
// route() 函数接受两个参数：路由路径和组件文件路径
// 在构建时，这些配置会被转换成标准的 React Router 配置
// 这种方式类似于 Next.js 的文件系统路由，让开发者可以用更少的代码完成路由配置
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("auth", "routes/auth.tsx"),
] satisfies RouteConfig;
