import React from 'react';
import './app.scss';
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';
const App = () => {
	return (
		<div className='app'>
			<h1 className='app__title'>React MobX</h1>
			<Counter />
			<Todo />
		</div>
	);
};

export default App;
