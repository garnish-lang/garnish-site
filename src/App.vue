<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, ref, toRaw, toRef, toValue } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'
import ResultsView from '@/components/ResultsView.vue'
import { useAppStore } from '@/stores/AppStore'

const store = useAppStore()
const rail = ref(false)
const inputScriptOptions = computed(() => {
  let items = [];

  for (let [i, script] of toRaw(store.scripts).entries()) {
    items.push({
      title: script.name,
      value: i
    })
  }

  return items
})

function handleInputSelection(item) {
  store.setInputScript(item?.value || null)
}

function handleScriptSelection(item) {
  store.setCurrentScript(item)
}

function deleteScript() {
  store.deleteScript(store.currentScript)
}
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
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer app :height="750">
      <v-row>
        <v-col>
          <v-btn block size="x-small" variant="text">
            <v-icon icon="mdi-arrow-split-horizontal"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="overflow-hidden">
          <v-tabs show-arrows @update:model-value="handleScriptSelection" :model-value="store.currentScript">
            <v-tab v-for="[index, script] in store.scripts.entries()" :key="script.name" :value="index">
              {{ script.name }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <v-btn size="large" variant="tonal" block>New</v-btn>
            </v-col>
            <v-col>
              <v-btn size="large" variant="tonal" block>Rename</v-btn>
            </v-col>
            <v-col>
              <v-btn size="large" variant="tonal" block @click.stop="deleteScript">Delete</v-btn>
            </v-col>
            <v-col>
              <v-combobox label="Input Script" clearable variant="solo-filled"
                          density="comfortable"
                          @update:model-value="handleInputSelection"
                          :items="inputScriptOptions">
              </v-combobox>
            </v-col>
            <v-col>
              <v-btn size="large" variant="tonal" block>Execute</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="no-scroll" align-items="stretch">
        <v-col>
          <CodeEditor />
        </v-col>
        <v-col class="scrollable">
          <ResultsView />
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-footer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: start;
  padding: 1rem;
}

.v-footer > .v-row:nth-child(1), .v-footer > .v-row:nth-child(2) {
  flex-grow: 0;
}

.no-scroll {
  overflow: hidden;
}

.scrollable {
  overflow-y: scroll;
  max-height: 100%;
}

</style>
