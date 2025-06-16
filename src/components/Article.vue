<template>
  <div class="searchable-item m-2" :data-label="label" ref="el">
    <v-card variant="tonal">
      <template #title>
        <slot name="title">Titolo di default</slot>
      </template>

      <template #subtitle>
        <slot name="subtitle">Sottotitolo di default</slot>
      </template>

      <template #text>
        <slot name="text">Testo di default</slot>
      </template>
    </v-card>

    <!-- Slot generico (se vuoi sotto la card, o altrove) -->
    <slot />
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from 'vue'

const props = defineProps({
  label: String
})

const el = ref(null)
defineExpose({ el, label: props.label })
</script>
