import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchTodo } from 'actions/apiTodos';
import {
  changeTodoHasAttachment,
  changeTodoIsDone,
  changeTodoName,
  initialCreateTodo,
} from 'actions/appTodos';

import { CONTROL_BUTTONS_TYPES, ControlButton } from './components/ControlButton';

import s from './style.css';

const mapStateToProps = (state: any, ownProps: any) => ({
  todo: state.todos.todo,
  todoId: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadTodo: (id: TodoInfo['id']) => dispatch(fetchTodo(id)),
  initialCreateTodo: () => dispatch(initialCreateTodo()),
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
  initialCreateTodo: () => void,
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
  initialCreateTodo,
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
    } else {
      initialCreateTodo();
    }
  }, [todoId]);

  return (
    <div className={s.container}>
      <div className={s.fields}>
        <label>
          TODO name:
        <input
          type='text'
          value={todoName}
          onChange={handleChangeTodoName}
        />
        </label>
        <label>
          is done:
        <input
          type='checkbox'
          checked={isDone}
          onChange={handleChangeTodoIsDone}
        />
        </label>
        <label>
          has attachment:
        <input
          type='checkbox'
          checked={hasAttachment}
          onChange={handleChangeTodoHasAttachment}
        />
        </label>
      </div>
      <div className={s.controllers}>
        <ControlButton type={CONTROL_BUTTONS_TYPES.SAVE} onClick={() => {}} />
        <ControlButton type={CONTROL_BUTTONS_TYPES.DELETE} onClick={() => {}} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);