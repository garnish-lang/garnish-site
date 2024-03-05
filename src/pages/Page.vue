<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
}>(), {

})
</script>

<template>
<v-container>
  <v-sheet>
    <v-container class="page">
      <slot name="title">
        <h1>{{ props.title }}</h1>
      </slot>
      <slot></slot>
    </v-container>
  </v-sheet>
</v-container>
</template>

<style>
.page h1 {
  margin-bottom: .5rem;
}

.page h2 {
  margin-bottom: 0;
}

.page h3 {
  margin-bottom: .25rem;
}

p {
  margin-bottom: .5rem;
}

p > code {
  display: inline;
}

dl {
  margin: 1rem 0 1rem 2rem;
}

dd {
  margin-bottom: .5rem;
}

.definition-word {
  font-weight: bold;
}
</style>