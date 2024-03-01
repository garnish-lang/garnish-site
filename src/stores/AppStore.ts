import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ExecutionResult, AppScript } from '@/stores/types'

export const AppStore = defineStore('app', () => {
  const scripts = ref<AppScript[]>([])
  const executions = ref<ExecutionResult[]>([])
  const inputScript = ref<number | null>(null)

  function newScript(name: string) {
    scripts.value.push(new AppScript(name))
  }

  function deleteScript(index: number) {
    scripts.value.splice(index, 1)
  }

  function renameScript(index: number, name: string) {
    scripts.value[index].name = name
  }

  function executeScript(index: number) {
    console.log('executing script ', scripts.value[index])

    if (inputScript.value !== null) {
      console.log('with input ', scripts.value[inputScript.value])
    }
  }

  function setInputScript(index: number | null) {
    inputScript.value = index
  }

  return {
    scripts,
    executions
  }
})