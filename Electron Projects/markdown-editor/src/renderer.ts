/* 
renderer.ts
用于 handle Electron 渲染进程
*/
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

createApp(App).mount('#app');
