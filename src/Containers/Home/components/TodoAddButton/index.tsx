import React from 'react';
import { Link } from 'react-router-dom';

import s from './style.css';

/**
 * Кнопка создания нового todo
 */
const TodoAddButton: React.FC = () => (
  <Link to="/create/">
    <div className={s.addContainer}>
      <div className={s.add}>+</div>
    </div>
  </Link>
);

export default TodoAddButton;