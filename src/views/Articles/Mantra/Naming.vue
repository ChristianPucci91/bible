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



