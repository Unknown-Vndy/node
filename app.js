const express = require('express');
const { todosController } = require('./controllers');
const app = express();

app.use(express.json());

app.post('/todos', todosController.createTodo);
app.get('/todos', todosController.getTodos);
app.get('/todos/:id', todosController.getTodoById);

app.patch('/todos/:id', todosController.updateTodoById);

app.delete('/todos/:id', todosController.deleteTodoById);

module.exports = app;
