const MyNameApp = {
    data() {
        return {
            nome: 'Eliseu',
            idade: 24
        }
    }
}

const contadorComponent = {
    data() {
        return {
            contador: 0
        }
    },
    template: `
      <div>
        <p>Número atual: {{ contador }}</p>
        <button class="increment-button" @click="incrementar">Incrementar</button>
        <button class="decrement-button" @click="decrementar">Decrementar</button>
      </div>
    `,
    methods: {
        incrementar() {
            this.contador++;
        },
        decrementar() {
            this.contador--;
        }
    },
    beforeCreate() {
        console.log('beforeCreate: Componente Contador está sendo criado.');
    },
    created() {
        console.log('created: Componente Contador foi criado.');
    },
    beforeMount() {
        console.log('beforeMount: Componente Contador será montado no DOM.');
    },
    mounted() {
        console.log('mounted: Componente Contador foi montado no DOM.');
    },
    beforeUpdate() {
        console.log('beforeUpdate: Componente Contador será atualizado.');
    },
    updated() {
        console.log('updated: Componente Contador foi atualizado.');
    },
    beforeUnmount() {
        console.log('beforeUnmount: Componente Contador será desmontado.');
    },
    unmounted() {
        console.log('unmounted: Componente Contador foi desmontado.');
    }
}

const todoListComponent = {
    data() {
        return {
            tarefas: [],
            novaTarefa: ''
        }
    },
    methods: {
        adicionarTarefa() {
            if (this.novaTarefa.trim() !== '') {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = '';
            }
        },
        removerTarefa(index) {
            this.tarefas.splice(index, 1);
        }
    },
    template: `
      <div>
        <h2>Lista de Tarefas</h2>
        <ul>
          <li v-for="(tarefa, index) in tarefas" :key="index">
            {{ tarefa }}
            <button @click="removerTarefa(index)">Remover</button>
          </li>
        </ul>
        <form @submit.prevent="adicionarTarefa">
          <input type="text" v-model="novaTarefa" placeholder="Nova Tarefa" required>
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </div>
    `
}

Vue.createApp(MyNameApp)
    .component('contador-incremento', contadorComponent)
    .component('todo-list', todoListComponent)
    .mount('#app');
///////////////////
/*Vue.createApp({
    data() {
        return {
            usuarioLogado: false
        }
    },
    template: `
        <div>
            <h1>Renderização Condicional</h1>
            <p v-if="usuarioLogado">Bem-vindo, usuário logado!</p>
            <p v-else>Por favor, faça login para continuar.</p>
        </div>
    `
}).mount('#app');*/


