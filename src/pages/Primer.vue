<script setup lang="ts">
import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const inputValueScripts = [
  AppScript.make('input_value', '$ * 5 / 2 + 7'),
  AppScript.make('input', '18')
]

const subexpressionScripts = [
  AppScript.make('subexpressions', '$ * 5\n\n$ / 2\n\n$ + 7'),
  AppScript.make('value_twice', '$ * $'),
  AppScript.make('input', '18')
]
</script>

<template>
  <Page title="Primer">
    <PageSection>
      <template v-slot:left>
        <h2>Input & Value</h2>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <p>
          Every script has an input and a current value. When executed, the current value is set to the input.
        </p>
        <p>
          We can retrieve the current value with the <code class="v-code">$</code> symbol.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="inputValueScripts" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Subexpressions</h2>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <p>
          Another name for a script is an "expression".
          Named for how other programming and scripting languages refer to code that produces a single value.
        </p>
        <p>
          These expressions can also have "subexpressions",
          by separating code by two newlines (i.e. two presses of Enter/Return key) as seen in the <code class="v-code">subexpressions</code>
          example.
        </p>
        <p>
          Keep in mind, that after the first subexpression,
          there is no longer a way to retrieve the original input value.
          So be sure your finished with the current value before making a sub-expression,
          possibly by retrieving its value multiple times like in <code class="v-code">value_twice</code> example.
        </p>
        <p>&nbsp;</p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="subexpressionScripts" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>