<script setup lang="ts">
function minimize() {
  window.windowControls.minimize();
}

function toggleMaximize() {
  window.windowControls.toggleMaximize();
}

function closeWindow() {
  window.windowControls.close();
}
</script>

<template>
  <header class="title-bar">
    <div class="app-name">
      <span class="app-mark">M</span>
      <span>Markdown Studio</span>
    </div>

    <div class="window-controls">
      <button class="window-button" aria-label="最小化" @click="minimize">
        <span class="minimize-icon"></span>
      </button>

      <button
        class="window-button"
        aria-label="最大化或还原"
        @click="toggleMaximize"
      >
        <span class="maximize-icon"></span>
      </button>

      <button
        class="window-button close-button"
        aria-label="关闭"
        @click="closeWindow"
      >
        <span class="close-icon"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.title-bar {
  height: 42px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #252a32;
  color: #e8ebf0;
  user-select: none;
  -webkit-app-region: drag;
}

.app-name {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 14px;
  font-size: 12px;
  letter-spacing: 0.02em;
}

.app-mark {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: #d9e3f2;
  color: #252a32;
  font-weight: 700;
}

.window-controls {
  height: 100%;
  display: flex;
  -webkit-app-region: no-drag;
}

.window-button {
  width: 46px;
  height: 100%;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.window-button:hover {
  background: #414853;
}

.close-button:hover {
  background: #c42b36;
}

.minimize-icon {
  width: 10px;
  height: 1px;
  background: currentColor;
}

.maximize-icon {
  width: 9px;
  height: 9px;
  border: 1px solid currentColor;
}

.close-icon {
  position: relative;
  width: 12px;
  height: 12px;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 0;
  width: 1px;
  height: 12px;
  background: currentColor;
  transform: rotate(45deg);
}

.close-icon::after {
  transform: rotate(-45deg);
}
</style>
