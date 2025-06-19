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
            <p>
                In questo articolo vedremo alcuni principi di base best practise sulla nomenclatura di funzioni, componenti, rotte.
            </p>
        </template>
METTI QUESTA ROBA 

         Lista di Best Practice Prima di Scrivere Codice
📐 Architettura e Design
 Single Responsibility Principle: una funzione / classe deve fare una sola cosa.

 DRY (Don’t Repeat Yourself): evita ripetizioni inutili.

 KISS (Keep It Simple, Stupid): se puoi farlo semplice, fallo semplice.

 YAGNI (You Aren’t Gonna Need It): non scrivere codice “futuro” che non serve ora.

 SOLID principles (soprattutto se lavori con classi e OOP).

 Funzioni Pure dove possibile: no effetti collaterali.

📦 Organizzazione del Codice
 Usa una struttura di cartelle coerente e logica

 Naming coerente (camelCase, PascalCase, kebab-case, ecc.)

 Evita file enormi (>200 righe? Suddividi!)

 Separa la logica dalla vista (es. Vue: script vs template)

 Crea componenti riutilizzabili, non copia/incolla HTML

🧾 Scrittura delle Funzioni e Metodi
 Funzioni con max 3-5 argomenti

 Non modificare variabili globali o esterne

 Restituisci un valore invece di fare modifiche dirette

 Usa nomi chiari e descrittivi

 Evita condizioni annidate complesse (if dentro if dentro if)

🧰 Gestione del Progetto
 Configura un linter (ESLint, Prettier, PHP-CS-Fixer)

 Documenta ciò che è complesso o "magico"

 Scrivi commenti solo quando servono

 Scrivi prima i test o almeno pensa a come testeresti

 Scrivi commit chiari (feat:, fix:, refactor:...)

🧪 Testabilità e Manutenzione
 Scrivi codice facilmente testabile (evita funzioni con troppi effetti collaterali)

 Pensa alla manutenzione: se qualcuno lo legge tra 6 mesi, lo capisce?

 Evita dipendenze hardcoded, preferisci iniezione o configurazione esterna

 Scrivi codice "leggibile" prima di "ottimizzato"

🌍 Frontend/UI (Vue, React)
 Usa componenti "base" riutilizzabili (BaseButton, BaseModal, ecc.)

 Gestisci lo stato globale solo se serve (Vuex/Pinia)

 Non mischiare troppa logica dentro al componente

 Struttura i file in components, views, store, services, utils

 Mobile-first design e responsive come priorità

🐘 Laravel (o PHP moderno)
 Usa le resource e i form request

 Non mischiare logica nei controller, usa servizi

 Eloquent: relazioni, scope, accessors/mutators

 Nomina correttamente i metodi nei controller

 Centralizza validazioni e autorizzazioni
        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Naming: variabili, funzioni, file, componenti</span>
                    <table class="table table-dark table-striped mt-3">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col" class="font-weight-bold">Tipo</th>
                            <th scope="col" class="font-weight-bold">Convenzione</th>
                            <th scope="col" class="font-weight-bold">Esempio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="fs-10">
                                <th scope="row">Variabili</th>
                                <td><code>camelCase</code></td>
                                <td><code>username, totalAmount</code></td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">Funzioni</th>
                                <td><code>camelCase</code> + verbo</td>
                                <td><code>getUser(), calculateTotal()</code></td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">Costanti globali</th>
                                <td><code>SCREAMING_SNAKE_CASE</code></td>
                                <td><code>MAX_RETRIES</code></td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">Componenti Vue\React</th>
                                <td><code>PascalCase</code></td>
                                <td><code>UserCard.vue, LoginForm.jsx</code></td>

                            </tr>
                            <tr class="fs-10">
                                <th scope="row">File JS/TS</th>
                                <td><code>kebab-case</code></td>
                                <td><code>user-service.js, auth-helper.ts</code></td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">CSS/SCSS file</th>
                                <td><code>kebab-case</code></td>
                                <td><code>button-style.scss</code></td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">Route / URL</th>
                                <td><code>kebab-case</code></td>
                                <td><code>/user-profile/edit</code></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Cosa evitare:</h3>
                    <ul class="normal-list">
                        <li><code>get_user()</code> -> stile Python</li>
                        <li><code>GetUser()</code> -> maiuscola iniziale riservata a classi/componenti</li>
                        <li><code>User-service.js</code> -> maiuscola in un file: NO!</li>
                    </ul>
                    <!-- <CodeBlock 
                    :code="`class UserController extends Controller {\n    public function index() {\n        return view(\'users.index\', [\n            \'users\' => User::paginate(10)\n        ]);\n    }\n}`" 
                    language="php" 
                    /> -->

                </li>
                <li>
                    <span class="subtitle-span">Componenti riutilizzabili Vue / React</span>
                    <ul class="normal-list">
                        <li>I componenti devono fare una cosa sola e bene.</li>
                        <li>Evita logiche di business complesse dentro i componenti.</li>
                        <li>Includi slot in Vue o children in React per flessibilità.</li>
                    </ul>
                    <p>Esempio in vue:</p>
                    <CodeBlock 
                    :code='`<!-- components/BaseButton.vue -->\n<template>\n  <button :class="classes" @click="$emit(\"click\")">\n    <slot />\n  </button>\n</template>\n\n<script setup>\ndefineProps({\n  variant: { type: String, default: \"primary\" }\n})\n\nconst classes = computed(() => {\n  return variant === \"primary\" ? \"btn btn-primary\" : \"btn btn-secondary\"\n})\n</script>`' 
                    language="js" 
                    />
                    <p>Uso:</p>
                    <CodeBlock 
                    :code="`<BaseButton variant=\\\'secondary\\\' @click=\\\'save\\\'>Salva</BaseButton>`" 
                    language="js" 
                    />

                </li>
                <li>
                    <span class="subtitle-span">Suggerimenti generali</span>
                    <ul class="normal-list">
                        <li>Naming coerente e autoesplicativo: <code>deleteUser</code> è meglio di <code>handleDelete</code></li>
                        <li>Evita abbreviazioni: usr ❌ → user ✅</li>
                        <li>Evita componenti giganti: Se un componente è >200 righe, probabilmente va diviso.</li>
                        <li>DRY (Don’t Repeat Yourself): Se ripeti lo stesso codice HTML 3 volte, fanne un componente.</li>
                    </ul>
                </li>
                <li>
                    <span class="subtitle-span">Non cambiare variabili esterne (No side effects)</span>
                    <p>Una funzione dovrebbe evitare di modificare dati al di fuori del proprio scope, a meno che non sia intenzionale e ben documentato.</p>
                    <p>❌ Esempio con side effect:</p>

                    <CodeBlock 
                    :code="`let total = 0\n\nfunction addToTotal(amount) {\n  total += amount // ⚠️ modifica variabile esterna\n}`" 
                    language="js" 
                    />

                    <p>✅ Esempio senza side effect:</p>
                    <CodeBlock 
                    :code="`function calculateNewTotal(currentTotal, amount) {\n  return currentTotal + amount\n}`" 
                    language="js" 
                    />
                </li>
            </ol>

        </template>
    </Article>
</template>



