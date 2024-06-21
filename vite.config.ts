import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'utilities-lib'
    },
    sourcemap: true,
    target: 'es6',
    minify: false
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '/src')
    }
  },
  plugins: [
    dts({
      outDir: 'dist',
      exclude: ['**/*.test.ts', 'tests/', 'vitest.config.*']
    })
  ]
})
