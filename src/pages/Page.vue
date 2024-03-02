<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
}>(), {

})
</script>

<template>
<v-container>
  <v-sheet>
    <v-container>
      <slot name="title">
        <h1>{{ props.title }}</h1>
      </slot>
      <slot></slot>
    </v-container>
  </v-sheet>
</v-container>
</template>

<style scoped>

</style>