import React from 'react';
import {observer} from 'mobx-react-lite';
import todo from '../../../store/TodoStore';
import './createTodo.scss';
interface ICreateTodo {
	modalVisible: (modal: boolean) => void;
}

const CreateTodo = observer(({modalVisible}: ICreateTodo) => {
	// console.log('userId', todo.userId);
	// console.log('title', todo.title);
	const handleCreateTodo = () => {
		todo.addTodo({
			userId: Number(todo.userId),
			title: todo.title,
			id: todo.todos.length + 1,
			completed: false,
		});
		todo.changeTitle('');
		todo.changeUserId('');
		modalVisible(false);
	};
	return (
		<div className='createTodo'>
			<div onClick={() => modalVisible(false)} className='createTodo__close'>
				close
			</div>
			<input
				onChange={(e) => todo.changeTitle(e.target.value)}
				className='createTodo__input'
				type='text'
				value={todo.title}
				placeholder='title todo'
			/>
			<input
				onChange={(e) => todo.changeUserId(e.target.value)}
				className='createTodo__input'
				type='text'
				value={todo.userId}
				placeholder='userId'
			/>
			<button
				onClick={handleCreateTodo}
				className='counter__button createTodo__button'>
				Create Todo
			</button>
		</div>
	);
});

export default CreateTodo;
