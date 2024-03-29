<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'
import ResultsView from '@/components/ResultsView.vue'
import { useAppStore } from '@/stores/AppStore'

const store = useAppStore()
const rail = ref(true)
const overlayTitle = ref<string | null>(null)

const newScriptName = defineModel<string>()

const showOverlay = computed(() => overlayTitle.value !== null)

const dragging = ref(false)
const dragStartY = ref(0)
const lastSelected = ref(store.currentScript)

const namePattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/
const nameRules = [
  (value: string) => namePattern.test(value) || 'Names can only contain alphanumeric and underscore characters',
  (value: string) => (store.scripts.find((script) => script.name === value) === undefined) || 'Script name already taken'
]

const inputScriptOptions = computed(() => {
  let items = []

  for (let i = 0; i < store.scripts.length; i++) {
    items.push({
      title: store.scripts[i].name,
      value: i
    })
  }

  return items
})

function handleInputSelection(item) {
  store.setInputScript(item?.value || null)
}

function handleScriptSelection(item) {
  if (item !== -1) {
    lastSelected.value = item
  }
  store.setCurrentScript(item)
}

function deleteScript(index: number) {
  store.deleteScript(index)
}

function closeOverlay() {
  overlayTitle.value = null
  newScriptName.value = ''
  store.setCurrentScript(lastSelected.value)
}

function finishNameOverlay() {
  if (!newScriptName.value) {
    overlayTitle.value = null
    newScriptName.value = ''
    return
  }

  if (overlayTitle.value === 'New Script') {
    let newIndex = store.scripts.length
    store.newScript(newScriptName.value)
    store.setCurrentScript(newIndex)
  } else {
    store.renameScript(store.currentScript, newScriptName.value)
  }

  overlayTitle.value = null
  newScriptName.value = ''
}

function setCreateOverlay() {
  overlayTitle.value = 'New Script'
}

function setRenameOverlay() {
  overlayTitle.value = `Renaming "${store.scripts[store.currentScript].name}"`
}

function executeScript() {
  store.executeScript(store.currentScript)
}

function executionListSelect(value) {
  if (value.id === 'clear') {
    store.clearExecutions()
  }
}

function startDrag(e: MouseEvent) {
  dragging.value = true
  dragStartY.value = e.y
}

function drag(e: MouseEvent) {
  if (dragging.value) {
    let dif = dragStartY.value - e.y
    store.footerHeight += dif

    const maxHeight = window.innerHeight - 65

    if (store.footerHeight < 250) {
      store.footerHeight = 250
    } else if (store.footerHeight >= maxHeight) {
      store.footerHeight = maxHeight
    }

    dragStartY.value = e.y
  }
}

function endDrag(e: MouseEvent) {
  dragging.value = false
}

store.$subscribe((mutation, state) => {
  localStorage.setItem('state', JSON.stringify(state))
})

</script>

