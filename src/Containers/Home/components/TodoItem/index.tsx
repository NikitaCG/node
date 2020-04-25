import React from 'react';
import { Link } from 'react-router-dom';

import s from './style.css';

type TodoItemProps = {
  id: number,
  todo: string,
};

const TodoItem: React.FC<TodoItemProps> = ({id, todo}) => {

  const deleteTodo = () => {
    console.log(id);
  };
  
  return (
    <Link to={`/todo/${id}`} className={s.container}>
      <div>
        {todo}
      </div>
      <div
       onClick={deleteTodo}
       className={s.delete}
      >
        <img src="https://img.icons8.com/android/24/000000/trash.png"/>
      </div>
    </Link>
  );
};

export default TodoItem;