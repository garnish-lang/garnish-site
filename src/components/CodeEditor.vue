<script setup lang="ts">

const model = defineModel()

function onKeyDown(e: KeyboardEvent) {
  if (e.code === 'Tab') {
    e.preventDefault()
    e.stopPropagation()
    let area = e.target as HTMLTextAreaElement
    area.value = area.value + '  '
    model.value = area.value
  }
}

function onInput(e: Event) {
  let area = e.target as HTMLTextAreaElement
  model.value = area.value
}
</script>

<template>
<textarea v-model="model" @input="onInput" @keydown="onKeyDown" placeholder="$ + 5...">
</textarea>
</template>

<style scoped>
textarea {
  resize: none;
  outline: none;
  height: 100%;
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