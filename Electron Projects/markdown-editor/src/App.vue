<script setup lang="ts">
import { computed, ref } from 'vue';

const markdown = ref(`# Welcome to Margin

A quiet space for your thoughts.

## Getting started

- Write your ideas on the left
- Preview your content on the right
- Keep writing
`);

const lineCount = computed(() => markdown.value.split('\n').length);

const wordCount = computed(() => {
  const text = markdown.value.trim();
  return text ? text.split(/\s+/).length : 0;
});
</script>

<template>
  <div class="app">
    <header class="topbar">
      <div class="brand">
        <div class="brand-icon">m.</div>
        <div>
          <div class="brand-name">Margin</div>
          <div class="brand-caption">MARKDOWN WORKSPACE</div>
        </div>
      </div>

      <div class="document-name">
        <span class="file-icon">MD</span>
        <span>Untitled.md</span>
        <span class="unsaved-dot" />
      </div>

      <div class="document-status">
        <span class="status-dot" />
        UNSAVED DRAFT
      </div>
    </header>

    <main class="workspace">
      <section class="pane">
        <header class="pane-header">
          <div class="pane-title">
            <span class="pane-number">01</span>
            <h2>Write</h2>
          </div>
          <span class="pane-label">MARKDOWN</span>
        </header>

        <textarea
          v-model="markdown"
          class="editor"
          aria-label="Markdown editor"
          placeholder="Start writing..."
          spellcheck="false"
        />
      </section>

      <div class="divider" />

      <section class="pane">
        <header class="pane-header">
          <div class="pane-title">
            <span class="pane-number">02</span>
            <h2>Preview</h2>
          </div>
          <span class="pane-label">LIVE VIEW</span>
        </header>

        <div class="preview">
          <pre>{{ markdown }}</pre>
        </div>
      </section>
    </main>

    <footer class="statusbar">
      <div>
        MARKDOWN <span class="separator">/</span> UTF-8
      </div>

      <div class="statusbar-right">
        <span>{{ lineCount }} lines</span>
        <span>{{ wordCount }} words</span>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  font-family:
    Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #30342f;
  background: #f5f5f1;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  --background: #f5f5f1;
  --surface: #fbfbf8;
  --border: #e4e4dc;
  --muted: #898b82;
  --accent: #647866;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  margin: 0;
}

body {
  overflow: hidden;
}

.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--background);
}

.topbar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 26px;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
}

.brand-icon {
  display: grid;
  width: 35px;
  height: 35px;
  place-items: center;
  border-radius: 9px;
  background: var(--accent);
  color: white;
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: bold;
}

.brand-name {
  font-size: 15px;
  font-weight: 650;
}

.brand-caption {
  margin-top: 3px;
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 1.4px;
}

.document-name {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
}

.file-icon {
  display: grid;
  width: 26px;
  height: 25px;
  place-items: center;
  border: 1px solid #dce1d8;
  border-radius: 5px;
  background: #edf0e9;
  color: #607362;
  font-size: 9px;
  font-weight: 700;
}

.unsaved-dot,
.status-dot {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #c99a59;
}

.document-status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 1.1px;
}

.workspace {
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr);
  gap: 0;
  min-height: 0;
  padding: 22px 24px;
}

.pane {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}

.pane:first-child {
  border-radius: 9px 0 0 9px;
}

.pane:last-child {
  border-radius: 0 9px 9px 0;
}

.divider {
  background: var(--border);
}

.pane-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  padding: 0 22px;
  border-bottom: 1px solid var(--border);
}

.pane-title {
  display: flex;
  align-items: center;
  gap: 11px;
}

.pane-number {
  color: #a0a196;
  font-family: monospace;
  font-size: 11px;
}

.pane-title h2 {
  margin: 0;
  font-size: 13px;
  font-weight: 650;
}

.pane-label {
  color: #92948b;
  font-size: 9px;
  letter-spacing: 1.2px;
}

.editor {
  display: block;
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 26px;
  border: 0;
  outline: none;
  resize: none;
  background: transparent;
  color: #41463f;
  font-family: "Cascadia Code", "JetBrains Mono", monospace;
  font-size: 13px;
  line-height: 1.9;
  tab-size: 2;
}

.editor::placeholder {
  color: #b0b1a9;
}

.preview {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 26px;
}

.preview pre {
  margin: 0;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  color: #41463f;
  font-family: "Cascadia Code", "JetBrains Mono", monospace;
  font-size: 13px;
  line-height: 1.9;
}

.statusbar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  padding: 0 26px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 10px;
}

.statusbar-right {
  display: flex;
  gap: 16px;
}

.separator {
  margin: 0 8px;
  color: #c1c1b8;
}

@media (max-width: 700px) {
  .topbar {
    padding: 0 14px;
  }

  .brand-caption,
  .document-status {
    display: none;
  }

  .workspace {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) 1px minmax(0, 1fr);
    padding: 12px;
  }

  .pane:first-child,
  .pane:last-child {
    border-radius: 8px;
  }

  .statusbar {
    padding: 0 14px;
  }
}
</style>