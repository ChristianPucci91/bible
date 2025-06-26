<script setup>
    import SearchableListWrapper from '../components/SearchableListWrapper.vue'
    import FileUpload from '../views/Articles/Handlers/FileUpload.vue'
    import Mail from '../views/Articles/Handlers/Mail.vue'
    import DataTable from '../views/Articles/Handlers/DataTable.vue'
</script>

<template>
    <SearchableListWrapper v-slot="{ setArticleRefs }">
        <ol class="p-0 main-list">
            <FileUpload label="File Upload" :ref="setArticleRefs" />
            <Mail label="Mail" :ref="setArticleRefs" />
            <DataTable label="DataTable" :ref="setArticleRefs" />
        </ol>
    </SearchableListWrapper>
</template>
