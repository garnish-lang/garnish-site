<script setup lang="ts">

import Page from '@/pages/Page.vue'
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" md="6">
      <slot name="left"/>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <slot name="right"/>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>