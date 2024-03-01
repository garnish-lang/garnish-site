import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ExecutionResult, AppScript } from '@/stores/types'

export const useAppStore = defineStore('app', () => {
  const scripts = ref<AppScript[]>([
    new AppScript("Script 1"),
    new AppScript("Script 2"),
    new AppScript("Script 3"),
    new AppScript("Script 4"),
    new AppScript("Script 5"),
    new AppScript("Script 6"),
    new AppScript("Script 7"),
    new AppScript("Script 8"),
    new AppScript("Script 9"),
    new AppScript("Script 10"),
  ])
  const executions = ref<ExecutionResult[]>([
    new ExecutionResult("Script 1", "$ + 5", "10", "5"),
    new ExecutionResult("Script 1", "$ + 5", "20", "15"),
    new ExecutionResult("Script 1", "$ + 5", "30", "25"),
    new ExecutionResult("Script 1", "$ + 5", "40", "35"),
    new ExecutionResult("Script 1", "$ + 5", "50", "45"),
    new ExecutionResult("Script 1", "$ + 5", "60", "55"),
    new ExecutionResult("Script 1", "$ + 5", "70", "65"),
    new ExecutionResult("Script 1", "$ + 5", "80", "75"),
    new ExecutionResult("Script 1", "$ + 5", "90", "85"),
    new ExecutionResult("Script 1", "$ + 5", "100", "95"),
  ])
  const currentScript = ref<number>(0)
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

  function updateScript(index: number, text: string) {
    scripts.value[index].script = text
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

  function setCurrentScript(index: number) {
    currentScript.value = index
  }

  return {
    scripts,
    executions,
    currentScript,
    inputScript,
    newScript,
    deleteScript,
    renameScript,
    updateScript,
    executeScript,
    setCurrentScript,
    setInputScript,
  }
})