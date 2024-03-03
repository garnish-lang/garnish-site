<script setup lang="ts">

import Page from '@/pages/Page.vue'
</script>

<template>
  <v-row>
    <v-col>
      <slot name="left"/>
    </v-col>
    <v-col>
      <slot name="right"/>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>