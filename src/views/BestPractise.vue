<script setup>
    import SearchableListWrapper from '../components/SearchableListWrapper.vue'
    import Struttura from '../views/Articles/BestPractise/Struttura.vue'
    import Models from '../views/Articles/BestPractise/Models.vue'
    import Controllers from '../views/Articles/BestPractise/Controllers.vue'

</script>

<template>
    <SearchableListWrapper v-slot="{ setArticleRefs }">
        <ol class="p-0 main-list">
          <Struttura label="Scaffholding laravel" :ref="setArticleRefs" />
          <Models label="Modelli, metodi, relations" :ref="setArticleRefs" />
          <Controllers label="Controllers e funzioni" :ref="setArticleRefs" />
        </ol>
    </SearchableListWrapper>
</template>