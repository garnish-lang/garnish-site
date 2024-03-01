<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import CodeEditor from '@/components/CodeEditor.vue'
import ResultsView from '@/components/ResultsView.vue'

const rail = ref(false)
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
          <v-tabs show-arrows>
            <v-tab v-for="i in 10" :key="i" :value="'script' + i">
              Script {{ i }}
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
              <v-btn size="large" variant="tonal" block>Delete</v-btn>
            </v-col>
            <v-col>
              <v-combobox label="Input Script" clearable variant="solo-filled"
                          density="comfortable"
                          :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']">
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
