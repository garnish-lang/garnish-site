<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make('numbers', '5 == 10,\n5 != 10,\n5 > 10,\n5 >= 10,\n5 < 10,\n5 <= 10'),
  AppScript.make('character_list', '"some text" == "some other text",\n"some text" != "some other text",\n"some text" > "some other text",\n"some text" >= "some other text",\n"some text" < "some other text",\n"some text" <= "some other text"'),
  AppScript.make('unit', '5 == (),\n5 != (),\n5 > (),\n5 >= (),\n5 < (),\n5 <= ()'),
  AppScript.make('types', '5 #= #3.14,\n() #= #(),\n"some text" #= #5')
]
</script>

<template>
  <Page title="Comparisons">
    <PageSection>
      <template v-slot:left>
        <p>
          These operations compare two values together and will always result in either a True or False value.
          This also means that they are the only operations that can never result in a Unit value,
          making them perfect for removing the possibility of Unit values from your script where you don't want them.
        </p>
        <dl>
          <dd><code class="v-code">==</code> - Equal</dd>
          <dd><code class="v-code">!=</code> - Not Equal</dd>
          <dd><code class="v-code">></code> - Greater Than</dd>
          <dd><code class="v-code">>=</code> - Greater Than or Equal</dd>
          <dd><code class="v-code"><</code> - Less Than</dd>
          <dd><code class="v-code"><=</code> - Less Than or Equal</dd>
          <dd><code class="v-code">#=</code> - Type Equals</dd>
        </dl>
        <p>
          Note: Create lists with whitespace has a higher precedence than comparison operations.
          In order to make a list containing these operations a comma list must be used, as shown in examples.
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