<template>
  <v-app @mousemove="drag" @mouseup="endDrag">

    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="rail = !rail"></v-app-bar-nav-icon>
      <v-app-bar-title>The Garnish Language</v-app-bar-title>
    </v-app-bar>
    <v-footer app :height="store.footerHeight">
      <v-row>
        <v-col>
          <v-btn block size="x-small" variant="text" @mousedown="startDrag">
            <v-icon icon="mdi-arrow-split-horizontal"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" class="script-area">

          <v-tabs show-arrows @update:model-value="handleScriptSelection" :model-value="store.currentScript">
            <v-tab class="script-name" @click="setCreateOverlay" key="create" :value="-1">
              <v-icon icon="mdi-plus" size="24" />
            </v-tab>
            <v-tab class="script-tab script-name"
                   v-for="[index, script] in store.scripts.entries()"
                   @dblclick="setRenameOverlay"
                   :key="script.name"
                   :value="index">
              {{ script.name }}
              <v-btn icon="mdi-close-circle"
                     @click.prevent.stop="deleteScript(index)"
                     size="small"
                     elevation="0"
                     density="compact"></v-btn>
            </v-tab>
          </v-tabs>
          <CodeEditor />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-row>
            <v-col>
              <v-combobox label="Input" clearable variant="solo-filled"
                          density="comfortable"
                          :model-value="store.inputScript"
                          @update:model-value="handleInputSelection"
                          :items="inputScriptOptions">
              </v-combobox>
            </v-col>
            <v-col>
              <v-btn-group>
                <v-btn size="large" variant="tonal" @click="executeScript" color="primary">Execute</v-btn>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" size="large" variant="tonal" icon="mdi-dots-vertical"
                           color="secondary"></v-btn>
                  </template>
                  <v-list @click:select="executionListSelect"
                          :items="[{title: 'Clear Executions', value: 'clear'}]">
                  </v-list>
                </v-menu>
              </v-btn-group>
            </v-col>
          </v-row>
          <ResultsView />
        </v-col>
      </v-row>
      <v-overlay v-model="showOverlay" class="align-center justify-center" contained @click:outside="closeOverlay">
        <v-sheet class="overlay-main">
          <v-form @submit.prevent="finishNameOverlay">
            <v-container>
              <v-row>
                <v-col>
                  <h4 class="text-h4 text-center">{{ overlayTitle }}</h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field autofocus v-model="newScriptName" placeholder="Name" :rules="nameRules"></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col class="flex-grow-0">
                  <v-btn @click="closeOverlay" variant="tonal" color="error">Cancel</v-btn>
                </v-col>
                <v-col class="flex-grow-0">
                  <v-btn type="submit" @click="finishNameOverlay" variant="tonal" color="primary">Finish</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-sheet>
      </v-overlay>
    </v-footer>
    <v-navigation-drawer v-model="rail">
      <v-list-item link title="Introduction" to="/" prepend-icon="mdi-home"></v-list-item>
      <v-list-item link title="Primer" to="/primer" prepend-icon="mdi-alpha"></v-list-item>
      <v-list-item link title="Basic Types" to="/basic-types" prepend-icon="mdi-chart-arc"></v-list-item>
      <v-list-item link title="Container Types" to="/container-types"
                   prepend-icon="mdi-package-variant-closed"></v-list-item>
      <v-list-item link title="Math" to="/math-ops" prepend-icon="mdi-plus-minus-variant"></v-list-item>
      <v-list-item link title="Bitwise" to="/bitwise" prepend-icon="mdi-numeric-10"></v-list-item>
      <v-list-item link title="Comparisons" to="/comparisons" prepend-icon="mdi-greater-than-or-equal"></v-list-item>
      <v-list-item link title="Logic" to="/logic" prepend-icon="mdi-ampersand"></v-list-item>
      <v-list-item link title="Conditionals" to="/conditionals" prepend-icon="mdi-progress-question"></v-list-item>
      <v-list-item link title="Expressions" to="/expressions" prepend-icon="mdi-code-braces"></v-list-item>
      <v-list-item link title="Side Effects" to="/side-effects" prepend-icon="mdi-code-brackets"></v-list-item>
      <v-list-item link title="Annotations" to="/annotations" prepend-icon="mdi-at"></v-list-item>
      <v-list-item link title="*fix Operations" to="/fix-operations" prepend-icon="mdi-asterisk"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>

  </v-app>
</template>

<style scoped>
.v-footer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: start;
  padding: 1rem;
  transition: none;
}

.v-footer > .v-row:nth-child(1) {
  flex-grow: 0;
}

.no-scroll {
  overflow: hidden;
}

.scrollable {
  overflow-y: scroll;
  max-height: 100%;
}

.overlay-main {
  width: 30vw;
}

.script-tab .v-btn {
  margin-left: 1rem;
  opacity: .1;
  transition: opacity .5s;
}

.script-tab:hover .v-btn {
  opacity: .25;
}

.script-tab .v-btn:hover {
  opacity: 1;
}

.script-area {
  display: flex;
  flex-direction: column;
}

.script-area > .v-tabs {
  flex-grow: 0;
}

.script-area > textarea {
  flex-grow: 1
}

</style>
