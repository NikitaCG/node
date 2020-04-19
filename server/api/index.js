const bodyParser = require('body-parser');

const {
  setupData,
  getTodos,
  getTodo,
  postTodo,
  deleteTodo
} = require('./handlers');

const api = (server) =>{
  server
    .use(bodyParser.json())
    .get('/api/setup', setupData)
    .get('/api/todos/:username', getTodos)
    .get('/api/todo/:id', getTodo)
    .post('/api/todo/', postTodo)
    .delete('/api/todo/:id', deleteTodo);
}

module.exports = api;