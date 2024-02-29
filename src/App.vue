<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const rail = ref(false)
</script>

<template>
  <v-app>
    <v-navigation-drawer :rail="rail" @click="rail = false">
      <v-list-item title="Garnish Tutorial"
                   :prepend-icon="rail ? 'mdi-arrow-expand-right' : 'mdi-arrow-collapse-left'"
                   @click.stop="rail=!rail">
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Welcome" to="/" prepend-icon="mdi-home"></v-list-item>
      <v-list-item link title="Data Types" to="/data-types" prepend-icon="mdi-chart-arc"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer app :height="500">
      <v-row>
        Code Area
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
</style>
