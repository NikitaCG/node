import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  fetchDeleteTodo,
  fetchPostTodo,
  fetchTodo,
} from 'actions/apiTodos';

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

const mapDispatchToProps = (dispatch: Dispatch, { history }) => ({
  loadTodo: (id: TodoInfo['id']) => dispatch(fetchTodo(id)),
  postTodo: (body: Todo) => dispatch(fetchPostTodo(body)),
  deleteTodo: (id: TodoInfo['id']) => dispatch(fetchDeleteTodo(id)),
  initialCreateTodo: () => dispatch(initialCreateTodo()),
  onChangeTodoName: (name: Todo['username']) => dispatch(changeTodoName(name)),
  onChangeTodoHasAttachment: (hasAttachment: Todo['hasAttachment']) => dispatch(changeTodoHasAttachment(hasAttachment)),
  onChangeTodoIsDone: (isDone: Todo['isDone']) => dispatch(changeTodoIsDone(isDone)),
  history,
});

type TodoPageProps = {
  todoId: TodoInfo['id'],
  deleteTodo: (id: TodoInfo['id']) => void,
  loadTodo: (id: TodoInfo['id']) => void,
  postTodo: (body: Todo) => void,
  onChangeTodoName: (name: Todo['username']) => void,
  onChangeTodoHasAttachment: (hasAttachment: Todo['hasAttachment']) => void,
  onChangeTodoIsDone: (isDone: Todo['isDone']) => void,
  initialCreateTodo: () => void,
  todo: Todo,
  history: any,
};

/**
 * Компонент создания/редактирования todo
 * 
 * @param todoId - todo id
 * @param todo - данные todo
 * @param loadTodo - фукция загрузки todo
 * @param postTodo - фукция обновления/создания todo
 * @param deleteTodo - фукция удаления todo
 * @param onChangeTodoHasAttachment - изменение поля hasAttachment
 * @param onChangeTodoIsDone - изменения поля isDone todo
 * @param onChangeTodoName - todoизменение имени todo
 * @param initialCreateTodo - обнуление полей при создании нового todo
 * @param history - история react-router
 */
const TodoPage: React.FC<TodoPageProps> = ({
  todoId,
  todo,
  loadTodo,
  postTodo,
  deleteTodo,
  onChangeTodoHasAttachment,
  onChangeTodoIsDone,
  onChangeTodoName,
  initialCreateTodo,
  history,
}) => {
  const {
    id,
    todo: todoName,
    isDone,
    hasAttachment,
  } = todo;

  const handleChangeTodoName = (e: any) => {
    onChangeTodoName(e.target.value);
  };

  const handleChangeTodoIsDone = (e: any) => {
    onChangeTodoIsDone(e.target.checked);
  };

  const handleChangeTodoHasAttachment = (e: any) => {
    onChangeTodoHasAttachment(e.target.checked);
  };

  const onControlButtonClick = (type: CONTROL_BUTTONS_TYPES): void => {
    switch (type) {
      case CONTROL_BUTTONS_TYPES.SAVE: {
        postTodo(todo);
      }

      case CONTROL_BUTTONS_TYPES.SAVE: {
        deleteTodo(id);
      }
    }

    history.push('/');
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
        <ControlButton
          type={CONTROL_BUTTONS_TYPES.SAVE} 
          onClick={() => onControlButtonClick(CONTROL_BUTTONS_TYPES.SAVE)}
        />
        {id && <ControlButton
            type={CONTROL_BUTTONS_TYPES.DELETE}
            onClick={() => onControlButtonClick(CONTROL_BUTTONS_TYPES.SAVE)}
          />
        }
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);