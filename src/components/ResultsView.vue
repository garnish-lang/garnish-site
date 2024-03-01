<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'

const store = useAppStore()
</script>

<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="execution in store.executions" :key="execution.execution_no" :text="execution.script"
                         :title="execution.result">
        <template v-slot:text>
          <p v-if="execution.input_script">{{ execution.input_script }}</p>
          <p>{{ execution.script }}</p>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>