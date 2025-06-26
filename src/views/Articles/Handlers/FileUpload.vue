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
  File Upload   
        </template>
      
        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Metodo per storare file riutilizzabile</span>
                    <p>Puoi inserirlo in una classe helper oppure direttamente in un trait o service. Te lo mostro come metodo statico in una classe FileHandler.</p>

                    <CodeBlock 
                    :code="`namespace App\\Helpers;\n\nuse Illuminate\\Http\\UploadedFile;\nuse Illuminate\\Support\\Facades\\Storage;\nuse Illuminate\\Support\\Str;\n\nclass FileHandler\n{\n    /**\n     * Upload a file to the specified path with a dynamic name.\n     *\n     * @param UploadedFile \$file Il file ricevuto (es. \$request->file('file'))\n     * @param string \$path La path relativa (es. 'documents/users')\n     * @param string|null \$disk Disco Laravel (default: 'public')\n     * @param string|null \$prefix Un prefisso opzionale per il nome del file\n     * @return string|null Il percorso salvato o null se fallisce\n     */\n    public static function upload(\n        UploadedFile \$file,\n        string \$path,\n        ?string \$disk = 'public',\n        ?string \$prefix = null\n    ): ?string {\n        try {\n            \$extension = \$file->getClientOriginalExtension();\n            \$safeName = (\$prefix ? \$prefix . '_' : '') . time() . '_' . Str::random(10) . '.' . \$extension;\n\n            return \$file->storeAs(\$path, \$safeName, \$disk);\n        } catch (\\Exception \$e) {\n            \\Log::error('Errore upload file: ' . \$e->getMessage());\n            return null;\n        }\n    }\n}`" 
                    language="php" 
                    />

                    <p>Esempio d'uso nel tuo Controller.</p>

                    <CodeBlock 
                    :code="`use App\\Helpers\\FileHandler;\n\npublic function store(Request \$request)\n{\n    \$request->validate([\n        'document' => 'required|file|mimes:pdf,docx,jpg,png|max:2048',\n    ]);\n\n    \$savedPath = FileHandler::upload(\n        \$request->file('document'),\n        'uploads/documents',\n        'public',\n        'user_' . auth()->id()\n    );\n\n    if (\$savedPath) {\n        // Salva il path in DB o altro\n        return response()->json([\n            'message' => 'File salvato con successo!',\n            'path' => \$savedPath\n        ]);\n    }\n\n    return response()->json([\n        'message' => 'Errore durante il salvataggio del file'\n    ], 500);\n}`" 
                    language="php" 
                    />

                </li>
            </ol>

        </template>
    </Article>
</template>



