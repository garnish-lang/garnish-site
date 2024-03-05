<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make('if_true', '$ == 5 ?> "Input equal to 5"'),
  AppScript.make('if_false', '$ == 5 !> "Input doesn\'t equal False"'),
  AppScript.make('else', '$ == 5 ?> "Input equal to 5" |> "Input doesn\'t equal 5"'),
  AppScript.make('multiple_branches', '$ > 20 ?> "Input is greater than 20" |>\n$ > 10 ?> "Input is greater than 10" |>\n"Input less than or equal to 10"'),
  AppScript.make('input', '5')
]
</script>

<template>
  <Page title="Conditionals">
    <PageSection>
      <template v-slot:left>
        <p>
          These operations allow conditional execution of code.
          Similar functionality can be accomplished with short-circuiting logic operations,
          but the difference between the resulting value.
          If the left operand evaluates to True, the result will be the result of the right operand.
          Otherwise, the result will be the current value.
        </p>
        <p>
          What is True and False for the left operand are the same as the logic operators.
        </p>
        <dl>
          <dd><code class="v-code">?></code> - Execute If True</dd>
          <dd><code class="v-code">!></code> - Execute If False</dd>
          <dd><code class="v-code">|></code> - Else Execute</dd>
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