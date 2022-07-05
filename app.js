const express = require('express');
const { todosController } = require('./controllers');
const { errorHandlers } = require('./middleware');
const app = express();

app.use(express.json());

app.post('/todos', todosController.createTodo);
app.get('/todos', todosController.getTodos);
app.get('/todos/:id', todosController.getTodoById);

app.patch('/todos/:id', todosController.updateTodoById);

app.delete('/todos/:id', todosController.deleteTodoById);

app.use(errorHandlers.errorHandler);
module.exports = app;
