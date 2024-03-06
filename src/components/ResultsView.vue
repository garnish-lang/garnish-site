<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore'
import { computed, toRaw } from 'vue'

const store = useAppStore()

const reversed = computed(() => {
  let items = []
  for (let i = 0; i < store.executions.length; i++) {
    let exec = store.executions[i]
    items.push({
        script_name: exec.script_name,
        script: exec.script,
        result: exec.result,
        input_script: exec.input_script
    })
  }

  return items.reverse()
})
</script>

<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="execution in reversed" :key="execution.execution_no" :text="execution.script"
                         :title="execution.result">
        <template v-slot:text>
          <v-code v-if="execution.input_script">{{ execution.input_script }}</v-code>
          <v-code v-if="!execution.input_script">()</v-code>
          <v-code>{{ execution.script }}</v-code>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

.v-expansion-panel {
  overflow: hidden;
}

.v-code:first-child {
  margin-bottom: .5rem;
}

</style>