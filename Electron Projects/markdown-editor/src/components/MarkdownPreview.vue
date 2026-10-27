
<script setup lang="ts">
import { computed } from 'vue';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

const props = defineProps<{
  source: string;
}>();

const parser = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
  typographer: false,
});

const renderedHtml = computed(() => {
  const html = parser.render(props.source);
  return DOMPurify.sanitize(html);
});

function handlePreviewClick(event: MouseEvent) {
  const target = event.target;

  if (!(target instanceof Element)) {
    return;
  }

  // 暂时阻止预览区导航，后续通过 Electron 安全地打开外部链接。
  if (target.closest('a')) {
    event.preventDefault();
  }
}
</script>

<template>
  <div class="preview-scroll" @click="handlePreviewClick">
    <article
      class="markdown-body"
      v-html="renderedHtml"
    />
  </div>
</template>

<style scoped>
.preview-scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 28px 30px 40px;
}

.markdown-body {
  max-width: 720px;
  margin: 0 auto;
  overflow-wrap: anywhere;
  color: #41463f;
  font-size: 14px;
  line-height: 1.9;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  color: #30372f;
  font-family: Georgia, "Noto Serif SC", serif;
  font-weight: 600;
  line-height: 1.4;
}

.markdown-body :deep(h1) {
  margin: 8px 0 22px;
  font-size: 30px;
  letter-spacing: -0.7px;
}

.markdown-body :deep(h2) {
  margin: 32px 0 12px;
  font-size: 22px;
}

.markdown-body :deep(h3) {
  margin: 24px 0 10px;
  font-size: 18px;
}

.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  margin: 20px 0 8px;
  font-size: 15px;
}

.markdown-body :deep(p) {
  margin: 12px 0;
}

.markdown-body :deep(a) {
  color: #637866;
  text-decoration-color: #b6c2b3;
  text-underline-offset: 3px;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 25px;
  margin: 12px 0;
}

.markdown-body :deep(li) {
  padding-left: 4px;
  margin: 4px 0;
}

.markdown-body :deep(blockquote) {
  margin: 22px 0;
  padding: 3px 0 3px 16px;
  border-left: 2px solid #98a794;
  color: #74796f;
}

.markdown-body :deep(code) {
  padding: 2px 5px;
  border: 1px solid #e7e8df;
  border-radius: 4px;
  background: #f0f0e9;
  font-family: "Cascadia Code", "JetBrains Mono", monospace;
  font-size: 0.88em;
}

.markdown-body :deep(pre) {
  overflow-x: auto;
  padding: 16px 18px;
  border: 1px solid #e6e7de;
  border-radius: 8px;
  background: #f3f3ed;
  line-height: 1.7;
}

.markdown-body :deep(pre code) {
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 12px;
}

.markdown-body :deep(hr) {
  height: 1px;
  margin: 28px 0;
  border: 0;
  background: #e4e4dc;
}

.markdown-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  padding: 8px 12px;
  border: 1px solid #e4e4dc;
  text-align: left;
}

.markdown-body :deep(th) {
  background: #f0f0e9;
  font-weight: 600;
}
</style>
