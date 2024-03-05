<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make("shift_left", "$ << 4"),
  AppScript.make("shift_right", "$ >> 4"),
  AppScript.make("and", "$ & 260"),
  AppScript.make("or", "$ | 4"),
  AppScript.make("xor", "$ ^ 260"),
  AppScript.make("input", "256"),
]
</script>

<template>
  <Page title="Bitwise Operations">
    <PageSection>
      <template v-slot:left>
        <p>
          Bitwise operations for shifting and performing bit logic.
        </p>
        <dl>
          <dd><code class="v-code"><<</code> - Shift Left</dd>
          <dd><code class="v-code">>></code> - Shift Right</dd>
          <dd><code class="v-code">$</code> - And</dd>
          <dd><code class="v-code">|</code> - Or</dd>
          <dd><code class="v-code">^</code> - Xor</dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="examples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>