<script setup lang="ts">

</script>

<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="i in 10" :key="i" text="Source script text" :title="'Result ' + i"></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>