import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchTodo } from 'actions/apiTodos';
import {
  changeTodoHasAttachment,
  changeTodoIsDone,
  changeTodoName,
} from 'actions/appTodos';

import s from './style.css';

const mapStateToProps = (state: any, ownProps: any) => ({
  todo: state.todos.todo,
  todoId: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadTodo: (id: TodoInfo['id']) => dispatch(fetchTodo(id)),
  onChangeTodoName: (name: Todo['username']) => dispatch(changeTodoName(name)),
  onChangeTodoHasAttachment: (hasAttachment: Todo['hasAttachment']) => dispatch(changeTodoHasAttachment(hasAttachment)),
  onChangeTodoIsDone: (isDone: Todo['isDone']) => dispatch(changeTodoIsDone(isDone)),
});

type TodoPageProps = {
  todoId: TodoInfo['id'],
  loadTodo: (id: TodoInfo['id']) => void,
  onChangeTodoName: (name: Todo['username']) => void,
  onChangeTodoHasAttachment: (hasAttachment: Todo['hasAttachment']) => void,
  onChangeTodoIsDone: (isDone: Todo['isDone']) => void,
  todo: Todo,
};

const TodoPage: React.FC<TodoPageProps> = ({
  todoId,
  todo: {
    username,
    todo: todoName,
    isDone,
    hasAttachment,
  },
  loadTodo,
  onChangeTodoHasAttachment,
  onChangeTodoIsDone,
  onChangeTodoName,
}) => {

  const handleChangeTodoName = (e: any) => {
    onChangeTodoName(e.target.value);
  };

  const handleChangeTodoIsDone = (e: any) => {
    onChangeTodoIsDone(e.target.checked);
  };

  const handleChangeTodoHasAttachment = (e: any) => {
    onChangeTodoHasAttachment(e.target.checked);
  };

  useEffect(() => {
    if (todoId) {
      loadTodo(todoId);
    }
  }, [todoId]);

  return (
    <div className={s.container}>
      <div className={s.fields}>
        <input
          type='text'
          value={todoName}
          onChange={handleChangeTodoName}
        />
        <input
          type='checkbox'
          checked={isDone}
          onChange={handleChangeTodoIsDone}
        />
        <input
          type='checkbox'
          checked={hasAttachment}
          onChange={handleChangeTodoHasAttachment}
        />
      </div>
      <div className={s.controllers}>

      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);