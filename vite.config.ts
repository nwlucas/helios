import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        Vue(),
        Layouts({
            layoutsDir: 'src/layouts'
        }),
        Pages({
            exclude: ['**/components/*.vue'],
            pagesDir: [
                { dir: 'src/pages', baseRoute: '' },
                { dir: 'src/features/**/pages', baseRoute: 'features' },
                { dir: 'src/admin/pages', baseRoute: 'admin' }
            ]
        })
    ]
})
