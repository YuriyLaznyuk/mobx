import React from 'react';
import './app.scss';
import Counter from './components/Counter/Counter';
const App = () => {
	return (
		<div className='app'>
			<h1 className='app__title'>React MobX</h1>
			<Counter />
		</div>
	);
};

export default App;
