<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'

const rangeExamples = [

]

const pairExamples = [

]

const listExamples = [

]

const concatenationExamples = [

]

const sliceExamples = [

]
</script>

<template>
  <Page title="Container Types">
    <PageSection>
      <template v-slot:left>
        <h2>Ranges</h2>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="rangeExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Pairs</h2>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="pairExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Lists</h2>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="listExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Concatenations</h2>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="concatenationExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Slices</h2>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="sliceExamples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>