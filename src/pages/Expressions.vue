<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const nestedExamples = [
  AppScript.make('nested_formatted', '{ $ + 5 }'),
  AppScript.make('across_lines', '{\n  $ + 5\n}')
]

const applyExamples = [
  AppScript.make('apply', '{ $ + 5 } ~ 10'),
  AppScript.make('apply_into', '10 ~> { $ + 5 }'),
  AppScript.make('apply_empty', '{ $ + 5 }~~')
]

const reapplyExamples = [
  AppScript.make('reapply', '$ <= 100 ^~ $ + 13'),
  AppScript.make('infinite', '$? ^~ $ + 5'),
  AppScript.make('input', '5')
]
</script>

<template>
  <Page title="Expressions">
    <PageSection>
      <template v-slot:left>
        <p>
          An expression is a single script and another script may be placed within by surrounding it with braces,
          <code class="v-code">{}</code>.
          These Nested Expressions don't have any functionality on their own, which can be seen by running the example.
          You'll see it results in an "Expression" value.
          In order to run the script nested inside we need to use the apply operators.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="nestedExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Apply</h2>
        <p>
          The two main apply operators, <span class="definition-word">Apply</span> <code class="v-code">~</code> and
          <span class="definition-word">Apply Into</span> <code class="v-code">~></code>,
          effectively do the same thing.
          The only difference is Apply expecting an expression as the left operand and expression's input as the right,
          and Apply Into expecting an expression as the right operand and the expression's input as the left.
          Which one is used will be mostly visual preference.
        </p>
        <p>
          The <span class="definition-word">Apply Empty</span>, <code class="v-code">~~</code>, unary operator will
          invoke
          its expression operand with Unit as the input. Importantly, this operator has a very different precedence.
          Where <span class="definition-word">Apply</span> and <span class="definition-word">Apply Into</span> are close
          to last in precedence, <span class="definition-word">Apply Empty</span> is closer to first.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="applyExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Reapply</h2>
        <p>
          The <span class="definition-word">Reapply</span> operator, <code class="v-code">^~</code>, works as a
          combination
          of an <span class="definition-word">Execute If True</span> operation and then an apply.
        </p>
        <p>
          If the left side evaluates to True (same value types as logic conditionals), the right side is executed.
          Then, the current expression is executed from the beginning with the right side's result as the input.
        </p>
        <p>
          If the right side evaluates to False, execution of current expression continues as normal.
        </p>
        <p>
          Note: To prevent infinite loops, this site has a limit on how many instructions can be run in a single execution, set to 10000.
          Run the "infinite" example to see the error.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="reapplyExamples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>