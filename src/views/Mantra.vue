<script setup>
    import SearchableListWrapper from '../components/SearchableListWrapper.vue'
    import CheckList from '../views/Articles/Mantra/CheckList.vue'
    import Naming from '../views/Articles/Mantra/Naming.vue'
    import List from '../views/Articles/Mantra/List.vue'
</script>

<template>
    <SearchableListWrapper v-slot="{ setArticleRefs }">
        <ol class="p-0 main-list">
            <CheckList label="Checklist pre progetto" :ref="setArticleRefs" />
            <List label="Best practices e tips" :ref="setArticleRefs" />
            <Naming label="Naming variabili, funzioni" :ref="setArticleRefs" />
        </ol>
    </SearchableListWrapper>
</template>
