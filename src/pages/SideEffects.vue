<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make('side_effect', '25 + 5\n\n[ $ * 10 ]\n\n$ - 10')
]
</script>

<template>
  <Page title="Side Effects">
    <PageSection>
      <template v-slot:left>
        <p>
          The final way to group code is with <span class="definition-word">Side Effects</span> by surrounding code in
          brackets, <code class="v-code">[]</code>. A side effect, in general, is a piece of functionality that
          shouldn't affect the primary activities of a program. Since every operation in Garnish results in a value,
          this grouping allows your script to ignore the result of a subset of code.
        </p>
        <p>
          The application executing can also intercept the side effect, either ignoring it entirely or process it like
          this site does. If you open the console in your web browser's developer tools, you'll see the result of the
          side effect logged.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="examples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>