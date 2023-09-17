Vue.component('todo-list', {
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
  });
  