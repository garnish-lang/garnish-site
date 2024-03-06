<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const lineExamples = [
  AppScript.make("line", "@@ This script adds 5 and 5 together\n5 + 5")
]

const annotations = [
  AppScript.make("def", "@Def add_5 { $ + 5 }\n\nadd_5 ~ 5")
]
</script>

<template>
  <Page title="Annotations">
    <PageSection>
      <template v-slot:left>
        <h2>Line Annotations</h2>
        <p>
          Garnish's versions of comments. Any text after <code class="v-code">@@</code> and until the end of the line,
          will be drop during compilation and not be executed.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="lineExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Annotations</h2>
        <p>
          Use a single <code class="v-code">@</code> symbol followed by, with no space, an identifier creates an annotation.
          Like line annotations, by default, these will be dropped during compilation. However, these can be pre processed by
          the application executing Garnish code to modify the script before compilation.
        </p>
        <p>
          This site supports the <code class="v-code">@Def</code> annotation. It expects an identifier and a nested
          expression, shown in 'def' example. During execution, the given identifier will resolve to the given nested
          expression, allowing you to use the apply operations on it.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="annotations" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>