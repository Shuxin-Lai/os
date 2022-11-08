import { defineConfig } from 'vite';
import VueMacros from 'unplugin-vue-macros/vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

// import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib/components'),
      '~': resolve(__dirname, 'lib'),
    },
  },
});
