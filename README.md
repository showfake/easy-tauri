# Nuxt Minimal Starter

该项目作为一个脚手架可以下载就可以开发，免去搭建环境，配置项目的各种问题，专注开发业务

Nuxt3 + vant4 + Tauri + pnpm + Tailwind CSS + Vue3 + TypeScript
相关文档地址

Nuxt3：https://nuxt.com.cn/docs/getting-started/introduction

Vant4: https://vant-ui.github.io/vant/#/zh-CN/home

Tailwind CSS: https://tailwindcss.com/

Vue3: https://cn.vuejs.org/

Tauri2: https://v2.tauri.app/zh-cn/start/frontend/nuxt/


先安装依赖

```bash
pnpm install
```
桌面端启动
```bash
pnpm tauri dev
```
移动端安卓启动
```bash
pnpm tauri android init
pnpm tauri android dev
```
构建
```bash
pnpm tauri build
```
移动端安卓构建
```bash
pnpm tauri android build
```
### 修改app名称：
需要修改src-tauri/tauri.conf.json下"productName":对应的值，以及identifier的值

## 待办
- [ ] 封装http客户端：https://v2.tauri.app/zh-cn/plugin/http-client/
- [ ] 通用错误页面
- [ ] ios测试启动和打包