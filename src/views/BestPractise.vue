<script setup>
import { ref, computed } from 'vue'
import Article from '../components/Article.vue'

const search = ref('')
const articleRefs = ref([])

const setArticleRefs = (el) => {
  if (!el) return

  if (!articleRefs.value.includes(el)) {
    articleRefs.value.push(el)
  }
}

const filteredItems = computed(() => {
  if (!search.value) return []
  return articleRefs.value.filter(el =>
    el.label.toLowerCase().includes(search.value.toLowerCase())
  )
})

function scrollToItem(text) {
  const target = articleRefs.value.find(el => el.label === text)
  if (target?.label) {
    target.el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <div>

    <v-text-field
      v-model="search"
      hide-details="auto"
      label="Cerca.."
      class="search-input"
    ></v-text-field>

    <v-card class="mx-auto">
        <v-list>
            <template v-if="search !== '' && filteredItems.length > 0">
                <v-list-item
                    v-for="item in filteredItems"
                    :key="item.label"
                    @click="scrollToItem(item.label)"
                    class="cursor-pointer"
                >
                    <v-list-item-title>{{ item.label }}</v-list-item-title>
                </v-list-item>
            </template>

            <template v-else-if="search !== '' && filteredItems.length < 1">
                <v-list-item>
                    <v-list-item-title>Nessun risultato trovato</v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-card>

        <Article label="Sezione" :ref="setArticleRefs">
            <template #title>1. Sez</template>
            <template #subtitle>Supporto clienti</template>
            <template #text>Scrivici per ricevere assistenza.</template>
        </Article>

        <Article label="FAQ" :ref="setArticleRefs">
            <template #title>2. Faq</template>
            <template #subtitle>Supporto clienti</template>
            <template #text>Scrivici per ricevere assistenza.</template>
        </Article>

        <Article label="Contatti" :ref="setArticleRefs">
            <template #title>3. Contattaci</template>
            <template #subtitle>Supporto clienti</template>
            <template #text>Scrivici per ricevere assistenza.</template>
        </Article>
  </div>
</template>
