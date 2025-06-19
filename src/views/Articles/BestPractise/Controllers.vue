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
                In questo articolo parleremo di come dovrebbero essere gestiti i controller in un'applicazione Laravel, seguendo le best practices per una struttura chiara e manutenibile.
            </p>
        </template>
        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Usa il principio Single Responsibility</span>
                    <ul class="normal-list">
                        <li>
                            Un controller dovrebbe fare una cosa sola: gestire una specifica risorsa.
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`class UserController extends Controller {\n    public function index() {\n        return view(\'users.index\', [\n            \'users\' => User::paginate(10)\n        ]);\n    }\n}`" 
                    language="php" 
                    />

                </li>
                <li>
                    <span class="subtitle-span">Delegare la logica a Service/Action class</span>
                    <ul class="normal-list">
                        <li>
                            Evita controller con troppa logica. Usa classi dedicate
                        </li>
                    </ul>
                    <CodeBlock 
                    :code='`$user = CreateUserService::handle($request->all());`' 
                    language="php" 
                    />

                </li>
                <li>
                    <span class="subtitle-span">Usa Form Request per validare i dati</span>
                    <ul class="normal-list">
                        <li>
                            Evita validate() diretto nel controller.
                        </li>
                    </ul>
                    <CodeBlock 
                    :code='`public function store(StoreUserRequest $request) {\n    // i dati sono già validati\n}`' 
                    language="php" 
                    />

                </li>
                <li>
                    <span class="subtitle-span">Segui il pattern RESTful</span>
                    <ul class="normal-list">
                        <li>
                            Laravel è fatto per il pattern resource controller:
                        </li>
                    </ul>
                    <table class="table table-dark table-striped">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col" class="font-weight-bold">Metodo HTTP</th>
                            <th scope="col" class="font-weight-bold">URI</th>
                            <th scope="col" class="font-weight-bold">Metodo Controller</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="fs-10">
                                <th scope="row">GET</th>
                                <td>/users</td>
                                <td>index</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">GET</th>
                                <td>/users/{id}</td>
                                <td>show</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">POST</th>
                                <td>/users</td>
                                <td>store</td>
                            </tr>
                            <tr class="fs-10">
                                <th scope="row">PUT/PATCH</th>
                                <td>/users{id}</td>
                                <td>update</td>

                            </tr>
                            <tr class="fs-10">
                                <th scope="row">DELETE</th>
                                <td>/users/{id}</td>
                                <td>destroy</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>Esempio di come apparirebbero le rotte:</p>
                    <CodeBlock 
                    :code="`use App\\Http\\Controllers\\UserController;\n\nRoute::post(\'/users\', [UserController::class, \'store\'])->name(\'users.store\');`" 
                    language="php" 
                    />
                </li>
                <li>
                    <span class="subtitle-span">Mantieni i controller leggeri</span>
                    <p>
                        Un buon controller non supera 50–60 righe.<br>
                        Se ne ha di più, è il momento di estrarre:
                    </p>
                    <ul class="normal-list">
                        <li>
                            servizi <code>(UserService)</code>
                        </li>
                        <li>
                            repository  <code>(UserRepository)</code>
                        </li>
                        <li>
                            action  <code>(CreateUserAction)</code>
                        </li>
                        <li>
                            form request <code>(StoreUserRequest)</code>
                        </li>                                                
                    </ul>
                    <CodeBlock 
                    :code='`public function store(StoreUserRequest $request) {\n    // i dati sono già validati\n}`' 
                    language="php" 
                    />

                </li>
                <li>
                    <span class="subtitle-span">Mantieni i controller leggeri</span>
                    <p>
                        Un buon controller non supera 50–60 righe.<br>
                        Se ne ha di più, è il momento di estrarre:
                    </p>
                    <ul class="normal-list">
                        <li>
                            servizi <code>(UserService)</code>
                        </li>
                        <li>
                            repository  <code>(UserRepository)</code>
                        </li>
                        <li>
                            action  <code>(CreateUserAction)</code>
                        </li>
                        <li>
                            form request <code>(StoreUserRequest)</code>
                        </li>                                                
                    </ul>
                    <CodeBlock 
                    :code='`app/\n├── Actions/\n│   └── User/\n│       └── CreateUserAction.php\n├── Http/\n│   ├── Controllers/\n│   │   └── UserController.php\n│   ├── Requests/\n│   │   └── StoreUserRequest.php\n├── Services/\n│   └── UserService.php`' 
                    language="sql" 
                    />

                    <p>StoreUserRequest.php</p>
                    <CodeBlock 
                    :code="`// app/Http/Requests/StoreUserRequest.php\nnamespace App\Http\Requests;\n\nuse Illuminate\Foundation\Http\FormRequest;\n\nclass StoreUserRequest extends FormRequest\n{\n    public function authorize(): bool\n    {\n        return true; // oppure gestisci autorizzazione se necessario\n    }\n\n    public function rules(): array\n    {\n        return [\n            \'name\'     => \'required|string|max:255\',\n            \'email\'    => \'required|email|unique:users,email\',\n            \'password\' => \'required|string|min:8|confirmed\',\n        ];\n    }\n}`" 
                    language="php" 
                    />

                    <p>CreateUserAction.php</p>

                    <CodeBlock 
                    :code="`namespace App\\Actions\\User;\n\nuse App\\Models\\User;\nuse Illuminate\\Support\\Facades\\Hash;\n\nclass CreateUserAction\n{\n    public function execute(array $data): User\n    {\n        return User::create([\n            \'name\'     => $data[\'name\'],\n            \'email\'    => $data[\'email\'],\n            \'password\' => Hash::make($data[\'password\']),\n        ]);\n    }\n}`" 
                    language="php" 
                    />

                    <p>UserService.php</p>

                    <CodeBlock 
                    :code="`// app/Services/UserService.php\nnamespace App\\Services;\n\nuse App\\Actions\\User\\CreateUserAction;\nuse App\\Models\\User;\n\nclass UserService\n{\n    public function __construct(\n        protected CreateUserAction \$createUserAction\n    ) {}\n\n    public function createUser(array \$data): User\n    {\n        // qui potresti loggare, inviare email, trigger eventi, ecc.\n        return \$this->createUserAction->execute(\$data);\n    }\n}`" 
                    language="php" 
                    />

                    <h3>UserController esempio con gli elementi citati sopra, snello e chiaro.</h3>
                    <CodeBlock 
                    :code="`// app/Http/Controllers/UserController.php\nnamespace App\\Http\\Controllers;\n\nuse App\\Http\\Requests\\StoreUserRequest;\nuse App\\Services\\UserService;\nuse Illuminate\\Http\\RedirectResponse;\n\nclass UserController extends Controller\n{\n    public function store(StoreUserRequest \$request, UserService \$service): RedirectResponse\n    {\n        \$user = \$service->createUser(\$request->validated());\n\n        return redirect()->route(\'users.index\')->with(\'success\', \'Utente creato!\');\n    }\n}`" 
                    language="php" 
                    />

                    <h4>Vantaggi</h4>
                    <ul class="normal-list">
                        <li>
                            Controller chiaro e focalizzato
                        </li>
                        <li>
                            Logica riutilizzabile e testabile
                        </li>
                        <li>
                            Azione atomica <code>(CreateUserAction)</code> testabile
                        </li>
                        <li>
                            Servizio estendibile con notifiche, logging, eventi, ecc.
                        </li>
                    </ul>
                </li>
            </ol>

        </template>
    </Article>
</template>



