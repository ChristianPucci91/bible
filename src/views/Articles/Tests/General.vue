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
                Tipi di test e spiegazioni
            </p>
        </template>

        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Laravel supporta due tipi principali di test:</span>
                    <ol class="normal-list">
                        <li>
                            <strong>Unit Test:</strong> Testano singole unità di codice (es. un metodo di un modello)
                        </li>
                        <li>
                            <strong>Feature Test:</strong> Testano l’interazione dell’utente con l’app (rotte, form, CRUD)
                        </li>                                                      
                    </ol>
                    <p>
                        In Laravel, di solito i test usano un database separato, o comunque isolato, per evitare di "sporcare" il database reale.
                    </p>
                    <ul class="normal-list">
                        <li>
                            Puoi configurare un database apposito per i test nel file .env.testing o nel file phpunit.xml
                        </li>
                        <li>
                            Ad esempio puoi usare un database SQLite in memoria, velocissimo e temporaneo
                        </li>     
                        <li>
                            Oppure puoi usare un database MySQL/Postgres separato
                        </li>                                                                           
                    </ul>
                    <p>
                        Come Laravel gestisce il database durante i test
                    </p>
                    <ul class="normal-list">
                        <li>
                            RefreshDatabase: svuota il database e rifà tutte le migration prima di ogni test
                        </li>
                        <li>
                            DatabaseTransactions: fa partire una transazione all’inizio del test e la annulla alla fine (veloce ma funziona solo con database che supportano transazioni)                        
                        </li>                                                                             
                    </ul>
                </li>
                <li>
                    <span class="subtitle-span">ESEMPIO 1: Feature Test – API GET <code>/api/todos</code></span>
                    <CodeBlock 
                    :code="`public function test_can_get_todos()\n{\n    Todo::factory(10)->create(); // 🔹 Crea 10 todo falsi nel database\n\n    $response = $this->get('/api/todos'); // 🔹 Simula una richiesta GET all’API\n\n    $response->assertStatus(200); // 🔸 Controlla che la risposta HTTP sia 200 OK\n    $response->assertJsonCount(10, 'todos'); // 🔸 Verifica che il JSON contenga 10 todo\n}`" 
                    language="php" 
                    />
                    <ol class="normal-list">
                        <li>
                            <code>Todo::factory()->create(): </code>crea record di test (fake).
                        </li>
                        <li>
                            <code>$this->get('/api/route')</code> simula una chiamata HTTP.
                        </li> 
                        <li>
                            <code>assertStatus(200) </code>verifica che la risposta HTTP sia corretta.
                        </li>
                        <li>
                            <code>assertJsonCount(n, 'campo')</code> verifica quanti elementi ha un array JSON.
                        </li>                                                            
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span"> ESEMPIO 2: Unit Test – Metodo personalizzato in un modello</span>
                    <CodeBlock 
                    :code="`it('capitalizes the first character of the first name', function () {\n    $user = User::factory()->create(['first_name' => 'mario']);\n    expect($user->first_name)->toBe('Mario');\n});`" 
                    language="php" 
                    />
                    <ol class="normal-list">
                        <li>
                            <code>User::factory()->create() </code>crea un utente di test
                        </li>
                        <li>
                            <code>expect($valore)->toBe('qualcosa')</code> controlla che il risultato atteso sia corretto.
                        </li>                                                         
                    </ol>
                </li>
                <li>
                    <span class="subtitle-span"> ESEMPIO 3: Test di validazione</span>
                    <CodeBlock 
                    :code="`public function test_form_validation()\n{\n    $response = $this->post('/register', [ 'email' => 'prova@example.com' ]);\n    $response->assertSessionHasErrors(['name']); // 🔸 Ci aspettiamo un errore perché manca il campo \\\'name\\\'\n}`" 
                    language="php" 
                    />

                </li>
                <li>
                    <span class="subtitle-span"> ESEMPIO 4: Test del database</span>
                    <CodeBlock 
                    :code="`public function test_task_deletion()\n{\n    $task = Task::factory()->create(); // crea task\n    $this->delete(\\\'/tasks/{$task->id}\\\'); // cancella il task\n    $this->assertDatabaseMissing('tasks', ['id' => $task->id]); // verifica che non esiste più\n}`" 
                    language="php" 
                    />
                    <p><code>assertDatabaseMissing()</code> verifica che un record sia stato eliminato.</p>
                </li>
                <li>
                    <span class="subtitle-span">ESEMPIO 5: Eventi / Mail</span>
                    <CodeBlock 
                    :code="`Mail::fake(); // disattiva l'invio reale delle mail\n\n\$this->post('/send-welcome-email');\n\nMail::assertSent(WelcomeMail::class); // verifica che la mail è stata \\\'spedita\\\''`" 
                    language="php" 
                    />
                    <p><code>assertDatabaseMissing()</code> verifica che un record sia stato eliminato.</p>
                </li> 
                <li>
                    <span class="subtitle-span">Riepilogo Laravel</span>
                    <table class="table table-dark table-striped mt-2">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col" class="font-weight-bold">Funzione</th>
                            <th scope="col" class="font-weight-bold">A cosa serve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="fs-10">
                                <th scope="row"><code>factory()->create()	</code></th>
                                <td>Crea dati fake</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>$this->get(), post()</code></th>
                                <td>Simula una richiesta HTTP</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>assertStatus(200)</code></th>
                                <td>Verifica risposta HTTP</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>assertJsonCount()</code></th>
                                <td>Verifica la lunghezza di un array JSON</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>assertDatabaseHas()</code></th>
                                <td>Controlla che un record esiste nel database</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>Mail::fake() / Event::fake()</code></th>
                                <td>Previene invii reali, utile per test isolati</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row"><code>assertSent() / assertDispatched()</code></th>
                                <td>Verifica che una mail/evento è stato inviato</td>
                            </tr>                            
                        </tbody>
                    </table>
                </li> 
            </ol>

        </template>
    </Article>
</template>


