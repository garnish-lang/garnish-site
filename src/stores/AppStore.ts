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
  const saved = JSON.parse(localStorage.getItem('state'))

  const scripts = ref<AppScript[]>(saved?.scripts
      ?.map((s) => Object.assign(new AppScript(''), s))
    || [new AppScript('script_1')])
  const executions = ref<ExecutionResult[]>(saved?.executions
      ?.map((e) => Object.assign(new ExecutionResult('', '', '', ''), e))
    || [])
  const currentScript = ref<number>(saved?.currentScript || 0)
  const inputScript = ref<number | null>(saved?.inputScript || null)
  const executionsLimit = ref(100)

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

    if (inputScript.value !== null && scripts.value[inputScript.value]) {
      input = scripts.value[inputScript.value].script
      garnishScript.set_input(input)
    }

    executions.value.push(new ExecutionResult(script.name, script.script, getExecutionResult(garnishScript), input))
    if (executions.value.length > executionsLimit.value) {
      executions.value.splice(0, 1)
    }

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