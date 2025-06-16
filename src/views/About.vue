<script setup>
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img src="https://picsum.photos/400/200" height="200px" />
    <v-card-title>Titolo della Card</v-card-title>
    <v-card-text>Questa è una semplice card Vuetify.</v-card-text>
    <v-card-actions>
      <v-btn color="primary" text>Leggi di più</v-btn>
    </v-card-actions>
  </v-card>
</template>
