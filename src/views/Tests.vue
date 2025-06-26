<script setup>
    import SearchableListWrapper from '../components/SearchableListWrapper.vue'
    import General from '../views/Articles/Tests/General.vue'
</script>

<template>
    <SearchableListWrapper v-slot="{ setArticleRefs }">
        <ol class="p-0 main-list">
            <General label="Panoramica generale dei tests" :ref="setArticleRefs" />
        </ol>
    </SearchableListWrapper>
</template>
