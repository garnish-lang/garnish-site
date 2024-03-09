<script setup lang="ts">

import PageSection from '@/components/PageSection.vue'
import Page from '@/pages/Page.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const examples = [
  AppScript.make("fix", '@Def minus { $.0 - $.1 }\n\n@Def add_5 { $ + 5 }\n\nadd_5` 5 `minus` 10 `add_5\n\n')
]
</script>

<template>
  <Page title="*fix Operations">
    <PageSection>
      <template v-slot:left>
        <p>
          *fix operations are the final way to execute expressions. They require an identifier that resolves to an
          expression, and are at a higher precedence than the apply operations to allow for more choice in expression
          execution without the need to use parenthesis.
        </p>
        <p>
          There are three types of *fix operations and named for the identifiers position, relative to the input
          of the expression. Each use the back tick, <code class="v-code">`</code>, character attached to an identifier.
        </p>
        <dl>
          <dd>
            <code class="v-code">add_5`</code> - <span class="definition-word">Prefix</span>
          </dd>
          <dd>
            <code class="v-code">`add_5</code> - <span class="definition-word">Suffix</span>
          </dd>
          <dd>
            <code class="v-code">`add_5`</code> - <span class="definition-word">Infix</span>
          </dd>
        </dl>
        <p>
          Prefix and Suffix are designed to take a single input and Infix will take two. This is simple from the parsing
          perspective, since you can still pass a List to any of them.
        </p>
        <p>
          In addition Prefix has the highest precedence, then Suffix, then Infix
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