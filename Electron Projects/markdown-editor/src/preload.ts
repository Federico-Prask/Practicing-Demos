/*
preload.ts
用于 handle Preload 上下文 在隔离的渲染环境与主进程之间提供受控接口
*/

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('windowControls', {
  minimize: () => ipcRenderer.send('window:minimize'),
  toggleMaximize: () => ipcRenderer.send('window:toggle-maximize'),
  close: () => ipcRenderer.send('window:close'),
});
