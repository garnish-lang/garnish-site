<script setup lang="ts">
const outerProps = withDefaults(defineProps<{
  tooltip: string,
  icon: string,
  disabled?: boolean
}>(), {
  disabled: false
})

defineEmits(['click'])
</script>

<template>
  <v-tooltip :text="outerProps.tooltip" location="top">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" :icon="outerProps.icon" :disabled="outerProps.disabled" @click="$emit('click')"></v-btn>
    </template>
  </v-tooltip>
</template>

<style scoped>

</style>