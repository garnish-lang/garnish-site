<script setup lang="ts">

import Page from '@/pages/Page.vue'
import ScriptExample from '@/components/ScriptExample.vue'
import { AppScript } from '@/stores/types'
import PageSection from '@/components/PageSection.vue'
import { CopyCreateFileIcon, ExecuteIcon, ExecuteUserInputIcon, ReplaceFileIcon } from '@/stores/constants'

const scripts = [
  AppScript.make('add_5', '$ + 5'),
  AppScript.make('input', '10')
]
</script>

<template>
  <Page title="The Garnish Language">
    <PageSection>
      <template v-slot:left>
        <h2>What is it?</h2>
        <p>
          Garnish is a functional scripting language with immutable data and input/output workflow.
          Each script receives a single input and results in a single output.
        </p>
        <p>
          There is no plan to make a standard library like other scripting language and isn't being designed as a stand
          alone application language.
        </p>
        <p>
          Instead, Garnish is meant to be added onto an existing application to allow for customization and extensions.
          One way to think of this languages purpose is as "scriptable configuration", where the heavy lifting of an
          application is implemented in lower level languages and Garnish either changes or adds functionality according
          to environment, user preference, etc.
        </p>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h2>Script Tools</h2>
        <h3>Editor</h3>
        <p>
          At the bottom of the screen, there is an area for trying out what you learn throughout this tutorial.
          On the left is a script editor with a list of available scripts above.
          Click on the name of the script to make it active for editing.
          Click on the 'x' icon next to the name to delete the script.
          Deleting the last script will automatically create a new one, so there will always be a script to edit.
        </p>
      </template>
      <template v-slot:right>
        <h3>Commands & Executions</h3>
        <p>
          On the right are command buttons and an output display. The commands buttons do the following:
        </p>
        <dl>
          <dd>
            <span class="definition-word">New</span> - Prompts for a name and creates a new script on confirmation.
          </dd>
          <dd>
            <span class="definition-word">Rename</span> - Prompts for a name and renames the current script on
            confirmation.
          </dd>
          <dd>
            <span class="definition-word">Input</span> - Allows you to select one of your scripts to be the input during
            execution.
          </dd>
          <dd>
            <span class="definition-word">Execute</span> - Executes the current script with selected input, if set.
          </dd>
          <dd>
            <span class="definition-word">Clear Executions</span> - In sub-menu next to "Execute". Clears all executions
            from display.
          </dd>
        </dl>
        <p>
          Below the command buttons is where execution outputs are displayed. The most recent output will be on top.
          Clicking on an output will show the input (top) and script (bottom) that were executed to give that output.
        </p>
      </template>
    </PageSection>
    <PageSection>
      <template v-slot:left>
        <h3>Example Blocks</h3>
        <p>
          Throughout this tutorial, there will be code examples such as this <code class="v-code">add_5</code> and <code
          class="v-code">input</code> example block.
          These examples contain one or more scripts you can view by clicking on the name to select it.
          The actions in the top-right do the following:
        </p>
        <dl>
          <dd>
            <v-icon :icon="ReplaceFileIcon"></v-icon>
            - Replaces the text of your selected script in the editor at the bottom of the screen with the selected
            example script's text.
          </dd>
          <dd>
            <v-icon :icon="CopyCreateFileIcon"></v-icon>
            - Creates a new script in your editor with same name and text as the selected example script. Disabled if a
            script in your editor already as the same name as selected example script's name.
          </dd>
          <dd>
            <v-icon :icon="ExecuteUserInputIcon"></v-icon>
            - Executes the selected example script with input from "Input" option you've set below.
          </dd>
          <dd>
            <v-icon :icon="ExecuteIcon"></v-icon>
            - Executes the selected example script. If there is an example script in the same block named "input", it is
            used as the example script's input.
          </dd>
        </dl>
      </template>
      <template v-slot:right>
        <ScriptExample :scripts="scripts"></ScriptExample>
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>