const express = require('express');
const { todosController } = require('./controllers');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.post('/todos', todosController.createTodo);
app.get('/todos', todosController.getTodos);
app.get('/todos/:id', todosController.getTodoById);

module.exports = app;
