import React from 'react';
import {observer} from 'mobx-react-lite';
import todo from '../../store/TodoStore';
import './todo.scss';

const Todo = observer(() => {
	return (
		<div className='todo'>
			<div className='todo__button'>
				<button onClick={todo.fetchTodos} className='todo__button-btn'>
					FetchTodo
				</button>
			</div>
			<div className='todo__list'>
				{todo.todos.map((item) => (
					<div className='todo__list-item' key={item.id}>
						<div className='todo__list-item-title'>{item.userId}</div>
						<div className='todo__list-item-title'>{item.title}</div>
						<div className='todo__list-item-title'>
							{item.completed ? 'completed' : 'no completed'}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Todo;
