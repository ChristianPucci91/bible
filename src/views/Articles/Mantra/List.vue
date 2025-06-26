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
                Lista di Best Practice Prima di Scrivere Codice
            </p>
        </template>

        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Architettura e Design</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Single Responsibility Principle (SRP):</strong> Ogni funzione, classe o modolo dovrebbe avere una sola responsabilità. 
                            Più un blocco di codice fa cose diverse, più diventa difficile da testare, leggere e mantenere.
                        </li>
                        <li>
                            <strong>DRY – Don’t Repeat Yourself:</strong> Evita la duplicazione del codice. Se ti ritrovi a copiare e incollare le stesse righe, 
                            probabilmente puoi astrarre quella logica in una funzione riutilizzabile.
                        </li>
                        <li>
                            <strong>KISS – Keep It Simple, Stupid:</strong> Mantieni il codice il più semplice possibile. Non complicare ciò che può essere risolto con una soluzione più diretta. 
                            La semplicità è la chiave per la leggibilità e la manutenzione.
                        </li>
                        <li>
                            <strong>YAGNI – You Aren’t Gonna Need It:</strong> Non scrivere codice per funzionalità future che forse un giorno serviranno. Concentrati su ciò che è necessario ora.
                        </li>
                        <li>
                            <strong>SOLID Principles:</strong> Se lavori in contesto OOP, questi 5 principi sono essenziali per scrivere codice modolare e flessibile. Anche se non li applichi tutti, conoscerli fa la differenza.
                        </li>
                        <li>
                            <strong>Funzioni Pure (Pure Functions):</strong> Dove possibile, scrivi funzioni che non modificano lo stato esterno e che, a parità di input, restituiscono sempre lo stesso output. Sono più facili da testare e debug.
                        </li>                                                       
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Organizzazione del Codice</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Struttura delle cartelle:</strong> Segui una struttura coerente, intuitiva e scalabile. Nomina le cartelle in modo chiaro (es. components, services, views, store).
                        </li>
                        <li>
                            <strong>Naming Conventions:</strong> Usa convenzioni coerenti: camelCase per variabili, PascalCase per classi e componenti, kebab-case per nomi di file. Non mischiare gli stili.
                        </li>
                        <li>
                            <strong>Evita file monolitici:</strong> Se un file supera le 200 righe, chiediti se può essere diviso. Ogni file dovrebbe avere una responsabilità chiara.
                        </li>
                        <li>
                            <strong>Separazione tra logica e vista:</strong> In framework come Vue, React o Blade di Laravel, separa sempre la logica di business dalla presentazione. La vista deve solo mostrare dati.
                        </li>
                        <li>
                            <strong>Componenti riutilizzabili:</strong> Non copiare e incollare HTML. Se usi lo stesso markup più volte, crea un componente.
                        </li>                                                   
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Funzioni e Metodi</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Pochi argomenti:</strong> Cerca di mantenere le funzioni con massimo 3-5 parametri. Se ne servono di più, probabilmente stai passando troppi dati o manchi di una struttura.
                        </li>
                        <li>
                            <strong>Non modificare variabili esterne:</strong> Evita effetti collaterali: non alterare variabili globali o parametri passati come riferimento.
                        </li>
                        <li>
                            <strong>Restituisci valori:</strong> Una funzione dovrebbe restituire un valore, non modificarne uno al di fuori del suo scope.
                        </li>
                        <li>
                            <strong>Nomi descrittivi:</strong> Usa nomi chiari e autoesplicativi. Un buon nome elimina la necessità del commento.
                        </li>
                        <li>
                            <strong>Evita condizioni annidate:</strong> Troppi <code>if</code> dentro altri <code>if</code> rendono il codice difficile da leggere. Usa early return o funzioni ausiliarie per semplificare.
                        </li>                                                   
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Gestione del Progetto</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Linter e formatter:</strong> Configura strumenti come ESLint, Prettier (JS/TS) o PHP-CS-Fixer per mantenere lo stile del codice uniforme.
                        </li>
                        <li>
                            <strong>Documenta il necessario:</strong> Scrivi commenti solo dove serve: per logica complessa o comportamenti “magici”. Non spiegare l’ovvio.
                        </li>
                        <li>
                            <strong>3. Pensa ai test:</strong> Anche se non scrivi TDD, cerca almeno di progettare funzioni testabili. Domandati: “Come testerei questa funzione?”
                        </li>
                        <li>
                            <strong>Scrivi commit chiari:</strong> Segui una convenzione nei messaggi Git, come:
                            <ul class="normal-list">
                                <li><code>feature:</code> per nuove funzionalità</li>
                                <li><code>fix:</code> per bugfix</li>
                                <li><code>refactor:</code> per riorganizzazione del codice</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Evita condizioni annidate:</strong> Troppi <code>if</code> dentro altri <code>if</code> rendono il codice difficile da leggere. Usa early return o funzioni ausiliarie per semplificare.
                        </li>                                                   
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Testabilità e Manutenzione</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Codice facilmente testabile:</strong> Scrivi funzioni pure quando possibile (senza effetti collaterali). Evita dipendenze dirette da variabili globali o ambienti esterni.
                        </li>
                        <li>
                            <strong>Progetta pensando alla manutenzione:</strong> Chiediti: “Se tra 6 mesi rileggo questo codice, lo capisco al volo?”. Nomi chiari e struttura coerente aiutano più dei commenti.
                        </li>
                        <li>
                            <strong>Evita accoppiamento rigido:</strong> Non hardcodare valori o classi direttamente: usa configurazioni, dipendenze iniettate o helper. Questo rende il codice più flessibile e testabile.
                        </li>
                        <li>
                            <strong>Leggibilità prima dell’ottimizzazione:</strong> Un codice chiaro e leggibile è sempre preferibile a uno “furbo” ma indecifrabile. Ottimizza solo se necessario e dopo avere un benchmark.
                        </li>
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Frontend/UI (Vue, React)</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Componenti base riutilizzabili:</strong> Crea elementi UI generici e stilizzati come <code>&lt;BaseButton&gt;</code>, <code>&lt;BaseInput&gt;</code>, <code>&lt;BaseModal&gt;</code> per evitare duplicazione.
                        </li>
                        <li>
                            <strong>Gestione dello stato con criterio:</strong> Usa Vuex/Pinia o Redux solo quando serve. Se puoi gestire lo stato localmente nel componente, fallo.
                        </li>
                        <li>
                            <strong>Separazione delle responsabilità:</strong> Non scrivere tutta la logica nel componente. Sposta la logica complessa in composable, store, helper o servizi.
                        </li>
                        <li>
                            <strong>Struttura chiara dei file:</strong> Organizza il codice in cartelle come <code>components/</code>, <code>views/</code>, <code>store/</code>, <code>services/</code> e <code>utils/</code> per mantenere il progetto scalabile.
                        </li>
                        <li>
                            <strong>Design responsivo e mobile-first:</strong> Pensa prima al layout su mobile e adatta poi per schermi più grandi. Usa classi utility (es. Tailwind) o media query efficaci.
                        </li>
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span">Laravel (o PHP moderno)</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Usa le risorse e i Form Request:</strong> Per gestire output API e validazione, sfrutta <code>Resource</code> e <code>FormRequest</code> per separare la logica dal controller.
                        </li>
                        <li>
                            <strong>Controller leggeri:</strong> Evita di inserire logica business direttamente nei controller. Spostala in <code>Service</code>, <code>Action</code> o <code>Job</code>.
                        </li>
                        <li>
                            <strong>Sfrutta appieno Eloquent:</strong> Usa relazioni, accessors, mutators e local scopes per scrivere query leggibili e manutenibili.
                        </li>
                        <li>
                            <strong>Naming consistente:</strong> I metodi dei controller dovrebbero seguire una convenzione RESTful (index, store, update, destroy...). Niente nomi vaghi o confusi.
                        </li>
                        <li>
                            <strong>Centralizza validazioni e autorizzazioni:</strong> Non duplicare logica. Usa policies e form request per gestire permessi e vincoli di input in modo riutilizzabile.
                        </li>
                    </ol>
                </li>

            </ol>

        </template>
    </Article>
</template>



