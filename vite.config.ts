import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

const srcPath = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue
    vue(),
    // vite 按需导入插件
    ViteComponents({
      customComponentResolvers: [
        // 按需导入ant-design-vue及@ant-design/icons-vue
        AntDesignVueResolver({
          importLess: true,
          resolveIcons: true
        })
      ],
      // 自动生成全局的组件声明
      globalComponentsDeclaration: 'src/types/components.d.ts'
    })
  ],
  resolve: {
    alias: [
      // @ -> src
      { find: '@', replacement: srcPath },
      // less 中 ~
      { find: /^~/, replacement: '' }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 导入less变量
        modifyVars: {
          hack: `true; @import (reference) "${srcPath}/variables.less";`
        },
        javascriptEnabled: true
      }
    }
  }
})
