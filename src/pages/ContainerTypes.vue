<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'

const rangeExamples = [
  AppScript.make('inclusive', '2..5'),
  AppScript.make('start_exclusive', '2>..5'),
  AppScript.make('end_exclusive', '2..<5'),
  AppScript.make('exclusive', '2>..<5')
]

const pairExamples = [
  AppScript.make('pair', '"value" = 123')
]

const listExamples = [
  AppScript.make('list', '10 20 30 40 50 60 70 80 90'),
  AppScript.make('list_across_lines', '10 20 30\n40 50 60\n70 80 90'),
  AppScript.make('list_of_lists', '10 20 30, 40 50 60, 70 80 90')
]

const concatenationExamples = [
  AppScript.make('concatenation', '"some text" <> 123 <> ()\n\n$.2 $.1 $.0'),
  AppScript.make('list_concatenation', '10 20 30 <> 40 50 60\n\n$.1 $.5')
]

const sliceExamples = [
  AppScript.make('slice', '10 20 30 40 50 60\n\n$ ~ 2..4')
]

const accessExamples = [
  AppScript.make('range', '2..5\n\n$.0 $.2'),
  AppScript.make('list', ':key = "value" :data = 12345 :name = "Data"\n\n$.name key $.1'),
  AppScript.make('concatenation', ':key = "value" <> :data = 12345 <> :name = "Data"\n\n$.data key'),
  AppScript.make('slice', '10 20 30 40 50 60\n\n$ ~ 2..4\n\n$.0 $.3'),
  AppScript.make('dynamic', '(:key = "value" :data = 12345 :name = "Data") :data\n\n$.0.($.1)')
]
</script>

<template>
  <Page title="Container Types">
    <PageSection>
      <template v-slot:left>
        <h2>Internals</h2>
        <p>All of the types on this page support the internal operators.
          The affect of the operation on each type will be describe in the type's individual section,
          but they are defined here.
        </p>
        <dl>
          <dd><code class="v-code">_.</code> - Access Left</dd>
          <dd><code class="v-code">._</code> - Access Right</dd>
          <dd><code class="v-code">.|</code> - Access Length</dd>
        </dl>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Ranges</h2>
        <p>
          Define a range of numbers by specifying a start and an end with one of the range operators.
          All ranges are as inclusive, so the display in the output will show the inclusive variant.
        </p>
        <dl>
          <dd><code class="v-code">..</code> - Inclusive</dd>
          <dd><code class="v-code">&gt;..</code> - Start Exclusive</dd>
          <dd><code class="v-code">..&lt;</code> - End Exclusive</dd>
          <dd><code class="v-code">&gt;..&lt;</code> - Exclusive</dd>
        </dl>
        <h4>Internals</h4>
        <dl>
          <dd><code class="v-code">_.</code> - Start of the range</dd>
          <dd><code class="v-code">._</code> - End of the range</dd>
          <dd><code class="v-code">.|</code> - Length of the range <code class="v-code">end - start + 1</code></dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="rangeExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Pairs</h2>
        <p>
          Group two values together with the pair <code class="v-code">=</code> operator.
          Supports left and right internals.
        </p>
        <h4>Internals</h4>
        <dl>
          <dd><code class="v-code">_.</code> - Left Item</dd>
          <dd><code class="v-code">._</code> - Right Item</dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="pairExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Lists</h2>
        <p>
          Groups any number of items together.
          Lists are made by either separating values with whitespace (spaces or single newlines) or commas <code
          class="v-code">,</code>.
          Mixing the two methods will result in a list of lists.
        </p>
        <h4>Internals</h4>
        <dl>
          <dd><code class="v-code">.|</code> - Number of items in the list</dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="listExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Concatenations</h2>
        <p>
          Orders two items to be one after the other.
          After made, Concatenations support the same internal,
          indexing and association operations as a List along with the left and right internal operators.
        </p>
        <h4>Internals</h4>
        <dl>
          <dd><code class="v-code">_.</code> - First Item</dd>
          <dd><code class="v-code">._</code> - Second Item</dd>
        </dl>
        <p>
          If a list is either item in a concatenation, each item in that list is included in the Concatenation's count.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="concatenationExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Slices</h2>
        <p>
          Define a subset of a list type value.
          List type values include List, Concatenation, Character List, Byte List, and other Slices.
          They are made by using the apply operator <code class="v-code">~</code>
          with the list value on the left and a Range on the right.
        </p>
        <h4>Internals</h4>
        <dl>
          <dd><code class="v-code">_.</code> - List</dd>
          <dd><code class="v-code">._</code> - Range</dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="sliceExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Accessing Container Values</h2>
        <p>
          In addition to the internal operations, Range, List, Concatenation and Slice support using the access
          operator,
          <code class="v-code">.</code>
        </p>
        <h3>Indexing</h3>
        <p>
          Using the access operator followed by a number is called indexing and it retrieves the value from the
          container
          at that position, with zero, <code class="v-code">0</code>, being the first value.
        </p>
        <h3>Associations</h3>
        <p>
          If the container has a value that is a Pair and the pair's left value is a Symbol, that Pair is called an
          association. Only List, Concatenation and Slice are capable of having associations.
          When a symbol is used with the access operator, the value returned will be the right value of
          the association with a matching symbol.
        </p>
        <h3>Accessing Current Value</h3>
        <p>
          Additionally, if the current value is a list, you may omit the value token and access operator.
          The identifier will be resolved, by checking the current value for an association with a matching symbol.
          See <code class="v-code">list</code> example.
        </p>
        <h3>Access Operands</h3>
        <p>
          Both sides of the access operator are evaluated like any other operation, allowing dynamic evaluation.
          This is in contrast with most other languages that require a static identifier on the right side
          or another operator for a dynamic value. See <code class="v-code">dynamic</code> example.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="accessExamples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>