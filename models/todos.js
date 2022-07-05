const todosDB = [
  {
    id: 1,
    title: 'first task',
    body: 'first task body',
    isDone: false,
    createdAt: new Date('May 22, 2022')
  }
];

class TodosDB {
  constructor (arr) {
    this.todos = [...arr];
  }

  createTodo = newTodo => {
    this.todos.push({
      ...newTodo,
      id: Date.now(),
      isDone: false,
      createdAt: new Date()
    });
    return this.todos[this.todos.length - 1];
  };

  getTodos = () => {
    return [...this.todos];
  };

  getTodoById = id => {
    const findIndex = this.todos.findIndex(t => t.id === +id);
    return findIndex === -1 ? null : this.todos[findIndex];
  };

  updateTodoById = (id, newInfo) => {
    const foundTodoIndexToUpdate = this.todos.findIndex(t => t.id === +id);

    if (foundTodoIndexToUpdate !== -1) {
      this.todos[foundTodoIndexToUpdate] = {
        ...this.todos[foundTodoIndexToUpdate],
        ...newInfo
      };
    }

    return foundTodoIndexToUpdate === -1
      ? null
      : this.todos[foundTodoIndexToUpdate];
  };

  deleteTodoById = id => {
    const foundTodoIndexToDelete = this.todos.findIndex(t => t.id === +id);

    return foundTodoIndexToDelete === -1
      ? null
      : this.todos.splice(foundTodoIndexToDelete, 1);
  };
}

const todosDbInstace = new TodosDB(todosDB);

module.exports = todosDbInstace;
