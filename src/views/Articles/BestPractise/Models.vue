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
                In questo articolo parleremo di come dovrebbero essere gestiti i modelli in un'applicazione Laravel, seguendo le best practices per una struttura chiara e manutenibile.
            </p>
        </template>
        <template #text>

            <ol class="subtitle-list">
                <li>
                    <span class="subtitle-span">Organizzazione generale</span>
                    <ul class="normal-list">
                        <li>
                            Metti le costanti (es. stati, tipi, ruoli) in cima alla classe modello, così sono subito visibili.
                        </li>
                        <li>
                            Separa chiaramente le sezioni:  
                            <ul class="normal-list">
                                <li>
                                    Costanti
                                </li>
                                <li>
                                    Proprietà (fillable, hidden, casts, appends)
                                </li>
                                <li>
                                    Relazioni
                                </li>
                                <li>
                                    Scopes (query scope)
                                </li>
                                <li>
                                    Accessors e Mutators
                                </li>
                                <li>
                                    Metodi di business logic / helper
                                </li>
                            </ul>                      
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="subtitle-span">Costanti</span>
                    <ul class="normal-list">
                        <li>
                            Usa costanti per valori fissi che si ripetono, ad esempio:
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`class User extends Model\n{\n    public const STATUS_ACTIVE = 'active';\n    public const STATUS_INACTIVE = 'inactive';\n\n    // ...\n}`" 
                    language="php" 
                    />
                    <p>In questo modo eviti "magic strings" sparsi nel codice e puoi cambiare il valore da un unico punto.</p>
                        
                </li>
                <li>
                    <span class="subtitle-span">Proprietà fillable e guarded</span>
                    <ul class="normal-list">
                        <li>
                            Per la sicurezza, definisci chiaramente quali attributi possono essere assegnati in massa:
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`protected \\$fillable = ['name', 'email', 'password'];\n// oppure\nprotected \\$guarded = ['id'];`" 
                    language="php" 
                    />

                    <p>Non usare protected $guarded = [] a meno che non sia strettamente necessario (es. modelli molto dinamici).</p>
                        
                </li>
                <li>
                    <span class="subtitle-span">Casting degli attributi</span>
                    <ul class="normal-list">
                        <li>
                            Se alcuni campi devono essere automaticamente convertiti, usa <code>$casts:</code>
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`protected \\$casts = {\n    'email_verified_at' => 'datetime',\n    'is_admin' => 'boolean',\n};`" 
                    language="php" 
                    />
                        
                </li>
                <li>
                    <span class="subtitle-span">Casting degli attributi</span>
                    <ul class="normal-list">
                        <li>
                            Usa <code>$appends:</code> per aggiungere attributi custom (accessor) quando il modello viene serializzato in array o JSON:
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`protected \\$appends = ['full_name'];\n\npublic function getFullNameAttribute()\n{\n    return \\$this->first_name . ' ' . \\$this->last_name;\n}`" 
                    language="php" 
                    />
                        
                </li>
                <li>
                    <span class="subtitle-span">Accessors & Mutators</span>
                    <ul class="normal-list">
                        <li>
                            Accessor per leggere/modificare dati in uscita (convenzione getXAttribute)
                        </li>
                        <li>
                            Mutator per modificare dati in ingresso (convenzione setXAttribute)
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`public function getIsActiveAttribute()\n{\n    return \\$this->status === self::STATUS_ACTIVE;\n}\n\npublic function setPasswordAttribute(\\$value)\n{\n    \\$this->attributes['password'] = bcrypt(\\$value);\n}`" 
                    language="php" 
                    />
                        
                </li>
                <li>
                    <span class="subtitle-span">Query Scopes</span>
                    <ul class="normal-list">
                        <li>
                            Per query riutilizzabili e leggibili, usa gli scope:
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`public function scopeActive(\\$query)\n{\n    return \\$query->where('status', self::STATUS_ACTIVE);\n}\n\n// Uso\nUser::active()->get();`" 
                    language="php" 
                    />
                        
                </li>
                <li>
                    <span class="subtitle-span">Traits</span>
                    <ul class="normal-list">
                        <li>
                          Se hai molte funzionalità comuni (es. timestamps personalizzati, scopes comuni), valuta di usare Traits per riutilizzo.                        
                        </li>
                    </ul>       
                </li>
                <li>
                    <span class="subtitle-span">Quando ha senso creare una classe base da estendere</span>
                    <ul class="normal-list">
                        <li>
                            Hai modelli diversi (es. User, Admin, Client) che devono fare cose simili?<br>
                            Crea una BaseModel e centralizza lì i metodi comuni.
                        </li>
                    </ul>
                    <CodeBlock 
                    :code="`class BaseModel extends Model\n{\n    public static function active()\n    {\n        return static::where(\'active\', true);\n    }\n\n    public function fullName()\n    {\n        return '{\$this->first_name} {\$this->last_name}';\n    }\n}\n\nclass User extends BaseModel {}\nclass Admin extends BaseModel {}`" 
                    language="php" 
                    />

                    <p>Ora puoi scrivere:</p>

                    <CodeBlock 
                    :code='`$users = User::active()->get();\n$admin = Admin::active()->first();`' 
                    language="php" 
                    />

                    <h3>Quando NON farlo</h3>
                    <ul class="normal-list">
                        <li>
                            Se hai solo 1 o 2 modelli: troppa astrazione inutile
                        </li>
                        <li>
                            Se i modelli hanno logiche completamente diverse
                        </li>
                        <li>
                            Se stai forzando l’ereditarietà per evitare l’uso di trait (i trait sono ottimi in Laravel!)
                        </li>
                    </ul>


                        
                </li>
            </ol>

        </template>
    </Article>
</template>



