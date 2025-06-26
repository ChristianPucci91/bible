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
            Mail
        </template>

        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Metodo per invio mail custom</span>
                    <p>Puoi inserirlo in una classe helper oppure direttamente in un trait o service. Te lo mostro come metodo statico in una classe MailHandler.</p>

                    <CodeBlock 
                    :code="`namespace App\\Helpers;\n\nuse Illuminate\\Support\\Facades\\Mail;\n\nclass MailHandler\n{\n    /**\n     * Invia una email utilizzando una vista Blade.\n     *\n     * @param string \$toEmail Email del destinatario\n     * @param string \$toName Nome del destinatario\n     * @param string \$subject Oggetto dell’email\n     * @param string \$view Vista Blade (es. 'emails.welcome')\n     * @param array \$data Dati da passare alla vista\n     * @param array \$attachments Array di file da allegare (es. [storage_path('file.pdf')])\n     * @return bool True se inviata con successo, false altrimenti\n     */\n    public static function send(\n        string \$toEmail,\n        string \$toName,\n        string \$subject,\n        string \$view,\n        array \$data = [],\n        array \$attachments = []\n    ): bool {\n        try {\n            Mail::send(\$view, \$data, function (\$message) use (\$toEmail, \$toName, \$subject, \$attachments) {\n                \$message->to(\$toEmail, \$toName)\n                        ->subject(\$subject);\n\n                foreach (\$attachments as \$file) {\n                    if (file_exists(\$file)) {\n                        \$message->attach(\$file);\n                    }\n                }\n            });\n\n            return true;\n        } catch (\\Exception \$e) {\n            \\Log::error('Errore invio email: ' . \$e->getMessage());\n            return false;\n        }\n    }\n}`" 
                    language="php" 
                    />


                    <p>Esempio d'uso nel tuo Controller.</p>

<CodeBlock 
  :code="`use App\\\\Helpers\\\\MailHandler;

public function sendWelcomeEmail(Request \$request)
{
    \$user = auth()->user();

    \$data = [
        'name' => \$user->name,
        'message' => 'Benvenuto nel nostro sistema!'
    ];

    \$ok = MailHandler::send(
        \$user->email,
        \$user->name,
        'Benvenuto!',
        'emails.welcome', // resources/views/emails/welcome.blade.php
        \$data
    );

    return \$ok
        ? response()->json(['message' => 'Email inviata!'])
        : response()->json(['message' => 'Errore durante l’invio'], 500);
}`" 
  language="php" 
/>


                </li>
            </ol>

        </template>
    </Article>
</template>



