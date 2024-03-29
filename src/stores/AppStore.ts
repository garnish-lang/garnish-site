import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ExecutionResult, AppScript } from '@/stores/types'
import { GarnishScript } from 'browser_garnish'
import { he } from 'vuetify/locale'

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
    || [new AppScript('new_script')])
  const executions = ref<ExecutionResult[]>(saved?.executions
      ?.map((e) => Object.assign(new ExecutionResult('', '', '', ''), e))
    || [])
  const currentScript = ref<number>(saved?.currentScript || 0)
  const inputScript = ref<number | null>(saved?.inputScript || null)
  const executionsLimit = ref(100)
  const footerHeight = ref(saved?.footerHeight || 400)

  function newScript(name: string, text: string | null = null) {
    let s = new AppScript(name)
    if (text !== null) {
      s.script = text
    }
    scripts.value.push(s)
  }

  function deleteScript(index: number) {
    if (index === inputScript.value) {
      inputScript.value = null;
    }

    scripts.value.splice(index, 1)
    if (scripts.value.length === 0) {
      newScript('new_script')
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
    let script = scripts.value[index]
    executeDefinedScript(
      script as AppScript,
      inputScript.value !== null ? scripts.value[inputScript.value] as AppScript : null
    )
  }

  function executeDefinedScript(script: AppScript, input: AppScript | null = null) {
    let garnishScript = new GarnishScript(script.name, script.script)
    if (input !== null) {
      garnishScript.set_input(input.script)
    }

    executions.value.push(new ExecutionResult(script.name, script.script, getExecutionResult(garnishScript), input?.script || null))
    if (executions.value.length > executionsLimit.value) {
      executions.value.splice(0, 1)
    }

    garnishScript.free()

  }

  function clearExecutions() {
    executions.value = []
  }

  function setInputScript(index: number | null) {
    inputScript.value = index
  }

  function setCurrentScript(index: number) {
    currentScript.value = index
  }

  function setFooterHeight(height: number) {
    footerHeight.value = height
  }

  return {
    scripts,
    executions,
    currentScript,
    inputScript,
    footerHeight,
    newScript,
    deleteScript,
    renameScript,
    updateScript,
    executeScript,
    executeDefinedScript,
    clearExecutions,
    setCurrentScript,
    setInputScript,
    setFooterHeight,
  }
})