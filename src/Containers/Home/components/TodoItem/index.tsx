import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import { fetchDeleteTodo } from 'actions/apiTodos';

import s from './style.css';

type TodoItemProps = {
  id: number,
  todo: string,
  deleteTodo: (id: TodoInfo['id']) => void,
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteTodo: (id: TodoInfo['id']) => dispatch(fetchDeleteTodo(id)),
});

/**
 * Компонент todo для списка на главной странице
 * 
 * @param id - id todo
 * @param todo - инфо о todo
 * @param deleteTodo - функция удаления todo по id
 */
const TodoItem: React.FC<TodoItemProps> = ({id, todo, deleteTodo}) => {
  const onDeleteTodo = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTodo(id);
  };
  
  return (
    <Link to={`/todo/${id}`} className={s.container}>
      <div>
        {todo}
      </div>
      <div
        onClick={(e) => onDeleteTodo(e)}
        className={s.delete}
      >
        <img src="https://img.icons8.com/android/24/000000/trash.png"/>
      </div>
    </Link>
  );
};

export default connect(null, mapDispatchToProps)(TodoItem);