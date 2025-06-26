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
                Checklist da fare prima di avviare un progetto
            </p>
        </template>

        <template #text>

            <v-timeline side="end">
                <v-timeline-item
                    dot-color="green-lighten-1"
                    size="small"
                >
                    <v-alert
                        color="light-blue-lighten-5"
                        value="true"
                    >
                            <h4>1. Analisi strumenti necessari</h4>
                            <p>
                                Analizza il progetto nella sua interezza cercando di capire a grandi linee quali strumenti potrebbero servirti. Il tempo utilizzato in questa fase è importantissimo durante le fasi centrali e finali del progetto.
                                Un buon lavoro di analisi ti consentirà di strutturare al meglio la piattaforma evitando lavorazioni lunghe e forzate con poca manutenibilità e ad alto rischio di malfunzionamento.
                            </p>                
                    </v-alert>
                </v-timeline-item>
                <v-timeline-item
                    dot-color="green-lighten-1"
                    size="small"
                >
                    <v-alert
                        color="light-blue-lighten-5"
                        value="true"
                    >
                        <h4>2. Implementazione struttura e strumenti post analisi</h4>
                        <p>
                            Una volta analizzato quanto necessario, più siamo stati bravi nel punto 1, più bassa sarà la percentuale di errore da correggere da qui in avanti. 
                            Una delle prime cose da fare prima di partire con il codice è proprio gestire le fasi fondamentali del progetto, come le fondamenta per una casa. <br>
                            In questa fase quindi, si deciderà la tecnologia da utilizzare, a seguire la definizione della struttura da costruire e a seconda delle caratteristiche, gli strumenti annessi.
                        </p>               
                    </v-alert>
                </v-timeline-item>
                <v-timeline-item
                    dot-color="green-lighten-1"
                    size="small"
                >
                    <v-alert
                        color="light-blue-lighten-5"
                        value="true"
                    >
                        <h4>3. Esempi strumenti necessari</h4>
                        <table class="table table-dark table-striped">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col" class="font-weight-bold">Desiderata</th>
                                <th scope="col" class="font-weight-bold">Strumento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="fs-10">
                                    <th scope="row">Progetto basato su ruoli e permessi</th>
                                    <td>Valutare la possibilità di integrare Laravel permission fin dall'inizio, evitando di dover mettere mano in seguito rifattorizzando codice già collaudato</td>
                                </tr>
                                <tr class="fs-10">
                                    <th scope="row">Progetto con brand identity / richiesta grafica</th>
                                    <td>Valutare fin da subito una struttura importante dei file con modalità SASS, creando variabili con i codici colore, fonts, sizes, ecc.</td>
                                </tr>
                                <tr class="fs-10">
                                    <th scope="row">Progetto con parole chiave e wording</th>
                                    <td>Utilizzare metodi che formattano queste parole in modo da poterli modificare velocemente on demand, utilizzo di enums, consts, ecc. Importante utilizzare fin da subito i language di laravel </td>
                                </tr>
                                <tr class="fs-10">
                                    <th scope="row">Progetto con schedulates, mails, e-commerces, ecc.</th>
                                    <td>Valutare l'utilizzo degli JOB di Laravel, in modo da centralizzare le richieste in unico sistema di smistamento delle opreazioni, evitando possibili blocchi nel flusso</td>

                                </tr>
                                <tr class="fs-10">
                                    <th scope="row">Standard per tutti i progetti</th>
                                    <td>
                                        <ul class="normal-list">
                                            <li>Prevedere la sanificazione degli input client e server</li>
                                            <li>Prevedere di selezionare i dati da portare in frontend, anzichè fare <code>"->all()"</code></li>
                                            <li>Valuta se ciò che scrivi possa essere riutilizzato o parametrizzato</li>
                                            <li>Utilizzare gli standard best practices nei capitoli di questo sito</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>        
                    </v-alert>
                </v-timeline-item>
                <v-timeline-item
                    dot-color="green-lighten-1"
                    size="small"
                >
                    <v-alert
                        color="light-blue-lighten-5"
                        value="true"
                    >
                        <h4>4. Primi sviluppi</h4>
                        <p>
                            Solo <strong>DOPO</strong> aver costruito le fondamenta del progetto, si potrà procedere con gli sviluppi custom della piattaforma. A questo punto se non l'hai già fatto, valuta di costruire componenti
                            che puoi riutilizzare nell'applicativo come: 
                            <ul class="normal-list">
                                <li>Modali</li>
                                <li>Alert</li>
                                <li>Log</li>
                                <li>Handlers</li>
                                <li>File includes</li>
                                <li>Metodi</li>
                            </ul>
                            Tutto ciò ti permetterà di ridurre <strong>tempo</strong>, <strong>percentuale di errori</strong>, <strong>manutenibilità</strong> e tantissimi altri vantaggi che potresti rimpiangere in fasi del progetto 
                            dove modificare, eliminare o correggere potrebbe non essere possibile poichè troppo tardi.
                        </p>
                    </v-alert>
                </v-timeline-item>
            </v-timeline>
     

        </template>
    </Article>
</template>



