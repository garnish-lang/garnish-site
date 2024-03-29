<script setup lang="ts">

import { useAppStore } from '@/stores/AppStore'
import { computed } from 'vue'

const store = useAppStore();
const text = computed(() => store.scripts[store.currentScript]?.script || "")

function onKeyDown(e: KeyboardEvent) {
  if (e.code === 'Tab') {
    e.preventDefault()
    e.stopPropagation()
    let area = e.target as HTMLTextAreaElement
    area.value = area.value + '  '
    store.updateScript(store.currentScript, area.value)
  }
}

function onInput(e: Event) {
  let area = e.target as HTMLTextAreaElement
  store.updateScript(store.currentScript, area.value)
}
</script>

<template>
<textarea :value="text" @input="onInput" @keydown="onKeyDown" placeholder="$ + 5...">
</textarea>
</template>

<style scoped>
textarea {
  resize: none;
  outline: none;
  width: 100%;
  padding: .5rem;
  font-family: monospace;
  background-color: rgba(var(--v-theme-surface-light), var(--v-idle-opacity));
  border: 1px rgba(var(--v-border-color), var(--v-border-opacity)) solid;
}

textarea:focus {
  border-color: rgba(var(--v-border-color), var(--v-medium-emphasis-opacity));
}
</style>