<script setup lang="ts">
import AppTitleBar from './components/AppTitleBar.vue';
</script>

<template>
  <main class="app-shell">
    <AppTitleBar />

    <section class="workspace">
      <div class="welcome">
        <span class="eyebrow">YOUR LOCAL WORKSPACE</span>
        <h1>开始写作。</h1>
        <p>一个简洁、专注于 Markdown 的本地编辑器。</p>
      </div>
    </section>

    <footer class="status-bar">
      <span>Markdown</span>
      <span>UTF-8</span>
      <span>就绪</span>
    </footer>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  font-family: Inter, 'Noto Sans CJK SC', 'Microsoft YaHei', sans-serif;
  color: #252a32;
}

button {
  font: inherit;
}

.app-shell {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f7f8fa;
}

.workspace {
  flex: 1;
  min-height: 0;
  display: grid;
  place-items: center;
}

.welcome {
  width: min(520px, calc(100% - 48px));
}

.eyebrow {
  color: #7a8493;
  font-size: 11px;
  letter-spacing: 0.14em;
}

.welcome h1 {
  margin: 16px 0 12px;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.welcome p {
  color: #737d8b;
  font-size: 14px;
  line-height: 1.8;
}

.status-bar {
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 12px;
  border-top: 1px solid #e6e9ee;
  background: #fff;
  color: #737d8b;
  font-size: 11px;
}
</style>
