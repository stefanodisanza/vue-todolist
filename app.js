const app = Vue.createApp({
    data() {
      return {
        todos: [
          { text: 'Pushare la repo', done: false },
          { text: 'Hackerare il sistema', done: true },
          { text: 'Passare lo straccio', done: false },
          { text: 'Comprare Coca-Cola', done: false}
        ],
        newTodo: ''
      }
    },
    methods: {      
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  });
  
  app.mount('#app');
  