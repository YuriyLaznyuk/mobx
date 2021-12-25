import {makeAutoObservable} from 'mobx';
interface ITodos {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
class TodoStore {
	todos: ITodos[] = [];
	constructor() {
		makeAutoObservable(this);
	}

	addTodo(todo: ITodos) {
		this.todos.push(todo);
	}

	deleteTodo(id: number) {
		this.todos.filter((todo) => todo.id !== id);
	}

	completedTodo(id: number) {
		this.todos.map((todo) =>
			todo.id === id ? (todo.completed = !todo.completed) : todo,
		);
	}

	fetchTodos = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const json = await response.json();
		this.todos = [...this.todos, ...json];
	};
}
export default new TodoStore();
