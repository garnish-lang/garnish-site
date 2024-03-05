<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make('logic', '?? $.0,\n!! $.1,\n$.0 && $.1,\n$.0 || $.1,\n$.0 ^^ $.1'),
  AppScript.make('input', '$? $!')
]
</script>

<template>
  <Page title="Logic Operations">
    <PageSection>
      <template v-slot:left>
        <p>
          These operations allow checking multiple values for being True or False,
          resulting in another True or False value.
          Like the comparison operators, they can never result in a Unit value,
          making them perfect for removing the possibility of Unit values from your script where you don't want them.
        </p>
        <dl>
          <dd><code class="v-code">??</code> - TIS</dd>
          <dd><code class="v-code">!!</code> - NOT</dd>
          <dd><code class="v-code">&&</code> - AND</dd>
          <dd><code class="v-code">||</code> - OR</dd>
          <dd><code class="v-code">^^</code> - XOR</dd>
        </dl>
        <p>
          The list above is presented in precedence order, the top being evaluated first.
          TIS and NOT are the only operations that share precedence
          (i.e. the first to appear, right-to-left, evaluates first).
        </p>
        <p>
          Note: Create lists with whitespace has a higher precedence than logical operations.
          In order to make a list containing these operations a comma list must be used, as shown in examples.
        </p>
        <h3>Short Circuiting</h3>
        <p>
          Unlike most operations, AND and OR are not guaranteed to evaluate both sides.
        </p>
        <p>
          AND will only evaluate its right operand if its left operand first evaluated to False.
        </p>
        <p>
          OR will only evaluate its right operand if its left operand first evaluated to True.
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