<script setup lang="ts">

import Page from '@/pages/Page.vue'
import PageSection from '@/components/PageSection.vue'
import ScriptExample from '@/components/ScriptExample.vue'

const examples = []
</script>

<template>
  <Page title="Annotations">
    <PageSection>
      <template v-slot:left>

      </template>
      <template v-slot:right>
        <ScriptExample :scripts="examples" />
      </template>
    </PageSection>
  </Page>
</template>

<style scoped>

</style>