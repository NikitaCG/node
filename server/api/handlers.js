const Todos = require('../models/todoModel');

const setupData = (req, res) => {
  const initialTodos = [{
    username: "test",
    todo: "learn node",
    isDone: false,
    hasAttachment: false
  }];

  Todos.create(initialTodos, (err, result) => {
    res.send(result);
  });
};

const getTodos = (req, res) => {
  const { params } = req;

  Todos.find({username: params.username}, (err, todos) => {
    if (err) throw err;

    const todosInfos = todos.map(todo => ({
      id: todo.id,
      todo: todo.todo,
    }));

    res.send(todosInfos);
  });
};

const getTodo = (req, res) => {
  const { params } = req;

  Todos.findById({ _id: params.id}, (err, todo) => {
    if (err) throw err;

    const adaptedTodo = {
      id: todo.id,
      username: todo.username,
      todo: todo.todo,
      isDone: todo.isDone,
      hasAttachment: todo.hasAttachment,
    };

    res.send(adaptedTodo);
  });
};

const postTodo = (req, res) => {
  const { 
    body: {
      id,
      todo,
      isDone,
      hasAttachment,
    }
  } = req;

  if (id) {
    Todos.findByIdAndUpdate(id, {
      id,
      todo,
      isDone,
      hasAttachment,
    }, (err, todo) => {
      if (err) throw err;

      res.send('Success');
    })
  } else {
    const newTodo = Todo.create({
      username: 'test',
      todo,
      isDone,
      hasAttachment,
    });

    newTodo.save((err) => {
      if (err) throw err;

      res.send('Success');
    });
  }
}

const deleteTodo = (req, res) => {
  Todos.findByIdAndDelete(req.body.id, (err) => {
    if (err) throw err;

    res.send('Success');
  })
}

module.exports = {
  setupData: setupData,
  getTodos: getTodos,
  getTodo: getTodo,
  postTodo: postTodo,
  deleteTodo: deleteTodo
};