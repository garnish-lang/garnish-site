<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const commonExamples = [
  AppScript.make("add", "$.0 + 5\n$.1 + 5\n$.2 + 5"),
  AppScript.make("subtract", "$.0 - 5\n$.1 - 5\n$.2 - 5"),
  AppScript.make("multiply", "$.0 * 5\n$.1 * 5\n$.2 * 5"),
  AppScript.make("divide", "$.0 / 5\n$.1 / 5\n$.2 / 5"),
  AppScript.make("remainder", "$.0 % 5\n$.1 % 5\n$.2 % 5"),
  AppScript.make("input", "8 --8 3.14"),
]

const additionalExamples = [
  AppScript.make("absolute_value", "++$.0\n++$.1\n++$.2"),
  AppScript.make("negation", "--$.0\n--$.1\n--$.2"),
  AppScript.make("exponential", "$.0 * 5\n$.1 ** 5\n$.2 ** 5"),
  AppScript.make("integer_divide", "$.0 // 5\n$.1 // 5\n$.2 // 5"),
  AppScript.make("input", "8 --8 3.14"),
]

const groupingExamples = [
  AppScript.make("absolute_value", "++$ ** 3 / ((12 - 7) + --5.5 * 4.6) // 2 % 5"),
  AppScript.make("input", "--8"),
]
</script>

<template>
  <Page title="Math Operations">
    <PageSection>
      <template v-slot:left>
        <h2>Common Operations</h2>
        <p>
          Garnish supports the four most common math operations for programming, addition, subtraction, multiplication and division
          along with the remainder operation.
        </p>
        <dl>
          <dd><code class="v-code">+</code> - Addition</dd>
          <dd><code class="v-code">-</code> - Subtraction</dd>
          <dd><code class="v-code">*</code> - Multiplication</dd>
          <dd><code class="v-code">/</code> - Division</dd>
          <dd><code class="v-code">%</code> - Remainder</dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="commonExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Additional Operations</h2>
        <p>
          <span class="definition-word">Absolute Value</span> with the unary <code class="v-code">++</code> operator. Gives the positive value of a given number.
        </p>
        <p>
          <span class="definition-word">Negation</span> with the unary <code class="v-code">--</code> operator.
          If given number is positive, results in a negative number.
          If given numer is negative, results in a positive number.
        </p>
        <p>
          <span class="definition-word">Exponential</span> with the binary <code class="v-code">**</code> operator.
          Raises the left operand to the power of the right operand.
        </p>
        <p>
          <span class="definition-word">Integer Division</span> with binary <code class="v-code">//</code> operator.
          Divides the left operand by the right operand, and then dropping any decimal part.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="additionalExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Grouping & Precedence</h2>
        <p>
          Garnish uses the same precedence as arithmetic equations, adding in the programming specific ones.
          Remainder and integer division have same precedence as multiplication and division.
          Negation and absolute value happen before all others.
        </p>
        <p>
          If you need to an operation with less precedence to happen before one with greater,
          you may split the equation across subexpressions or use parenthesis to group them accordingly.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="groupingExamples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>