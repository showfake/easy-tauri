// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

const isMobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM || '')
const host = process.env.NUXT_HMR_HOST || process.env.TAURI_DEV_HOST || undefined
export default defineNuxtConfig({
    modules: ['@vant/nuxt', '@nuxtjs/tailwindcss'],
    css: ['@/assets/vant-theme.css', '@/assets/base.css'],
    compatibilityDate: '2025-05-15',
    // （可选） 启用 Nuxt 调试工具
    devtools: {enabled: false},
    // 启用 SSG
    ssr: false,
    // 使开发服务器能够被其他设备发现，以便在 iOS 物理机运行。
    devServer: {
        host: isMobile ? '0.0.0.0' : undefined,
    },
    ignore: [
        '**/src-tauri/**',
        '**/node_modules/**',
        '**/dist/**',
        '**/.git/**',
        '**/.nuxt/**',
        '**/.output/**',
    ],
    hooks: {
        // [BUG] https://github.com/tauri-apps/tauri/issues/11165
        'vite:extend': host && isMobile
            ? ({ config }) => {
                if (config.server && config.server.hmr && config.server.hmr !== true) {
                    config.server.hmr.protocol = 'ws'
                    config.server.hmr.host = host
                    config.server.hmr.port = 3000
                }
            }
            : undefined,
    },
    vite: {
        // 为 Tauri 命令输出提供更好的支持
        clearScreen: false,
        // 启用环境变量
        // 其他环境变量可以在如下网页中获知：
        // https://v2.tauri.app/reference/environment-variables/
        envPrefix: ['VITE_', 'TAURI_'],
        server: {
            watch: {
                ignored: ['**/src-tauri/**'],
                usePolling: true,
            },
            strictPort: true,
        },
    },
})