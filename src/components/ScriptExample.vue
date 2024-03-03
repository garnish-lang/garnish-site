<script setup lang="ts">

import { AppScript } from '@/stores/types'
import { computed, ref } from 'vue'
import { useAppStore } from '@/stores/AppStore'
import { CopyCreateFileIcon, ExecuteIcon, ExecuteUserInputIcon, ReplaceFileIcon } from '@/stores/constants'
import ExampleAction from '@/components/ExampleAction.vue'

const store = useAppStore()
const props = withDefaults(defineProps<{
  scripts?: AppScript[]
}>(), {})

const selected = ref(0)

const scripts = computed(() => props.scripts || [])
const selectedCode = computed(() => scripts.value[selected.value]?.script || '')
const selectedNameExists = computed(() => !!store.scripts.find((s) => s.name === scripts.value[selected.value].name))

function execute() {
  let input = scripts.value.find((s) => s.name === "input") || null
  store.executeDefinedScript(scripts.value[selected.value], input)
}

function executeWithUserInput() {
  let input = store.inputScript ? store.scripts[store.inputScript] || null : null
  store.executeDefinedScript(scripts.value[selected.value], input as AppScript)
}

function copyCreate() {
  let script = scripts.value[selected.value]
  store.newScript(script.name, script.script)
}

function replaceScript() {
  store.updateScript(store.currentScript, scripts.value[selected.value]?.script || store.scripts[store.currentScript]?.script || "")
}

</script>

<template>
  <v-card rounded="0">
    <v-toolbar density="compact">
      <v-tabs>
        <v-tab v-for="[index, script] in scripts.entries()" @click="selected = index">
          {{ script.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <ExampleAction tooltip="Replace Current Script" :icon="ReplaceFileIcon" @click="replaceScript" />
      <ExampleAction tooltip="New From Example" :icon="CopyCreateFileIcon" :disabled="selectedNameExists" @click="copyCreate" />
      <ExampleAction tooltip="Execute with User Input" :icon="ExecuteUserInputIcon" @click="executeWithUserInput" />
      <ExampleAction tooltip="Execute with Example Input" :icon="ExecuteIcon" @click="execute" />
    </v-toolbar>
    <v-code>
      {{ selectedCode }}
    </v-code>
  </v-card>
</template>

<style scoped>
.v-code {
  border-radius: 0;
  font-size: 1rem;
  padding: 1rem;
}
</style>