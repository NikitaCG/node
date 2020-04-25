import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchTodos } from '../../actions/fetchTodos';

import TodoAddButton from './components/TodoAddButton';
import TodoItem from './components/TodoItem';

import s from './style.css';

const mapStateToProps = (state: any) => ({
  todosInfo: state.todos.todosInfo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadTodos: () => dispatch(fetchTodos('test')),
});

type HomeProps = {
  todosInfo: TodoInfo[],
  loadTodos: () => void,
};

const Home: React.FC<HomeProps> = ({
  todosInfo,
  loadTodos,
}) => {
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.user}>Todos by user: test</div>
      <div className={s.content}>
        {todosInfo.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        <TodoAddButton />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);