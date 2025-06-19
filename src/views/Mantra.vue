<script setup>
    import SearchableListWrapper from '../components/SearchableListWrapper.vue'
    import Naming from '../views/Articles/Mantra/Naming.vue'
</script>

<template>
    <SearchableListWrapper v-slot="{ setArticleRefs }">
        <ol class="p-0 main-list">
            <Naming label="Naming variabili, funzioni" :ref="setArticleRefs" />
        </ol>
    </SearchableListWrapper>
</template>
