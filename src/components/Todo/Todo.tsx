import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import todo from '../../store/TodoStore';
import './todo.scss';
import Modal from '../../UI/Modal/Modal';
import CreateTodo from './CreateTodo/CreateTodo';

const Todo = observer(() => {
	const [addTodo, setAddTodo] = useState<boolean>(false);
	return (
		<div className='todo'>
			{addTodo && (
				<Modal modalVisible={setAddTodo}>
					<CreateTodo modalVisible={setAddTodo} />
				</Modal>
			)}
			<div className='todo__button'>
				<button onClick={todo.fetchTodos} className='todo__button-btn'>
					FetchTodo
				</button>
				<button onClick={() => setAddTodo(true)} className='todo__button-btn'>
					Add Todo
				</button>
			</div>
			<div className='todo__list'>
				{todo.error}
				{todo.loading}
				{todo.todos.map((item) => (
					<div className='todo__list-item' key={item.id}>
						<div className='todo__list-item-title'>{item.id}</div>
						<div className='todo__list-item-title'>{item.title}</div>
						<div className='todo__list-item-title'>
							{item.completed ? 'completed' : 'no completed'}
						</div>
						<div className='todo__list-item-title'>
							<input
								type='checkbox'
								checked={item.completed}
								onChange={() => todo.completedTodo(item.id)}
							/>
						</div>
						<div className='todo__list-item-title'>
							<button
								className='todo__button-btn'
								onClick={() => todo.deleteTodo(item.id)}>
								DELETE
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Todo;
