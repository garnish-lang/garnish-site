<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import { AppScript } from '@/stores/types'
import ScriptExample from '@/components/ScriptExample.vue'

const unitTrueFalseExamples = [
  AppScript.make('unit_black_hole', '5 + 10 * ()'),
  AppScript.make('true_false', '$? $!')
]

const numberExamples = [
  AppScript.make('numbers', '123 --987 3.14 1_000_000')
]

const characterExamples = [
  AppScript.make('character_lists', '"1 double quote pair" """3 double quote pairs"""'),
  AppScript.make('invalid_list', '""Mismatched double quotes"""'),
  AppScript.make('character_access', '"Some text"\n\n$.7')
]

const byteExamples = [
  AppScript.make('byte_lists', '\'abcde\' \'\'\'100 200 255\'\'\''),
  AppScript.make('invalid_list', '\'\'abcde"""'),
  AppScript.make('byte_access', '\'abcde\'\n\n$.3'),
  AppScript.make('to_big', '\'\'\'300\'\'\'')
]

const symbolsExamples = [
  AppScript.make('identifiers', 'Math::PI Math::IntegerMax Math::FloatMax'),
  AppScript.make('symbols', ';my_symbol ;another_symbol')
]

const typeExamples = [
  AppScript.make('types', '#"some text" #100 #()'),
]
</script>

<template>
  <Page title="Basic Types">
    <PageSection>
      <template v-slot:left>
        <p>
          Also called "value" types,
          these are the essential types that you will make and transform to build lists and perform your code logic.
        </p>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Unit, True & False</h3>
        <p>
          These three types are the only single value types in the Garnish language.
        </p>
        <p>
          The Unit value, represented by <code class="v-code">()</code>, is Garnish's version of "null", "none", "void",
          etc. from other languages.
          It is the result of any operation between unsupported types and is a kind of "black hole" in that most
          operations performed with a Unit value also results in a Unit value.
        </p>
        <p>
          Most other languages have a single type for True and False called a "boolean", but in Garnish they are
          considered two separate
          types. They are represented by the <code class="v-code">$?</code> and <code class="v-code">$!</code>
          respectively.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="unitTrueFalseExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Numbers</h3>
        <p>
          Type for all numeric values. This includes what integers and floating point values.
        </p>
        <p>
          The <code class="v-code">_</code> character may be used as a visual separator without changing the value.
        </p>
        <p>
          Note to make negative value, the negation operator <code class="v-code">--</code>, is required.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="numberExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Characters & Character Lists</h3>
        <p>
          Called "strings" in some other languages, these two types hold textual data. Created by putting any number of
          text
          between double quote marks <code class="v-code">"</code>.
        </p>
        <p>
          Any number of double quotes may surround the text so long as the count at end and beginning match.
          This allows an application to implement custom formatting at build time instead of defining it else where.
        </p>
        <p>
          Note the double quotes in the output are visual only and are not included in the value.
        </p>
        <p>
          Individual characters can be retrieved by using the access <code class="v-code">.</code> operator followed by
          a number.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="characterExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Bytes & Bytes Lists</h3>
        <p>
          Data is often represented as bytes and these two types are available to process that data. Generally, values
          of this type will be provided but should you need to define it in script, wrapping text in single quotes
          <code class="v-code">'</code>. The characters will be converted to the byte value.
        </p>
        <p>
          Any number of single quotes may surround the text so long as the count at end and beginning match.
          This allows an application to implement custom formatting at build time instead of defining it else where.
          An example of this is implemented for this site. When using two or more single quote pairs,
          instead of individual characters, you write the actual byte values (0-255) separated by spaces.
        </p>
        <p>
          Note the double quotes in the output are visual only and are not included in the value.
        </p>
        <p>
          Individual characters can be retrieved by using the access <code class="v-code">.</code> operator followed by
          a number.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="byteExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Identifiers & Symbols</h3>
        <p>
          Identifiers are names that the writer defines to represent values.
          They can contain any alphanumeric characters, the underscore and colon characters,
          but cannot start with a number.
          Identifiers are resolved during access operations and can be resolved by the application executing script.
          A few identifiers have been implemented as examples.
        </p>
        <p>
          Symbols are numeric representations of identifiers so identifiers can be used in comparisons and making lists.
          They are made by preceding an identifier with a semicolon <code class="v-code">;</code>
        </p>
        <p>
          Note: this site resolves a symbol back to its name for output but that is not guaranteed functionality for an
          application executing a Garnish script.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="symbolsExamples" />
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Type</h3>
        <p>
          The type of a value also has its own type. Can be used for type comparisons and assertions.
          To get the type of a value, use the type of operator <code class="v-code">#</code> preceding the value.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="typeExamples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>