import {defineConfig} from 'vite'

const {resolve} = require('path')

export default defineConfig({
    base: './',
    server: {
        port: 8080,
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            src: resolve(__dirname, './src')
        }
    },
    build: {
        outDir:'docs', // 配合github静态页的导出目录
        assetsInlineLimit: 0,
    }
})