<script setup lang="ts">

import Page from '@/pages/Page.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'
import PageSection from '@/components/PageSection.vue'

const scripts = [
  AppScript.make("add_5", "$ + 5"),
  AppScript.make("input", "10"),
]
</script>

<template>
  <Page title="The Garnish Language">
    <PageSection>
      <template v-slot:left>
        <h2>What & Why</h2>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Script Tools</h2>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Editor</h3>
        <p>
          At the bottom of the screen there is an area for trying out what you learn throughout this tutorial.
          On the left is a script editor with a list of available scripts above. Click on the name of the script to make it
          active for editing.
        </p>
      </template>
      <template v-slot:right>

        <h3>Commands & Executions</h3>
        <p>
          On the right are command buttons and an output display. The commands buttons do the following:
        </p>
        <dl>
          <dd>New - Prompts for a name and creates a new script on confirmation.</dd>
          <dd>Rename - Prompts for a name and renames the current script on confirmation.</dd>
          <dd>Input - Allows you to select one of your scripts to be the input during execution.</dd>
          <dd>Execute - Executes the current script with selected input, if set.</dd>
          <dd>Clear Executions - In sub-menu next to "Execute". Clears all executions from display.</dd>
        </dl>
        <p>
          Below the command buttons is where execution outputs are displayed. The most recent output will be on top.
          Clicking on an output will show the input (top) and script (bottom) that were executed to give that output.
        </p>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Examples</h3>
        <p>
          Throughout this tutorial, there will be examples such as this one for you to reference and interact with.
        </p>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="scripts"></ScriptExample>
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>