import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ExecutionResult, AppScript } from '@/stores/types'
import { GarnishScript } from 'browser_garnish'

function getExecutionResult(script: GarnishScript): string {
  script.compile()
  if (script.get_error()) {
    return script.get_error()
  }

  script.execute()
  if (script.get_error()) {
    return script.get_error()
  }

  let result = script.get_execution_result(0)

  return script.get_error() ? script.get_error() : result
}

export const useAppStore = defineStore('app', () => {
  const scripts = ref<AppScript[]>([
    new AppScript('script_1')
  ])
  const executions = ref<ExecutionResult[]>([
  ])
  const currentScript = ref<number>(0)
  const inputScript = ref<number | null>(null)

  function newScript(name: string) {
    scripts.value.push(new AppScript(name))
  }

  function deleteScript(index: number) {
    scripts.value.splice(index, 1)
    if (scripts.value.length === 0) {
      newScript('New Script')
    }
    if (currentScript.value >= scripts.value.length) {
      currentScript.value = scripts.value.length - 1
    }
  }

  function renameScript(index: number, name: string) {
    scripts.value[index].name = name
  }

  function updateScript(index: number, text: string) {
    scripts.value[index].script = text
  }

  function executeScript(index: number) {
    let input = null
    let script = scripts.value[index]
    let garnishScript = new GarnishScript(script.name, script.script)
    console.log('executing script ', script)

    if (inputScript.value !== null && scripts.value[inputScript.value]) {
      console.log('with input ', scripts.value[inputScript.value])
      input = scripts.value[inputScript.value].script
      garnishScript.set_input(input)
    }

    executions.value.push(new ExecutionResult(script.name, script.script, getExecutionResult(garnishScript), input))

    garnishScript.free()
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
    setInputScript
  }
})