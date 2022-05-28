const { Todos } = require('./../models')

module.exports.createTodo = (req, res) => {
  const { body } = req
  const newTodo = Todos.createTodo(body)
  res.status(201).send(newTodo)
}

module.exports.getTodos = (req, res) => {
  const todos = Todos.getTodos()
  res.status(200).send(todos)
}

module.exports.getTodoById = (req, res) => {
  const { id } = req.params
  const findTodo = Todos.getTodoById(id)
  if (findTodo) res.status(200).send(findTodo)
  else res.status(404).send('todo was not found')
}
