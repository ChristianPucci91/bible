<script setup>
    import Article from '../../../components/Article.vue'
    import CodeBlock from '../../../components/CodeBlock.vue'
    import { defineProps, ref, defineExpose } from 'vue'

    const articleRef = ref(null)

    defineExpose({
        get el() {
            return articleRef.value?.el
        },
        get label() {
            return articleRef.value?.label
        }
    })

    const props = defineProps({
     label: String
    })

</script>
<template>
    <Article :label="label" ref="articleRef">
        <template #subtitle>
            DataTable
        </template>

        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Metodo per componente Datatable riutilizzabile</span>
                    <p>Nel controller.</p>

<CodeBlock
  :code="`public function index()
{
    return view('auth.admin.profession.index')->withConfiguration(
        json_encode(Profession::dataTableConfiguration())
    );
}`"
  language="php"
/>

                </li>
                <li>
                <p>Esempio d'uso nel modello.</p>

<CodeBlock
  :code="`public static function dataTableConfiguration()
{
    return (object)[
        'columns' => [
            (object)[
                'id' => 'value',
                'label' => 'Valore',
                'input' => 'text',
            ],
            (object)[
                'id' => 'note',
                'label' => 'Note',
                'input' => 'text',
            ],
        ],
        // Puoi aggiungere altre configurazioni qui
        'altre colonne...' => 'value...',
    ];
}`"
  language="php"
/>

                </li>
                <li>
                <p>Esempio d'uso nel componente DataTable.</p>

<CodeBlock
  :code="`let dtColumns = this.configuration.columns.map((c) => (
    console.log(c),
    {
      data: c.id,
      name: c.id,
      visible: c.visible,
    }
));

var table = $('#id-tabella').DataTable({
  columns: [
    ...dtColumns,
    // altre colonne o opzioni
  ],
});`"
  language="javascript"
/>

                </li>
                <p>Potresti aggiungere dei buttons customizzati e buttons di default in caso non fossero configurati nel modello, dom personalizzati o di default...</p>
            </ol>

        </template>
    </Article>

</template>




